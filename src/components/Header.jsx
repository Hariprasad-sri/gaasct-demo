import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, MapPin, Home, LogIn } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Sticky navigation triggers once scrolled past the branding top row
      if (window.scrollY > 120) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const toggleDropdown = (name) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  return (
    <header className="site-header">
      {/* =========================================================================
          ROW 1: Branding Top Row (Desktop: 4-Column Grid | Mobile: Compact Header)
          ========================================================================= */}
      
      {/* Desktop Top Row (>= 992px) */}
      <div className="branding-row-desktop">
        <div className="branding-container-desktop">
          
          {/* Column 1: College Logo */}
          <div className="brand-col col-logo">
            <img 
              src="/assets/college_logo.png" 
              alt="Government College Logo" 
              className="logo-img college-logo-img"
            />
            <span className="college-logo-text">Govt Arts & Science College,<br/>Tharagampatti</span>
          </div>

          {/* Column 2: Tamil Title & Motto */}
          <div className="brand-col col-tamil">
            <h1 className="tamil-main-title">அரசு கலை மற்றும்<br/>அறிவியல் கல்லூரி</h1>
            <h2 className="tamil-sub-title">(இருபாலர்)</h2>
            <div className="gold-deco-divider">
              <span className="gold-line"></span>
              <span className="gold-dot"></span>
              <span className="gold-line"></span>
            </div>
            <p className="tamil-motto-text">கிராமப்பற்று • கல்வி • முன்னேற்றம்</p>
          </div>

          {/* Column 3: English Title & Affiliation/Address */}
          <div className="brand-col col-english">
            <h2 className="english-main-title">Government Arts and<br/>Science College (Co-Education)</h2>
            <p className="english-affiliation-text">Affiliated to Bharathidasan University</p>
            <div className="english-address-container">
              <MapPin size={14} className="location-pin" />
              <span className="address-text">Tharagampatti - 621 311,<br/>Karur, Tamil Nadu</span>
            </div>
          </div>

          {/* Column 4: Tamil Nadu Government Logo */}
          <div className="brand-col col-state">
            <img 
              src="/assets/tn_emblem.png" 
              alt="Government of Tamil Nadu Emblem" 
              className="logo-img state-logo-img"
            />
            <span className="state-logo-text">GOVERNMENT OF TAMIL NADU</span>
          </div>

        </div>
      </div>

      {/* Mobile/Tablet Header Row (< 992px) */}
      <div className="branding-row-mobile">
        <div className="branding-container-mobile">
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1 }}>
            <img 
              src="/assets/college_logo.png" 
              alt="College Logo" 
              style={{ height: '48px', width: '48px', objectFit: 'contain' }}
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontWeight: 800, color: 'var(--primary)', fontSize: '0.95rem', lineHeight: '1.2' }}>
                அரசு கலை மற்றும் அறிவியல் கல்லூரி
              </span>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--slate-600)' }}>
                Government Arts & Science College, Tharagampatti
              </span>
            </div>
          </Link>
          
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="mobile-hamburger-btn"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* =========================================================================
          ROW 2: Full-width Centered Sticky Navigation Bar
          ========================================================================= */}
      <div className={`nav-bar-row ${scrolled ? 'is-sticky' : ''}`}>
        <div className="container nav-bar-container">
          <nav className="desktop-navbar">
            <ul className="nav-menu-list">
              
              {/* Home Tab (Gold/Yellow Highlighted Box) */}
              <li className="nav-menu-item">
                <Link to="/" className={`home-link-tab ${location.pathname === '/' ? 'active' : ''}`}>
                  <Home size={16} /> Home
                </Link>
              </li>

              {/* About Us Dropdown */}
              <li 
                className="nav-menu-item has-dropdown"
                onMouseEnter={() => setActiveDropdown('about')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className={`menu-nav-link ${['/about', '/principal-message'].includes(location.pathname) ? 'active' : ''}`}>
                  About Us <ChevronDown size={12} className="arrow-icon" />
                </button>
                {activeDropdown === 'about' && (
                  <ul className="dropdown-menu-list">
                    <li><Link to="/about">About College</Link></li>
                    <li><Link to="/principal-message">Principal's Message</Link></li>
                  </ul>
                )}
              </li>

              {/* Administration Dropdown */}
              <li 
                className="nav-menu-item has-dropdown"
                onMouseEnter={() => setActiveDropdown('administration')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className={`menu-nav-link ${['/iqac', '/naac'].includes(location.pathname) ? 'active' : ''}`}>
                  Administration <ChevronDown size={12} className="arrow-icon" />
                </button>
                {activeDropdown === 'administration' && (
                  <ul className="dropdown-menu-list">
                    <li><Link to="/about#council">Governing Council</Link></li>
                    <li><Link to="/iqac">IQAC Cell</Link></li>
                    <li><Link to="/naac">NAAC & Accreditation</Link></li>
                  </ul>
                )}
              </li>

              {/* Academics Dropdown */}
              <li 
                className="nav-menu-item has-dropdown"
                onMouseEnter={() => setActiveDropdown('academics')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className={`menu-nav-link ${['/courses', '/faculty', '/news-events'].includes(location.pathname) ? 'active' : ''}`}>
                  Academics <ChevronDown size={12} className="arrow-icon" />
                </button>
                {activeDropdown === 'academics' && (
                  <ul className="dropdown-menu-list">
                    <li><Link to="/courses">Courses Offered</Link></li>
                    <li><Link to="/faculty">Faculty Directory</Link></li>
                    <li><Link to="/news-events">Academic Notices</Link></li>
                  </ul>
                )}
              </li>

              {/* Departments Dropdown */}
              <li 
                className="nav-menu-item has-dropdown"
                onMouseEnter={() => setActiveDropdown('departments')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className={`menu-nav-link ${location.pathname === '/departments' ? 'active' : ''}`}>
                  Departments <ChevronDown size={12} className="arrow-icon" />
                </button>
                {activeDropdown === 'departments' && (
                  <ul className="dropdown-menu-list" style={{ minWidth: '240px' }}>
                    <li><Link to="/departments">Computer Science</Link></li>
                    <li><Link to="/departments">Mathematics</Link></li>
                    <li><Link to="/departments">Commerce</Link></li>
                    <li><Link to="/departments">Tamil</Link></li>
                    <li><Link to="/departments">English</Link></li>
                  </ul>
                )}
              </li>

              {/* Admissions */}
              <li className="nav-menu-item">
                <Link to="/admissions" className={`menu-nav-link ${location.pathname === '/admissions' ? 'active' : ''}`}>
                  Admissions
                </Link>
              </li>

              {/* Facilities Dropdown */}
              <li 
                className="nav-menu-item has-dropdown"
                onMouseEnter={() => setActiveDropdown('facilities')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className={`menu-nav-link ${location.pathname === '/facilities' ? 'active' : ''}`}>
                  Facilities <ChevronDown size={12} className="arrow-icon" />
                </button>
                {activeDropdown === 'facilities' && (
                  <ul className="dropdown-menu-list">
                    <li><Link to="/facilities">Digital Library</Link></li>
                    <li><Link to="/facilities">Science Laboratories</Link></li>
                    <li><Link to="/facilities">Student Hostels</Link></li>
                    <li><Link to="/facilities">Sports Grounds</Link></li>
                    <li><Link to="/facilities">Hygienic Canteen</Link></li>
                    <li><Link to="/facilities">NSS & Clubs</Link></li>
                  </ul>
                )}
              </li>

              {/* Placements */}
              <li className="nav-menu-item">
                <Link to="/placement" className={`menu-nav-link ${location.pathname === '/placement' ? 'active' : ''}`}>
                  Placements
                </Link>
              </li>

              {/* Gallery */}
              <li className="nav-menu-item">
                <Link to="/gallery" className={`menu-nav-link ${location.pathname === '/gallery' ? 'active' : ''}`}>
                  Gallery
                </Link>
              </li>

              {/* Contact Us */}
              <li className="nav-menu-item">
                <Link to="/contact" className={`menu-nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          {/* Clean Portal Admin login link on the far right */}
          <div className="nav-admin-portal-box">
            <Link to="/admin" className="nav-admin-btn">
              <LogIn size={13} /> Admin Portal
            </Link>
          </div>
        </div>
      </div>

      {/* =========================================================================
          ROW 3: Mobile Slide Drawer Navigation
          ========================================================================= */}
      {isOpen && (
        <div className="mobile-drawer-menu">
          <ul className="mobile-drawer-list">
            <li><Link to="/" className="mobile-link-item">Home</Link></li>
            
            <li className="mobile-expandable-item">
              <div className="mobile-expand-header" onClick={() => toggleDropdown('about-mob')}>
                <span>About Us</span>
                <ChevronDown size={15} style={{ transform: activeDropdown === 'about-mob' ? 'rotate(180deg)' : 'none', transition: '0.2s' }} />
              </div>
              {activeDropdown === 'about-mob' && (
                <ul className="mobile-expand-submenu">
                  <li><Link to="/about">About College</Link></li>
                  <li><Link to="/principal-message">Principal's Message</Link></li>
                </ul>
              )}
            </li>

            <li className="mobile-expandable-item">
              <div className="mobile-expand-header" onClick={() => toggleDropdown('admin-mob')}>
                <span>Administration</span>
                <ChevronDown size={15} style={{ transform: activeDropdown === 'admin-mob' ? 'rotate(180deg)' : 'none', transition: '0.2s' }} />
              </div>
              {activeDropdown === 'admin-mob' && (
                <ul className="mobile-expand-submenu">
                  <li><Link to="/about">Governing Council</Link></li>
                  <li><Link to="/iqac">IQAC Cell</Link></li>
                  <li><Link to="/naac">NAAC Accreditation</Link></li>
                </ul>
              )}
            </li>

            <li className="mobile-expandable-item">
              <div className="mobile-expand-header" onClick={() => toggleDropdown('academics-mob')}>
                <span>Academics</span>
                <ChevronDown size={15} style={{ transform: activeDropdown === 'academics-mob' ? 'rotate(180deg)' : 'none', transition: '0.2s' }} />
              </div>
              {activeDropdown === 'academics-mob' && (
                <ul className="mobile-expand-submenu">
                  <li><Link to="/courses">Courses Offered</Link></li>
                  <li><Link to="/faculty">Faculty Directory</Link></li>
                  <li><Link to="/news-events">Academic Notices</Link></li>
                </ul>
              )}
            </li>

            <li className="mobile-expandable-item">
              <div className="mobile-expand-header" onClick={() => toggleDropdown('depts-mob')}>
                <span>Departments</span>
                <ChevronDown size={15} style={{ transform: activeDropdown === 'depts-mob' ? 'rotate(180deg)' : 'none', transition: '0.2s' }} />
              </div>
              {activeDropdown === 'depts-mob' && (
                <ul className="mobile-expand-submenu">
                  <li><Link to="/departments">Computer Science</Link></li>
                  <li><Link to="/departments">Mathematics</Link></li>
                  <li><Link to="/departments">Commerce</Link></li>
                  <li><Link to="/departments">Tamil</Link></li>
                  <li><Link to="/departments">English</Link></li>
                </ul>
              )}
            </li>

            <li className="mobile-expandable-item">
              <div className="mobile-expand-header" onClick={() => toggleDropdown('fac-mob')}>
                <span>Facilities</span>
                <ChevronDown size={15} style={{ transform: activeDropdown === 'fac-mob' ? 'rotate(180deg)' : 'none', transition: '0.2s' }} />
              </div>
              {activeDropdown === 'fac-mob' && (
                <ul className="mobile-expand-submenu">
                  <li><Link to="/facilities">Digital Library</Link></li>
                  <li><Link to="/facilities">Laboratories</Link></li>
                  <li><Link to="/facilities">Hostels</Link></li>
                  <li><Link to="/facilities">Sports</Link></li>
                  <li><Link to="/facilities">Canteen</Link></li>
                  <li><Link to="/facilities">NSS & Clubs</Link></li>
                </ul>
              )}
            </li>

            <li><Link to="/admissions" className="mobile-link-item">Admissions</Link></li>
            <li><Link to="/placement" className="mobile-link-item">Placements</Link></li>
            <li><Link to="/gallery" className="mobile-link-item">Gallery</Link></li>
            <li><Link to="/contact" className="mobile-link-item">Contact Us</Link></li>
            
            <li style={{ marginTop: '1rem', listStyle: 'none' }}>
              <Link to="/admin" className="btn btn-primary" style={{ display: 'flex', justifyContent: 'center', width: '100%', gap: '0.5rem' }}>
                <LogIn size={16} /> Admin Portal
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Embedded visual styling to match user exact design */}
      <style>{`
        .site-header {
          display: flex;
          flex-direction: column;
          background-color: #ffffff;
          width: 100%;
          box-shadow: 0 2px 4px rgba(0,0,0,0.03);
          position: relative;
          z-index: 100;
        }

        /* Desktop Branding Grid Row */
        .branding-row-desktop {
          background-color: #ffffff;
          display: block;
          padding: 1.5rem 0;
          border-bottom: 1px solid var(--border-color);
        }

        .branding-container-desktop {
          display: grid;
          grid-template-columns: 19fr 31fr 31fr 19fr; /* Optimized proportions: 19% side columns, 31% middle columns */
          width: 100%;
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 1.5rem;
          align-items: center;
        }

        .brand-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 0 1rem;
        }

        /* Vertical grey separators */
        .brand-col:not(:last-child) {
          border-right: 1.5px solid #e2e8f0;
        }

        .logo-img {
          height: 72px;
          width: 72px;
          object-fit: contain;
          margin-bottom: 0.4rem;
        }

        .college-logo-img {
          height: 105px;
          width: 105px;
          object-fit: contain;
          margin-bottom: 0.6rem;
        }

        .state-logo-img {
          height: 105px;
          width: 105px;
          object-fit: contain;
          margin-bottom: 0.6rem;
        }

        .logo-text-label {
          font-size: 0.65rem;
          font-weight: 800;
          color: var(--slate-800);
          letter-spacing: 1px;
        }

        .college-logo-text {
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--slate-800);
          line-height: 1.35;
          text-align: center;
          max-width: 210px;
          display: inline-block;
        }

        .state-logo-text {
          font-size: 0.7rem;
          font-weight: 800;
          color: var(--slate-800);
          letter-spacing: 0.5px;
          line-height: 1.35;
          text-align: center;
          max-width: 160px;
          display: inline-block;
        }

        /* Tamil Column Styles */
        .tamil-main-title {
          font-family: var(--font-heading);
          color: #7f0019; /* Exact deep crimson */
          font-weight: 800;
          font-size: 1.45rem;
          line-height: 1.25;
          margin: 0;
        }

        .tamil-sub-title {
          font-family: var(--font-heading);
          color: #7f0019;
          font-weight: 800;
          font-size: 1.35rem;
          line-height: 1.1;
          margin: 0.15rem 0 0;
        }

        /* Gold Decorative Divider Line with Center Dot */
        .gold-deco-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          width: 120px;
          margin: 0.4rem 0;
        }

        .gold-line {
          height: 1.25px;
          background-color: #c5a03e;
          flex: 1;
        }

        .gold-dot {
          height: 5px;
          width: 5px;
          background-color: #c5a03e;
          border-radius: 50%;
        }

        .tamil-motto-text {
          color: var(--slate-600);
          font-weight: 700;
          font-size: 0.85rem;
          margin: 0;
        }

        /* English Column Styles */
        .english-main-title {
          color: var(--slate-800);
          font-weight: 800;
          font-size: 1.22rem;
          line-height: 1.25;
          margin: 0;
        }

        .english-affiliation-text {
          color: #0f4c81; /* Trust Blue Affiliation */
          font-weight: 700;
          font-size: 0.82rem;
          margin: 0.2rem 0;
        }

        .english-address-container {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          gap: 0.35rem;
          color: var(--slate-600);
          font-weight: 600;
          font-size: 0.8rem;
          margin-top: 0.2rem;
        }

        .location-pin {
          color: #ef4444; /* Red location pin */
          margin-top: 2px;
          flex-shrink: 0;
        }

        .address-text {
          line-height: 1.35;
          text-align: left;
        }

        /* Mobile Branding Row */
        .branding-row-mobile {
          display: none;
          background-color: #ffffff;
          padding: 0.75rem 0;
          border-bottom: 1px solid var(--border-color);
        }

        .branding-container-mobile {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 1.25rem;
        }

        .mobile-hamburger-btn {
          color: var(--primary);
        }

        /* ROW 2: Navigation Menu Bar */
        .nav-bar-row {
          background-color: #7f0019; /* Official Crimson */
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          width: 100%;
          transition: all var(--transition-normal);
        }

        .nav-bar-row.is-sticky {
          position: fixed;
          top: 0;
          left: 0;
          z-index: 150;
          box-shadow: var(--shadow-lg);
          background-color: rgba(127, 0, 25, 0.98);
          backdrop-filter: blur(8px);
        }

        .nav-bar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-left: 1rem;
          padding-right: 1rem;
          height: 48px;
        }

        .desktop-navbar {
          flex: 1;
        }

        .nav-menu-list {
          display: flex;
          justify-content: center;
          align-items: stretch;
          list-style: none;
          gap: 0.25rem;
          margin: 0;
          padding: 0;
          height: 48px;
        }

        /* Gold highlight box for Home tab */
        .home-link-tab {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          background-color: #c5a03e; /* Solid Gold highlight tab */
          color: #ffffff;
          padding: 0 1.25rem;
          height: 100%;
          font-size: 0.88rem;
          font-weight: 700;
          transition: background-color var(--transition-fast);
        }

        .home-link-tab:hover {
          background-color: #bda032;
        }

        .menu-nav-link {
          display: flex;
          align-items: center;
          gap: 0.2rem;
          color: #ffffff;
          font-size: 0.85rem;
          font-weight: 700;
          padding: 0 0.85rem;
          height: 48px;
          line-height: 48px;
          border-bottom: 2px solid transparent;
          transition: all var(--transition-fast);
        }

        .menu-nav-link:hover, 
        .menu-nav-link.active {
          color: #c5a03e !important;
          border-bottom-color: #c5a03e;
        }

        .arrow-icon {
          opacity: 0.8;
        }

        /* Navigation item hover boxes */
        .nav-menu-item {
          position: relative;
          display: flex;
          align-items: center;
        }

        /* Dropdown lists */
        .dropdown-menu-list {
          position: absolute;
          top: 100%;
          left: 0;
          background-color: #ffffff;
          border-radius: 0 0 0.5rem 0.5rem;
          box-shadow: var(--shadow-lg);
          border-top: 3.5px solid #c5a03e; /* Gold line on dropdown */
          display: flex;
          flex-direction: column;
          list-style: none;
          min-width: 200px;
          padding: 0.4rem 0;
          z-index: 200;
          margin: 0;
          animation: slideDown 0.18s ease-out;
        }

        .dropdown-menu-list a {
          display: block;
          padding: 0.55rem 1.25rem;
          color: var(--slate-800);
          font-weight: 600;
          font-size: 0.85rem;
          transition: background-color var(--transition-fast), color var(--transition-fast);
        }

        .dropdown-menu-list a:hover {
          background-color: var(--primary-light);
          color: var(--primary);
        }

        /* Admin link styling */
        .nav-admin-portal-box {
          display: flex;
          align-items: center;
        }

        .nav-admin-btn {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          background-color: rgba(255,255,255,0.08);
          color: #ffffff;
          border: 1px solid rgba(255,255,255,0.2);
          padding: 0.35rem 0.85rem;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 700;
          transition: all var(--transition-normal);
        }

        .nav-admin-btn:hover {
          background-color: #ffffff;
          color: #7f0019;
          border-color: #ffffff;
        }

        /* Mobile Drawer elements */
        .mobile-drawer-menu {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background-color: #ffffff;
          box-shadow: var(--shadow-lg);
          border-bottom: 4px solid var(--primary);
          padding: 1rem 1.5rem;
          z-index: 180;
        }

        .mobile-drawer-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          margin: 0;
          padding: 0;
        }

        .mobile-link-item {
          display: block;
          padding: 0.6rem 0.5rem;
          font-weight: 700;
          color: var(--slate-800);
          border-bottom: 1px solid var(--slate-100);
        }

        .mobile-expandable-item {
          border-bottom: 1px solid var(--slate-100);
        }

        .mobile-expand-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.6rem 0.5rem;
          font-weight: 700;
          color: var(--slate-800);
          cursor: pointer;
        }

        .mobile-expand-submenu {
          list-style: none;
          padding-left: 1.25rem;
          display: flex;
          flex-direction: column;
          background-color: var(--slate-50);
          border-radius: 0.25rem;
          margin-bottom: 0.5rem;
        }

        .mobile-expand-submenu a {
          display: block;
          padding: 0.5rem;
          font-size: 0.85rem;
          color: var(--slate-600);
          font-weight: 600;
        }

        /* Accessibility overrides */
        body.high-contrast .site-header {
          border-bottom: 1px solid #ffffff;
        }
        body.high-contrast .branding-row-desktop {
          background-color: #000000;
        }
        body.high-contrast .tamil-main-title,
        body.high-contrast .tamil-sub-title {
          color: #ffff00;
        }
        body.high-contrast .english-main-title {
          color: #ffffff;
        }
        body.high-contrast .english-affiliation-text {
          color: #ffff00;
        }
        body.high-contrast .english-address-container {
          color: #ffffff;
        }
        body.high-contrast .nav-bar-row {
          background-color: #000000;
          border-top: 1.5px solid #ffffff;
          border-bottom: 2px solid #ffffff;
        }
        body.high-contrast .home-link-tab {
          background-color: #ffff00;
          color: #000000;
        }
        body.high-contrast .menu-nav-link:hover,
        body.high-contrast .menu-nav-link.active {
          color: #ffff00 !important;
          border-bottom-color: #ffff00;
        }
        body.high-contrast .dropdown-menu-list {
          background-color: #000000;
          border: 1px solid #ffffff;
        }
        body.high-contrast .dropdown-menu-list a {
          color: #ffffff;
        }
        body.high-contrast .dropdown-menu-list a:hover {
          background-color: #ffff00;
          color: #000000;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1280px) {
          .branding-container-desktop {
            padding: 0 1rem;
            grid-template-columns: 18fr 32fr 32fr 18fr;
          }
          .tamil-main-title { font-size: 1.25rem; }
          .tamil-sub-title { font-size: 1.15rem; }
          .english-main-title { font-size: 1.1rem; }
          .college-logo-img, .state-logo-img {
            height: 85px;
            width: 85px;
          }
          .college-logo-text {
            font-size: 0.72rem;
            max-width: 160px;
          }
          .state-logo-text {
            font-size: 0.66rem;
            max-width: 140px;
          }
          .menu-nav-link {
            padding: 0 0.55rem;
            font-size: 0.8rem;
          }
          .home-link-tab {
            padding: 0 0.85rem;
            font-size: 0.8rem;
          }
        }

        @media (max-width: 1120px) {
          .branding-container-desktop {
            grid-template-columns: 20fr 30fr 30fr 20fr;
          }
          .tamil-main-title { font-size: 1.15rem; }
          .tamil-sub-title { font-size: 1.05rem; }
          .english-main-title { font-size: 1.02rem; }
          .college-logo-img, .state-logo-img {
            height: 75px;
            width: 75px;
          }
          .college-logo-text {
            font-size: 0.68rem;
            max-width: 140px;
          }
          .state-logo-text {
            font-size: 0.62rem;
            max-width: 120px;
          }
        }

        @media (max-width: 1024px) {
          .menu-nav-link {
            padding: 0 0.35rem;
            font-size: 0.75rem;
          }
        }

        @media (max-width: 992px) {
          .branding-row-desktop { display: none !important; }
          .nav-bar-row { display: none !important; }
          .branding-row-mobile { display: block !important; }
        }
      `}</style>
    </header>
  );
}
