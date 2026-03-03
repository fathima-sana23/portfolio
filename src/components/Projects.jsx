import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'HILITE MALL',
      category: 'Enterprise Backend',
      desc: 'Robust store management system with high-availability architecture.',
      img: '🏢'
    },
    {
      title: 'MEDICAL CENTRE',
      category: 'HealthTech API',
      desc: 'HIPAA-compliant appointment engine and doctor-patient workflow.',
      img: '🏥'
    },
    {
      title: 'LEARNING APP',
      category: 'EdTech / Fintech',
      desc: 'EMI payment strategy and real-time student tracking dashboard.',
      img: '🎓'
    },
    {
      title: 'CRM GENIUS',
      category: 'Business Logic',
      desc: 'Predictive lead tracking and client conversion reporting.',
      img: '📈'
    },
    {
      title: 'TICKETING 24/7',
      category: 'Support Infra',
      desc: 'SLA-driven task assignment and escalation management.',
      img: '🎫'
    },
    {
        title: 'PRIVILEGE CLIQUE',
        category: 'Identity & Auth',
        desc: 'OTP-secured member portal with automated PDF generation.',
        img: '🔐'
    }
  ];

  return (
    <section id="projects" style={{ padding: 'var(--section-padding)' }}>
      <div className="container">
        <h2 className="section-title">
          FEATURED PROJECTS <br />
          <span className="vibrant-text">Production Systems Built</span>
          <span className="underline"></span>
        </h2>
        
        <div className="rich-grid">
          {projects.map((proj, idx) => (
            <div key={idx} className="glass-card-premium project-card" style={{ 
                padding: '0', 
                display: 'flex', 
                flexDirection: 'column',
                height: 'auto',
                minHeight: '450px'
            }}>
              <div style={{ 
                  height: '200px', 
                  background: 'rgba(255,255,255,0.03)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  fontSize: '5rem',
                  borderBottom: '1px solid var(--glass-border)'
              }}>
                {proj.img}
              </div>
              <div style={{ padding: '2rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <span style={{ color: 'var(--accent-gold)', fontSize: '0.75rem', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{proj.category}</span>
                <h3 style={{ fontSize: '1.5rem', color: 'white', marginBottom: '1rem' }}>{proj.title}</h3>
                <p style={{ color: 'var(--text-dim)', fontSize: '0.95rem', marginBottom: '2rem', flexGrow: 1 }}>{proj.desc}</p>
                <a href="#" style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    Project Overview <span>↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .project-card:hover h3 {
            color: var(--accent-gold);
            transform: translateX(10px);
            transition: 0.3s ease;
        }
      `}</style>
    </section>
  );
};

export default Projects;
