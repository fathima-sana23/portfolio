import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="container">
        <h1 style={{ fontSize: '1.8rem', color: 'var(--accent-gold)', fontWeight: '900' }}>FS.</h1>
        
        {/* Desktop Links */}
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Mobile Toggle */}
        <div 
          onClick={toggleMenu}
          style={{ 
            display: 'none', 
            cursor: 'pointer', 
            flexDirection: 'column', 
            gap: '6px',
            zIndex: 110
          }} 
          className="mobile-toggle"
        >
          <div style={{ width: '30px', height: '3px', background: 'var(--accent-gold)', transition: '0.3s', transform: isOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none' }}></div>
          <div style={{ width: '30px', height: '3px', background: 'var(--accent-gold)', opacity: isOpen ? 0 : 1 }}></div>
          <div style={{ width: '30px', height: '3px', background: 'var(--accent-gold)', transition: '0.3s', transform: isOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none' }}></div>
        </div>

        {/* Mobile Menu Overlay */}
        <div style={{
          position: 'fixed',
          top: 0,
          right: isOpen ? 0 : '-100%',
          width: '80%',
          height: '100vh',
          background: 'rgba(5, 8, 22, 0.98)',
          backdropFilter: 'blur(20px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '3rem',
          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
          zIndex: 105,
          borderLeft: '1px solid var(--glass-border)'
        }}>
          <a href="#about" onClick={toggleMenu} style={{ fontSize: '1.5rem', fontWeight: '700', textTransform: 'uppercase', color: 'white' }}>About</a>
          <a href="#skills" onClick={toggleMenu} style={{ fontSize: '1.5rem', fontWeight: '700', textTransform: 'uppercase', color: 'white' }}>Skills</a>
          <a href="#experience" onClick={toggleMenu} style={{ fontSize: '1.5rem', fontWeight: '700', textTransform: 'uppercase', color: 'white' }}>Experience</a>
          <a href="#projects" onClick={toggleMenu} style={{ fontSize: '1.5rem', fontWeight: '700', textTransform: 'uppercase', color: 'white' }}>Projects</a>
          <a href="#contact" onClick={toggleMenu} style={{ fontSize: '1.5rem', fontWeight: '700', textTransform: 'uppercase', color: 'white' }}>Contact</a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .mobile-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
