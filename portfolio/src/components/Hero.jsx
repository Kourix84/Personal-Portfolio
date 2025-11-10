import React from "react";

export default function Hero() {
  return (
    <section className="hero" aria-label="Intro">
      <div className="hero__card">
        <h1 className="hero__title">
          <span className="hero__title--accent">Hey, I’m Kourosh</span>
        </h1>

        <ul className="hero__list" role="list">
          <li>
            student at Fontys University of Applied Sciences with a focus on front-end development and mobile app development
          </li>
          <li>
            Front-End Development (React, Next.js and Vite)
          </li>
          <li>
            Mobile App Development (Swift, Swift UI)
          </li>
          <li>
            PWA & Responsive Web Apps
          </li>
          <li>
            UI/UX Design & Prototyping
          </li>
          <li>
            Agile Workflow & Project Management
          </li>
        </ul>
      </div>
    </section>
  );
}
