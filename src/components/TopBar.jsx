import React, { useState, useEffect } from 'react';
import { Eye, Type, Globe } from 'lucide-react';

export default function TopBar() {
  const [textSize, setTextSize] = useState('normal'); // 'sm', 'normal', 'lg', 'xl'
  const [highContrast, setHighContrast] = useState(false);
  const [lang, setLang] = useState('en');

  const handleTextSize = (size) => {
    setTextSize(size);
    document.body.classList.remove('text-scale-lg', 'text-scale-xl');
    if (size === 'lg') {
      document.body.classList.add('text-scale-lg');
    } else if (size === 'xl') {
      document.body.classList.add('text-scale-xl');
    }
  };

  const toggleContrast = () => {
    setHighContrast(!highContrast);
    if (!highContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  };

  return (
    <div style={{
      backgroundColor: 'var(--primary)',
      color: '#ffffff',
      fontSize: '0.8rem',
      padding: '0.4rem 0',
      borderBottom: '1px solid rgba(255,255,255,0.1)'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '0.5rem'
      }}>
        {/* Left Side: Govt Portal Links */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="https://www.tn.gov.in/" target="_blank" rel="noreferrer" style={{ opacity: 0.9, fontWeight: 500 }}>
            Tamil Nadu Govt. Portal
          </a>
          <span style={{ opacity: 0.3 }}>|</span>
          <a href="https://www.tndce.tn.gov.in/" target="_blank" rel="noreferrer" style={{ opacity: 0.9, fontWeight: 500 }}>
            Directorate of Collegiate Education (DCE)
          </a>
          <span style={{ opacity: 0.3 }}>|</span>
          <span style={{ color: 'var(--secondary)', fontWeight: 600 }}>AISHE Code: C-59432</span>
        </div>

        {/* Right Side: Accessibility & Language */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          {/* Font Size controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Type size={14} style={{ opacity: 0.8 }} />
            <button 
              onClick={() => handleTextSize('normal')} 
              style={{ 
                fontWeight: textSize === 'normal' ? 'bold' : 'normal',
                color: textSize === 'normal' ? 'var(--secondary)' : '#ffffff',
                padding: '0 2px'
              }}
              title="Normal Text Size"
            >
              A
            </button>
            <button 
              onClick={() => handleTextSize('lg')} 
              style={{ 
                fontWeight: textSize === 'lg' ? 'bold' : 'normal',
                color: textSize === 'lg' ? 'var(--secondary)' : '#ffffff',
                padding: '0 2px',
                fontSize: '0.9rem'
              }}
              title="Large Text Size"
            >
              A+
            </button>
            <button 
              onClick={() => handleTextSize('xl')} 
              style={{ 
                fontWeight: textSize === 'xl' ? 'bold' : 'normal',
                color: textSize === 'xl' ? 'var(--secondary)' : '#ffffff',
                padding: '0 2px',
                fontSize: '1rem'
              }}
              title="Extra Large Text Size"
            >
              A++
            </button>
          </div>

          <span style={{ opacity: 0.3 }}>|</span>

          {/* High Contrast toggle */}
          <button 
            onClick={toggleContrast} 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.25rem',
              color: highContrast ? 'var(--secondary)' : '#ffffff' 
            }}
            title="Toggle High Contrast Mode"
          >
            <Eye size={14} />
            <span>{highContrast ? 'Normal' : 'High Contrast'}</span>
          </button>

          <span style={{ opacity: 0.3 }}>|</span>

          {/* Language selection */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <Globe size={14} style={{ opacity: 0.8 }} />
            <select 
              value={lang} 
              onChange={(e) => setLang(e.target.value)}
              style={{
                background: 'transparent',
                color: '#ffffff',
                border: 'none',
                outline: 'none',
                cursor: 'pointer',
                fontSize: '0.8rem',
                fontWeight: 500
              }}
            >
              <option value="en" style={{ color: '#000000' }}>English</option>
              <option value="ta" style={{ color: '#000000' }}>தமிழ்</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
