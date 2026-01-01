const axios = require("axios");
const Visitor = require("../models/Visitor");
const UAParser = require("ua-parser-js");

exports.trackVisitor = async (req, res) => {
  try {
    let ip =
      req.headers["x-forwarded-for"]?.split(",")[0] ||
      req.socket.remoteAddress;

    // Handle localhost / IPv6
    const isLocal =
      ip === "::1" ||
      ip === "127.0.0.1" ||
      ip.startsWith("::ffff:127.");

    const finalIP = isLocal ? "8.8.8.8" : ip;

    // Parse browser/device
    const parser = new UAParser(req.headers["user-agent"]);
    const ua = parser.getResult();

    // Geo location
    const geo = await axios.get(`https://ipapi.co/${finalIP}/json/`);

    await Visitor.create({
      ip: finalIP,
      country: geo.data.country_name,
      city: geo.data.city,
      region: geo.data.region,

      browser: ua.browser.name || "Unknown",
      device: ua.device.type || "Desktop",
      os: ua.os.name || "Unknown"
    });

    res.json({ success: true });
  } catch (error) {
    console.error("Visitor tracking error:", error.message);
    res.status(500).json({ success: false });
  }
};


exports.getAnalytics = async (req, res) => {
  const total = await Visitor.countDocuments();

  const countries = await Visitor.aggregate([
    { $group: { _id: "$country", count: { $sum: 1 } } }
  ]);

  const daily = await Visitor.aggregate([
    {
      $group: {
        _id: {
          $dateToString: { format: "%Y-%m-%d", date: "$visitedAt" }
        },
        count: { $sum: 1 }
      }
    }
  ]);

  res.json({ total, countries, daily });
};

exports.getAdvancedAnalytics = async (req, res) => {
  const devices = await Visitor.aggregate([
    { $group: { _id: "$device", count: { $sum: 1 } } }
  ]);

  const browsers = await Visitor.aggregate([
    { $group: { _id: "$browser", count: { $sum: 1 } } }
  ]);

  res.json({ devices, browsers });
};
