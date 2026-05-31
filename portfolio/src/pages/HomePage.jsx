// src/pages/HomePage.jsx
import React, { useEffect, useRef } from "react";
import Hero from "../components/Hero.jsx";
import ProjectsSection from "../components/ProjectsSection.jsx";
import TechStacks from "../components/techStacks.jsx";
import AboutSection from "../components/AboutSection.jsx";
import ContactSection from "../components/ContactSection.jsx";

export default function HomePage({ onHeroVisibleChange }) {
  const heroWrapperRef = useRef(null);

  useEffect(() => {
    if (!heroWrapperRef.current || !onHeroVisibleChange) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        onHeroVisibleChange(entry.isIntersecting);
      },
      {
        threshold: 0.4, // ≥ 40% visible = "visible"
      }
    );

    observer.observe(heroWrapperRef.current);

    return () => observer.disconnect();
  }, [onHeroVisibleChange]);

  return (
    <>
      <div ref={heroWrapperRef}>
        <Hero />
      </div>

      <ProjectsSection />
      <TechStacks />
      <AboutSection />
      <ContactSection />
    </>
  );
}
