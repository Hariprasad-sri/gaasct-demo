import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CollegeContext } from '../context/CollegeContext';
import NoticeBoard from '../components/NoticeBoard';
import EnquiryModal from '../components/EnquiryModal';
import ApplicationModal from '../components/ApplicationModal';
import { Award, BookOpen, GraduationCap, Users, Calendar, ArrowRight, CheckCircle, Check, Briefcase, Eye } from 'lucide-react';

export default function Home() {
  const { courses, events, gallery } = useContext(CollegeContext);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [appPortalOpen, setAppPortalOpen] = useState(false);

  const stats = [
    { id: 1, label: 'Rural Students Uplifted', count: '1,500+', icon: <Users size={28} /> },
    { id: 2, label: 'Official Faculty', count: '12', icon: <GraduationCap size={28} /> },
    { id: 3, label: 'Undergraduate Courses', count: '5', icon: <BookOpen size={28} /> },
    { id: 4, label: 'Placement Assistance', count: '85%+', icon: <Briefcase size={28} /> }
  ];

  return (
    <div>
      {/* 1. Hero Section */}
      <section className="hero-banner" style={{ backgroundImage: "url('/assets/college_hero.png')" }}>
        <div className="container">
          <div className="hero-content animate-fade-in">
            <span style={{ 
              backgroundColor: 'var(--secondary)', 
              color: 'var(--slate-900)', 
              padding: '0.35rem 1rem', 
              borderRadius: '2rem', 
              fontSize: '0.85rem', 
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              display: 'inline-block',
              marginBottom: '1rem'
            }}>
              Government Institution
            </span>
            <h1 className="hero-title" style={{ color: '#ffffff', fontFamily: 'var(--font-heading)', fontWeight: 800, marginBottom: '1rem' }}>
              Empowering Rural Youth through Quality Education
            </h1>
            <p style={{ color: 'var(--slate-200)', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.6' }}>
              Government College of Arts & Science, Tharagampatti is dedicated to nurturing academic excellence, character building, and social responsibility.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button onClick={() => setAppPortalOpen(true)} className="btn btn-secondary">
                Apply Online 2026-27 <ArrowRight size={16} />
              </button>
              <button onClick={() => setEnquiryOpen(true)} className="btn btn-outline" style={{ borderColor: '#ffffff', color: '#ffffff' }}>
                Admission Enquiry
              </button>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); alert("Prospectus download starting... (Simulated PDF)"); }} 
                className="btn"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#ffffff', border: '1px solid rgba(255,255,255,0.2)' }}
              >
                Download Prospectus
              </a>
            </div>
          </div>
        </div>
      </section>
 
      {/* 2. Welcome & Notice Board Grid */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '2.5rem' }}>
            {/* Left: Welcome Msg */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span style={{ color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                அரசு கலை மற்றும் அறிவியல் கல்லூரி, தரகாம்பட்டி
              </span>
              <h2 className="section-title" style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--slate-900)' }}>
                அறிவே ஆற்றல் • Nurturing Minds, Shaping Futures since 2020
              </h2>
              <p style={{ marginBottom: '1rem', fontSize: '1rem', color: 'var(--slate-700)', lineHeight: '1.7' }}>
                அரசு கலை மற்றும் அறிவியல் கல்லூரி (இருபாலர்), தரகாம்பட்டி, கரூர் மாவட்டம், 2020-ஆம் ஆண்டு தொடங்கப்பட்டது. இக்கல்லூரி இப்பகுதியில் உள்ள கிராமப்புற மாணவர்களின் கல்வி மேம்பாட்டிற்கும், அறிவுத் தேடலுக்கும் சிறந்த கலங்கரை விளக்கமாகத் திகழ்கிறது.
              </p>
              <p style={{ marginBottom: '1.5rem', fontSize: '1rem', color: 'var(--slate-700)', lineHeight: '1.7' }}>
                Government College of Arts and Science, Tharagampatti was established in Kadavur Taluk, Karur District, to provide accessible and quality higher education to the underprivileged rural youth of this region. Affiliated with Bharathidasan University, Tiruchirappalli, the college offers 5 Undergraduate programmes.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle size={18} style={{ color: 'var(--primary)' }} />
                  <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>Govt Fee Structure</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle size={18} style={{ color: 'var(--primary)' }} />
                  <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>Well-Equipped Labs</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle size={18} style={{ color: 'var(--primary)' }} />
                  <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>Bus Connectivity</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle size={18} style={{ color: 'var(--primary)' }} />
                  <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>NSS & Youth Red Cross</span>
                </div>
              </div>
 
              <div>
                <Link to="/about" className="btn btn-primary">
                  Learn More About Us <ArrowRight size={16} />
                </Link>
              </div>
            </div>
 
            {/* Right: Scrolling Notice Board */}
            <div>
              <NoticeBoard />
            </div>
          </div>
        </div>
      </section>
 
      {/* 3. Stats Section */}
      <section style={{ backgroundColor: 'var(--primary)', color: '#ffffff', padding: '3.5rem 0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '2rem',
            textAlign: 'center'
          }}>
            {stats.map(stat => (
              <div key={stat.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ color: 'var(--secondary)', marginBottom: '0.25rem' }}>
                  {stat.icon}
                </div>
                <h3 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ffffff', fontFamily: 'var(--font-heading)' }}>
                  {stat.count}
                </h3>
                <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* 4. Principal message preview */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="glass-card" style={{ padding: '3rem', border: '1px solid var(--border-color)' }}>
            <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '0.7fr 1.3fr', gap: '3rem', alignItems: 'center' }}>
              <div style={{ textAlign: 'center' }}>
                <img 
                  src="/assets/principal_portrait.png" 
                  alt="Principal Mr. Bala subramaniyam" 
                  style={{
                    width: '240px',
                    height: '240px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '5px solid var(--primary-light)',
                    boxShadow: 'var(--shadow-md)',
                    marginBottom: '1rem'
                  }}
                />
                <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--slate-900)' }}>Mr. Bala subramaniyam</h4>
                <p style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary)' }}>Principal</p>
                <p style={{ fontSize: '0.75rem', color: 'var(--slate-400)' }}>M.A., M.Phil., NET, Ph.D.</p>
              </div>
              <div>
                <span style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1.2px' }}>
                  Leadership Desk
                </span>
                <h2 className="section-title" style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, marginBottom: '1.25rem', color: 'var(--slate-900)' }}>
                  Principal's Message
                </h2>
                <div style={{ position: 'relative', paddingLeft: '1.5rem', borderLeft: '3px solid var(--secondary)', fontStyle: 'italic', marginBottom: '1.5rem', color: 'var(--slate-600)' }}>
                  "The establishment of the college in 2020 has been sincerely discharging the responsibilities of spreading 'The Light of Knowledge' to a region where a good number of students are first generation learners. Let the college be a cradle to nurture your hopes and aspirations..."
                </div>
                <Link to="/principal-message" className="btn btn-outline">
                  Read Full Message <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
 
      {/* 5. Departments grid overview */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>
              Academic Offerings
            </span>
            <h2 className="section-title" style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, marginTop: '0.5rem' }}>
              Explore Our Departments
            </h2>
            <p style={{ color: 'var(--slate-500)', maxWidth: '600px', margin: '0.5rem auto 0' }}>
              Choose from our diverse streams of Arts, Science, and Commerce designed to secure a prosperous career.
            </p>
          </div>
 
          <div className="grid-3">
            {[
              { title: 'Computer Science', desc: 'Study coding, algorithms, web design, and database systems with advanced computer labs.', link: '/departments', count: 'UG' },
              { title: 'Mathematics', desc: 'Analytical knowledge in pure and applied mathematics, algebra, calculus and statistics.', link: '/departments', count: 'UG' },
              { title: 'Commerce', desc: 'Comprehensive studies in accountancy, business law, banking, and commercial audits.', link: '/departments', count: 'UG' },
              { title: 'Tamil', desc: 'Study history, literature, grammar, and traditional linguistics of the Tamil language.', link: '/departments', count: 'UG' },
              { title: 'English', desc: 'Develop language proficiency, communication skills, and critical study of English literature.', link: '/departments', count: 'UG' }
            ].map((dept, index) => (
              <div key={index} className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
                <span style={{ alignSelf: 'flex-start', backgroundColor: 'var(--primary-light)', color: 'var(--primary)', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 700, marginBottom: '1rem' }}>
                  {dept.count}
                </span>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem', fontFamily: 'var(--font-heading)' }}>
                  {dept.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--slate-500)', marginBottom: '1.5rem', flex: 1, lineHeight: '1.5' }}>
                  {dept.desc}
                </p>
                <Link to={dept.link} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', color: 'var(--primary)', fontWeight: 600, fontSize: '0.85rem' }}>
                  View Syllabus & Staff <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
 
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/courses" className="btn btn-primary">
              View All 5 Courses & Eligibility
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Events Slider Preview */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span style={{ color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>
                Life at Campus
              </span>
              <h2 className="section-title" style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, marginTop: '0.5rem' }}>
                Latest Events & Activities
              </h2>
            </div>
            <Link to="/news-events" className="btn btn-outline" style={{ padding: '0.5rem 1.25rem', fontSize: '0.9rem' }}>
              View Events Calendar
            </Link>
          </div>

          <div className="grid-3">
            {events.slice(0, 3).map(event => (
              <div key={event.id} className="glass-card" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: '200px', width: '100%', overflow: 'hidden' }}>
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                    className="zoom-image"
                  />
                </div>
                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.75rem', color: 'var(--slate-500)', marginBottom: '0.5rem' }}>
                    <span>📅 {event.date}</span>
                    <span>•</span>
                    <span>📍 {event.location}</span>
                  </div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--slate-800)', fontFamily: 'var(--font-heading)', lineHeight: '1.4' }}>
                    {event.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--slate-500)', marginBottom: '1rem', flex: 1 }}>
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Gallery Preview Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>
              Visual Highlights
            </span>
            <h2 className="section-title" style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, marginTop: '0.5rem' }}>
              Photo Gallery
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}>
            {gallery.slice(0, 3).map(item => (
              <div key={item.id} className="glass-card" style={{ overflow: 'hidden', position: 'relative', borderRadius: '0.75rem', height: '220px' }}>
                <img 
                  src={item.url} 
                  alt={item.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))',
                  padding: '1.5rem 1rem 1rem',
                  color: '#ffffff'
                }}>
                  <span style={{ fontSize: '0.7rem', color: 'var(--secondary)', fontWeight: 700, textTransform: 'uppercase' }}>
                    {item.category}
                  </span>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#ffffff', marginTop: '0.2rem' }}>
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/gallery" className="btn btn-primary">
              View All Photos <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Admission Enquiry and Application Modals */}
      <EnquiryModal isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
      <ApplicationModal isOpen={appPortalOpen} onClose={() => setAppPortalOpen(false)} />

      {/* Add zoom effects via simple css styled block */}
      <style>{`
        .zoom-image:hover {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
}
