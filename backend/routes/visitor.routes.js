const router = require("express").Router();
const auth = require("../middleware/auth.middleware");

const {
  trackVisitor,
  getAnalytics,
  getAdvancedAnalytics
} = require("../controllers/visitor.controller");

/* Public */
router.post("/track", trackVisitor);

/* Admin */
router.get("/analytics", auth, getAnalytics);
router.get("/advanced", auth, getAdvancedAnalytics);

module.exports = router;
