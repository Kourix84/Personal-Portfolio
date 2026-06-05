import React from "react";
import notACookBookImage from "../assets/not-a-cook-book.png";
import pioperaImage from "../assets/piopera.jpg";
import nasmakImage from "../assets/nasmak.png";

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

const projects = [
  {
    id: "piopera",
    title: "Piopera – Digital Board Game",
    short:
      "PWA companion app for a mystery board game with 150+ interactive questions.",
    role: "Product design, front-end development",
    tech: ["React", "IndexedDB", "Figma"],
    period: "Feb 2025 – Jun 2025",
    heroImage: pioperaImage,
    summary:
      "Piopera is a progressive web app that extends a physical mystery board game witah interactive questions, side quests and a digital rulebook.",
    highlights: [
      "Designed some parts of the UI/UX for mobile and desktop players.",
      "Implemented offline-first behaviour using IndexedDB.",
      "Built an in-game rulebook and side-quest system.",
      "Optimized performance for low-end devices.",
      "Designned and developed the game play experience for board game players.",
    ],
    links: {
      github: "https://github.com/Kourix84/piopera.git",
      live: "https://piopera.netlify.app/",
      Figma:
        "https://www.figma.com/design/VsheeKflt0E9815ucCBzWR/Board-Game-App?node-id=0-1&t=A0zKGFKHqYJcaH8l-1",
    },
  },
  {
    id: "nasmak-website",
    title: "Nasmak – Website",
    short:
      "Website for Nasmak PM, A band based in Eindhoven and Neunen with an Easter Egg implemented.",
    role: "Web design, front-end development",
    tech: ["Figma", "HTML", "CSS", "JavaScript"],
    period: "Sep 2024 - Jan 2025",
    heroImage: nasmakImage,
    summary:
      "Website for Nasmak PM, A band based in Eindhoven and Neunen and having a strong local presence and having a tour around Netherlands every year.",
    highlights: [
      "Defined personas and mapped key user journeys.",
      "Prototyped core flows in SwiftUI with mocked data.",
      "Explored AI-assisted suggestions based on play history.",
    ],
    links: {
      github: "",
      live: "https://i539945.hera.fontysict.net/Nasmak-PM/",
      Figma:
        "https://www.figma.com/design/QHYNmWlb9jcXmcAeVGvFUM/Nasmak-PM?node-id=0-1&t=xKLVXe95gMZBTKsu-1",
    },
  },
  {
    id: "not-a-cook-book",
    title: "Not a Cook Book – Mobile App Concept",
    short:
      "Concept app and design prototype for discovering recipes based on ingredients with AI assistance.",
    role: "Mobile concept, UX, prototype, Swift Development",
    tech: ["Swift", "SwiftUI", "Figma", "OPENAI"],
    period: "Sep 2025 - Oct 2025",
    heroImage: notACookBookImage,
    summary:
      "Not a Cook Book is a concept mobile app that helps users discover recipes based on the ingredients of their food by taking a picture and the AI analyzes the food, as well as providing AI-assisted suggestions meals and step-by-step cooking guidance.",
    highlights: [
      "Defined personas and mapped key user journeys.",
      "Prototyped core flows in SwiftUI with mocked data.",
      "Explored AI-assisted suggestions based on play history.",
      "Created Figma designs for user testing and feedback.",
      "OPENAI API integration for image recognition and recipe generation.",
      "Implemented a clean and intuitive UI for easy navigation.",
    ],
    links: {
      github: "https://github.com/Kourix84/not-a-cook-book.git",
      live: "",
      Figma:
        "https://www.figma.com/design/Vlumgo2fqvjscuRtyxD0ce/Not-a-cookbook?node-id=0-1&t=2LpVtQlvFjtu6S3h-1",
    },
  },
];

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

const AnimatedLinkLabel = ({ label }) => (
  <>
    <span className="project-card__link-original" aria-hidden="true">
      {label}
    </span>
    <span className="project-card__link-letters" aria-hidden="true">
      {Array.from(label).map((letter, index) => (
        <span
          className="project-card__link-letter"
          key={`${letter}-${index}`}
          style={{ "--letter-index": index }}
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </span>
  </>
);

function ProjectsSection() {
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
                  <img src={project.heroImage} alt="" aria-hidden="true" />
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
                        aria-label={link.label}
                      >
                        <AnimatedLinkLabel label={link.label} />
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

ProjectsSection.projectCount = projects.length;

export default ProjectsSection;
