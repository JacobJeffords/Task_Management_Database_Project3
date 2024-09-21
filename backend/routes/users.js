const express = require('express');
const db = require('../models');
const router = express.Router();

// Register a new user
router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await db.User.create({ username, password: hashedPassword });
  res.status(201).json(user);
});

// User login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await db.User.findOne({ where: { username } });
  if (user && await bcrypt.compare(password, user.password)) {
    res.json({ message: 'Login successful', userId: user.id });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

module.exports = router;