const mongoose = require("mongoose");

const visitorSchema = new mongoose.Schema({
  ip: String,
  country: String,
  city: String,
  region: String,

  browser: String,
  device: String,
  os: String,

  visitedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Visitor", visitorSchema);
