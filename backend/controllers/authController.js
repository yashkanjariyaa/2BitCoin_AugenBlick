const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/model');

const router = express.Router();

// Login endpoint
router.post('/:userType/login', async (req, res) => {
  const { username, password } = req.body;
  const { userType } = req.params;
  
  try {
    const user = await User.findOne({ username, userType });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Here you can generate JWT token and send it as response
    res.json({ message: 'Login successful' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/admin/login', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const user = await User.findOne({ username, userType: 'admin' }); // Find admin user
      if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      // Here you can generate JWT token and send it as response
      res.json({ message: 'Login successful' });
      // Rest of the code remains the same
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
// Signup endpoint
router.post('/signup', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: 'Username already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    // Here you can generate JWT token and send it as response
    res.json({ message: 'Signup successful' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
    console.log(error);
  }
});

router.post('/admin/signup', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const existingUser = await User.findOne({ username });
  
      // Check if user already exists
      if (existingUser) {
        return res.status(400).json({ error: 'Username already exists' });
      }
  
      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create new admin user
      const newUser = new User({ username, password: hashedPassword, userType: 'admin' });
      await newUser.save();
  
      // Here you can generate JWT token and send it as response
      res.json({ message: 'Admin signup successful' });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
module.exports = router;
