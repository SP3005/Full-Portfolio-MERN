module.exports = async () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const total = await Visitor.countDocuments({
    visitedAt: { $gte: today }
  });

  const countries = await Visitor.aggregate([
    { $match: { visitedAt: { $gte: today } } },
    { $group: { _id: "$country", count: { $sum: 1 } } }
  ]);

  const html = `
    <h2>📊 Daily Portfolio Report</h2>
    <p><b>Total Visitors:</b> ${total}</p>
    <p>${countries.map(c => `${c._id}: ${c.count}`).join("<br>")}</p>
  `;

  // 🚀 NON-BLOCKING EMAIL
  transporter.sendMail({
    to: process.env.ADMIN_REPORT_EMAIL,
    subject: "📊 Daily Portfolio Report",
    html
  }).catch(console.error);
};
