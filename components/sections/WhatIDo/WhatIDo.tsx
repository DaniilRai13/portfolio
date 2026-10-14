import { services } from "@/data/services.data";
import ServiceCard from "./ServiceCard";


export default function WhatIDo() {
  const featuredService = services.find((service) => service.featured);
  const otherServices = services.filter((service) => !service.featured);

  return (
    <section>
      <div className="container-page ">
        <div className="pb-12 pt-18 border-b-2 border-muted">
          <div className="flex flex-col mb-10">
            <span className="text-4xl font-bold text-ink mb-2">What I Do</span>
            <span className="text-xl font-bold text-muted md:w-[70%] ">
              I build modern, fast and scailable web applications with focus on
              clean code and great user experience.
            </span>
          </div>
          <div className="grid gap-3 md:gap-8 md:grid-cols-[1.1fr_0.9fr]">
            <div className="h-full">
              {featuredService && (
                <ServiceCard service={featuredService} classname="mb-5" />
              )}
            </div>
            <div className="grid gap-3">
              {otherServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
