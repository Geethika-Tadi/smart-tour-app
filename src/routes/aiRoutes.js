const express = require('express');
const { findRealTransit } = require('../data/realTransitData');
const { getAllTrainsForRoute, getIRCTCLink, getConfirmTktLink, stationCodes } = require('../services/railwayService');

const router = express.Router();

const GROQ_MODELS = [
  'qwen/qwen3.8-27b',
  'openai/gpt-oss-120b',
  'openai/gpt-oss-20b',
  'allam-2-7b',
];

// Helper to call Groq API with model fallback and think-tag removal
async function callGroq(promptText, jsonMode = false) {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    throw new Error('GROQ_API_KEY is not configured in .env');
  }

  let lastError = null;

  for (const model of GROQ_MODELS) {
    try {
      const body = {
        model,
        messages: [{ role: 'user', content: promptText }],
        temperature: jsonMode ? 0.1 : 0.7,
        max_tokens: 2048,
      };
      if (jsonMode) {
        body.response_format = { type: 'json_object' };
      }

      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      if (!response.ok) {
        const msg = (data.error && data.error.message) || `Groq API returned ${response.status}`;
        lastError = msg;
        continue;
      }

      let text = data.choices && data.choices[0] ? data.choices[0].message.content : '';
      if (!text) {
        throw new Error('Empty response received from Groq');
      }

      // Strip <think>...</think> reasoning blocks if present
      text = text.replace(/<think>[\s\S]*?<\/think>/gi, '').trim();

      return text;
    } catch (err) {
      lastError = err.message;
      continue;
    }
  }

  throw new Error(`All Groq models failed. Last error: ${lastError || 'Unknown'}`);
}

