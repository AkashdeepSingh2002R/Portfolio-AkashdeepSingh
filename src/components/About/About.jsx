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
           <p>
  I’m a full-stack developer focused on building clean, accessible web apps with the
  <strong> MERN stack (MongoDB, Express, React, Node.js)</strong>. Based in Etobicoke, ON,
  I recently completed a diploma at Georgian College and I’m open to full-time roles.
</p>
<p>
  I turn product ideas into fast, reliable applications—designing React front-ends,
  building secure REST APIs with Node.js/Express, and working with MongoDB for data models,
  aggregation, and performance. I’m comfortable with JavaScript, Git, and basic CI/CD.
</p>
<p>
  Beyond code, I communicate clearly, write tidy commits, and keep performance and
  accessibility front-of-mind. I learn fast and ship iteratively with feedback.
</p>

          </div>
        </div>
      </section>
);

export default About;
