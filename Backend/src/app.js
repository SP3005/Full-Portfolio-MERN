const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");

const contactRoutes = require("./routes/contact.routes");
const resumeRoutes = require("./routes/resume.routes");

const app = express();

app.set("trust proxy", 1);

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://sujalportfolio30.netlify.app"
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
