import React from 'react';
import { Award, CheckSquare, Users, FileDown } from 'lucide-react';

export default function IQAC() {
  const members = [
    { name: 'Mr. Bala subramaniyam', designation: 'Principal', role: 'Chairperson' },
    { name: 'Mr. R. Manivasagan', designation: 'Assistant Professor & Head, Computer Science', role: 'IQAC Coordinator' },
    { name: 'Dr. J. Sathiyaraj', designation: 'Assistant Professor & Head, Mathematics', role: 'Administrative Officer' },
    { name: 'Dr. G. S. Balakrishnan', designation: 'Assistant Professor & Head, Commerce', role: 'Administrative Officer' },
    { name: 'Mr. L. Balasubramanian', designation: 'Assistant Professor & Head, English', role: 'Senior Teacher Member' },
    { name: 'Dr. K. Balusamy', designation: 'Assistant Professor & Head, Tamil', role: 'Senior Teacher Member' },
    { name: 'Revenue Divisional Officer (RDO), Karur', designation: 'External Government Nominee', role: 'Local Society Representative' },
    { name: 'Mr. S. Sakthivel', designation: 'Managing Director, Sakthi Agro Mills', role: 'Industrialist Representative' }
  ];

  const aqars = [
    { year: 'Annual Quality Assurance Report (AQAR) 2024-25', size: '2.4 MB', type: 'PDF' },
    { year: 'Annual Quality Assurance Report (AQAR) 2023-24', size: '2.1 MB', type: 'PDF' },
    { year: 'Annual Quality Assurance Report (AQAR) 2022-23', size: '1.9 MB', type: 'PDF' }
  ];

  return (
    <div>
      {/* Banner */}
      <div className="hero-banner" style={{ backgroundImage: "url('/assets/college_hero.png')", height: '35vh', minHeight: '250px' }}>
        <div className="container">
          <div className="hero-content">
            <h1 style={{ color: '#ffffff', fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '2.5rem' }}>
              Internal Quality Assurance Cell (IQAC)
            </h1>
            <p style={{ color: 'var(--slate-200)' }}>
              Assuring quality sustenance, enhancement, and institutional excellence
            </p>
          </div>
        </div>
      </div>

      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          
          <div className="grid-2" style={{ gap: '3rem', marginBottom: '4.5rem' }}>
            {/* Objectives */}
            <div>
              <span style={{ color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.2px', fontSize: '0.85rem' }}>
                Strategic Cell
              </span>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '2.2rem', marginTop: '0.5rem', marginBottom: '1.25rem', color: 'var(--slate-900)' }}>
                About IQAC Cell
              </h2>
              <p style={{ color: 'var(--slate-600)', marginBottom: '1.25rem', lineHeight: '1.7' }}>
                The Internal Quality Assurance Cell (IQAC) of Government College of Arts and Science, Tharagampatti was established to maintain quality circles and implement academic feedback systems.
              </p>
              
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', color: 'var(--slate-800)', marginBottom: '0.75rem' }}>
                Core Objectives
              </h4>
              <ul style={{ color: 'var(--slate-600)', paddingLeft: '1.25rem', lineHeight: '1.7', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem' }}>
                <li>To build systems that promote conscious, consistent, and catalytic actions to improve academic and administrative performances.</li>
                <li>To optimize and integrate modern methods of teaching, assessment, and laboratory explorations.</li>
                <li>To maintain records of internal audits, feedback evaluations, and academic quality assurance checklists.</li>
                <li>To promote research, student workshops, and faculty development courses.</li>
              </ul>
            </div>

            {/* AQAR Downloads */}
            <div className="glass-card" style={{ padding: '2.5rem', backgroundColor: 'var(--slate-50)', alignSelf: 'flex-start' }}>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-heading)', fontSize: '1.3rem', color: 'var(--slate-800)', marginBottom: '1.5rem' }}>
                <FileDown size={22} style={{ color: 'var(--primary)' }} /> AQAR Submission Documents
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {aqars.map((aqar, idx) => (
                  <div key={idx} style={{
                    backgroundColor: '#ffffff',
                    padding: '1rem 1.25rem',
                    borderRadius: '0.5rem',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <div>
                      <strong style={{ fontSize: '0.9rem', color: 'var(--slate-800)' }}>{aqar.year}</strong>
                      <p style={{ fontSize: '0.75rem', color: 'var(--slate-400)', marginTop: '0.2rem' }}>Size: {aqar.size} | Format: {aqar.type}</p>
                    </div>
                    <button 
                      onClick={() => alert(`Downloading AQAR Report (Simulated PDF download for ${aqar.year})`)}
                      style={{
                        backgroundColor: 'var(--primary)',
                        color: '#ffffff',
                        padding: '0.4rem 0.8rem',
                        borderRadius: '4px',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem'
                      }}
                    >
                      Download
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Committee Composition */}
          <div>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--slate-900)', marginBottom: '1.5rem' }}>
              <Users size={22} style={{ color: 'var(--primary)' }} /> Composition of IQAC Members Committee
            </h3>
            <div className="table-container">
              <table className="custom-table" style={{ fontSize: '0.9rem' }}>
                <thead>
                  <tr>
                    <th>Member Name</th>
                    <th>Official College Designation</th>
                    <th>IQAC Committee Designation</th>
                  </tr>
                </thead>
                <tbody>
                  {members.map((member, idx) => (
                    <tr key={idx}>
                      <td style={{ fontWeight: 600, color: 'var(--slate-900)' }}>{member.name}</td>
                      <td>{member.designation}</td>
                      <td>
                        <span style={{
                          backgroundColor: member.role === 'Chairperson' || member.role === 'IQAC Coordinator' ? 'var(--primary-light)' : 'var(--slate-100)',
                          color: member.role === 'Chairperson' || member.role === 'IQAC Coordinator' ? 'var(--primary)' : 'var(--slate-700)',
                          padding: '0.25rem 0.6rem',
                          borderRadius: '4px',
                          fontSize: '0.75rem',
                          fontWeight: 700
                        }}>
                          {member.role}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
