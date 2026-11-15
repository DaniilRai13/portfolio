import { siGithub, siGmail, siTelegram } from "simple-icons";
import { siteConfig } from "./site.data";

export const sectionIds = {
  home: "home",
  services: "services",
  projects: "projects",
  about: "about",
  process: "process",
  contact: "contact",
} as const;

export const navLinks = [
  { name: "Services", href: sectionIds.services },
  { name: "Projects", href: sectionIds.projects },
  { name: "About", href: sectionIds.about },
  { name: "Process", href: sectionIds.process },
  { name: "Contact", href: sectionIds.contact },
];

export interface ISocialLink {
  name: string;
  label: string;
  /** Текст для кнопки с подписью: адрес или ник */
  handle: string;
  href: string;
  icon: { path: string; hex: string };
}

export const socialLinks: ISocialLink[] = [
  {
    name: "telegram",
    label: "Telegram",
    handle: `@${siteConfig.telegram}`,
    href: `https://t.me/${siteConfig.telegram}`,
    icon: siTelegram,
  },
  {
    name: "email",
    label: "Email",
    handle: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: siGmail,
  },
  {
    name: "github",
    label: "GitHub",
    handle: siteConfig.github,
    href: `https://github.com/${siteConfig.github}`,
    icon: siGithub,
  },
];
