import { twMerge } from "tailwind-merge";

import { socialLinks } from "@/data/links.data";

interface MessengerLinksProps {
  className?: string;
}

/** Контакты капсулами: иконка + адрес или ник. Для светлого фона (блок Contact). */
export default function MessengerLinks({ className = "" }: MessengerLinksProps) {
  return (
    <ul aria-label="Contacts" className={twMerge("flex flex-wrap gap-2", className)}>
      {socialLinks.map((link) => {
        const isWebLink = link.href.startsWith("http");

        return (
          <li key={link.name}>
            <a
              href={link.href}
              {...(isWebLink && { target: "_blank", rel: "noopener noreferrer" })}
              className="inline-flex min-h-11 items-center gap-2 rounded-field border-[1.5px] border-line bg-cream px-3.5 text-sm font-semibold text-ink transition-colors hover:border-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                width={16}
                height={16}
                fill="currentColor"
                className="shrink-0"
              >
                <path d={link.icon.path} />
              </svg>
              <span className="sr-only">{link.label}: </span>
              {link.handle}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
