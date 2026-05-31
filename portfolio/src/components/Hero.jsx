import React from "react";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__shade" />

      <h1 className="hero__title">
        <span className="hero__title--accent">Hey, I'm Kourosh</span>
      </h1>

      <ul className="hero__list">
        <li>Student at Fontys University of Applied Sciences</li>
        <li>Full Stack Developer (Python, Flask, Fast API and Databases)</li>
        <li>Front-End Developer (React, Next.js and Vite)</li>
        <li>Mobile App Developer (Swift, Swift UI)</li>
        <li>PWA &amp; Responsive Web Apps</li>
        <li>UI/UX Designer</li>
      </ul>
    </section>
  );
}
