import React from 'react';
import { Award, FileText, CheckCircle, HelpCircle } from 'lucide-react';

export default function NAAC() {
  const ssrFiles = [
    { name: 'NAAC Self Study Report (SSR) - Cycle 1', size: '8.4 MB', type: 'PDF' },
    { name: 'Executive Summary of NAAC Assessment', size: '1.2 MB', type: 'PDF' },
    { name: 'Institutional Information for Quality Assessment (IIQA)', size: '750 KB', type: 'PDF' },
    { name: 'NAAC Grade Certificate 2024 (B+ Cycle 1)', size: '1.5 MB', type: 'PDF' }
  ];

  return (
    <div>
      {/* Banner */}
      <div className="hero-banner" style={{ backgroundImage: "url('/assets/college_hero.png')", height: '35vh', minHeight: '250px' }}>
        <div className="container">
          <div className="hero-content">
            <h1 style={{ color: '#ffffff', fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '2.5rem' }}>
              NAAC Accreditation
            </h1>
            <p style={{ color: 'var(--slate-200)' }}>
              Accreditation details, grade certificate logs, and Self Study Reports (SSR)
            </p>
          </div>
        </div>
      </div>

      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          
          <div className="grid-2" style={{ gap: '3rem', alignItems: 'center', marginBottom: '4rem' }}>
            {/* Accreditation details */}
            <div>
              <span style={{ color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>
                Accreditation Status
              </span>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '2.2rem', marginTop: '0.5rem', marginBottom: '1.25rem', color: 'var(--slate-900)' }}>
                NAAC B+ Certification
              </h2>
              <p style={{ color: 'var(--slate-600)', marginBottom: '1rem', lineHeight: '1.7' }}>
                Government College of Arts and Science, Tharagampatti, underwent its Cycle 1 assessment by the Peer Team of the National Assessment and Accreditation Council (NAAC) in 2024.
              </p>
              <p style={{ color: 'var(--slate-600)', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                The institution was awarded a <strong>B+ Grade</strong>, confirming our commitment to high academic quality, well-maintained facilities, strong teaching standards, and structured government compliance mechanisms.
              </p>

              <div style={{
                backgroundColor: 'var(--slate-50)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid var(--border-color)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <strong>Accreditation Body:</strong>
                  <span>NAAC, Bengaluru, India</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <strong>Current Status:</strong>
                  <span style={{ color: '#2e7d32', fontWeight: 700 }}>Accredited B+ (Cycle 1)</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <strong>Validity Period:</strong>
                  <span>2024 - 2029 (5 Years)</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <strong>CGPA Score:</strong>
                  <span>2.65 out of 4.00</span>
                </div>
              </div>
            </div>

            {/* Visual Badge Card */}
            <div style={{ textAlign: 'center' }}>
              <div className="glass-card" style={{
                display: 'inline-flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '3rem 2.5rem',
                border: '2px solid var(--secondary)',
                backgroundColor: 'var(--primary-light)',
                borderRadius: '1.5rem',
                boxShadow: 'var(--shadow-gold)'
              }}>
                <Award size={64} style={{ color: 'var(--secondary)', marginBottom: '1rem' }} />
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary)', lineHeight: '1' }}>
                  B+ GRADE
                </h3>
                <span style={{ fontSize: '0.9rem', color: 'var(--slate-600)', fontWeight: 600, marginTop: '0.5rem' }}>
                  NAAC Cycle 1 Accredited
                </span>
                <p style={{ fontSize: '0.75rem', color: 'var(--slate-400)', marginTop: '0.25rem' }}>
                  CGPA: 2.65 | Valid till 2029
                </p>
              </div>
            </div>
          </div>

          {/* SSR files list */}
          <div>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--slate-900)', marginBottom: '1.5rem' }}>
              <FileText size={22} style={{ color: 'var(--primary)' }} /> Self Study Reports (SSR) & Certificates
            </h3>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem'
            }}>
              {ssrFiles.map((file, idx) => (
                <div key={idx} className="glass-card" style={{
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  backgroundColor: '#ffffff'
                }}>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--slate-800)', fontFamily: 'var(--font-heading)' }}>
                      {file.name}
                    </h4>
                    <p style={{ fontSize: '0.8rem', color: 'var(--slate-400)', marginTop: '0.25rem' }}>
                      Size: {file.size} | Format: {file.type}
                    </p>
                  </div>
                  
                  <button 
                    onClick={() => alert(`Downloading NAAC document: ${file.name} (Simulated PDF download)`)}
                    className="btn btn-outline"
                    style={{
                      width: '100%',
                      padding: '0.5rem 0',
                      fontSize: '0.85rem'
                    }}
                  >
                    Download PDF Document
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
