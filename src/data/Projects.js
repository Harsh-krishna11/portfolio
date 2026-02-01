const projects = [
  {
    id: "1",
    title: "AlphaClothing",
    period: "Jul 2022 – Aug 2022",
    tech: ["React.js", "Context API", "React Router"],
    image: "/assets/projects/alpha-clothing.png",
    description:
      "AlphaClothing was my first real step into understanding how frontend applications behave in the real world.",
    emotion:
      "This project taught me patience — things break, states go wrong, but consistency fixes them.",
    learnings: [
      "Thinking in components instead of pages",
      "Managing shared state using Context API",
      "Understanding real Add-to-Cart edge cases",
      "Learning to debug UI behavior calmly",
    ],
    philosophy:
      "In the beginning, mistakes teach more than success. AlphaClothing helped me accept that learning is a process.",
    links: {
      github: "https://github.com/Harsh-krishna11/alpha-clothing",
      live: "https://alpha-clothing.vercel.app/",
    },
  },

  {
    id: "2",
    title: "Doctor Appointment Booking System",
    period: "Jun 2023 – Sep 2023",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    image: "/assets/projects/doctor-appointment.png",
    description:
      "This project helped me understand responsibility — when real users, roles, and data are involved.",
    emotion:
      "Here I learned that clarity and structure are more important than speed.",
    learnings: [
      "Role-based access (User / Doctor / Admin)",
      "Authentication & authorization flows",
      "Date-based booking logic",
      "Building dashboards with purpose",
    ],
    philosophy:
      "When systems become complex, calm thinking becomes your strongest tool.",
    links: {
      github: "https://github.com/Harsh-krishna11/prescripto-full-stack",
      frontend: "https://prescripto-full-stack-frontend-yu9g.onrender.com/",
      admin: "https://prescripto-full-stack-7vqi.onrender.com/",
    },
  },

  {
    id: "3",
    title: "Kanha Food Ordering Website",
    period: "Jun 2024 – Aug 2024",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    image: "/assets/projects/kanha-food.png",
    description:
      "Kanha Food was about flow — from user intent to backend response to final delivery.",
    emotion:
      "This project strengthened my belief that systems grow when simplicity is respected.",
    learnings: [
      "Secure authentication & sessions",
      "Backend API design with MongoDB",
      "Admin-driven content management",
      "Handling real-world UI states",
    ],
    philosophy:
      "True growth happens when frontend and backend thinking move together.",
    links: {
      github: "https://github.com/Harsh-krishna11/Kahna-Food-delivery",
      live: "https://kahna-food-delivery-frontend.onrender.com/",
    },
  },
];

export default projects;
