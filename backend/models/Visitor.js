const mongoose = require("mongoose");

const visitorSchema = new mongoose.Schema({
  country: { type: String, default: "Unknown" },
  city: { type: String, default: "Unknown" },
  device: { type: String, default: "Unknown" },
  browser: { type: String, default: "Unknown" },
  visitedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Visitor", visitorSchema);
