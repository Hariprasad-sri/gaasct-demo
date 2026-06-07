import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CollegeProvider } from './context/CollegeContext';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import PrincipalMessage from './pages/PrincipalMessage';
import Departments from './pages/Departments';
import Courses from './pages/Courses';
import Admissions from './pages/Admissions';
import Faculty from './pages/Faculty';
import Facilities from './pages/Facilities';
import Placement from './pages/Placement';
import IQAC from './pages/IQAC';
import NAAC from './pages/NAAC';
import EventsNews from './pages/EventsNews';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import AdminDashboard from './pages/AdminDashboard';

export default function App() {
  return (
    <CollegeProvider>
      <Router>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <TopBar />
          <Header />
          
          {/* Main page content area */}
          <main style={{ flex: '1 0 auto' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/principal-message" element={<PrincipalMessage />} />
              <Route path="/departments" element={<Departments />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/faculty" element={<Faculty />} />
              <Route path="/facilities" element={<Facilities />} />
              <Route path="/placement" element={<Placement />} />
              <Route path="/iqac" element={<IQAC />} />
              <Route path="/naac" element={<NAAC />} />
              <Route path="/news-events" element={<EventsNews />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin" element={<AdminDashboard />} />
              
              {/* Fallback route */}
              <Route path="*" element={<Home />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </CollegeProvider>
  );
}
