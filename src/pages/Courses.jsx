import React, { useState, useContext } from 'react';
import { CollegeContext } from '../context/CollegeContext';
import { GraduationCap, Award, BookOpen, Search, Filter } from 'lucide-react';

export default function Courses() {
  const { courses } = useContext(CollegeContext);
  const [levelFilter, setLevelFilter] = useState('ALL'); // 'ALL', 'UG', 'PG'
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = courses.filter(course => {
    const matchesLevel = levelFilter === 'ALL' || course.level === levelFilter;
    const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          course.department.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesLevel && matchesSearch;
  });

  return (
    <div>
      {/* Banner */}
      <div className="hero-banner" style={{ backgroundImage: "url('/assets/college_hero.png')", height: '35vh', minHeight: '250px' }}>
        <div className="container">
          <div className="hero-content">
            <h1 style={{ color: '#ffffff', fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '2.5rem' }}>
              Academic Courses
            </h1>
            <p style={{ color: 'var(--slate-200)' }}>
              Undergraduate and Postgraduate degree programmes, fee details, and eligibility criteria
            </p>
          </div>
        </div>
      </div>

      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          
          {/* Header Controls */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
            marginBottom: '2.5rem',
            backgroundColor: 'var(--slate-50)',
            padding: '1.5rem',
            borderRadius: '0.75rem',
            border: '1px solid var(--border-color)'
          }}>
            {/* Level Tabs */}
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button 
                onClick={() => setLevelFilter('ALL')}
                className={`btn ${levelFilter === 'ALL' ? 'btn-primary' : 'btn-outline'}`}
                style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}
              >
                All Programmes ({courses.length})
              </button>
              <button 
                onClick={() => setLevelFilter('UG')}
                className={`btn ${levelFilter === 'UG' ? 'btn-primary' : 'btn-outline'}`}
                style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}
              >
                Undergraduate (UG)
              </button>
              <button 
                onClick={() => setLevelFilter('PG')}
                className={`btn ${levelFilter === 'PG' ? 'btn-primary' : 'btn-outline'}`}
                style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}
              >
                Postgraduate (PG)
              </button>
            </div>

            {/* Search Input */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', position: 'relative', minWidth: '280px' }}>
              <Search size={18} style={{ position: 'absolute', left: '12px', color: 'var(--slate-400)' }} />
              <input 
                type="text"
                placeholder="Search by degree name or dept..."
                className="form-control"
                style={{ paddingLeft: '2.5rem', marginBottom: 0 }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Table */}
          <div className="table-container animate-fade-in">
            <table className="custom-table">
              <thead>
                <tr>
                  <th>Degree Code</th>
                  <th>Degree Programme Name</th>
                  <th>Department</th>
                  <th>Duration</th>
                  <th>Intake Strength</th>
                  <th>Annual Tuition Fee</th>
                  <th>Minimum Admission Eligibility</th>
                </tr>
              </thead>
              <tbody>
                {filteredCourses.length > 0 ? (
                  filteredCourses.map(course => (
                    <tr key={course.id}>
                      <td style={{ fontWeight: 700, color: 'var(--primary)', fontFamily: 'monospace' }}>
                        {course.code}
                      </td>
                      <td style={{ fontWeight: 600, color: 'var(--slate-900)' }}>
                        {course.name}
                      </td>
                      <td style={{ fontWeight: 500 }}>
                        {course.department}
                      </td>
                      <td>
                        {course.duration}
                      </td>
                      <td style={{ fontWeight: 600 }}>
                        {course.intake} seats
                      </td>
                      <td style={{ color: '#2e7d32', fontWeight: 600 }}>
                        {course.fee}
                      </td>
                      <td style={{ fontSize: '0.8rem', maxWidth: '300px', lineHeight: '1.4' }}>
                        {course.eligibility}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" style={{ textAlign: 'center', padding: '3rem', color: 'var(--slate-400)', fontWeight: 600 }}>
                      No degree courses match your search or filter criteria.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Scholarship Note */}
          <div className="glass-card" style={{ 
            marginTop: '3rem', 
            padding: '2rem', 
            backgroundColor: 'var(--primary-light)', 
            borderLeft: '5px solid var(--primary)',
            fontSize: '0.9rem',
            lineHeight: '1.6',
            color: 'var(--primary)'
          }}>
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontWeight: 800, marginBottom: '0.5rem', fontSize: '1.05rem' }}>
              <Award size={18} /> Government Support & Scholarship Information
            </h4>
            <p style={{ marginBottom: '0.5rem' }}>
              As a 100% Government-owned institution, we implement all state welfare scholarships:
            </p>
            <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <li><strong>7.5% Government School Student Reservation:</strong> Fully free education, including free hostel accommodation and transportation for eligible Tamil Nadu Government School students.</li>
              <li><strong>Pudhumai Penn Scheme (Moovalur Ramamirtham Ammaiyar):</strong> ₹1,000 per month for female students who studied in government schools from Classes 6th to 12th.</li>
              <li><strong>Post-Matric Scholarships (SC/ST/SCA):</strong> 100% Tuition fee waiver and boarding allowances.</li>
              <li><strong>BC/MBC/DNC Welfare Scholarships:</strong> Tuition fee rebates for first-generation graduates and economically backward candidates.</li>
            </ul>
          </div>

        </div>
      </section>
    </div>
  );
}
