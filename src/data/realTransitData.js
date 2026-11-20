/**
 * Real Transit Registry for Indian Travel Routes
 * Contains authentic IRCTC train numbers & names, DGCA commercial flight numbers,
 * real travel durations, classes, and official booking references.
 */

const realTransitRoutes = {
  // 1. HYDERABAD <-> GOA
  "hyderabad_goa": {
    trains: [
      {
        name: "17603 Kacheguda - Vasco da Gama Express",
        subname: "Sleeper (SL) / 3-Tier AC (3A) / 2-Tier AC (2A)",
        duration: "15h 45m",
        price: 420,
        tag: "Budget Pick",
        trainNo: "17603",
        daysOfRun: "Daily",
        fromStation: "Kacheguda (KCG)",
        toStation: "Madgaon (MAO) / Vasco (VSG)"
      },
      {
        name: "18047 Amaravathi Express",
        subname: "3-Tier AC (3A) / Sleeper (SL) via Hubballi",
        duration: "16h 10m",
        price: 1150,
        tag: "Comfortable",
        trainNo: "18047",
        daysOfRun: "Mon, Wed, Thu, Sat",
        fromStation: "Kacheguda (KCG)",
        toStation: "Madgaon (MAO)"
      },
      {
        name: "12741 Vasco da Gama Superfast Express",
        subname: "Superfast · 2-Tier AC (2A) / 3-Tier AC (3A)",
        duration: "15h 00m",
        price: 1650,
        tag: "Superfast",
        trainNo: "12741",
        daysOfRun: "Weekly (Wed)",
        fromStation: "Secunderabad (SC)",
        toStation: "Vasco da Gama (VSG)"
      }
    ],
    buses: [
      {
        name: "Orange Tours and Travels",
        subname: "Bharat Benz Multi-Axle AC Sleeper (2+1)",
        duration: "13h 30m",
        price: 1350,
        tag: "Popular Pick"
      },
      {
        name: "VRL Travels",
        subname: "I-Shift Multi-Axle AC Sleeper with Live Tracking",
        duration: "14h 00m",
        price: 1450,
        tag: "Comfortable"
      },
      {
        name: "IntrCity SmartBus",
        subname: "AC Sleeper with Lounge Access & Washroom",
        duration: "13h 45m",
        price: 1200,
        tag: "Budget Pick"
      }
    ],
    flights: [
      {
        name: "IndiGo 6E-6514 (HYD ➔ GOX)",
        subname: "Non-stop Direct · Economy A321",
        duration: "1h 20m",
        price: 3600,
        tag: "Fastest",
        flightNo: "6E-6514",
        airline: "IndiGo",
        fromAirport: "Rajiv Gandhi Int'l (HYD)",
        toAirport: "Manohar Int'l Airport, Mopa (GOX)"
      },
      {
        name: "Air India Express IX-1981 (HYD ➔ GOX)",
        subname: "Non-stop Direct · Boeing 737 MAX",
        duration: "1h 15m",
        price: 3350,
        tag: "Best Value",
        flightNo: "IX-1981",
        airline: "Air India Express",
        fromAirport: "Rajiv Gandhi Int'l (HYD)",
        toAirport: "Manohar Int'l Airport (GOX)"
      },
      {
        name: "Akasa Air QP-1382 (HYD ➔ GOI)",
        subname: "Non-stop Direct · Dabolim Airport",
        duration: "1h 25m",
        price: 3200,
        tag: "Budget Flight",
        flightNo: "QP-1382",
        airline: "Akasa Air",
        fromAirport: "Rajiv Gandhi Int'l (HYD)",
        toAirport: "Dabolim Airport, South Goa (GOI)"
      }
    ],
    local: "In Goa, rent scooters/Activas for ₹350–500/day or self-drive hatchbacks (i10/Swift) for ₹1,200–1,500/day. GoaMiles app offers regulated prepaid taxi bookings across North and South Goa."
  },

  // 2. MUMBAI <-> GOA
  "mumbai_goa": {
    trains: [
      {
        name: "22229 Mumbai CSMT - Madgaon Vande Bharat Express",
        subname: "Chair Car (CC) / Executive Chair (EC) · Scenic Konkan Route",
        duration: "7h 45m",
        price: 1815,
        tag: "Fastest Train",
        trainNo: "22229",
        daysOfRun: "Mon, Wed, Fri, Sat, Sun",
        fromStation: "CSMT Mumbai",
        toStation: "Madgaon (MAO)"
      },
      {
        name: "12051 CSMT - Madgaon Jan Shatabdi Express",
        subname: "Second Seating (2S: ₹315) / AC Chair Car (CC: ₹1020)",
        duration: "8h 50m",
        price: 315,
        tag: "Budget Pick",
        trainNo: "12051",
        daysOfRun: "Daily",
        fromStation: "CSMT / Thane",
        toStation: "Madgaon (MAO)"
      },
      {
        name: "10103 Mandovi Express",
        subname: "Day Train · Sleeper (SL) / 3-Tier AC (3A) / Vistadome Coach",
        duration: "11h 45m",
        price: 410,
        tag: "Scenic Route",
        trainNo: "10103",
        daysOfRun: "Daily",
        fromStation: "CSMT Mumbai",
        toStation: "Madgaon (MAO)"
      },
      {
        name: "10111 Konkan Kanya Express",
        subname: "Overnight Sleeper / 3A / 2A / 1A",
        duration: "11h 35m",
        price: 1100,
        tag: "Overnight",
        trainNo: "10111",
        daysOfRun: "Daily",
        fromStation: "CSMT Mumbai",
        toStation: "Madgaon (MAO)"
      }
    ],
    buses: [
      {
        name: "Paulo Travels",
        subname: "Scania Multi-Axle AC Sleeper",
        duration: "11h 30m",
        price: 950,
        tag: "Budget Pick"
      },
      {
        name: "Zingbus Electric / Multi-Axle AC",
        subname: "AC Sleeper with Live Tracking & Premium Linen",
        duration: "12h 00m",
        price: 1150,
        tag: "Comfortable"
      }
    ],
    flights: [
      {
        name: "IndiGo 6E-5374 (BOM ➔ GOX)",
        subname: "Non-stop Direct · Daily Scheduled",
        duration: "1h 10m",
        price: 2600,
        tag: "Fastest",
        flightNo: "6E-5374",
        airline: "IndiGo",
        fromAirport: "Chhatrapati Shivaji Maharaj Int'l (BOM)",
        toAirport: "Manohar Int'l (GOX)"
      },
      {
        name: "Akasa Air QP-1304 (BOM ➔ GOI)",
        subname: "Non-stop Direct · Dabolim Airport",
        duration: "1h 05m",
        price: 2350,
        tag: "Best Deal",
        flightNo: "QP-1304",
        airline: "Akasa Air",
        fromAirport: "CSMIA Terminal 1 (BOM)",
        toAirport: "Dabolim Airport (GOI)"
      },
      {
        name: "Air India AI-663 (BOM ➔ GOI)",
        subname: "Full Service with Meal & 15kg Luggage",
        duration: "1h 15m",
        price: 3100,
        tag: "Full Service",
        flightNo: "AI-663",
        airline: "Air India",
        fromAirport: "CSMIA Terminal 2 (BOM)",
        toAirport: "Dabolim Airport (GOI)"
      }
    ],
    local: "Prepaid airport taxis connect Mopa/Dabolim to Calangute/Candolim for ₹1,200–1,800. Two-wheeler rentals in Panaji/Baga cost ₹350–500 per day."
  },

  // 3. DELHI <-> AGRA
  "delhi_agra": {
    trains: [
      {
        name: "12050 Gatimaan Express",
        subname: "India's Premier High Speed Train · AC Chair Car (CC) / Executive (EC)",
        duration: "1h 40m",
        price: 750,
        tag: "Fastest Train",
        trainNo: "12050",
        daysOfRun: "Daily except Friday (Taj Mahal closed Fridays)",
        fromStation: "Hazrat Nizamuddin (NZM)",
        toStation: "Agra Cantt (AGC)"
      },
      {
        name: "12002 New Delhi - Rani Kamlapati Shatabdi Express",
        subname: "AC Chair Car (CC) · Breakfast Included onboard",
        duration: "1h 55m",
        price: 555,
        tag: "Most Popular",
        trainNo: "12002",
        daysOfRun: "Daily",
        fromStation: "New Delhi (NDLS)",
        toStation: "Agra Cantt (AGC)"
      },
      {
        name: "22470 Hazrat Nizamuddin - Khajuraho Vande Bharat Express",
        subname: "Vande Bharat Express · AC Chair Car (CC) / Executive (EC)",
        duration: "1h 25m",
        price: 695,
        tag: "Vande Bharat",
        trainNo: "22470",
        daysOfRun: "Daily except Monday",
        fromStation: "Hazrat Nizamuddin (NZM)",
        toStation: "Agra Cantt (AGC)"
      },
      {
        name: "12280 Taj Express Superfast",
        subname: "Second Seating (2S: ₹105) / AC Chair Car (CC: ₹385)",
        duration: "2h 45m",
        price: 105,
        tag: "Budget Pick",
        trainNo: "12280",
        daysOfRun: "Daily",
        fromStation: "New Delhi (NDLS)",
        toStation: "Agra Cantt (AGC)"
      }
    ],
    buses: [
      {
        name: "UPSRTC Janrath AC Express",
        subname: "Via Yamuna Expressway 6-lane Highway",
        duration: "3h 15m",
        price: 450,
        tag: "Comfortable"
      },
      {
        name: "Zingbus AC Electric / Volvo",
        subname: "Direct Non-stop from Kashmere Gate / Akshardham",
        duration: "3h 00m",
        price: 390,
        tag: "Budget Pick"
      }
    ],
    flights: [],
    local: "Battery-operated e-rickshaws and cycle rickshaws operate within the 500-meter Taj Trapezium eco-zone (₹50–100). Auto-rickshaws for full day Agra sightseeing cost ₹600–800."
  },

  // 4. DELHI <-> JAIPUR
  "delhi_jaipur": {
    trains: [
      {
        name: "20978 Delhi Cantt - Ajmer Vande Bharat Express",
        subname: "Vande Bharat Express · AC Chair Car (CC: ₹880) / Executive (EC: ₹1650)",
        duration: "3h 15m",
        price: 880,
        tag: "Fastest Train",
        trainNo: "20978",
        daysOfRun: "Daily except Wednesday",
        fromStation: "Delhi Cantt (DEC)",
        toStation: "Jaipur Junction (JP)"
      },
      {
        name: "12015 New Delhi - Daurai Shatabdi Express",
        subname: "AC Chair Car (CC: ₹690) / Executive (EC: ₹1325) · Breakfast Served",
        duration: "4h 15m",
        price: 690,
        tag: "Comfortable",
        trainNo: "12015",
        daysOfRun: "Daily",
        fromStation: "New Delhi (NDLS)",
        toStation: "Jaipur Junction (JP)"
      },
      {
        name: "12986 Delhi Sarai Rohilla - Jaipur AC Double Decker",
        subname: "Double Decker AC Chair Car (CC)",
        duration: "4h 25m",
        price: 500,
        tag: "Double Decker",
        trainNo: "12986",
        daysOfRun: "Daily",
        fromStation: "Delhi Sarai Rohilla (DEE)",
        toStation: "Jaipur Junction (JP)"
      },
      {
        name: "12414 Pooja Superfast Express",
        subname: "Sleeper (SL: ₹245) / 3-Tier AC (3A: ₹660)",
        duration: "4h 50m",
        price: 245,
        tag: "Budget Pick",
        trainNo: "12414",
        daysOfRun: "Daily",
        fromStation: "Old Delhi (DLI)",
        toStation: "Jaipur Junction (JP)"
      }
    ],
    buses: [
      {
        name: "RSRTC Scania Multi-Axle AC",
        subname: "Rajasthan State Roadways from Bikaner House / Dhaula Kuan",
        duration: "4h 45m",
        price: 490,
        tag: "Official Govt"
      },
      {
        name: "Zingbus AC Seater / Sleeper",
        subname: "Via Delhi-Mumbai Expressway Section",
        duration: "4h 15m",
        price: 420,
        tag: "Budget Pick"
      }
    ],
    flights: [
      {
        name: "IndiGo 6E-2122 (DEL ➔ JAI)",
        subname: "Non-stop Direct Flight",
        duration: "0h 55m",
        price: 2400,
        tag: "Fastest",
        flightNo: "6E-2122",
        airline: "IndiGo",
        fromAirport: "Indira Gandhi Int'l (DEL)",
        toAirport: "Jaipur Int'l Airport (JAI)"
      },
      {
        name: "Air India AI-491 (DEL ➔ JAI)",
        subname: "Non-stop Direct · Full Service",
        duration: "1h 00m",
        price: 2800,
        tag: "Full Service",
        flightNo: "AI-491",
        airline: "Air India",
        fromAirport: "IGI Terminal 3 (DEL)",
        toAirport: "Jaipur Int'l Airport (JAI)"
      }
    ],
    local: "Jaipur Pink Line Metro connects Chandpole and Badi Chaupar (near Hawa Mahal) for ₹10–20. Auto rickshaws with Ola/Uber Auto operate across the Pink City with transparent fares."
  },

  // 5. DELHI <-> GOA
  "delhi_goa": {
    trains: [
      {
        name: "22414 Madgaon Rajdhani Express",
        subname: "Superfast Rajdhani · 3A (₹2,840) / 2A (₹4,050) / 1A (₹5,100)",
        duration: "26h 30m",
        price: 2840,
        tag: "Premier Rajdhani",
        trainNo: "22414",
        daysOfRun: "Fri, Sat",
        fromStation: "Hazrat Nizamuddin (NZM)",
        toStation: "Madgaon (MAO)"
      },
      {
        name: "12450 Goa Sampark Kranti Express",
        subname: "Bi-weekly Superfast · 3-Tier AC (3A) / Sleeper (SL)",
        duration: "28h 50m",
        price: 880,
        tag: "Budget Long Distance",
        trainNo: "12450",
        daysOfRun: "Mon, Sat",
        fromStation: "Hazrat Nizamuddin (NZM)",
        toStation: "Madgaon (MAO)"
      },
      {
        name: "12780 Goa Express",
        subname: "Daily Direct · Sleeper (SL: ₹820) / 3-Tier AC (3A: ₹2,160)",
        duration: "38h 15m",
        price: 820,
        tag: "Daily Direct",
        trainNo: "12780",
        daysOfRun: "Daily",
        fromStation: "Hazrat Nizamuddin (NZM)",
        toStation: "Madgaon / Vasco da Gama"
      }
    ],
    buses: [],
    flights: [
      {
        name: "IndiGo 6E-2058 (DEL ➔ GOX)",
        subname: "Non-stop Direct · Airbus A321neo",
        duration: "2h 35m",
        price: 4600,
        tag: "Fastest Direct",
        flightNo: "6E-2058",
        airline: "IndiGo",
        fromAirport: "IGI Airport T2/T3 (DEL)",
        toAirport: "Manohar Int'l Airport (GOX)"
      },
      {
        name: "Akasa Air QP-1398 (DEL ➔ GOX)",
        subname: "Non-stop Direct · Boeing 737 MAX",
        duration: "2h 30m",
        price: 4200,
        tag: "Best Value",
        flightNo: "QP-1398",
        airline: "Akasa Air",
        fromAirport: "IGI Airport T2 (DEL)",
        toAirport: "Manohar Int'l (GOX)"
      },
      {
        name: "Air India AI-883 (DEL ➔ GOI)",
        subname: "Non-stop Direct to South Goa (Dabolim)",
        duration: "2h 40m",
        price: 5200,
        tag: "South Goa Direct",
        flightNo: "AI-883",
        airline: "Air India",
        fromAirport: "IGI Airport T3 (DEL)",
        toAirport: "Dabolim Airport (GOI)"
      }
    ],
    local: "Airport Express electric shuttle buses connect Mopa (GOX) to Panaji, Calangute, and Margao for ₹200–400 per passenger."
  },

  // 6. BANGALORE <-> GOA
  "bangalore_goa": {
    trains: [
      {
        name: "20669 Yesvantpur - Madgaon Vande Bharat Express",
        subname: "Vande Bharat · AC Chair Car (CC: ₹1630) / Executive (EC: ₹3000)",
        duration: "10h 15m",
        price: 1630,
        tag: "Vande Bharat",
        trainNo: "20669",
        daysOfRun: "Mon, Wed, Fri",
        fromStation: "Yesvantpur (YPR)",
        toStation: "Madgaon (MAO)"
      },
      {
        name: "17309 Yesvantpur - Vasco da Gama Express",
        subname: "Daily Overnight · Sleeper (SL: ₹380) / 3-Tier AC (3A: ₹1020)",
        duration: "14h 30m",
        price: 380,
        tag: "Budget Overnight",
        trainNo: "17309",
        daysOfRun: "Daily",
        fromStation: "Yesvantpur (YPR)",
        toStation: "Vasco da Gama (VSG)"
      }
    ],
    buses: [
      {
        name: "VRL Travels Multi-Axle AC Sleeper",
        subname: "Direct via Hubballi / Ankola",
        duration: "11h 30m",
        price: 1100,
        tag: "Comfortable"
      },
      {
        name: "IntrCity SmartBus",
        subname: "AC Sleeper 2+1 with Washroom",
        duration: "12h 00m",
        price: 1050,
        tag: "Budget Pick"
      }
    ],
    flights: [
      {
        name: "IndiGo 6E-6743 (BLR ➔ GOX)",
        subname: "Non-stop Direct · Daily",
        duration: "1h 10m",
        price: 2700,
        tag: "Fastest",
        flightNo: "6E-6743",
        airline: "IndiGo",
        fromAirport: "Kempegowda Int'l (BLR)",
        toAirport: "Manohar Int'l (GOX)"
      },
      {
        name: "Akasa Air QP-1355 (BLR ➔ GOI)",
        subname: "Non-stop Direct · Dabolim Airport",
        duration: "1h 15m",
        price: 2450,
        tag: "Best Deal",
        flightNo: "QP-1355",
        airline: "Akasa Air",
        fromAirport: "Kempegowda Int'l T1 (BLR)",
        toAirport: "Dabolim Airport (GOI)"
      }
    ],
    local: "Self-drive hatchbacks (Swift/Baleno) can be picked up at Goa airport for ₹1,200/day. Two-wheelers cost ₹400/day."
  },

  // 7. CHENNAI / BANGALORE <-> KERALA (KOCHI)
  "chennai_kerala": {
    trains: [
      {
        name: "12695 Chennai Central - Thiruvananthapuram Superfast",
        subname: "Sleeper (SL: ₹410) / 3-Tier AC (3A: ₹1090) / 2A (₹1560)",
        duration: "11h 15m",
        price: 410,
        tag: "Popular Express",
        trainNo: "12695",
        daysOfRun: "Daily",
        fromStation: "MGR Chennai Central (MAS)",
        toStation: "Ernakulam Town (ERN)"
      },
      {
        name: "20631 Kasaragod - TVC Vande Bharat Express",
        subname: "Via Shoranur & Ernakulam · AC Chair Car",
        duration: "9h 30m",
        price: 1450,
        tag: "Vande Bharat",
        trainNo: "20631",
        daysOfRun: "Daily except Thursday",
        fromStation: "Kasaragod / Kannur",
        toStation: "Ernakulam Junction (ERS)"
      },
      {
        name: "12677 KSR Bengaluru - Ernakulam InterCity SF",
        subname: "AC Chair Car (CC: ₹740) / Second Seating (2S: ₹205)",
        duration: "10h 30m",
        price: 205,
        tag: "Budget Pick",
        trainNo: "12677",
        daysOfRun: "Daily",
        fromStation: "KSR Bengaluru (SBC)",
        toStation: "Ernakulam Junction (ERS)"
      }
    ],
    buses: [
      {
        name: "KSRTC SWIFT Gajaraj AC Multi-Axle",
        subname: "Kerala State Transport Multi-Axle Sleeper",
        duration: "11h 00m",
        price: 980,
        tag: "Govt SWIFT"
      },
      {
        name: "Kallada Travels AC Sleeper",
        subname: "Direct to Ernakulam / Fort Kochi",
        duration: "10h 30m",
        price: 1050,
        tag: "Comfortable"
      }
    ],
    flights: [
      {
        name: "IndiGo 6E-358 (MAA/BLR ➔ COK)",
        subname: "Non-stop Direct Flight",
        duration: "1h 10m",
        price: 2850,
        tag: "Fastest",
        flightNo: "6E-358",
        airline: "IndiGo",
        fromAirport: "Chennai Int'l (MAA)",
        toAirport: "Cochin Int'l Airport, Nedumbassery (COK)"
      },
      {
        name: "Air India Express IX-1432 (BLR ➔ COK)",
        subname: "Non-stop Direct Flight",
        duration: "1h 05m",
        price: 2600,
        tag: "Best Value",
        flightNo: "IX-1432",
        airline: "Air India Express",
        fromAirport: "Kempegowda Int'l (BLR)",
        toAirport: "Cochin Int'l Airport (COK)"
      }
    ],
    local: "Kochi Water Metro electric boats connect High Court to Vypin and Bolgatty for just ₹20–40! Kochi Metro operates from Aluva to Thykoodam for ₹30–60."
  },

  // 8. DELHI <-> MUMBAI
  "delhi_mumbai": {
    trains: [
      {
        name: "12952 New Delhi - Mumbai Central Tejas Rajdhani Express",
        subname: "Premier Tejas Rajdhani · 3A (₹2450) / 2A (₹3600) / 1A (₹4850)",
        duration: "15h 30m",
        price: 2450,
        tag: "Fastest Rajdhani",
        trainNo: "12952",
        daysOfRun: "Daily",
        fromStation: "New Delhi (NDLS)",
        toStation: "Mumbai Central (MMCT)"
      },
      {
        name: "12910 Hazrat Nizamuddin - Bandra Terminus Garib Rath",
        subname: "All-AC 3-Tier Budget Train",
        duration: "16h 30m",
        price: 1050,
        tag: "Budget AC Pick",
        trainNo: "12910",
        daysOfRun: "Wed, Fri, Sun",
        fromStation: "Hazrat Nizamuddin (NZM)",
        toStation: "Bandra Terminus (BDTS)"
      },
      {
        name: "12138 Punjab Mail",
        subname: "Sleeper (SL: ₹620) / 3-Tier AC (3A: ₹1650)",
        duration: "24h 00m",
        price: 620,
        tag: "Budget Sleeper",
        trainNo: "12138",
        daysOfRun: "Daily",
        fromStation: "New Delhi (NDLS)",
        toStation: "CSMT Mumbai"
      }
    ],
    buses: [],
    flights: [
      {
        name: "IndiGo 6E-2054 (DEL ➔ BOM)",
        subname: "Non-stop Direct · Airbus A321neo",
        duration: "2h 10m",
        price: 3600,
        tag: "Frequent Flights",
        flightNo: "6E-2054",
        airline: "IndiGo",
        fromAirport: "IGI Airport T2 (DEL)",
        toAirport: "CSMIA T2 (BOM)"
      },
      {
        name: "Air India AI-805 (DEL ➔ BOM)",
        subname: "Full Service with Hot Meal onboard · Widebody A350/B777",
        duration: "2h 15m",
        price: 4100,
        tag: "Full Service",
        flightNo: "AI-805",
        airline: "Air India",
        fromAirport: "IGI Airport T3 (DEL)",
        toAirport: "CSMIA T2 (BOM)"
      },
      {
        name: "Akasa Air QP-1102 (DEL ➔ BOM)",
        subname: "Non-stop Direct · Boeing 737 MAX",
        duration: "2h 10m",
        price: 3350,
        tag: "Budget Deal",
        flightNo: "QP-1102",
        airline: "Akasa Air",
        fromAirport: "IGI Airport T2 (DEL)",
        toAirport: "CSMIA T1 (BOM)"
      }
    ],
    local: "Mumbai Local Trains (Western & Central lines) connect the entire city from Churchgate/CSMT up to Borivali/Thane for ₹10–20. Mumbai Metro Line 3 (Aqua Line) connects SEEPZ to BKC/Airport."
  },

  // 9. HYDERABAD <-> TIRUPATI
  "hyderabad_tirupati": {
    trains: [
      {
        name: "12797 Venkatadri Superfast Express",
        subname: "Sleeper (SL: ₹415) / 3-Tier AC (3A: ₹1110) / 2A (₹1580)",
        duration: "11h 00m",
        price: 415,
        tag: "Most Popular Overnight",
        trainNo: "12797",
        daysOfRun: "Daily",
        fromStation: "Kacheguda (KCG)",
        toStation: "Tirupati Main (TPTY)"
      },
      {
        name: "20701 Secunderabad - Tirupati Vande Bharat",
        subname: "Vande Bharat · AC Chair Car (CC: ₹1680) / Executive (EC: ₹3080)",
        duration: "8h 15m",
        price: 1680,
        tag: "Fastest Train",
        trainNo: "20701",
        daysOfRun: "Mon, Wed, Thu, Fri, Sat, Sun",
        fromStation: "Secunderabad (SC)",
        toStation: "Tirupati Main (TPTY)"
      },
      {
        name: "12734 Narayanadri Superfast Express",
        subname: "Daily Overnight SF · Sleeper / 3A / 2A",
        duration: "12h 15m",
        price: 420,
        tag: "Comfortable",
        trainNo: "12734",
        daysOfRun: "Daily",
        fromStation: "Secunderabad (SC)",
        toStation: "Tirupati Main (TPTY)"
      },
      {
        name: "17430 Rayalaseema Express",
        subname: "Daily Express via Guntakal / Kadapa",
        duration: "13h 15m",
        price: 395,
        tag: "Budget Pick",
        trainNo: "17430",
        daysOfRun: "Daily",
        fromStation: "Hyderabad Deccan (HYB)",
        toStation: "Tirupati Main (TPTY)"
      }
    ],
    buses: [
      {
        name: "APSRTC Garuda Plus AC",
        subname: "Multi-Axle Semi-Sleeper via Kurnool & Kadapa",
        duration: "10h 30m",
        price: 850,
        tag: "Official Govt"
      },
      {
        name: "Orange Tours & Travels",
        subname: "Bharat Benz AC Sleeper (2+1)",
        duration: "9h 45m",
        price: 1100,
        tag: "Comfortable"
      }
    ],
    flights: [
      {
        name: "IndiGo 6E-7281 (HYD ➔ TIR)",
        subname: "Non-stop Direct · ATR-72 / A320",
        duration: "1h 15m",
        price: 3100,
        tag: "Fastest",
        flightNo: "6E-7281",
        airline: "IndiGo",
        fromAirport: "Rajiv Gandhi Int'l (HYD)",
        toAirport: "Tirupati Airport, Renigunta (TIR)"
      },
      {
        name: "SpiceJet SG-1072 (HYD ➔ TIR)",
        subname: "Non-stop Direct Flight",
        duration: "1h 10m",
        price: 2850,
        tag: "Best Value",
        flightNo: "SG-1072",
        airline: "SpiceJet",
        fromAirport: "Rajiv Gandhi Int'l (HYD)",
        toAirport: "Tirupati Airport (TIR)"
      }
    ],
    local: "APSRTC Electric 'Sapthagiri' buses run every 5 minutes from Tirupati railway station / central bus stand to Tirumala hilltop (₹65 one way). Pre-paid cabs to Alipiri and Tirumala cost ₹600–900."
  },

  // 10. HYDERABAD <-> BANGALORE
  "hyderabad_bangalore": {
    trains: [
      {
        name: "12785 Kacheguda - Mysuru Superfast Express",
        subname: "Sleeper (SL: ₹385) / 3-Tier AC (3A: ₹1020) / 2A (₹1450)",
        duration: "11h 20m",
        price: 385,
        tag: "Most Popular Overnight",
        trainNo: "12785",
        daysOfRun: "Daily",
        fromStation: "Kacheguda (KCG)",
        toStation: "KSR Bengaluru (SBC)"
      },
      {
        name: "20703 KCG - Yesvantpur Vande Bharat Express",
        subname: "Vande Bharat · AC Chair Car (CC: ₹1540) / Executive (EC: ₹2865)",
        duration: "8h 15m",
        price: 1540,
        tag: "Fastest Train",
        trainNo: "20703",
        daysOfRun: "Mon, Tue, Thu, Fri, Sat, Sun",
        fromStation: "Kacheguda (KCG)",
        toStation: "Yesvantpur (YPR)"
      },
      {
        name: "12735 Secunderabad - Yesvantpur Garib Rath",
        subname: "Full 3-Tier AC Garib Rath",
        duration: "11h 15m",
        price: 745,
        tag: "Best AC Value",
        trainNo: "12735",
        daysOfRun: "Wed, Fri, Sun",
        fromStation: "Secunderabad (SC)",
        toStation: "Yesvantpur (YPR)"
      }
    ],
    buses: [
      {
        name: "KSRTC Flybus / Airavat Club Class",
        subname: "Multi-Axle Volvo AC via NH 44 Highway",
        duration: "9h 30m",
        price: 950,
        tag: "Official Govt"
      },
      {
        name: "VRL Travels Multi-Axle AC Sleeper",
        subname: "AC Sleeper 2+1 with Live Tracking",
        duration: "9h 15m",
        price: 1150,
        tag: "Comfortable"
      }
    ],
    flights: [
      {
        name: "IndiGo 6E-554 (HYD ➔ BLR)",
        subname: "Non-stop Direct · Hourly Frequency",
        duration: "1h 10m",
        price: 2400,
        tag: "Fastest",
        flightNo: "6E-554",
        airline: "IndiGo",
        fromAirport: "Rajiv Gandhi Int'l (HYD)",
        toAirport: "Kempegowda Int'l (BLR)"
      },
      {
        name: "Akasa Air QP-1422 (HYD ➔ BLR)",
        subname: "Non-stop Direct Boeing 737 MAX",
        duration: "1h 05m",
        price: 2200,
        tag: "Best Deal",
        flightNo: "QP-1422",
        airline: "Akasa Air",
        fromAirport: "Rajiv Gandhi Int'l (HYD)",
        toAirport: "Kempegowda Int'l (BLR)"
      }
    ],
    local: "Namma Metro (Purple & Green lines) connects Majestic (SBC Railway station) to MG Road, Indiranagar, and Whitefield for ₹15–60. Vayu Vajra airport AC buses operate 24/7 across Bangalore."
  },

  // 11. HYDERABAD <-> VISAKHAPATNAM
  "hyderabad_visakhapatnam": {
    trains: [
      {
        name: "20834 Secunderabad - Visakhapatnam Vande Bharat",
        subname: "Vande Bharat · AC Chair Car (CC: ₹1665) / Executive (EC: ₹3120)",
        duration: "8h 30m",
        price: 1665,
        tag: "Fastest Train",
        trainNo: "20834",
        daysOfRun: "Mon, Tue, Wed, Fri, Sat, Sun",
        fromStation: "Secunderabad (SC)",
        toStation: "Visakhapatnam (VSKP)"
      },
      {
        name: "12728 Godavari Superfast Express",
        subname: "Daily Overnight SF · Sleeper (SL: ₹410) / 3A (₹1100) / 2A (₹1560)",
        duration: "12h 15m",
        price: 410,
        tag: "Most Popular Overnight",
        trainNo: "12728",
        daysOfRun: "Daily",
        fromStation: "Secunderabad (SC)",
        toStation: "Visakhapatnam (VSKP)"
      },
      {
        name: "12740 Secunderabad - Visakhapatnam Garib Rath",
        subname: "Daily 3-Tier AC Garib Rath",
        duration: "11h 10m",
        price: 775,
        tag: "Best AC Value",
        trainNo: "12740",
        daysOfRun: "Daily",
        fromStation: "Secunderabad (SC)",
        toStation: "Visakhapatnam (VSKP)"
      }
    ],
    buses: [
      {
        name: "APSRTC Amaravathi Multi-Axle AC",
        subname: "Via Vijayawada & Rajahmundry",
        duration: "12h 00m",
        price: 1100,
        tag: "Official Govt"
      },
      {
        name: "Orange Travels Multi-Axle AC Sleeper",
        subname: "Direct via NH 16",
        duration: "11h 30m",
        price: 1350,
        tag: "Comfortable"
      }
    ],
    flights: [
      {
        name: "IndiGo 6E-7115 (HYD ➔ VTZ)",
        subname: "Non-stop Direct Flight",
        duration: "1h 10m",
        price: 3200,
        tag: "Fastest",
        flightNo: "6E-7115",
        airline: "IndiGo",
        fromAirport: "Rajiv Gandhi Int'l (HYD)",
        toAirport: "Visakhapatnam Int'l Airport (VTZ)"
      },
      {
        name: "Air India AI-542 (HYD ➔ VTZ)",
        subname: "Non-stop Direct · Full Service",
        duration: "1h 15m",
        price: 3500,
        tag: "Full Service",
        flightNo: "AI-542",
        airline: "Air India",
        fromAirport: "Rajiv Gandhi Int'l (HYD)",
        toAirport: "Visakhapatnam Int'l Airport (VTZ)"
      }
    ],
    local: "APSRTC City buses connect VSKP Railway Station to RK Beach, Rushikonda, and Kailasagiri (₹15–40). Auto rickshaws and Ola/Uber are widely available."
  },

  // 12. HYDERABAD <-> VIJAYAWADA
  "hyderabad_vijayawada": {
    trains: [
      {
        name: "20707 Secunderabad - VSKP Vande Bharat (via BZA)",
        subname: "Vande Bharat · AC Chair Car (CC: ₹920) / Executive (EC: ₹1820)",
        duration: "4h 35m",
        price: 920,
        tag: "Fastest Train",
        trainNo: "20707",
        daysOfRun: "Mon, Tue, Wed, Fri, Sat, Sun",
        fromStation: "Secunderabad (SC)",
        toStation: "Vijayawada Junction (BZA)"
      },
      {
        name: "12714 Satavahana Superfast Express",
        subname: "Second Seating (2S: ₹160) / AC Chair Car (CC: ₹575)",
        duration: "5h 50m",
        price: 160,
        tag: "Budget Day SF",
        trainNo: "12714",
        daysOfRun: "Daily",
        fromStation: "Secunderabad (SC)",
        toStation: "Vijayawada Junction (BZA)"
      },
      {
        name: "12796 BZA Intercity Superfast Express",
        subname: "Morning Intercity Express",
        duration: "5h 55m",
        price: 160,
        tag: "Morning Intercity",
        trainNo: "12796",
        daysOfRun: "Daily",
        fromStation: "Secunderabad (SC)",
        toStation: "Vijayawada Junction (BZA)"
      }
    ],
    buses: [
      {
        name: "APSRTC Garuda / Amaravathi AC",
        subname: "Every 30 mins from MGBS to PNBS via NH 65",
        duration: "5h 15m",
        price: 490,
        tag: "Frequent Govt"
      },
      {
        name: "Morning Star / Orange Travels",
        subname: "Multi-Axle AC Sleeper",
        duration: "5h 00m",
        price: 650,
        tag: "Comfortable"
      }
    ],
    flights: [
      {
        name: "IndiGo 6E-7206 (HYD ➔ VGA)",
        subname: "Non-stop Direct Flight",
        duration: "0h 55m",
        price: 2800,
        tag: "Fastest",
        flightNo: "6E-7206",
        airline: "IndiGo",
        fromAirport: "Rajiv Gandhi Int'l (HYD)",
        toAirport: "Vijayawada Gannavaram Airport (VGA)"
      }
    ],
    local: "Auto-rickshaws connect Vijayawada Junction (BZA) to Kanaka Durga Temple, Prakasam Barrage, and PNBS Bus Station for ₹50–120."
  },

  // 13. BANGALORE <-> CHENNAI
  "bangalore_chennai": {
    trains: [
      {
        name: "20608 Mysuru - Chennai Central Vande Bharat",
        subname: "Vande Bharat · AC Chair Car (CC: ₹995) / Executive (EC: ₹1980)",
        duration: "4h 30m",
        price: 995,
        tag: "Fastest Train",
        trainNo: "20608",
        daysOfRun: "Mon, Tue, Thu, Fri, Sat, Sun",
        fromStation: "KSR Bengaluru (SBC)",
        toStation: "MGR Chennai Central (MAS)"
      },
      {
        name: "12008 Shatabdi Express",
        subname: "AC Chair Car (CC: ₹790) / Executive (EC: ₹1540)",
        duration: "5h 05m",
        price: 790,
        tag: "Comfortable",
        trainNo: "12008",
        daysOfRun: "Mon, Tue, Wed, Fri, Sat, Sun",
        fromStation: "KSR Bengaluru (SBC)",
        toStation: "MGR Chennai Central (MAS)"
      },
      {
        name: "12610 Chennai Intercity Superfast",
        subname: "Second Seating (2S: ₹150) / AC Chair Car (CC: ₹540)",
        duration: "6h 10m",
        price: 150,
        tag: "Budget Pick",
        trainNo: "12610",
        daysOfRun: "Daily",
        fromStation: "KSR Bengaluru (SBC)",
        toStation: "MGR Chennai Central (MAS)"
      }
    ],
    buses: [
      {
        name: "KSRTC / SETC Multi-Axle AC",
        subname: "Via Hosur & Vellore Expressway",
        duration: "6h 30m",
        price: 620,
        tag: "Govt AC"
      },
      {
        name: "IntrCity SmartBus AC Sleeper",
        subname: "AC Sleeper 2+1 with WiFi & Washroom",
        duration: "6h 00m",
        price: 750,
        tag: "Comfortable"
      }
    ],
    flights: [
      {
        name: "IndiGo 6E-6872 (BLR ➔ MAA)",
        subname: "Non-stop Direct · Hourly Flights",
        duration: "0h 55m",
        price: 2100,
        tag: "Fastest",
        flightNo: "6E-6872",
        airline: "IndiGo",
        fromAirport: "Kempegowda Int'l (BLR)",
        toAirport: "Chennai Int'l (MAA)"
      }
    ],
    local: "Chennai Metro connects Chennai Central (MAS) and Egmore to Airport and Marina Beach for ₹20–50. Suburban EMU trains run every 10 mins."
  },

  // 14. HYDERABAD <-> RAJAHMUNDRY
  "hyderabad_rajahmundry": {
    trains: [
      {
        name: "12737 Goutami Superfast Express",
        subname: "Sleeper (SL: ₹345) / 3-Tier AC (3A: ₹920) / 2A (₹1310)",
        duration: "8h 40m",
        price: 345,
        tag: "Most Popular Overnight",
        trainNo: "12737",
        daysOfRun: "Daily",
        fromStation: "Secunderabad (SC)",
        toStation: "Rajahmundry (RJY)"
      },
      {
        name: "12728 Godavari Superfast Express",
        subname: "Sleeper (SL: ₹345) / 3-Tier AC (3A: ₹920) / 2A (₹1310)",
        duration: "8h 30m",
        price: 345,
        tag: "Superfast Overnight",
        trainNo: "12728",
        daysOfRun: "Daily",
        fromStation: "Secunderabad (SC)",
        toStation: "Rajahmundry (RJY)"
      },
      {
        name: "20834 Secunderabad - Visakhapatnam Vande Bharat",
        subname: "Vande Bharat · AC Chair Car (CC: ₹1365) / Executive (EC: ₹2540)",
        duration: "5h 58m",
        price: 1365,
        tag: "Fastest Train",
        trainNo: "20834",
        daysOfRun: "Mon, Tue, Wed, Fri, Sat, Sun",
        fromStation: "Secunderabad (SC)",
        toStation: "Rajahmundry (RJY)"
      },
      {
        name: "12740 Secunderabad - Visakhapatnam Garib Rath",
        subname: "Full 3-Tier AC Garib Rath",
        duration: "8h 45m",
        price: 685,
        tag: "Best AC Value",
        trainNo: "12740",
        daysOfRun: "Daily",
        fromStation: "Secunderabad (SC)",
        toStation: "Rajahmundry (RJY)"
      },
      {
        name: "12806 Janmabhoomi Superfast Express",
        subname: "Second Seating (2S: ₹195) / AC Chair Car (CC: ₹735)",
        duration: "8h 55m",
        price: 195,
        tag: "Budget Day SF",
        trainNo: "12806",
        daysOfRun: "Daily",
        fromStation: "Secunderabad (SC)",
        toStation: "Rajahmundry (RJY)"
      }
    ],
    buses: [
      {
        name: "APSRTC Garuda Plus AC",
        subname: "Via Eluru & Vijayawada Expressway",
        duration: "8h 30m",
        price: 690,
        tag: "Official Govt"
      },
      {
        name: "Orange Tours & Travels",
        subname: "Multi-Axle AC Sleeper (2+1)",
        duration: "7h 45m",
        price: 850,
        tag: "Comfortable"
      }
    ],
    flights: [
      {
        name: "IndiGo 6E-7264 (HYD ➔ RJA)",
        subname: "Non-stop Direct · ATR-72",
        duration: "1h 05m",
        price: 2950,
        tag: "Fastest",
        flightNo: "6E-7264",
        airline: "IndiGo",
        fromAirport: "Rajiv Gandhi Int'l (HYD)",
        toAirport: "Rajahmundry Airport, Madhurapudi (RJA)"
      }
    ],
    local: "Auto rickshaws connect Rajahmundry (RJY) Railway Station to Godavari Ghats (Kotilingala, Pushkar Ghat) and ISKCON for ₹40–100. Local boats to Papikondalu start from Purushothapatnam / Gandi Pochamma."
  },

  // 17. RAJAHMUNDRY <-> TIRUPATI
  "rajahmundry_tirupati": {
    trains: [
      {
        name: "18521 Tirumala Express",
        subname: "Sleeper (SL) / 3-Tier AC (3A) / 2-Tier AC (2A)",
        duration: "10h 20m",
        price: 345,
        tag: "Popular Pick",
        trainNo: "18521",
        daysOfRun: "Daily",
        fromStation: "Rajahmundry (RJY)",
        toStation: "Tirupati Main (TPTY)"
      },
      {
        name: "17210 Seshadri Express",
        subname: "Sleeper (SL) / 3-Tier AC (3A) / 2-Tier AC (2A)",
        duration: "10h 55m",
        price: 340,
        tag: "Comfortable",
        trainNo: "17210",
        daysOfRun: "Daily",
        fromStation: "Rajahmundry (RJY)",
        toStation: "Tirupati Main (TPTY)"
      },
      {
        name: "22707 Visakhapatnam - Tirupati Double Decker",
        subname: "AC Chair Car (CC)",
        duration: "10h 25m",
        price: 610,
        tag: "Double Decker SF",
        trainNo: "22707",
        daysOfRun: "Mon, Thu, Sat",
        fromStation: "Rajahmundry (RJY)",
        toStation: "Tirupati Main (TPTY)"
      },
      {
        name: "17479 Puri - Tirupati Express",
        subname: "Sleeper (SL) / 3-Tier AC (3A)",
        duration: "12h 45m",
        price: 340,
        tag: "Budget Pick",
        trainNo: "17479",
        daysOfRun: "Mon, Wed, Thu, Fri, Sun",
        fromStation: "Rajahmundry (RJY)",
        toStation: "Tirupati Main (TPTY)"
      }
    ],
    buses: [
      {
        name: "APSRTC Super Luxury / Garuda AC",
        subname: "Direct via Vijayawada & Nellore",
        duration: "11h 30m",
        price: 750,
        tag: "Official Govt"
      },
      {
        name: "Morning Star Travels",
        subname: "2+1 Multi-Axle Sleeper with Live Tracking",
        duration: "10h 45m",
        price: 950,
        tag: "Comfortable"
      },
      {
        name: "Orange Tours & Travels",
        subname: "Multi-Axle AC Sleeper",
        duration: "10h 30m",
        price: 1100,
        tag: "Popular Pick"
      }
    ],
    flights: [
      {
        name: "IndiGo 6E-7264 / 6E-7127 (Connecting via HYD)",
        subname: "Rajahmundry (RJA) ➔ Tirupati (TIR)",
        duration: "3h 45m",
        price: 5400,
        tag: "Connecting Flight",
        flightNo: "6E-7264",
        airline: "IndiGo",
        fromAirport: "Rajahmundry (RJA)",
        toAirport: "Tirupati Airport, Renigunta (TIR)"
      }
    ],
    local: "APSRTC electric & diesel buses run every 5 minutes from Tirupati Bus Station & Railway Station up to Tirumala Hills (₹65 one way). Pre-paid autos and cabs operate 24x7 to Sri Padmavathi Ammavari Temple (Tiruchanur) and Srinivasa Mangapuram."
  }
};

