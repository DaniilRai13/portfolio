import Badge from "@/components/ui/Badge";
import { aboutData } from "@/data/about-me.data";

const cardClasses = "min-w-0 rounded-card border-[1.5px] border-line bg-cream p-5 sm:p-6";

export default function AboutDetails() {
  return (
    <div className="grid min-w-0 grid-cols-1 gap-4">
      {/* Tech stack */}
      <article className={cardClasses}>
        <h3 className="mb-3 text-base font-bold text-ink">{aboutData.techSkillsTitle}</h3>

        <div className="flex flex-wrap gap-2">
          {aboutData.techSkills.map((skill) => (
            <Badge
              key={skill.name}
              className={`text-[13px] text-ink ${skill.bgColor ?? "bg-paper ring-1 ring-line"}`}
            >
              {skill.name}
            </Badge>
          ))}
        </div>
      </article>

      {/* Education and languages */}
      <article className={`${cardClasses} grid gap-5 sm:grid-cols-2`}>
        <div>
          <h3 className="mb-1.5 text-base font-bold text-ink">{aboutData.educationTitle}</h3>
          <p className="text-[15px] leading-relaxed text-body">
            {aboutData.education.institution}
            <br />
            {aboutData.education.field}
          </p>
        </div>

        <div>
          <h3 className="mb-1.5 text-base font-bold text-ink">{aboutData.languagesTitle}</h3>
          <ul className="space-y-0.5 text-[15px] leading-relaxed text-body">
            {aboutData.languages.map((language) => (
              <li key={language.name}>
                {language.name} — {language.level.toLowerCase()}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </div>
  );
}
