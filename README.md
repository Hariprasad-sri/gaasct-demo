# Government Arts and Science College, Tharagampatti (GAASCT)
## Premium Website Demonstration Prototype

An elegant, modern, and high-performance website prototype designed for the **Government Arts and Science College (Co-Education), Tharagampatti** (affiliated with Bharathidasan University). This website is designed to meet premium academic standards, with a clean layout, vibrant government-college branding, full accessibility options, bilingual support (English & Tamil), and a built-in administrative data dashboard.

---

## 🌟 Key Features

1. **Academic Branding & Multi-Row Header**:
   - Split top header containing the official Tamil Nadu Government emblem, the college crest, bilingual names, and address info.
   - Main navigation bar centered with smooth sticky scroll effects, responsive side-drawer for mobile devices, and active link states.
2. **Global State Management (`CollegeContext`)**:
   - Data collections for **News & Notices, Events, Courses, Faculty Members, and Gallery Items** are managed globally.
   - Changes made inside the Admin Dashboard instantly sync across the entire website using React state and persist locally via `localStorage`.
3. **Accessibility Controls (TopBar)**:
   - Text size adjustments (A-, A, A+) which dynamically scale root font sizes.
   - High Contrast Mode (monochrome/yellow text styling) for visually impaired users.
   - Dual-language support toggle (English / தமிழ்).
4. **Interactive Admission Portal & Enquiry forms**:
   - A multi-step application wizard simulating the online admission workflow.
   - Contact and admission enquiry forms that process submissions dynamically.
5. **Interactive Admin Dashboard**:
   - Direct CRUD panel allowing presentation reviewers to edit News, publish mock events, update course details, manage faculty directories, and organize the gallery.
6. **Fully Responsive Design**:
   - Optimized layouts using CSS Grid and Flexbox with media queries tailored to desktop, tablet, and mobile dimensions.
7. **SEO Optimization**:
   - Implemented title tags, semantic headings, meta descriptions, and unique element IDs.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Routing**: [React Router DOM v7](https://reactrouter.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Styling**: Vanilla CSS (enhanced with custom properties/variables for global theme control)

---

## 📂 Project Directory Structure

```
clg demo/
├── dist/                      # Compiled production assets (generated on npm run build)
├── public/                    # Static assets
│   ├── assets/                # Images (college_logo, tn_emblem, science_lab, etc.)
│   ├── favicon.svg            # Browser tab icon
│   └── icons.svg              # Vector SVGs
├── src/
│   ├── assets/                # App-level styles
│   │   └── index.css          # Design system stylesheet
│   ├── components/            # Reusable UI components
│   │   ├── ApplicationModal.jsx # Simulated admission form
│   │   ├── EnquiryModal.jsx     # Admission enquiry popup
│   │   ├── Footer.jsx           # Premium academic footer
│   │   ├── Header.jsx           # Bilingual header and mobile drawer
│   │   ├── NoticeBoard.jsx      # Scrollable ticker for announcements
│   │   └── TopBar.jsx           # Accessibility and translation toolbar
│   ├── context/               # Global state
│   │   └── CollegeContext.jsx   # Data stores, CRUD handlers, and local persistence
│   ├── pages/                 # Routing endpoints
│   │   ├── About.jsx            # History, G.O. details, Governing council
│   │   ├── AdminDashboard.jsx   # Tabbed control panel for college data
│   │   ├── Admissions.jsx       # Fees, schedules, prospectus downloads
│   │   ├── Contact.jsx          # Location map, form, and helpdesk lines
│   │   ├── Courses.jsx          # Eligibility lists and program guidelines
│   │   ├── Departments.jsx      # Tabs for the 5 official departments
│   │   ├── EventsNews.jsx       # Archives for past events and notifications
│   │   ├── Facilities.jsx       # Labs, hostel, library overview cards
│   │   ├── Faculty.jsx          # Direct profile grid with filters
│   │   ├── Gallery.jsx          # Tagged photogrid with lightbox display
│   │   ├── Home.jsx             # Principal card, slider, and numbers ticker
│   │   ├── IQAC.jsx             # Committee members and minutes downloads
│   │   ├── NAAC.jsx             # Certification and SSR progress
│   │   └── PrincipalMessage.jsx # Official letter from Dr. M. Hema Nalini
│   ├── App.jsx                # Layout tree and client routing
│   └── main.jsx               # Client entry point
├── eslint.config.js           # Lint configuration
├── index.html                 # DOM template
├── package.json               # Manifest file
└── vite.config.js             # Bundler configuration
```

---

## 🚀 Installation & Local Development

Follow these steps to run the project locally on your machine:

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (v18.x or above recommended).

### 2. Install Dependencies
Navigate into the project root directory and run:
```bash
npm install
```

### 3. Run the Development Server
Start the Vite development server:
```bash
npm run dev
```
By default, the application will run at `http://localhost:5173/` or `http://localhost:5174/`. Open this URL in your web browser.

### 4. Code Quality & Formatting
To run the ESLint check and verify there are no syntax or logic errors:
```bash
npm run lint
```

### 5. Production Compilation
To bundle the project into highly optimized static assets:
```bash
npm run build
```
The compiled files will be output to the `dist/` directory, ready to be hosted on GitHub Pages, Netlify, Vercel, or any other web server.

---

## 📌 Demonstration Guide for Presentation

For presenting this project to the **Principal and College Management Committee**, follow this recommended flow:
1. **Accessibility Demonstration**: Show the top right controls. Turn on **High Contrast Mode** to show the yellow-on-black layout, and increase font size to **A+** to show flexible layouts. Toggle English/Tamil language translation.
2. **Official Data Sync**: Navigate through the **Departments** page. Point out that it displays the *exact* 5 official programs: B.A. Tamil, B.A. English, B.Sc. Mathematics, B.Sc. Computer Science, and B.Com.
3. **Faculty Directory**: Open the **Faculty Profile** list. Point out that the list contains the actual HODs and Guest Lecturers currently working at GAASCT (such as Mr. R. Manivasagan, Mr. L. Balasubramanian, Dr. K. Balusamy, etc.).
4. **Interactive Registration**: Go to **Admissions**, click **Apply Online**, and fill out the multi-step admission wizard. Show the generated application tracking number.
5. **Real-time Updates**: 
   - Navigate to `/admin` (or click the Admin icon in the footer/header).
   - Add a new notice (e.g. *"Principal Meeting on June 15"*).
   - Go back to the **Home** page or **Notice Ticker**. Observe the new item scroll by instantly.
