
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const jwt = require("jsonwebtoken"); // Import jwt
require("dotenv").config();
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 8080;
const MONGODB_URI = "mongodb+srv://pierrejoseph:O1cUCLVKwjRk3UWB@diabetes-360.5s5zl.mongodb.net/?retryWrites=true&w=majority&appName=diabetes-360"
const JWT_SECRET = "your_jwt_secret"; 

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err);
    process.exit(1); // Exit if DB connection fails
  });

// Define User Schema & Model
const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  type: { type: String, required: true }
});

const User = mongoose.model("User", userSchema);

// 📝 **Signup Route (Hash password before saving)**
app.post("/api/signup", async (req, res) => {
  const { email, password, name, type } = req.body;

  // Validate required fields
  if (!email || !password || !name || !type) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      email,
      password: hashedPassword,
      name,
      type,
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ error: "Signup failed, please try again later" });
  }
});

app.post("/api/login", async (req, res) => {
  try {
    console.log("🔍 Login Request Body:", req.body);
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    // Compare password with hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    console.log("✅ Token generated:", token); // Log the token for debugging purposes
    res.json({ token, message: "Login successful" });
  } catch (error) {
    console.error("❌ Login error:", error); // Detailed error logging
    res.status(500).json({ error: "Login failed" });
  }
});

// 🚀 **Start Server**
app.listen(PORT, () => {
  console.log(`🌍 Server running on port ${PORT}`);
});