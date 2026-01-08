import { useEffect } from "react";
import home from "./images/home.svg"
import about from "./images/about.png"
import skills from "./images/skills.png"
import project from "./images/project.png"
import contacts from "./images/contacts.png"
import profile from "./images/profile.mp4"
import "./Navbar.css";

const Navbar = ({ setIsLight }) => {
  useEffect(() => {
    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");
    const searchBox = document.getElementById("searchBox");
    const searchBtn = document.getElementById("searchBtn");
    const searchInput = searchBox.querySelector("input");
    const toggle = document.getElementById("themeToggle");

    function applyTheme(isLightMode) {
      document.body.classList.toggle("light", isLightMode);
      setIsLight(isLightMode);
      localStorage.setItem("theme", isLightMode ? "light" : "dark");
    }

    let isLight = localStorage.getItem("theme") === "light";
    applyTheme(isLight);

    toggle.onclick = () => {
      isLight = !isLight;
      applyTheme(isLight);
    };

    menuBtn.onclick = () => {
      navLinks.classList.toggle("active");
    };

    searchBtn.onclick = () => {
      searchBox.classList.toggle("active");
      if (searchBox.classList.contains("active")) {
        searchInput.focus();
      }
    };
  }, [setIsLight]);

  return (
    <nav className="navbar">
      <div className="logo">
        <video
          src={profile}
          autoPlay
          loop
          muted
          playsInline
          className="hero-video"
        >
        </video>
        <span className="brand">Sujal Patel</span>
      </div>

      <ul className="nav-links" id="navLinks">
        <li><a href="#home" data-tooltip="Home"><img src={home} /></a></li>
        <li><a href="#about" data-tooltip="About"><img src={about} /></a></li>
        <li><a href="#skills" data-tooltip="Skills"><img src={skills} /></a></li>
        <li><a href="#projects" data-tooltip="Projects"><img src={project} /></a></li>
        <li><a href="#contact" data-tooltip="Contacts"><img src={contacts} /></a></li>
        <li className="mobile-resume">
          <a
            href={`${import.meta.env.VITE_API_BASE_URL}/api/resume/download`}
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg class="resume-icon" viewBox="0 0 24 24">
              <path d="M12 16l4-5h-3V4h-2v7H8z" />
              <path d="M5 20h14v-2H5z" />
            </svg>
          </a>
        </li>
      </ul>

      <div className="search" id="searchBox">
        <button className="search-btn" id="searchBtn">
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <line x1="20" y1="20" x2="16.5" y2="16.5" />
          </svg>
        </button>
        <input type="text" placeholder="Search..." />
      </div>

      <div className="actions">
        <a
            href={`${import.meta.env.VITE_API_BASE_URL}/api/resume/download`}
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
          <svg class="resume-icon" viewBox="0 0 24 24">
            <path d="M12 16l4-5h-3V4h-2v7H8z" />
            <path d="M5 20h14v-2H5z" />
          </svg>
        </a>

        <button id="themeToggle" className="theme-toggle">
          <svg viewBox="0 0 24 24" class="icon-moon">
            <path d="M21 12.79A9 9 0 1 1 11.21 3
             A7 7 0 0 0 21 12.79z" />
          </svg>
          <svg viewBox="0 0 24 24" class="icon-sun">
            <circle cx="12" cy="12" r="5" />
            <g>
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </g>
          </svg>
        </button>

        <button className="menu-btn" id="menuBtn">☰</button>
      </div>
    </nav>
  );
};

export default Navbar;
