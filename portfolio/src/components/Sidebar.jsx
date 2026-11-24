import React from "react";
import icon from "../data/icons.js";
import { CV_URL, GITHUB_URL, INSTAGRAM_URL, LINKEDIN_URL, PERSONAL_EMAIL } from "../data/links.js";

const links = [
  { label: "Email", href: `mailto:${PERSONAL_EMAIL}`, icon: "email", external: false },
  { label: "Resume", href: CV_URL, icon: "cv", external: true },
  { label: "GitHub", href: GITHUB_URL, icon: "github", external: true },
  { label: "LinkedIn", href: LINKEDIN_URL, icon: "linkedin", external: true },
  { label: "Instagram", href: INSTAGRAM_URL, icon: "instagram", external: true },
];

export default function Sidebar() {
  return (
    <aside
      aria-label="Quick links"
      className="fixed top-0 bottom-0 left-0 z-50 flex w-[70px] flex-col items-center justify-between border-r border-white/[.08] bg-[rgba(124,124,124,.2)] pt-4 pb-7 backdrop-blur-[5px] max-md:top-auto max-md:h-16 max-md:w-full max-md:flex-row max-md:border-t max-md:border-r-0 max-md:border-t-white/[.18] max-md:px-3.5 max-md:py-2"
    >
      <a
        href="#top"
        aria-label="Back to top"
        className="text-[38px] leading-none text-white drop-shadow-[0_1px_1px_rgba(0,0,0,.35)] hover:text-accent"
      >
        K
      </a>
      <div className="flex flex-col gap-3.5 max-md:flex-row">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            aria-label={link.label}
            title={link.label}
            {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
            className="grid size-8 place-items-center opacity-[.92] transition hover:-translate-y-px hover:opacity-100"
          >
            <img src={icon(link.icon)} alt="" className="size-[22px]" />
          </a>
        ))}
      </div>
    </aside>
  );
}
