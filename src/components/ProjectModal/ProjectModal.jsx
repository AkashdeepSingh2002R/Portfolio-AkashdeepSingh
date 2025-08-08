import React, { useEffect } from "react";
import "./ProjectModal.css";

export default function ProjectModal({ open, onClose, project }) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  if (!open || !project) return null;

  return (
    <div className="pm-backdrop" onClick={onClose}>
      <div className="pm-card" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        <button className="pm-close" onClick={onClose} aria-label="Close">×</button>

        <div className="pm-hero">
          {project.image && <img src={project.image} alt={project.title} />}
        </div>

        <h3 className="pm-title">{project.title}</h3>
        <p className="pm-sub">{project.subtitle || project.description}</p>

        <div className="pm-badges">
          {(project.tech || []).map((t) => (
            <span className="pm-badge" key={t}>{t}</span>
          ))}
        </div>

        {project.features?.length > 0 && (
          <div className="pm-block">
            <h4>Key features</h4>
            <ul>{project.features.map((f, i) => <li key={i}>{f}</li>)}</ul>
          </div>
        )}

        {project.responsibilities?.length > 0 && (
          <div className="pm-block">
            <h4>My role</h4>
            <ul>{project.responsibilities.map((f, i) => <li key={i}>{f}</li>)}</ul>
          </div>
        )}

        <div className="pm-links">
          {project.live && <a className="btn btn-primary" href={project.live} target="_blank" rel="noreferrer">🌐 Live Demo</a>}
          {project.github && <a className="btn btn-secondary" href={project.github} target="_blank" rel="noreferrer">💻 GitHub</a>}
        </div>
      </div>
    </div>
  );
}
