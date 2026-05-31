import React from "react";

const personalEmail = "hello@kourix.dev";
const studentEmail = "k.esmaeiltajer@student.fontys.nl";

const ExternalArrowIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M7 17L17 7" />
    <path d="M10 7h7v7" />
    <path d="M17 17H7V7" />
  </svg>
);

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 6h16v12H4z" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M6.8 10v8" />
    <path d="M11.2 18v-8" />
    <path d="M11.2 13.4c0-2 1.2-3.4 3.2-3.4s3.1 1.4 3.1 3.8V18" />
    <path d="M6.8 7.2v.1" />
    <path d="M4 4h16v16H4z" />
  </svg>
);

const GitHubIcon = () => (
  <svg className="contact-icon--filled" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.8a9.2 9.2 0 0 0-2.9 17.9c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 0 1.6 1.1 1.6 1.1.9 1.6 2.5 1.1 3.1.9.1-.7.4-1.1.7-1.4-2.3-.3-4.7-1.1-4.7-5a3.9 3.9 0 0 1 1-2.7 3.7 3.7 0 0 1 .1-2.7s.9-.3 2.8 1a9.5 9.5 0 0 1 5.1 0c1.9-1.3 2.8-1 2.8-1a3.7 3.7 0 0 1 .1 2.7 3.9 3.9 0 0 1 1 2.7c0 3.9-2.4 4.7-4.7 5 .4.3.7 1 .7 2v2.4c0 .3.2.6.7.5A9.2 9.2 0 0 0 12 2.8z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M8 4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4z" />
    <path d="M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0z" />
    <path d="M17.5 6.8v.1" />
  </svg>
);

const CvIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M7 3h7l4 4v14H7z" />
    <path d="M14 3v5h4" />
    <path d="M9.5 12h5" />
    <path d="M9.5 15h5" />
    <path d="M9.5 18h3" />
  </svg>
);

const contactLinks = [
  {
    title: "Personal Email",
    description: personalEmail,
    href: `mailto:${personalEmail}`,
    icon: <EmailIcon />,
  },
  {
    title: "Student Email",
    description: studentEmail,
    href: `mailto:${studentEmail}`,
    icon: <EmailIcon />,
  },
  {
    title: "LinkedIn",
    description: "Connect with me.",
    href: "https://www.linkedin.com/in/kourosh-esmaeil-tajer/",
    icon: <LinkedInIcon />,
    external: true,
  },
  {
    title: "GitHub",
    description: "Check my Github page.",
    href: "https://github.com/Kourix84",
    icon: <GitHubIcon />,
    external: true,
  },
  {
    title: "Instagram",
    description: "Follow me.",
    href: "https://www.instagram.com/kourosh__e.t/",
    icon: <InstagramIcon />,
    external: true,
  },
  {
    title: "CV",
    description: "Check my CV.",
    href: "/CV-Kourosh.pdf",
    icon: <CvIcon />,
    external: true,
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="section section--contact">
      <div className="section__inner section__inner--wide contact">
        <div className="contact__header">
          <p className="section__eyebrow">Contact</p>
          <h2 className="section__title contact__title">
            Let&apos;s build something good
          </h2>
          <p className="section__subtitle contact__subtitle">
            I&apos;m open to full-stack internships, junior developer
            opportunities, and software work where I can contribute across
            frontend, backend, databases, and deployment while continuing to
            grow.
          </p>
        </div>

        <div className="contact__board">
          <div className="contact__intro">
            <span className="contact__status">
              <span aria-hidden="true" />
              Available for
            </span>
            <h3>Internships / Junior Roles</h3>
            <p>
              Have an opportunity, collaboration, or role that fits? Reach out
              and let&apos;s talk.
            </p>

            <div className="contact__email-list" aria-label="Email addresses">
              <a href={`mailto:${personalEmail}`}>
                <span>Personal</span>
                <strong>{personalEmail}</strong>
              </a>
              <a href={`mailto:${studentEmail}`}>
                <span>Student</span>
                <strong>{studentEmail}</strong>
              </a>
            </div>
          </div>

          <div className="contact__cards" aria-label="Contact links">
            {contactLinks.map((link) => (
              <a
                className="contact-card"
                href={link.href}
                key={link.title}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
              >
                <span className="contact-card__corner" aria-hidden="true" />
                <span className="contact-card__icon">{link.icon}</span>
                <span className="contact-card__content">
                  <span className="contact-card__title">{link.title}</span>
                  <span className="contact-card__description">
                    {link.description}
                  </span>
                </span>
                <span className="contact-card__footer">
                  <ExternalArrowIcon />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