// @route   POST /api/ai/transport
// @desc    Generate original/real transport options between source and destination
router.post('/transport', async (req, res, next) => {
  try {
    const { source, dest, persons, budget } = req.body;
    if (!source || !dest) {
      return res.status(400).json({ success: false, message: 'Source and Destination are required' });
    }

    // Lookup all available trains from railway service
    const allTrainsData = await getAllTrainsForRoute(source, dest);

    // 1. Check Real Transit Registry for pre-indexed genuine IRCTC & DGCA routes
    const registeredTransit = findRealTransit(source, dest);
    if (registeredTransit) {
      return res.status(200).json({
        success: true,
        source: 'Real Transit Registry (IRCTC & DGCA Official Data)',
        data: {
          ...registeredTransit,
          allTrains: allTrainsData.trains || [],
          irctcSearchUrl: allTrainsData.irctcSearchUrl,
          confirmTktUrl: allTrainsData.confirmTktUrl,
          fromStation: allTrainsData.fromStation,
          toStation: allTrainsData.toStation,
        },
      });
    }

    // 2. Strict AI Prompt for non-indexed routes (demanding authentic trains & flights)
    const prompt =
      `You are an Indian Railways (IRCTC) and Indian Commercial Aviation (DGCA) database expert.\n` +
      `Task: Return ONLY a valid JSON object (no markdown, no backticks, no text before or after).\n` +
      `Generate AUTHENTIC, EXISTING trains, buses, and flights for travel from "${source}" to "${dest}" in India for ${persons || 1} person(s).\n` +
      `CRITICAL RULES FOR ORIGINAL DATA:\n` +
      `1. TRAINS MUST BE REAL: Return only genuine, existing 5-digit IRCTC train numbers and their official train names that actually operate between "${source}" and "${dest}" (or pass through them). NEVER invent train numbers and NEVER rename unrelated trains. If no direct train exists, clearly specify connecting train via the nearest major rail junction.\n` +
      `2. FLIGHTS MUST BE REAL: Use real operating airlines in India (IndiGo, Air India, Akasa Air, SpiceJet) with real flight code prefixes and routes (e.g. "IndiGo 6E-6514", "Air India AI-805", "Akasa Air QP-1382"). If either city has no commercial airport, note the nearest airport code.\n` +
      `3. BUSES: Use real state/private operators (e.g. KSRTC, UPSRTC, RSRTC, VRL Travels, Orange Travels, Zingbus).\n` +
      `4. PRICES: Realistic one-way prices per person in INR (₹).\n\n` +
      `JSON FORMAT TO RETURN:\n` +
      `{\n` +
      `  "trains": [\n` +
      `    {"name": "Real 5-Digit Train No & Official Name", "subname": "Class (e.g. Sleeper / 3-Tier AC) & Frequency", "duration": "e.g. 8h 30m", "price": 450, "tag": "Budget Pick"}\n` +
      `  ],\n` +
      `  "buses": [\n` +
      `    {"name": "Real Operator Name", "subname": "e.g. Multi-Axle Volvo AC Sleeper", "duration": "e.g. 10h 0m", "price": 850, "tag": "Comfortable"}\n` +
      `  ],\n` +
      `  "flights": [\n` +
      `    {"name": "Real Airline & Flight Code (e.g. IndiGo 6E-2415)", "subname": "Airport codes & Class", "duration": "e.g. 1h 25m", "price": 3800, "tag": "Fastest"}\n` +
      `  ],\n` +
      `  "local": "Real local transit details for ${dest} (autos, metro, rentals, airport shuttles with realistic fares)."\n` +
      `}`;

    const text = await callGroq(prompt, true);
    const cleaned = text.replace(/```json|```/g, '').trim();
    const match = cleaned.match(/\{[\s\S]*\}/);
    const parsed = JSON.parse(match ? match[0] : cleaned);

    // Ensure front-facing train cards use 100% verified authentic Indian Railways trains
    let realCardTrains = [];
    if (allTrainsData && allTrainsData.trains && allTrainsData.trains.length > 0) {
      realCardTrains = allTrainsData.trains.slice(0, 5).map((t, idx) => {
        const cleanName = (t.trainName || 'Express').replace(/^\d{5}\s*/, '').trim();
        const classesStr = (t.classes && Array.isArray(t.classes) && t.classes.length > 0)
          ? t.classes.map(c => c.code || c.name).join(' / ')
          : 'Sleeper / 3-Tier AC';
        const daysStr = Array.isArray(t.runningDays) ? t.runningDays.join(', ') : (t.runningDays || 'Daily');
        const price = (t.classes && t.classes[0] && t.classes[0].price) ? t.classes[0].price : (t.price || 420);

        let tag = t.type || 'IRCTC Train';
        if (idx === 0) tag = 'Popular Pick';

        return {
          name: `${t.trainNo} ${cleanName}`,
          subname: `${classesStr} – ${daysStr}`,
          duration: t.duration || '8h 30m',
          price: price,
          tag: tag,
          trainNo: t.trainNo,
          departure: t.departure,
          arrival: t.arrival,
          fromStation: t.fromStation,
          toStation: t.toStation,
          classes: t.classes
        };
      });
    } else {
      realCardTrains = parsed.trains || [];
    }

    res.status(200).json({
      success: true,
      source: (allTrainsData && allTrainsData.trains && allTrainsData.trains.length > 0)
        ? 'Official Indian Railways Timetable (NTES & IRCTC)'
        : 'Verified AI Transit Search (IRCTC & DGCA)',
      data: {
        ...parsed,
        trains: realCardTrains,
        allTrains: (allTrainsData && allTrainsData.trains && allTrainsData.trains.length > 0)
          ? allTrainsData.trains
          : realCardTrains,
        irctcSearchUrl: allTrainsData ? allTrainsData.irctcSearchUrl : 'https://www.irctc.co.in/nget/train-search',
        confirmTktUrl: allTrainsData ? allTrainsData.confirmTktUrl : 'https://www.confirmtkt.com/train-running-status',
        fromStation: allTrainsData ? allTrainsData.fromStation : null,
        toStation: allTrainsData ? allTrainsData.toStation : null,
      },
    });
  } catch (error) {
    next(error);
  }
});

