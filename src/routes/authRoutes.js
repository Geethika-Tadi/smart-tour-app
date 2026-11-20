const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { protect } = require('../middleware/auth');
const { checkDbStatus } = require('../config/db');
const { sendOtpEmail } = require('../services/emailService');

const router = express.Router();

const generateToken = (id) => {
  return jwt.sign(
    { id },
    process.env.JWT_SECRET || 'smarttour_super_secret_jwt_key_2026_change_in_production',
    { expiresIn: '30d' }
  );
};

// Generate 6-digit OTP
const generateOtp = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

// In-memory OTP storage for standalone / demo fallback
const memoryOtpStore = new Map();

// @route   POST /api/auth/register
// @desc    Register a new user & send OTP for verification
// @access  Public
router.post('/register', async (req, res, next) => {
  try {
    const { name, email, password, phone } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Please provide email and password' });
    }

    const otp = generateOtp();
    const otpExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes
    const userName = name || email.split('@')[0];

    // Dispatch email to user's real email address
    const emailResult = await sendOtpEmail(email.toLowerCase(), otp, userName);

    if (!checkDbStatus()) {
      // Standalone mode: save in memory
      memoryOtpStore.set(email.toLowerCase(), {
        name: userName,
        email: email.toLowerCase(),
        password,
        phone: phone || '',
        otp,
        otpExpires,
      });

      return res.status(200).json({
        success: true,
        requireOtp: true,
        message: `Verification OTP has been sent directly to your email (${email})`,
        email: email.toLowerCase(),
        emailPreviewUrl: emailResult.previewUrl || null,
      });
    }

    let user = await User.findOne({ email: email.toLowerCase() });

    if (user && user.isVerified) {
      return res.status(400).json({ success: false, message: 'User already exists and is verified. Please log in.' });
    }

    if (!user) {
      user = await User.create({
        name: userName,
        email: email.toLowerCase(),
        password,
        phone: phone || '',
        isVerified: false,
        otp,
        otpExpires,
      });
    } else {
      // User exists but unverified: update password and send fresh OTP
      user.password = password;
      user.otp = otp;
      user.otpExpires = otpExpires;
      await user.save();
    }

    res.status(200).json({
      success: true,
      requireOtp: true,
      message: `Verification code sent directly to your email (${email})`,
      email: user.email,
      emailPreviewUrl: emailResult.previewUrl || null,
    });
  } catch (error) {
    next(error);
  }
});

// @route   POST /api/auth/login
// @desc    Authenticate user - if unverified, request OTP
// @access  Public
router.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Please enter email and password' });
    }

    if (!checkDbStatus()) {
      // Standalone mode: check memory store or create demo verified user
      const existing = memoryOtpStore.get(email.toLowerCase());
      if (existing && !existing.isVerified) {
        const otp = generateOtp();
        existing.otp = otp;
        existing.otpExpires = new Date(Date.now() + 10 * 60 * 1000);
        const emailResult = await sendOtpEmail(email.toLowerCase(), otp, existing.name || 'Traveler');
        return res.status(200).json({
          success: true,
          requireOtp: true,
          message: `Verification code sent to your email (${email})`,
          email: email.toLowerCase(),
          emailPreviewUrl: emailResult.previewUrl || null,
        });
      }

      const mockToken = generateToken('mock_user_id');
      return res.status(200).json({
        success: true,
        token: mockToken,
        user: {
          id: 'mock_user_id',
          name: email.split('@')[0],
          email,
          isVerified: true,
        },
      });
    }

    const user = await User.findOne({ email: email.toLowerCase() });

    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }

    // If user is not yet verified, send OTP
    if (!user.isVerified) {
      const otp = generateOtp();
      user.otp = otp;
      user.otpExpires = new Date(Date.now() + 10 * 60 * 1000);
      await user.save();

      const emailResult = await sendOtpEmail(user.email, otp, user.name || 'Traveler');

      return res.status(200).json({
        success: true,
        requireOtp: true,
        message: `Please verify your account. A 6-digit OTP has been sent to ${user.email}`,
        email: user.email,
        emailPreviewUrl: emailResult.previewUrl || null,
      });
    }

    const token = generateToken(user._id);

    res.status(200).json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        isVerified: user.isVerified,
      },
    });
  } catch (error) {
    next(error);
  }
});

