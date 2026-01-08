const Contact = require("../models/Contact");
const sendMail = require("../utils/sendMail");

exports.submitContact = async (req, res) => {
  try {
    const { name, email, message, subject } = req.body;

    if (!name || !email || !message || !subject)
      return res.status(400).json({ message: "All fields required" });

    await Contact.create({ name, email, message, subject });

    // ✅ NON-BLOCKING EMAIL (IMPORTANT)
    sendMail({
      subject: "📩 New Contact Message",
      html: `
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p>${subject}</P>
        <p>${message}</p>
      `
    }).catch(console.error);

    res.status(201).json({ message: "Message sent successfully 🚀" });

  } catch (err) {
    console.error("Contact error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
