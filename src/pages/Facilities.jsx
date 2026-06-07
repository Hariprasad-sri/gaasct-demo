import React from 'react';
import { Book, Shield, Trophy, Coffee, Award, Cpu } from 'lucide-react';

export default function Facilities() {
  const items = [
    {
      title: 'Digital & Central Library',
      description: 'Our central library holds over 5,000 text and reference books, 30 national and international journals, and a dedicated digital zone with high-speed internet access. Students can read e-journals and search reference materials via INFLIBNET N-LIST database subscriptions.',
      icon: <Book size={32} />,
      image: '/assets/campus_library.png',
      stat: '5,000+ Books'
    },
    {
      title: 'Science Laboratories',
      description: 'Equipped with precision testing tools and apparatuses, the Physics and Chemistry labs meet collegiate training syllabus requirements. Computer Science labs house 80+ dual-boot workstations, local servers, and interactive programming kits, supported by offline UPS.',
      icon: <Cpu size={32} />,
      image: '/assets/science_lab.png',
      stat: 'Modern Labs'
    },
    {
      title: 'Separate Student Hostels',
      description: 'The college facilitates comfortable, separate hostel buildings for boys and girls with strict security surveillance. Rooms are spacious, well-ventilated, and equipped with individual desks. Nutritious, hygienic vegetarian and non-vegetarian meals are served.',
      icon: <Shield size={32} />,
      image: '/assets/college_hero.png',
      stat: 'Boarding Facilities'
    },
    {
      title: 'Sports Grounds & Gym',
      description: 'The college has a sprawling multi-sport outdoor ground for athletics, football, cricket, and volleyball. An indoor sports room supports table tennis, chess, and carrom, alongside a physical fitness gymnasium under the supervision of a physical director.',
      icon: <Trophy size={32} />,
      image: '/assets/college_hero.png',
      stat: 'Athletics & Fitness'
    },
    {
      title: 'Hygienic Canteen',
      description: 'A cozy canteen inside the campus provides freshly cooked snacks, meals, tea, coffee, and beverages to students and staff at heavily subsidized government-capped prices. Clean water filters and modern dining tables ensure a comfortable break time.',
      icon: <Coffee size={32} />,
      image: '/assets/campus_library.png',
      stat: 'Hygienic Canteen'
    },
    {
      title: 'NSS, YRC & Eco Club Cells',
      description: 'GCAS Tharagampatti has active national service scheme (NSS) units and youth red cross (YRC) forums that coordinate regular blood donation camps, local village clean-ups, ecological tree planting drives, and general social awareness campaigns.',
      icon: <Award size={32} />,
      image: '/assets/science_lab.png',
      stat: 'Active Clubs'
    }
  ];

  return (
    <div>
      {/* Banner */}
      <div className="hero-banner" style={{ backgroundImage: "url('/assets/college_hero.png')", height: '35vh', minHeight: '250px' }}>
        <div className="container">
          <div className="hero-content">
            <h1 style={{ color: '#ffffff', fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '2.5rem' }}>
              Campus Facilities
            </h1>
            <p style={{ color: 'var(--slate-200)' }}>
              Explore our infrastructural setups designed to foster physical, social, and academic growth
            </p>
          </div>
        </div>
      </div>

      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{ color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>
              Infrastructures
            </span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '2.2rem', marginTop: '0.5rem' }}>
              Facilities Built For Excellence
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {items.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={idx}
                  style={{
                    display: 'flex',
                    flexDirection: isEven ? 'row' : 'row-reverse',
                    gap: '3rem',
                    alignItems: 'center',
                    flexWrap: 'wrap'
                  }}
                  className="facility-row"
                >
                  {/* Image Block */}
                  <div style={{ flex: '1 1 450px', position: 'relative' }}>
                    <div style={{
                      borderRadius: '1.25rem',
                      overflow: 'hidden',
                      boxShadow: 'var(--shadow-lg)',
                      height: '300px'
                    }}>
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                      />
                    </div>
                    <span style={{
                      position: 'absolute',
                      top: '1rem',
                      left: isEven ? '1rem' : 'auto',
                      right: isEven ? 'auto' : '1rem',
                      backgroundColor: 'var(--secondary)',
                      color: 'var(--slate-900)',
                      padding: '0.35rem 1rem',
                      borderRadius: '2rem',
                      fontSize: '0.8rem',
                      fontWeight: 700
                    }}>
                      {item.stat}
                    </span>
                  </div>

                  {/* Content Block */}
                  <div style={{ flex: '1 1 450px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '60px',
                      height: '60px',
                      backgroundColor: 'var(--primary-light)',
                      color: 'var(--primary)',
                      borderRadius: '1rem'
                    }}>
                      {item.icon}
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', fontWeight: 800, color: 'var(--slate-900)' }}>
                      {item.title}
                    </h3>
                    <p style={{ color: 'var(--slate-600)', lineHeight: '1.7', fontSize: '0.95rem' }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
      
      <style>{`
        @media (max-width: 992px) {
          .facility-row {
            flex-direction: column !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </div>
  );
}
