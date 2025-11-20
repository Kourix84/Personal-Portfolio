import React from "react";
import { Link } from "react-router-dom";
import projects from "../data/projects.js";

export default function ProjectsSection() {
  return (
    <section id="projects" className="section section--projects">
      <div className="section__inner">
        <p className="section__eyebrow">Selected work</p>
        <h2 className="section__title">Projects</h2>
        <p className="section__subtitle">
          A mix of web, mobile, and PWA projects where I combine design and
          development.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-card__header">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__role">{project.role}</p>
              </div>
              <p className="project-card__summary">{project.short}</p>
              <ul className="project-card__chips">
                {project.tech.slice(0, 3).map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <Link className="project-card__link" to={`/projects/${project.id}`}>
                View case study →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
