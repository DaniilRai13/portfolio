import type { CSSProperties } from "react";
import { twMerge } from "tailwind-merge";

import { socialLinks } from "@/data/links.data";
import { siteConfig } from "@/data/site.data";

interface SocialLinksProps {
  /** Раскладка списка. Заменяет значение по умолчанию целиком. */
  className?: string;
  /** Классы для каждой кнопки: размер, рамка, фон. */
  linkClassName?: string;
  iconSize?: number;
}

/**
 * Иконки соцсетей. В обычном состоянии — цвета текста,
 * при наведении — фирменный цвет соцсети (через CSS-переменную --social-color).
 */
export default function SocialLinks({
  className = "flex items-center gap-2",
  linkClassName = "",
  iconSize = 20,
}: SocialLinksProps) {
  return (
    <ul className={className}>
      {socialLinks.map((social) => {
        const isWebLink = social.href.startsWith("http");

        return (
          <li key={social.name}>
            <a
              href={social.href}
              aria-label={`${siteConfig.name} on ${social.label}`}
              title={social.label}
              {...(isWebLink && { target: "_blank", rel: "noopener noreferrer" })}
              style={{ "--social-color": `#${social.icon.hex}` } as CSSProperties}
              className={twMerge(
                "inline-flex items-center justify-center transition-colors hover:text-(--social-color) focus-visible:text-(--social-color)",
                linkClassName,
              )}
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                width={iconSize}
                height={iconSize}
                fill="currentColor"
              >
                <path d={social.icon.path} />
              </svg>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
