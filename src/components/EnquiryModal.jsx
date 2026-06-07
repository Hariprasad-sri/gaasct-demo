import React, { useState, useContext } from 'react';
import { CollegeContext } from '../context/CollegeContext';
import { X, Send, CheckCircle } from 'lucide-react';

export default function EnquiryModal({ isOpen, onClose }) {
  const { courses, submitEnquiry } = useContext(CollegeContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    courseId: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedCourse = courses.find(c => c.id === parseInt(formData.courseId));
    submitEnquiry({
      ...formData,
      courseName: selectedCourse ? selectedCourse.name : 'General Inquiry'
    });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', courseId: '', message: '' });
      onClose();
    }, 2500);
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(15, 23, 42, 0.7)',
      backdropFilter: 'blur(5px)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 500,
      padding: '1.5rem'
    }} onClick={onClose}>
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '1rem',
        maxWidth: '500px',
        width: '100%',
        boxShadow: 'var(--shadow-xl)',
        borderTop: '6px solid var(--primary)',
        padding: '2rem',
        position: 'relative',
        animation: 'fadeIn 0.3s ease-out'
      }} onClick={(e) => e.stopPropagation()}>
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            color: 'var(--slate-500)',
            transition: 'color var(--transition-fast)'
          }}
          className="hover-close"
        >
          <X size={24} />
        </button>

        {submitted ? (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '2rem 0'
          }}>
            <CheckCircle size={60} style={{ color: '#22c55e', marginBottom: '1.25rem' }} />
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
              Enquiry Submitted!
            </h3>
            <p style={{ color: 'var(--slate-500)' }}>
              Thank you for your interest. Our admissions counselor will get in touch with you shortly.
            </p>
          </div>
        ) : (
          <div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', marginBottom: '0.25rem', color: 'var(--slate-900)' }}>
              Admission Enquiry Form
            </h3>
            <p style={{ color: 'var(--slate-500)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
              Fill out the form below to receive detailed info about eligibility, fees, and procedures.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input 
                  type="text" 
                  required
                  className="form-control"
                  placeholder="Enter candidate's full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Phone Number *</label>
                  <input 
                    type="tel" 
                    required
                    pattern="[0-9]{10}"
                    title="10 digit mobile number"
                    className="form-control"
                    placeholder="10-digit mobile"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input 
                    type="email" 
                    required
                    className="form-control"
                    placeholder="candidate@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Desired Course *</label>
                <select 
                  required
                  className="form-control"
                  value={formData.courseId}
                  onChange={(e) => setFormData({ ...formData, courseId: e.target.value })}
                >
                  <option value="">-- Select Degree Programme --</option>
                  {courses.map(course => (
                    <option key={course.id} value={course.id}>
                      {course.name} ({course.level})
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Additional Queries (Optional)</label>
                <textarea 
                  rows="3"
                  className="form-control"
                  placeholder="Ask about hostel, bus facility, fees, etc."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                <Send size={16} /> Submit Enquiry Details
              </button>
            </form>
          </div>
        )}
      </div>
      <style>{`
        .hover-close:hover { color: var(--primary) !important; }
      `}</style>
    </div>
  );
}
