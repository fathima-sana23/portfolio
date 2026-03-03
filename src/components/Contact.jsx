import React, { useState } from 'react';

// IMPORTANT: Replace this with your Google Apps Script Web App URL
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxc4BtxPOhyL8G1q7EA3fnsLzNU4TKxsWXujbVoTgn341bub5-VBIHkOgHyscOa3zYX8A/exec";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!SCRIPT_URL || SCRIPT_URL.includes("YOUR")) {
      alert("Please provide the Google Apps Script URL in Contact.jsx before submitting.");
      return;
    }

    setStatus('loading');
    try {
      const formDataToSubmit = new URLSearchParams();
      formDataToSubmit.append('name', formData.name);
      formDataToSubmit.append('email', formData.email);
      formDataToSubmit.append('message', formData.message);

      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formDataToSubmit,
      });

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error("Submission Error:", err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" style={{ padding: 'var(--section-padding)', position: 'relative' }}>
      <div className="container">
        {/* Opportunity Status Card */}
        <div className="glass-card-premium" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
          padding: '2rem 2.5rem',
          marginBottom: '3rem',
          textAlign: 'left',
          borderLeft: '4px solid var(--primary)',
          boxShadow: '0 0 40px rgba(145, 94, 255, 0.15)',
          background: 'rgba(30, 41, 59, 0.4)'
        }}>
          <div style={{ fontSize: '2.5rem', color: 'var(--primary)' }}>💼</div>
          <div>
            <h3 style={{ fontSize: '1.3rem', color: 'white', marginBottom: '0.5rem', fontWeight: '700' }}>Open for Opportunities</h3>
            <p style={{ fontSize: '1rem', color: 'var(--text-dim)', lineHeight: '1.6', margin: 0 }}>
              I'm currently available for <span style={{ color: 'var(--primary)', fontWeight: '600' }}>freelance projects</span>, 
              <span style={{ color: 'var(--primary)', fontWeight: '600' }}> remote Laravel roles</span>, and 
              <span style={{ color: 'var(--primary)', fontWeight: '600' }}> contract-based work</span>. 
              If you're looking for a developer who ships production-grade apps with clean code and on-time delivery — let's talk.
            </p>
          </div>
        </div>

        <h2 style={{ 
          fontSize: 'clamp(2.5rem, 6vw, 4rem)', 
          color: 'white', 
          marginBottom: '3.5rem', 
          textAlign: 'center',
          fontWeight: '900'
        }}>
          Let's <span className="vibrant-text">Work Together</span>
        </h2>

        <div className="glass-card-premium" style={{
            padding: '4rem',
            background: 'rgba(17, 16, 29, 0.6)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '5rem',
            textAlign: 'left'
        }}>
          {/* Left Column: Communication Hub */}
          <div>
            <h3 style={{ fontSize: '2rem', color: 'white', marginBottom: '1.5rem', fontWeight: '800' }}>
              Start a Conversation
            </h3>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-dim)', marginBottom: '3rem', lineHeight: '1.7' }}>
              Looking for a Laravel backend developer who delivers production-grade systems on time? 
              Whether it's a new enterprise project, a complex API integration, or scaling your existing backend — I'd like to hear about it.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <a href="mailto:sanabacker2323@gmail.com" style={contactItemLinkStyle}>
                <span style={iconStyle}>📩</span> sanabacker2323@gmail.com
              </a>
              <a href="https://wa.me/918139809919" target="_blank" rel="noopener noreferrer" style={contactItemLinkStyle}>
                <span style={iconStyle}>💬</span> WhatsApp
              </a>
              <div style={contactItemStyle}>
                <span style={iconStyle}>📍</span> Kerala, India
              </div>
              <a href="https://www.linkedin.com/in/fathimath-sana-vp-871210254/" target="_blank" rel="noopener noreferrer" style={contactItemLinkStyle}>
                <span style={iconStyle}>🔗</span> LinkedIn
              </a>
              <a href="https://github.com/fathima-sana23" target="_blank" rel="noopener noreferrer" style={contactItemLinkStyle}>
                <span style={iconStyle}>💻</span> GitHub
              </a>
            </div>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.8rem',
              marginTop: '4rem',
              padding: '0.8rem 1.5rem',
              background: 'rgba(34, 197, 94, 0.1)',
              border: '1px solid rgba(34, 197, 94, 0.2)',
              borderRadius: '50px',
              fontSize: '0.9rem',
              color: '#4ade80'
            }}>
              <span style={{ width: '8px', height: '8px', background: '#4ade80', borderRadius: '50%', boxShadow: '0 0 10px #4ade80' }}></span>
              Usually responds within 1 hour
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={inputGroupStyle}>
                <label style={labelStyle}>Your Name</label>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name" 
                  style={inputStyle} 
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div style={inputGroupStyle}>
                <label style={labelStyle}>Your Email</label>
                <input 
                  type="email" 
                  name="email"
                  placeholder="Your Email" 
                  style={inputStyle} 
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div style={inputGroupStyle}>
                <label style={labelStyle}>Your Message</label>
                <textarea 
                  name="message"
                  rows="5" 
                  placeholder="Message" 
                  style={{...inputStyle, resize: 'none'}}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginTop: '1rem' }}>
                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="btn-pill btn-primary-glow" 
                  style={{ minWidth: '220px', opacity: status === 'loading' ? 0.7 : 1 }}
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>

                {status === 'success' && (
                  <span style={{ color: '#4ade80', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontSize: '1.2rem' }}>✅</span> Message sent successfully! I'll get back to you soon.
                  </span>
                )}
                
                {status === 'error' && (
                  <span style={{ color: '#ef4444', fontWeight: '600' }}>
                    Error sending message.
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>
        
        <footer style={{ marginTop: '6rem', textAlign: 'center', color: 'var(--text-dim)', fontSize: '0.85rem', opacity: 0.7 }}>
            © {new Date().getFullYear()} Fathimath Sana. All rights reserved. <br />
            <span style={{ color: 'var(--primary)', fontWeight: '600', letterSpacing: '1px' }}>ENGINEERED WITH PRECISION</span>
        </footer>
      </div>

      <style>{`
        input::placeholder, textarea::placeholder {
          color: rgba(255,255,255,0.2);
        }
      `}</style>
    </section>
  );
};

const contactItemStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '1.2rem',
  color: 'var(--text-white)',
  fontSize: '1.1rem',
  fontWeight: '500'
};

const contactItemLinkStyle = {
  ...contactItemStyle,
  textDecoration: 'none',
  transition: '0.3s'
};

const iconStyle = {
  fontSize: '1.4rem',
  width: '45px',
  height: '45px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'rgba(255,255,255,0.03)',
  border: '1px solid var(--glass-border)',
  borderRadius: '12px',
  color: 'var(--primary)'
};

const inputGroupStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem'
};

const labelStyle = {
  fontSize: '0.9rem',
  fontWeight: '600',
  color: 'var(--accent-gold)',
  letterSpacing: '1px',
  textTransform: 'uppercase'
};

const inputStyle = {
  width: '100%',
  padding: '1.2rem 1.5rem',
  background: 'rgba(5, 8, 22, 0.4)',
  border: '1px solid var(--glass-border)',
  borderRadius: '15px',
  color: 'white',
  fontSize: '1rem',
  transition: 'all 0.3s ease',
  outline: 'none'
};

export default Contact;
