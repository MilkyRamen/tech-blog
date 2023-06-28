const express = require('express');
const router = express.Router();
const { User } = require('../models');

router.post('/signup', async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.create({ username, password });

        res.status(201).json({ message: 'User Created', user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ where: {username} });

        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }

        const isPasswordValid = user.validatePassword(password);

        if (!isPasswordValid) {
            res.status(401).json({ message: 'Invalid Password' });
            return;
        }

        res.json({ message: 'User logged in', user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;