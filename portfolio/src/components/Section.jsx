import React from "react";

// Shared wrapper for the numbered content sections (Projects, Stack, About, Contact).
export default function Section({ id, eyebrow, className = "", innerClassName = "", children }) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`scroll-mt-[62px] px-[clamp(16px,7vw,96px)] py-[clamp(48px,8vh,88px)] ${className}`}
    >
      <div className={`max-w-[1180px] ${innerClassName}`}>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        {children}
      </div>
    </section>
  );
}

export function Eyebrow({ children }) {
  return (
    <p className="mt-0 mb-2 text-[15px] font-bold tracking-[.16em] text-accent uppercase">
      {children}
    </p>
  );
}

export const sectionTitleClass = "m-0 text-[clamp(34px,3.6vw,48px)] font-semibold";
