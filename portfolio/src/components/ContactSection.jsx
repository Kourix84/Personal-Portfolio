import React from "react";
import Section from "./Section.jsx";
import icon from "../data/icons.js";
import { CV_URL, GITHUB_URL, INSTAGRAM_URL, LINKEDIN_URL, PERSONAL_EMAIL, STUDENT_EMAIL } from "../data/links.js";

const contacts = [
  { title: "LinkedIn", description: "Let's connect.", href: LINKEDIN_URL, icon: "linkedin" },
  { title: "GitHub", description: "Code and projects.", href: GITHUB_URL, icon: "github" },
  { title: "CV", description: "Preview my CV (PDF).", href: CV_URL, icon: "cv" },
  { title: "Instagram", description: "Life outside code.", href: INSTAGRAM_URL, icon: "instagram" },
];

const labelClass = "text-xs font-extrabold tracking-[.14em] text-white/70 uppercase";

export default function ContactSection() {
  return (
    <Section id="contact" eyebrow="04 — Contact" className="pb-[clamp(72px,16vh,120px)]">
      <h2
        id="contact-title"
        className="mt-0 mb-7 max-w-[16ch] text-[clamp(34px,4.4vw,60px)] leading-none font-semibold"
      >
        Let's build something good together.
      </h2>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-6 rounded-[22px] border border-white/[.18] bg-[rgba(18,22,21,.35)] p-6 backdrop-blur-[8px] max-md:p-4">
        <div className="flex flex-col gap-[22px] p-2">
          <span className="inline-flex w-fit items-center gap-2.5 rounded-full border border-white/[.24] bg-black/[.28] px-3.5 py-2.5 text-[13px] font-extrabold tracking-[.14em] uppercase">
            <span className="size-[9px] rounded-full bg-accent shadow-[0_0_18px_rgba(247,165,59,.72)]" />
            Available for
          </span>
          <h3 className="m-0 text-[clamp(28px,3vw,40px)] leading-[1.08] font-black uppercase">
            Internships &amp; junior roles
          </h3>
          <p className="m-0 border-t border-white/[.22] pt-[22px] text-lg leading-[1.7] text-white/[.88]">
            Full-stack, front-end or UX engineering. Have a role or collaboration that fits? Reach out and let's
            talk.
          </p>
          <div className="grid gap-2.5">
            <a
              href={`mailto:${PERSONAL_EMAIL}`}
              className="grid gap-1.5 rounded-[14px] border border-accent/40 bg-accent/[.12] px-[18px] py-4 hover:border-accent/80 hover:bg-accent/20"
            >
              <span className={labelClass}>Personal email</span>
              <strong className="text-[clamp(20px,2vw,26px)] font-bold">{PERSONAL_EMAIL}</strong>
            </a>
            <a
              href={`mailto:${STUDENT_EMAIL}`}
              className="grid gap-1.5 rounded-[14px] border border-white/[.22] bg-white/5 px-[18px] py-3.5 hover:border-accent/60 hover:bg-accent/[.12]"
            >
              <span className={labelClass}>Student email</span>
              <strong className="text-[clamp(16px,1.5vw,19px)] font-bold wrap-anywhere">{STUDENT_EMAIL}</strong>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,180px),1fr))] gap-3.5 max-md:grid-cols-2 max-md:gap-2.5">
          {contacts.map((c) => (
            <a
              key={c.title}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              aria-label={c.title}
              className="relative flex min-h-[190px] flex-col rounded-[18px] border border-white/[.24] bg-white/[.055] p-[22px] max-md:min-h-[140px] max-md:p-4 text-white transition-[transform,border-color] duration-[180ms] hover:-translate-y-1 hover:border-accent/70 hover:bg-white/[.09]"
            >
              <img src={icon(c.icon)} alt="" width="40" height="40" loading="lazy" className="mb-auto size-10 max-md:size-8" />
              <span className="mt-7 text-[17px] font-black tracking-[.08em] uppercase max-md:mt-5 max-md:text-[14px]">{c.title}</span>
              <span className="mt-2 text-[15px] leading-normal text-white/80 max-md:mt-1 max-md:text-[13px]">{c.description}</span>
              <img src={icon("external-link")} alt="" width="20" height="20" loading="lazy" className="absolute top-5 right-5 size-5 opacity-80 max-md:top-4 max-md:right-4 max-md:size-4" />
            </a>
          ))}
        </div>
      </div>

      <p className="mt-10 mb-0 text-sm text-white/75">© 2026 Kourosh Esmaeil Tajer · Eindhoven, NL</p>
    </Section>
  );
}
