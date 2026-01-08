import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./Hero.css";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useEffect(() => {
    gsap.to(".blob", {
      y: 40,
      x: -30,
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(".dots", {
      opacity: 0.6,
      duration: 6,
      repeat: -1,
      yoyo: true,
    });

    gsap.to(".wave path", {
      y: -10,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <section className="hero" id="home">
      <svg className="hero-shape blob" viewBox="0 0 600 600">
        <path
          fill="var(--accent-soft)"
          d="M421,327Q386,404,300,430Q214,456,151,394Q88,332,104,250Q120,168,190,121Q260,74,340,104Q420,134,436,217Q452,300,421,327Z"
        />
      </svg>

      <svg className="hero-shape dots" width="400" height="400">
        <defs>
          <pattern
            id="dotPattern"
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1.5" fill="rgba(255,255,255,0.06)" />
          </pattern>
        </defs>
        <rect width="400" height="400" fill="url(#dotPattern)" />
      </svg>

      <div className="hero-container">
        <div>
          <div className="badge">MERN Stack & Frontend Developer</div>

          <h1>
            Hey! I'm <span>Sujal Patel</span>
          </h1>

          <h2>Frontend & MERN Stack Developer</h2>

          <p>
            a passionate Frontend and MERN Stack Developer. As a fresher, I focus
            on building clean, responsive, and user-friendly web applications
            using React.js, modern CSS, and JavaScript.
            <br />
            <br />
            I enjoy learning new technologies, improving UI performance, and
            turning ideas into real, working products.
          </p>

          <div className="btns">
            <button className="btn">View Projects</button>
            <button className="btn outline">Contact Me</button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="circle outer">
            <div className="icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
            </div>
            <div className="icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
            </div>
            <div className="icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
            </div>
            <div className="icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
            </div>
          </div>

          <div className="circle inner">
            <div className="icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
            </div>
            <div className="icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
            </div>
            <div className="icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
            </div>
          </div>

          <div className="avatar">
            <img src="/6de78a41-fa1b-4fbe-9ac7-6cbc6306ff48.png" />
          </div>
        </div>
      </div>

      <svg className="hero-bottom wave" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path
          d="M0,40 C240,90 480,10 720,30 960,50 1200,110 1440,80 L1440,120 L0,120 Z"
          fill="var(--accent-soft)"
        />
      </svg>
    </section>
  );
};

export default Hero;
