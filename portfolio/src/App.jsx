// src/App.jsx
import React from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Hero from "./components/Hero.jsx";
import heroImg from "./assets/img.jpg";

export default function App() {
  return (
    <div className="app">
      {/* background photo as real image so we can control the focal point */}
      <img className="bg-photo" src={heroImg} alt="" aria-hidden="true" />

      <Navbar />
      <Sidebar />
      <Hero />
    </div>
  );
}
