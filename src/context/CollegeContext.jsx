import React, { createContext, useState, useEffect } from 'react';

export const CollegeContext = createContext();

export const CollegeProvider = ({ children }) => {
  // --- DEFAULT MOCK DATA ---
  const defaultNews = [
    {
      id: 1,
      title: 'Admissions Open for UG/PG Courses 2026-27',
      date: '2026-06-01',
      content: 'Online applications are invited for admission to various Under Graduate and Post Graduate courses for the academic year 2026-27. The prospectus and application portals are open. The last date for submission of online applications is June 30, 2026.',
      category: 'Admissions',
      isImportant: true
    },
    {
      id: 2,
      title: 'End Semester Examination Schedule - June 2026',
      date: '2026-05-15',
      content: 'The end semester examination timetable for all UG and PG departments has been published. Exams will commence from June 18, 2026. Students can download the detailed schedule from their respective department notices or the downloads section.',
      category: 'Academics',
      isImportant: true
    },
    {
      id: 3,
      title: 'National Level Conference on AI & Smart Computing',
      date: '2026-05-10',
      content: 'The Department of Computer Science is organizing a two-day national conference on "Artificial Intelligence and Smart Computing" on July 10-11, 2026. Research scholars and students are invited to submit papers before June 25.',
      category: 'Events',
      isImportant: false
    },
    {
      id: 4,
      title: 'Mega Campus Placement Drive 2026',
      date: '2026-05-01',
      content: 'A mega campus placement drive is scheduled on June 25, 2026, at the Seminar Hall. Major recruiters including Wipro, TCS, and Cognizant will participate. Final year students from B.Sc. CS, Maths, B.Com, and BBA are eligible.',
      category: 'Placement',
      isImportant: false
    }
  ];

  const defaultEvents = [
    {
      id: 1,
      title: '15th Annual Sports Day 2026',
      date: '2026-06-20',
      time: '09:00 AM - 04:00 PM',
      location: 'College Sports Ground',
      description: 'The annual sports meet featuring track, field, and indoor events. The District Collector of Karur has consented to be the Chief Guest for the prize distribution ceremony.',
      category: 'Sports',
      image: '/assets/college_hero.png'
    },
    {
      id: 2,
      title: 'National Science Day Exhibition',
      date: '2026-06-28',
      time: '10:00 AM - 04:30 PM',
      location: 'Science Block Laboratories',
      description: 'An interactive science exhibition showcasing working projects, models, and research posters prepared by Physics, Chemistry, and Computer Science students.',
      category: 'Academic',
      image: '/assets/science_lab.png'
    },
    {
      id: 3,
      title: 'Annual College Day & Cultural Fest',
      date: '2026-07-05',
      time: '10:30 AM - 05:00 PM',
      location: 'Open Air Auditorium',
      description: 'A celebration of student academic achievements, sports accomplishments, and high-energy cultural performances by different departments.',
      category: 'Cultural',
      image: '/assets/campus_library.png'
    }
  ];

  const defaultCourses = [
    { id: 1, code: 'BA-TAM', name: 'B.A. Tamil', duration: '3 Years', intake: 60, department: 'Tamil', eligibility: 'HSC (+2) Pass with Tamil as a subject', level: 'UG', fee: '₹ 1,500 / year (Govt Fee Structure)' },
    { id: 2, code: 'BA-ENG', name: 'B.A. English', duration: '3 Years', intake: 60, department: 'English', eligibility: 'HSC (+2) Pass with English as a subject', level: 'UG', fee: '₹ 1,500 / year (Govt Fee Structure)' },
    { id: 3, code: 'BCOM', name: 'B.Com', duration: '3 Years', intake: 60, department: 'Commerce', eligibility: 'HSC (+2) Pass with Accountancy and Commerce', level: 'UG', fee: '₹ 1,800 / year (Govt Fee Structure)' },
    { id: 4, code: 'BSC-MAT', name: 'B.Sc. Mathematics', duration: '3 Years', intake: 50, department: 'Mathematics', eligibility: 'HSC (+2) Pass with Mathematics and Physics', level: 'UG', fee: '₹ 1,800 / year (Govt Fee Structure)' },
    { id: 5, code: 'BSC-CS', name: 'B.Sc. Computer Science', duration: '3 Years', intake: 50, department: 'Computer Science', eligibility: 'HSC (+2) Pass with Computer Science/Mathematics', level: 'UG', fee: '₹ 2,200 / year (Govt Fee Structure)' }
  ];

  const defaultFaculty = [
    { id: 1, name: 'Dr. K. Balusamy', designation: 'Assistant Professor & Head', department: 'Tamil', qualification: 'M.A., M.Phil., Ph.D., DGT, SET, NET', experience: '10 Years', email: 'balusamy.tamil@gaasct.ac.in' },
    { id: 2, name: 'Dr. R. Tamilselvan', designation: 'Guest Lecturer', department: 'Tamil', qualification: 'M.A., B.Ed., M.Phil., SET, NET, Ph.D.', experience: '6 Years', email: 'tamilselvan.tamil@gaasct.ac.in' },
    { id: 3, name: 'Dr. S. Ilavarasi', designation: 'Guest Lecturer', department: 'Tamil', qualification: 'M.A., M.A., M.Sc., B.Ed., M.Phil., SET, NET, Ph.D., CLIS', experience: '5 Years', email: 'ilavarasi.tamil@gaasct.ac.in' },
    { id: 4, name: 'Dr. V. Sathiskumar', designation: 'Guest Lecturer', department: 'Tamil', qualification: 'M.A., B.Ed., M.Phil., SET, NET, Ph.D.', experience: '6 Years', email: 'sathiskumar.tamil@gaasct.ac.in' },
    { id: 5, name: 'Mr. L. Balasubramanian', designation: 'Assistant Professor & Head', department: 'English', qualification: 'M.A., M.Phil., NET', experience: '12 Years', email: 'balasubramanian.eng@gaasct.ac.in' },
    { id: 6, name: 'Mr. K. Prabakar', designation: 'Guest Lecturer', department: 'English', qualification: 'M.A., M.Phil., SET', experience: '7 Years', email: 'prabakar.eng@gaasct.ac.in' },
    { id: 7, name: 'Dr. J. Sathiyaraj', designation: 'Assistant Professor & Head', department: 'Mathematics', qualification: 'M.Sc., M.Phil., Ph.D., B.Ed., SET', experience: '11 Years', email: 'sathiyaraj.maths@gaasct.ac.in' },
    { id: 8, name: 'Dr. A. R. Shahul Hameed', designation: 'Guest Lecturer', department: 'Mathematics', qualification: 'M.Sc., M.Phil., Ph.D.', experience: '6 Years', email: 'shahulhameed.maths@gaasct.ac.in' },
    { id: 9, name: 'Mr. R. Manivasagan', designation: 'Assistant Professor & Head', department: 'Computer Science', qualification: 'M.C.A., M.Phil.', experience: '14 Years', email: 'manivasagan.cs@gaasct.ac.in' },
    { id: 10, name: 'Dr. S. Sivakumar', designation: 'Guest Lecturer', department: 'Computer Science', qualification: 'M.C.A., Ph.D.', experience: '8 Years', email: 'sivakumar.cs@gaasct.ac.in' },
    { id: 11, name: 'Dr. G. S. Balakrishnan', designation: 'Assistant Professor & Head', department: 'Commerce', qualification: 'M.Com., M.Phil., Ph.D., MBA, PGDCA', experience: '15 Years', email: 'balakrishnan.com@gaasct.ac.in' },
    { id: 12, name: 'Dr. R. P. Mohanraj', designation: 'Guest Lecturer', department: 'Commerce', qualification: 'M.Com., Ph.D.', experience: '9 Years', email: 'mohanraj.com@gaasct.ac.in' }
  ];

  const defaultGallery = [
    { id: 1, category: 'Campus', title: 'Main Campus Building', url: '/assets/college_hero.png' },
    { id: 2, category: 'Academic', title: 'Central Library Reading Hall', url: '/assets/campus_library.png' },
    { id: 3, category: 'Academic', title: 'Computer Science Laboratory', url: '/assets/science_lab.png' },
    { id: 4, category: 'Events', title: 'National Seminar at Auditorium', url: '/assets/campus_library.png' },
    { id: 5, category: 'Sports', title: 'Annual Track and Field Events', url: '/assets/college_hero.png' },
    { id: 6, category: 'Academic', title: 'Chemistry Laboratory Session', url: '/assets/science_lab.png' }
  ];

  // --- STATE WITH LOCALSTORAGE INITIALIZATION ---
  const [news, setNews] = useState(() => {
    const local = localStorage.getItem('gcas_news');
    return local ? JSON.parse(local) : defaultNews;
  });

  const [events, setEvents] = useState(() => {
    const local = localStorage.getItem('gcas_events');
    return local ? JSON.parse(local) : defaultEvents;
  });

  const [courses, setCourses] = useState(() => {
    const local = localStorage.getItem('gcas_courses');
    return local ? JSON.parse(local) : defaultCourses;
  });

  const [faculty, setFaculty] = useState(() => {
    const local = localStorage.getItem('gcas_faculty');
    return local ? JSON.parse(local) : defaultFaculty;
  });

  const [gallery, setGallery] = useState(() => {
    const local = localStorage.getItem('gcas_gallery');
    return local ? JSON.parse(local) : defaultGallery;
  });

  const [enquiries, setEnquiries] = useState(() => {
    const local = localStorage.getItem('gcas_enquiries');
    return local ? JSON.parse(local) : [];
  });

  const [applications, setApplications] = useState(() => {
    const local = localStorage.getItem('gcas_applications');
    return local ? JSON.parse(local) : [];
  });

  // --- SYNC WITH LOCALSTORAGE ---
  useEffect(() => {
    localStorage.setItem('gcas_news', JSON.stringify(news));
  }, [news]);

  useEffect(() => {
    localStorage.setItem('gcas_events', JSON.stringify(events));
  }, [events]);

  useEffect(() => {
    localStorage.setItem('gcas_courses', JSON.stringify(courses));
  }, [courses]);

  useEffect(() => {
    localStorage.setItem('gcas_faculty', JSON.stringify(faculty));
  }, [faculty]);

  useEffect(() => {
    localStorage.setItem('gcas_gallery', JSON.stringify(gallery));
  }, [gallery]);

  useEffect(() => {
    localStorage.setItem('gcas_enquiries', JSON.stringify(enquiries));
  }, [enquiries]);

  useEffect(() => {
    localStorage.setItem('gcas_applications', JSON.stringify(applications));
  }, [applications]);

  // --- CRUD ACTIONS ---

  // News Actions
  const addNews = (item) => {
    const newId = news.length > 0 ? Math.max(...news.map(n => n.id)) + 1 : 1;
    setNews([{ id: newId, ...item }, ...news]);
  };
  const updateNews = (updatedItem) => {
    setNews(news.map(item => item.id === updatedItem.id ? updatedItem : item));
  };
  const deleteNews = (id) => {
    setNews(news.filter(item => item.id !== id));
  };

  // Events Actions
  const addEvent = (item) => {
    const newId = events.length > 0 ? Math.max(...events.map(e => e.id)) + 1 : 1;
    setEvents([{ id: newId, ...item }, ...events]);
  };
  const updateEvent = (updatedItem) => {
    setEvents(events.map(item => item.id === updatedItem.id ? updatedItem : item));
  };
  const deleteEvent = (id) => {
    setEvents(events.filter(item => item.id !== id));
  };

  // Courses Actions
  const addCourse = (item) => {
    const newId = courses.length > 0 ? Math.max(...courses.map(c => c.id)) + 1 : 1;
    setCourses([...courses, { id: newId, ...item }]);
  };
  const updateCourse = (updatedItem) => {
    setCourses(courses.map(item => item.id === updatedItem.id ? updatedItem : item));
  };
  const deleteCourse = (id) => {
    setCourses(courses.filter(item => item.id !== id));
  };

  // Faculty Actions
  const addFaculty = (item) => {
    const newId = faculty.length > 0 ? Math.max(...faculty.map(f => f.id)) + 1 : 1;
    setFaculty([...faculty, { id: newId, ...item }]);
  };
  const updateFaculty = (updatedItem) => {
    setFaculty(faculty.map(item => item.id === updatedItem.id ? updatedItem : item));
  };
  const deleteFaculty = (id) => {
    setFaculty(faculty.filter(item => item.id !== id));
  };

  // Gallery Actions
  const addGalleryItem = (item) => {
    const newId = gallery.length > 0 ? Math.max(...gallery.map(g => g.id)) + 1 : 1;
    setGallery([...gallery, { id: newId, ...item }]);
  };
  const deleteGalleryItem = (id) => {
    setGallery(gallery.filter(item => item.id !== id));
  };

  // Admissions and applications
  const submitEnquiry = (enquiry) => {
    const newId = enquiries.length > 0 ? Math.max(...enquiries.map(e => e.id)) + 1 : 1;
    const timestamp = new Date().toISOString();
    setEnquiries([{ id: newId, timestamp, ...enquiry }, ...enquiries]);
  };

  const submitApplication = (app) => {
    const newId = applications.length > 0 ? Math.max(...applications.map(a => a.id)) + 1 : 1;
    const appNumber = 'GCAS' + Math.floor(100000 + Math.random() * 900000);
    const timestamp = new Date().toISOString();
    const newApp = { id: newId, appNumber, timestamp, status: 'Submitted', ...app };
    setApplications([newApp, ...applications]);
    return appNumber; // Return for display to applicant
  };

  return (
    <CollegeContext.Provider value={{
      news, addNews, updateNews, deleteNews,
      events, addEvent, updateEvent, deleteEvent,
      courses, addCourse, updateCourse, deleteCourse,
      faculty, addFaculty, updateFaculty, deleteFaculty,
      gallery, addGalleryItem, deleteGalleryItem,
      enquiries, submitEnquiry,
      applications, submitApplication
    }}>
      {children}
    </CollegeContext.Provider>
  );
};
