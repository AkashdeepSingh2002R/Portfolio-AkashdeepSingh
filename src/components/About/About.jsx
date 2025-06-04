import React from 'react';
import './About.css';
import profileImg from '../../assets/profile.jpg';

const About = () => (
  <section className="about" id="about">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="profile-section">
            <div className="profile-image">
              <div className="profile-glow"></div>
              <img src={profileImg} alt="Akashdeep Singh" className="profile-img" />
            </div>
            <div className="tech-stack">
              <p className="stack-title">Tech Stack</p>
              <div className="tech-icons">
                <div className="tech-icon" title="MongoDB">🍃</div>
                <div className="tech-icon" title="Express">⚡</div>
                <div className="tech-icon" title="React">⚛️</div>
                <div className="tech-icon" title="Node.js">🟢</div>
              </div>
            </div>
          </div>
          <div className="about-text">
            <p className="about-intro">Diploma Student | Georgian College | Etobicoke, ON</p>
            <p>
              Detail-oriented and ambitious React Developer with strong knowledge of front-end technologies and hands-on experience in full-stack projects. Currently on a Canadian work permit and seeking entry-level opportunities in the tech sector.
            </p>
            <p>
              Adept at building responsive, interactive web applications using React.js, HTML, CSS, and integrating backend services using Node.js and MongoDB.
            </p>
            <p>
              Known for quickly learning new technologies and applying them effectively in real-world scenarios.
            </p>
          </div>
        </div>
      </section>
);

export default About;
