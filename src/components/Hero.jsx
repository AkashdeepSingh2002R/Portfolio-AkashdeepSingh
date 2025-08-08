import React from 'react';
import '../App.css';
import profileImg from '../assets/profile.jpg';

const Hero = () => (
  <section className="hero" id="home">
        <div className="hero-content">
          <h1 className="hero-name">Hi, I'm Akashdeep Singh c</h1>
          <p className="hero-title">React Developer | MERN Stack | Open to Work</p>
          <div className="cta-buttons">
            <a href="#projects" className="btn">Explore Projects</a>
            <a href="/resume.pdf" className="btn" target="_blank" rel="noopener noreferrer">View Resume</a>
          </div>
        </div>
      </section>
);

export default Hero;