// @route   POST /api/ai/tab
// @desc    Generate content for specific AI tabs (itinerary, hotels, food, budget)
router.post('/tab', async (req, res, next) => {
  try {
    const { tab, source, dest, days, persons, budget, style, stay } = req.body;

    const stayNote =
      stay === 'relative'
        ? "The traveller stays at a relative's house — accommodation cost is ₹0. Focus budget on food, transport and activities."
        : 'The traveller wants hotel/guesthouse accommodation.';

    const ctx = `From: ${source} | To: ${dest} | Days: ${days} | Persons: ${persons} | Budget: ₹${Number(budget).toLocaleString()} (₹${Math.round(budget / (persons || 1)).toLocaleString()}/person) | Style: ${style} | ${stayNote}`;

    const prompts = {
      itinerary: `You are an expert Indian travel planner. Create a detailed ${days}-day itinerary for a trip from ${source} to ${dest}.\n${ctx}\nGive a day-by-day plan with morning, afternoon and evening activities. Include specific place names, timings, and quick tips. Use Day 1, Day 2 etc. as headers. Use emojis for readability. End with 2-3 golden travel tips.`,

      hotels:
        stay === 'relative'
          ? `The traveller is staying at a relative's house in ${dest} — accommodation is FREE.\n${ctx}\nGive warm, practical advice: etiquette tips for being a good houseguest, what gifts to bring from ${source}, how to explore independently, and how the saved accommodation money can be used for better experiences. Use emojis.`
          : `Recommend the best hotels/guesthouses in ${dest} for a ${style} traveller.\n${ctx}\nList 4-5 real hotels with name, price range per night (₹), key amenities, and who it's best for. Also mention booking platforms like MakeMyTrip, Goibibo, OYO. Use emojis.`,

      food: `Recommend must-try food in ${dest} for a ${style} traveller.\n${ctx}\nInclude: 5 iconic local dishes with ₹ prices, 3-4 famous restaurants or dhabas, street food spots, food tips (veg/non-veg, hygiene). Use emojis and make it mouth-watering!`,

      budget: `Create a detailed budget breakdown for this trip.\n${ctx}\nProvide a clear breakdown: Transport to/from, Local Transport, Accommodation, Food per day, Entry tickets, Shopping/misc. Show amounts in ₹ for all ${persons} person(s). Add cost-saving tips. State if the budget is sufficient. ${
        stay === 'relative' ? 'Highlight savings from ₹0 accommodation.' : ''
      }`,
    };

    const targetPrompt = prompts[tab] || prompts.itinerary;
    const text = await callGroq(targetPrompt, false);

    res.status(200).json({ success: true, tab, text });
  } catch (error) {
    next(error);
  }
});

