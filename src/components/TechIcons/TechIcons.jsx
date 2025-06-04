import React from 'react';

const TechIcons = () => {
  const techs = ['React', 'Node.js', 'MongoDB', 'JavaScript', 'HTML', 'CSS'];

  return (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', padding: '2rem' }}>
      {techs.map((tech, idx) => (
        <div key={idx} style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: '10px' }}>
          {tech}
        </div>
      ))}
    </div>
  );
};

export default TechIcons;
