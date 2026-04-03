import React from "react";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__shade" />

      <h1 className="hero__title">
        <span className="hero__title--accent">Hey, I'm Kourosh</span>
      </h1>

      <ul className="hero__list">
        <li>
          Student at Fontys University of Applied Sciences with a focus on
          front-end development and mobile app development
        </li>
        <li>Front-End Development (React, Next.js and Vite)</li>
        <li>Mobile App Development (Swift, Swift UI)</li>
        <li>PWA &amp; Responsive Web Apps</li>
        <li>UI/UX Design &amp; Prototyping</li>
        <li>Agile Workflow &amp; Project Management</li>
      </ul>
    </section>
  );
}
