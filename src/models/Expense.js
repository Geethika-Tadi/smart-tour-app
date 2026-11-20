const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: false,
    },
    tripId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Trip',
      required: false,
    },
    name: {
      type: String,
      required: [true, 'Please provide expense name'],
      trim: true,
    },
    amount: {
      type: Number,
      required: [true, 'Please provide expense amount'],
    },
    category: {
      type: String,
      enum: ['Food', 'Transport', 'Hotel', 'Activities', 'Shopping', 'Medical', 'Other'],
      default: 'Other',
    },
    person: {
      type: String,
      default: 'Me',
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Expense', expenseSchema);
