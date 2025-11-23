// src/pages/ProjectDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import projects from "../data/projects.js";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <main className="page page--detail">
        <section className="section section--narrow">
          <h1 className="section__title">Project not found</h1>
          <Link className="navbtn" to="/#projects">
            Back to projects
          </Link>
        </section>
      </main>
    );
  }

  const { links = {} } = project;

  return (
    <main className="page page--detail">
      <section className="section section--narrow section--detail">
        <p className="section__eyebrow">Project</p>
        <h1 className="section__title">{project.title}</h1>

        <p className="project-detail__meta">
          <span>{project.period}</span> · <span>{project.role}</span>
        </p>

        <p className="project-detail__summary">{project.summary}</p>

        <ul className="project-detail__chips">
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <div className="project-detail__highlights">
          <h2>What I did</h2>
          <ul>
            {project.highlights.map((h, idx) => (
              <li key={idx}>{h}</li>
            ))}
          </ul>
        </div>

        {/* ---- Links section ---- */}
        {(links.live || links.github) && (
          <div className="project-detail__links">
            {links.live && (
              <a
                href={links.live}
                target="_blank"
                rel="noreferrer"
                className="navbtn"
              >
                View live
              </a>
            )}

            {links.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                className="navbtn"
              >
                GitHub
              </a>
            )}
            
            {links.Figma && (
              <a
                href={links.Figma}
                target="_blank"
                rel="noreferrer"
                className="navbtn"
              >
                Figma
              </a>
            )}

            <Link className="navbtn navbtn--ghost" to="/#projects">
              ← Back to projects
            </Link>
          </div>
        )}
      </section>
    </main>
  );
}
