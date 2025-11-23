import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="section section--about">
      <div className="section__inner section__inner--split">
        <div>
          <p className="section__eyebrow">About</p>
          <h2 className="section__title">A bit about me</h2>
          <p className="section__body">
            I’m Kourosh, a Media Design student at Fontys University of Applied Sciences, specialising in mobile app development, Front-end development and UI/UX Design.
          </p>
          <p className="section__body">
            I’m a board member of Proxy, the Fontys ICT study association, where I coordinate external communication and represent the organisation. I’ve also led the Intro Committee and organised multiple major events, giving me strong experience in planning, coordination, and community-building.
          </p>
          <p className="section__body">
            I’m also a passionate horse rider and show jumper. Years of training and competing have shaped my mindset—structured thinking, patience, quick decision-making, and a strong focus on performance under pressure.
          </p>
          <p className="section__body">
            I’m a sporty person in general. Besides riding, I’m experienced in swimming and skiing, and I enjoy staying active. This lifestyle shapes my mindset: structured, consistent, and always challenging myself to improve.
          </p>
        </div>
      </div>
    </section>
  );
}
