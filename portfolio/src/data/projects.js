// src/data/projects.js
const projects = [
  {
    id: "piopera",
    title: "Piopera – Digital Board Game",
    short:
      "PWA companion app for a mystery board game with 150+ interactive questions.",
    role: "Product design, front-end development",
    tech: ["React", "IndexedDB" , "Figma"],
    period: "Feb 2025 – Jun 2025",
    heroImage: "../src/assets/piopera.jpg", // replace with real image
    summary:
      "Piopera is a progressive web app that extends a physical mystery board game witah interactive questions, side quests and a digital rulebook.",
    highlights: [
      "Designed some parts of the UI/UX for mobile and desktop players.",
      "Implemented offline-first behaviour using IndexedDB.",
      "Built an in-game rulebook and side-quest system.",
      "Optimized performance for low-end devices.",
      "Designned and developed the game play experience for board game players."
    ],
    links: {
      github: "https://github.com/Kourix84/piopera.git",
      live: "https://piopera.netlify.app/",
      Figma: "https://www.figma.com/design/VsheeKflt0E9815ucCBzWR/Board-Game-App?node-id=0-1&t=A0zKGFKHqYJcaH8l-1"
    }
  },
    {
    id: "nasmak-website",
    title: "Nasmak – Website",
    short:
      "Website for Nasmak PM, A band based in Eindhoven and Neunen with an Easter Egg implemented.",
    role: "Web design, front-end development",
    tech: ["Figma", "HTML", "CSS", "JavaScript"],
    period: "Sep 2024 - Jan 2025",
    heroImage: "../src/assets/nasmak.png",
    summary:
      "Website for Nasmak PM, A band based in Eindhoven and Neunen and having a strong local presence and having a tour around Netherlands every year.",
    highlights: [
      "Defined personas and mapped key user journeys.",
      "Prototyped core flows in SwiftUI with mocked data.",
      "Explored AI-assisted suggestions based on play history."
    ],
    links: {
      github: "",
      live: "https://i539945.hera.fontysict.net/Nasmak-PM/",
      Figma: "https://www.figma.com/design/QHYNmWlb9jcXmcAeVGvFUM/Nasmak-PM?node-id=0-1&t=xKLVXe95gMZBTKsu-1"
    }
  },
  {
    id: "not-a-cook-book",
    title: "Not a Cook Book – Mobile App Concept",
    short:
      "Concept app and design prototype for discovering recipes based on ingredients with AI assistance.",
    role: "Mobile concept, UX, prototype, Swift Development",
    tech: ["Swift","SwiftUI", "Figma", "OPENAI"],
    period: "Sep 2025 - Oct 2025",
    heroImage: "../src/assets/not-a-cook-book.png",
    summary:
      "Not a Cook Book is a concept mobile app that helps users discover recipes based on the ingredients of their food by taking a picture and the AI analyzes the food, as well as providing AI-assisted suggestions meals and step-by-step cooking guidance.",
    highlights: [
      "Defined personas and mapped key user journeys.",
      "Prototyped core flows in SwiftUI with mocked data.",
      "Explored AI-assisted suggestions based on play history.",
      "Created Figma designs for user testing and feedback.",
      "OPENAI API integration for image recognition and recipe generation.",
      "Implemented a clean and intuitive UI for easy navigation."
    ],
    links: {
      github: "https://github.com/Kourix84/not-a-cook-book.git",
      live: "",
      Figma: "https://www.figma.com/design/Vlumgo2fqvjscuRtyxD0ce/Not-a-cookbook?node-id=0-1&t=2LpVtQlvFjtu6S3h-1"
    }
  }
];

export default projects;
