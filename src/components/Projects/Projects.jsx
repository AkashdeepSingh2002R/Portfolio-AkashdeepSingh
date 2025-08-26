import React, { useState } from "react";
import "./Projects.css";
import ProjectModal from "../ProjectModal/ProjectModal";

// Add screenshots in /src/assets and import them:
import neighbourImg from "../../assets/neighbournet.png";
import primeplusImg from "../../assets/sms.png"; // keep import, just reusing it as the image slot
import worldWideImg from "../../assets/worldwise.png"
import jobtrackerImg from "../../assets/AI_job_tracker.png"
import fastPizzaImg from "../../assets/fastreactpizza.png"

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
  title: "Fast React Pizza — Order App",
  subtitle: "React + Redux Toolkit + Tailwind",
  description:
    "A fast pizza ordering SPA built with React, Redux Toolkit, and Tailwind. Browse a dynamic pizza menu, add/remove items to cart, adjust quantities, and place orders. Uses slices, async thunks, and persisted state for a snappy UX.",
  image: fastPizzaImg,
  tech: [
    "React",
    "Vite",
    "Redux Toolkit",
    "React Router",
    "Tailwind CSS",
    "Async Thunks"
  ],
  live: "https://pizzabyreact.netlify.app/", 
  github: "https://github.com/AkashdeepSingh2002R/fast_react_pizza", 
  features: [
    "Global state with Redux Toolkit slices (cart/user/order)",
    "Add/remove/update quantities; derived totals and selectors",
    "Async order submission & status fetch (thunks)",
    "Responsive Tailwind UI with utility classes & components",
    "Route-based code structure with protected/guarded flows",
    "LocalStorage cart persistence"
  ],
  responsibilities: [
    "Designed Redux slices/selectors and async thunks",
    "Built cart & checkout flows with React Router",
    "Styled responsive UI using Tailwind",
    "Persisted cart in localStorage and handled rehydration"
  ]
}
,
{
  title: "School Management System — Full-Stack (React + Node)",
  subtitle: "BlueBell Public school | Role-based portal with AI & translation",
  description:
    "Full-stack School Management System with secure auth, role-based dashboards (Admin/Teacher/Student/Parent), attendance & timetable, assignments, announcements, newsletters, events, meetings, messaging, grades, and built-in AI helpers for announcements/newsletters/assignments plus one-click translation.",
  image: primeplusImg, 
  tech: [
    "React", "Vite", "React Router", "Tailwind CSS",
    "Node.js", "Express", "MongoDB (Mongoose)",
    "JWT Auth", "Axios", "Netlify (client)", "Render (server)"
  ],
  live: "https://schoolmanagementsystem07.netlify.app/",
 
  github: "https://github.com/AkashdeepSingh2002R/SchoolManagementSystem",
  features: [
    "Role-based login & routing (Admin/Teacher/Student/Parent) with JWT",
    "Dashboards: Classes, Students, Teachers, Timetable, Attendance, Grades",
    "Announcements & Newsletters (create, list, translate, AI-assisted drafting)",
    "Assignments with improved AI generator (objectives/steps/rubric)",
    "Events & Meetings calendar; Messages/Conversations",
    "Search across students/classes/teachers",
    "Multi-language: translate title/body via server endpoint",
    "Mobile-friendly UI (Tailwind) & persistent session (localStorage/JWT)"
  ],
  responsibilities: [
    "Designed REST API (Express + Mongoose); secured routes with JWT middleware",
    "Implemented robust CORS and environment-based allowlist for deploys",
    "Integrated AI endpoints for announcements/newsletters/assignments",
    "Built React dashboards, forms, and search with Axios data layer",
    "Set up deploys: Netlify (client), Render (server), MongoDB Atlas",
    "Implemented translation route and UI for one-click language switching"
  ],
  credentials: [
    "Admin: admin@punjabschool.edu.in / admin123",
    "Teacher: teacher@punjabschool.edu.in / teacher123",
    "Student: student@punjabschool.edu.in / student123"
  ]
}
,
  {
  title: "WorldWise — Travel Logging Map App",
  subtitle: "Save cities you’ve visited with notes & dates",
  description:
    "A React + Vite app that lets you click a world map to add cities you’ve visited, with date and notes. Uses reverse-geocoding to auto-fill city/country, stores data via json-server, and organizes your trips by cities and countries. Includes geolocation and a protected app area with a fake auth flow.",
  image: worldWideImg, 
  tech: ["React", "Vite", "React Router", "Leaflet", "react-leaflet", "json-server", "CSS Modules"],
  live: "https://worldwiseadventureapp.netlify.app/",
  github: "https://github.com/AkashdeepSingh2002R/WorldWise", 
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
},
{
  title: "Job Application Tracker",
  subtitle: "React-based tracker | Planned MERN + AI job status assistant",
  description:
    "A job application tracker built with React, designed to organize applications, statuses, companies, and notes. Currently a frontend app with local state & persistence, but planned to evolve into a full MERN stack project with real-time job status insights, AI-based progress tracking, and smart reminders/notifications.",
  image: jobtrackerImg, 
  tech: [
    "React", "Vite", "React Router", "Tailwind CSS",
    "localStorage (current persistence)",
    "Planned: Node.js", "Express", "MongoDB", "AI API integrations"
  ],
  live: "https://aijobtracker.netlify.app/login", 
  github: "https://github.com/AkashdeepSingh2002R/AI_job_tracker",
  features: [
    "Add, edit, and delete job applications",
    "Track job details: company, role, application date, status, and notes",
    "Search, filter, and sort job entries",
    "LocalStorage persistence (data saved between sessions)",
    "Planned: AI job status tracking and follow-up reminders",
    "Planned: Email/SMS notification system for interview & deadlines",
    "Planned: Exportable job history report"
  ],
  responsibilities: [
    "Built React components for job CRUD (Create, Read, Update, Delete)",
    "Added search, filtering, and sorting for better organization",
    "Integrated localStorage for persistence",
    "Designed responsive UI with Tailwind CSS",
    "Planned backend with Express + MongoDB for scalable storage",
    "Planned AI integration for smart tracking & notifications"
  ],
  credentials: [
    "Demo: user@demo.com / demo123" // optional, add if you set up demo login later
  ]
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
