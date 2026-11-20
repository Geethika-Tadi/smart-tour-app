const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();

const { connectDB, checkDbStatus } = require('./src/config/db');
const errorHandler = require('./src/middleware/errorHandler');

// Route imports
const authRoutes = require('./src/routes/authRoutes');
const destinationRoutes = require('./src/routes/destinationRoutes');
const tripRoutes = require('./src/routes/tripRoutes');
const expenseRoutes = require('./src/routes/expenseRoutes');
const aiRoutes = require('./src/routes/aiRoutes');
const trainRoutes = require('./src/routes/trainRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Initialize Database connection
connectDB();

// Global Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Serve Frontend Static Files
app.use(express.static(path.join(__dirname, 'public')));

// API Health Check
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    serverTime: new Date().toISOString(),
    database: checkDbStatus() ? 'Connected' : 'Disconnected / Standalone Mode',
    features: {
      auth: true,
      destinations: true,
      trips: true,
      expenses: true,
      aiProxy: true,
      trains: true,
    },
  });
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/destinations', destinationRoutes);
app.use('/api/trips', tripRoutes);
app.use('/api/expenses', expenseRoutes);
app.use('/api/ai', aiRoutes);
app.use('/api/trains', trainRoutes);

// Fallback to index.html for single-page app
app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api')) {
    return next();
  }
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Error handling middleware
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`=============================================`);
  console.log(`🚀 SmartTour Server is running on port ${PORT}`);
  console.log(`🌐 Web App: http://localhost:${PORT}`);
  console.log(`🩺 Health API: http://localhost:${PORT}/api/health`);
  console.log(`=============================================`);
});

module.exports = app;
