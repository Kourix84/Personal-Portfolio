import { useEffect, useState } from "react";

// Tracks which section is in view and whether we've scrolled past half the hero.
// Work is batched to one measurement per animation frame.
export default function useScrollSpy(sectionIds) {
  const [state, setState] = useState({ active: "home", scrolled: false });

  useEffect(() => {
    let frame = 0;

    const measure = () => {
      frame = 0;
      const y = window.scrollY;
      const scrolled = y > window.innerHeight * 0.5;
      let active = "home";
      if (y > 160) {
        for (const id of sectionIds) {
          const el = document.getElementById(id);
          if (el && el.getBoundingClientRect().top < window.innerHeight * 0.4) active = id;
        }
      }
      setState((prev) =>
        prev.active === active && prev.scrolled === scrolled ? prev : { active, scrolled }
      );
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    measure();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [sectionIds]);

  return state;
}
