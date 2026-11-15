import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import Heading from "@/components/ui/Heading";
import Subheading from "@/components/ui/Subheading";
import MessengerLinks from "@/components/ui/MessengerLinks";
import { sectionIds } from "@/data/links.data";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <Section id={sectionIds.contact} labelledBy="contact-heading" background="paper">
      <div className="relative isolate grid grid-cols-1 gap-10 overflow-hidden rounded-panel bg-ink px-5 py-10 text-paper xs:px-9 lg:grid-cols-2 lg:gap-16 lg:p-12">
        {/* Decorative circles */}
        <div
          aria-hidden="true"
          className="absolute -top-12 -right-12 -z-10 size-24 rounded-full bg-sun sm:-top-8 sm:-right-8 sm:size-40"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-14 -left-14 -z-10 size-28 rounded-full bg-mint sm:size-32"
        />

        {/* Contact information */}
        <div className="flex flex-col items-start">
          <Eyebrow className="text-sun">05 — Contact</Eyebrow>
          <Heading id="contact-heading" className="mb-4 text-paper">
            {`Let's build something together`}
          </Heading>

          <Subheading className="mb-8 text-on-dark">
            Tell me about your project: a new website, a web app or improvements
            to an existing one.
          </Subheading>

          <ul className="mb-8 space-y-2 text-[15px] text-on-dark">
            <li className="flex items-start gap-2.5">
              <span aria-hidden="true" className="mt-2 size-2 shrink-0 rounded-full bg-mint-step" />
              Available for freelance projects and full-time roles
            </li>
            <li className="flex items-start gap-2.5">
              <span aria-hidden="true" className="mt-2 size-2 shrink-0 rounded-full bg-sun" />
              I usually reply within one business day
            </li>
          </ul>

          <MessengerLinks className="mt-auto" />
        </div>

        {/* Contact form */}
        <div className="rounded-card bg-paper p-5 text-ink sm:p-7">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
