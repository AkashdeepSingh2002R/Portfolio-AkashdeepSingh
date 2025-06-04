
import React from 'react';
import './About.css';
import profileImg from '../assets/profile.jpg';

export default function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <img src={profileImg} alt="Profile" className="about-img" />
        <p>
          I'm a full-stack developer with MERN stack skills and a passion for modern UI/UX.
        </p>
      </div>
    </section>
  );
}
