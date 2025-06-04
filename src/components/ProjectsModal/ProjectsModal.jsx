import React, { useState } from 'react';

const ProjectsModal = () => {
  const [selected, setSelected] = useState(null);
  const projects = [
    { title: 'NeighbourNet', tech: 'React', desc: 'Community web app' },
    { title: 'Prime Tools', tech: 'HTML/CSS', desc: 'Hardware landing site' }
  ];

  return (
    <section id="projects" style={{ padding: '2rem' }}>
      <h2>Projects</h2>
      <div style={{ display: 'flex', gap: '1rem' }}>
        {projects.map((p, i) => (
          <button key={i} onClick={() => setSelected(p)}>{p.title}</button>
        ))}
      </div>
      {selected && (
        <div style={{ background: '#eee', padding: '1rem', marginTop: '1rem' }}>
          <h3>{selected.title}</h3>
          <p>{selected.desc}</p>
          <button onClick={() => setSelected(null)}>Close</button>
        </div>
      )}
    </section>
  );
};

export default ProjectsModal;
