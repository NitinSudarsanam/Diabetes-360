const express = require("express");
const router = express.Router();
const User = require("../models/User"); // Import User model

// Get user by email
router.get("/get-user", async (req, res) => {
    const { email } = req.query;

    if (!email) {
        return res.status(400).json({ error: "Email is required" });
    }

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        res.json(user);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = router;