import React, { useEffect } from 'react';

const Navbar = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === entry.target.id) {
              link.classList.add('active');
            }
          });
        }
      });
    }, {
      threshold: 0.8
    });

    sections.forEach(section => observer.observe(section));
  }, []);

  return (
    <nav className="navber">
      <a href="#home" className="logo">CyberDev</a>
      <ul className="nav-links">
        <li><a href="#home" className="nav-link">Home</a></li>
        <li><a href="#skills" className="nav-link">Skills</a></li>
        <li><a href="#projects" className="nav-link">Projects</a></li>
        <li><a href="#contact" className="nav-link">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
