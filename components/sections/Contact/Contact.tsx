import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import Heading from "@/components/ui/Heading";
import Subheading from "@/components/ui/Subheading";
import MessengerLinks from "@/components/ui/MessengerLinks";
import { sectionIds } from "@/data/links.data";
import ContactChat from "./ContactChat";

export default function Contact() {
  return (
    <Section id={sectionIds.contact} labelledBy="contact-heading" background="paper">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="min-w-0">
          <Eyebrow>05 — Contact</Eyebrow>
          <Heading id="contact-heading" className="mb-4">
            {`Let's build something together`}
          </Heading>
          <Subheading className="mb-8">
            Tell me about your project: a new website, a web app or improvements to an
            existing one.
          </Subheading>
          <MessengerLinks />
        </div>

        <ContactChat />
      </div>
    </Section>
  );
}
