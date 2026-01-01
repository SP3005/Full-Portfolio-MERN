const router = require("express").Router();
const auth = require("../middleware/auth.middleware");
const { getPortfolio, updatePortfolio } = require("../controllers/portfolio.controller");

router.get("/", getPortfolio);
router.put("/", auth, updatePortfolio);

module.exports = router;
