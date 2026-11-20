require('dotenv').config();
const mongoose = require('mongoose');
const Destination = require('../models/Destination');
const seedDestinations = require('./seedData');

const seedDB = async () => {
  const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/smarttour';

  try {
    await mongoose.connect(mongoURI);
    console.log('Connected to MongoDB for seeding...');

    await Destination.deleteMany({});
    console.log('Cleared existing destinations...');

    await Destination.insertMany(seedDestinations);
    console.log(`✅ Successfully seeded ${seedDestinations.length} destinations!`);

    process.exit(0);
  } catch (error) {
    console.error('Seeding error:', error.message);
    process.exit(1);
  }
};

seedDB();
