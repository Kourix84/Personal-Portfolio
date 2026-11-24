import React, { useEffect, useRef } from "react";

// Trailing dot + glow ring cursor for mouse users. Rendered hidden; only
// activates on devices with a fine pointer. The animation loop runs only while
// the cursor is still catching up, so an idle mouse costs nothing.
export default function Cursor() {
  const rootRef = useRef(null);
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (!matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = rootRef.current;
    const dot = dotRef.current;
    const ring = ringRef.current;

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ringPos = { ...target };
    const dotPos = { ...target };
    let last = { ...target, t: performance.now() };
    let rafId = 0;

    const lerp = (a, b, n) => a + (b - a) * n;
    const smoothingDot = reduce ? 0.4 : 0.25;
    const smoothingRing = reduce ? 0.2 : 0.12;

    const animate = () => {
      const now = performance.now();
      const dt = Math.max(16, now - last.t);

      ringPos.x = lerp(ringPos.x, target.x, smoothingRing);
      ringPos.y = lerp(ringPos.y, target.y, smoothingRing);
      dotPos.x = lerp(dotPos.x, target.x, smoothingDot);
      dotPos.y = lerp(dotPos.y, target.y, smoothingDot);

      const vx = (ringPos.x - last.x) / dt;
      const vy = (ringPos.y - last.y) / dt;
      last = { x: ringPos.x, y: ringPos.y, t: now };

      const stretch = Math.min(1 + Math.hypot(vx, vy) * 0.25, 1.35);
      const angle = Math.atan2(vy, vx) * (180 / Math.PI);

      ring.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0) rotate(${angle}deg) scale(${stretch}, ${1 / stretch})`;
      dot.style.transform = `translate3d(${dotPos.x}px, ${dotPos.y}px, 0)`;

      const settled = Math.abs(target.x - ringPos.x) < 0.1 && Math.abs(target.y - ringPos.y) < 0.1;
      rafId = settled ? 0 : requestAnimationFrame(animate);
    };

    const wake = () => {
      if (!rafId) rafId = requestAnimationFrame(animate);
    };

    const isHoverable = (el) => Boolean(el?.closest?.("a, button, [data-cursor], [role='button']"));

    const onMove = (e) => {
      target.x = e.clientX;
      target.y = e.clientY;
      root.classList.add("cursor--active");
      wake();
    };
    const onLeave = () => root.classList.remove("cursor--active");
    const onDown = () => {
      root.classList.add("cursor--down");
      const r = document.createElement("span");
      r.className = "cursor__ripple";
      r.style.left = `${target.x}px`;
      r.style.top = `${target.y}px`;
      root.appendChild(r);
      r.addEventListener("animationend", () => r.remove(), { once: true });
    };
    const onUp = () => root.classList.remove("cursor--down");
    const onOver = (e) => isHoverable(e.target) && root.classList.add("cursor--hover");
    const onOut = (e) => isHoverable(e.target) && root.classList.remove("cursor--hover");

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("pointerover", onOver);
    window.addEventListener("pointerout", onOut);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("pointerover", onOver);
      window.removeEventListener("pointerout", onOut);
    };
  }, []);

  return (
    <div className="cursor" ref={rootRef} aria-hidden="true">
      <div className="cursor__ring" ref={ringRef} />
      <div className="cursor__dot" ref={dotRef} />
    </div>
  );
}
