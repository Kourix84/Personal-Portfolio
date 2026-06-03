import React from "react";
import projects from "../data/projects.js";
import projectImage from "../assets/img.jpg";

const iconModules = import.meta.glob("../assets/icons/*.svg", {
  eager: true,
  import: "default",
  query: "?raw",
});

const iconSvgByName = Object.fromEntries(
  Object.entries(iconModules).map(([path, svg]) => {
    const fileName = path.split("/").pop().replace(".svg", "");
    return [fileName, svg];
  }),
);

const techIconByLabel = {
  css: "css",
  figma: "figma",
  html: "html",
  indexeddb: "sqlite",
  javascript: "javascript",
  openai: "openai",
  swift: "swift",
  react: "react",
  swiftui: "swiftui",
};

const linkLabels = {
  github: "GitHub",
  live: "Live demo",
  figma: "Figma",
};

const visibleHighlights = 3;

const TechIcon = ({ label }) => {
  const iconName = techIconByLabel[label.toLowerCase().replace(/\s+/g, "")];
  const iconSvg = iconName ? iconSvgByName[iconName] : null;

  if (!iconSvg) return null;

  return (
    <span
      className="tech-stack-chip__icon"
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: iconSvg }}
    />
  );
};

const getProjectLinks = (links = {}) =>
  Object.entries(links)
    .filter(([, href]) => Boolean(href))
    .map(([key, href]) => ({
      href,
      label: linkLabels[key.toLowerCase()] ?? key,
    }));

export default function ProjectsSection() {
  return (
    <section id="projects" className="section section--projects">
      <div className="section__inner section__inner--wide">
        <p className="section__eyebrow">Projects</p>
        <h2 className="section__title">Selected Works</h2>
        <p className="section__subtitle">
          A mix of fullstack, web, mobile, and PWA projects where I combine design,
          development, and delivery.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => {
            const projectLinks = getProjectLinks(project.links);

            return (
              <article key={project.id} className="project-card">
                <div className="project-card__media">
                  <img src={projectImage} alt="" aria-hidden="true" />
                </div>
                <div className="project-card__header">
                  <span className="project-card__index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="project-card__title">{project.title}</h3>
                  <p className="project-card__role">{project.role}</p>
                </div>
                <p className="project-card__period">{project.period}</p>
                <p className="project-card__short">{project.short}</p>
                <div className="project-card__details">
                  <div>
                    <h4 className="project-card__subheading">Overview</h4>
                    <p className="project-card__summary">{project.summary}</p>
                  </div>
                  <div className="project-card__highlights">
                    <h4 className="project-card__subheading">Highlights</h4>
                    <ul>
                      {project.highlights
                        .slice(0, visibleHighlights)
                        .map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                    </ul>
                  </div>
                </div>
                <ul className="project-card__chips">
                  {project.tech.map((t) => (
                    <li className="tech-stack-chip" key={t}>
                      <TechIcon label={t} />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
                {projectLinks.length > 0 && (
                  <div
                    className="project-card__links"
                    aria-label={`${project.title} links`}
                  >
                    {projectLinks.map((link) => (
                      <a
                        className="project-card__link"
                        href={link.href}
                        key={link.label}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
