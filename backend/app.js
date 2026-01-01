const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const compression = require("compression");

const app = express();

/* 🔐 TRUST PROXY (IMPORTANT FOR RENDER) */
app.set("trust proxy", 1);

/* 🔐 SECURITY HEADERS */
app.use(helmet());

/* 🔐 BODY PARSER */
app.use(express.json({ limit: "10kb" }));

/* 🔐 SANITIZATION */
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());
app.use(compression());

/* 🔐 RATE LIMITING */
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests. Try again later."
});
app.use("/api", limiter);

/* 🔐 CORS (LOCK IT DOWN) */
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://your-portfolio.netlify.app"
  ],
  credentials: true
}));

/* ROUTES */
app.use("/api/admin", require("./routes/admin.routes"));
app.use("/api/portfolio", require("./routes/portfolio.routes"));
app.use("/api/visitor", require("./routes/visitor.routes"));
app.use("/api/contact", require("./routes/contact.routes"));
app.use("/api/resume", require("./routes/resume.routes"));


app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).json({
    message: "Something went wrong"
  });
});

module.exports = app;