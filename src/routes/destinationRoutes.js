const express = require('express');
const Destination = require('../models/Destination');
const seedDestinations = require('../data/seedData');
const { checkDbStatus } = require('../config/db');

const router = express.Router();

// @route   GET /api/destinations
// @desc    Get all active destinations
// @access  Public
router.get('/', async (req, res, next) => {
  try {
    if (checkDbStatus()) {
      let destinations = await Destination.find({ isActive: true });
      if (destinations.length === 0) {
        // Auto-seed if database is empty
        await Destination.insertMany(seedDestinations);
        destinations = await Destination.find({ isActive: true });
      }
      return res.status(200).json({ success: true, count: destinations.length, data: destinations });
    }

    // Fallback to static seed data if DB is offline
    res.status(200).json({
      success: true,
      count: seedDestinations.length,
      data: seedDestinations,
      note: 'Loaded from local seed data',
    });
  } catch (error) {
    next(error);
  }
});

// @route   GET /api/destinations/:key
// @desc    Get destination by key (e.g., 'agra', 'goa')
// @access  Public
router.get('/:key', async (req, res, next) => {
  try {
    const key = req.params.key.toLowerCase();

    if (checkDbStatus()) {
      const destination = await Destination.findOne({ key });
      if (destination) {
        return res.status(200).json({ success: true, data: destination });
      }
    }

    const fallback = seedDestinations.find((d) => d.key === key);
    if (!fallback) {
      return res.status(404).json({ success: false, message: 'Destination not found' });
    }

    res.status(200).json({ success: true, data: fallback });
  } catch (error) {
    next(error);
  }
});

// @route   POST /api/destinations/seed
// @desc    Manually trigger database seeding
// @access  Public / Admin
router.post('/seed', async (req, res, next) => {
  try {
    if (!checkDbStatus()) {
      return res.status(503).json({
        success: false,
        message: 'MongoDB is not connected. Please check MONGO_URI in .env.',
      });
    }

    await Destination.deleteMany({});
    const created = await Destination.insertMany(seedDestinations);

    res.status(201).json({
      success: true,
      message: `Successfully seeded ${created.length} destinations`,
      data: created,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
