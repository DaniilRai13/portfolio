import Image from "next/image";
import photo from "../../../assets/photo.jpg";
import Button from "@/ui/Button";

const shapes = [
  "bottom-[6%] left-[2%] size-[44%] rounded-full bg-mint z-[1]",
  "bottom-[1%] right-0 size-[31%] rounded-full bg-sun z-[1]",
  "top-[4%] right-[6%] size-[23%] rounded-full border-4 border-peach z-[1]",
  "top-1/2 left-1/2 size-[77%] -translate-x-1/2 -translate-y-1/2 rounded-full border-[1.5px] border-dashed border-ink z-[2]",
  "top-[11%] left-[6%] size-[4%] rounded-full bg-brand z-[1]",
  "top-[33%] left-[18%] size-[2%] rounded-full bg-ink z-[1]",
  "top-[40%] right-[13%] size-[3%] rotate-45 bg-coral z-[1]",
  "bottom-[17%] right-[23%] size-[8.5%] rounded-full border-[1.5px] border-ink bg-sky z-[1]",
];

const sparks = [
  "top-[29%] right-[1%] w-[8.5%]",
  "bottom-[2%] left-[8%] w-[6.5%]",
];

const chips = [
  { label: "React", className: "top-[22%] left-0 -rotate-6" },
  { label: "TypeScript", className: "top-[19%] right-0 rotate-5" },
  {
    label: "Tailwind CSS",
    className: "bottom-[19%] left-[12%] rotate-4 sm:block",
  },
];

export default function Hero() {
  return (
    <section>
      <div className="container-page ">
        <div className="grid items-center pt-0 pb-10 sm:pt-8 gap-10 md:grid-cols-[1.1fr_1fr]  border-b-2 border-muted">
          <div>
            <span className="inline-block rounded-[10px] bg-brand-soft px-3.5 py-2 text-[13px] font-bold text-brand-deep">
              Frontend Developer
            </span>

            <h1 className="min-[580]:w-[85%] md:w-auto mt-5 mb-4 text-[42px] leading-[1.05] font-extrabold tracking-tight sm:text-5xl lg:text-[64px]">
              Modern web interfaces for{" "}
              <span className="bg-[linear-gradient(transparent_62%,var(--color-sun)_62%,var(--color-sun)_88%,transparent_88%)]">
                your
              </span>{" "}
              business
            </h1>

            <p className="mb-8 max-w-[480px] text-lg leading-relaxed text-body">
              I create responsive and performant websites and web applications
              using React, TypeScript and Tailwind CSS.
            </p>

            <div className="flex flex-wrap gap-3.5">
              <Button href="#projects" className="text-paper w-full xs:w-auto">
                View my work &rarr;
              </Button>
              <Button href="#contact" className="bg-paper w-full xs:w-auto">
                Contact me
              </Button>
            </div>
          </div>

          {/* Фото и декор */}
          <div className="relative mx-auto aspect-square w-full max-w-[520px]">
            {shapes.map((cls) => (
              <span
                key={cls}
                aria-hidden="true"
                className={`absolute ${cls}`}
              />
            ))}

            {sparks.map((cls) => (
              <svg
                key={cls}
                aria-hidden="true"
                viewBox="0 0 44 44"
                className={`absolute z-2 fill-none stroke-ink stroke-[2.5] [stroke-linecap:round]
                  ${cls}`}
              >
                <path d="M22 4v12M22 28v12M4 22h12M28 22h12" />
              </svg>
            ))}

            <Image
              src={photo}
              alt="Daniil Rai"
              priority
              sizes="(min-width: 1024px) 300px, 58vw"
              className="absolute top-1/2 left-1/2 z-3 aspect-square h-auto w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-ink bg-white object-cover shadow-[10px_10px_0_var(--color-sun)]"
            />

            {chips.map(({ label, className }) => (
              <span
                key={label}
                className={`
                  absolute z-4 rounded-full border-[1.5px] border-ink bg-white px-3.5 py-2 text-[13px] font-bold
                  ${className}`}
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
