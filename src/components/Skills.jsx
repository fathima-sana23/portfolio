import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'BACKEND CORE',
      icon: '⚡',
      skills: ['Laravel (10/11)', 'PHP 8+', 'RESTful API Development', 'Role-Based Access Control (RBAC)', 'Authentication (Sanctum / OTP)', 'Cron Jobs & Automation'],
      color: '#915eff'
    },
    {
      title: 'DATABASE',
      icon: '🗄',
      skills: ['MySQL', 'Database Design', 'Query Optimization', 'Indexing & Performance Tuning'],
      color: '#f59e0b'
    },
    {
      title: 'DEVELOPMENT TOOLS',
      icon: '⚙',
      skills: ['Git & GitHub', 'GitLab CI/CD', 'PHPUnit Testing', 'Docker (Basic Containerization)', 'Redis (Caching Basics)'],
      color: '#00d2ff'
    },
    {
      title: 'FRONTEND INTEGRATION',
      icon: '🌐',
      skills: ['HTML5 / CSS3', 'JavaScript (ES6+)', 'React (Basic Integration)', 'Tailwind CSS'],
      color: '#ff007a'
    }
  ];

  return (
    <section id="skills" style={{ padding: 'var(--section-padding)' }}>
      <div className="container">
        <h2 className="section-title">
          Tech <br />
          <span className="vibrant-text">Stack & Mastery</span>
          <span className="underline"></span>
        </h2>
        
        <div className="rich-grid">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="glass-card-premium" style={{ 
              borderColor: `rgba(${idx % 2 === 0 ? '145, 94, 255' : '245, 158, 11'}, 0.2)`
            }}>
              <div style={{ 
                fontSize: '3rem', 
                marginBottom: '1.5rem',
                filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.2))'
              }}>
                {cat.icon}
              </div>
              <h3 style={{ 
                color: 'white', 
                marginBottom: '2rem', 
                fontSize: '1.5rem',
                letterSpacing: '2px'
              }}>
                {cat.title}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                {cat.skills.map((skill, sIdx) => (
                  <span key={sIdx} style={{
                    padding: '0.6rem 1.2rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--glass-border)',
                    borderRadius: '12px',
                    fontSize: '0.9rem',
                    color: 'var(--text-dim)',
                    fontWeight: '500',
                    transition: 'all 0.3s'
                  }} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        .skill-pill:hover {
          background: var(--primary);
          color: white;
          border-color: var(--primary);
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(145,94,255,0.4);
        }
      `}</style>
    </section>
  );
};

export default Skills;
