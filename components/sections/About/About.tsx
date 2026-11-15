import { aboutData } from "@/data/about-me.data";
import { sectionIds } from "@/data/links.data";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import Heading from "@/components/ui/Heading";
import AboutDetails from "./AboutDetails";

export default function About() {
  return (
    <Section id={sectionIds.about} labelledBy="about-heading" background="paper">
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-12">
        <div className="min-w-0">
          <Eyebrow>03 — About</Eyebrow>
          <Heading id="about-heading" className="mb-5">
            {aboutData.title}
          </Heading>

          <div className="space-y-4 text-base leading-relaxed text-body sm:text-lg">
            {aboutData.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        <AboutDetails />
      </div>
    </Section>
  );
}
