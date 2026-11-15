import Image from "next/image";
import photo from "../../../assets/photo.jpg";
import Button, { ButtonArrow } from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Tag from "@/components/ui/Tag";
import { sectionIds } from "@/data/links.data";
import { siteConfig } from "@/data/site.data";
import styles from "./Hero.module.css";

const WORD_START_DELAY = 100;
const WORD_DELAY = 70;

const titleWords = [
  { text: "Modern" },
  { text: "web" },
  { text: "interfaces" },
  { text: "for" },
  { text: "your", highlight: true },
  { text: "business" },
];

const title = titleWords.map((word) => word.text).join(" ");

const shapes = [
  {
    className: "bottom-[6%] left-[2%] size-[44%] rounded-full bg-mint z-[1]",
    animation: styles.floatSlow,
  },
  {
    className: "bottom-[1%] right-0 size-[31%] rounded-full bg-sun z-[1]",
    animation: styles.float,
  },
  {
    className:
      "top-[4%] right-[6%] size-[23%] rounded-full border-4 border-peach z-[1]",
    animation: styles.pulse,
  },
  {
    className:
      "top-1/2 left-1/2 size-[77%] -translate-x-1/2 -translate-y-1/2 rounded-full border-[1.5px] border-dashed border-ink z-[2]",
    animation: styles.orbit,
  },
  {
    className: "top-[11%] left-[6%] size-[4%] rounded-full bg-brand z-[1]",
    animation: styles.floatFast,
  },
  {
    className: "top-[33%] left-[18%] size-[2%] rounded-full bg-ink z-[1]",
    animation: styles.pulse,
  },
  {
    className: "top-[40%] right-[13%] size-[3%] rotate-45 bg-coral z-[1]",
    animation: styles.spin,
  },
  {
    className:
      "bottom-[17%] right-[23%] size-[8.5%] rounded-full border-[1.5px] border-ink bg-sky z-[1]",
    animation: styles.float,
  },
];

const sparks = [
  "top-[29%] right-[1%] w-[8.5%]",
  "bottom-[2%] left-[8%] w-[6.5%]",
];

const tags = [
  { label: "React", className: "top-[22%] left-0 -rotate-6" },
  { label: "TypeScript", className: "top-[19%] right-0 rotate-5" },
  {
    label: "Tailwind CSS",
    className: "bottom-[19%] left-[12%] rotate-4",
  },
];

export default function Hero() {
  return (
    <section id={sectionIds.home} className="overflow-x-clip">
      <div className="container-page">
        <div className="grid items-center gap-10 pt-8 pb-14 sm:pt-12 md:grid-cols-[1.1fr_1fr] lg:pb-20">
          {/* Текстовая часть */}
          <div>
            <span
              className={`${styles.introLabel} inline-flex items-center gap-2 rounded-[10px] bg-brand-soft px-3.5 py-2 text-[13px] font-bold text-brand-deep`}
            >
              <span
                aria-hidden="true"
                className={`${styles.statusDot} size-2 rounded-full bg-brand`}
              />
              {siteConfig.role} · Open to new projects
            </span>

            <Heading as="h1" className="mt-5 mb-4 min-[580px]:w-[85%] md:w-auto">
              <span className="sr-only">{title}</span>
              <span aria-hidden="true">
                {titleWords.map((word, index) => (
                  <span key={word.text}>
                    <span
                      className={`${styles.word} ${
                        word.highlight
                          ? "bg-[linear-gradient(transparent_62%,var(--color-sun)_62%,var(--color-sun)_88%,transparent_88%)]"
                          : ""
                      }`}
                      style={{ animationDelay: `${WORD_START_DELAY + index * WORD_DELAY}ms` }}
                    >
                      {word.text}
                    </span>{" "}
                  </span>
                ))}
              </span>
            </Heading>

            <p
              className={`${styles.description} mb-8 max-w-[480px] text-lg leading-relaxed text-body`}
              style={{ animationDelay: "350ms" }}
            >
              I create responsive and performant websites and web applications
              using React, TypeScript and Tailwind CSS.
            </p>

            <div
              className={`${styles.buttons} flex flex-wrap gap-3.5`}
              style={{ animationDelay: "500ms" }}
            >
              <Button href={`#${sectionIds.projects}`} className="w-full xs:w-auto">
                View my work <ButtonArrow />
              </Button>

              <Button
                href={`#${sectionIds.contact}`}
                variant="outline"
                className="w-full xs:w-auto"
              >
                Contact me
              </Button>
            </div>
          </div>

          {/* Фото и декоративные элементы */}
          <div className="relative mx-auto aspect-square w-full max-w-[520px]">
            {shapes.map((shape, index) => (
              <span
                key={shape.className}
                aria-hidden="true"
                className={`absolute ${shape.className} ${shape.animation}`}
                style={{ animationDelay: `${index * 180}ms` }}
              />
            ))}

            {sparks.map((cls, index) => (
              <svg
                key={cls}
                aria-hidden="true"
                viewBox="0 0 44 44"
                className={`${styles.spark} absolute z-[2] fill-none stroke-ink stroke-[2.5] [stroke-linecap:round] ${cls}`}
                style={{ animationDelay: `${index * 700}ms` }}
              >
                <path d="M22 4v12M22 28v12M4 22h12M28 22h12" />
              </svg>
            ))}

            <div
              className={`${styles.photo} absolute top-1/2 left-1/2 z-[3] aspect-square w-[58%] -translate-x-1/2 -translate-y-1/2`}
            >
              <Image
                src={photo}
                alt={`${siteConfig.name}, ${siteConfig.role.toLowerCase()}`}
                preload
                placeholder="blur"
                sizes="(min-width: 1024px) 300px, 58vw"
                className="h-full w-full rounded-full border-4 border-ink bg-white object-cover shadow-[10px_10px_0_var(--color-sun)]"
              />
            </div>

            {tags.map(({ label, className }, index) => (
              <Tag
                key={label}
                className={`${styles.tag} absolute z-[4] bg-white px-3.5 py-2 text-[13px] ${className}`}
                style={{ animationDelay: `${600 + index * 150}ms` }}
              >
                {label}
              </Tag>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
