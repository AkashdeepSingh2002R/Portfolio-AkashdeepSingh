import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import profileImg from '../../assets/profile.jpg';
const Hero = () => (
  <section className="hero" id="home">
    <div className="hero-content">
      <div>
       <div className="profile-section">
            <div className="profile-image">
              <div className="profile-glow"></div>
              <img src={profileImg} alt="Akashdeep Singh" className="profile-img" />
            </div>
          </div>
          </div>
      <h1 className="hero-name">Hi, I'm Akashdeep Singh</h1>
      <p className="hero-title">Full-Stack Developer | MERN Stack | Open to Work</p>
      <div className="cta-buttons">
        <Link to="/projects" className="btn">Explore Projects</Link>
        <Link to="/about" className="btn">About Me</Link>
        <Link to="/contact" className="btn">Contact</Link>
        {/* keep resume as a normal link since it’s a file download */}
        <a href="/Akashdeep_Singh_Resume.docx" className="btn" target="_blank" rel="noopener noreferrer">
          View Resume
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
