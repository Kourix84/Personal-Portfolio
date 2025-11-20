// src/data/projects.js
const projects = [
  {
    id: "piopera",
    title: "Piopera – Digital Board Game",
    short:
      "PWA companion app for a mystery board game with 150+ interactive questions.",
    role: "Product design, front-end development",
    tech: ["React", "Vite", "PWA", "IndexedDB"],
    period: "2024 – 2025",
    heroImage: "/src/assets/img.jpg", // replace with real image
    summary:
      "Piopera is a progressive web app that extends a physical mystery board game with interactive questions, side quests and a digital rulebook.",
    highlights: [
      "Designed the full UI/UX for mobile and desktop players.",
      "Implemented offline-first behaviour using IndexedDB.",
      "Built an in-game rulebook and side-quest system."
    ],
    links: {
      github: "https://github.com/Kourix84/piopera.git",
      live: "https://piopera.netlify.app/"
    }
  },
  {
    id: "toyloop",
    title: "No More Toys",
    short:
      "Concept app that helps parents track and rotate toys their kids actually play with.",
    role: "Mobile concept, UX, prototype",
    tech: ["SwiftUI", "Firebase", "AI"],
    period: "2024",
    heroImage: "/src/assets/img.jpg",
    summary:
      "ToyLoop gives parents insight into which toys are used, making it easier to buy less and reuse more.",
    highlights: [
      "Defined personas and mapped key user journeys.",
      "Prototyped core flows in SwiftUI with mocked data.",
      "Explored AI-assisted suggestions based on play history."
    ],
    links: {
      github: "",
      live: ""
    }
  }
];

export default projects;
