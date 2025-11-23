import React from "react";

export default function Sidebar() {
  return (
    <aside className="sidebar" aria-label="Sidebar">
      {/* TOP: monogram */}
      <div className="sidebar__top">
        <span className="sidebar__k" aria-hidden="true">K</span>
      </div>

      {/* BOTTOM: divider + icons */}
      <div className="sidebar__bottom">
  <div className="sidebar__icons">
    <a className="sidebar__btn" href="mailto:hello@kourix.dev" aria-label="Email">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="1.6" />
        <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.6" fill="none" />
      </svg>
    </a>

   <a
  className="sidebar__btn"
  href="/CV-Kourosh.pdf"
  target="_blank"
  rel="noreferrer"
  aria-label="Resume"
>
  <svg
    width="22"
    height="22"
    viewBox="0 0 256 256"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M 210.78 39.25 l -130.25 -23 A 16 16 0 0 0 62 29.23 l -29.75 169 a 16 16 0 0 0 13 18.53 l 130.25 23 h 0 a 16 16 0 0 0 18.54 -13 l 29.75 -169 A 16 16 0 0 0 210.78 39.25 Z M 178.26 224 h 0 L 48 201 L 77.75 32 L 208 55 Z M 89.34 58.42 a 8 8 0 0 1 9.27 -6.48 l 83 14.65 a 8 8 0 0 1 -1.39 15.88 a 8.36 8.36 0 0 1 -1.4 -0.12 l -83 -14.66 A 8 8 0 0 1 89.34 58.42 Z M 83.8 89.94 a 8 8 0 0 1 9.27 -6.49 l 83 14.66 A 8 8 0 0 1 174.67 114 a 7.55 7.55 0 0 1 -1.41 -0.13 l -83 -14.65 A 8 8 0 0 1 83.8 89.94 Z m -5.55 31.51 A 8 8 0 0 1 87.52 115 L 129 122.29 a 8 8 0 0 1 -1.38 15.88 a 8.27 8.27 0 0 1 -1.4 -0.12 l -41.5 -7.33 A 8 8 0 0 1 78.25 121.45 Z" />
  </svg>
</a>


    <a
  className="sidebar__btn"
  href="https://github.com/Kourix84"
  target="_blank"
  rel="noreferrer"
  aria-label="GitHub"
>
  <svg
    width="22"
    height="22"
    viewBox="0 0 256 256"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M 208.31 75.68 A 59.78 59.78 0 0 0 202.93 28 A 8 8 0 0 0 196 24 a 59.75 59.75 0 0 0 -48 24 H 124 A 59.75 59.75 0 0 0 76 24 a 8 8 0 0 0 -6.93 4 a 59.78 59.78 0 0 0 -5.38 47.68 A 58.14 58.14 0 0 0 56 104 v 8 a 56.06 56.06 0 0 0 48.44 55.47 A 39.8 39.8 0 0 0 96 192 v 8 H 72 a 24 24 0 0 1 -24 -24 A 40 40 0 0 0 8 136 a 8 8 0 0 0 0 16 a 24 24 0 0 1 24 24 a 40 40 0 0 0 40 40 H 96 v 16 a 8 8 0 0 0 16 0 V 192 a 24 24 0 0 1 48 0 v 40 a 8 8 0 0 0 16 0 V 192 a 39.8 39.8 0 0 0 -8.44 -24.53 A 56.06 56.06 0 0 0 216 112 v -8 A 58.14 58.14 0 0 0 208.31 75.68 Z M 200 112 a 40 40 0 0 1 -40 40 H 112 a 40 40 0 0 1 -40 -40 v -8 a 41.74 41.74 0 0 1 6.9 -22.48 A 8 8 0 0 0 80 73.83 a 43.81 43.81 0 0 1 0.79 -33.58 a 43.88 43.88 0 0 1 32.32 20.06 A 8 8 0 0 0 119.82 64 h 32.35 a 8 8 0 0 0 6.74 -3.69 a 43.87 43.87 0 0 1 32.32 -20.06 A 43.81 43.81 0 0 1 192 73.83 a 8.09 8.09 0 0 0 1 7.65 A 41.72 41.72 0 0 1 200 104 Z" />
  </svg>
</a>


    {/* ✅ New LinkedIn Button */}
<a
  className="sidebar__btn"
  href="https://www.linkedin.com/in/kourosh-esmaeil-tajer/"
  target="_blank"
  rel="noreferrer"
  aria-label="LinkedIn"
>
  <svg
    width="22"
    height="22"
    viewBox="0 0 240 240"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M 216 24 H 40 A 16 16 0 0 0 24 40 V 216 a 16 16 0 0 0 16 16 H 216 a 16 16 0 0 0 16 -16 V 40 A 16 16 0 0 0 216 24 Z m 0 192 H 40 V 40 H 216 V 216 Z M 96 112 v 64 a 8 8 0 0 1 -16 0 V 112 a 8 8 0 0 1 16 0 Z m 88 28 v 36 a 8 8 0 0 1 -16 0 V 140 a 20 20 0 0 0 -40 0 v 36 a 8 8 0 0 1 -16 0 V 112 a 8 8 0 0 1 15.79 -1.78 A 36 36 0 0 1 184 140 Z M 100 84 A 12 12 0 1 1 88 72 A 12 12 0 0 1 100 84 Z" />
  </svg>
</a>

    <a
  className="sidebar__btn"
  href="https://www.instagram.com/kourosh__e.t/"
  target="_blank"
  rel="noreferrer"
  aria-label="Instagram"
>
  <svg
    width="22"
    height="22"
    viewBox="0 0 256 256"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M 128 80 a 48 48 0 1 0 48 48 A 48.05 48.05 0 0 0 128 80 Z m 0 80 a 32 32 0 1 1 32 -32 A 32 32 0 0 1 128 160 Z M 176 24 H 80 A 56.06 56.06 0 0 0 24 80 v 96 a 56.06 56.06 0 0 0 56 56 h 96 a 56.06 56.06 0 0 0 56 -56 V 80 A 56.06 56.06 0 0 0 176 24 Z m 40 152 a 40 40 0 0 1 -40 40 H 80 a 40 40 0 0 1 -40 -40 V 80 A 40 40 0 0 1 80 40 h 96 a 40 40 0 0 1 40 40 Z M 192 76 a 12 12 0 1 1 -12 -12 A 12 12 0 0 1 192 76 Z" />
  </svg>
</a>

  </div>
</div>
    </aside>
  );
}
