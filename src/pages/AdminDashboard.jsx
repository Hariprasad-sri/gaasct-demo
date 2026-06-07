import React, { useState, useContext } from 'react';
import { CollegeContext } from '../context/CollegeContext';
import { Plus, Edit2, Trash2, Megaphone, Calendar, BookOpen, Users, Image, Mail, UserCheck, ShieldAlert, Sparkles } from 'lucide-react';

export default function AdminDashboard() {
  const context = useContext(CollegeContext);
  
  // Destructure context variables and actions safely
  const {
    news, addNews, updateNews, deleteNews,
    events, addEvent, updateEvent, deleteEvent,
    courses, addCourse, updateCourse, deleteCourse,
    faculty, addFaculty, updateFaculty, deleteFaculty,
    gallery, addGalleryItem, deleteGalleryItem,
    enquiries, applications
  } = context;

  const [activeTab, setActiveTab] = useState('NEWS'); // NEWS, EVENTS, COURSES, FACULTY, GALLERY, SUBMISSIONS
  
  // Dialog/Modal Form States
  const [formMode, setFormMode] = useState('ADD'); // 'ADD' or 'EDIT'
  const [editingItem, setEditingItem] = useState(null);
  const [showFormModal, setShowFormModal] = useState(false);

  // Field States
  const [newsFields, setNewsFields] = useState({ title: '', date: '', content: '', category: 'General', isImportant: false });
  const [eventFields, setEventFields] = useState({ title: '', date: '', time: '', location: '', description: '', category: 'Academic', image: '/assets/college_hero.png' });
  const [courseFields, setCourseFields] = useState({ code: '', name: '', duration: '3 Years', intake: 50, department: 'Computer Science', eligibility: '', level: 'UG', fee: '' });
  const [facultyFields, setFacultyFields] = useState({ name: '', designation: 'Assistant Professor', department: 'Computer Science', qualification: '', experience: '', email: '' });
  const [galleryFields, setGalleryFields] = useState({ category: 'Campus', title: '', url: '/assets/college_hero.png' });

  // Open Modal Helpers
  const openAddForm = () => {
    setFormMode('ADD');
    setEditingItem(null);
    setNewsFields({ title: '', date: new Date().toISOString().split('T')[0], content: '', category: 'General', isImportant: false });
    setEventFields({ title: '', date: new Date().toISOString().split('T')[0], time: '', location: '', description: '', category: 'Academic', image: '/assets/college_hero.png' });
    setCourseFields({ code: '', name: '', duration: '3 Years', intake: 50, department: 'Computer Science', eligibility: '', level: 'UG', fee: '₹ 1,800 / year' });
    setFacultyFields({ name: '', designation: 'Assistant Professor', department: 'Computer Science', qualification: '', experience: '', email: '' });
    setGalleryFields({ category: 'Campus', title: '', url: '/assets/college_hero.png' });
    setShowFormModal(true);
  };

  const openEditForm = (item) => {
    setFormMode('EDIT');
    setEditingItem(item);
    if (activeTab === 'NEWS') setNewsFields({ ...item });
    if (activeTab === 'EVENTS') setEventFields({ ...item });
    if (activeTab === 'COURSES') setCourseFields({ ...item });
    if (activeTab === 'FACULTY') setFacultyFields({ ...item });
    setShowFormModal(true);
  };

  // Form Submit Handlers
  const handleSave = (e) => {
    e.preventDefault();
    if (activeTab === 'NEWS') {
      if (formMode === 'ADD') addNews(newsFields);
      else updateNews({ id: editingItem.id, ...newsFields });
    } else if (activeTab === 'EVENTS') {
      if (formMode === 'ADD') addEvent(eventFields);
      else updateEvent({ id: editingItem.id, ...eventFields });
    } else if (activeTab === 'COURSES') {
      if (formMode === 'ADD') addCourse(courseFields);
      else updateCourse({ id: editingItem.id, ...courseFields });
    } else if (activeTab === 'FACULTY') {
      if (formMode === 'ADD') addFaculty(facultyFields);
      else updateFaculty({ id: editingItem.id, ...facultyFields });
    } else if (activeTab === 'GALLERY') {
      addGalleryItem(galleryFields);
    }
    setShowFormModal(false);
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '80vh' }}>
      
      {/* Title Header */}
      <div style={{ backgroundColor: 'var(--slate-900)', color: '#ffffff', padding: '2.5rem 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span style={{ color: 'var(--secondary)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Management Portal
            </span>
            <h1 style={{ color: '#ffffff', fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '2rem', marginTop: '0.25rem' }}>
              Administrator Control Dashboard
            </h1>
            <p style={{ color: 'var(--slate-400)', fontSize: '0.85rem' }}>
              Add, update, or remove content logs in real-time. Changes instantly reflect across the public sections.
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(255,255,255,0.05)', padding: '0.5rem 1rem', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.1)' }}>
            <Sparkles size={18} style={{ color: 'var(--secondary)' }} />
            <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Interactive Demo Mode</span>
          </div>
        </div>
      </div>

      <section className="section-padding" style={{ paddingTop: '2.5rem' }}>
        <div className="container">
          
          {/* Dashboard Grid structure */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '250px 1fr',
            gap: '2rem'
          }} className="grid-2">
            
            {/* Left Column: Sidebar tab buttons */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              backgroundColor: '#ffffff',
              padding: '1.25rem',
              borderRadius: '0.75rem',
              boxShadow: 'var(--shadow-sm)',
              border: '1px solid var(--border-color)',
              height: 'fit-content'
            }}>
              {[
                { id: 'NEWS', label: 'News & Announcements', icon: <Megaphone size={18} /> },
                { id: 'EVENTS', label: 'Campus Events', icon: <Calendar size={18} /> },
                { id: 'COURSES', label: 'Degree Courses', icon: <BookOpen size={18} /> },
                { id: 'FACULTY', label: 'Faculty Directory', icon: <Users size={18} /> },
                { id: 'GALLERY', label: 'Photo Gallery', icon: <Image size={18} /> },
                { id: 'SUBMISSIONS', label: 'Portal Submissions', icon: <UserCheck size={18} /> }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => { setActiveTab(tab.id); setShowFormModal(false); }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.85rem 1rem',
                    borderRadius: '0.5rem',
                    width: '100%',
                    textAlign: 'left',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    backgroundColor: activeTab === tab.id ? 'var(--primary-light)' : 'transparent',
                    color: activeTab === tab.id ? 'var(--primary)' : 'var(--slate-600)',
                    transition: 'all var(--transition-fast)'
                  }}
                  className="sidebar-tab"
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Right Column: Dynamic Data Manager Panels */}
            <div className="glass-card" style={{ padding: '2.5rem', backgroundColor: '#ffffff', minHeight: '500px' }}>
              
              {/* Header and Add Button row */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '2px solid var(--border-color)',
                paddingBottom: '1rem',
                marginBottom: '1.5rem'
              }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, fontFamily: 'var(--font-heading)', color: 'var(--slate-900)' }}>
                  {activeTab === 'NEWS' && 'Manage News & Notices'}
                  {activeTab === 'EVENTS' && 'Manage Campus Events'}
                  {activeTab === 'COURSES' && 'Manage Degree Programmes'}
                  {activeTab === 'FACULTY' && 'Manage Academic Faculty'}
                  {activeTab === 'GALLERY' && 'Manage Photo Gallery'}
                  {activeTab === 'SUBMISSIONS' && 'Admissions Portal Submissions'}
                </h3>
                
                {activeTab !== 'SUBMISSIONS' && (
                  <button onClick={openAddForm} className="btn btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}>
                    <Plus size={16} /> Add New Log
                  </button>
                )}
              </div>

              {/* Data rendering */}
              <div className="animate-fade-in">
                
                {/* 1. NEWS TAB PANEL */}
                {activeTab === 'NEWS' && (
                  <div className="table-container">
                    <table className="custom-table" style={{ fontSize: '0.85rem' }}>
                      <thead>
                        <tr>
                          <th>Date</th>
                          <th>Category</th>
                          <th>Headline / Title</th>
                          <th>Status</th>
                          <th style={{ textAlign: 'right' }}>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {news.map(item => (
                          <tr key={item.id}>
                            <td style={{ whiteSpace: 'nowrap' }}>{item.date}</td>
                            <td><span style={{ backgroundColor: 'var(--slate-100)', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600 }}>{item.category}</span></td>
                            <td style={{ fontWeight: 600, color: 'var(--slate-800)' }}>{item.title}</td>
                            <td>{item.isImportant ? <span style={{ color: 'var(--primary)', fontWeight: 700 }}>Important</span> : <span style={{ color: 'var(--slate-400)' }}>Standard</span>}</td>
                            <td style={{ textAlign: 'right' }}>
                              <div style={{ display: 'inline-flex', gap: '0.5rem' }}>
                                <button onClick={() => openEditForm(item)} style={{ color: '#0284c7', padding: '0.25rem' }} title="Edit"><Edit2 size={16} /></button>
                                <button onClick={() => deleteNews(item.id)} style={{ color: 'var(--primary)', padding: '0.25rem' }} title="Delete"><Trash2 size={16} /></button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* 2. EVENTS TAB PANEL */}
                {activeTab === 'EVENTS' && (
                  <div className="table-container">
                    <table className="custom-table" style={{ fontSize: '0.85rem' }}>
                      <thead>
                        <tr>
                          <th>Date / Time</th>
                          <th>Location</th>
                          <th>Event Title</th>
                          <th style={{ textAlign: 'right' }}>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {events.map(event => (
                          <tr key={event.id}>
                            <td style={{ whiteSpace: 'nowrap' }}>
                              <strong>{event.date}</strong><br />
                              <span style={{ fontSize: '0.75rem', color: 'var(--slate-400)' }}>{event.time}</span>
                            </td>
                            <td>{event.location}</td>
                            <td style={{ fontWeight: 600 }}>{event.title}</td>
                            <td style={{ textAlign: 'right' }}>
                              <div style={{ display: 'inline-flex', gap: '0.5rem' }}>
                                <button onClick={() => openEditForm(event)} style={{ color: '#0284c7', padding: '0.25rem' }}><Edit2 size={16} /></button>
                                <button onClick={() => deleteEvent(event.id)} style={{ color: 'var(--primary)', padding: '0.25rem' }}><Trash2 size={16} /></button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* 3. COURSES TAB PANEL */}
                {activeTab === 'COURSES' && (
                  <div className="table-container">
                    <table className="custom-table" style={{ fontSize: '0.85rem' }}>
                      <thead>
                        <tr>
                          <th>Code</th>
                          <th>Programme Name</th>
                          <th>Duration</th>
                          <th>Intake Seats</th>
                          <th>Department</th>
                          <th style={{ textAlign: 'right' }}>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {courses.map(c => (
                          <tr key={c.id}>
                            <td style={{ fontWeight: 700, fontFamily: 'monospace' }}>{c.code}</td>
                            <td style={{ fontWeight: 600 }}>{c.name} ({c.level})</td>
                            <td>{c.duration}</td>
                            <td>{c.intake} seats</td>
                            <td>{c.department}</td>
                            <td style={{ textAlign: 'right' }}>
                              <div style={{ display: 'inline-flex', gap: '0.5rem' }}>
                                <button onClick={() => openEditForm(c)} style={{ color: '#0284c7', padding: '0.25rem' }}><Edit2 size={16} /></button>
                                <button onClick={() => deleteCourse(c.id)} style={{ color: 'var(--primary)', padding: '0.25rem' }}><Trash2 size={16} /></button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* 4. FACULTY TAB PANEL */}
                {activeTab === 'FACULTY' && (
                  <div className="table-container">
                    <table className="custom-table" style={{ fontSize: '0.85rem' }}>
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Designation</th>
                          <th>Department</th>
                          <th>Qualification</th>
                          <th>Email Address</th>
                          <th style={{ textAlign: 'right' }}>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {faculty.map(f => (
                          <tr key={f.id}>
                            <td style={{ fontWeight: 600 }}>{f.name}</td>
                            <td style={{ color: 'var(--primary)', fontWeight: 500 }}>{f.designation}</td>
                            <td>{f.department}</td>
                            <td>{f.qualification}</td>
                            <td style={{ fontFamily: 'monospace' }}>{f.email}</td>
                            <td style={{ textAlign: 'right' }}>
                              <div style={{ display: 'inline-flex', gap: '0.5rem' }}>
                                <button onClick={() => openEditForm(f)} style={{ color: '#0284c7', padding: '0.25rem' }}><Edit2 size={16} /></button>
                                <button onClick={() => deleteFaculty(f.id)} style={{ color: 'var(--primary)', padding: '0.25rem' }}><Trash2 size={16} /></button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* 5. GALLERY TAB PANEL */}
                {activeTab === 'GALLERY' && (
                  <div className="table-container">
                    <table className="custom-table" style={{ fontSize: '0.85rem' }}>
                      <thead>
                        <tr>
                          <th>Preview</th>
                          <th>Category</th>
                          <th>Image Title</th>
                          <th style={{ textAlign: 'right' }}>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {gallery.map(item => (
                          <tr key={item.id}>
                            <td>
                              <img src={item.url} alt={item.title} style={{ height: '40px', width: '50px', objectFit: 'cover', borderRadius: '4px' }} />
                            </td>
                            <td><span style={{ backgroundColor: 'var(--slate-100)', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600 }}>{item.category}</span></td>
                            <td style={{ fontWeight: 600 }}>{item.title}</td>
                            <td style={{ textAlign: 'right' }}>
                              <button onClick={() => deleteGalleryItem(item.id)} style={{ color: 'var(--primary)', padding: '0.25rem' }}><Trash2 size={16} /></button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* 6. SUBMISSIONS TAB PANEL (ENQUIRIES & APPLICATIONS) */}
                {activeTab === 'SUBMISSIONS' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                    
                    {/* Part A: Online Registrations list */}
                    <div>
                      <h4 style={{ fontFamily: 'var(--font-heading)', color: 'var(--slate-800)', fontSize: '1.1rem', marginBottom: '0.75rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
                        Submitted Online Applications ({applications.length})
                      </h4>
                      <div className="table-container">
                        <table className="custom-table" style={{ fontSize: '0.8rem' }}>
                          <thead>
                            <tr>
                              <th>Application No</th>
                              <th>Student Name</th>
                              <th>HSC Percentage</th>
                              <th>Applied Course</th>
                              <th>Phone</th>
                              <th>Date</th>
                            </tr>
                          </thead>
                          <tbody>
                            {applications.length > 0 ? (
                              applications.map(app => (
                                <tr key={app.id}>
                                  <td style={{ fontWeight: 700, color: 'var(--primary)', fontFamily: 'monospace' }}>{app.appNumber}</td>
                                  <td style={{ fontWeight: 600 }}>{app.name}</td>
                                  <td style={{ fontWeight: 700 }}>{app.hscPercentage}%</td>
                                  <td>{app.courseName}</td>
                                  <td>{app.phone}</td>
                                  <td>{new Date(app.timestamp).toLocaleDateString()}</td>
                                </tr>
                              ))
                            ) : (
                              <tr>
                                <td colSpan="6" style={{ textAlign: 'center', padding: '2rem', color: 'var(--slate-400)' }}>No online applications submitted yet.</td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Part B: Enquiry Submissions list */}
                    <div>
                      <h4 style={{ fontFamily: 'var(--font-heading)', color: 'var(--slate-800)', fontSize: '1.1rem', marginBottom: '0.75rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
                        Submitted General Enquiries ({enquiries.length})
                      </h4>
                      <div className="table-container">
                        <table className="custom-table" style={{ fontSize: '0.8rem' }}>
                          <thead>
                            <tr>
                              <th>Student Name</th>
                              <th>Email Address</th>
                              <th>Phone</th>
                              <th>Enquired Course</th>
                              <th>Queries / Comments</th>
                              <th>Date</th>
                            </tr>
                          </thead>
                          <tbody>
                            {enquiries.length > 0 ? (
                              enquiries.map(enq => (
                                <tr key={enq.id}>
                                  <td style={{ fontWeight: 600 }}>{enq.name}</td>
                                  <td>{enq.email}</td>
                                  <td>{enq.phone}</td>
                                  <td style={{ fontWeight: 500 }}>{enq.courseName}</td>
                                  <td style={{ maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={enq.message}>{enq.message || 'N/A'}</td>
                                  <td>{new Date(enq.timestamp).toLocaleDateString()}</td>
                                </tr>
                              ))
                            ) : (
                              <tr>
                                <td colSpan="6" style={{ textAlign: 'center', padding: '2rem', color: 'var(--slate-400)' }}>No enquiry submissions received yet.</td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>

                  </div>
                )}

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Popout CRUD Form Modal */}
      {showFormModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(15,23,42,0.6)',
          backdropFilter: 'blur(4px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 600,
          padding: '1.5rem'
        }} onClick={() => setShowFormModal(false)}>
          <div style={{
            backgroundColor: '#ffffff',
            padding: '2rem',
            borderRadius: '0.75rem',
            maxWidth: '550px',
            width: '100%',
            boxShadow: 'var(--shadow-xl)',
            borderTop: '6px solid var(--primary)',
            maxHeight: '90vh',
            overflowY: 'auto'
          }} onClick={(e) => e.stopPropagation()}>
            <h3 style={{ marginBottom: '1.25rem', fontFamily: 'var(--font-heading)', fontSize: '1.25rem' }}>
              {formMode === 'ADD' ? 'Create New Entry' : 'Edit Selected Entry'} ({activeTab})
            </h3>
            
            <form onSubmit={handleSave}>
              {/* NEWS FORM FIELDS */}
              {activeTab === 'NEWS' && (
                <div>
                  <div className="form-group">
                    <label className="form-label">Notice Headline *</label>
                    <input type="text" required className="form-control" value={newsFields.title} onChange={e => setNewsFields({...newsFields, title: e.target.value})} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Notice Details *</label>
                    <textarea rows="4" required className="form-control" value={newsFields.content} onChange={e => setNewsFields({...newsFields, content: e.target.value})}></textarea>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label">Date *</label>
                      <input type="date" required className="form-control" value={newsFields.date} onChange={e => setNewsFields({...newsFields, date: e.target.value})} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Category *</label>
                      <select className="form-control" value={newsFields.category} onChange={e => setNewsFields({...newsFields, category: e.target.value})}>
                        <option value="General">General</option>
                        <option value="Admissions">Admissions</option>
                        <option value="Academics">Academics</option>
                        <option value="Events">Events</option>
                        <option value="Placement">Placement</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginTop: '0.5rem' }}>
                    <input type="checkbox" id="isImportant" checked={newsFields.isImportant} onChange={e => setNewsFields({...newsFields, isImportant: e.target.checked})} />
                    <label htmlFor="isImportant" style={{ fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer' }}>Mark notice as Important (Urgent banner)</label>
                  </div>
                </div>
              )}

              {/* EVENTS FORM FIELDS */}
              {activeTab === 'EVENTS' && (
                <div>
                  <div className="form-group">
                    <label className="form-label">Event Title *</label>
                    <input type="text" required className="form-control" value={eventFields.title} onChange={e => setEventFields({...eventFields, title: e.target.value})} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Description *</label>
                    <textarea rows="3" required className="form-control" value={eventFields.description} onChange={e => setEventFields({...eventFields, description: e.target.value})}></textarea>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label">Date *</label>
                      <input type="date" required className="form-control" value={eventFields.date} onChange={e => setEventFields({...eventFields, date: e.target.value})} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Timing *</label>
                      <input type="text" placeholder="e.g. 10:00 AM" required className="form-control" value={eventFields.time} onChange={e => setEventFields({...eventFields, time: e.target.value})} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Location / Ground Venue *</label>
                    <input type="text" required className="form-control" value={eventFields.location} onChange={e => setEventFields({...eventFields, location: e.target.value})} />
                  </div>
                </div>
              )}

              {/* COURSES FORM FIELDS */}
              {activeTab === 'COURSES' && (
                <div>
                  <div style={{ display: 'grid', gridTemplateColumns: '0.6fr 1.4fr', gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label">Code *</label>
                      <input type="text" placeholder="BSC-CS" required className="form-control" value={courseFields.code} onChange={e => setCourseFields({...courseFields, code: e.target.value})} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Course Name *</label>
                      <input type="text" placeholder="B.Sc. Computer Science" required className="form-control" value={courseFields.name} onChange={e => setCourseFields({...courseFields, name: e.target.value})} />
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label">Duration *</label>
                      <input type="text" required className="form-control" value={courseFields.duration} onChange={e => setCourseFields({...courseFields, duration: e.target.value})} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Seats Intake *</label>
                      <input type="number" required className="form-control" value={courseFields.intake} onChange={e => setCourseFields({...courseFields, intake: parseInt(e.target.value)})} />
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label">Level *</label>
                      <select className="form-control" value={courseFields.level} onChange={e => setCourseFields({...courseFields, level: e.target.value})}>
                        <option value="UG">Undergraduate (UG)</option>
                        <option value="PG">Postgraduate (PG)</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Department *</label>
                      <select className="form-control" value={courseFields.department} onChange={e => setCourseFields({...courseFields, department: e.target.value})}>
                        <option value="Tamil">Tamil</option>
                        <option value="English">English</option>
                        <option value="Mathematics">Mathematics</option>
                        <option value="Physics">Physics</option>
                        <option value="Chemistry">Chemistry</option>
                        <option value="Computer Science">Computer Science</option>
                        <option value="Commerce">Commerce</option>
                        <option value="BBA">BBA</option>
                        <option value="Economics">Economics</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Tuition Fee Struct *</label>
                    <input type="text" required className="form-control" value={courseFields.fee} onChange={e => setCourseFields({...courseFields, fee: e.target.value})} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Eligibility Criteria *</label>
                    <input type="text" required className="form-control" value={courseFields.eligibility} onChange={e => setCourseFields({...courseFields, eligibility: e.target.value})} />
                  </div>
                </div>
              )}

              {/* FACULTY FORM FIELDS */}
              {activeTab === 'FACULTY' && (
                <div>
                  <div className="form-group">
                    <label className="form-label">Professor Name *</label>
                    <input type="text" placeholder="Dr. P. Kumaran" required className="form-control" value={facultyFields.name} onChange={e => setFacultyFields({...facultyFields, name: e.target.value})} />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label">Designation *</label>
                      <input type="text" placeholder="Assistant Professor" required className="form-control" value={facultyFields.designation} onChange={e => setFacultyFields({...facultyFields, designation: e.target.value})} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Department *</label>
                      <select className="form-control" value={facultyFields.department} onChange={e => setFacultyFields({...facultyFields, department: e.target.value})}>
                        <option value="Tamil">Tamil</option>
                        <option value="English">English</option>
                        <option value="Mathematics">Mathematics</option>
                        <option value="Physics">Physics</option>
                        <option value="Chemistry">Chemistry</option>
                        <option value="Computer Science">Computer Science</option>
                        <option value="Commerce">Commerce</option>
                        <option value="BBA">BBA</option>
                        <option value="Economics">Economics</option>
                      </select>
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label">Qualifications *</label>
                      <input type="text" placeholder="M.Sc., Ph.D." required className="form-control" value={facultyFields.qualification} onChange={e => setFacultyFields({...facultyFields, qualification: e.target.value})} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Experience *</label>
                      <input type="text" placeholder="10 Years" required className="form-control" value={facultyFields.experience} onChange={e => setFacultyFields({...facultyFields, experience: e.target.value})} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Official Email Address *</label>
                    <input type="email" placeholder="name.cs@gcas.edu.in" required className="form-control" value={facultyFields.email} onChange={e => setFacultyFields({...facultyFields, email: e.target.value})} />
                  </div>
                </div>
              )}

              {/* GALLERY FORM FIELDS */}
              {activeTab === 'GALLERY' && (
                <div>
                  <div className="form-group">
                    <label className="form-label">Photo Description *</label>
                    <input type="text" required className="form-control" value={galleryFields.title} onChange={e => setGalleryFields({...galleryFields, title: e.target.value})} />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label">Category *</label>
                      <select className="form-control" value={galleryFields.category} onChange={e => setGalleryFields({...galleryFields, category: e.target.value})}>
                        <option value="Campus">Campus Infrastructure</option>
                        <option value="Academic">Academic / Labs</option>
                        <option value="Events">College Events</option>
                        <option value="Sports">Sports Meet</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Photo URL *</label>
                      <select className="form-control" value={galleryFields.url} onChange={e => setGalleryFields({...galleryFields, url: e.target.value})}>
                        <option value="/assets/college_hero.png">Main Campus Building Image</option>
                        <option value="/assets/campus_library.png">Library Reading Hall Image</option>
                        <option value="/assets/science_lab.png">Science Laboratory Image</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
                <button type="button" onClick={() => setShowFormModal(false)} className="btn btn-outline" style={{ flex: 1 }}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>
                  Save and Sync Data
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style>{`
        .sidebar-tab:hover {
          background-color: var(--slate-100);
          color: var(--primary);
        }
      `}</style>
    </div>
  );
}
