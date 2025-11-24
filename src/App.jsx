import React, { useState, useEffect } from 'react';
import SnowflakeCursor from './SnowflakeCursor';
import { Heart, Users, Zap, Sun, Moon } from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const theme = {
    light: {
      bg: '#fff',
      text: '#000',
      textSecondary: '#666',
      border: '#f0f0f0',
      cardBg: '#f8f8f8'
    },
    dark: {
      bg: '#1a1a1a',
      text: '#fff',
      textSecondary: '#ccc',
      border: '#333',
      cardBg: '#2a2a2a'
    }
  };

  const currentTheme = isDarkTheme ? theme.dark : theme.light;

  const backgroundImages = [
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1506629905607-d405d7d3b0d2?w=1920&h=1080&fit=crop'
  ];

  const [currentBgIndex, setCurrentBgIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const styles = {
    app: { minHeight: '100vh', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', color: currentTheme.text, transition: 'all 0.3s ease', position: 'relative' },
    backgroundSlider: { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -2 },
    backgroundImage: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'opacity 2s ease-in-out' },
    glassOverlay: { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: `${currentTheme.bg}60`, backdropFilter: 'blur(8px)', zIndex: -1 },
    nav: { position: 'fixed', top: 0, width: '100%', background: `${currentTheme.bg}F0`, backdropFilter: 'blur(10px)', borderBottom: `1px solid ${currentTheme.border}`, padding: isMobile ? '15px 20px' : '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 100 },
    navBrand: { fontWeight: 600, fontSize: '18px', letterSpacing: '2px', color: currentTheme.text },
    navLinks: { display: isMobile ? 'none' : 'flex', gap: '40px' },
    navLink: { background: 'none', border: 'none', fontSize: '14px', cursor: 'pointer', fontFamily: 'inherit', textTransform: 'capitalize', color: currentTheme.textSecondary },
    navRight: { display: 'flex', alignItems: 'center', gap: '20px' },
    themeToggle: { display: 'flex', background: currentTheme.border, borderRadius: '20px', padding: '2px' },
    themeBtn: { padding: '6px 12px', border: 'none', borderRadius: '18px', fontSize: '12px', cursor: 'pointer', transition: 'all 0.2s', fontFamily: 'inherit' },
    themeBtnActive: { background: currentTheme.text, color: currentTheme.bg },
    themeBtnInactive: { background: 'transparent', color: currentTheme.textSecondary },
    hamburger: { display: isMobile ? 'flex' : 'none', flexDirection: 'column', cursor: 'pointer', gap: '4px' },
    hamburgerLine: { width: '24px', height: '2px', background: currentTheme.text, transition: 'all 0.3s' },
    mobileMenu: { position: 'absolute', top: '100%', left: 0, right: 0, background: `${currentTheme.bg}F5`, backdropFilter: 'blur(10px)', borderBottom: `1px solid ${currentTheme.border}`, padding: '20px', display: isMobileMenuOpen && isMobile ? 'flex' : 'none', flexDirection: 'column', gap: '15px' },
    fadeIn: { animation: 'fadeInUp 0.8s ease-out', opacity: 1 },
    fadeInDelay: { animation: 'fadeInUp 0.8s ease-out 0.2s both', opacity: 0 },
    fadeInDelayLong: { animation: 'fadeInUp 0.8s ease-out 0.4s both', opacity: 0 },
    servicesSection: { padding: isMobile ? '60px 20px' : '80px 40px', maxWidth: '1200px', margin: '0 auto' },
    servicesGrid: { display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: isMobile ? '40px' : '60px', marginTop: '60px' },
    serviceCard: { textAlign: 'center', padding: '30px 20px', background: `${currentTheme.bg}E6`, backdropFilter: 'blur(10px)', borderRadius: '16px', border: `1px solid ${currentTheme.border}` },
    serviceIcon: { width: '48px', height: '48px', margin: '0 auto 20px', color: currentTheme.text },
    serviceTitle: { fontSize: '24px', fontWeight: 600, marginBottom: '15px', color: currentTheme.text },
    serviceDesc: { fontSize: '16px', color: currentTheme.textSecondary, lineHeight: 1.6 },
    statsSection: { display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: '30px', marginTop: '60px' },
    statCard: { textAlign: 'center', padding: '20px', background: `${currentTheme.bg}CC`, borderRadius: '12px', border: `1px solid ${currentTheme.border}` },
    statNumber: { fontSize: '32px', fontWeight: 700, color: currentTheme.text, marginBottom: '5px' },
    statLabel: { fontSize: '14px', color: currentTheme.textSecondary },
    section: { minHeight: '100vh', paddingTop: '80px' },
    sectionHome: { paddingTop: 0 },
    container: { maxWidth: '1200px', marginLeft: 'auto', marginRight: 'auto', padding: isMobile ? '40px 20px' : '60px 40px' },
    hero: { display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '40px' : '80px', alignItems: 'center', minHeight: '100vh', padding: isMobile ? '0 20px' : '0 40px', maxWidth: '1200px', margin: '0 auto', textAlign: isMobile ? 'center' : 'left' },
    heroH1: { fontSize: isMobile ? '36px' : '48px', fontWeight: 300, marginBottom: '20px', lineHeight: 1.2 },
    heroP: { fontSize: '18px', color: currentTheme.textSecondary, marginBottom: '40px' },
    ctaBtn: { background: currentTheme.text, color: currentTheme.bg, border: 'none', padding: '16px 32px', fontSize: '14px', cursor: 'pointer', fontFamily: 'inherit' },
    imagePlaceholder: { aspectRatio: '4/5', background: currentTheme.cardBg, border: `1px solid ${currentTheme.border}`, borderRadius: '12px' },
    grid: { display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))', gap: isMobile ? '30px' : '40px', marginTop: isMobile ? '40px' : '60px' },
    classCard: { textAlign: 'center' },
    classImage: { aspectRatio: '4/3', background: currentTheme.cardBg, border: `1px solid ${currentTheme.border}`, marginBottom: '20px', borderRadius: '12px', width: '100%' },
    h2: { fontSize: '32px', fontWeight: 300, textAlign: 'center' },
    h3: { fontSize: '20px', fontWeight: 500, marginBottom: '10px' },
    cardP: { color: currentTheme.textSecondary, fontSize: '14px' }
  };

  const renderContent = () => {
    if (activeSection === 'home') {
      return (
        <>
          <div style={styles.hero}>
            <div style={styles.fadeIn}>
              <h1 style={styles.heroH1}>Movement. Strength. Balance.</h1>
              <p style={styles.heroP}>Premium Pilates, Dance & Strength Training</p>
              <button style={styles.ctaBtn} onClick={() => setActiveSection('contact')}>
                Book a Class
              </button>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&h=600&fit=crop" 
              alt="Fitness studio with modern equipment and natural lighting" 
              style={{ ...styles.imagePlaceholder, objectFit: 'cover', borderRadius: '12px', width: '100%', height: 'auto' }}
            />
          </div>

          <div style={styles.servicesSection}>
            <div style={styles.fadeInDelay}>
              <h2 style={{ ...styles.h2, marginBottom: '20px' }}>Transform Your Body & Mind</h2>
              <p style={{ textAlign: 'center', fontSize: '18px', color: currentTheme.textSecondary, maxWidth: '600px', margin: '0 auto' }}>
                At Atara Studios, we offer personalized wellness experiences that blend traditional techniques with modern innovation.
              </p>
            </div>

            <div style={{ ...styles.servicesGrid, ...styles.fadeInDelayLong }}>
              <div style={styles.serviceCard}>
                <Heart style={styles.serviceIcon} />
                <h3 style={styles.serviceTitle}>Pilates</h3>
                <p style={styles.serviceDesc}>
                  Strengthen your core, improve posture, and enhance flexibility through precise, controlled movements on our state-of-the-art reformer equipment.
                </p>
              </div>
              
              <div style={styles.serviceCard}>
                <Users style={styles.serviceIcon} />
                <h3 style={styles.serviceTitle}>Yoga</h3>
                <p style={styles.serviceDesc}>
                  Find inner peace and physical strength through mindful movement, breathwork, and meditation in our serene studio environment.
                </p>
              </div>
              
              <div style={styles.serviceCard}>
                <Zap style={styles.serviceIcon} />
                <h3 style={styles.serviceTitle}>Dance</h3>
                <p style={styles.serviceDesc}>
                  Express yourself through dynamic movement, build confidence, and improve coordination with our expert dance instructors.
                </p>
              </div>
            </div>

            <div style={{ ...styles.statsSection, ...styles.fadeInDelayLong }}>
              <div style={styles.statCard}>
                <div style={styles.statNumber}>500+</div>
                <div style={styles.statLabel}>Happy Clients</div>
              </div>
              <div style={styles.statCard}>
                <div style={styles.statNumber}>5</div>
                <div style={styles.statLabel}>Expert Trainers</div>
              </div>
              <div style={styles.statCard}>
                <div style={styles.statNumber}>3</div>
                <div style={styles.statLabel}>Specialized Programs</div>
              </div>
              <div style={styles.statCard}>
                <div style={styles.statNumber}>2+</div>
                <div style={styles.statLabel}>Years Experience</div>
              </div>
            </div>
          </div>
        </>
      );
    }

    if (activeSection === 'classes') {
      return (
        <div style={styles.container}>
          <h2 style={{ ...styles.h2, ...styles.fadeIn }}>Classes</h2>
          <div style={{ ...styles.grid, ...styles.fadeInDelay }}>
            {[
              { name: 'Pilates Reformer', desc: 'Dynamic full-body workout using specialized equipment' },
              { name: 'Mat Pilates', desc: 'Core-focused floor exercises for strength and flexibility' },
              { name: 'Dance', desc: 'Expressive movement combining technique and creativity' },
              { name: 'Strength Training', desc: 'Functional fitness for everyday movement and power' }
            ].map((cls, index) => {
              const classImages = [
                'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1506629905607-d405d7d3b0d2?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=300&fit=crop'
              ];
              return (
                <div key={cls.name} style={styles.classCard}>
                  <img 
                    src={classImages[index]} 
                    alt={cls.name} 
                    style={{ ...styles.classImage, objectFit: 'cover', borderRadius: '12px' }}
                  />
                  <h3 style={styles.h3}>{cls.name}</h3>
                  <p style={styles.cardP}>{cls.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      );
    }

    if (activeSection === 'about') {
      return (
        <div style={styles.container}>
          <h2 style={{ ...styles.h2, ...styles.fadeIn }}>About</h2>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '40px' : '80px', marginTop: '40px', ...styles.fadeInDelay }}>
            <div>
              <h3 style={{ fontSize: '24px', fontWeight: 500, marginBottom: '20px' }}>Our Philosophy</h3>
              <p>At Atara Studios, we believe movement is medicine. Our carefully curated classes blend traditional techniques with modern approaches to create transformative experiences for body and mind.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)', gap: isMobile ? '20px' : '40px' }}>
              {[
                { name: 'Melody', role: 'Lead Pilates & Yoga Instructor' },
                { name: 'Victryn', role: 'Intro Pilates sessions' },
                { name: 'Pedro', role: 'Dance Trainer' },
                { name: 'Flex', role: 'Dance trainer' },
                { name: 'Joy', role: 'Dance Trainer' }
              ].map((trainer, index) => {
                const trainerImages = [
                  'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=120&h=120&fit=crop&crop=face',
                  'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=120&h=120&fit=crop&crop=face',
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face',
                  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face',
                  'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&h=120&fit=crop&crop=face'
                ];
                return (
                  <div key={trainer.name} style={{ textAlign: 'center' }}>
                    <img 
                      src={trainerImages[index]} 
                      alt={trainer.name} 
                      style={{ width: isMobile ? '100px' : '120px', height: isMobile ? '100px' : '120px', borderRadius: '50%', margin: '0 auto 15px', objectFit: 'cover', border: `1px solid ${currentTheme.border}` }}
                    />
                    <h4 style={{ fontSize: '16px', fontWeight: 500, marginBottom: '5px', color: currentTheme.text }}>{trainer.name}</h4>
                    <p style={{ color: currentTheme.textSecondary, fontSize: '14px' }}>{trainer.role}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );
    }

    if (activeSection === 'pricing') {
      const tableStyle = { width: '100%', borderCollapse: 'collapse', marginBottom: '40px' };
      const thStyle = { padding: '15px', borderBottom: `2px solid ${currentTheme.text}`, textAlign: 'left', fontWeight: 600, color: currentTheme.text };
      const tdStyle = { padding: '12px 15px', borderBottom: `1px solid ${currentTheme.border}`, color: currentTheme.text };
      const sectionTitle = { fontSize: '24px', fontWeight: 500, marginBottom: '20px', marginTop: '40px' };
      
      return (
        <div style={styles.container}>
          <h2 style={{ ...styles.h2, ...styles.fadeIn }}>Membership & Pricing</h2>
          
          <h3 style={{ ...sectionTitle, ...styles.fadeInDelay }}>Monthly Memberships</h3>
          <table style={{ ...tableStyle, ...styles.fadeInDelayLong }}>
            <thead>
              <tr>
                <th style={thStyle}>Membership Type</th>
                <th style={thStyle}>Regular Rate</th>
                <th style={thStyle}>Launch Rate</th>
                <th style={thStyle}>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>Mat Membership – Starter (4 Classes/Month)</td>
                <td style={tdStyle}>KSh 8,000</td>
                <td style={tdStyle}>KSh 7,000</td>
                <td style={tdStyle}>Perfect for beginners or busy schedules</td>
              </tr>
              <tr>
                <td style={tdStyle}>Reformer Membership – Starter (4 Classes/Month)</td>
                <td style={tdStyle}>KSh 10,000</td>
                <td style={tdStyle}>KSh 9,000</td>
                <td style={tdStyle}>Ideal for new clients exploring reformer Pilates</td>
              </tr>
              <tr>
                <td style={tdStyle}>Hybrid Membership (5 reformer + 5 mat classes)</td>
                <td style={tdStyle}>KSh 20,000</td>
                <td style={tdStyle}>KSh 19,000</td>
                <td style={tdStyle}>Best value for total body wellness</td>
              </tr>
            </tbody>
          </table>

          <h3 style={sectionTitle}>Session Bundles</h3>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Bundle Type</th>
                <th style={thStyle}>Regular Rate</th>
                <th style={thStyle}>Launch Offer</th>
                <th style={thStyle}>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>Walk-in (Per Session)</td>
                <td style={tdStyle}>KSh 2,500</td>
                <td style={tdStyle}>KSh 2,000</td>
                <td style={tdStyle}>Try a single reformer session</td>
              </tr>
              <tr>
                <td style={tdStyle}>4-Session Bundle</td>
                <td style={tdStyle}>KSh 10,000</td>
                <td style={tdStyle}>KSh 8,000</td>
                <td style={tdStyle}>Great way to start reformer training</td>
              </tr>
              <tr>
                <td style={tdStyle}>10-Session Bundle</td>
                <td style={tdStyle}>KSh 25,000</td>
                <td style={tdStyle}>KSh 20,000</td>
                <td style={tdStyle}>Best for consistent practice</td>
              </tr>
              <tr>
                <td style={tdStyle}>15-Session Bundle</td>
                <td style={tdStyle}>KSh 37,500</td>
                <td style={tdStyle}>KSh 30,000</td>
                <td style={tdStyle}>Excellent for committed clients</td>
              </tr>
            </tbody>
          </table>

          <h3 style={sectionTitle}>Private & Semi-Private Sessions</h3>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Session Type</th>
                <th style={thStyle}>Duration</th>
                <th style={thStyle}>Rate</th>
                <th style={thStyle}>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>Private Session</td>
                <td style={tdStyle}>55 minutes</td>
                <td style={tdStyle}>KSh 4,500</td>
                <td style={tdStyle}>Personalized one-on-one session</td>
              </tr>
              <tr>
                <td style={tdStyle}>Duet Session (2 People)</td>
                <td style={tdStyle}>55 minutes</td>
                <td style={tdStyle}>KSh 9,000</td>
                <td style={tdStyle}>Train with a friend</td>
              </tr>
              <tr>
                <td style={tdStyle}>Private Session Package (5 Sessions)</td>
                <td style={tdStyle}>55 minutes each</td>
                <td style={tdStyle}>KSh 20,000</td>
                <td style={tdStyle}>Save KSh 2,500</td>
              </tr>
              <tr>
                <td style={tdStyle}>Private Session Package (10 Sessions)</td>
                <td style={tdStyle}>55 minutes each</td>
                <td style={tdStyle}>KSh 40,000</td>
                <td style={tdStyle}>Save KSh 5,000 – best value</td>
              </tr>
            </tbody>
          </table>

          <h3 style={sectionTitle}>Drop-In Classes</h3>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Class Type</th>
                <th style={thStyle}>Rate</th>
                <th style={thStyle}>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>Yoga</td>
                <td style={tdStyle}>KSh 2,000</td>
                <td style={tdStyle}>Pay per class</td>
              </tr>
              <tr>
                <td style={tdStyle}>Reformer Class Drop-in</td>
                <td style={tdStyle}>KSh 3,000</td>
                <td style={tdStyle}>Small group session (max 5 clients)</td>
              </tr>
              <tr>
                <td style={tdStyle}>Dance</td>
                <td style={tdStyle}>KSh 1,500</td>
                <td style={tdStyle}>Max 15 clients</td>
              </tr>
            </tbody>
          </table>

          <h3 style={sectionTitle}>Equipment & Essentials</h3>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Item</th>
                <th style={thStyle}>Fee</th>
                <th style={thStyle}>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>Yoga Mat Rental</td>
                <td style={tdStyle}>KSh 500 per session</td>
                <td style={tdStyle}>Mats available for rent; clients encouraged to bring their own</td>
              </tr>
              <tr>
                <td style={tdStyle}>Grip Socks</td>
                <td style={tdStyle}>KSh 1,200 – KSh 1,500</td>
                <td style={tdStyle}>Required for reformer Pilates for safety; available for purchase</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }

    if (activeSection === 'contact') {
      return (
        <div style={styles.container}>
          <h2 style={{ ...styles.h2, ...styles.fadeIn }}>Contact</h2>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '40px' : '80px', marginTop: '40px', ...styles.fadeInDelay }}>
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: 500, marginBottom: '15px' }}>Visit Us</h3>
              <p style={{ color: currentTheme.textSecondary, marginBottom: '20px' }}>123 Wellness Avenue<br />Downtown District</p>
              <h4 style={{ fontSize: '18px', fontWeight: 500, marginBottom: '15px', marginTop: '30px', color: currentTheme.text }}>Hours</h4>
              <p style={{ color: currentTheme.textSecondary }}>Monday - Sunday<br />7:00 AM - 7:00 PM</p>
            </div>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} onSubmit={e => e.preventDefault()}>
              <input type="text" placeholder="Name" required style={{ padding: '16px', border: `1px solid ${currentTheme.border}`, fontSize: '14px', fontFamily: 'inherit', background: currentTheme.bg, color: currentTheme.text }} />
              <input type="email" placeholder="Email" required style={{ padding: '16px', border: `1px solid ${currentTheme.border}`, fontSize: '14px', fontFamily: 'inherit', background: currentTheme.bg, color: currentTheme.text }} />
              <textarea placeholder="Message" rows="4" required style={{ padding: '16px', border: `1px solid ${currentTheme.border}`, fontSize: '14px', fontFamily: 'inherit', background: currentTheme.bg, color: currentTheme.text }}></textarea>
              <button type="submit" style={styles.ctaBtn}>Send Message</button>
            </form>
          </div>
        </div>
      );
    }
  };

  return (
    <div style={styles.app}>
      <div style={styles.backgroundSlider}>
        {backgroundImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Background"
            style={{
              ...styles.backgroundImage,
              opacity: index === currentBgIndex ? 1 : 0
            }}
          />
        ))}
      </div>
      <div style={styles.glassOverlay}></div>
      <SnowflakeCursor />
      <nav style={styles.nav}>
        <div style={styles.navBrand}>ATARA STUDIOS</div>
        
        <div style={styles.navLinks}>
          {['home', 'classes', 'about', 'pricing', 'contact'].map(section => (
            <button
              key={section}
              style={{ ...styles.navLink, color: activeSection === section ? currentTheme.text : currentTheme.textSecondary }}
              onClick={() => setActiveSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>

        <div style={styles.navRight}>
          <div style={styles.themeToggle}>
            <button
              style={!isDarkTheme ? { ...styles.themeBtn, ...styles.themeBtnActive } : { ...styles.themeBtn, ...styles.themeBtnInactive }}
              onClick={() => setIsDarkTheme(false)}
            >
              <Sun size={16} />
            </button>
            <button
              style={isDarkTheme ? { ...styles.themeBtn, ...styles.themeBtnActive } : { ...styles.themeBtn, ...styles.themeBtnInactive }}
              onClick={() => setIsDarkTheme(true)}
            >
              <Moon size={16} />
            </button>
          </div>

          <div 
            style={styles.hamburger}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div style={styles.hamburgerLine}></div>
            <div style={styles.hamburgerLine}></div>
            <div style={styles.hamburgerLine}></div>
          </div>
        </div>

        <div style={styles.mobileMenu}>
          {['home', 'classes', 'about', 'pricing', 'contact'].map(section => (
            <button
              key={section}
              style={{ ...styles.navLink, color: activeSection === section ? currentTheme.text : currentTheme.textSecondary }}
              onClick={() => {
                setActiveSection(section);
                setIsMobileMenuOpen(false);
              }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      </nav>
      
      <main style={activeSection === 'home' ? { ...styles.section, ...styles.sectionHome } : styles.section}>
        {renderContent()}
      </main>
    </div>
  );
};

export default App;