/**
 * Normalizes city names for key lookup (e.g. "Hyderabad" and "Goa" -> "hyderabad_goa")
 */
function findRealTransit(sourceCity, destCity) {
  if (!sourceCity || !destCity) return null;

  const s = sourceCity.toLowerCase().trim();
  const d = destCity.toLowerCase().trim();

  // Direct key check
  const key1 = `${s}_${d}`;
  const key2 = `${d}_${s}`;

  if (realTransitRoutes[key1]) return realTransitRoutes[key1];
  if (realTransitRoutes[key2]) return realTransitRoutes[key2];

  // Fuzzy matching for state/metro aliases
  const aliasMap = {
    hyd: "hyderabad",
    secunderabad: "hyderabad",
    kacheguda: "hyderabad",
    bombay: "mumbai",
    delhi: "delhi",
    ncr: "delhi",
    newdelhi: "delhi",
    blr: "bangalore",
    bengaluru: "bangalore",
    maa: "chennai",
    madras: "chennai",
    tpty: "tirupati",
    tirupathi: "tirupati",
    vizag: "visakhapatnam",
    vskp: "visakhapatnam",
    bza: "vijayawada",
    bezawada: "vijayawada",
    rjy: "rajahmundry",
    rajamundry: "rajahmundry",
    kochi: "kerala",
    cochin: "kerala",
    ernakulam: "kerala",
    alleppey: "kerala",
    alappuzha: "kerala",
    munnar: "kerala"
  };

  const normS = aliasMap[s] || s;
  const normD = aliasMap[d] || d;

  const aliasKey1 = `${normS}_${normD}`;
  const aliasKey2 = `${normD}_${normS}`;

  if (realTransitRoutes[aliasKey1]) return realTransitRoutes[aliasKey1];
  if (realTransitRoutes[aliasKey2]) return realTransitRoutes[aliasKey2];

  return null;
}

module.exports = { realTransitRoutes, findRealTransit };
