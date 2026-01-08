const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");

const contactRoutes = require("./routes/contact.routes");
const resumeRoutes = require("./routes/resume.routes");

const app = express();

/* ✅ REQUIRED FOR RENDER */
app.set("trust proxy", 1);

/* ✅ FINAL CORS CONFIG (LOCAL FRONTEND) */
app.use(
  cors({
    origin: [
      "http://localhost:5173",            // local dev
      "https://aditiportfolio02.netlify.app" // production
    ],
    methods: ["GET", "POST", "OPTIONS"],
    credentials: true
  })
);

app.use(helmet());
app.use(express.json());
app.use(cookieParser());

app.use("/api/contact", contactRoutes);
app.use("/api/resume", resumeRoutes);

module.exports = app;
