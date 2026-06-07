import React, { useState, useContext } from 'react';
import { CollegeContext } from '../context/CollegeContext';
import { Search, Mail, BookOpen, Star, Filter } from 'lucide-react';

export default function Faculty() {
  const { faculty } = useContext(CollegeContext);
  const [selectedDept, setSelectedDept] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const departments = ['ALL', 'Tamil', 'English', 'Mathematics', 'Physics', 'Chemistry', 'Computer Science', 'Commerce', 'BBA', 'Economics'];

  const filteredFaculty = faculty.filter(f => {
    const matchesDept = selectedDept === 'ALL' || f.department === selectedDept;
    const matchesSearch = f.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          f.designation.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesSearch;
  });

  return (
    <div>
      {/* Banner */}
      <div className="hero-banner" style={{ backgroundImage: "url('/assets/college_hero.png')", height: '35vh', minHeight: '250px' }}>
        <div className="container">
          <div className="hero-content">
            <h1 style={{ color: '#ffffff', fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '2.5rem' }}>
              Faculty Directory
            </h1>
            <p style={{ color: 'var(--slate-200)' }}>
              Meet our highly qualified, dedicated teaching staff and research mentors
            </p>
          </div>
        </div>
      </div>

      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          
          {/* Controls Panel */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            backgroundColor: '#ffffff',
            padding: '1.5rem',
            borderRadius: '0.75rem',
            boxShadow: 'var(--shadow-sm)',
            border: '1px solid var(--border-color)',
            marginBottom: '3rem'
          }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-heading)', fontSize: '1.15rem', color: 'var(--slate-800)' }}>
              <Filter size={18} style={{ color: 'var(--primary)' }} /> Search & Filter Staff
            </h3>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 0.8fr',
              gap: '1.5rem'
            }} className="grid-2">
              {/* Department Dropdown */}
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label" style={{ fontSize: '0.8rem' }}>Filter by Department</label>
                <select 
                  className="form-control"
                  value={selectedDept}
                  onChange={(e) => setSelectedDept(e.target.value)}
                >
                  {departments.map((dept, idx) => (
                    <option key={idx} value={dept}>
                      {dept === 'ALL' ? 'All Departments' : `Department of ${dept}`}
                    </option>
                  ))}
                </select>
              </div>

              {/* Name Search */}
              <div className="form-group" style={{ marginBottom: 0, position: 'relative' }}>
                <label className="form-label" style={{ fontSize: '0.8rem' }}>Search Faculty Name</label>
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                  <Search size={16} style={{ position: 'absolute', left: '12px', color: 'var(--slate-400)' }} />
                  <input 
                    type="text" 
                    placeholder="Enter professor name..." 
                    className="form-control"
                    style={{ paddingLeft: '2.5rem' }}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Directory Listings */}
          <div className="grid-3 animate-fade-in">
            {filteredFaculty.length > 0 ? (
              filteredFaculty.map(member => {
                const isHod = member.designation.includes('Head') || member.designation.includes('HOD');
                return (
                  <div 
                    key={member.id} 
                    className="glass-card" 
                    style={{ 
                      padding: '2rem', 
                      backgroundColor: '#ffffff',
                      borderLeft: isHod ? '5px solid var(--secondary)' : '1px solid var(--border-color)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.75rem'
                    }}
                  >
                    <div>
                      {isHod && (
                        <span style={{
                          backgroundColor: 'var(--secondary)',
                          color: 'var(--slate-900)',
                          padding: '0.15rem 0.5rem',
                          borderRadius: '4px',
                          fontSize: '0.65rem',
                          fontWeight: 800,
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                          display: 'inline-block',
                          marginBottom: '0.5rem'
                        }}>
                          Dept. Head
                        </span>
                      )}
                      <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--slate-900)', fontFamily: 'var(--font-heading)' }}>
                        {member.name}
                      </h3>
                      <p style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.85rem' }}>
                        {member.designation}
                      </p>
                      <span style={{ fontSize: '0.75rem', color: 'var(--slate-400)', fontWeight: 500 }}>
                        {member.qualification}
                      </span>
                    </div>

                    <div style={{
                      backgroundColor: 'var(--slate-50)',
                      padding: '0.75rem',
                      borderRadius: '0.5rem',
                      fontSize: '0.8rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.35rem',
                      marginTop: 'auto'
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ color: 'var(--slate-400)' }}>Department:</span>
                        <strong style={{ color: 'var(--slate-700)' }}>{member.department}</strong>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ color: 'var(--slate-400)' }}>Teaching Exp:</span>
                        <strong style={{ color: 'var(--slate-700)' }}>{member.experience}</strong>
                      </div>
                    </div>

                    <div style={{
                      borderTop: '1px solid var(--border-color)',
                      paddingTop: '0.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.75rem',
                      color: 'var(--slate-600)'
                    }}>
                      <Mail size={14} style={{ color: 'var(--primary)' }} />
                      <span style={{ fontFamily: 'monospace' }}>{member.email}</span>
                    </div>
                  </div>
                );
              })
            ) : (
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '4rem', color: 'var(--slate-400)', fontWeight: 600 }}>
                No faculty members match the selected criteria.
              </div>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}
