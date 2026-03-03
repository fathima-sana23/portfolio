import React from 'react';

const Hero = () => {
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      padding: 'var(--section-padding)',
      textAlign: 'center'
    }}>
      {/* Decorative background elements */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)',
        opacity: 0.1,
        filter: 'blur(120px)',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          
          <div className="availability-badge">
            <span className="status-dot"></span>
            Open for Remote & Freelance Opportunities
          </div>

          <h1 style={{ 
            fontSize: 'clamp(3rem, 12vw, 6.5rem)', 
            lineHeight: '1.1', 
            marginBottom: '1.5rem',
            color: 'white',
            fontWeight: '900'
          }}>
            Fathimath Sana
          </h1>

          <h2 style={{ 
            fontSize: 'clamp(1.2rem, 3vw, 2.2rem)', 
            color: 'var(--primary)', 
            marginBottom: '2.5rem', 
            fontWeight: '600',
            letterSpacing: '1px'
          }}>
            PHP Laravel Developer | <span className="vibrant-text">High-Performance</span> Backend Systems
          </h2>
          
          <p style={{ 
            fontSize: 'clamp(1rem, 1.8vw, 1.25rem)', 
            marginBottom: '4rem', 
            maxWidth: '750px',
            margin: '0 auto 4rem',
            color: 'var(--text-dim)',
            lineHeight: '1.7',
            opacity: 0.9
          }}>
            I am a dedicated Laravel Backend Developer with 3+ years of experience building secure, 
            high-performance web systems and scalable API architectures for enterprise workflows.
          </p>
          
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="#projects" className="btn-pill btn-primary-glow">
              View Projects <span>→</span>
            </a>
            <a 
              href="/resume.pdf" 
              download="Fathimath_Sana_Resume.pdf"
              className="btn-pill btn-secondary-glow"
            >
              <span style={{ margin: '0 8px 0 0', fontSize: '1.2rem' }}>📥</span> RESUME
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
