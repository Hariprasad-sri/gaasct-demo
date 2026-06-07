import React, { useState } from 'react';
import EnquiryModal from '../components/EnquiryModal';
import ApplicationModal from '../components/ApplicationModal';
import { ClipboardList, FileCheck, Landmark, CheckSquare, Sparkles } from 'lucide-react';

export default function Admissions() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [appOpen, setAppOpen] = useState(false);

  const reservation = [
    { category: 'Open Competition (OC)', percentage: '31%' },
    { category: 'Backward Classes (BC) - Other than Muslims', percentage: '26.5%' },
    { category: 'Backward Classes Muslims (BCM)', percentage: '3.5%' },
    { category: 'Most Backward Classes / Denotified Communities (MBC/DNC)', percentage: '20%' },
    { category: 'Scheduled Castes (SC)', percentage: '15%' },
    { category: 'Scheduled Castes Arunthathiyars (SCA)', percentage: '3%' },
    { category: 'Scheduled Tribes (ST)', percentage: '1%' }
  ];

  return (
    <div>
      {/* Banner */}
      <div className="hero-banner" style={{ backgroundImage: "url('/assets/college_hero.png')", height: '35vh', minHeight: '250px' }}>
        <div className="container">
          <div className="hero-content">
            <h1 style={{ color: '#ffffff', fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '2.5rem' }}>
              Admissions 2026-27
            </h1>
            <p style={{ color: 'var(--slate-200)' }}>
              Online application procedures, fee structure, and government seat allocations policy
            </p>
          </div>
        </div>
      </div>

      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          
          {/* Main Action Banner */}
          <div className="glass-card" style={{
            padding: '3rem',
            textAlign: 'center',
            backgroundColor: 'var(--primary-light)',
            border: '2px solid var(--primary)',
            marginBottom: '4rem',
            boxShadow: 'var(--shadow-premium)'
          }}>
            <span style={{ 
              backgroundColor: 'var(--primary)', 
              color: '#ffffff', 
              padding: '0.25rem 0.75rem', 
              borderRadius: '12px', 
              fontSize: '0.8rem', 
              fontWeight: 700,
              textTransform: 'uppercase',
              display: 'inline-block',
              marginBottom: '1rem'
            }}>
              Now Open
            </span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '2.2rem', marginBottom: '0.75rem', color: 'var(--slate-900)' }}>
              Start Your Academic Journey With Us
            </h2>
            <p style={{ color: 'var(--slate-700)', maxWidth: '650px', margin: '0 auto 2rem', fontSize: '1.05rem', lineHeight: '1.6' }}>
              Apply for Undergraduate (UG) and Postgraduate (PG) admission online. Follow the merit system guided by the higher education norms of the Tamil Nadu Government.
            </p>

            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button onClick={() => setAppOpen(true)} className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.05rem' }}>
                <Sparkles size={18} /> Launch Online Application Portal
              </button>
              <button onClick={() => setEnquiryOpen(true)} className="btn btn-outline" style={{ padding: '1rem 2rem', fontSize: '1.05rem', borderWidth: '2px' }}>
                Submit Enquiry Form
              </button>
            </div>
          </div>

          <div className="grid-2" style={{ gap: '3rem' }}>
            {/* Left Column: Procedures */}
            <div>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--slate-900)', marginBottom: '1.25rem' }}>
                <ClipboardList size={22} style={{ color: 'var(--primary)' }} />
                Admission Guidelines & Flow
              </h3>
              <ol style={{
                color: 'var(--slate-600)',
                paddingLeft: '1.25rem',
                lineHeight: '1.8',
                fontSize: '0.95rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem'
              }}>
                <li>
                  <strong>Online Registration:</strong> Fill out candidate credentials, high school/college degree marks, and select the preferred course choices.
                </li>
                <li>
                  <strong>Merit List Generation:</strong> Candidates are selected based on 12th Marks (UG) / Undergrad aggregate (PG), adhering strictly to reservation policies.
                </li>
                <li>
                  <strong>Counseling Notification:</strong> Selected candidates receive counseling call letters with schedules via SMS/Email.
                </li>
                <li>
                  <strong>Certificate Verification:</strong> Candidates must present original credentials at the college premises on the counseling date.
                </li>
                <li>
                  <strong>Fee Payment & Enrollment:</strong> Secure the seat allotment by paying the government-prescribed minimal tuition fee at the administrative counter.
                </li>
              </ol>
            </div>

            {/* Right Column: Required Documents checklist */}
            <div>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--slate-900)', marginBottom: '1.25rem' }}>
                <FileCheck size={22} style={{ color: 'var(--primary)' }} />
                Required Documents Checklist
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '0.75rem',
                backgroundColor: 'var(--slate-50)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid var(--border-color)'
              }}>
                {[
                  '10th and 12th Marksheet (Original + 3 Photocopies)',
                  'Transfer Certificate (TC) & Conduct Certificate',
                  'Community Certificate (Issued by authorized revenue authority)',
                  'Income Certificate (For scholarship eligibility)',
                  'First Graduate Certificate (If applicable, for fee concession)',
                  'Aadhaar Card copy & 4 Passport size photographs',
                  'Special Quota Certificate (Ex-Servicemen, Sports, Diff. Abled) if claiming reservation'
                ].map((doc, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', fontSize: '0.9rem' }}>
                    <CheckSquare size={16} style={{ color: '#2e7d32', flexShrink: 0, marginTop: '0.2rem' }} />
                    <span style={{ color: 'var(--slate-700)' }}>{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Reservation section */}
          <div style={{ marginTop: '4rem' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--slate-900)', marginBottom: '1.5rem' }}>
              <Landmark size={22} style={{ color: 'var(--primary)' }} />
              State Allocation & Reservation Policy
            </h3>
            <p style={{ color: 'var(--slate-600)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
              The college follows the reservation rules mandated by the Government of Tamil Nadu for collegiate admissions:
            </p>
            <div className="table-container" style={{ maxWidth: '700px' }}>
              <table className="custom-table" style={{ fontSize: '0.9rem' }}>
                <thead>
                  <tr>
                    <th>Category Description</th>
                    <th>Seat Percentage Allocation</th>
                  </tr>
                </thead>
                <tbody>
                  {reservation.map((res, idx) => (
                    <tr key={idx}>
                      <td style={{ fontWeight: 600 }}>{res.category}</td>
                      <td style={{ fontWeight: 700, color: 'var(--primary)' }}>{res.percentage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* Forms Overlay Panels */}
      <EnquiryModal isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
      <ApplicationModal isOpen={appOpen} onClose={() => setAppOpen(false)} />
    </div>
  );
}
