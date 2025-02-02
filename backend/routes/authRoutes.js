const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

// SIGNUP ROUTE
router.post('/signup', async (req, res) => {
  const { email, password, name, type } = req.body;

  try {
    // Validate inputs
    if (!email || !password || !name || !type) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({ email, password: hashedPassword, name, type });
    await newUser.save();

    // Respond
    res.status(201).json({ message: 'User successfully created!' });
  } catch (error) {
    console.error('Signup Error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// LOGIN ROUTE
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    // Create JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token, message: 'Login successful' });
  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
