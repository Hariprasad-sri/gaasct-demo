import React from 'react';
import { Mail, Phone, Calendar, BookOpen } from 'lucide-react';

export default function PrincipalMessage() {
  return (
    <div>
      {/* Banner */}
      <div className="hero-banner" style={{ backgroundImage: "url('/assets/college_hero.png')", height: '35vh', minHeight: '250px' }}>
        <div className="container">
          <div className="hero-content">
            <h1 style={{ color: '#ffffff', fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '2.5rem' }}>
              Principal's Message
            </h1>
            <p style={{ color: 'var(--slate-200)' }}>
              A warm welcome from the leadership desk of Dr. M. Hema Nalini
            </p>
          </div>
        </div>
      </div>

      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: '3rem', alignItems: 'flex-start' }}>
            
            {/* Left Column: Portrait & Stats */}
            <div className="glass-card" style={{ padding: '2rem', position: 'sticky', top: '100px', textAlign: 'center' }}>
              <img 
                src="/assets/principal_portrait.png" 
                alt="Principal Dr. M. Hema Nalini" 
                style={{
                  width: '100%',
                  maxHeight: '320px',
                  objectFit: 'cover',
                  borderRadius: '0.5rem',
                  boxShadow: 'var(--shadow-md)',
                  marginBottom: '1.25rem'
                }}
              />
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 800, color: 'var(--slate-900)' }}>
                Dr. M. Hema Nalini
              </h3>
              <p style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                Principal
              </p>
              <span style={{ fontSize: '0.8rem', backgroundColor: 'var(--primary-light)', color: 'var(--primary)', padding: '0.2rem 0.6rem', borderRadius: '4px', fontWeight: 600 }}>
                M.Com., M.Phil., B.Ed., SLET, Ph.D.
              </span>

              <div style={{ borderTop: '1px solid var(--border-color)', marginTop: '1.5rem', paddingTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', textAlign: 'left', fontSize: '0.85rem' }}>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <Mail size={16} style={{ color: 'var(--primary)' }} />
                  <span>gaasctharagampatti@gmail.com</span>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <Phone size={16} style={{ color: 'var(--primary)' }} />
                  <span>04323 – 251295</span>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <Calendar size={16} style={{ color: 'var(--primary)' }} />
                  <span>Serving since June 2020</span>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <BookOpen size={16} style={{ color: 'var(--primary)' }} />
                  <span>20+ Years Academic Experience</span>
                </div>
              </div>
            </div>

            {/* Right Column: Complete Message */}
            <div>
              <span style={{ color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.2px', fontSize: '0.85rem' }}>
                Official Desk
              </span>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--slate-900)', marginTop: '0.5rem' }}>
                Welcome to Government Arts and Science College (Co-Education)
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', color: 'var(--slate-700)', lineHeight: '1.8', fontSize: '1rem', textAlign: 'justify' }}>
                <p>
                  Dear Students, Parents, and Well-Wishers,
                </p>
                <p>
                  Welcome to Government Arts and Science College (Co-Education), Tharagampatti, Kadavur (T.K), Karur District – 621 311.
                </p>
                <p>
                  The establishment of the college was in fact a dream coming true for the education loving people of the rural area. The college, established in 2020, has been sincerely discharging the responsibilities of spreading "The Light of Knowledge" to a region where a good number of students are first generation learners.
                </p>
                <p>
                  Our college is an institution born with a resolute determination to impart knowledge to the marginalized periphery of rural society. The college has accepted the word 'education' in its holistic entirety. By education, we not only mean passing information to students but to let them know the society; its politics, social fabrics, history, environment, and foremost: to let them learn the techniques to empower themselves to claim their role in the governance of the society. As the poet Rabindranath Tagore said, <em>"The highest education is that which does not merely give us information but that makes our life in harmony with all existence."</em>
                </p>
                <p>
                  We are fortunate enough that the institution has a very talented group of faculty members, who are not only experts in their own realm of schooling but have a wide range of academic adventures. The college pledges to introduce more relevant degree courses as well as courses on cross-cutting subjects in the near future.
                </p>
                <p>
                  The goal of acquiring knowledge will bring out the best in each individual, developing their personality in an ambience where classroom teaching with a judicious blend of other activities will help to explore that is best in each of you for the promotion of quality of life in the society of which we are a part. Let the college be a cradle to nurture your hopes and aspirations, to enrich your views and opinions, shape your talent, and broaden your vision.
                </p>
                <p style={{ marginTop: '1.5rem' }}>
                  Warm Regards,<br /><br />
                  <strong>Dr. M. Hema Nalini, M.Com., M.Phil., B.Ed., SLET, Ph.D.</strong><br />
                  Principal, Government Arts and Science College, Tharagampatti
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
