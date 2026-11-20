const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Protect routes - requires valid JWT
const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET || 'smarttour_super_secret_jwt_key_2026_change_in_production'
      );
      req.user = await User.findById(decoded.id).select('-password');
      return next();
    } catch (error) {
      return res.status(401).json({ success: false, message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    return res.status(401).json({ success: false, message: 'Not authorized, no token provided' });
  }
};

// Optional auth - populates req.user if token is present, continues if not
const optionalAuth = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET || 'smarttour_super_secret_jwt_key_2026_change_in_production'
      );
      req.user = await User.findById(decoded.id).select('-password');
    } catch (error) {
      // Ignore token errors for optional auth
    }
  }

  next();
};

module.exports = { protect, optionalAuth };
