import React from "react";

export default function ContactSection() {
  return (
    <section id="contact" className="section section--contact">
      <div className="section__inner section__inner--split">
        <div>
          <p className="section__eyebrow">Contact</p>
          <h2 className="section__title">Let’s talk</h2>
          <p className="section__body">
            For internships, collaborations or questions, feel free to reach
            out.
          </p>
          <p className="section__body">
            Email:{" "}
            <a href="mailto:hello@kourix.dev" className="section__link">
              hello@kourix.dev
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
