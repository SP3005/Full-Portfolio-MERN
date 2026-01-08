import { useState } from "react"; // ✅ FIX 1
import "./Contact.css";

import email from "./images/email.png";
import phone from "./images/phone.png";
import github from "./images/github.png";
import whatsapp from "./images/whatsapp.png";
import location from "./images/location.png";
import linkedin from "./images/linkedin.png";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; // ✅ SAFE

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!API_BASE_URL) {
      console.error("VITE_API_BASE_URL is missing");
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch(`${API_BASE_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await res.json();
      console.log("SERVER RESPONSE:", data);

      if (!res.ok) throw new Error(data.message || "Request failed");

      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });

    } catch (error) {
      console.error("ERROR:", error);
      setStatus("error");
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-header">
        <h2 className="contact-title">
          Get In <span className="contact-title-accent">Touch</span>
        </h2>
        <p className="contact-subtitle">
          Have a project in mind or want to discuss opportunities?
          I'd love to hear from you.
        </p>
      </div>

      <div className="contact-layout">
        {/* FORM */}
        <div className="contact-form-card">
          <h3 className="contact-form-title">Send a Message</h3>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" required />
            <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Your Email" required />
            <input name="subject" value={form.subject} onChange={handleChange} placeholder="Subject" required />
            <textarea name="message" rows="5" value={form.message} onChange={handleChange} placeholder="Your Message" required />

            <button type="submit" className="contact-submit-btn">
              {status === "sending" ? "Sending..." : "Send Message →"}
            </button>

            {status === "success" && <p className="success-msg">Message sent successfully ✅</p>}
            {status === "error" && <p className="error-msg">Something went wrong ❌</p>}
          </form>
        </div>

        {/* INFO */}
        <div className="contact-info-panel">
          <div className="contact-info-item">
            <img src={email} alt="Email" />
            <a href="mailto:patelsujal3005@gmail.com">patelsujal3005@gmail.com</a>
          </div>

          <div className="contact-info-item">
            <img src={phone} alt="Phone" />
            <a href="tel:+919909502307">+91 99095 02307</a>
          </div>

          <div className="contact-info-item">
            <img src={location} alt="Location" />
            <p>India</p>
          </div>

          <div className="contact-socials">
            <a href="https://github.com/SP3005"><img src={github} alt="GitHub" /></a>
            <a href="https://www.linkedin.com/in/sujal-patel-03b6bb375"><img src={linkedin} alt="LinkedIn" /></a>
            <a href="https://wa.me/919909502307"><img src={whatsapp} alt="WhatsApp" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
