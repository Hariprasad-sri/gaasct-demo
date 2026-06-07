import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ExternalLink, Shield } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      backgroundColor: 'var(--slate-900)',
      color: 'var(--slate-300)',
      borderTop: '4px solid var(--secondary)',
      fontSize: '0.9rem'
    }}>
      <div className="container section-padding" style={{ paddingBottom: '3rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '2.5rem',
          marginBottom: '3rem'
        }}>
          {/* Column 1: College Summary */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <img
                src="/assets/college_logo.png"
                alt="College Logo"
                style={{ height: '45px', width: '45px', filter: 'brightness(1.1)' }}
              />
              <h4 style={{ color: '#ffffff', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem', lineHeight: '1.2' }}>
                GOVERNMENT COLLEGE OF ARTS & SCIENCE
              </h4>
            </div>
            <p style={{ color: 'var(--slate-400)', fontSize: '0.85rem', lineHeight: '1.5' }}>
              Established by the Government of Tamil Nadu to provide quality higher education in arts, science, and commerce to the rural students of Tharagampatti, Karur District.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
              <span style={{ fontSize: '0.8rem', backgroundColor: 'rgba(255,255,255,0.05)', padding: '0.25rem 0.5rem', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.1)' }}>
                AISHE: C-59432
              </span>
              <span style={{ fontSize: '0.8rem', backgroundColor: 'rgba(255,255,255,0.05)', padding: '0.25rem 0.5rem', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.1)' }}>
                Govt. Institution
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 style={{ color: '#ffffff', fontFamily: 'var(--font-heading)', marginBottom: '1.25rem', fontSize: '1.1rem', position: 'relative', paddingBottom: '0.5rem' }}>
              Quick Links
              <span style={{ position: 'absolute', bottom: 0, left: 0, width: '40px', height: '2px', backgroundColor: 'var(--secondary)' }}></span>
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <li><Link to="/about" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', transition: 'var(--transition-fast)' }} className="footer-link">About College</Link></li>
              <li><Link to="/courses" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }} className="footer-link">Courses & Fees</Link></li>
              <li><Link to="/admissions" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }} className="footer-link">Admission Enquiry</Link></li>
              <li><Link to="/faculty" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }} className="footer-link">Faculty Profiles</Link></li>
              <li><Link to="/facilities" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }} className="footer-link">Campus Facilities</Link></li>
              <li><Link to="/placement" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }} className="footer-link">Placement Statistics</Link></li>
            </ul>
          </div>

          {/* Column 3: Portals & Compliance */}
          <div>
            <h4 style={{ color: '#ffffff', fontFamily: 'var(--font-heading)', marginBottom: '1.25rem', fontSize: '1.1rem', position: 'relative', paddingBottom: '0.5rem' }}>
              Institutional Portals
              <span style={{ position: 'absolute', bottom: 0, left: 0, width: '40px', height: '2px', backgroundColor: 'var(--secondary)' }}></span>
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <li><Link to="/iqac" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }} className="footer-link">IQAC Cell</Link></li>
              <li><Link to="/naac" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }} className="footer-link">NAAC Accreditation</Link></li>
              <li><Link to="/news-events" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }} className="footer-link">News & Press Releases</Link></li>
              <li><Link to="/gallery" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }} className="footer-link">Photo Gallery</Link></li>
              <li><Link to="/admin" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--secondary)' }} className="footer-link">Admin Dashboard Demo</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h4 style={{ color: '#ffffff', fontFamily: 'var(--font-heading)', marginBottom: '0.25rem', fontSize: '1.1rem', position: 'relative', paddingBottom: '0.5rem' }}>
              Contact Address
              <span style={{ position: 'absolute', bottom: 0, left: 0, width: '40px', height: '2px', backgroundColor: 'var(--secondary)' }}></span>
            </h4>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', fontSize: '0.85rem' }}>
              <MapPin size={18} style={{ color: 'var(--secondary)', flexShrink: 0, marginTop: '0.2rem' }} />
              <div>
                <strong>Government College of Arts & Science</strong><br />
                Tharagampatti, Kadavur Taluk,<br />
                Karur District, Tamil Nadu - 621311
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', fontSize: '0.85rem' }}>
              <Phone size={16} style={{ color: 'var(--secondary)' }} />
              <span>+91 4332 277255</span>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', fontSize: '0.85rem' }}>
              <Mail size={16} style={{ color: 'var(--secondary)' }} />
              <a href="mailto:principal@gcastharagampatti.ac.in" style={{ color: 'inherit' }}>principal@gcastharagampatti.ac.in</a>
            </div>
          </div>
        </div>

        {/* Location Map Widget */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '2rem',
          marginBottom: '2rem'
        }}>
          <h4 style={{ color: '#ffffff', fontFamily: 'var(--font-heading)', marginBottom: '1rem', fontSize: '1rem' }}>
            Find Us on Google Maps
          </h4>
          <div style={{
            width: '100%',
            height: '180px',
            borderRadius: '0.5rem',
            overflow: 'hidden',
            border: '2px solid rgba(255,255,255,0.1)'
          }}>
            {/* Direct embed of map */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.986877045763!2d78.2323456!3d10.6543212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa321cdefabcdef%3A0x1234567890abcdef!2sGovernment%20Arts%20and%20Science%20College%20Kadavur!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map Location of Government Arts and Science College, Tharagampatti"
            ></iframe>
          </div>
        </div>

        {/* Legal and Rights row */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.05)',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.8rem',
          color: 'var(--slate-500)'
        }}>
          <div>
            © {currentYear} Government College of Arts and Science, Tharagampatti. All rights reserved .
          </div>
          <div>
            © {currentYear} Government College of Arts and Science, Tharagampatti. All rights reserved .
          </div>
          <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <Shield size={12} /> Official Demo Website
            </span>
            <span style={{ opacity: 0.3 }}>|</span>
            <span>Accredited B+ by NAAC</span>
          </div>
        </div>
      </div>
      <style>{`
        .footer-link:hover {
          color: var(--secondary) !important;
          padding-left: 5px;
        }
      `}</style>
    </footer>
  );
}
