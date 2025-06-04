import React from 'react';
import '../App.css';
import profileImg from '../assets/profile.jpg';

const Projects = () => (
  <section className="projects" id="projects">
        <h2 className="section-title">Featured Projects</h2>
        {[
          {
            title: "NeighbourNet - Social Housing Platform",
            desc: "A full-featured MERN stack app that allows users to post housing info, join communities, and view weather updates.",
            tech: ["React", "Node.js", "MongoDB", "REST API", "Netlify"]
          },
          {
            title: "Prime Plus - Tools Website",
            desc: "A hardware and safety tools store website converted to React with carousel, emojis, and responsive layout.",
            tech: ["React", "CSS", "React Router", "Netlify"]
          },
          {
            title: "To-Do List App with Auth",
            desc: "CRUD-based Node.js + Express.js app with session authentication, EJS templating, and MongoDB storage.",
            tech: ["Node.js", "Express.js", "MongoDB", "EJS"]
          }
        ].map((project, idx) => (
          <div className="project-card" key={idx}>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.desc}</p>
            <div className="project-tech">
              {project.tech.map((t, i) => (
                <span className="tech-tag" key={i}>{t}</span>
              ))}
            </div>
            <div className="project-links">
              <a href="#" className="project-link">Live Demo</a>
              <a href="#" className="project-link">GitHub</a>
            </div>
          </div>
        ))}
      </section>
);

export default Projects;
