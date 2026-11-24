import React from "react";

const NAV = [
  { id: "home", label: "Home", href: "#top" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "stacks", label: "Stacks", href: "#stacks" },
  { id: "about", label: "About", href: "#about" },
  { id: "contact", label: "Contact", href: "#contact" },
];

// eslint-disable-next-line react-refresh/only-export-components
export const NAV_SECTION_IDS = NAV.slice(1).map((item) => item.id);

export default function Navbar({ active }) {
  return (
    <header className="pointer-events-none fixed top-0 right-0 left-[70px] z-40 flex items-center justify-between gap-3 px-[18px] py-3 max-md:left-0 max-md:p-2">
      <nav
        aria-label="Primary"
        className="pointer-events-auto flex max-w-full gap-1 overflow-x-auto rounded-full border border-white/[.18] bg-[rgba(18,22,21,.28)] p-1 shadow-[0_14px_34px_rgba(0,0,0,.22)] backdrop-blur-[10px]"
      >
        {NAV.map((item) => {
          const on = active === item.id;
          return (
            <a
              key={item.id}
              href={item.href}
              aria-current={on ? "location" : undefined}
              className={`inline-flex min-h-[38px] items-center rounded-full border px-4 py-2 text-[17px] leading-none font-bold whitespace-nowrap transition-all duration-[180ms] hover:border-accent/50 hover:text-white ${
                on
                  ? "border-accent/50 bg-[linear-gradient(135deg,rgba(247,165,59,.24),rgba(255,255,255,.08))] text-white shadow-[0_10px_24px_rgba(0,0,0,.22),0_0_22px_rgba(247,165,59,.16)]"
                  : "border-transparent text-white/[.78]"
              }`}
            >
              {item.label}
            </a>
          );
        })}
      </nav>
      <a
        href="#contact"
        className="pointer-events-auto inline-flex min-h-11 items-center rounded-full bg-accent px-[18px] text-base font-bold whitespace-nowrap text-ink shadow-[0_14px_34px_rgba(0,0,0,.22)] hover:bg-white hover:text-ink max-md:hidden"
      >
        Hire me
      </a>
    </header>
  );
}
