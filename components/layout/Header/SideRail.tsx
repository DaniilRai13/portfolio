"use client";

import Link from "next/link";

import SocialLinks from "@/components/ui/SocialLinks";
import { navLinks, sectionIds } from "@/data/links.data";
import { siteConfig } from "@/data/site.data";
import { useActiveSection } from "@/hooks/useActiveSection";

const navIds = navLinks.map((link) => link.href);

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

/** Вертикальная навигация слева — только на больших экранах (lg+). Ниже — обычная шапка. */
export default function SideRail() {
  const activeId = useActiveSection(navIds);

  return (
    <aside className="fixed inset-y-4 left-4 z-50 hidden w-16 flex-col items-center justify-between rounded-2xl border-2 border-ink bg-paper py-4 lg:flex">
      <Link
        href={`#${sectionIds.home}`}
        aria-label={`${siteConfig.name} — back to top`}
        className={`flex size-10 shrink-0 items-center justify-center rounded-xl border-2 border-ink bg-brand text-sm leading-none font-bold text-brand-soft no-underline transition-transform duration-150 hover:-rotate-6 motion-reduce:transition-none ${focusRing}`}
      >
        DR
      </Link>

      <nav aria-label="Main navigation" className="w-full">
        <ul className="flex w-full flex-col items-center gap-3">
          {navLinks.map((link) => {
            const isActive = activeId === link.href;
            const isContact = link.href === sectionIds.contact;

            return (
              <li key={link.href} className="relative flex w-full justify-center px-1.5">
                {isActive && !isContact && (
                  <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1 rounded-r-full bg-brand" />
                )}

                {/* Ссылка на всю ширину рейки: заметная плашка при наведении и крупная зона клика */}
                <Link
                  href={`#${link.href}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`flex w-full rotate-180 items-center justify-center rounded-lg py-2.5 text-[13px] font-bold tracking-[0.12em] uppercase no-underline transition-colors duration-150 [writing-mode:vertical-rl] motion-reduce:transition-none ${focusRing} ${
                    isContact
                      ? "mt-1 border-2 border-ink bg-ink py-3 text-paper hover:bg-sun hover:text-ink aria-[current=true]:bg-sun aria-[current=true]:text-ink"
                      : `hover:bg-brand-soft hover:text-brand-deep ${isActive ? "text-ink" : "text-muted"}`
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* На низких экранах соцсети прячем, чтобы рейка не переполнялась */}
      <SocialLinks
        className="flex flex-col items-center gap-0.5 [@media(max-height:640px)]:hidden"
        linkClassName={`size-9 rounded-lg text-strong hover:bg-cream ${focusRing}`}
        iconSize={16}
      />
    </aside>
  );
}
