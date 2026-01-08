const axios = require("axios");

const sendMail = async ({ subject, html }) => {
  try {
    await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: {
          name: "Portfolio Notification",
          email: process.env.BREVO_FROM_EMAIL
        },
        to: [{ email: process.env.ADMIN_EMAIL }],
        subject,
        htmlContent: html
      },
      {
        headers: {
          "api-key": process.env.BREVO_API_KEY,
          "Content-Type": "application/json"
        }
      }
    );

    console.log("✅ Email sent via Brevo API");
  } catch (err) {
    console.error(
      "❌ Brevo API error:",
      err.response?.data || err.message
    );
  }
};

module.exports = sendMail;
