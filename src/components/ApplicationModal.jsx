import React, { useState, useContext } from 'react';
import { CollegeContext } from '../context/CollegeContext';
import { X, ArrowRight, ArrowLeft, Check, Clipboard, Download } from 'lucide-react';

export default function ApplicationModal({ isOpen, onClose }) {
  const { courses, submitApplication } = useContext(CollegeContext);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    gender: '',
    community: '',
    fatherName: '',
    motherName: '',
    phone: '',
    email: '',
    address: '',
    hscBoard: '',
    hscMarks: '',
    hscPercentage: '',
    selectedCourse: '',
    stream: ''
  });
  const [appNumber, setAppNumber] = useState('');

  if (!isOpen) return null;

  const handleNext = () => setStep(s => s + 1);
  const handlePrev = () => setStep(s => s - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const courseObj = courses.find(c => c.id === parseInt(formData.selectedCourse));
    const finalData = {
      ...formData,
      courseName: courseObj ? courseObj.name : 'Not Specified',
      courseCode: courseObj ? courseObj.code : 'N/A'
    };
    const refNumber = submitApplication(finalData);
    setAppNumber(refNumber);
    setStep(4);
  };

  const handleClose = () => {
    // Reset state
    setStep(1);
    setFormData({
      name: '', dob: '', gender: '', community: '',
      fatherName: '', motherName: '', phone: '', email: '', address: '',
      hscBoard: '', hscMarks: '', hscPercentage: '', selectedCourse: '', stream: ''
    });
    setAppNumber('');
    onClose();
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(15, 23, 42, 0.75)',
      backdropFilter: 'blur(5px)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 500,
      padding: '1rem'
    }} onClick={handleClose}>
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '1rem',
        maxWidth: '650px',
        width: '100%',
        boxShadow: 'var(--shadow-xl)',
        borderTop: '6px solid var(--primary)',
        maxHeight: '90vh',
        overflowY: 'auto',
        position: 'relative',
        animation: 'fadeIn 0.3s ease-out'
      }} onClick={(e) => e.stopPropagation()}>

        {/* Header bar */}
        <div style={{
          padding: '1.5rem 2rem 0.5rem',
          borderBottom: '1px solid var(--border-color)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', color: 'var(--slate-900)' }}>
              Online Application Portal (Demo)
            </h3>
            <span style={{ fontSize: '0.75rem', color: 'var(--slate-500)', fontWeight: 500 }}>
              Academic Session 2026 - 2027
            </span>
          </div>
          <button onClick={handleClose} style={{ color: 'var(--slate-500)' }} className="hover-close">
            <X size={24} />
          </button>
        </div>

        {/* Progress indicator */}
        {step < 4 && (
          <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            backgroundColor: 'var(--slate-50)',
            padding: '0.75rem',
            borderBottom: '1px solid var(--border-color)',
            fontSize: '0.8rem',
            fontWeight: 600
          }}>
            <span style={{ color: step >= 1 ? 'var(--primary)' : 'var(--slate-400)' }}>1. Personal Info</span>
            <span style={{ color: step >= 2 ? 'var(--primary)' : 'var(--slate-400)' }}>2. Academic Records</span>
            <span style={{ color: step >= 3 ? 'var(--primary)' : 'var(--slate-400)' }}>3. Select Course</span>
          </div>
        )}

        <div style={{ padding: '2rem' }}>
          {step === 1 && (
            <div>
              <h4 style={{ marginBottom: '1.25rem', fontFamily: 'var(--font-heading)', color: 'var(--primary)' }}>
                Step 1: Personal and Family Details
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Applicant Name (As in 10th/12th Marksheet) *</label>
                  <input 
                    type="text" 
                    required 
                    className="form-control"
                    placeholder="Enter full name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Date of Birth *</label>
                  <input 
                    type="date" 
                    required 
                    className="form-control"
                    value={formData.dob}
                    onChange={(e) => setFormData({...formData, dob: e.target.value})}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Gender *</label>
                  <select 
                    required 
                    className="form-control"
                    value={formData.gender}
                    onChange={(e) => setFormData({...formData, gender: e.target.value})}
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Transgender">Transgender</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Community Category *</label>
                  <select 
                    required 
                    className="form-control"
                    value={formData.community}
                    onChange={(e) => setFormData({...formData, community: e.target.value})}
                  >
                    <option value="">Select Category</option>
                    <option value="OC">OC</option>
                    <option value="BC">BC</option>
                    <option value="BCM">BC (Muslim)</option>
                    <option value="MBC/DNC">MBC / DNC</option>
                    <option value="SC">SC</option>
                    <option value="SCA">SC (Arunthathiyar)</option>
                    <option value="ST">ST</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Father's / Guardian Name *</label>
                  <input 
                    type="text" 
                    required 
                    className="form-control"
                    placeholder="Father's name"
                    value={formData.fatherName}
                    onChange={(e) => setFormData({...formData, fatherName: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Mother's Name *</label>
                  <input 
                    type="text" 
                    required 
                    className="form-control"
                    placeholder="Mother's name"
                    value={formData.motherName}
                    onChange={(e) => setFormData({...formData, motherName: e.target.value})}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Mobile Number *</label>
                  <input 
                    type="tel" 
                    required 
                    className="form-control"
                    placeholder="10-digit mobile number"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input 
                    type="email" 
                    required 
                    className="form-control"
                    placeholder="yourname@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Communication Address *</label>
                <textarea 
                  required
                  rows="2"
                  className="form-control"
                  placeholder="Door number, Street name, Village/City, Pincode"
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                ></textarea>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1.5rem' }}>
                <button 
                  onClick={handleNext}
                  disabled={!formData.name || !formData.dob || !formData.gender || !formData.community || !formData.phone || !formData.email}
                  className="btn btn-primary"
                >
                  Save & Next <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h4 style={{ marginBottom: '1.25rem', fontFamily: 'var(--font-heading)', color: 'var(--primary)' }}>
                Step 2: Higher Secondary (+2) Qualification
              </h4>
              <div className="form-group">
                <label className="form-label">Board of Examination *</label>
                <select 
                  required
                  className="form-control"
                  value={formData.hscBoard}
                  onChange={(e) => setFormData({...formData, hscBoard: e.target.value})}
                >
                  <option value="">Select Board</option>
                  <option value="Tamil Nadu State Board">Tamil Nadu State Board (+2)</option>
                  <option value="CBSE">CBSE (Class XII)</option>
                  <option value="ICSE">ISC (Class XII)</option>
                  <option value="Other">Other State Boards</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Stream of Study *</label>
                <select 
                  required
                  className="form-control"
                  value={formData.stream}
                  onChange={(e) => setFormData({...formData, stream: e.target.value})}
                >
                  <option value="">Select Stream</option>
                  <option value="Science (Maths, Physics, Chem, Bio/CS)">Science (Maths, Physics, Chemistry, Biology/CS)</option>
                  <option value="Commerce (Accounts, Comm, Econ, CA/Maths)">Commerce (Accounts, Commerce, Economics, CA/Maths)</option>
                  <option value="Arts (History, Geography, Tamil, Eng, etc.)">Arts (History, Geography, Tamil, English)</option>
                  <option value="Vocational">Vocational Studies</option>
                </select>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Total Marks Obtained (out of 600) *</label>
                  <input 
                    type="number" 
                    required 
                    min="100"
                    max="600"
                    className="form-control"
                    placeholder="e.g. 520"
                    value={formData.hscMarks}
                    onChange={(e) => setFormData({...formData, hscMarks: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">HSC Aggregate Percentage *</label>
                  <input 
                    type="number" 
                    required 
                    min="35"
                    max="100"
                    step="0.01"
                    className="form-control"
                    placeholder="e.g. 86.67"
                    value={formData.hscPercentage}
                    onChange={(e) => setFormData({...formData, hscPercentage: e.target.value})}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.5rem' }}>
                <button onClick={handlePrev} className="btn btn-outline">
                  <ArrowLeft size={16} /> Back
                </button>
                <button 
                  onClick={handleNext}
                  disabled={!formData.hscBoard || !formData.stream || !formData.hscMarks || !formData.hscPercentage}
                  className="btn btn-primary"
                >
                  Save & Next <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h4 style={{ marginBottom: '1.25rem', fontFamily: 'var(--font-heading)', color: 'var(--primary)' }}>
                Step 3: Choice of Degree Programme
              </h4>
              <div className="form-group">
                <label className="form-label">Choose Degree Course *</label>
                <select 
                  required
                  className="form-control"
                  value={formData.selectedCourse}
                  onChange={(e) => setFormData({...formData, selectedCourse: e.target.value})}
                >
                  <option value="">-- Choose Programme --</option>
                  {courses.filter(c => c.level === 'UG').map(course => (
                    <option key={course.id} value={course.id}>
                      {course.name} - ({course.intake} seats)
                    </option>
                  ))}
                </select>
                <p style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: 'var(--slate-500)' }}>
                  Note: Eligible courses depend on the stream of study selected in Step 2.
                </p>
              </div>

              <div style={{
                backgroundColor: 'var(--primary-light)',
                padding: '1rem',
                borderRadius: '0.5rem',
                fontSize: '0.85rem',
                color: 'var(--primary)',
                marginBottom: '1.5rem',
                lineHeight: '1.5'
              }}>
                <strong>Declaration:</strong> I hereby declare that the details furnished above are true and correct to the best of my knowledge. I understand that the seat allotment will be based purely on Merit/Marks, reservation rules of the Govt. of Tamil Nadu and certificate verification.
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.5rem' }}>
                <button onClick={handlePrev} className="btn btn-outline">
                  <ArrowLeft size={16} /> Back
                </button>
                <button 
                  onClick={handleSubmit}
                  disabled={!formData.selectedCourse}
                  className="btn btn-primary"
                >
                  <Check size={16} /> Final Submit Application
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div style={{ textAlign: 'center', padding: '1rem 0' }}>
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: '#e8f5e9',
                borderRadius: '50%',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#2e7d32',
                marginBottom: '1.25rem'
              }}>
                <Check size={36} />
              </div>
              
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                Application Submitted Successfully!
              </h3>
              
              <p style={{ color: 'var(--slate-500)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                Your online application has been securely received by our admissions database.
              </p>

              <div style={{
                border: '1.5px dashed var(--border-color)',
                backgroundColor: 'var(--slate-50)',
                padding: '1.25rem',
                borderRadius: '0.5rem',
                maxWidth: '400px',
                margin: '0 auto 2rem',
                textAlign: 'left'
              }}>
                <div style={{ marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--slate-500)' }}>Applicant Name:</span>
                  <strong>{formData.name}</strong>
                </div>
                <div style={{ marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--slate-500)' }}>Application No:</span>
                  <strong style={{ color: 'var(--primary)', fontFamily: 'monospace', fontSize: '1.1rem' }}>{appNumber}</strong>
                </div>
                <div style={{ marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--slate-500)' }}>Course Applied:</span>
                  <strong>{courses.find(c => c.id === parseInt(formData.selectedCourse))?.name}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--slate-500)' }}>Status:</span>
                  <span style={{ color: '#2e7d32', fontWeight: 700 }}>Submitted</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <button 
                  onClick={() => alert(`Receipt downloaded for application ${appNumber} (Simulated)`)}
                  className="btn btn-outline"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <Download size={16} /> Download Receipt
                </button>
                <button 
                  onClick={handleClose} 
                  className="btn btn-primary"
                >
                  Close Portal
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <style>{`
        .hover-close:hover { color: var(--primary) !important; }
      `}</style>
    </div>
  );
}
