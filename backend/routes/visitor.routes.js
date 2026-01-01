const router = require("express").Router();
const auth = require("../middleware/auth.middleware");
const Visitor = require("../models/Visitor");

const {
  trackVisitor,
  getAnalytics,
  getAdvancedAnalytics
} = require("../controllers/visitor.controller");

/* ================= PUBLIC ================= */
router.post("/track", trackVisitor);

/* ================= ADMIN ================= */
router.get("/analytics", auth, getAnalytics);
router.get("/advanced", auth, getAdvancedAnalytics);

/* 🔒 Admin – Visitor List */
router.get("/list", auth, async (req, res) => {
  try {
    const visitors = await Visitor.find()
      .sort({ visitedAt: -1 })
      .limit(500); // safety limit

    res.json(visitors);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch visitors" });
  }
});

module.exports = router;
