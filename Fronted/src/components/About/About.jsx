import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./About.css";

const About = () => {
  useEffect(() => {
    // ✅ Register plugin INSIDE effect (safe for React)
    gsap.registerPlugin(ScrollTrigger);

    /* SECTION TITLE + CARD STAGGER */
    gsap.utils.toArray(".section-title").forEach((title) => {
      const section = title.parentElement;

      const cards = section.querySelectorAll(
        ".timeline-item, .summary-card, .mini-card"
      );

      gsap.fromTo(
        title,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: title,
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        cards,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: "power2.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: title,
            start: "top 80%",
          },
        }
      );
    });

    /* ACTIVE TIMELINE CARD */
    gsap.utils.toArray(".timeline-item").forEach((item) => {
      ScrollTrigger.create({
        trigger: item,
        start: "top center",
        end: "bottom center",
        onEnter: () => item.classList.add("active"),
        onEnterBack: () => item.classList.add("active"),
        onLeave: () => item.classList.remove("active"),
        onLeaveBack: () => item.classList.remove("active"),
      });
    });

    // ✅ Cleanup (prevents StrictMode double run issues)
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.killTweensOf("*");
    };
  }, []);

  return (
    <section className="about-journey" id="about">
      {/* ROTATING RING */}
      <svg className="svg-ring" viewBox="0 0 200 200">
        <circle
          cx="100"
          cy="100"
          r="92"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2"
          strokeDasharray="6 10"
        />
      </svg>

      <h2 className="title">
        About My <span>Journey</span>
      </h2>

      <div className="journey-layout">
        {/* LEFT TIMELINE */}
        <div className="timeline">
          <h3 className="section-title">Education Background</h3>

          <div className="timeline-item">
            <span className="dot"></span>
            <div className="timeline-card">
              <h4>Bachelor of Computer Applications - BCA</h4>
              <p className="org">
                📍 Navgujarat BCA College, Gandhinagar, Gujarat
              </p>
              <span className="date">July 2022 – March 2025</span>
            </div>
          </div>

          <div className="timeline-item">
            <span className="dot"></span>
            <div className="timeline-card">
              <h4>Senior Secondary (12th) – Commerce</h4>
              <p className="org">
                📍 Bhagwati Vidyalaya, Ahmedabad, Gujarat
              </p>
              <span className="date">Completed 2022</span>
            </div>
          </div>

          <h3 className="section-title">Certifications</h3>

          <div className="timeline-item">
            <span className="dot"></span>
            <div className="timeline-card">
              <h4>MERN Stack Developer Internship</h4>
              <p className="org">
                Instructor: BrainyBeam Technologies Pvt Ltd
              </p>
              <p className="org">📍 Ahmedabad, Gujarat</p>
              <span className="date">2024 – 2025</span>
            </div>
          </div>
        </div>

        {/* RIGHT SUMMARY */}
        <div className="summary">
          <h3 className="section-title">Professional Summary</h3>

          <div className="summary-card">
            <p>
              <strong>Full Stack Development & AI:</strong> I build scalable,
              AI-powered web applications that solve real-world problems.
            </p>
            <p>
              <strong>Innovation & Entrepreneurship:</strong> I bridge the gap
              between technical execution and business growth.
            </p>
            <p>
              <strong>Continuous Learning:</strong> Exploring AI agents,
              automation, and modern architectures.
            </p>
          </div>

          <div className="mini-grid">
            <div className="mini-card">
              <h5>Analytical Problem Solving</h5>
              <p>Breaking complex problems into clear solutions.</p>
            </div>

            <div className="mini-card">
              <h5>Lifelong Learning</h5>
              <p>Staying updated with modern technologies.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
