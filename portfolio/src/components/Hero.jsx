import React from "react";
import ProjectsSection from "./ProjectsSection.jsx";

const focusAreas = [
  "Full-stack development",
  "Front-end development",
  "Mobile app development",
  "PWA & responsive web apps",
  "UI/UX design",
];

const completedProjects = ProjectsSection.projectCount;

const heroStats = [
  {
    value: completedProjects,
    label: `Project${completedProjects === 1 ? "" : "s"} completed`,
  },
  {
    value: focusAreas.length,
    label: "Focus areas",
  },
];

export default function Hero() {
  return (
    <section className="hero" id="hero" aria-labelledby="hero-title">
      <div className="hero__shade" />

      <div className="hero__content">
        <dl className="hero__stats" aria-label="Portfolio stats">
          {heroStats.map((stat) => (
            <div className="hero__stat" key={stat.label}>
              <dt className="hero__stat-value">
                <span className="hero__stat-plus" aria-hidden="true">
                  +
                </span>
                {stat.value}
              </dt>
              <dd className="hero__stat-label">{stat.label}</dd>
            </div>
          ))}
        </dl>

        <div className="hero__headline">
          <h1 className="hero__title" id="hero-title">
            Hello
          </h1>
          <p className="hero__tagline">
            <span aria-hidden="true">—</span> I&apos;m Kourosh, a Fontys ICT
            student building full-stack, mobile, and responsive web experiences.
          </p>
        </div>

        <a className="hero__scroll" href="#projects" aria-label="Scroll to projects">
          <span>Scroll down</span>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 4v15" />
            <path d="m6 13 6 6 6-6" />
          </svg>
        </a>
      </div>
    </section>
  );
}
