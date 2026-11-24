// src/App.jsx
import React from "react";
import Navbar, { NAV_SECTION_IDS } from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Cursor from "./components/Cursor.jsx";
import HomePage from "./pages/HomePage.jsx";
import useScrollSpy from "./hooks/useScrollSpy.js";
import bgImage from "./assets/bg.webp";

export default function App() {
  const { active, scrolled } = useScrollSpy(NAV_SECTION_IDS);

  return (
    <div className="relative min-h-screen">
      <div
        className={`fixed inset-0 z-0 transition-[filter,transform] duration-[220ms] ease-out ${
          scrolled ? "scale-[1.03] blur-[4px]" : ""
        }`}
      >
        <img
          src={bgImage}
          alt=""
          aria-hidden="true"
          width="1200"
          height="800"
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover"
        />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(90deg,rgba(0,0,0,.85)_0%,rgba(0,0,0,.6)_40%,rgba(0,0,0,.18)_70%,rgba(0,0,0,0)_100%)]"
      />
      <div
        aria-hidden="true"
        className={`pointer-events-none fixed inset-0 z-0 transition-colors duration-300 ${
          scrolled ? "bg-[rgba(36,46,43,.55)]" : "bg-[rgba(36,46,43,0)]"
        }`}
      />

      <Sidebar />
      <Navbar active={active} />

      <main id="top" className="relative z-[1] pl-[70px] max-md:pb-16 max-md:pl-0">
        <HomePage />
      </main>

      <Cursor />
    </div>
  );
}
