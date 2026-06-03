import React from "react";
import cvIcon from "../assets/icons/cv.svg?raw";
import emailIcon from "../assets/icons/email.svg?raw";
import githubIcon from "../assets/icons/github.svg?raw";
import instagramIcon from "../assets/icons/instagram.svg?raw";
import linkedinIcon from "../assets/icons/linkedin.svg?raw";

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
  github: normalizeIcon(githubIcon),
  instagram: normalizeIcon(instagramIcon),
  linkedin: normalizeIcon(linkedinIcon),
};

const SvgIcon = ({ name }) => (
  <span
    className="sidebar__icon"
    aria-hidden="true"
    dangerouslySetInnerHTML={{ __html: icons[name] }}
  />
);

const sidebarLinks = [
  {
    label: "Email",
    href: "mailto:hello@kourix.dev",
    icon: "email",
  },
  {
    label: "Resume",
    href: "/CV-Kourosh.pdf",
    icon: "cv",
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/Kourix84",
    icon: "github",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kourosh-esmaeil-tajer/",
    icon: "linkedin",
    external: true,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/kourosh__e.t/",
    icon: "instagram",
    external: true,
  },
];

export default function Sidebar() {
  return (
    <aside className="sidebar" aria-label="Sidebar">
      <div className="sidebar__top">
        <span className="sidebar__k" aria-hidden="true">
          K
        </span>
      </div>

      <div className="sidebar__bottom">
        <div className="sidebar__icons">
          {sidebarLinks.map((link) => (
            <a
              className="sidebar__btn"
              href={link.href}
              key={link.label}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
              aria-label={link.label}
            >
              <SvgIcon name={link.icon} />
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
