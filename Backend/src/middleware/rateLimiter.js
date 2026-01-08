const rateLimit = require("express-rate-limit");

exports.contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: "Too many messages. Try later."
});

exports.resumeLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 20,
  message: "Too many downloads."
});
