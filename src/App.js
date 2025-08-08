import React, { useEffect, useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contacts/Contacts"; // keep your existing path
import Footer from "./components/Footer/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : false; // default to light
  });

  // Set theme on first mount (in case CSS loads before state sync)
 // Set theme on first mount (in case CSS loads before state sync)
useEffect(() => {
  const saved = localStorage.getItem("theme");
  const isDark = saved ? saved === "dark" : darkMode;

  document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
  document.documentElement.classList.toggle("dark", isDark);
  document.body.classList.toggle("dark", isDark);

  setDarkMode(isDark);
}, []); // empty dependency array, no eslint disable needed


  // Whenever darkMode changes, sync it to <html>/<body> and localStorage
  useEffect(() => {
    const theme = darkMode ? "dark" : "light";
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.classList.toggle("dark", darkMode);
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
