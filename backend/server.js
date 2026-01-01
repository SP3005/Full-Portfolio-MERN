require("dotenv").config();
const app = require("./app");
const connectDB = require("./config/db");
const Admin = require("./models/Admin");

connectDB();
require("./cron/dailyCron");

// Auto-create admin
(async () => {
  const exists = await Admin.findOne({ email: process.env.ADMIN_EMAIL });
  if (!exists) {
    await Admin.create({
      email: process.env.ADMIN_EMAIL,
      password: process.env.ADMIN_PASSWORD,
    });
    console.log("✅ Admin Created");
  }
})();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on ${PORT}`));
app.disable("x-powered-by");