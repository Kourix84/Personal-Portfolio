import React from "react";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="flex min-h-svh flex-col justify-between gap-12 px-[clamp(20px,5%,76px)] pt-[120px] pb-[clamp(32px,5vh,56px)]"
    >
      <p className="m-0 flex items-center gap-3.5 text-[clamp(15px,1.3vw,18px)] text-white/[.88] [text-shadow:0_10px_28px_rgba(0,0,0,.5)]">
        <span className="h-px w-11 bg-accent" />
        Kourosh Esmaeil Tajer — Full-stack developer &amp; UI/UX designer
      </p>

      <h1
        id="hero-title"
        className="m-0 flex flex-col text-[clamp(64px,11vw,168px)] leading-[.88] font-medium tracking-[-.01em] [text-shadow:0_24px_60px_rgba(0,0,0,.4)]"
      >
        <span>Design it.</span>
        <span className="text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,.92)] [text-shadow:none]">
          Build it.
        </span>
        <em className="text-accent">Ship it.</em>
      </h1>

      <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-6">
        <p className="m-0 max-w-[440px] text-[clamp(17px,1.6vw,21px)] leading-[1.45] text-pretty text-white/[.92] [text-shadow:0_14px_34px_rgba(0,0,0,.5)]">
          Fontys ICT student turning ideas into products people enjoy using — from first sketch to
          working code.
        </p>
        <div className="flex flex-wrap items-center gap-[22px]">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-white/[.24] bg-black/30 px-4 py-2.5 text-sm font-bold backdrop-blur-[6px]">
            <span className="size-2 rounded-full bg-accent shadow-[0_0_14px_rgba(247,165,59,.8)]" />
            Now: intern at ASML
          </span>
          <a
            href="#projects"
            aria-label="Scroll to projects"
            className="inline-flex items-center gap-2.5 text-lg text-white/90 hover:text-accent"
          >
            Scroll
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="size-5 fill-none stroke-current stroke-[1.8] [stroke-linecap:round] [stroke-linejoin:round]"
            >
              <path d="M12 4v15" />
              <path d="m6 13 6 6 6-6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
