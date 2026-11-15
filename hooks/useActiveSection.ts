"use client";

import { useEffect, useState } from "react";

/**
 * Возвращает id секции, которая сейчас в зоне чтения (верхняя треть экрана).
 * null — когда пользователь выше первой отслеживаемой секции (в hero).
 */
export function useActiveSection(ids: string[]) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const key = ids.join(",");

  useEffect(() => {
    const sections = key
      .split(",")
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const visible = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }

        // Берём первую по порядку секцию из видимых
        const current = sections.find((section) => visible.has(section.id));
        setActiveId(current?.id ?? null);
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [key]);

  return activeId;
}
