const express = require("express");
const path = require("path");
const fs = require("fs");
const axios = require("axios");
const transporter = require("../config/mail");

const router = express.Router();

router.get("/download", (req, res) => {
  try {
    // 📄 Absolute resume path
    const filePath = path.resolve(__dirname, "..", "assets", "resume.pdf");

    // ✅ Check file exists FIRST
    if (!fs.existsSync(filePath)) {
      return res.status(404).send("Resume not found");
    }

    // ⚡ Send resume immediately (FAST)
    res.download(filePath, "Sujal_Patel_Resume.pdf");

    // 🚀 Background task: location + email (NON-BLOCKING)
    (async () => {
      try {
        const ip =
          req.headers["x-forwarded-for"]?.split(",")[0] ||
          req.socket.remoteAddress;

        const finalIP =
          ip === "::1" || ip.startsWith("127.")
            ? "8.8.8.8"
            : ip;

        const geo = await axios.get(`https://ipapi.co/${finalIP}/json/`);

        await transporter.sendMail({
          from: `"Portfolio Alert" <${process.env.EMAIL_USER}>`,
          to: process.env.ADMIN_REPORT_EMAIL,
          subject: "📄 Resume Downloaded",
          html: `
            <h2>Resume Download Alert</h2>
            <p><b>Time:</b> ${new Date().toLocaleString()}</p>
            <p><b>IP:</b> ${finalIP}</p>
            <p><b>Country:</b> ${geo.data.country_name}</p>
            <p><b>City:</b> ${geo.data.city}</p>
            <p><b>Region:</b> ${geo.data.region}</p>
            <p><b>ISP:</b> ${geo.data.org}</p>
          `
        });
      } catch (err) {
        console.error("Resume email error:", err.message);
      }
    })();

  } catch (error) {
    console.error("Resume download error:", error);
    res.status(500).send("Unable to download resume");
  }
});

module.exports = router;
