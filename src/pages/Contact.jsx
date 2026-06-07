import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare, ShieldCheck, Share2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2500);
  };

  return (
    <div>
      {/* Banner */}
      <div className="hero-banner" style={{ backgroundImage: "url('/assets/college_hero.png')", height: '35vh', minHeight: '250px' }}>
        <div className="container">
          <div className="hero-content">
            <h1 style={{ color: '#ffffff', fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '2.5rem' }}>
              Contact Us
            </h1>
            <p style={{ color: 'var(--slate-200)' }}>
              Get in touch with the college administration or plan a visit
            </p>
          </div>
        </div>
      </div>

      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: '3rem', alignItems: 'flex-start' }}>
            
            {/* Left Column: Direct Contacts */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--slate-900)' }}>
                College Office Directories
              </h3>
              <p style={{ color: 'var(--slate-600)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                For queries regarding admissions, syllabus, marksheets, certificates, and general administrative services, contact the college office during working hours (Monday to Friday, 09:30 AM - 04:30 PM).
              </p>

              {/* Address */}
              <div className="glass-card" style={{ padding: '1.25rem 1.5rem', backgroundColor: '#ffffff', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <MapPin size={22} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '0.2rem' }} />
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--slate-800)' }}>Postal Address</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--slate-500)', marginTop: '0.25rem', lineHeight: '1.5' }}>
                    Government College of Arts & Science,<br />
                    Tharagampatti, Kadavur Taluk,<br />
                    Karur District, Tamil Nadu - 621311
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="glass-card" style={{ padding: '1.25rem 1.5rem', backgroundColor: '#ffffff', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <Phone size={22} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '0.2rem' }} />
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--slate-800)' }}>Helpline Phone</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--slate-500)', marginTop: '0.25rem' }}>
                    Office landline: +91 4332 277255<br />
                    Principal Chamber: +91 4332 277256
                  </p>
                </div>
              </div>

              {/* Mail */}
              <div className="glass-card" style={{ padding: '1.25rem 1.5rem', backgroundColor: '#ffffff', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <Mail size={22} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '0.2rem' }} />
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--slate-800)' }}>Official Email</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--slate-500)', marginTop: '0.25rem', fontFamily: 'monospace' }}>
                    principal@gcastharagampatti.ac.in<br />
                    gcas.tharagampatti@gmail.com
                  </p>
                </div>
              </div>

              {/* Social media handles */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.5rem' }}>
                <Share2 size={18} style={{ color: 'var(--primary)' }} />
                <strong>Follow Us:</strong>
                <a href="#" className="btn btn-outline" style={{ padding: '0.25rem 0.75rem', fontSize: '0.75rem', borderRadius: '4px' }}>Facebook</a>
                <a href="#" className="btn btn-outline" style={{ padding: '0.25rem 0.75rem', fontSize: '0.75rem', borderRadius: '4px' }}>YouTube Channel</a>
              </div>
            </div>

            {/* Right Column: Contact form */}
            <div className="glass-card" style={{ padding: '2.5rem', backgroundColor: '#ffffff' }}>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--slate-900)', marginBottom: '1.5rem' }}>
                <MessageSquare size={22} style={{ color: 'var(--primary)' }} />
                Submit a Query / Feedback
              </h3>

              {submitted ? (
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  padding: '3rem 0'
                }}>
                  <ShieldCheck size={56} style={{ color: '#22c55e', marginBottom: '1rem' }} />
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', marginBottom: '0.5rem' }}>Query Received!</h4>
                  <p style={{ color: 'var(--slate-500)', fontSize: '0.9rem' }}>
                    Your message has been logged and queued. We will respond to your email shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label">Name *</label>
                    <input 
                      type="text" 
                      required 
                      className="form-control"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input 
                      type="email" 
                      required 
                      className="form-control"
                      placeholder="youremail@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Subject *</label>
                    <input 
                      type="text" 
                      required 
                      className="form-control"
                      placeholder="e.g., Transfer certificate query"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message *</label>
                    <textarea 
                      required 
                      rows="4" 
                      className="form-control"
                      placeholder="Explain your queries or feedback in detail..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                    <Send size={16} /> Send Message Email
                  </button>
                </form>
              )}
            </div>

          </div>

          {/* Full Width Map */}
          <div style={{ marginTop: '4rem' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--slate-900)', marginBottom: '1.5rem' }}>
              Campus Location Map
            </h3>
            <div style={{
              width: '100%',
              height: '380px',
              borderRadius: '1rem',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-md)',
              border: '1px solid var(--border-color)'
            }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.986877045763!2d78.2323456!3d10.6543212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa321cdefabcdef%3A0x1234567890abcdef!2sGovernment%20Arts%20and%20Science%20College%20Kadavur!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location for Tharagampatti Government College"
              ></iframe>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
