import React from 'react';

const Experience = () => {
  const experiences = [
    {
      role: 'Web Developer (PHP, Laravel)',
      company: 'Meridian Solutions Inc',
      period: 'March 2024 - Present',
      desc: 'Developed and maintained scalable Laravel applications for business workflows.',
      points: [
        'Optimized database queries, improving application load time by 40%.',
        'Designed and implemented RESTful APIs for system integration.',
        'Improved code quality through PHPUnit testing, reducing bugs by 25%.',
        'Participated in full SDLC including requirement analysis, development, testing, and deployment.'
      ]
    },
    {
      role: 'Software Developer',
      company: 'Hexwhale Interactive LLP',
      period: 'April 2023 - Feb 2024',
      desc: 'Developed reporting modules for CRM and business management systems.',
      points: [
        'Implemented multi-layer OTP authentication workflows.',
        'Integrated REST APIs for frontend-backend communication.',
        'Contributed to CI/CD workflows using GitLab pipelines.',
        'Collaborated in agile sprint cycles for feature delivery.'
      ]
    },
    {
      role: 'Software Developer Intern',
      company: 'Sysbreeze Technologies',
      period: 'Dec 2022 - March 2023',
      desc: 'Assisted in developing Laravel-based web applications.',
      points: [
        'Optimized MySQL queries for improved data retrieval performance.',
        'Worked on responsive UI development using HTML and CSS.',
        'Supported migration of legacy PHP modules to Laravel framework.'
      ]
    }
  ];

  return (
    <section id="experience" style={{ padding: 'var(--section-padding)', position: 'relative' }}>
        {/* Abstract background shape */}
        <div style={{
            position: 'absolute',
            top: '50%',
            left: '0',
            width: '300px',
            height: '600px',
            background: 'radial-gradient(circle, var(--accent-gold) 0%, transparent 70%)',
            opacity: 0.05,
            filter: 'blur(80px)',
            zIndex: 0
        }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <h2 className="section-title">
          Professional <br />
          <span className="vibrant-text">Journey</span>
          <span className="underline"></span>
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {experiences.map((exp, idx) => (
            <div key={idx} className="glass-card-premium" style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
                gap: '2rem',
                borderLeft: '5px solid var(--primary)'
            }}>
              <div>
                <span style={{ 
                    color: 'var(--accent-gold)', 
                    fontSize: '0.8rem', 
                    fontWeight: '800', 
                    letterSpacing: '3px',
                    display: 'block',
                    marginBottom: '1rem'
                }}>
                    {exp.period}
                </span>
                <h3 style={{ fontSize: '1.8rem', color: 'white', marginBottom: '0.5rem' }}>{exp.role}</h3>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--primary)', marginBottom: '1rem', fontWeight: '600' }}>
                  {exp.company}
                </h4>
                <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', fontStyle: 'italic' }}>
                    {exp.desc}
                </p>
              </div>
              
              <ul style={{ 
                listStyle: 'none', 
                padding: 0, 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '1rem' 
              }}>
                {exp.points.map((point, pIdx) => (
                  <li key={pIdx} style={{ 
                    display: 'flex', 
                    gap: '1rem', 
                    color: 'var(--text-dim)',
                    fontSize: '1rem',
                    lineHeight: '1.4'
                  }}>
                    <span style={{ color: 'var(--accent-gold)' }}>▹</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
