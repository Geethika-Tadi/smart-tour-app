const express = require('express');
const Trip = require('../models/Trip');
const { optionalAuth } = require('../middleware/auth');
const { checkDbStatus } = require('../config/db');

const router = express.Router();

// Memory store fallback if DB is not connected
let memoryTrips = [];

// @route   GET /api/trips
// @desc    Get saved trips (filtered by user or guestId)
// @access  Public / Optional Auth
router.get('/', optionalAuth, async (req, res, next) => {
  try {
    const { guestId } = req.query;

    if (checkDbStatus()) {
      let query = {};
      if (req.user) {
        query.user = req.user._id;
      } else if (guestId) {
        query.guestId = guestId;
      }

      const trips = await Trip.find(query).sort({ createdAt: -1 }).limit(20);
      return res.status(200).json({ success: true, count: trips.length, data: trips });
    }

    // Memory fallback
    let filtered = memoryTrips;
    if (guestId) {
      filtered = memoryTrips.filter((t) => t.guestId === guestId);
    }
    res.status(200).json({ success: true, count: filtered.length, data: filtered });
  } catch (error) {
    next(error);
  }
});

// @route   POST /api/trips
// @desc    Save a new trip itinerary
// @access  Public / Optional Auth
router.post('/', optionalAuth, async (req, res, next) => {
  try {
    const {
      sourceCity,
      destination,
      days,
      budget,
      travelStyle,
      persons,
      stayPreference,
      selectedTransport,
      summary,
      itineraryHtml,
      guestId,
    } = req.body;

    if (!sourceCity || !destination || !days || !budget) {
      return res.status(400).json({
        success: false,
        message: 'Please provide sourceCity, destination, days, and budget',
      });
    }

    const tripData = {
      user: req.user ? req.user._id : undefined,
      guestId: guestId || 'guest_default',
      sourceCity,
      destination,
      days: Number(days),
      budget: Number(budget),
      travelStyle: travelStyle || 'comfort',
      persons: Number(persons) || 1,
      stayPreference: stayPreference || 'hotel',
      selectedTransport: selectedTransport || null,
      summary: summary || {},
      itineraryHtml: itineraryHtml || '',
    };

    if (checkDbStatus()) {
      const trip = await Trip.create(tripData);
      return res.status(201).json({ success: true, data: trip });
    }

    // Memory fallback
    const mockTrip = {
      _id: 'trip_' + Date.now(),
      ...tripData,
      createdAt: new Date().toISOString(),
    };
    memoryTrips.unshift(mockTrip);
    res.status(201).json({ success: true, data: mockTrip });
  } catch (error) {
    next(error);
  }
});

// @route   GET /api/trips/:id
// @desc    Get trip by ID
// @access  Public / Optional Auth
router.get('/:id', optionalAuth, async (req, res, next) => {
  try {
    if (checkDbStatus()) {
      const trip = await Trip.findById(req.params.id);
      if (!trip) {
        return res.status(404).json({ success: false, message: 'Trip not found' });
      }
      return res.status(200).json({ success: true, data: trip });
    }

    const trip = memoryTrips.find((t) => t._id === req.params.id);
    if (!trip) {
      return res.status(404).json({ success: false, message: 'Trip not found' });
    }
    res.status(200).json({ success: true, data: trip });
  } catch (error) {
    next(error);
  }
});

// @route   DELETE /api/trips/:id
// @desc    Delete a saved trip
// @access  Public / Optional Auth
router.delete('/:id', optionalAuth, async (req, res, next) => {
  try {
    if (checkDbStatus()) {
      const trip = await Trip.findById(req.params.id);
      if (!trip) {
        return res.status(404).json({ success: false, message: 'Trip not found' });
      }
      await trip.deleteOne();
      return res.status(200).json({ success: true, message: 'Trip deleted successfully' });
    }

    memoryTrips = memoryTrips.filter((t) => t._id !== req.params.id);
    res.status(200).json({ success: true, message: 'Trip deleted from local session' });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
