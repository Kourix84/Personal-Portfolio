import React, { useEffect, useRef } from "react";

export default function Cursor() {
  const rootRef = useRef(null);
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  // target vs rendered position
  const pos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const target = useRef({ x: pos.current.x, y: pos.current.y });

  const last = useRef({ x: pos.current.x, y: pos.current.y, t: performance.now() });
  const vel = useRef({ x: 0, y: 0 });

  const isTouch = typeof window !== "undefined" && matchMedia("(hover: none)").matches;
  const reduce = typeof window !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (isTouch) return; // don’t render on touch devices

    const root = rootRef.current;
    const dot = dotRef.current;
    const ring = ringRef.current;

    let rafId;

    const lerp = (a, b, n) => a + (b - a) * n;

    const onMove = (e) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      // show if hidden
      root?.classList.add("cursor--active");
    };

    const onEnter = () => root?.classList.add("cursor--active");
    const onLeave = () => root?.classList.remove("cursor--active");

    const onDown = () => {
      root?.classList.add("cursor--down");
      spawnRipple();
    };
    const onUp = () => root?.classList.remove("cursor--down");

    const checkHoverables = (el) => {
      if (!el) return false;
      if (
        el.closest("a, button, .navbtn, [data-cursor], [role='button']") ||
        el.hasAttribute?.("data-cursor")
      ) return true;
      return false;
    };

    const onPointerOver = (e) => {
      if (checkHoverables(e.target)) root?.classList.add("cursor--hover");
    };
    const onPointerOut = (e) => {
      if (checkHoverables(e.target)) root?.classList.remove("cursor--hover");
    };

    const animate = () => {
      // Lerp toward target (slower ring for a trailing feel)
      const now = performance.now();
      const dt = Math.max(16, now - last.current.t);

      const smoothingDot = reduce ? 0.4 : 0.25;
      const smoothingRing = reduce ? 0.2 : 0.12;

      pos.current.x = lerp(pos.current.x, target.current.x, smoothingRing);
      pos.current.y = lerp(pos.current.y, target.current.y, smoothingRing);

      const dotX = lerp(parseFloat(dot.style.getPropertyValue("--x") || pos.current.x), target.current.x, smoothingDot);
      const dotY = lerp(parseFloat(dot.style.getPropertyValue("--y") || pos.current.y), target.current.y, smoothingDot);

      // velocity for stretch
      vel.current.x = (pos.current.x - last.current.x) / dt;
      vel.current.y = (pos.current.y - last.current.y) / dt;
      last.current = { x: pos.current.x, y: pos.current.y, t: now };

      const speed = Math.hypot(vel.current.x, vel.current.y);
      const stretch = Math.min(1 + speed * 0.25, 1.35); // cap stretch
      const angle = Math.atan2(vel.current.y, vel.current.x) * (180 / Math.PI);

      ring.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) rotate(${angle}deg) scale(${stretch}, ${1 / stretch})`;
      dot.style.setProperty("--x", dotX);
      dot.style.setProperty("--y", dotY);
      dot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0)`;

      rafId = requestAnimationFrame(animate);
    };

    const spawnRipple = () => {
      const r = document.createElement("span");
      r.className = "cursor__ripple";
      r.style.left = `${target.current.x}px`;
      r.style.top = `${target.current.y}px`;
      root?.appendChild(r);
      r.addEventListener("animationend", () => r.remove(), { once: true });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseenter", onEnter);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("pointerover", onPointerOver);
    window.addEventListener("pointerout", onPointerOut);

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("pointerover", onPointerOver);
      window.removeEventListener("pointerout", onPointerOut);
    };
  }, [isTouch, reduce]);

  if (isTouch) return null;
  return (
    <div className="cursor" ref={rootRef} aria-hidden="true">
      <div className="cursor__ring" ref={ringRef} />
      <div className="cursor__dot" ref={dotRef} />
    </div>
  );
}
