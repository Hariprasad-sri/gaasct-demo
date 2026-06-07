import React, { useContext, useState } from 'react';
import { CollegeContext } from '../context/CollegeContext';
import { Megaphone, Bell, Calendar, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NoticeBoard() {
  const { news } = useContext(CollegeContext);
  const [hovered, setHovered] = useState(false);
  const [selectedNotice, setSelectedNotice] = useState(null);

  // Filter important notices or just show all
  const notices = news.slice(0, 5);

  return (
    <div className="notice-board-container" style={{
      display: 'flex',
      flexDirection: 'column',
      padding: '1.25rem',
      height: '100%',
      minHeight: '350px',
      backgroundColor: 'var(--bg-secondary)',
      borderRadius: '0.75rem',
      border: '1px solid var(--border-color)',
      boxShadow: 'var(--shadow-sm)'
    }}>
      {/* Title Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        borderBottom: '2px solid var(--primary)',
        paddingBottom: '0.75rem',
        marginBottom: '1rem'
      }}>
        <Megaphone size={20} style={{ color: 'var(--primary)' }} />
        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Latest Notice Board
        </h3>
        <span style={{
          marginLeft: 'auto',
          display: 'inline-block',
          width: '10px',
          height: '10px',
          backgroundColor: '#22c55e',
          borderRadius: '50%',
          animation: 'pulse 1.5s infinite'
        }}></span>
      </div>

      {/* Scrolling List */}
      <div 
        style={{
          position: 'relative',
          flex: 1,
          overflow: 'hidden',
          minHeight: '220px'
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          animation: notices.length > 3 ? `marquee 20s linear infinite` : 'none',
          animationPlayState: hovered ? 'paused' : 'running'
        }}>
          {/* Render notices twice if there are many to create a seamless marquee loop */}
          {[...notices, ...(notices.length > 3 ? notices : [])].map((notice, idx) => (
            <div 
              key={`${notice.id}-${idx}`}
              onClick={() => setSelectedNotice(notice)}
              style={{
                backgroundColor: 'var(--bg-primary)',
                padding: '0.85rem 1rem',
                borderRadius: '0.5rem',
                borderLeft: notice.isImportant ? '4px solid var(--primary)' : '4px solid var(--secondary)',
                cursor: 'pointer',
                transition: 'transform var(--transition-fast)'
              }}
              className="notice-item"
            >
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', fontSize: '0.75rem', color: 'var(--slate-500)', marginBottom: '0.35rem' }}>
                <Calendar size={12} />
                <span>{notice.date}</span>
                {notice.isImportant && (
                  <span style={{
                    backgroundColor: 'var(--primary)',
                    color: '#ffffff',
                    padding: '1px 6px',
                    borderRadius: '10px',
                    fontSize: '0.65rem',
                    fontWeight: 700
                  }}>
                    Urgent
                  </span>
                )}
              </div>
              <h4 style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--slate-800)', lineHeight: '1.4' }}>
                {notice.title}
              </h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--slate-500)', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', marginTop: '0.25rem' }}>
                {notice.content}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '0.75rem', marginTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/news-events" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 600 }}>
          View All Notices <ChevronRight size={14} />
        </Link>
        <span style={{ fontSize: '0.75rem', color: 'var(--slate-400)' }}>Hover to Pause</span>
      </div>

      {/* Modal Popup for Selected Notice Details */}
      {selectedNotice && (
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
        }} onClick={() => setSelectedNotice(null)}>
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
              <span style={{ fontSize: '0.8rem', color: 'var(--slate-500)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <Calendar size={14} /> {selectedNotice.date}
              </span>
              <span style={{
                backgroundColor: 'rgba(128, 0, 32, 0.08)',
                color: 'var(--primary)',
                padding: '0.25rem 0.75rem',
                borderRadius: '12px',
                fontSize: '0.75rem',
                fontWeight: 600
              }}>
                {selectedNotice.category}
              </span>
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--slate-900)', fontFamily: 'var(--font-heading)' }}>
              {selectedNotice.title}
            </h3>
            <p style={{ color: 'var(--slate-700)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem', whiteSpace: 'pre-line' }}>
              {selectedNotice.content}
            </p>
            <button 
              className="btn btn-primary" 
              onClick={() => setSelectedNotice(null)}
              style={{ width: '100%' }}
            >
              Close Announcement
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes pulse {
          0% { transform: scale(0.9); opacity: 0.6; }
          50% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(0.9); opacity: 0.6; }
        }
        .notice-item:hover {
          transform: scale(1.02);
          background-color: var(--primary-light) !important;
        }
      `}</style>
    </div>
  );
}
