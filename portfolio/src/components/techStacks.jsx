import React, { useState } from "react";
import Section, { sectionTitleClass } from "./Section.jsx";
import icon from "../data/icons.js";

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "fe", label: "Frontend" },
  { id: "be", label: "Backend" },
  { id: "data", label: "Data" },
  { id: "ops", label: "Cloud" },
  { id: "ux", label: "Design" },
];

const CATEGORY_LABEL = Object.fromEntries(CATEGORIES.map((c) => [c.id, c.label]));

const TOOLS = [
  ["React", "react", "fe"],
  ["Next.js", "next", "fe"],
  ["TypeScript", "typescript", "fe"],
  ["JavaScript", "javascript", "fe"],
  ["Angular", "angular", "fe"],
  ["Tailwind", "tailwind", "fe"],
  ["Jinja", "jinja", "fe"],
  ["Python", "python", "be"],
  ["Flask", "flask", "be"],
  ["FastAPI", "fastapi", "be"],
  ["Swift", "swift", "be"],
  ["SwiftUI", "swiftui", "be"],
  ["OAuth", "oauth", "be"],
  ["OpenAI", "openai", "be"],
  ["Stripe", "stripe", "be"],
  ["PostgreSQL", "postgresql", "data"],
  ["MSSQL", "mssql", "data"],
  ["SQLite", "sqlite", "data"],
  ["Azure", "azure", "ops"],
  ["Entra ID", "entra-id", "ops"],
  ["Microsoft 365", "microsoft-365", "ops"],
  ["Docker", "docker", "ops"],
  ["Cloudflare", "cloudflare", "ops"],
  ["Vercel", "vercel", "ops"],
  ["Git", "git", "ops"],
  ["CI/CD", "cicd", "ops"],
  ["Figma", "figma", "ux"],
  ["Adobe XD", "adobe-xd", "ux"],
  ["Double Diamond", "double-diamond", "ux"],
].map(([label, iconName, category]) => ({ label, icon: icon(iconName), category }));

export default function TechStacks() {
  const [filter, setFilter] = useState("all");

  return (
    <Section id="stacks" eyebrow="02 — Stack">
      <div className="mb-7 flex flex-wrap items-end justify-between gap-5">
        <h2 id="stacks-title" className={sectionTitleClass}>
          My toolkit
        </h2>
        <div
          role="group"
          aria-label="Filter tools"
          className="flex flex-wrap gap-1.5 rounded-full border border-white/20 bg-[rgba(18,22,21,.35)] p-[5px] backdrop-blur-[6px] max-md:grid max-md:w-full max-md:grid-cols-3 max-md:gap-1 max-md:rounded-[22px]"
        >
          {CATEGORIES.map((cat) => {
            const on = filter === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                aria-pressed={on}
                onClick={() => setFilter(cat.id)}
                className={`min-h-[38px] cursor-pointer rounded-full border px-3.5 py-2 max-md:px-2 font-[inherit] text-sm font-bold whitespace-nowrap hover:text-white ${
                  on ? "border-accent bg-accent text-ink hover:text-ink" : "border-transparent bg-transparent text-white/80"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      <ul className="m-0 grid list-none grid-cols-[repeat(auto-fill,minmax(118px,1fr))] gap-3 p-0 max-md:grid-cols-3 max-md:gap-2">
        {TOOLS.map((tool) => {
          const visible = filter === "all" || filter === tool.category;
          const highlighted = visible && filter !== "all";
          return (
            <li
              key={tool.label}
              title={tool.label}
              className={`relative flex aspect-square flex-col justify-between rounded-2xl border p-3.5 max-md:p-2.5 transition-[opacity,transform,border-color,background] duration-[260ms] ${
                visible ? "opacity-100" : "opacity-[.22]"
              } ${
                highlighted
                  ? "-translate-y-[3px] border-accent/60 bg-accent/[.14]"
                  : "border-white/[.18] bg-[rgba(124,124,124,.2)]"
              }`}
            >
              <span
                className={`text-[11px] font-extrabold tracking-[.14em] uppercase max-md:text-[9px] ${
                  highlighted ? "text-accent" : "text-white/60"
                }`}
              >
                {CATEGORY_LABEL[tool.category]}
              </span>
              <img src={tool.icon} alt="" width="34" height="34" loading="lazy" className="size-[34px] self-center max-md:size-7" />
              <span className="text-[15px] leading-[1.1] font-bold max-md:text-[13px]">{tool.label}</span>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
