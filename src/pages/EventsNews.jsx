import React, { useState, useContext } from 'react';
import { CollegeContext } from '../context/CollegeContext';
import { Calendar, Megaphone, MapPin, Clock, Search, ChevronRight } from 'lucide-react';

export default function EventsNews() {
  const { news, events } = useContext(CollegeContext);
  const [activeTab, setActiveTab] = useState('ALL'); // 'ALL', 'NEWS', 'EVENTS'
  const [selectedNews, setSelectedNews] = useState(null);

  return (
    <div>
      {/* Banner */}
      <div className="hero-banner" style={{ backgroundImage: "url('/assets/college_hero.png')", height: '35vh', minHeight: '250px' }}>
        <div className="container">
          <div className="hero-content">
            <h1 style={{ color: '#ffffff', fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '2.5rem' }}>
              News, Announcements & Events
            </h1>
            <p style={{ color: 'var(--slate-200)' }}>
              Stay updated with academic bulletins, calendar events, and official press releases
            </p>
          </div>
        </div>
      </div>

      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          
          {/* Tab selector */}
          <div className="tab-list" style={{ justifyContent: 'center', marginBottom: '3rem' }}>
            <button 
              onClick={() => setActiveTab('ALL')} 
              className={`tab-btn ${activeTab === 'ALL' ? 'active' : ''}`}
            >
              All Notifications ({news.length + events.length})
            </button>
            <button 
              onClick={() => setActiveTab('NEWS')} 
              className={`tab-btn ${activeTab === 'NEWS' ? 'active' : ''}`}
            >
              Academic Notices & News ({news.length})
            </button>
            <button 
              onClick={() => setActiveTab('EVENTS')} 
              className={`tab-btn ${activeTab === 'EVENTS' ? 'active' : ''}`}
            >
              Campus Events & Activities ({events.length})
            </button>
          </div>

          {/* Grid Render */}
          <div className="grid-2" style={{ gap: '2.5rem' }}>
            
            {/* Left side: News / Notices (Rendered if ALL or NEWS is active) */}
            {(activeTab === 'ALL' || activeTab === 'NEWS') && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-heading)', fontSize: '1.4rem', borderBottom: '2px solid var(--primary)', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>
                  <Megaphone size={20} style={{ color: 'var(--primary)' }} />
                  Latest News & Circulars
                </h3>
                
                {news.map(item => (
                  <div 
                    key={item.id} 
                    className="glass-card" 
                    onClick={() => setSelectedNews(item)}
                    style={{ 
                      padding: '1.5rem', 
                      backgroundColor: '#ffffff', 
                      cursor: 'pointer',
                      borderLeft: item.isImportant ? '5px solid var(--primary)' : '1px solid var(--border-color)',
                      transition: 'transform var(--transition-fast)'
                    }}
                    className="event-card-hover"
                  >
                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', fontSize: '0.75rem', color: 'var(--slate-500)', marginBottom: '0.5rem' }}>
                      <Calendar size={12} />
                      <span>{item.date}</span>
                      <span style={{ backgroundColor: 'var(--primary-light)', color: 'var(--primary)', padding: '1px 8px', borderRadius: '10px', fontSize: '0.65rem', fontWeight: 700 }}>
                        {item.category}
                      </span>
                    </div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--slate-900)', fontFamily: 'var(--font-heading)', marginBottom: '0.5rem' }}>
                      {item.title}
                    </h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--slate-500)', lineHeight: '1.5' }}>
                      {item.content}
                    </p>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 600, marginTop: '1rem' }}>
                      Read Circular Details <ChevronRight size={14} />
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Right side: Events & Activities (Rendered if ALL or EVENTS is active) */}
            {(activeTab === 'ALL' || activeTab === 'EVENTS') && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-heading)', fontSize: '1.4rem', borderBottom: '2px solid var(--primary)', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>
                  <Calendar size={20} style={{ color: 'var(--primary)' }} />
                  Upcoming Events Calendar
                </h3>

                {events.map(event => (
                  <div key={event.id} className="glass-card" style={{ overflow: 'hidden', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ height: '180px', overflow: 'hidden' }}>
                      <img src={event.image} alt={event.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ padding: '1.5rem' }}>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', fontSize: '0.75rem', color: 'var(--slate-500)', marginBottom: '0.5rem' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Calendar size={12} /> {event.date}</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Clock size={12} /> {event.time}</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><MapPin size={12} /> {event.location}</span>
                      </div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--slate-900)', fontFamily: 'var(--font-heading)', marginBottom: '0.5rem' }}>
                        {event.title}
                      </h4>
                      <p style={{ fontSize: '0.85rem', color: 'var(--slate-500)', lineHeight: '1.5' }}>
                        {event.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>

        </div>
      </section>

      {/* Modal Popup for news */}
      {selectedNews && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.6)',
          backdropFilter: 'blur(4px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 200,
          padding: '1.5rem'
        }} onClick={() => setSelectedNews(null)}>
          <div style={{
            backgroundColor: '#ffffff',
            padding: '2rem',
            borderRadius: '0.75rem',
            maxWidth: '550px',
            width: '100%',
            boxShadow: 'var(--shadow-xl)',
            borderTop: '5px solid var(--primary)',
            position: 'relative'
          }} onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--slate-500)' }}>📅 {selectedNews.date}</span>
              <span style={{ backgroundColor: 'var(--primary-light)', color: 'var(--primary)', padding: '0.25rem 0.75rem', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 600 }}>
                {selectedNews.category}
              </span>
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--slate-900)', fontFamily: 'var(--font-heading)' }}>
              {selectedNews.title}
            </h3>
            <p style={{ color: 'var(--slate-700)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem', whiteSpace: 'pre-line' }}>
              {selectedNews.content}
            </p>
            <button className="btn btn-primary" onClick={() => setSelectedNews(null)} style={{ width: '100%' }}>
              Close Document
            </button>
          </div>
        </div>
      )}

      <style>{`
        .event-card-hover:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md) !important;
        }
      `}</style>
    </div>
  );
}
