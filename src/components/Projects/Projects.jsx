import React, { useState } from "react";
import "./Projects.css";
import ProjectModal from "../ProjectModal/ProjectModal";

// Add screenshots in /src/assets and import them:
import neighbourImg from "../../assets/neighbournet.png";
import primeplusImg from "../../assets/primeplus.png";

const projects = [
  {
    title: "NeighbourNet - Social Housing Platform",
    subtitle: "Social media network for neighbours",
    description: "A full-featured MERN stack app that allows users to interact with neighbours, post housing info, join communities, and view weather updates. TO test use this credentials - email - test@gmail.com password-111111",
    image: neighbourImg,
    tech: ["React", "Node.js", "Express", "MongoDB", "REST API"],
    live: "https://remarkable-pithivier-c497c5.netlify.app/welcome",
    github: "https://github.com/AkashdeepSingh2002R/NeighbourNet",
    features: [
      "Role-based auth (JWT), protected routes",
      "make your neighbours your friends",
      "Community join/leave, comment threads",
      "Weather API integration per location",
      "Deployed on Netlify/Render",
    ],
    responsibilities: [
      "Designed React UI & state management (RxJS)",
      "Built Express API with MongoDB (Mongoose)",
      "JWT-based auth and guards",
      "Wrote unit tests for core services",
    ],
  },
  {
    title: "Prime Plus - Tools Website",
    subtitle: "A simple Html css project",
    description: "A tools store website converted to Angular with carousel, emojis, and responsive layout.",
    image: primeplusImg,
    tech: ["Html", "CSS", "javascript"],
    live: "https://your-live-demo-link.com",
    github: "https://github.com/yourusername/primeplus",
    features: [
      "Product grid, categories, and detail view",
      "Client-side cart prototype",
      "Mobile-first responsive components",
    ],
    responsibilities: [
      "Migrated templates to Angular components",
      "Set up routing and lazy-loaded modules",
      "Refined visual design and accessibility",
    ],
  },
];

export default function Projects() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(null);

  const openModal = (p) => { setCurrent(p); setOpen(true); };
  const closeModal = () => setOpen(false);

  return (
    <section id="projects" className="projects section">
      <h2 className="section-title">Featured Projects</h2>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <article className="project-card" key={i}>
            <div className="project-image" onClick={() => openModal(p)} role="button" tabIndex={0} onKeyDown={(e)=>e.key==='Enter'&&openModal(p)}>
              <img src={p.image} alt={p.title} />
            </div>

            <div className="project-content">
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.description}</p>

              <div className="tech-stack">
                {p.tech.map((t) => (
                  <span className={`tech-badge tech-${t.toLowerCase().replace(/\s/g, "-")}`} key={t}>{t}</span>
                ))}
              </div>

              <div className="project-links">
                {p.live && <a href={p.live} className="btn btn-primary" target="_blank" rel="noreferrer">🌐 Live Demo</a>}
                {p.github && <a href={p.github} className="btn btn-secondary" target="_blank" rel="noreferrer">💻 GitHub</a>}
                <button className="btn btn-secondary" onClick={() => openModal(p)}>More details</button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <ProjectModal open={open} onClose={closeModal} project={current} />
    </section>
  );
}
