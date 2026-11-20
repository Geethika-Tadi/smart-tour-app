const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, default: 'Attraction' },
  entry: { type: Number, default: 0 },
  desc: { type: String, default: '' },
});

const hotelItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: String, default: '⭐⭐⭐' },
  amenities: { type: String, default: '' },
});

const transportItemSchema = new mongoose.Schema({
  mode: { type: String, default: '🚗' },
  name: { type: String, required: true },
  route: { type: String, default: '' },
  price: { type: Number, required: true },
  duration: { type: String, default: '' },
});

const destinationSchema = new mongoose.Schema(
  {
    key: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    subtitle: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      required: true,
    },
    places: [placeSchema],
    hotels: {
      type: Map,
      of: [hotelItemSchema],
      default: {},
    },
    transport: {
      type: Map,
      of: [transportItemSchema],
      default: {},
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Destination', destinationSchema);
