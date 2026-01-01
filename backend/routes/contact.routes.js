const router = require("express").Router();
const auth = require("../middleware/auth.middleware");
const Contact = require("../models/Contact");
const transporter = require("../config/mail");

/* 🔓 Public – Contact Form Submit */
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // 1️⃣ Save to DB
    await Contact.create({
      name,
      email,
      message
    });
    res.json({ success: true, message: "Message sent successfully" });

    // 2️⃣ Send Email to Admin
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_REPORT_EMAIL,
      subject: "📩 New Contact Message",
      html: `
        <h2>New Contact Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b><br/>${message}</p>
        <p><b>Date:</b> ${new Date().toLocaleString()}</p>
      `
    });

    
  } catch (error) {
    console.error("Contact email error:", error);
    res.status(500).json({ success: false });
  }
});

/* 🔒 Admin – Get All Contacts */
router.get("/", auth, async (req, res) => {
  const contacts = await Contact.find().sort({ createdAt: -1 });
  res.json(contacts);
});

module.exports = router;
