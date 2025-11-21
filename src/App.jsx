import React, { useState } from 'react';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  const styles = {
    app: { minHeight: '100vh', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' },
    nav: { position: 'fixed', top: 0, width: '100%', background: '#fff', borderBottom: '1px solid #f0f0f0', padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 100 },
    navBrand: { fontWeight: 600, fontSize: '18px', letterSpacing: '2px' },
    navLinks: { display: 'flex', gap: '40px' },
    navLink: { background: 'none', border: 'none', fontSize: '14px', cursor: 'pointer', fontFamily: 'inherit', textTransform: 'capitalize' },
    section: { minHeight: '100vh', paddingTop: '80px' },
    sectionHome: { paddingTop: 0 },
    container: { maxWidth: '1200px', marginLeft: 'auto', marginRight: 'auto', padding: '60px 40px' },
    hero: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center', minHeight: '100vh', padding: '0 40px', maxWidth: '1200px', margin: '0 auto' },
    heroH1: { fontSize: '48px', fontWeight: 300, marginBottom: '20px', lineHeight: 1.2 },
    heroP: { fontSize: '18px', color: '#666', marginBottom: '40px' },
    ctaBtn: { background: '#000', color: '#fff', border: 'none', padding: '16px 32px', fontSize: '14px', cursor: 'pointer', fontFamily: 'inherit' },
    imagePlaceholder: { aspectRatio: '4/5', background: '#f8f8f8', border: '1px solid #f0f0f0' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px', marginTop: '60px' },
    classCard: { textAlign: 'center' },
    classImage: { aspectRatio: '4/3', background: '#f8f8f8', border: '1px solid #f0f0f0', marginBottom: '20px' },
    h2: { fontSize: '32px', fontWeight: 300, textAlign: 'center' },
    h3: { fontSize: '20px', fontWeight: 500, marginBottom: '10px' },
    cardP: { color: '#666', fontSize: '14px' }
  };

  const renderContent = () => {
    if (activeSection === 'home') {
      return (
        <div style={styles.hero}>
          <div>
            <h1 style={styles.heroH1}>Movement. Strength. Balance.</h1>
            <p style={styles.heroP}>Premium Pilates, Dance & Strength Training</p>
            <button style={styles.ctaBtn} onClick={() => setActiveSection('contact')}>
              Book a Class
            </button>
          </div>
          <div style={styles.imagePlaceholder}></div>
        </div>
      );
    }

    if (activeSection === 'classes') {
      return (
        <div style={styles.container}>
          <h2 style={styles.h2}>Classes</h2>
          <div style={styles.grid}>
            {[
              { name: 'Pilates Reformer', desc: 'Dynamic full-body workout using specialized equipment' },
              { name: 'Mat Pilates', desc: 'Core-focused floor exercises for strength and flexibility' },
              { name: 'Dance', desc: 'Expressive movement combining technique and creativity' },
              { name: 'Strength Training', desc: 'Functional fitness for everyday movement and power' }
            ].map(cls => (
              <div key={cls.name} style={styles.classCard}>
                <div style={styles.classImage}></div>
                <h3 style={styles.h3}>{cls.name}</h3>
                <p style={styles.cardP}>{cls.desc}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (activeSection === 'about') {
      return (
        <div style={styles.container}>
          <h2 style={styles.h2}>About</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', marginTop: '40px' }}>
            <div>
              <h3 style={{ fontSize: '24px', fontWeight: 500, marginBottom: '20px' }}>Our Philosophy</h3>
              <p>At Atara Studios, we believe movement is medicine. Our carefully curated classes blend traditional techniques with modern approaches to create transformative experiences for body and mind.</p>
            </div>
            <div style={{ display: 'grid', gap: '40px' }}>
              {[
                { name: 'Melody', role: 'Lead Pilates & Yoga Instructor' },
                { name: 'Victryn', role: 'Intro Pilates sessions' },
                { name: 'Pedro', role: 'Dance Trainer' },
                { name: 'Flex', role: 'Dance trainer' },
                { name: 'Joy', role: 'Dance Trainer' }
              ].map(trainer => (
                <div key={trainer.name} style={{ textAlign: 'center' }}>
                  <div style={{ width: '120px', height: '120px', background: '#f8f8f8', border: '1px solid #f0f0f0', borderRadius: '50%', margin: '0 auto 15px' }}></div>
                  <h4 style={{ fontSize: '16px', fontWeight: 500, marginBottom: '5px' }}>{trainer.name}</h4>
                  <p style={{ color: '#666', fontSize: '14px' }}>{trainer.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    if (activeSection === 'pricing') {
      const tableStyle = { width: '100%', borderCollapse: 'collapse', marginBottom: '40px' };
      const thStyle = { padding: '15px', borderBottom: '2px solid #000', textAlign: 'left', fontWeight: 600 };
      const tdStyle = { padding: '12px 15px', borderBottom: '1px solid #f0f0f0' };
      const sectionTitle = { fontSize: '24px', fontWeight: 500, marginBottom: '20px', marginTop: '40px' };
      
      return (
        <div style={styles.container}>
          <h2 style={styles.h2}>Membership & Pricing</h2>
          
          <h3 style={sectionTitle}>Monthly Memberships</h3>
          <table style={tableStyle}>
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
          <h2 style={styles.h2}>Contact</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', marginTop: '40px' }}>
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: 500, marginBottom: '15px' }}>Visit Us</h3>
              <p style={{ color: '#666', marginBottom: '20px' }}>123 Wellness Avenue<br />Downtown District</p>
              <h4 style={{ fontSize: '18px', fontWeight: 500, marginBottom: '15px', marginTop: '30px' }}>Hours</h4>
              <p style={{ color: '#666' }}>Monday - Sunday<br />7:00 AM - 7:00 PM</p>
            </div>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} onSubmit={e => e.preventDefault()}>
              <input type="text" placeholder="Name" required style={{ padding: '16px', border: '1px solid #f0f0f0', fontSize: '14px', fontFamily: 'inherit' }} />
              <input type="email" placeholder="Email" required style={{ padding: '16px', border: '1px solid #f0f0f0', fontSize: '14px', fontFamily: 'inherit' }} />
              <textarea placeholder="Message" rows="4" required style={{ padding: '16px', border: '1px solid #f0f0f0', fontSize: '14px', fontFamily: 'inherit' }}></textarea>
              <button type="submit" style={styles.ctaBtn}>Send Message</button>
            </form>
          </div>
        </div>
      );
    }
  };

  return (
    <div style={styles.app}>
      <nav style={styles.nav}>
        <div style={styles.navBrand}>ATARA STUDIOS</div>
        <div style={styles.navLinks}>
          {['home', 'classes', 'about', 'pricing', 'contact'].map(section => (
            <button
              key={section}
              style={{ ...styles.navLink, color: activeSection === section ? '#000' : '#666' }}
              onClick={() => setActiveSection(section)}
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