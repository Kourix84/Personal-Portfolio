import React from "react";
import Section, { Eyebrow, sectionTitleClass } from "./Section.jsx";
import portrait from "../assets/portrait.webp";

const EXPERIENCE = [
  { period: "S6 · Sep – Feb", title: "Minor · Virtual Production", line: "Real-time 3D, LED-wall shoots and in-camera effects for film and media." ,now: true},
  { period: "Feb – Jul 2026", title: "Intern · ASML", line: "Designed and built an internal Python package platform end to end." },
  { period: "2024 – now", title: "Board member · PROXY", line: "Marketing and events for the Fontys ICT community." },
  { period: "Semester 4", title: "Mobile app development", line: "Swift, SwiftUI and UI/UX practice — Not a Cook Book." },
  { period: "Semester 3", title: "Front-end development", line: "Connected interfaces to APIs and real user flows." },
  { period: "Semester 1–2", title: "Foundations & interactive media", line: "Visual design, usability and responsive web." },
];

export default function AboutSection() {
  return (
    <Section id="about" innerClassName="flex flex-col gap-[clamp(48px,7vw,80px)]">
      <div>
        <Eyebrow>03 — About</Eyebrow>
        <h2 id="about-title" className={`${sectionTitleClass} mb-9`}>
          A bit about me
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] items-center gap-[clamp(28px,5vw,64px)]">
          <div className="aspect-[4/5] max-h-[540px] overflow-hidden rounded-[20px] border border-white/[.24] shadow-[0_20px_50px_rgba(0,0,0,.45)]">
            <img
              src={portrait}
              alt="Portrait of Kourosh"
              width="1086"
              height="724"
              loading="lazy"
              decoding="async"
              className="block h-full w-full object-cover object-[64%_48%]" />
          </div>
          <div className="flex max-w-[600px] flex-col gap-[18px]">
            <p className="m-0 text-[clamp(24px,2.6vw,34px)] leading-tight text-pretty">
              I'm Kourosh — half designer, half developer, and happiest when an idea becomes something people can{" "}
              <em className="text-accent">actually use</em>.
            </p>
            <p className="m-0 text-lg leading-[1.7] text-white/[.88]">
              I study ICT at Fontys University of Applied Sciences, with a focus on full-stack, mobile and UI/UX. On
              the board of PROXY, I help organise events for the Fontys ICT community.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="mt-0 mb-5 text-[clamp(26px,2.6vw,34px)] font-semibold">Experience</h3>
        <ol className="m-0 list-none border-t border-white/20 p-0">
          {EXPERIENCE.map((item) => (
            <li
              key={item.title}
              className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] items-baseline gap-x-8 gap-y-1.5 border-b border-white/20 px-1 py-5"
            >
              <span
                className={`flex items-center gap-2.5 text-[15px] font-bold ${item.now ? "text-accent" : "text-white/75"}`}
              >
                <span className={`size-2 rounded-full ${item.now ? "bg-accent" : "bg-white/35"}`} />
                {item.period}
              </span>
              <span className="text-[21px] font-semibold">{item.title}</span>
              <span className="text-base leading-normal text-white/[.82]">{item.line}</span>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
