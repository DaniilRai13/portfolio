import About from "@/components/sections/About/About";
import Contact from "@/components/sections/Contact/Contact";
import Hero from "@/components/sections/Hero/Hero";
import HowIWork from "@/components/sections/HowIWork/HowIWork";
import Projects from "@/components/sections/Projects/Projects";
import WhatIDo from "@/components/sections/WhatIDo/WhatIDo";
import Marquee from "@/components/ui/Marquee";
import { aboutData } from "@/data/about-me.data";

const stack = aboutData.techSkills.map((skill) => skill.name);

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee items={stack} label="Tech I work with" />
      <WhatIDo />
      <Projects />
      <About />
      <HowIWork />
      <Contact />
    </>
  );
}
