const express = require("express");
const path = require("path");
const fs = require("fs");
const transporter = require("../config/mail");
const Visitor = require("../models/Visitor");

const router = express.Router();

router.get("/download", (req, res) => {
  try {
    const filePath = path.resolve(__dirname, "..", "assets", "resume.pdf");

    if (!fs.existsSync(filePath)) {
      return res.status(404).send("Resume not found");
    }

    // ⚡ 1️⃣ Send resume immediately (NO WAIT)
    res.download(filePath, "Sujal_Patel_Resume.pdf");

    // 🚀 2️⃣ Background email (NO EXTERNAL CALLS)
    (async () => {
      try {
        // Get latest visitor info (already tracked)
        const visitor = await Visitor.findOne().sort({ visitedAt: -1 });

        await transporter.sendMail({
          from: `"Portfolio Alert" <${process.env.EMAIL_USER}>`,
          to: process.env.ADMIN_REPORT_EMAIL,
          subject: "📄 Resume Downloaded",
          html: `
            <h2>Resume Download Alert</h2>
            <p><b>Time:</b> ${new Date().toLocaleString()}</p>
            <p><b>Country:</b> ${visitor?.country || "Unknown"}</p>
            <p><b>City:</b> ${visitor?.city || "Unknown"}</p>
            <p><b>Device:</b> ${visitor?.device || "Unknown"}</p>
            <p><b>Browser:</b> ${visitor?.browser || "Unknown"}</p>
          `
        });
      } catch (err) {
        console.error("Resume email error:", err.message);
      }
    })();

  } catch (err) {
    console.error("Resume download error:", err);
  }
});

module.exports = router;
