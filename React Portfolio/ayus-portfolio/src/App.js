import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';
import './index.css';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
