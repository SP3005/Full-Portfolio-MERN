const express = require("express");
const path = require("path");
const fs = require("fs");
const axios = require("axios");
const transporter = require("../config/mail");

const router = express.Router();

router.get("/download", (req, res) => {
  try {
    const filePath = path.resolve(__dirname, "..", "assets", "resume.pdf");

    if (!fs.existsSync(filePath)) {
      return res.status(404).send("Resume not found");
    }

    // ⚡ 1️⃣ Send resume instantly
    res.download(filePath, "Sujal_Patel_Resume.pdf");

    // 🚀 2️⃣ Background email (NON-BLOCKING)
    (async () => {
      try {
        const ip =
          req.headers["x-forwarded-for"]?.split(",")[0] ||
          req.socket.remoteAddress;

        const finalIP =
          ip === "::1" || ip.startsWith("127.")
            ? null
            : ip;

        let locationHTML = "<p><b>Location:</b> Not available</p>";

        if (finalIP) {
          try {
            const geo = await axios.get(
              `https://ipapi.co/${finalIP}/json/`,
              { timeout: 3000 }
            );

            locationHTML = `
              <p><b>Country:</b> ${geo.data.country_name || "N/A"}</p>
              <p><b>City:</b> ${geo.data.city || "N/A"}</p>
              <p><b>Region:</b> ${geo.data.region || "N/A"}</p>
              <p><b>ISP:</b> ${geo.data.org || "N/A"}</p>
            `;
          } catch {
            // ✅ Ignore 429 / API failure
          }
        }

        await transporter.sendMail({
          from: `"Portfolio Alert" <${process.env.EMAIL_USER}>`,
          to: process.env.ADMIN_REPORT_EMAIL,
          subject: "📄 Resume Downloaded",
          html: `
            <h2>Resume Download Alert</h2>
            <p><b>Time:</b> ${new Date().toLocaleString()}</p>
            <p><b>IP:</b> ${finalIP || "Unknown"}</p>
            ${locationHTML}
          `
        });
      } catch (err) {
        console.error("Resume email error:", err.message);
      }
    })();

  } catch (error) {
    console.error("Resume download error:", error);
  }
});

module.exports = router;
