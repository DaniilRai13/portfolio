import { aboutData } from "@/data/about-me.data";
import { sectionIds } from "@/data/links.data";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import Heading from "@/components/ui/Heading";
import AboutBadge from "./AboutBadge";
import AboutDetails from "./AboutDetails";

export default function About() {
  return (
    <Section id={sectionIds.about} labelledBy="about-heading" background="paper">
      {/*
        Телефон: заголовок → бейдж → текст.
        Desktop: бейдж в левой колонке на две строки, справа заголовок и текст.
      */}
      <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-[340px_minmax(0,1fr)] lg:grid-rows-[auto_1fr] lg:gap-x-16 lg:gap-y-0">
        <div className="min-w-0 lg:col-start-2 lg:row-start-1">
          <Eyebrow>03 — About</Eyebrow>
          <Heading id="about-heading" className="lg:mb-5">
            {aboutData.title}
          </Heading>
        </div>

        <div className="lg:col-start-1 lg:row-span-2 lg:row-start-1">
          <AboutBadge />
        </div>

        <div className="min-w-0 lg:col-start-2 lg:row-start-2">
          <div className="max-w-2xl space-y-4 text-base leading-relaxed text-body sm:text-lg">
            {aboutData.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <AboutDetails />
        </div>
      </div>
    </Section>
  );
}
