import React from 'react';
import { Award, Compass, ShieldCheck, Target, Users } from 'lucide-react';

export default function About() {
  const council = [
    { name: 'Dr. M. Hema Nalini', role: 'Chairman (Principal of the College)', credential: 'M.Com., M.Phil., B.Ed., SLET, Ph.D.' },
    { name: 'District Collector, Karur', role: 'Honorary Patron', credential: 'I.A.S.' },
    { name: 'Mr. R. Manivasagan', role: 'Member Secretary (HOD Computer Science)', credential: 'M.C.A., M.Phil.' },
    { name: 'Dr. J. Sathiyaraj', role: 'Senior Faculty Member (HOD Mathematics)', credential: 'M.Sc., M.Phil., Ph.D., B.Ed., SET' },
    { name: 'Dr. G. S. Balakrishnan', role: 'Senior Faculty Member (HOD Commerce)', credential: 'M.Com., Ph.D., MBA' }
  ];

  return (
    <div>
      {/* Banner */}
      <div className="hero-banner" style={{ backgroundImage: "url('/assets/college_hero.png')", height: '35vh', minHeight: '250px' }}>
        <div className="container">
          <div className="hero-content">
            <h1 style={{ color: '#ffffff', fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '2.5rem' }}>
              கல்லூரி வரலாறு (About Us)
            </h1>
            <p style={{ color: 'var(--slate-200)' }}>
              அரசு கலை மற்றும் அறிவியல் கல்லூரி (இருபாலர்), தரகாம்பட்டி - 621 311, கரூர், தமிழ்நாடு
            </p>
          </div>
        </div>
      </div>

      {/* History */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <span style={{ color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>
                Our Genesis
              </span>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '2rem', marginBottom: '1.25rem', color: 'var(--slate-900)', marginTop: '0.5rem' }}>
                Brief History of the College
              </h2>
              <p style={{ color: 'var(--slate-600)', marginBottom: '1rem', lineHeight: '1.7' }}>
                Government Arts and Science College, Tharagampatti was established in the academic year 2020–2021 by the Government of Tamil Nadu vide Go(MS) Number: 138 Higher Education(G1) dept dated 07.10.2020, and is an affiliated college of Bharathidasan University (Ref number: 43345/D5/2020 Dated: 24.11.2020). It is situated in a rural area to address the educational needs of Kadavur Taluk, Karur district.
              </p>
              <p style={{ color: 'var(--slate-600)', marginBottom: '1rem', lineHeight: '1.7' }}>
                Since its inception, the college has been sincerely discharging the responsibilities of spreading "The Light of Knowledge" to a region where a good number of students are first-generation learners. The main motto of the college is to empower the students' knowledge and help the rural community gain employment.
              </p>
              <p style={{ color: 'var(--slate-600)', lineHeight: '1.7' }}>
                Today, the institution continues to expand its academic reach, offering UG courses in Tamil, English, Mathematics, Commerce, and Computer Science, providing a nurturing cradle to shape talents and broaden the vision of students.
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <img 
                src="/assets/college_logo.png" 
                alt="College Crest" 
                style={{ width: '280px', height: '280px', objectFit: 'contain', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.15))' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '2.5rem' }}>
            
            {/* Vision Card */}
            <div className="glass-card" style={{ padding: '3rem', backgroundColor: '#ffffff' }}>
              <div style={{ display: 'inline-flex', padding: '1rem', backgroundColor: 'var(--primary-light)', borderRadius: '1rem', color: 'var(--primary)', marginBottom: '1.5rem' }}>
                <Compass size={36} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--slate-900)' }}>
                Vision Statement
              </h3>
              <p style={{ color: 'var(--slate-600)', lineHeight: '1.7', fontSize: '1rem' }}>
                "To emerge as a premier institution of higher learning in the state, offering quality education to rural students, inculcating strong ethical values, fostering scientific temper, and empowering them to achieve academic excellence and social upliftment."
              </p>
            </div>

            {/* Mission Card */}
            <div className="glass-card" style={{ padding: '3rem', backgroundColor: '#ffffff' }}>
              <div style={{ display: 'inline-flex', padding: '1rem', backgroundColor: 'rgba(212, 175, 55, 0.15)', borderRadius: '1rem', color: 'var(--secondary)', marginBottom: '1.5rem' }}>
                <Target size={36} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--slate-900)' }}>
                Mission Statements
              </h3>
              <ul style={{ color: 'var(--slate-600)', paddingLeft: '1.25rem', lineHeight: '1.7', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li>To offer holistic, student-centric academic programmes that integrate theory with hands-on training.</li>
                <li>To provide state-of-the-art laboratory and learning infrastructures that spark creativity and exploration.</li>
                <li>To promote moral standards, self-discipline, and commitment to local community welfare.</li>
                <li>To foster career opportunities through dedicated skill development, soft skills mentoring, and campus recruiters drives.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Governing Council */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>
              Governance
            </span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '2.2rem', marginTop: '0.5rem' }}>
              Governing Council
            </h2>
            <p style={{ color: 'var(--slate-500)', maxWidth: '600px', margin: '0.5rem auto 0' }}>
              The management structure ensures compliance with University directives and Government policy.
            </p>
          </div>

          <div className="table-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <table className="custom-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Designation / Membership Role</th>
                  <th>Qualifications</th>
                </tr>
              </thead>
              <tbody>
                {council.map((member, idx) => (
                  <tr key={idx}>
                    <td style={{ fontWeight: 600, color: 'var(--slate-800)' }}>{member.name}</td>
                    <td>{member.role}</td>
                    <td><span style={{ fontSize: '0.8rem', backgroundColor: 'var(--slate-200)', color: 'var(--slate-700)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>{member.credential}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
