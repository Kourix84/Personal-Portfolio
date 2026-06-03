import React, { useRef, useState } from "react";
import aboutImageTwo from "../assets/img2.jpeg";
import horseImage from "../assets/horse.jpeg";
import skiImage from "../assets/ski.jpeg";
import eventImage from "../assets/event.jpeg";

const tabs = [
  { id: "story", label: "About me" },
  { id: "experience", label: "Experience" },
  { id: "hobbies", label: "Hobbies" },
];

const aboutParagraphs = [
  "I am Kourosh, a Media Design student at Fontys University of Applied Sciences, specialising in mobile app development, front-end development, and UI/UX design.",
  "I like turning ideas into usable digital products, from early concept and user flows to polished interfaces and working code.",
  "Outside of project work, I am active in the Fontys ICT community and enjoy roles where I can combine planning, communication, and hands-on delivery.",
];

const timelineItems = [
  {
    semester: "Semester 1",
    title: "Start Semester",
    description:
      "Started building a foundation in media design, visual communication, and practical front-end basics.",
  },
  {
    semester: "Semester 2",
    title: "Interactive Media",
    description:
      "Worked on more interactive web experiences, improving usability, responsive layout, and project structure.",
  },
  {
    semester: "Semester 3",
    title: "Front-end Development",
    description:
      "Connected interface design with backend logic, APIs, and real user flows across larger assignments.",
  },
  {
    semester: "Semester 4",
    title: "Mobile App Development",
    description:
      "Focused more deeply on mobile app development, front-end engineering, and UI/UX design practice.",
  },
  {
    semester: "Semester 5",
    title: "Internship at ASML",
    description:
      "Applied design and development skills in a more professional workflow with stronger ownership and delivery.",
  },
];

const hobbyItems = [
  {
    title: "Horse riding",
    image: horseImage,
    description:
      "Show jumping and training have taught me focus, patience, and quick decision-making under pressure.",
  },
  {
    title: "Skiing",
    image: skiImage,
    description:
      "Skiing is one of the ways I reset, stay active, and challenge myself outside of design and development.",
  },
  {
    title: "Event Organization",
    image: eventImage,
    description:
      "Organizing events and meetups for the Fontys ICT community has been a rewarding way to connect, share knowledge, and build a stronger network.",
  },
];

export default function AboutSection() {
  const sectionRef = useRef(null);
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [activeTimelineIndex, setActiveTimelineIndex] = useState(0);
  const activeTimelineItem = timelineItems[activeTimelineIndex];

  const scrollAboutIntoView = () => {
    sectionRef.current?.scrollIntoView({ block: "start" });
  };

  const selectTab = (tabId) => {
    setActiveTab(tabId);
    scrollAboutIntoView();
  };

  const selectTimelineItem = (index) => {
    setActiveTimelineIndex(index);
    scrollAboutIntoView();
  };

  const showPreviousSemester = () => {
    setActiveTimelineIndex((current) =>
      current === 0 ? timelineItems.length - 1 : current - 1,
    );
    scrollAboutIntoView();
  };

  const showNextSemester = () => {
    setActiveTimelineIndex((current) =>
      current === timelineItems.length - 1 ? 0 : current + 1,
    );
    scrollAboutIntoView();
  };

  return (
    <section id="about" className="section section--about" ref={sectionRef}>
      <div className="section__inner section__inner--wide">
        <div className="about-section__header">
          <div>
            <p className="section__eyebrow">About</p>
            <h2 className="section__title">A bit about me</h2>
          </div>

          <div className="about-tabs" role="tablist" aria-label="About section tabs">
            {tabs.map((tab) => (
              <button
                aria-controls={`about-panel-${tab.id}`}
                aria-selected={activeTab === tab.id}
                className="about-tabs__button"
                id={`about-tab-${tab.id}`}
                key={tab.id}
                onClick={() => selectTab(tab.id)}
                role="tab"
                type="button"
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="about-panels">
          {activeTab === "story" && (
            <article
              aria-labelledby="about-tab-story"
              className="about-panel about-panel--story"
              id="about-panel-story"
              role="tabpanel"
            >
              <div className="about-portrait">
                <img src={aboutImageTwo} alt="Kourosh portrait placeholder" />
              </div>

              <div className="about-copy">
                <span className="about-copy__marker">My story</span>
                <h3>Design, code, and practical delivery.</h3>
                {aboutParagraphs.map((paragraph) => (
                  <p className="section__body" key={paragraph}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          )}

          {activeTab === "experience" && (
            <article
              aria-labelledby="about-tab-experience"
              className="about-panel about-panel--experience"
              id="about-panel-experience"
              role="tabpanel"
            >
              <div className="experience-stage">
                <button
                  aria-label="Show previous semester"
                  className="experience-stage__arrow"
                  onClick={showPreviousSemester}
                  type="button"
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24">
                    <path d="M15 6 9 12l6 6" />
                  </svg>
                </button>

                <div className="experience-stage__content">
                  <p className="experience-stage__kicker">Experience timeline</p>
                  <h3>{activeTimelineItem.semester}</h3>
                  <h4>{activeTimelineItem.title}</h4>
                  <p>{activeTimelineItem.description}</p>
                </div>

                <button
                  aria-label="Show next semester"
                  className="experience-stage__arrow"
                  onClick={showNextSemester}
                  type="button"
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24">
                    <path d="m9 6 6 6-6 6" />
                  </svg>
                </button>
              </div>

              <ol
                className="experience-timeline"
                style={{ "--timeline-count": timelineItems.length }}
              >
                {timelineItems.map((item, index) => (
                  <li
                    className={
                      index <= activeTimelineIndex
                        ? "experience-timeline__item experience-timeline__item--filled"
                        : "experience-timeline__item"
                    }
                    key={item.semester}
                  >
                    <button
                      aria-label={`Show ${item.semester}`}
                      aria-pressed={activeTimelineIndex === index}
                      className="experience-timeline__button"
                      onClick={() => selectTimelineItem(index)}
                      type="button"
                    >
                      <span aria-hidden="true" className="experience-timeline__dot" />
                      <span className="experience-timeline__label">
                        {item.semester}
                      </span>
                    </button>
                  </li>
                ))}
              </ol>
            </article>
          )}

          {activeTab === "hobbies" && (
            <article
              aria-labelledby="about-tab-hobbies"
              className="about-panel about-panel--hobbies"
              id="about-panel-hobbies"
              role="tabpanel"
            >
              <div className="hobby-intro">
                <span className="about-copy__marker">Beyond the screen</span>
                <h3>Hobbies and extra things I do.</h3>
                {/* <p className="section__body">
                  These are the activities that keep me active, focused, and balanced
                  next to my design and development work.
                </p> */}
              </div>

              <div className="hobby-grid">
                {hobbyItems.map((hobby) => (
                  <article className="hobby-card" key={hobby.title} tabIndex={0}>
                    <img src={hobby.image} alt="" aria-hidden="true" />
                    <div className="hobby-card__overlay">
                      <h4>{hobby.title}</h4>
                      <p>{hobby.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </article>
          )}
        </div>
      </div>
    </section>
  );
}