// @route   POST /api/auth/verify-otp
// @desc    Verify 6-digit OTP and activate user
// @access  Public
router.post('/verify-otp', async (req, res, next) => {
  try {
    const { email, otp } = req.body;

    if (!email || !otp) {
      return res.status(400).json({ success: false, message: 'Email and 6-digit OTP are required' });
    }

    const cleanEmail = email.toLowerCase().trim();
    const cleanOtp = String(otp).trim();

    if (!checkDbStatus()) {
      const stored = memoryOtpStore.get(cleanEmail);
      if (!stored) {
        // Allow demo fallback OTP
        const mockToken = generateToken('mock_verified_id');
        return res.status(200).json({
          success: true,
          message: 'Account verified successfully!',
          token: mockToken,
          user: { id: 'mock_verified_id', name: cleanEmail.split('@')[0], email: cleanEmail, isVerified: true },
        });
      }

      if (stored.otp !== cleanOtp) {
        return res.status(400).json({ success: false, message: 'Invalid OTP code. Please check and re-enter.' });
      }

      stored.isVerified = true;
      const mockToken = generateToken('mock_user_' + Date.now());
      return res.status(200).json({
        success: true,
        message: 'Account verified successfully!',
        token: mockToken,
        user: { id: 'mock_user_' + Date.now(), name: stored.name, email: stored.email, phone: stored.phone, isVerified: true },
      });
    }

    const user = await User.findOne({ email: cleanEmail });
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    if (user.otp !== cleanOtp) {
      return res.status(400).json({ success: false, message: 'Invalid OTP code. Please enter the correct code.' });
    }

    if (user.otpExpires && new Date() > user.otpExpires) {
      return res.status(400).json({ success: false, message: 'OTP has expired. Please request a new one.' });
    }

    // Mark user as verified
    user.isVerified = true;
    user.otp = null;
    user.otpExpires = null;
    await user.save();

    const token = generateToken(user._id);

    console.log(`✅ [User Verified Successfully]: ${user.email}`);

    res.status(200).json({
      success: true,
      message: 'Account successfully verified!',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        isVerified: true,
      },
    });
  } catch (error) {
    next(error);
  }
});

// @route   POST /api/auth/resend-otp
// @desc    Resend fresh 6-digit OTP
// @access  Public
router.post('/resend-otp', async (req, res, next) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ success: false, message: 'Email is required' });
    }

    const cleanEmail = email.toLowerCase().trim();
    const otp = generateOtp();
    const otpExpires = new Date(Date.now() + 10 * 60 * 1000);
    let userName = 'Traveler';

    if (checkDbStatus()) {
      const user = await User.findOne({ email: cleanEmail });
      if (user) {
        user.otp = otp;
        user.otpExpires = otpExpires;
        await user.save();
        userName = user.name || userName;
      }
    } else {
      const stored = memoryOtpStore.get(cleanEmail) || { email: cleanEmail };
      stored.otp = otp;
      stored.otpExpires = otpExpires;
      memoryOtpStore.set(cleanEmail, stored);
      userName = stored.name || userName;
    }

    const emailResult = await sendOtpEmail(cleanEmail, otp, userName);

    res.status(200).json({
      success: true,
      message: `A new verification code has been sent directly to your email (${cleanEmail})`,
      email: cleanEmail,
      emailPreviewUrl: emailResult.previewUrl || null,
    });
  } catch (error) {
    next(error);
  }
});

// @route   GET /api/auth/me
// @desc    Get current logged in user profile
// @access  Private
router.get('/me', protect, async (req, res) => {
  res.status(200).json({
    success: true,
    user: req.user,
  });
});

module.exports = router;
