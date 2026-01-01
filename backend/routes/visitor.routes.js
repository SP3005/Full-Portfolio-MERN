const router = require("express").Router();
const auth = require("../middleware/auth.middleware");

const {
  trackVisitor,
  getAnalytics,
  getAdvancedAnalytics // ✅ IMPORT HERE
} = require("../controllers/visitor.controller");

const Visitor = require("../models/Visitor");

/* Public */
router.post("/track", trackVisitor);

/* Admin analytics */
router.get("/analytics", auth, getAnalytics);

/* Admin advanced analytics */
router.get("/advanced", auth, getAdvancedAnalytics);

/* Admin visitor list */
router.get("/list", auth, async (req, res) => {
  try {
    const visitors = await Visitor.find().sort({ visitedAt: -1 });
    res.json(visitors);
  } catch {
    res.status(500).json({ message: "Failed to fetch visitors" });
  }
});

module.exports = router;
