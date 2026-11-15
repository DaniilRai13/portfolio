import { stepsWork } from "@/data/steps-work";
import { sectionIds } from "@/data/links.data";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import Heading from "@/components/ui/Heading";
import Subheading from "@/components/ui/Subheading";

export default function HowIWork() {
  return (
    <Section id={sectionIds.process} labelledBy="process-heading" background="cream">
      <div className="mb-10 lg:mb-12">
        <Eyebrow>04 — Process</Eyebrow>
        <Heading id="process-heading" className="mb-3">
          How I work
        </Heading>
        <Subheading>
          A simple, transparent process — you always know what is being built and
          when it will be ready.
        </Subheading>
      </div>

      <ol className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {/* Пунктир на уровне номеров: виден в промежутках между карточками */}
        <span
          aria-hidden="true"
          className="absolute top-[46px] right-[12%] left-[12%] hidden border-t-2 border-dashed border-line lg:block"
        />

        {stepsWork.map((step) => (
          <li
            key={step.number}
            className="relative min-w-0 rounded-card border-[1.5px] border-line bg-paper p-6"
          >
            <span
              className={`mb-4 flex size-11 items-center justify-center rounded-full border-[1.5px] border-ink bg-paper text-base font-extrabold ${step.color}`}
            >
              {step.number}
            </span>

            <h3 className="mb-2 text-lg font-bold text-ink">{step.title}</h3>

            <p className="text-[15px] leading-relaxed text-body">{step.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
