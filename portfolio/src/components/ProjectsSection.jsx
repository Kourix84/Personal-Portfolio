import React, { useEffect, useState } from "react";
import Section, { sectionTitleClass } from "./Section.jsx";
import icon from "../data/icons.js";
import fpsaImage from "../assets/fpsa.webp";
import asmlImage from "../assets/asml.webp";
import notACookBookImage from "../assets/not-a-cook-book.webp";

const tech = (label, iconName) => ({ label, icon: icon(iconName) });

const projects = [
  {
    title: "FPSA Website",
    type: "Website & dashboard",
    year: "2026",
    period: "Oct 2026 – now",
    image: fpsaImage,
    alt: 'FPSA website homepage: "We help study associations run, grow and hand over well."',
    line: "Dutch/English site where Fontys students find their study association and sign up for events — plus a dashboard where the FPSA board runs events, board grants, news and contact form.",
    tech: [
      tech("Next.js", "next"),
      tech("TypeScript", "typescript"),
      tech("Tailwind CSS", "tailwind"),
      tech("PostgreSQL", "postgresql"),
      tech("Docker", "docker"),
      tech("Azure", "azure"),
      tech("Microsoft Entra ID", "entra-id"),
      tech("Microsoft 365", "microsoft-365"),
      tech("OAuth", "oauth"),
      tech("Cloudflare", "cloudflare"),
      tech("CI/CD", "cicd"),
    ],
    links: [{ label: "Website ↗", href: "https://fpsa.nl/en" }],
  },
  {
    title: "ASML Package Index",
    type: "Internship",
    year: "2026",
    period: "Feb – Jul 2026",
    image: asmlImage,
    alt: "ASML lithography system",
    line: "One place for ASML engineers to upload, find and approve Python packages.",
    tech: [
      tech("Python", "python"),
      tech("Flask", "flask"),
      tech("Jinja", "jinja"),
      tech("SQLite", "sqlite"),
      tech("OAuth", "oauth"),
      tech("Figma", "figma"),
    ],
    links: [],
  },
  {
    title: "Not a Cook Book",
    type: "iOS app",
    year: "2025",
    period: "Sep – Oct 2025",
    image: notACookBookImage,
    alt: "Not a Cook Book app screens",
    line: "Snap your ingredients — AI turns them into a recipe you can cook tonight.",
    tech: [
      tech("Swift", "swift"),
      tech("SwiftUI", "swiftui"),
      tech("OpenAI", "openai"),
      tech("Figma", "figma"),
    ],
    links: [
      {
        label: "Figma ↗",
        href: "https://www.figma.com/design/Vlumgo2fqvjscuRtyxD0ce/Not-a-cookbook?node-id=0-1",
      },
      {
        label: "GitHub ↗",
        href: "https://github.com/Kourix84/not-a-cook-book",
      },
    ],
  },
];

// A row of tech icons. Hovering one slides it open to the right to show its
// name and pushes the icons after it to the right.
// An icon stays open until the cursor moves to another icon or leaves the row,
// so an icon that wraps to the next line while opening doesn't flicker shut.
function TechRow({ tech }) {
  const [active, setActive] = useState(null);

  return (
    <div className="flex flex-wrap items-center gap-2.5" onMouseLeave={() => setActive(null)}>
      {tech.map((t) => (
        <TechChip key={t.label} {...t} open={active === t.label} onOpen={() => setActive(t.label)} />
      ))}
    </div>
  );
}

const EASE = "ease-[cubic-bezier(.22,1,.36,1)]";

function TechChip({ label, icon, open, onOpen }) {
  return (
    <span
      onMouseEnter={onOpen}
      data-open={open ? "" : undefined}
      className={`group/chip flex h-10 shrink-0 items-center rounded-xl border border-accent/35 bg-accent/[.12] px-[8px] transition-[background-color,border-color] duration-300 ${EASE} data-open:border-accent/70 data-open:bg-accent/25`}
    >
      <img src={icon} alt="" width="22" height="22" loading="lazy" className="size-[22px] shrink-0" />
      {/* 0fr → 1fr animates the exact width of the name, opening and closing. */}
      <span className={`grid grid-cols-[0fr] transition-[grid-template-columns] duration-[400ms] ${EASE} group-data-open/chip:grid-cols-[1fr]`}>
        <span className="min-w-0 overflow-hidden">
          <span
            className={`block -translate-x-1.5 pr-1 pl-2 text-[13px] font-bold whitespace-nowrap text-white opacity-0 transition-[opacity,translate] duration-200 ${EASE} group-data-open/chip:translate-x-0 group-data-open/chip:opacity-100 group-data-open/chip:delay-100 group-data-open/chip:duration-300`}
          >
            {label}
          </span>
        </span>
      </span>
    </span>
  );
}

