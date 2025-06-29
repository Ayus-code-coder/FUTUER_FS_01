import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>Technical Experiences</h2>
      <div className="skills-grid">
        <div className="skills-card">
          <i className="fa-solid fa-code"></i>
          <h3>Frontend Development</h3>
          <p>React, Vue, HTML5, CSS3, JavaScript</p>
        </div>
        <div className="skills-card">
          <i className="fa-solid fa-server"></i>
          <h3>Backend Development</h3>
          <p>Node.js, Python, MongoDB, PostgreSQL</p>
        </div>
        <div className="skills-card">
          <i className="fa-brands fa-python"></i>
          <h3>Python</h3>
          <p>Advanced: OOP, File I/O, APIs, Web Scraping, Automation, Flask</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
