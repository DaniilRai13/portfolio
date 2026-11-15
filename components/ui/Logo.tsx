import { twMerge } from "tailwind-merge";

import { siteConfig } from "@/data/site.data";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <span className={twMerge("inline-flex items-center gap-2", className)}>
      <span
        aria-hidden="true"
        className="rounded-xl border-2 border-ink bg-brand p-2 text-base leading-none font-bold text-brand-soft"
      >
        DR
      </span>
      <span className="text-lg font-bold text-ink">{siteConfig.name}</span>
    </span>
  );
}
