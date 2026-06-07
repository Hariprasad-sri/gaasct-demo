import React, { useState, useContext } from 'react';
import { CollegeContext } from '../context/CollegeContext';
import { Users, GraduationCap, BookOpen, Layers, Award, ChevronRight } from 'lucide-react';

export default function Departments() {
  const { faculty, courses } = useContext(CollegeContext);
  const [selectedDept, setSelectedDept] = useState('Computer Science');

  const departmentsList = [
    { name: 'Computer Science', desc: 'Prepares students for tech careers through programming, databases, and software engineering.', lab: 'Equipped with systems, high-speed Internet connectivity, and modern computing resources.' },
    { name: 'Mathematics', desc: 'Offers deep training in algebra, calculus, statistics, and numerical modeling.', lab: 'Equipped with numerical analysis resources and mathematical software.' },
    { name: 'Commerce', desc: 'Teaches accounting, corporate finance, taxation, auditing, and business management.', lab: 'Equipped with computer applications in business and accounting tools.' },
    { name: 'Tamil', desc: 'Focuses on ancient Sangam literature, grammar, linguistics, and Tamil cultural history.', lab: 'Departmental library and active Tamil literary forums.' },
    { name: 'English', desc: 'Improves English language proficiency, communication skills, and British and world literature studies.', lab: 'Equipped with language lab resources for communication skills.' }
  ];

  const currentDeptInfo = departmentsList.find(d => d.name === selectedDept);
  
  // Filter faculty for selected department
  const deptFaculty = faculty.filter(f => f.department === selectedDept);
  const hod = deptFaculty.find(f => f.designation.includes('Head') || f.designation.includes('HOD')) || deptFaculty[0];

  // Filter courses for selected department
  const deptCourses = courses.filter(c => c.department === selectedDept);

  return (
    <div>
      {/* Banner */}
      <div className="hero-banner" style={{ backgroundImage: "url('/assets/college_hero.png')", height: '35vh', minHeight: '250px' }}>
        <div className="container">
          <div className="hero-content">
            <h1 style={{ color: '#ffffff', fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '2.5rem' }}>
              Academic Departments
            </h1>
            <p style={{ color: 'var(--slate-200)' }}>
              Explore our 5 specialized streams of Arts, Science, and Commerce
            </p>
          </div>
        </div>
      </div>

      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: '2rem', alignItems: 'flex-start' }}>
            
            {/* Left Column: Department Tabs List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--slate-800)' }}>
                Departments Directory
              </h3>
              {departmentsList.map((dept, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedDept(dept.name)}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    padding: '1.25rem',
                    borderRadius: '0.75rem',
                    backgroundColor: selectedDept === dept.name ? 'var(--primary)' : '#ffffff',
                    color: selectedDept === dept.name ? '#ffffff' : 'var(--text-primary)',
                    border: '1px solid var(--border-color)',
                    boxShadow: selectedDept === dept.name ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                    textAlign: 'left',
                    transition: 'all var(--transition-fast)'
                  }}
                  className="dept-tab-button"
                >
                  <span style={{ fontWeight: 700, fontSize: '1.05rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                    {dept.name}
                    <ChevronRight size={16} />
                  </span>
                  <span style={{ 
                    fontSize: '0.8rem', 
                    color: selectedDept === dept.name ? 'rgba(255,255,255,0.8)' : 'var(--text-secondary)',
                    marginTop: '0.25rem',
                    display: '-webkit-box',
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {dept.desc}
                  </span>
                </button>
              ))}
            </div>

            {/* Right Column: Dynamic Department Details */}
            <div className="glass-card" style={{ padding: '2.5rem', backgroundColor: '#ffffff', minHeight: '600px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {/* Header */}
              <div>
                <span style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Department Information
                </span>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', color: 'var(--slate-900)', marginTop: '0.25rem', borderBottom: '3px solid var(--secondary)', paddingBottom: '0.5rem' }}>
                  Department of {selectedDept}
                </h2>
                <p style={{ color: 'var(--slate-600)', marginTop: '1rem', lineHeight: '1.6' }}>
                  {currentDeptInfo?.desc}
                </p>
              </div>

              {/* Head of Department */}
              {hod && (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  backgroundColor: 'var(--bg-primary)',
                  padding: '1.25rem',
                  borderRadius: '0.75rem',
                  borderLeft: '4px solid var(--primary)'
                }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    backgroundColor: 'var(--primary-light)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--primary)'
                  }}>
                    <GraduationCap size={32} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--slate-400)', fontWeight: 700 }}>
                      Head of the Department (HOD)
                    </span>
                    <h4 style={{ fontSize: '1.1rem', color: 'var(--slate-900)', fontWeight: 700 }}>
                      {hod.name}
                    </h4>
                    <p style={{ fontSize: '0.8rem', color: 'var(--slate-500)' }}>
                      {hod.qualification} • {hod.experience} Exp.
                    </p>
                  </div>
                </div>
              )}

              {/* Courses Offered */}
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-heading)', fontSize: '1.15rem', color: 'var(--slate-800)', marginBottom: '0.75rem' }}>
                  <BookOpen size={18} style={{ color: 'var(--primary)' }} />
                  Programmes Offered
                </h4>
                <div className="table-container">
                  <table className="custom-table" style={{ fontSize: '0.85rem' }}>
                    <thead>
                      <tr>
                        <th>Course Code</th>
                        <th>Programme Name</th>
                        <th>Duration</th>
                        <th>Intake Capacity</th>
                      </tr>
                    </thead>
                    <tbody>
                      {deptCourses.map(course => (
                        <tr key={course.id}>
                          <td style={{ fontWeight: 700, color: 'var(--primary)' }}>{course.code}</td>
                          <td style={{ fontWeight: 600 }}>{course.name}</td>
                          <td>{course.duration}</td>
                          <td>{course.intake} seats</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Labs & Facilities */}
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-heading)', fontSize: '1.15rem', color: 'var(--slate-800)', marginBottom: '0.5rem' }}>
                  <Layers size={18} style={{ color: 'var(--primary)' }} />
                  Department Laboratories / Learning Environment
                </h4>
                <p style={{ color: 'var(--slate-600)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                  {currentDeptInfo?.lab}
                </p>
              </div>

              {/* Teaching Faculty List */}
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-heading)', fontSize: '1.15rem', color: 'var(--slate-800)', marginBottom: '0.75rem' }}>
                  <Users size={18} style={{ color: 'var(--primary)' }} />
                  Teaching Faculty Profiles
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                  {deptFaculty.map(member => (
                    <div key={member.id} style={{
                      border: '1px solid var(--border-color)',
                      padding: '1rem',
                      borderRadius: '0.5rem',
                      backgroundColor: 'var(--slate-50)'
                    }}>
                      <h5 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--slate-800)' }}>{member.name}</h5>
                      <p style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 600 }}>{member.designation}</p>
                      <p style={{ fontSize: '0.75rem', color: 'var(--slate-400)', marginTop: '0.25rem' }}>{member.qualification}</p>
                      <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--slate-500)', marginTop: '0.5rem', fontFamily: 'monospace' }}>
                        {member.email}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
      
      <style>{`
        .dept-tab-button:hover {
          transform: translateX(4px);
          border-color: var(--primary);
        }
      `}</style>
    </div>
  );
}
