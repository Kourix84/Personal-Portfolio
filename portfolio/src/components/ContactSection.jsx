import React from "react";
import cvIcon from "../assets/icons/cv.svg?raw";
import emailIcon from "../assets/icons/email.svg?raw";
import externalLinkIcon from "../assets/icons/external-link.svg?raw";
import githubIcon from "../assets/icons/github.svg?raw";
import instagramIcon from "../assets/icons/instagram.svg?raw";
import linkedinIcon from "../assets/icons/linkedin.svg?raw";

const personalEmail = "hello@kourix.dev";
const studentEmail = "k.esmaeiltajer@student.fontys.nl";

const normalizeIcon = (svg) =>
  svg
    .replace(/<!DOCTYPE[^>]*>/i, "")
    .replace(/<!--[\s\S]*?-->/g, "")
    .replaceAll("#ffffff", "currentColor")
    .replaceAll("#FFFFFF", "currentColor")
    .replaceAll("#fff", "currentColor")
    .replaceAll("#FFF", "currentColor")
    .replace(/\swidth="[^"]*"/, "")
    .replace(/\sheight="[^"]*"/, "");

const icons = {
  cv: normalizeIcon(cvIcon),
  email: normalizeIcon(emailIcon),
  "external-link": normalizeIcon(externalLinkIcon),
  github: normalizeIcon(githubIcon),
  instagram: normalizeIcon(instagramIcon),
  linkedin: normalizeIcon(linkedinIcon),
};

const SvgIcon = ({ name, className }) => (
  <span
    className={className}
    aria-hidden="true"
    dangerouslySetInnerHTML={{ __html: icons[name] }}
  />
);

const contactLinks = [
  {
    title: "Personal Email",
    description: personalEmail,
    href: `mailto:${personalEmail}`,
    icon: "email",
  },
  {
    title: "Student Email",
    description: studentEmail,
    href: `mailto:${studentEmail}`,
    icon: "email",
  },
  {
    title: "LinkedIn",
    description: "Let's connect on LinkedIn.",
    href: "https://www.linkedin.com/in/kourosh-esmaeil-tajer/",
    icon: "linkedin",
    external: true,
  },
  {
    title: "GitHub",
    description: "Check out my code and projects.",
    href: "https://github.com/Kourix84",
    icon: "github",
    external: true,
  },
  {
    title: "Instagram",
    description: "Follow my creative updates.",
    href: "https://www.instagram.com/kourosh__e.t/",
    icon: "instagram",
    external: true,
  },
  {
    title: "CV",
    description: "Preview my CV PDF.",
    href: "/CV-Kourosh.pdf",
    icon: "cv",
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
              <a
                href={`mailto:${personalEmail}`}
                aria-label={`Email ${personalEmail}`}
              >
                <span>Personal</span>
                <strong>{personalEmail}</strong>
              </a>
              <a
                href={`mailto:${studentEmail}`}
                aria-label={`Email ${studentEmail}`}
              >
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
                aria-label={`${link.title}: ${link.description}`}
              >
                <span className="contact-card__corner" aria-hidden="true" />
                <SvgIcon name={link.icon} className="contact-card__icon" />
                <span className="contact-card__content">
                  <span className="contact-card__title">{link.title}</span>
                  <span className="contact-card__description">
                    {link.description}
                  </span>
                </span>
                <span className="contact-card__footer">
                  <SvgIcon
                    name="external-link"
                    className="contact-card__arrow"
                  />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
