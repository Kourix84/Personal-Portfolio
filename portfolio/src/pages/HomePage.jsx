// src/pages/HomePage.jsx
import React from "react";
import Hero from "../components/Hero.jsx";
import ProjectsSection from "../components/ProjectsSection.jsx";
import TechStacks from "../components/techStacks.jsx";
import AboutSection from "../components/AboutSection.jsx";
import ContactSection from "../components/ContactSection.jsx";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProjectsSection />
      <TechStacks />
      <AboutSection />
      <ContactSection />
    </>
  );
}
