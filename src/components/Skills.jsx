import React from 'react';
import '../App.css';
import profileImg from '../assets/profile.jpg';

const Skills = () => (
  <section className="skills" id="skills">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          <div className="skills-bars">
            {[
              { label: "JavaScript (ES6+)", percent: 90 },
              { label: "React.js", percent: 85 },
              { label: "Node.js", percent: 80 },
              { label: "MongoDB", percent: 75 },
              { label: "HTML5/CSS3", percent: 85 }
            ].map(skill => (
              <div className="skill-item" key={skill.label}>
                <div className="skill-header">
                  <span>{skill.label}</span>
                  <span>{skill.percent}%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: skill.percent + '%' }}></div>
                </div>
              </div>
            ))}
          </div>

          <div className="tech-network">
            {[
              { label: "MERN", className: "center" },
              { label: "React", style: { top: "0", left: "50%", transform: "translateX(-50%)" } },
              { label: "Node", style: { top: "50%", right: "0", transform: "translateY(-50%)" } },
              { label: "MongoDB", style: { bottom: "0", left: "50%", transform: "translateX(-50%)" } },
              { label: "Express", style: { top: "50%", left: "0", transform: "translateY(-50%)" } },
              { label: "Git", style: { top: "20%", left: "20%" } },
              { label: "Postman", style: { top: "20%", right: "20%" } },
              { label: "Bootstrap", style: { bottom: "20%", left: "20%" } },
              { label: "SQL", style: { bottom: "20%", right: "20%" } }
            ].map((node, idx) => (
              <div key={idx} className={`tech-node ${node.className || ''}`} style={node.style}>{node.label}</div>
            ))}
          </div>
        </div>
      </section>
);

export default Skills;
