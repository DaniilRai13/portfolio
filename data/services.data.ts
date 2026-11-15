import {
  Monitor,
  Atom,
  Code,
  Wrench,
  LucideIcon,
} from "lucide-react";

export interface IService {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  featured?: boolean;
}

export const services: IService[] = [
  {
    id: 1,
    title: "UI Development",
    description:
      "Pixel-perfect, responsive interfaces from Figma or your ideas.",
    icon: Monitor,
    color: "bg-brand-soft text-brand-deep",
    featured: true,
  },
  {
    id: 2,
    title: "React Apps",
    description:
      "Complex interfaces, dashboards and SPAs with a modern stack.",
    icon: Atom,
    color: "bg-mint text-mint-deep",
  },
  {
    id: 3,
    title: "API Integration",
    description:
      "REST API, authentication, forms and data handling.",
    icon: Code,
    color: "bg-peach-soft text-coral",
  },
  {
    id: 4,
    title: "Bug Fixes & Support",
    description:
      "Improve existing projects and solve technical issues.",
    icon: Wrench,
    color: "bg-sun text-sun-deep",
  },
];