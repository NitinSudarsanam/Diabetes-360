const express = require("express");
const User = require("../models/User");
const router = express.Router();

// Get all users
router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Add a new user
router.post("/", async (req, res) => {
  const { name, email } = req.body;
  try {
    const newUser = await User.create({ email, password, name, age, bloodSugar, height, weight});
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: "Error creating user" });
  }
});

module.exports = router;