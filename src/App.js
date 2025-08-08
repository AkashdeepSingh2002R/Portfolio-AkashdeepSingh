import React, { useEffect, useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

const THEME_KEY = "theme"; // "dark" | "light"

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === "dark" || saved === "light") return saved === "dark";
    // fallback to system preference on first load
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Sync class & data attributes to BOTH <html> and <body> (covers all CSS strategies)
  useEffect(() => {
    const root = document.documentElement; // <html>
    const body = document.body;

    // single source of truth for CSS selectors:
    // - html.dark / body.dark-mode
    // - [data-theme="dark"] / [data-theme="light"]
    root.classList.toggle("dark", darkMode);
    root.classList.toggle("light", !darkMode);
    root.setAttribute("data-theme", darkMode ? "dark" : "light");

    body.classList.toggle("dark-mode", darkMode);
    body.setAttribute("data-theme", darkMode ? "dark" : "light");

    // persist
    localStorage.setItem(THEME_KEY, darkMode ? "dark" : "light");
  }, [darkMode]);

  // (Optional) react to OS theme changes when user hasn't explicitly chosen
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      const saved = localStorage.getItem(THEME_KEY);
      if (!saved) setDarkMode(mq.matches);
    };
    mq.addEventListener?.("change", handler);
    return () => mq.removeEventListener?.("change", handler);
  }, []);

  return (
    <div className={`App${darkMode ? " dark-mode" : ""}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
