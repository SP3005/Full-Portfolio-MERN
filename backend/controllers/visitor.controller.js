const Visitor = require("../models/Visitor");

exports.trackVisitor = async (req, res) => {
  try {
    const userAgent = req.headers["user-agent"] || "";

    // Simple device detection
    const device = /mobile/i.test(userAgent) ? "Mobile" : "Desktop";

    // Simple browser detection
    let browser = "Unknown";
    if (/chrome/i.test(userAgent)) browser = "Chrome";
    else if (/firefox/i.test(userAgent)) browser = "Firefox";
    else if (/safari/i.test(userAgent)) browser = "Safari";
    else if (/edge/i.test(userAgent)) browser = "Edge";

    // Save visitor WITHOUT external APIs
    await Visitor.create({
      device,
      browser
      // country & city stay "Unknown"
    });

    return res.json({ success: true });
  } catch (error) {
    console.error("Visitor tracking error:", error.message);

    // ❗ NEVER fail tracking endpoint
    return res.json({ success: true });
  }
};
