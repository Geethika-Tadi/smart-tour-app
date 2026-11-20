const mongoose = require('mongoose');

let isConnected = false;

const connectDB = async () => {
  const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/smarttour';

  try {
    const conn = await mongoose.connect(mongoURI, {
      serverSelectionTimeoutMS: 5000,
    });
    isConnected = true;
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    isConnected = false;
    console.warn(`⚠️  MongoDB Connection Warning: ${error.message}`);
    console.warn(`💡 If you have not started local MongoDB or want to use MongoDB Atlas:`);
    console.warn(`   Set MONGO_URI in your .env file to your Atlas cluster string.`);
    console.warn(`   The server will still run and serve frontend + AI features.`);
  }
};

const checkDbStatus = () => {
  return isConnected && mongoose.connection.readyState === 1;
};

module.exports = { connectDB, checkDbStatus };
