import React from "react";
import "./Hero.css";

const Hero = () => (
  <section className="hero" id="home">
    <div className="hero-content">
      <h1 className="hero-name">Hi, I'm Akashdeep Singh</h1>
      <p className="hero-title">Full-Stack Developer | MERN Stack | Open to Work</p>
      <div className="cta-buttons">
        <a href="/projects" className="btn">Explore Projects</a>
        <a href="/about" className="btn">About Me</a>
        <a href="/contact" className="btn">Contact</a>
        <a href="/Akashdeep_Singh_Resume.docx" className="btn" target="_blank" rel="noopener noreferrer">View Resume</a>
      </div>
    </div>
  </section>
);

export default Hero;