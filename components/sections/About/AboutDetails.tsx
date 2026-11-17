import type { ReactNode } from "react";
import { aboutData } from "@/data/about-me.data";

const languagesText = aboutData.languages
  .map((language) => `${language.name} — ${language.level.toLowerCase()}`)
  .join(" · ");

const specs: { term: string; value: ReactNode }[] = [
  { term: aboutData.focusTitle, value: aboutData.focus },
  {
    term: aboutData.techSkillsTitle,
    value: (
      <ul className="flex flex-wrap gap-1.5">
        {aboutData.techSkills.map((skill) => (
          <li
            key={skill.name}
            className={`rounded-full border-[1.5px] border-ink px-2.5 py-1 text-xs font-bold text-ink ${skill.bgColor ?? "bg-paper"}`}
          >
            {skill.name}
          </li>
        ))}
      </ul>
    ),
  },
  {
    term: aboutData.educationTitle,
    value: `${aboutData.education.institution} — ${aboutData.education.field}`,
  },
  { term: aboutData.languagesTitle, value: languagesText },
];

/** Таблица фактов: термин слева, значение справа */
export default function AboutDetails() {
  return (
    <dl className="mt-10 border-t-[1.5px] border-ink">
      {specs.map((spec) => (
        <div
          key={spec.term}
          className="grid gap-2 border-b border-line py-4 sm:grid-cols-[180px_1fr] sm:gap-6"
        >
          <dt className="pt-0.5 text-xs font-bold tracking-[0.14em] text-muted uppercase">
            {spec.term}
          </dt>
          <dd className="min-w-0 text-[15px] leading-relaxed text-ink">{spec.value}</dd>
        </div>
      ))}
    </dl>
  );
}
