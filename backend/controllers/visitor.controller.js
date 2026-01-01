const Visitor = require("../models/Visitor");

/* ================= TRACK VISITOR ================= */
exports.trackVisitor = async (req, res) => {
  try {
    const ua = req.headers["user-agent"] || "";

    const device = /mobile/i.test(ua) ? "Mobile" : "Desktop";

    let browser = "Unknown";
    if (/chrome/i.test(ua)) browser = "Chrome";
    else if (/firefox/i.test(ua)) browser = "Firefox";
    else if (/safari/i.test(ua)) browser = "Safari";
    else if (/edge/i.test(ua)) browser = "Edge";

    await Visitor.create({ device, browser });

    return res.json({ success: true });
  } catch (err) {
    console.error("trackVisitor error:", err.message);
    return res.json({ success: true }); // never fail
  }
};

/* ================= BASIC ANALYTICS ================= */
exports.getAnalytics = async (req, res) => {
  try {
    const total = await Visitor.countDocuments();

    const byCountry = await Visitor.aggregate([
      { $group: { _id: "$country", count: { $sum: 1 } } }
    ]);

    res.json({ total, byCountry });
  } catch (err) {
    res.status(500).json({ message: "Analytics failed" });
  }
};

/* ================= ADVANCED ANALYTICS ================= */
exports.getAdvancedAnalytics = async (req, res) => {
  try {
    const devices = await Visitor.aggregate([
      { $group: { _id: "$device", count: { $sum: 1 } } }
    ]);

    const browsers = await Visitor.aggregate([
      { $group: { _id: "$browser", count: { $sum: 1 } } }
    ]);

    res.json({ devices, browsers });
  } catch (err) {
    res.status(500).json({ message: "Advanced analytics failed" });
  }
};
