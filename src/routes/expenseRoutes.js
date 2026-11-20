const express = require('express');
const Expense = require('../models/Expense');
const { optionalAuth } = require('../middleware/auth');
const { checkDbStatus } = require('../config/db');

const router = express.Router();

let memoryExpenses = [];

// @route   GET /api/expenses
// @desc    Get all expenses (optionally by tripId or user)
// @access  Public / Optional Auth
router.get('/', optionalAuth, async (req, res, next) => {
  try {
    const { tripId } = req.query;

    if (checkDbStatus()) {
      let query = {};
      if (req.user) query.user = req.user._id;
      if (tripId) query.tripId = tripId;

      const expenses = await Expense.find(query).sort({ createdAt: -1 });
      return res.status(200).json({ success: true, count: expenses.length, data: expenses });
    }

    let filtered = memoryExpenses;
    if (tripId) {
      filtered = memoryExpenses.filter((e) => e.tripId === tripId);
    }
    res.status(200).json({ success: true, count: filtered.length, data: filtered });
  } catch (error) {
    next(error);
  }
});

// @route   POST /api/expenses
// @desc    Add a new expense
// @access  Public / Optional Auth
router.post('/', optionalAuth, async (req, res, next) => {
  try {
    const { name, amount, category, person, tripId } = req.body;

    if (!name || amount === undefined) {
      return res.status(400).json({ success: false, message: 'Please provide expense name and amount' });
    }

    const expenseData = {
      user: req.user ? req.user._id : undefined,
      tripId: tripId || undefined,
      name,
      amount: Number(amount),
      category: category || 'Other',
      person: person || 'Me',
    };

    if (checkDbStatus()) {
      const expense = await Expense.create(expenseData);
      return res.status(201).json({ success: true, data: expense });
    }

    const mockExp = {
      _id: 'exp_' + Date.now(),
      ...expenseData,
      createdAt: new Date().toISOString(),
    };
    memoryExpenses.push(mockExp);
    res.status(201).json({ success: true, data: mockExp });
  } catch (error) {
    next(error);
  }
});

// @route   DELETE /api/expenses/:id
// @desc    Delete an expense
// @access  Public / Optional Auth
router.delete('/:id', optionalAuth, async (req, res, next) => {
  try {
    if (checkDbStatus()) {
      const expense = await Expense.findById(req.params.id);
      if (!expense) {
        return res.status(404).json({ success: false, message: 'Expense not found' });
      }
      await expense.deleteOne();
      return res.status(200).json({ success: true, message: 'Expense deleted' });
    }

    memoryExpenses = memoryExpenses.filter((e) => e._id !== req.params.id);
    res.status(200).json({ success: true, message: 'Expense deleted from local session' });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
