import React from 'react';
import profileImg from '../assets/download.jpg'; // Make sure image is in /src/assets

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 id="Hi">Hi, I am Ayus</h1>
        <h1 id="Full-stack">Full-stack Developer</h1>
        <p>Building digital experiences that merge creativity with technology</p>
        <p className="highlight">
          Specializing in modern web development and cyber systems
        </p>
        <a href="#contact" className="c-button">Let's connect</a>
      </div>

      <div className="hero-image">
        <img id="profile-image" src={profileImg} alt="Portfolio img" />
      </div>
    </section>
  );
};

export default Hero;
