// src/App.jsx
import React, { useState } from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Cursor from "./components/Cursor.jsx";
import heroImg from "./assets/img.jpg";

import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ProjectDetail from "./pages/ProjectDetail.jsx";

export default function App() {
  const location = useLocation();
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  const isProjectDetail = location.pathname.startsWith("/projects/");
  const shouldBlurBg = isProjectDetail || (!isProjectDetail && !isHeroVisible);

  return (
    <div className="app">
      <img
        src={heroImg}
        alt=""
        aria-hidden="true"
        className={`bg-photo ${shouldBlurBg ? "bg-photo--blur" : ""}`}
      />

      <Navbar />
      <Sidebar />

      <main className="page">
        <Routes>
          <Route
            path="/"
            element={<HomePage onHeroVisibleChange={setIsHeroVisible} />}
          />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
      </main>

      <Cursor />
    </div>
  );
}