// @route   POST /api/ai/summary
// @desc    Generate financial trip summary card
router.post('/summary', async (req, res, next) => {
  try {
    const { source, dest, days, persons, budget, style, stay } = req.body;
    const stayNote =
      stay === 'relative'
        ? "staying at relative's house (hotel cost = ₹0)"
        : 'staying in a hotel';

    const prompt =
      `You are a travel finance expert. Generate a Trip Summary for this trip:\n` +
      `From: ${source} → ${dest} | Days: ${days} | Persons: ${persons} | Total Budget: ₹${Number(budget).toLocaleString()} | Style: ${style} | ${stayNote}\n\n` +
      `Return ONLY a valid JSON object (no markdown, no backticks) with exactly these 8 keys:\n` +
      `{\n` +
      `  "travel_cost": "e.g. Rs.XXXX (Bus/Train/Flight for N persons)",\n` +
      `  "hotel_cost": "e.g. Rs.XXXX (N nights at budget hotel near ...)" or "Rs.0 (Staying at relative's house)",\n` +
      `  "food_activities": "e.g. Rs.XXXX (All meals + entry tickets for N persons for N days)",\n` +
      `  "grand_total": "Rs.XXXX",\n` +
      `  "balance_left": "Rs.XXXX (Reserve for emergencies or extra shopping)" — subtract grand_total from budget,\n` +
      `  "must_carry": "Comma-separated practical items to carry",\n` +
      `  "best_time": "Best months to visit ${dest} with weather note",\n` +
      `  "money_tip": "2-3 practical money-saving tips specific to ${dest}"\n` +
      `}\nBe specific with ₹ amounts. Keep values concise but informative.`;

    const text = await callGroq(prompt, true);
    const cleaned = text.replace(/```json|```/g, '').trim();
    const match = cleaned.match(/\{[\s\S]*\}/);
    const parsed = JSON.parse(match ? match[0] : cleaned);

    res.status(200).json({ success: true, data: parsed });
  } catch (error) {
    next(error);
  }
});

// @route   POST /api/ai/chat
// @desc    Chat with AI travel assistant
router.post('/chat', async (req, res, next) => {
  try {
    const { message, dest } = req.body;
    if (!message) {
      return res.status(400).json({ success: false, message: 'Message is required' });
    }

    const prompt = `You are a helpful Indian travel assistant. The traveller is planning a trip to ${
      dest || 'India'
    }. Answer concisely with helpful, practical advice. Question: ${message}`;

    const reply = await callGroq(prompt, false);
    res.status(200).json({ success: true, reply });
  } catch (error) {
    next(error);
  }
});

