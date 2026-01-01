const cron = require("node-cron");
const sendDailyReport = require("../utils/dailyReport");

cron.schedule("0 23 * * *", async () => {
  console.log("📧 Sending daily visitor report...");
  await sendDailyReport();
});
