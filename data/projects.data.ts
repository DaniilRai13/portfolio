import { IProject } from "@/types/projects.types";

export const projectsData: IProject[] = [
  {
    id: "cyberdasha",
    name: "CyberDasha",
    description:
      "SEO analytics and competitor-monitoring platform, now in closed beta. I built the core product interface from the first sprint, in a team of five.",

    highlights: [
      "Project dashboard with an overall site score and charts",
      "Admin analytics with filters and registration charts",
      "Help center with search and contextual hints",
      "Responsive layouts, light and dark themes, prerendered public pages",
    ],

    images: {
      main: {
        src: "/images/projects/cyberdasha/landing.jpg",
        alt: "CyberDasha landing page: hero with a dashboard preview, competitor list and SEO audit score",
      },
      others: [
        {
          src: "/images/projects/cyberdasha/competitors.jpg",
          alt: "CyberDasha competitor monitoring table comparing site metrics with status badges",
        },
        {
          src: "/images/projects/cyberdasha/audit.jpg",
          alt: "CyberDasha SEO audit block with a score ring and issues sorted by priority",
        },
      ],
    },

    url: {
      label: "Visit cyberdasha.app",
      href: "https://cyberdasha.app",
    },

    mainTags: [
      { name: "SaaS", bgColor: "bg-sky text-brand-deep" },
      { name: "Frontend developer" },
      { name: "Feb – Oct 2026" },
    ],

    stackTags: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Recharts" },
      { name: "TanStack Query" },
      { name: "tRPC" },
    ],
  },

  {
    id: "kartstav",
    name: "KartStav",
    description:
      "Multi-page website for a renovation company in Teplice, Czech Republic, plus a custom admin panel the client uses to manage the site.",

    highlights: [
      "Prerendered pages with per-page SEO metadata and a generated sitemap",
      "Admin: ideas board, portfolio manager, privacy-friendly statistics",
      "Consultation form that delivers enquiries to a Telegram bot",
    ],

    images: {
      main: {
        src: "/images/projects/kartstav/home.jpg",
        alt: "KartStav home page: renovated living room hero with a consultation button and recent projects",
      },
      others: [
        {
          src: "/images/projects/kartstav/portfolio.jpg",
          alt: "KartStav portfolio page with renovation project cards, locations and floor areas",
        },
        {
          src: "/images/projects/kartstav/services.jpg",
          alt: "KartStav services page with a renovated kitchen photo and key advantages",
        },
      ],
    },

    url: {
      label: "Visit kartstav.cz",
      href: "https://kartstav.cz",
    },

    mainTags: [
      { name: "Website + admin panel", bgColor: "bg-peach-soft text-ink" },
      { name: "End to end" },
    ],

    stackTags: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "Vite" },
      { name: "SCSS" },
      { name: "React Hook Form" },
      { name: "Framer Motion" },
    ],
  },
];
