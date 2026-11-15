import { services } from "@/data/services.data";
import ServiceCard from "./ServiceCard";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import Heading from "@/components/ui/Heading";
import Subheading from "@/components/ui/Subheading";
import { sectionIds } from "@/data/links.data";

export default function WhatIDo() {
  const featuredService = services.find((service) => service.featured);
  const otherServices = services.filter((service) => !service.featured);

  return (
    <Section id={sectionIds.services} labelledBy="services-heading" background="paper">
      <div className="mb-10 lg:mb-12">
        <Eyebrow>01 — Services</Eyebrow>
        <Heading id="services-heading" className="mb-3">
          What I do
        </Heading>
        <Subheading>
          I build modern, fast and scalable web applications with a focus on
          clean code and great user experience.
        </Subheading>
      </div>

      <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr] md:gap-6">
        {featuredService && <ServiceCard service={featuredService} />}

        <div className="grid gap-4">
          {otherServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </Section>
  );
}
