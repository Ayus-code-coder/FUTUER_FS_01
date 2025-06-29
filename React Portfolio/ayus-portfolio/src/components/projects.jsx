import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3>Live News App</h3>
          <p>
            A news application that fetches real-time headlines using NewsAPI
            and displays them by categories.
          </p>
          <a href="https://github.com/Ayus-code-coder/Live-News-Application.git" target="_blank" rel="noreferrer">View Code</a>
        </div>

        <div className="project-card">
          <h3>Personal Portfolio Website</h3>
          <p>
            A fully responsive developer portfolio built using HTML, CSS, and JavaScript to showcase skills and projects.
          </p>
          <a href="https://github.com/yourusername/portfolio-website" target="_blank" rel="noreferrer">View Code</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
