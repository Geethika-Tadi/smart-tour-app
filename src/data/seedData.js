const seedDestinations = [
  {
    key: "agra",
    name: "Agra",
    subtitle: "Home of the Taj Mahal — a timeless wonder",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1200&q=80",
    places: [
      { name: "Taj Mahal", type: "UNESCO Heritage", entry: 50, desc: "One of the Seven Wonders of the World" },
      { name: "Agra Fort", type: "Historical", entry: 40, desc: "Massive Mughal-era fort with stunning views" },
      { name: "Fatehpur Sikri", type: "Heritage Site", entry: 35, desc: "Abandoned Mughal capital city" },
      { name: "Mehtab Bagh", type: "Garden", entry: 25, desc: "Perfect sunset view of Taj Mahal" },
      { name: "Itimad-ud-Daulah", type: "Monument", entry: 20, desc: "Baby Taj — a marble masterpiece" }
    ],
    hotels: {
      "5000": [
        { name: "Hotel Sheela", price: 600, rating: "⭐⭐⭐", amenities: "Free WiFi · AC · Breakfast" },
        { name: "Zostel Agra", price: 400, rating: "⭐⭐⭐", amenities: "Hostel · WiFi · Lockers" }
      ],
      "10000": [
        { name: "Hotel Amar", price: 1200, rating: "⭐⭐⭐", amenities: "Pool · WiFi · Restaurant" },
        { name: "Treebo Taj View", price: 1500, rating: "⭐⭐⭐⭐", amenities: "AC · WiFi · Breakfast" }
      ],
      "20000": [
        { name: "Coral Court Hotel", price: 2500, rating: "⭐⭐⭐⭐", amenities: "Spa · Pool · Restaurant" },
        { name: "Hotel Clarks Shiraz", price: 3500, rating: "⭐⭐⭐⭐", amenities: "Rooftop · Pool · WiFi" }
      ],
      "50000": [
        { name: "The Oberoi Amarvilas", price: 18000, rating: "⭐⭐⭐⭐⭐", amenities: "Taj View · Spa · Fine Dining" },
        { name: "ITC Mughal Resort", price: 12000, rating: "⭐⭐⭐⭐⭐", amenities: "Heritage · Pool · Spa" }
      ]
    },
    transport: {
      "5000": [
        { mode: "🚌", name: "State Bus", route: "Delhi → Agra", price: 250, duration: "4-5 hrs" },
        { mode: "🚆", name: "Express Train", route: "Mathura → Agra", price: 150, duration: "1 hr" }
      ],
      "10000": [
        { mode: "🚆", name: "Gatimaan Express", route: "Delhi → Agra", price: 750, duration: "1.5 hrs" },
        { mode: "🚌", name: "AC Volvo Bus", route: "Delhi → Agra", price: 600, duration: "3.5 hrs" }
      ],
      "20000": [
        { mode: "🚆", name: "Shatabdi Express", route: "Delhi → Agra", price: 1200, duration: "2 hrs" },
        { mode: "🚗", name: "Cab (One Way)", route: "Delhi → Agra", price: 2500, duration: "3 hrs" }
      ],
      "50000": [
        { mode: "✈️", name: "Flight + Cab", route: "Any City → Agra", price: 5000, duration: "2-4 hrs" },
        { mode: "🚗", name: "Luxury Cab", route: "Delhi → Agra", price: 4500, duration: "3 hrs" }
      ]
    }
  },
  {
    key: "mumbai",
    name: "Mumbai",
    subtitle: "The city that never sleeps — India's financial capital",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&q=80",
    places: [
      { name: "Gateway of India", type: "Landmark", entry: 0, desc: "Iconic arch monument on the seafront" },
      { name: "Marine Drive", type: "Promenade", entry: 0, desc: "Queen's Necklace — beautiful coastal road" },
      { name: "Elephanta Caves", type: "UNESCO Heritage", entry: 40, desc: "Ancient rock-cut cave temples" },
      { name: "Juhu Beach", type: "Beach", entry: 0, desc: "Famous beach with street food" },
      { name: "Chhatrapati Shivaji Museum", type: "Museum", entry: 85, desc: "Premier museum of art & history" }
    ],
    hotels: {
      "5000": [
        { name: "Hotel Decent", price: 800, rating: "⭐⭐⭐", amenities: "WiFi · AC · Central Location" },
        { name: "Backpacker Panda", price: 500, rating: "⭐⭐⭐", amenities: "Hostel · WiFi · Lockers" }
      ],
      "10000": [
        { name: "Hotel Fariyas", price: 2000, rating: "⭐⭐⭐⭐", amenities: "Pool · WiFi · Restaurant" },
        { name: "Ibis Mumbai Airport", price: 2500, rating: "⭐⭐⭐⭐", amenities: "AC · WiFi · Gym" }
      ],
      "20000": [
        { name: "The Lalit Mumbai", price: 5000, rating: "⭐⭐⭐⭐", amenities: "Spa · Pool · Restaurant" },
        { name: "JW Marriott", price: 7000, rating: "⭐⭐⭐⭐⭐", amenities: "Sea View · Pool · Fine Dining" }
      ],
      "50000": [
        { name: "The Taj Mahal Palace", price: 20000, rating: "⭐⭐⭐⭐⭐", amenities: "Heritage · Sea View · Butler" },
        { name: "Oberoi Mumbai", price: 18000, rating: "⭐⭐⭐⭐⭐", amenities: "Pool · Spa · Fine Dining" }
      ]
    },
    transport: {
      "5000": [
        { mode: "🚆", name: "Local Train", route: "Within Mumbai", price: 20, duration: "Varies" },
        { mode: "🚌", name: "BEST Bus", route: "City Bus", price: 15, duration: "Varies" }
      ],
      "10000": [
        { mode: "✈️", name: "Flight", route: "Delhi → Mumbai", price: 3500, duration: "2 hrs" },
        { mode: "🚆", name: "Rajdhani Express", route: "Delhi → Mumbai", price: 1200, duration: "16 hrs" }
      ],
      "20000": [
        { mode: "✈️", name: "Flight (Direct)", route: "Any Metro → Mumbai", price: 4500, duration: "2-3 hrs" },
        { mode: "🚗", name: "Cab Rental", route: "Airport → Hotel", price: 800, duration: "30-60 min" }
      ],
      "50000": [
        { mode: "✈️", name: "Business Class", route: "Any City → Mumbai", price: 12000, duration: "2-3 hrs" },
        { mode: "🚗", name: "Luxury Cab", route: "Airport → Hotel", price: 2000, duration: "30-45 min" }
      ]
    }
  },
  {
    key: "goa",
    name: "Goa",
    subtitle: "Sun, sand & serenity — India's beach paradise",
    image: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=1200&q=80",
    places: [
      { name: "Baga Beach", type: "Beach", entry: 0, desc: "Most popular beach with water sports" },
      { name: "Calangute Beach", type: "Beach", entry: 0, desc: "Queen of Beaches — vibrant & lively" },
      { name: "Dudhsagar Falls", type: "Waterfall", entry: 400, desc: "One of India's tallest waterfalls" },
      { name: "Old Goa Churches", type: "Heritage", entry: 0, desc: "UNESCO listed Portuguese-era churches" },
      { name: "Anjuna Flea Market", type: "Market", entry: 0, desc: "Famous Wednesday flea market" }
    ],
    hotels: {
      "5000": [
        { name: "Goa Backpackers", price: 500, rating: "⭐⭐⭐", amenities: "Hostel · WiFi · Beach Nearby" },
        { name: "Villa Sol Beach Resort", price: 900, rating: "⭐⭐⭐", amenities: "AC · WiFi · Garden" }
      ],
      "10000": [
        { name: "Airlie Beach Hotel", price: 2000, rating: "⭐⭐⭐⭐", amenities: "Pool · WiFi · Restaurant" },
        { name: "Hotel Baga Breeze", price: 1800, rating: "⭐⭐⭐⭐", amenities: "AC · WiFi · Beachside" }
      ],
      "20000": [
        { name: "Novotel Goa Resort", price: 5500, rating: "⭐⭐⭐⭐", amenities: "Pool · Spa · Beach Access" },
        { name: "Alila Diwa Goa", price: 6000, rating: "⭐⭐⭐⭐⭐", amenities: "Infinity Pool · Spa · Dining" }
      ],
      "50000": [
        { name: "The Leela Goa", price: 15000, rating: "⭐⭐⭐⭐⭐", amenities: "Private Beach · Spa · Butler" },
        { name: "Taj Exotica Goa", price: 18000, rating: "⭐⭐⭐⭐⭐", amenities: "Beach Villa · Pool · Fine Dining" }
      ]
    },
    transport: {
      "5000": [
        { mode: "🛵", name: "Scooter Rental", route: "Within Goa", price: 300, duration: "Per Day" },
        { mode: "🚌", name: "Local Bus", route: "Panaji ↔ Beaches", price: 30, duration: "Varies" }
      ],
      "10000": [
        { mode: "✈️", name: "Flight", route: "Mumbai → Goa", price: 2500, duration: "1 hr" },
        { mode: "🚆", name: "Konkan Railway", route: "Mumbai → Goa", price: 800, duration: "8-10 hrs" }
      ],
      "20000": [
        { mode: "✈️", name: "Flight (Direct)", route: "Delhi → Goa", price: 5000, duration: "2.5 hrs" },
        { mode: "🚗", name: "Cab Rental", route: "Full Day Sightseeing", price: 2500, duration: "8 hrs" }
      ],
      "50000": [
        { mode: "✈️", name: "Business Class", route: "Any City → Goa", price: 14000, duration: "1-3 hrs" },
        { mode: "🚗", name: "Luxury Cab", route: "Airport Transfers", price: 2000, duration: "30 min" }
      ]
    }
  },
  {
    key: "kerala",
    name: "Kerala",
    subtitle: "God's Own Country — backwaters, hills & culture",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&q=80",
    places: [
      { name: "Alleppey Backwaters", type: "Nature", entry: 0, desc: "Iconic houseboat rides through canals" },
      { name: "Munnar Hills", type: "Hill Station", entry: 0, desc: "Tea plantations & misty mountains" },
      { name: "Periyar Wildlife Sanctuary", type: "Wildlife", entry: 150, desc: "Tigers, elephants & boat safari" },
      { name: "Kovalam Beach", type: "Beach", entry: 0, desc: "Crescent-shaped beach with lighthouse" },
      { name: "Athirapally Falls", type: "Waterfall", entry: 30, desc: "Niagara of India — stunning cascade" }
    ],
    hotels: {
      "5000": [
        { name: "Kerala Homestay", price: 700, rating: "⭐⭐⭐", amenities: "Homemade Food · WiFi · AC" },
        { name: "Zostel Kochi", price: 500, rating: "⭐⭐⭐", amenities: "Hostel · WiFi · Social" }
      ],
      "10000": [
        { name: "Lake Palace Resort", price: 2200, rating: "⭐⭐⭐⭐", amenities: "Lake View · WiFi · Restaurant" },
        { name: "Spice Village Thekkady", price: 2500, rating: "⭐⭐⭐⭐", amenities: "Eco Resort · Pool · Nature" }
      ],
      "20000": [
        { name: "Kumarakom Lake Resort", price: 6000, rating: "⭐⭐⭐⭐⭐", amenities: "Villa · Pool · Ayurveda" },
        { name: "The Zuri Kumarakom", price: 5500, rating: "⭐⭐⭐⭐", amenities: "Lake View · Spa · Pool" }
      ],
      "50000": [
        { name: "Niraamaya Retreats", price: 14000, rating: "⭐⭐⭐⭐⭐", amenities: "Private Villa · Ayurveda · Pool" },
        { name: "CGH Earth Hotels", price: 12000, rating: "⭐⭐⭐⭐⭐", amenities: "Heritage · Eco · Spa" }
      ]
    },
    transport: {
      "5000": [
        { mode: "🚌", name: "KSRTC Bus", route: "Kochi → Munnar", price: 200, duration: "4 hrs" },
        { mode: "🚆", name: "Train", route: "Chennai → Kochi", price: 400, duration: "6-7 hrs" }
      ],
      "10000": [
        { mode: "✈️", name: "Flight", route: "Delhi → Kochi", price: 4000, duration: "2.5 hrs" },
        { mode: "🚗", name: "Cab", route: "Kochi → Alleppey", price: 1200, duration: "1.5 hrs" }
      ],
      "20000": [
        { mode: "✈️", name: "Flight (Direct)", route: "Any Metro → Kochi", price: 5000, duration: "2-3 hrs" },
        { mode: "⛵", name: "Houseboat", route: "Alleppey Backwaters", price: 5000, duration: "Full Day" }
      ],
      "50000": [
        { mode: "✈️", name: "Business Class", route: "Any City → Kochi", price: 15000, duration: "2-3 hrs" },
        { mode: "⛵", name: "Luxury Houseboat", route: "Premium Backwater Tour", price: 12000, duration: "Overnight" }
      ]
    }
  },
  {
    key: "jaipur",
    name: "Jaipur",
    subtitle: "The Pink City — royal palaces & vibrant bazaars",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1200&q=80",
    places: [
      { name: "Amber Fort", type: "Heritage", entry: 100, desc: "Majestic hilltop fort with stunning interiors" },
      { name: "Hawa Mahal", type: "Landmark", entry: 50, desc: "Palace of Winds — iconic 5-storey façade" },
      { name: "City Palace", type: "Royal Palace", entry: 200, desc: "Residence of the royal family of Jaipur" },
      { name: "Jantar Mantar", type: "UNESCO Site", entry: 50, desc: "Ancient astronomical observatory" },
      { name: "Nahargarh Fort", type: "Fort", entry: 50, desc: "Best sunset view point of Jaipur" }
    ],
    hotels: {
      "5000": [
        { name: "Hotel Pearl Palace", price: 700, rating: "⭐⭐⭐", amenities: "Rooftop · WiFi · AC" },
        { name: "Zostel Jaipur", price: 450, rating: "⭐⭐⭐", amenities: "Hostel · WiFi · Central" }
      ],
      "10000": [
        { name: "Hotel Diggi Palace", price: 1800, rating: "⭐⭐⭐⭐", amenities: "Heritage · Garden · WiFi" },
        { name: "Alsisar Haveli", price: 2200, rating: "⭐⭐⭐⭐", amenities: "Heritage · Pool · Restaurant" }
      ],
      "20000": [
        { name: "Samode Haveli", price: 5000, rating: "⭐⭐⭐⭐⭐", amenities: "Rooftop Pool · Heritage · Spa" },
        { name: "Jai Mahal Palace", price: 6000, rating: "⭐⭐⭐⭐⭐", amenities: "Pool · Gardens · Fine Dining" }
      ],
      "50000": [
        { name: "Rambagh Palace", price: 22000, rating: "⭐⭐⭐⭐⭐", amenities: "Royal Suite · Spa · Pool" },
        { name: "Taj Jai Mahal Palace", price: 18000, rating: "⭐⭐⭐⭐⭐", amenities: "Heritage · Butler · Pool" }
      ]
    },
    transport: {
      "5000": [
        { mode: "🚌", name: "Volvo Bus", route: "Delhi → Jaipur", price: 400, duration: "5 hrs" },
        { mode: "🚆", name: "Express Train", route: "Delhi → Jaipur", price: 300, duration: "4.5 hrs" }
      ],
      "10000": [
        { mode: "🚆", name: "Shatabdi Express", route: "Delhi → Jaipur", price: 850, duration: "4 hrs" },
        { mode: "🚗", name: "Cab (Shared)", route: "Delhi → Jaipur", price: 1200, duration: "4.5 hrs" }
      ],
      "20000": [
        { mode: "✈️", name: "Flight", route: "Mumbai → Jaipur", price: 4000, duration: "1.5 hrs" },
        { mode: "🚗", name: "Private Cab", route: "Delhi → Jaipur", price: 3000, duration: "4.5 hrs" }
      ],
      "50000": [
        { mode: "✈️", name: "Business Class", route: "Any City → Jaipur", price: 12000, duration: "1-3 hrs" },
        { mode: "🐘", name: "Heritage Tour", route: "Amber Fort Elephant Ride", price: 1100, duration: "30 min" }
      ]
    }
  }
];

module.exports = seedDestinations;
