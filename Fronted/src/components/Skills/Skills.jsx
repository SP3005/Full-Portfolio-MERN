import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-header">
        <h2>
          Tech Stack <span>Expertise</span>
        </h2>
        <p>A professional toolkit optimized for performance and scalability</p>
      </div>

      <div className="skills-grid">
        {/* FRONTEND */}
        <div className="skill-card frontend">
          <h3>Frontend</h3>
          <div className="icons">
            <div className="skills-icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
              <span>React</span>
            </div>

            <div className="skills-icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" />
              <span>Next.js</span>
            </div>

            <div className="skills-icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
              <span>JavaScript</span>
            </div>

            <div className="skills-icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
              <span>HTML5</span>
            </div>

            <div className="skills-icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
              <span>CSS3</span>
            </div>
          </div>
        </div>

        {/* BACKEND */}
        <div className="skill-card backend">
          <h3>Backend</h3>
          <div className="icons">
            <div className="skills-icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
              <span>Node.js</span>
            </div>

            <div className="skills-icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
              <span>Express</span>
            </div>

            <div className="skills-icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
              <span>MongoDB</span>
            </div>
          </div>
        </div>

        {/* AI & TOOLS */}
        <div className="skill-card tools">
          <h3>AI & Tools</h3>
          <div className="icons">
            <div className="skills-icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
              <span>Git</span>
            </div>

            <div className="skills-icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
              <span>GitHub</span>
            </div>

            <div className="skills-icon">
              <img src="https://cdn-icons-png.flaticon.com/512/4712/4712035.png" />
              <span>AI Agents</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;