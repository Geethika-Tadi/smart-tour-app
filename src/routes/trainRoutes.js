const express = require('express');
const { getAllTrainsForRoute, getIRCTCLink, getConfirmTktLink, searchStations } = require('../services/railwayService');

const router = express.Router();

// @route   GET /api/trains/search-stations
// @desc    Live autocomplete & search across all 8,958 Indian Railway stations
router.get('/search-stations', (req, res) => {
  try {
    const { q } = req.query;
    if (!q || q.trim().length === 0) {
      return res.status(200).json({ success: true, stations: [] });
    }
    const results = searchStations(q.trim(), 12);
    res.status(200).json({
      success: true,
      count: results.length,
      stations: results
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// @route   GET /api/trains/all
// @desc    Get all available trains on the route with schedule, classes, and live seat links
// @access  Public
router.get('/all', async (req, res, next) => {
  try {
    const { source, dest } = req.query;
    if (!source || !dest) {
      return res.status(400).json({ success: false, message: 'source and dest query parameters are required' });
    }

    const result = await getAllTrainsForRoute(source, dest);
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
});

// @route   GET /api/trains/irctc-link
// @desc    Get direct IRCTC search & ConfirmTkt live seat links for station codes
router.get('/irctc-link', (req, res) => {
  const { from, to, date } = req.query;
  res.status(200).json({
    success: true,
    irctcUrl: getIRCTCLink(from, to, date),
    confirmTktUrl: getConfirmTktLink(from, to, date),
  });
});

module.exports = router;
