import Image from "next/image";

import photo from "../../../assets/photo.jpg";
import { siteConfig } from "@/data/site.data";

/** Ширины полосок декоративного штрихкода, px */
const BARCODE = [3, 1, 2, 1, 1, 3, 1, 2, 2, 1, 3, 1, 1, 2, 1, 3, 2, 1];

/** «Пропуск разработчика» на ремешке: наклонён, выпрямляется при наведении */
export default function AboutBadge() {
  return (
    <div className="mx-auto w-full max-w-[280px] sm:max-w-[340px] lg:sticky lg:top-12">
      <div aria-hidden="true" className="mx-auto h-16 w-5 border-x-[1.5px] border-ink bg-brand" />

      <div className="relative -mt-1 -rotate-3 rounded-panel border-2 border-ink bg-cream p-5 shadow-[8px_8px_0_var(--color-sun)] transition-transform duration-300 hover:rotate-0 motion-reduce:transition-none">
        <div
          aria-hidden="true"
          className="mx-auto mb-4 h-2.5 w-14 rounded-full border-[1.5px] border-ink bg-paper"
        />

        <div
          aria-hidden="true"
          className="flex items-center justify-between text-[11px] font-bold tracking-[0.14em] text-strong uppercase"
        >
          <span>Developer ID</span>
          <span>DR-2026</span>
        </div>

        <div className="relative mt-3 aspect-4/5 overflow-hidden rounded-card border-[1.5px] border-ink bg-sky">
          <Image
            src={photo}
            alt={`${siteConfig.name}, ${siteConfig.role.toLowerCase()}`}
            fill
            placeholder="blur"
            sizes="300px"
            className="object-cover object-[50%_20%]"
          />
        </div>

        <p className="mt-4 text-2xl font-extrabold tracking-tight text-ink">{siteConfig.name}</p>
        <p className="text-sm text-body">{siteConfig.role}</p>

        <div className="mt-4 flex items-end justify-between gap-4">
          <span aria-hidden="true" className="flex h-9 items-stretch gap-[2px]">
            {BARCODE.map((width, index) => (
              <span key={index} className="bg-ink" style={{ width }} />
            ))}
          </span>
          <span className="rounded-full bg-mint px-2.5 py-1 text-[11px] font-bold text-mint-deep">
            Available
          </span>
        </div>
      </div>
    </div>
  );
}
