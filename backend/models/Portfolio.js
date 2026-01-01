const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema({
  profile: {
    name: String,
    role: String,
    bio: String,
  },
  about: String,
  skills: [String],
  projects: [
    {
      title: String,
      description: String,
      tech: [String],
      liveUrl: String,
      githubUrl: String,
    }
  ],
  socials: {
    github: String,
    linkedin: String,
    email: String,
  }
}, { timestamps: true });

module.exports = mongoose.model("Portfolio", portfolioSchema);
