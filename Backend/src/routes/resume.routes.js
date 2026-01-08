const express = require("express");
const path = require("path");
const sendMail = require("../utils/sendMail");
const { resumeLimiter } = require("../middleware/rateLimiter");

const router = express.Router();

router.get("/download", resumeLimiter, async (req, res) => {
  try {
    // ✅ NON-BLOCKING EMAIL (IMPORTANT)
    sendMail({
      subject: "📄 Resume Downloaded",
      html: `
        <h3>Resume Download Alert</h3>
        <p>Someone downloaded your resume.</p>
        <p><b>Time:</b> ${new Date().toLocaleString()}</p>
      `
    }).catch(console.error);

    const filePath = path.join(__dirname, "../assets/resume.pdf");

    res.download(filePath, "Aditi_Modhvadiya_Resume.pdf");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error downloading resume");
  }
});

module.exports = router;
