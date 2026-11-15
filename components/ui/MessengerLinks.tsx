import { twMerge } from "tailwind-merge";

import { socialLinks } from "@/data/links.data";

interface MessengerLinksProps {
  className?: string;
}

/** Контакты с иконкой и подписью — для тёмного фона (блок Contact). */
export default function MessengerLinks({ className = "" }: MessengerLinksProps) {
  return (
    <ul aria-label="Contacts" className={twMerge("flex flex-col gap-2", className)}>
      {socialLinks.map((link) => {
        const isWebLink = link.href.startsWith("http");

        return (
          <li key={link.name}>
            <a
              href={link.href}
              {...(isWebLink && { target: "_blank", rel: "noopener noreferrer" })}
              className="inline-flex min-h-11 items-center gap-3 rounded-field border border-paper/20 bg-ink px-3.5 text-sm font-semibold text-paper transition hover:border-sun hover:bg-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sun"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                width={18}
                height={18}
                fill="currentColor"
                className="shrink-0"
              >
                <path d={link.icon.path} />
              </svg>
              <span className="text-on-dark">{link.label}:</span>
              {link.handle}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
