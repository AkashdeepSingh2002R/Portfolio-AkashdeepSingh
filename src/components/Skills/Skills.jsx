import React from "react";
import "./Skills.css";

const buckets = [
  {
    title: "Core · MEAN",
    items: [
      { name: "React", level: 3 },
      { name: "JavaScript", level: 3 },
      { name: "Node.js", level: 3 },
      { name: "Express", level: 3 },
      { name: "MongoDB", level: 2 },
     
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "HTML5", level: 3 },
      { name: "CSS3", level: 3 },
      { name: "Responsive UI", level: 3 },
      { name: "Accessibility (a11y)", level: 2 },
      { name: "Bootstrap", level: 2 },
      {name:"tailwind", level:2},
    ],
  },
  {
    title: "Tools & Practices",
    items: [
      { name: "Git / GitHub", level: 3 },
      { name: "REST APIs", level: 3 },
      { name: "Postman", level: 2 },
      { name: "JWT/Auth", level: 2 },
      { name: "Basic CI/CD", level: 1 },
      { name: "SQL (basics)", level: 1 },
    ],
  },
];

export default function Skills() {
  return (
    <section className="skills section" id="skills" aria-labelledby="skills-title">
      <h2 className="section-title" id="skills-title">Skills &amp; Technologies</h2>

      <div className="skills-grid-new">
        {buckets.map((b) => (
          <article className="skill-card" key={b.title}>
            <h3 className="skill-card-title">{b.title}</h3>

            <ul className="badge-list">
              {b.items.map(({ name, level }) => (
                <li className="badge" key={name}>
                  <span className="badge-label">{name}</span>
                  <span className="dots" aria-label={`Proficiency: ${level} of 3`}>
                    <span className={level >= 1 ? "dot on" : "dot"} />
                    <span className={level >= 2 ? "dot on" : "dot"} />
                    <span className={level >= 3 ? "dot on" : "dot"} />
                  </span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <p className="skills-note">
        <strong>Legend:</strong> ● basic · ●● working · ●●● advanced
      </p>
    </section>
  );
}
