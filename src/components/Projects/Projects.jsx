import React, { useState } from "react";
import "./Projects.css";
import ProjectModal from "../ProjectModal/ProjectModal";

// Add screenshots in /src/assets and import them:
import neighbourImg from "../../assets/neighbournet.png";
import primeplusImg from "../../assets/sms.png"; // keep import, just reusing it as the image slot
import worldWideImg from "../../assets/worldwise.png"

const projects = [
  {
    title: "NeighbourNet - Social Housing Platform",
    subtitle: "Social media network for neighbours",
    description:
      "A full-featured MERN stack app that allows users to interact with neighbours, post housing info, join communities, and view weather updates. TO test use this credentials - email - test@gmail.com password-111111",
    image: neighbourImg,
    tech: ["React", "Node.js", "Express", "MongoDB", "REST API"],
    live: "https://remarkable-pithivier-c497c5.netlify.app/welcome",
    github: "https://github.com/AkashdeepSingh2002R/NeighbourNet",
    features: [
      "Role-based auth (JWT), protected routes",
      "make your neighbours your friends",
      "Community join/leave, comment threads",
      "Weather API integration per location",
      "Deployed on Netlify/Render",
    ],
    responsibilities: [
      "Designed React UI & state management (RxJS)",
      "Built Express API with MongoDB (Mongoose)",
      "JWT-based auth and guards",
      "Wrote unit tests for core services",
    ],
  },
  {
    title: "School Management System (React + Vite)",
    subtitle: "Punjab School of Excellence — role-based demo",
    description:
      "Frontend-only School Management System built with React + Vite. Includes role-based login (Admin/Teacher/Student/Parent), an Admin dashboard with tabs, search across students/classes/staff, student & staff detail views, and an announcements module (create + list). Data is stored in local JS modules; auth state persists via localStorage.",
    image: primeplusImg, // replace with a real screenshot when you have one
    tech: ["React", "Vite", "React Router", "CSS Modules"],
    live: "https://worldwiseadventureapp.netlify.app/", // add your Netlify link if/when deployed
    github: "https://github.com/AkashdeepSingh2002R/SchoolManagementSystem",
    features: [
      "Role-based login & routing (admin/teacher/student/parent)",
      "Admin Dashboard with sidebar tabs: Home, Students, Staff, Classes, Announcement",
      "Unified search: students, classes, teachers",
      "Student/Staff/Class detail pages (React Router params)",
      "Announcements: add title/description/author; render list",
      "Local JS datasets (students, staff, classes, news)",
      "Responsive NavBar with hamburger menu, CSS Modules styling",
      "State saved in localStorage (logged-in user)",
    ],
    responsibilities: [
      "Implemented routing and guard-like redirects via React Router",
      "Built Admin dashboard layout with reusable card components",
      "Designed search logic across multiple datasets",
      "Wired announcement form and list with local state",
      "Structured datasets (students/staff/classes/news) for demo",
      "Created responsive UI with CSS Modules",
    ],
    credentials: [
      "Admin: admin@punjabschool.edu.in / admin123",
      "Teacher: teacher@punjabschool.edu.in / teacher123",
      "Student: student@punjabschool.edu.in / student123",
    ],
  },
  {
  title: "WorldWise — Travel Logging Map App",
  subtitle: "Save cities you’ve visited with notes & dates",
  description:
    "A React + Vite app that lets you click a world map to add cities you’ve visited, with date and notes. Uses reverse-geocoding to auto-fill city/country, stores data via json-server, and organizes your trips by cities and countries. Includes geolocation and a protected app area with a fake auth flow.",
  image: worldWideImg, // swap with a real screenshot when ready
  tech: ["React", "Vite", "React Router", "Leaflet", "react-leaflet", "json-server", "CSS Modules"],
  live: "https://worldwiseadventureapp.netlify.app/", // add Netlify URL if you deploy
  github: "https://github.com/AkashdeepSingh2002R/WorldWise", // change if different
  features: [
    "Interactive map (Leaflet) with city markers and popups",
    "Click map to add a city (lat/lng captured from clicks)",
    "Reverse-geocoding via BigDataCloud to auto-detect city/country/emoji",
    "Date picker & notes for each city",
    "List views: Cities and Countries (auto-grouping by country/emoji)",
    "Use your current location to center the map",
    "Protected app routes; simple login/logout (fake auth)",
    "Persistent state via API (json-server) and in-memory contexts",
  ],
  responsibilities: [
    "Built map UI with react-leaflet and custom hooks (URL position, geolocation)",
    "Implemented Cities context: load/create/delete with async reducers",
    "Added reverse-geocode flow and emoji conversion for countries",
    "Created protected routing and fake auth provider",
    "Designed responsive layout with Sidebar + Map + User panel",
  ],
  credentials: [
    "Email: jack@example.com",
    "Password: qwerty",
  ],
  notes: [
    "Local API: json-server on http://localhost:9000 (script: npm run server)",
    "Data file: /data/cities.json",
  ],
}

];

export default function Projects() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(null);

  const openModal = (p) => { setCurrent(p); setOpen(true); };
  const closeModal = () => setOpen(false);

  return (
    <section id="projects" className="projects section">
      <h2 className="section-title">Featured Projects</h2>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <article className="project-card" key={i}>
            <div
              className="project-image"
              onClick={() => openModal(p)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && openModal(p)}
            >
              <img src={p.image} alt={p.title} />
            </div>

            <div className="project-content">
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.description}</p>

              <div className="tech-stack">
                {p.tech.map((t) => (
                  <span
                    className={`tech-badge tech-${t.toLowerCase().replace(/\s/g, "-")}`}
                    key={t}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="project-links">
                {p.live && (
                  <a href={p.live} className="btn btn-primary" target="_blank" rel="noreferrer">
                    🌐 Live Demo
                  </a>
                )}
                {p.github && (
                  <a href={p.github} className="btn btn-secondary" target="_blank" rel="noreferrer">
                    💻 GitHub
                  </a>
                )}
                <button className="btn btn-secondary" onClick={() => openModal(p)}>
                  More details
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <ProjectModal open={open} onClose={closeModal} project={current} />
    </section>
  );
}
