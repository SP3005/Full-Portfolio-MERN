const router = require("express").Router();
const { loginAdmin } = require("../controllers/admin.controller");
const auth = require("../middleware/auth.middleware"); // ✅ FIX
const sendDailyReport = require("../utils/dailyReport");
const loginLimiter = require("../middleware/loginLimiter");

// 🔐 Admin login
router.post("/login", loginAdmin);

// 📧 Manual trigger for daily report (Admin only)
router.post("/send-report", auth, async (req, res) => {
  await sendDailyReport();
  res.json({ message: "Daily report sent successfully" });
});

router.post("/login", loginLimiter, loginAdmin);
module.exports = router;
