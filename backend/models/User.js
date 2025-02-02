const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  age: { type: Integer, required: true },
  height: { type: Integer, required: true },
  weight: { type: Integer, required: true },
  bloodSugar: { type: Double, required: true },
  diabetesDuration: { type: Double, required: true },
  meds: { type: [String, String, Double], required: true },
  cardioLog: { type: [String, Double], required: true },
  weightsLog: { type: [String, Double], required: true }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
