import "./Footer.css";
import email from "./images/email.png";
import phone from "./images/phone.png";
import github from "./images/github.png";
import whatsapp from "./images/whatsapp.png";
import location from "./images/location.png";
import linkedin from "./images/linkedin.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* BRAND */}
        <div className="footer-brand">
          <h3 className="footer-logo">
            Sujal<span> Patel</span>.
          </h3>
          <p className="footer-desc">
            MERN Stack & Frontend Developer passionate about building
            clean, scalable, and user-friendly web applications.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div className="footer-social">
          <h4>Connect</h4>
          <div className="footer-social-links">
            <a href="https://github.com/SP3005" aria-label="GitHub">
              <img src={github} alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/sujal-patel-03b6bb375?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" aria-label="LinkedIn">
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a href="mailto:sujalpatel@email.com" aria-label="Email">
              <img src={email} alt="Email" />
            </a>
            <a href="tel:+91 9909502307">
                <img src={phone} alt="Email" />
            </a>
            <a href="https://wa.me/919909502307" aria-label="WhatsApp">
              <img src={whatsapp} alt="WhatsApp" />
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        <p>© {year} Sujal Patel. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
