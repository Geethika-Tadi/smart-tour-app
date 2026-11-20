# ✈️ Smart Tour Management - Fullstack App

A fullstack Smart Tour & Travel Management application built with **Node.js**, **Express.js**, **MongoDB (Mongoose)**, and **Groq AI**.

---

## 🌟 Features

- **Authentication & User Management**: User registration, login, and profile lookup with JWT token authentication and bcrypt password hashing.
- **Dynamic Destinations Catalog**: Browse tourist spots, curated hotels across 4 budget brackets, and transit options. Stored and retrieved via MongoDB.
- **Platform Price Comparison**: Real-time side-by-side cost comparisons across SmartTour, MakeMyTrip, Goibibo, Yatra, Cleartrip, and EaseMyTrip.
- **AI-Powered Trip Generator**: Generates day-by-day itineraries, transit recommendations (trains, buses, flights), local food suggestions, and complete budget breakdown.
- **Financial Trip Summary**: Automatic 8-point financial audit analyzing travel cost, accommodation, food, activities, total budget, and remaining balance.
- **Trip Expense Tracker & Splitter**: Add, track, and split expenses among travelers by category (Food, Transport, Hotel, Activities, etc.).
- **Smart Packing Assistant**: Interactive checklists across 6 categories with AI generation tailored to destination and trip duration.
- **Travel Companion Suite**:
  - Live AI travel assistant chat
  - Destination weather analysis
  - Currency converter with multi-currency rates
  - Local dialect phrases with voice speech synthesis
  - Destination maps and driving directions
  - One-click PDF / print itinerary export & social sharing

---

## 📁 Project Structure

```
smart-tour-app/
├── .env                  # Environment configurations (Port, MongoDB URI, Groq Key, JWT)
├── .env.example          # Sample environment template
├── .gitignore
├── package.json          # Node dependencies & npm scripts
├── server.js             # Main Express server entry point
├── README.md
├── src/
│   ├── config/
│   │   └── db.js         # MongoDB connection & reconnection handler
│   ├── models/
│   │   ├── User.js       # User auth model (bcrypt password hashing)
│   │   ├── Destination.js# Destination, hotel, and transit schema
│   │   ├── Trip.js       # Saved itineraries & travel plans
│   │   └── Expense.js    # Trip expense tracking & splits
│   ├── middleware/
│   │   ├── auth.js       # JWT protection & optionalAuth middleware
│   │   └── errorHandler.js# Centralized error handler
│   ├── routes/
│   │   ├── authRoutes.js # /api/auth (register, login, me)
│   │   ├── destinationRoutes.js # /api/destinations
│   │   ├── tripRoutes.js # /api/trips
│   │   ├── expenseRoutes.js # /api/expenses
│   │   └── aiRoutes.js   # /api/ai (transport, tab, summary, chat, weather, packing, phrases)
│   └── data/
│       ├── seedData.js   # Initial rich data for Agra, Mumbai, Goa, Kerala, Jaipur
│       └── seedRunner.js # Standalone script for npm run seed
└── public/
    └── index.html        # Frontend SPA wired to the Express REST APIs
```

---

## 🚀 Quick Start

### 1. Prerequisites
- **Node.js** (v18 or higher; tested on v24)
- **MongoDB** (Local instance or MongoDB Atlas free cloud cluster)

### 2. Configuration (`.env`)
Create or edit `.env` in the root folder:
```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/smarttour
JWT_SECRET=your_jwt_secret_key
GROQ_API_KEY=your_groq_api_key_here
```
> *Note: If MongoDB is not yet running locally, the server operates in graceful standalone mode so you can test all AI, UI, and transit features immediately.*

### 3. Install Dependencies
```bash
npm install
```

### 4. (Optional) Seed Database
Populate MongoDB with default destination data:
```bash
npm run seed
```

### 5. Start Server
```bash
npm start
```
Or for development with automatic reload:
```bash
npm run dev
```

Visit **[http://localhost:5000](http://localhost:5000)** in your browser!

---

## 📡 REST API Reference

### Auth (`/api/auth`)
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Authenticate & obtain JWT
- `GET /api/auth/me` - Get profile of authenticated user

### Destinations (`/api/destinations`)
- `GET /api/destinations` - Get all destinations
- `GET /api/destinations/:key` - Get single destination details by key
- `POST /api/destinations/seed` - Trigger database seeding

### Trips (`/api/trips`)
- `GET /api/trips` - Retrieve saved trips
- `POST /api/trips` - Save a generated itinerary
- `GET /api/trips/:id` - Get specific trip by ID
- `DELETE /api/trips/:id` - Delete saved trip

### Expenses (`/api/expenses`)
- `GET /api/expenses` - List expenses
- `POST /api/expenses` - Record a new expense
- `DELETE /api/expenses/:id` - Delete an expense

### AI Integration (`/api/ai`)
- `POST /api/ai/transport` - Generate travel transport options (trains, buses, flights)
- `POST /api/ai/tab` - Generate day plans, hotel guides, food spots, or budget breakdown
- `POST /api/ai/summary` - Generate 8-point financial summary card
- `POST /api/ai/chat` - Interactive travel chatbot assistant
- `POST /api/ai/weather` - Destination climate & packing advice
- `POST /api/ai/packing` - Customized packing checklist
- `POST /api/ai/phrases` - Local language travel phrases with pronunciations
