const express = require('express');
const router = express.Router();
const userController = require();
const bcrypt = require('bcryptjs');
const pool = require('../db');

// User Registration
router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        await pool.query('INSERT INTO users (username, password) VALUES ($1, $2)', [username, hashedPassword]);
        res.status(201).send('User registered');
    } catch (error) {
        res.status(500).send('Error registering user');
    }
});

// User login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
        const user = result.rows[0];
        if (user && await bcrypt.compare(password, user.password)) {
            req.session.userId = user.id; // Store user ID in session
            res.status(200).send('Login successful');
        } else {
            res.status(401).send('Invalid');
        }
    } catch (error) {
        res.status(500).send('Error');
    }
});

module.exports = router;