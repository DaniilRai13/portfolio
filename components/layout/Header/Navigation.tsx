"use client";

import type { ReactNode } from "react";
import Link from "next/link";

import { navLinks, sectionIds } from "@/data/links.data";
import { useActiveSection } from "@/hooks/useActiveSection";
import MobileMenu from "@/components/layout/MobileMenu";

const navIds = navLinks.map((link) => link.href);

export default function Navigation({ logo }: { logo: ReactNode }) {
  const activeId = useActiveSection(navIds);

  return (
    <div className="relative flex items-center justify-between rounded-2xl border-2 border-ink bg-paper/95 p-3 backdrop-blur-sm">
      {logo}

      <nav aria-label="Main navigation" className="hidden md:block">
        <ul className="flex items-center gap-5">
          {navLinks.map((link) => (
            <li key={link.href} className="list-none">
              <Link
                href={`#${link.href}`}
                aria-current={activeId === link.href ? "true" : undefined}
                className={`font-bold uppercase no-underline ${
                  link.href === sectionIds.contact ? "nav-link-btn" : "nav-link text-strong"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <MobileMenu activeId={activeId} />
    </div>
  );
}
