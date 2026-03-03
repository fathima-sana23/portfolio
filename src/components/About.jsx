import React from 'react';

const About = () => {
  return (
    <section id="about" style={{ padding: 'var(--section-padding)' }}>
      <div className="container">
        <h2 className="section-title">
          The Developer <br />
          <span className="vibrant-text">Behind the Code</span>
          <span className="underline"></span>
        </h2>
        
        <div className="rich-grid" style={{ alignItems: 'center' }}>
          <div style={{ position: 'relative' }}>
            <div className="floating" style={{
              width: '100%',
              aspectRatio: '1',
              maxWidth: '500px',
              margin: '0 auto',
              position: 'relative',
              borderRadius: '2.5rem',
              overflow: 'hidden',
              boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
              border: '2px solid var(--glass-border)'
            }}>
              {/* Vibrant Gradient Backdrop */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, #915eff, #f59e0b)',
                opacity: 0.1
              }} />
              
              <div style={{ 
                 width: '100%', 
                 height: '100%', 
                 background: 'var(--card-bg)',
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: 'center',
                 fontSize: '8rem'
               }}>
                 👩‍💻
               </div>
            </div>
            
            {/* Experience Badge */}
            <div className="glass-card-premium" style={{
              position: 'absolute',
              bottom: '-2rem',
              right: '-1rem',
              padding: '1.5rem 2rem',
              textAlign: 'center'
            }}>
              <h3 style={{ fontSize: '2.5rem', color: 'var(--accent-gold)' }}>3+</h3>
              <p style={{ fontSize: '0.8rem', color: 'white' }}>YEARS OF <br /> EXPERIENCE</p>
            </div>
          </div>

          <div>
            <div className="glass-card-premium" style={{ marginTop: '2rem' }}>
              <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: 'var(--text-dim)', lineHeight: '1.8' }}>
                I am a Laravel backend developer with 3+ years of hands-on experience building scalable web applications for real-world business workflows.
              </p>
              <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem', color: 'var(--text-dim)', lineHeight: '1.8' }}>
                I have designed and implemented backend systems for CRM platforms, medical center management solutions, ticketing automation systems, and EMI-based payment applications with Razorpay integration. My focus is on clean architecture, secure API design, role-based access control, and performance optimization.
              </p>
              <p style={{ marginBottom: '2rem', fontSize: '1.05rem', color: 'var(--text-dim)', lineHeight: '1.8', fontWeight: '500' }}>
                I build maintainable backend systems that support long-term business growth.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1.5rem' }}>
                <div style={{ padding: '1rem', borderLeft: '3px solid var(--primary)' }}>
                  <h4 style={{ color: 'var(--accent-gold)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Specialty</h4>
                  <p style={{ color: 'white', fontWeight: '600' }}>Scalable Backend</p>
                </div>
                <div style={{ padding: '1rem', borderLeft: '3px solid var(--primary)' }}>
                  <h4 style={{ color: 'var(--accent-gold)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Core Env</h4>
                  <p style={{ color: 'white', fontWeight: '600' }}>PHP & Laravel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
