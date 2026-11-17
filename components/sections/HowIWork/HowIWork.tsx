import { stepsWork } from "@/data/steps-work";
import { sectionIds } from "@/data/links.data";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import Heading from "@/components/ui/Heading";
import Subheading from "@/components/ui/Subheading";
import Button, { ButtonArrow } from "@/components/ui/Button";

export default function HowIWork() {
  return (
    <Section id={sectionIds.process} labelledBy="process-heading" background="cream">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        {/* Заголовок закреплён, пока листаются шаги */}
        <div className="lg:sticky lg:top-12 lg:self-start">
          <Eyebrow>04 — Process</Eyebrow>
          <Heading id="process-heading" className="mb-3">
            How I work
          </Heading>
          <Subheading className="mb-6 lg:mb-8">
            A simple, transparent process — you always know what is being built and
            when it will be ready.
          </Subheading>
          <Button href={`#${sectionIds.contact}`} variant="outline">
            Start with a brief <ButtonArrow />
          </Button>
        </div>

        <ol>
          {stepsWork.map((step, index) => (
            <li
              key={step.number}
              className="group relative grid grid-cols-[56px_1fr] gap-4 pb-8 last:pb-0 sm:gap-5"
            >
              {/* Пунктир до следующего шага */}
              {index < stepsWork.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute top-14 bottom-0 left-[27px] w-0.5 bg-[repeating-linear-gradient(to_bottom,var(--color-ink)_0_6px,transparent_6px_12px)]"
                />
              )}

              <span
                className={`relative z-10 flex size-14 items-center justify-center rounded-full border-2 border-ink bg-paper text-lg font-extrabold transition-colors duration-200 group-hover:bg-ink motion-reduce:transition-none ${step.color}`}
              >
                {step.number}
              </span>

              <div className="min-w-0 rounded-card border-[1.5px] border-line bg-paper p-5 transition-[border-color,box-shadow] duration-200 group-hover:border-ink group-hover:shadow-[6px_6px_0_var(--color-sun)] motion-reduce:transition-none sm:p-6">
                <h3 className="mb-1.5 text-xl font-bold text-ink">{step.title}</h3>
                <p className="leading-relaxed text-body">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
