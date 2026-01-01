const router = require("express").Router();
const auth = require("../middleware/auth.middleware");
const {
  trackVisitor,
  getAnalytics,
  getAdvancedAnalytics
} = require("../controllers/visitor.controller");

router.post("/track", trackVisitor);
router.get("/analytics", auth, getAnalytics);
router.get("/advanced", auth, getAdvancedAnalytics);

module.exports = router;
