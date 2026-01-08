const express = require("express");
const { submitContact } = require("../controllers/contact.controller");
const { contactLimiter } = require("../middleware/rateLimiter");

const router = express.Router();

router.post("/", contactLimiter, submitContact);

module.exports = router;
