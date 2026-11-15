"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { navLinks, sectionIds } from "@/data/links.data";

export default function MobileMenu({ activeId }: { activeId: string | null }) {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    // Закрываем меню по клику вне его
    const handlePointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setIsOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isOpen]);

  return (
    <div ref={rootRef} className="md:hidden">
      <button
        type="button"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((open) => !open)}
        className="relative z-[60] flex size-11 items-center justify-center rounded-xl border-2 border-ink bg-sun text-ink"
      >
        <span className="flex w-5 flex-col items-center gap-[5px]">
          <span
            className={`h-[2px] w-5 rounded-full bg-ink transition-transform duration-200 ${
              isOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[2px] w-5 rounded-full bg-ink transition-opacity duration-200 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-[2px] w-5 rounded-full bg-ink transition-transform duration-200 ${
              isOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      <div
        id="mobile-navigation"
        aria-hidden={!isOpen}
        className={`absolute top-[calc(100%+12px)] right-0 left-0 z-50 rounded-2xl border-2 border-ink bg-paper p-3 shadow-[5px_5px_0_var(--color-sun)] transition-all duration-200 ${
          isOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <nav aria-label="Mobile navigation">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isContact = link.href === sectionIds.contact;
              const isActive = activeId === link.href;

              return (
                <li key={link.href} className="list-none">
                  <Link
                    href={`#${link.href}`}
                    tabIndex={isOpen ? 0 : -1}
                    aria-current={isActive ? "true" : undefined}
                    onClick={() => setIsOpen(false)}
                    className={`block rounded-lg px-4 py-3 text-sm font-bold uppercase no-underline transition-colors ${
                      isContact
                        ? "bg-brand text-white hover:bg-brand-deep"
                        : isActive
                          ? "bg-brand-soft text-brand-deep"
                          : "text-strong hover:bg-brand-soft"
                    }`}
                  >
                    {link.name}
                    {isContact && <span aria-hidden="true"> ↗</span>}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}
