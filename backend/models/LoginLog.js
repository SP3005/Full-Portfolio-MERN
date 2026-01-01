const mongoose = require("mongoose");

const loginLogSchema = new mongoose.Schema({
  email: String,
  ip: String,
  success: Boolean,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("LoginLog", loginLogSchema);