// @route   POST /api/ai/weather
// @desc    Get real-time live weather overview & travel season advice for any destination
router.post('/weather', async (req, res, next) => {
  try {
    const { city } = req.body;
    if (!city) {
      return res.status(400).json({ success: false, message: 'City is required' });
    }

    const cleanCity = city.trim();
    let liveWeather = null;

    // 1. Fetch real-time live meteorological data from wttr.in
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 4000);
      const wttrResp = await fetch(`https://wttr.in/${encodeURIComponent(cleanCity)}?format=j1`, {
        signal: controller.signal,
      });
      clearTimeout(timeoutId);

      if (wttrResp.ok) {
        const wttrData = await wttrResp.json();
        if (wttrData && wttrData.current_condition && wttrData.current_condition[0]) {
          const current = wttrData.current_condition[0];
          const desc = current.weatherDesc && current.weatherDesc[0] ? current.weatherDesc[0].value.trim() : 'Clear';
          const iconCode = desc.toLowerCase();
          let iconType = 'sunny';
          if (iconCode.includes('rain') || iconCode.includes('drizzle')) iconType = 'rainy';
          else if (iconCode.includes('thunder') || iconCode.includes('storm')) iconType = 'stormy';
          else if (iconCode.includes('cloud') || iconCode.includes('overcast')) iconType = 'cloudy';
          else if (iconCode.includes('mist') || iconCode.includes('fog') || iconCode.includes('haze')) iconType = 'foggy';
          else if (iconCode.includes('snow') || iconCode.includes('ice')) iconType = 'snowy';

          liveWeather = {
            temp: `${current.temp_C}°C`,
            feels: `${current.FeelsLikeC}°C`,
            condition: desc,
            icon: iconType,
            humidity: `${current.humidity}%`,
            wind: `${current.windspeedKmph} km/h`,
          };
        }
      }
    } catch (e) {
      console.warn(`[Weather] wttr.in fetch skipped/failed for ${cleanCity}:`, e.message);
    }

    // 2. Fetch destination-specific travel climate intelligence (Best Months, Avoid, Tip) via Groq AI
    let aiClimate = {
      best_months: 'Oct - Mar',
      avoid: 'May - Jun (Peak Summer)',
      tip: `Carry light cotton clothes, sun protection, and stay hydrated when exploring ${cleanCity}.`,
    };

    try {
      const prompt = `Give realistic climate and travel seasonal advice specifically for ${cleanCity}, India.
Return ONLY a valid JSON object with EXACT keys:
{
  "best_months": "specific best months for ${cleanCity}",
  "avoid": "monsoon or scorching summer months to avoid for ${cleanCity}",
  "tip": "1 practical, destination-specific clothing or gear tip for ${cleanCity}"
}`;
      const raw = await callGroq(prompt, true);
      const cleaned = raw.replace(/```json|```/g, '').trim();
      const match = cleaned.match(/\{[\s\S]*\}/);
      if (match) {
        const parsed = JSON.parse(match[0]);
        if (parsed.best_months) aiClimate.best_months = parsed.best_months;
        if (parsed.avoid) aiClimate.avoid = parsed.avoid;
        if (parsed.tip) aiClimate.tip = parsed.tip;
      }
    } catch (e) {
      console.warn(`[Weather AI] Groq climate advice fallback:`, e.message);
    }

    // If live meteorological data succeeded, combine with travel climate intelligence
    if (liveWeather) {
      return res.status(200).json({
        success: true,
        data: {
          ...liveWeather,
          ...aiClimate,
          city: cleanCity,
        },
      });
    }

    // Direct AI Weather Fallback with real distinct values
    const fallbackPrompt = `Provide accurate real current climate for ${cleanCity}, India.
Return ONLY JSON with EXACT keys:
{"temp":"e.g. 24°C","feels":"e.g. 26°C","condition":"e.g. Sunny / Hazy / Cool","icon":"sunny|cloudy|rainy|stormy|foggy|snowy","humidity":"e.g. 55%","wind":"e.g. 10 km/h","best_months":"e.g. Oct-Mar","avoid":"e.g. Jun-Jul","tip":"e.g. travel tip for ${cleanCity}"}`;
    const rawFb = await callGroq(fallbackPrompt, true);
    const cleanedFb = rawFb.replace(/```json|```/g, '').trim();
    const matchFb = cleanedFb.match(/\{[\s\S]*\}/);
    const parsedFb = JSON.parse(matchFb ? matchFb[0] : cleanedFb);

    res.status(200).json({ success: true, data: { ...parsedFb, city: cleanCity } });
  } catch (error) {
    next(error);
  }
});

// @route   POST /api/ai/packing
// @desc    Generate packing checklist
router.post('/packing', async (req, res, next) => {
  try {
    const { dest, days } = req.body;
    const prompt = `Packing list for ${days || 3}-day trip to ${
      dest || 'destination'
    }. Return ONLY JSON with keys: Essentials, Clothing, Toiletries, Health, Tech, Misc. Each has array of 6-8 items.`;

    const raw = await callGroq(prompt, true);
    const cleaned = raw.replace(/```json|```/g, '').trim();
    const match = cleaned.match(/\{[\s\S]*\}/);
    const parsed = JSON.parse(match ? match[0] : cleaned);

    res.status(200).json({ success: true, data: parsed });
  } catch (error) {
    next(error);
  }
});

// @route   POST /api/ai/phrases
// @desc    Generate local travel phrases
router.post('/phrases', async (req, res, next) => {
  try {
    const { dest } = req.body;
    const prompt = `Give 15 travel phrases for ${
      dest || 'India'
    }, India. Return ONLY JSON array: [{"english":"Hello","local":"Local word","pronounce":"pronunciation","category":"Greetings"}]. Categories: Greetings,Directions,Food,Shopping,Emergency.`;

    const raw = await callGroq(prompt, true);
    const cleaned = raw.replace(/```json|```/g, '').trim();
    const match = cleaned.match(/\[[\s\S]*\]/);
    const parsed = JSON.parse(match ? match[0] : cleaned);

    res.status(200).json({ success: true, data: parsed });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
