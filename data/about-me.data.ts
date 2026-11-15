import { IAboutData } from "@/types/IAboutData";

export const aboutData: IAboutData = {
  title: "About me",

  paragraphs: [
    "I'm a frontend developer who builds interfaces with React and TypeScript, from analytics dashboards and data visualization to marketing websites.",

    "In 2026 I worked in a product team on an SEO analytics SaaS and launched a company website with an admin panel end to end. I care about clean code, responsive layouts and pages that load fast.",

    "I use AI-assisted tools to move faster, and I make sure I understand every line I ship.",
  ],

  techSkillsTitle: "Tech I work with",

  techSkills: [
    { name: "React", bgColor: "bg-sky" },
    { name: "TypeScript", bgColor: "bg-sky" },
    { name: "Tailwind CSS", bgColor: "bg-mint" },
    { name: "SCSS", bgColor: "bg-mint" },
    { name: "Redux Toolkit", bgColor: "bg-sun" },
    { name: "TanStack Query", bgColor: "bg-sun" },
    { name: "tRPC", bgColor: "bg-peach-soft" },
    { name: "Vite", bgColor: "bg-peach-soft" },
    { name: "Git & GitHub" },
  ],

  educationTitle: "Education",

  education: {
    institution: "BSUIR",
    field: "Information management systems, 2025 – present",
  },

  languagesTitle: "Languages",

  languages: [
    {
      name: "Russian",
      level: "Native",
    },
    {
      name: "English",
      level: "Intermediate",
    },
  ],
};
