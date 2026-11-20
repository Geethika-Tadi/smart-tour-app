const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: false, // Optional for guest users
    },
    guestId: {
      type: String,
      default: '',
    },
    sourceCity: {
      type: String,
      required: true,
      trim: true,
    },
    destination: {
      type: String,
      required: true,
      trim: true,
    },
    days: {
      type: Number,
      required: true,
      min: 1,
    },
    budget: {
      type: Number,
      required: true,
    },
    travelStyle: {
      type: String,
      default: 'comfort',
    },
    persons: {
      type: Number,
      default: 1,
      min: 1,
    },
    stayPreference: {
      type: String,
      enum: ['hotel', 'relative'],
      default: 'hotel',
    },
    selectedTransport: {
      type: Object,
      default: null,
    },
    summary: {
      type: Object,
      default: {},
    },
    itineraryHtml: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Trip', tripSchema);
