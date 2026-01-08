import { useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import CanvasBackground from "./components/CanvasBackground/CanvasBackground";

import "./index.css";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import PortfolioAI from "./components/PortfolioAI";

const App = () => {
  const [isLight, setIsLight] = useState(
    localStorage.getItem("theme") === "light"
  );

  return (
    <>
      <CanvasBackground isLight={isLight} />
      <Navbar setIsLight={setIsLight} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <PortfolioAI />
    </>
  );
};

export default App;
