import "./Projects.css";
import project1 from "./images/project1.png";
import project2 from "./images/project2.png";

const Projects = () => {
  return (
    <section className="works-section" id="projects">
      <h2 className="works-title">
        Latest <span className="works-title-accent">Works</span>
      </h2>

      <div className="works-timeline">
        <div className="works-timeline-line"></div>

        <div className="works-title-wrap works-title-left works-item-mobile">
          <div className="works-card-image">
            <img src={project1} alt="Share Life Give Blood Project" />
          </div>

          <div className="works-card-content">
            <h3 className="works-project-title works-project-red">
              Share Life, Give Blood
            </h3>

            <p className="works-project-desc">
              A MERN stack web application designed to connect blood donors with
              recipients. Users can register, search donors by blood group, and
              manage blood requests efficiently.
            </p>

            <div className="works-project-tags">
              <span>#MongoDB</span>
              <span>#Express</span>
              <span>#React</span>
              <span>#Node</span>
            </div>

            <div className="works-project-links">
              <a
                href="https://sharelifegiveblood1.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="works-link-live"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/SP3005/-Blood-Donation-Management-System"
                target="_blank"
                rel="noreferrer"
                className="works-link-code"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>

        <div className="works-title-wrap works-title-right works-item-mobile">
          <div className="works-card-content">
            <h3 className="works-project-title works-project-blue">
              Portfolio Website
            </h3>

            <p className="works-project-desc">
              A modern MERN stack portfolio website showcasing my skills,
              projects, and experience with dark/light mode support,
              animations, and a fully responsive UI.
            </p>

            <div className="works-project-tags">
              <span>#MongoDB</span>
              <span>#Express</span>
              <span>#React</span>
              <span>#Node</span>
            </div>

            <div className="works-project-links">
              <a
                href="https://sujalportfolio30.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="works-link-live"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/SP3005/Full-Portfolio-MERN"
                target="_blank"
                rel="noreferrer"
                className="works-link-code"
              >
                Source Code
              </a>
            </div>
          </div>

          <div className="works-card-image">
            <img
              src={project2}
              alt="Portfolio Project"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
