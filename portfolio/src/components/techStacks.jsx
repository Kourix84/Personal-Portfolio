import React from "react";

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

const TechIcon = ({ name }) => {
  const iconSvg = iconSvgByName[name];

  if (!iconSvg) return null;

  return (
    <span
      className="tech-stack-chip__icon"
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: iconSvg }}
    />
  );
};

const stackGroups = [
  {
    title: "Frontend",
    description:
      "Responsive, component-based interfaces focused on clarity, usability, and maintainable structure.",
    tools: [
      { label: "HTML", icon: "html" },
      { label: "CSS", icon: "css" },
      { label: "JavaScript", icon: "javascript" },
      { label: "TypeScript", icon: "typescript" },
      { label: "React", icon: "react" },
      { label: "Angular", icon: "angular" },
      { label: "Next.js", icon: "next" },
    ],
  },
  {
    title: "Backend",
    description:
      "Structured application logic, APIs, and server-side systems built for real functionality and growth.",
    tools: [
      { label: "Swift", icon: "swift" },
      { label: "Swift UI", icon: "swiftui" },
      { label: "Python", icon: "python" },
      { label: "FastAPI", icon: "fastapi" },
      { label: "Flask", icon: "flask" },
    ],
  },
  {
    title: "Databases",
    description:
      "Relational databases used to store, manage, and query application data across full-stack projects.",
    tools: [
      { label: "PostgreSQL", icon: "postgresql" },
      { label: "MSSQL", icon: "mssql" },
      { label: "SQLite", icon: "sqlite" },
    ],
  },
  {
    title: "Infrastructure & Deployment",
    description:
      "Deploying applications with practical infrastructure, containerization, and real delivery workflows.",
    tools: [
      { label: "Docker", icon: "docker" },
      // { label: "Raspberry Pi", icon: "raspberry" },
      { label: "Cloudflare", icon: "cloudflare" },
      { label: "Vercel", icon: "vercel" },
    ],
  },
  {
    title: "Workflow",
    description:
      "Improving delivery speed and reliability through version control, automation, and structured deployment workflows.",
    tools: [
      { label: "Git", icon: "git" },
      { label: "CI/CD", icon: "cicd" },
    ],
  },
  {
    title: "APIs & Integrations",
    description:
      "Integrating external services for authentication, payments, AI functionality, and backend services.",
    tools: [
      { label: "Auth0", icon: "auth0" },
      { label: "Stripe", icon: "stripe" },
      { label: "OpenAI", icon: "openai" },
    ],
  },
  {
    title: "UI/UX Design",
    description:
      "Creating intuitive, user-centered designs that enhance the overall user experience.",
    tools: [
      { label: "Figma", icon: "figma" },
      { label: "Adobe XD", icon: "adobe-xd" },
      { label: "Double Diamond", icon: "double-diamond" },
      { label: "Adobe", icon: "adobe" },
    ],
  },
];

export default function TechStacks() {
  return (
    <section id="stacks" className="section section--stacks">
      <div className="section__inner section__inner--wide">
        <p className="section__eyebrow">Tech stack</p>
        <h2 className="section__title">Technologies I work with</h2>
        <p className="section__subtitle">
          A focused stack across frontend, backend, cloud, and delivery. I care
          about choosing tools that fit the problem and support maintainable,
          real-world software.
        </p>

        <div className="tech-stack-grid">
          {stackGroups.map((group) => (
            <article className="tech-stack-card" key={group.title}>
              <h3 className="tech-stack-card__title">{group.title}</h3>
              <p className="tech-stack-card__description">
                {group.description}
              </p>

              <ul className="tech-stack-card__tools">
                {group.tools.map((tool) => (
                  <li className="tech-stack-chip" key={tool.label}>
                    <TechIcon name={tool.icon} />
                    <span>{tool.label}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
