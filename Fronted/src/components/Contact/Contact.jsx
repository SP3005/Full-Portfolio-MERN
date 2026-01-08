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

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form)
        }
      );

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
      {/* HEADER */}
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
        {/* LEFT : FORM */}
        <div className="contact-form-card">
          <h3 className="contact-form-title">Send a Message</h3>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text"  onChange={handleChange} name="name" value={form.name} placeholder="Your Name" required />
            <input type="email" onChange={handleChange} name="email"  value={form.email} placeholder="Your Email" required />
            <input type="text"  onChange={handleChange} name="subject" value={form.subject} placeholder="Subject" required />
            <textarea rows="5"  onChange={handleChange} name="message" value={form.message} placeholder="Your Message" required></textarea>

            <button type="submit" className="contact-submit-btn">
              {status === "sending" ? "Sending..." : "Send Message →"}
            </button>
            {status === "success" && (
            <p className="success-msg">Message sent successfully ✅</p>
          )}
          {status === "error" && (
            <p className="error-msg">Something went wrong ❌</p>
          )}
          </form>
        </div>

        {/* RIGHT : INFO */}
        <div className="contact-info-panel">
          <div className="contact-info-item">
            <div className="contact-info-icon">
              <img src={email} alt="Email" />
            </div>
            <div>
              <span>Email</span>
              <a href="mailto:patelsujal3005@gmail.com">
                patelsujal3005@gmail.com
              </a>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-info-icon">
              <img src={phone} alt="Phone" />
            </div>
            <div>
              <span>Phone</span>
              <a href="tel:+91 9909502307">+91 99095 02307</a>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-info-icon">
              <img src={location} alt="Location" />
            </div>
            <div>
              <span>Location</span>
              <p>India</p>
            </div>
          </div>

          <div className="contact-socials">
            <a href="https://github.com/SP3005" aria-label="GitHub">
              <img src={github} alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/sujal-patel-03b6bb375?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" aria-label="LinkedIn">
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a href="https://wa.me/919909502307" aria-label="WhatsApp">
              <img src={whatsapp} alt="WhatsApp" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
