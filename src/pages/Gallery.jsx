import React, { useState, useContext } from 'react';
import { CollegeContext } from '../context/CollegeContext';
import { Eye, X, ZoomIn } from 'lucide-react';

export default function Gallery() {
  const { gallery } = useContext(CollegeContext);
  const [filter, setFilter] = useState('ALL'); // 'ALL', 'Campus', 'Academic', 'Events', 'Sports'
  const [lightboxImg, setLightboxImg] = useState(null);

  const categories = ['ALL', 'Campus', 'Academic', 'Events', 'Sports'];

  const filteredItems = filter === 'ALL' 
    ? gallery 
    : gallery.filter(item => item.category === filter);

  return (
    <div>
      {/* Banner */}
      <div className="hero-banner" style={{ backgroundImage: "url('/assets/college_hero.png')", height: '35vh', minHeight: '250px' }}>
        <div className="container">
          <div className="hero-content">
            <h1 style={{ color: '#ffffff', fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '2.5rem' }}>
              Campus Gallery
            </h1>
            <p style={{ color: 'var(--slate-200)' }}>
              A visual journey through academic laboratories, classrooms, and student life activities
            </p>
          </div>
        </div>
      </div>

      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          
          {/* Categories Selector */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.5rem',
            flexWrap: 'wrap',
            marginBottom: '3rem'
          }}>
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setFilter(cat)}
                className={`btn ${filter === cat ? 'btn-primary' : 'btn-outline'}`}
                style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}
              >
                {cat === 'ALL' ? 'Show All Photos' : cat}
              </button>
            ))}
          </div>

          {/* Grid list */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.5rem'
          }} className="animate-fade-in">
            {filteredItems.map(item => (
              <div 
                key={item.id}
                onClick={() => setLightboxImg(item)}
                style={{
                  position: 'relative',
                  height: '240px',
                  borderRadius: '0.75rem',
                  overflow: 'hidden',
                  cursor: 'zoom-in',
                  boxShadow: 'var(--shadow-sm)'
                }}
                className="gallery-card"
              >
                <img 
                  src={item.url} 
                  alt={item.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform var(--transition-slow)' }}
                  className="gallery-img"
                />
                
                {/* Overlay hover panel */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(128, 0, 32, 0.8)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0,
                  transition: 'opacity var(--transition-normal)',
                  padding: '1rem',
                  textAlign: 'center'
                }} className="gallery-overlay">
                  <ZoomIn size={32} style={{ color: 'var(--secondary)', marginBottom: '0.5rem' }} />
                  <span style={{ fontSize: '0.7rem', color: 'var(--secondary)', fontWeight: 800, textTransform: 'uppercase' }}>
                    {item.category}
                  </span>
                  <h4 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 600, marginTop: '0.25rem' }}>
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox Popout */}
      {lightboxImg && (
        <div className="lightbox animate-fade-in" onClick={() => setLightboxImg(null)}>
          <button 
            onClick={() => setLightboxImg(null)}
            style={{
              position: 'absolute',
              top: '2rem',
              right: '2rem',
              color: '#ffffff',
              cursor: 'pointer'
            }}
          >
            <X size={36} />
          </button>
          
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <img src={lightboxImg.url} alt={lightboxImg.title} />
            <div style={{ color: '#ffffff', textAlign: 'center' }}>
              <span style={{ color: 'var(--secondary)', textTransform: 'uppercase', fontSize: '0.8rem', fontWeight: 700 }}>
                {lightboxImg.category}
              </span>
              <h3 style={{ marginTop: '0.25rem', fontSize: '1.25rem', color: '#ffffff' }}>
                {lightboxImg.title}
              </h3>
            </div>
          </div>
        </div>
      )}

      {/* Hover effects */}
      <style>{`
        .gallery-card:hover .gallery-img {
          transform: scale(1.08);
        }
        .gallery-card:hover .gallery-overlay {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
}
