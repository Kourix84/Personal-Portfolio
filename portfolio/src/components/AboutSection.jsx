import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="section section--about">
      <div className="section__inner section__inner--split">
        <div>
          <p className="section__eyebrow">About</p>
          <h2 className="section__title">A bit about me</h2>
          <p className="section__body">
            I’m Kourosh, a Media Design student at Fontys University of Applied
            Sciences, specialising in mobile app development and front-end
            engineering.
          </p>
          <p className="section__body">
            I’m active in the Fontys ICT study association Proxy, coordinating
            events and external communication, which keeps me close to users and
            stakeholders.
          </p>
        </div>
      </div>
    </section>
  );
}
