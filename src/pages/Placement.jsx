import React from 'react';
import { Briefcase, TrendingUp, CheckCircle, Quote, Star } from 'lucide-react';

export default function Placement() {
  const partners = ['Wipro Technologies', 'Tata Consultancy Services (TCS)', 'Cognizant (CTS)', 'Infosys', 'Tech Mahindra', 'TVS Motors', 'Muthoot Finance', 'Reliance Retail'];

  const statistics = [
    { year: '2025-26', rate: '86%', placed: '180 Students' },
    { year: '2024-25', rate: '82%', placed: '165 Students' },
    { year: '2023-24', rate: '79%', placed: '150 Students' }
  ];

  const testimonials = [
    {
      quote: "Studying B.Sc. Computer Science at GCAS Tharagampatti changed my life. The placement cell organized free coding bootcamps and communication workshops which helped me clear the Wipro campus interview on my very first attempt.",
      student: "R. Priyadharshini",
      batch: "B.Sc. Computer Science (2022-25)",
      company: "Placed at Wipro"
    },
    {
      quote: "Coming from an agricultural background, I was nervous about corporate interviews. Thanks to the mock interviews and resume guidance from our professors, I got selected as a Sales Officer at Muthoot Finance.",
      student: "K. Vignesh",
      batch: "BBA (2022-25)",
      company: "Placed at Muthoot Finance"
    }
  ];

  return (
    <div>
      {/* Banner */}
      <div className="hero-banner" style={{ backgroundImage: "url('/assets/college_hero.png')", height: '35vh', minHeight: '250px' }}>
        <div className="container">
          <div className="hero-content">
            <h1 style={{ color: '#ffffff', fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '2.5rem' }}>
              Placement & Career Cell
            </h1>
            <p style={{ color: 'var(--slate-200)' }}>
              Dedicated pathways connecting rural talents with top-tier employment opportunities
            </p>
          </div>
        </div>
      </div>

      {/* Info Stats */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          
          <div className="grid-2" style={{ alignItems: 'center', gap: '3rem', marginBottom: '4rem' }}>
            <div>
              <span style={{ color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>
                Career Guidance
              </span>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '2.2rem', marginTop: '0.5rem', marginBottom: '1.25rem', color: 'var(--slate-900)' }}>
                Nurturing Industry-Ready Candidates
              </h2>
              <p style={{ color: 'var(--slate-600)', marginBottom: '1rem', lineHeight: '1.7' }}>
                The Career Guidance and Placement Cell at Government College of Arts and Science, Tharagampatti, serves as a dynamic bridge between academic learning and corporate environments.
              </p>
              <p style={{ color: 'var(--slate-600)', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                We design and host specialized training programs on verbal reasoning, logical aptitude, resume writing, soft skills, and group discussion formats. Industry experts are invited regularly to present guest seminars on recent industrial developments.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <CheckCircle size={18} style={{ color: '#2e7d32' }} />
                  <strong style={{ fontSize: '0.9rem' }}>Free Soft Skill Training</strong>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <CheckCircle size={18} style={{ color: '#2e7d32' }} />
                  <strong style={{ fontSize: '0.9rem' }}>Aptitude Preparation</strong>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <CheckCircle size={18} style={{ color: '#2e7d32' }} />
                  <strong style={{ fontSize: '0.9rem' }}>Off-Campus Coordination</strong>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <CheckCircle size={18} style={{ color: '#2e7d32' }} />
                  <strong style={{ fontSize: '0.9rem' }}>Mock Interview Panels</strong>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="glass-card" style={{ padding: '2.5rem', backgroundColor: 'var(--primary-light)', border: '1px solid rgba(128, 0, 32, 0.15)' }}>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-heading)', fontSize: '1.3rem', color: 'var(--primary)', marginBottom: '1.5rem' }}>
                <TrendingUp size={22} /> Recent Placement Statistics
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {statistics.map((stat, idx) => (
                  <div key={idx} style={{
                    backgroundColor: '#ffffff',
                    padding: '1rem 1.5rem',
                    borderRadius: '0.5rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    boxShadow: 'var(--shadow-sm)'
                  }}>
                    <div>
                      <strong style={{ color: 'var(--slate-800)', fontSize: '1.1rem' }}>Batch {stat.year}</strong>
                      <p style={{ color: 'var(--slate-400)', fontSize: '0.8rem' }}>{stat.placed} Placed</p>
                    </div>
                    <span style={{
                      backgroundColor: 'var(--primary)',
                      color: '#ffffff',
                      padding: '0.35rem 0.75rem',
                      borderRadius: '1.5rem',
                      fontWeight: 700,
                      fontSize: '1rem'
                    }}>
                      {stat.rate} Placed
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div style={{ marginBottom: '4rem' }}>
            <h3 style={{ textAlign: 'center', fontFamily: 'var(--font-heading)', fontSize: '1.8rem', color: 'var(--slate-900)', marginBottom: '2.5rem' }}>
              Student Success Stories
            </h3>
            <div className="grid-2" style={{ gap: '2rem' }}>
              {testimonials.map((test, idx) => (
                <div key={idx} className="glass-card" style={{ padding: '2.5rem', backgroundColor: 'var(--slate-50)', display: 'flex', flexDirection: 'column', gap: '1rem', position: 'relative' }}>
                  <Quote size={40} style={{ color: 'rgba(128,0,32,0.1)', position: 'absolute', top: '1.5rem', right: '1.5rem' }} />
                  <p style={{ color: 'var(--slate-600)', fontStyle: 'italic', fontSize: '0.95rem', lineHeight: '1.6', flex: 1 }}>
                    "{test.quote}"
                  </p>
                  <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem', display: 'flex', flexDirection: 'column' }}>
                    <strong style={{ color: 'var(--slate-800)', fontSize: '1rem' }}>{test.student}</strong>
                    <span style={{ fontSize: '0.8rem', color: 'var(--slate-400)' }}>{test.batch}</span>
                    <span style={{ alignSelf: 'flex-start', marginTop: '0.5rem', backgroundColor: '#e8f5e9', color: '#2e7d32', padding: '0.15rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 700 }}>
                      {test.company}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Partner Recruiters */}
          <div style={{
            borderTop: '1px solid var(--border-color)',
            paddingTop: '3.5rem'
          }}>
            <h3 style={{ textAlign: 'center', fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--slate-900)', marginBottom: '2rem' }}>
              Key Recruitment & Training Partners
            </h3>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              justifyContent: 'center'
            }}>
              {partners.map((p, idx) => (
                <span key={idx} style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: 'var(--slate-100)',
                  color: 'var(--slate-700)',
                  borderRadius: '2rem',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  border: '1px solid var(--border-color)'
                }}>
                  {p}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