export default function ProjectsSection() {
  const [selected, setSelected] = useState(0);
  const current = projects[selected];

  // Warm the other project images once the page is idle, so switching is instant.
  useEffect(() => {
    const warm = () => projects.forEach((p) => (new Image().src = p.image));
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(warm);
      return () => window.cancelIdleCallback(id);
    }
    const id = setTimeout(warm, 2000);
    return () => clearTimeout(id);
  }, []);

  return (
    <Section id="projects" eyebrow="01 — Projects">
      <h2 id="projects-title" className={`${sectionTitleClass} mb-9`}>
        Selected work
      </h2>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-start gap-[clamp(24px,4vw,48px)]">
        <ol className="m-0 list-none border-t border-white/20 p-0">
          {projects.map((project, i) => {
            const on = i === selected;
            const select = () => setSelected(i);
            return (
              <li key={project.title} className="border-b border-white/20">
                <button
                  type="button"
                  aria-pressed={on}
                  onMouseEnter={select}
                  onFocus={select}
                  onClick={select}
                  className={`grid w-full cursor-pointer grid-cols-[52px_minmax(0,1fr)_auto] items-center gap-4 border-0 py-[26px] pr-2 text-left font-[inherit] text-white transition-[background,padding] duration-200 ${
                    on
                      ? "bg-[linear-gradient(90deg,rgba(247,165,59,.14),rgba(247,165,59,0))] pl-[18px]"
                      : "bg-transparent pl-2"
                  }`}
                >
                  <span
                    className={`text-[15px] font-bold tracking-[.14em] ${on ? "text-accent" : "text-white/60"}`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="grid min-w-0 gap-1.5">
                    <span
                      className={`text-[clamp(24px,2.6vw,34px)] leading-[1.05] font-semibold transition-opacity duration-200 ${
                        on ? "opacity-100" : "opacity-[.62]"
                      }`}
                    >
                      {project.title}
                    </span>
                    <span className="text-[15px] text-white/75">
                      {project.type} · {project.year}
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className={`text-2xl text-accent transition-opacity duration-200 ${on ? "opacity-100" : "opacity-0"}`}
                  >
                    →
                  </span>
                </button>
              </li>
            );
          })}
        </ol>

        <article
          aria-live="polite"
          className="sticky top-[84px] flex flex-col overflow-hidden rounded-[20px] border border-white/[.24] bg-[rgba(124,124,124,.2)] shadow-[0_20px_50px_rgba(0,0,0,.45)] backdrop-blur-[6px]"
        >
          <div className="relative aspect-video border-b border-white/[.14] bg-black/45">
            <img
              src={current.image}
              alt={current.alt}
              width="1200"
              height="675"
              loading="lazy"
              decoding="async"
              className="block h-full w-full object-contain object-center"
            />
            <span className="absolute bottom-4 left-4 rounded-full bg-black/55 px-3 py-[7px] text-[13px] font-bold backdrop-blur-[6px]">
              {current.period}
            </span>
          </div>
          <div className="flex flex-col gap-[18px] p-[clamp(20px,2.4vw,28px)]">
            <p className="m-0 text-[clamp(18px,1.6vw,21px)] leading-normal text-pretty">
              {current.line}
            </p>
            <TechRow key={current.title} tech={current.tech} />
            {current.links.length > 0 && (
              <div className="flex flex-wrap gap-2.5 border-t border-white/[.16] pt-[18px]">
                {current.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex min-h-[42px] items-center rounded-full border px-4 py-[9px] text-sm font-bold whitespace-nowrap hover:border-accent/[.72] hover:bg-accent/[.16] hover:text-accent ${
                      link.primary
                        ? "border-accent bg-accent text-ink"
                        : "border-white/20 bg-black/35 text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </article>
      </div>
    </Section>
  );
}
