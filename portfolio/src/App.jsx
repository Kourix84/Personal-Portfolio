// src/App.jsx
import React, { useState } from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Cursor from "./components/Cursor.jsx";
import heroImg from "./assets/img.jpg";

import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";

export default function App() {
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const shouldBlurBg = !isHeroVisible;

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
          <Route
            path="*"
            element={<HomePage onHeroVisibleChange={setIsHeroVisible} />}
          />
        </Routes>
      </main>

      <Cursor />
    </div>
  );
}
