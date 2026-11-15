import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export type SectionBackground = "paper" | "cream";

interface SectionProps {
  children: ReactNode;
  background?: SectionBackground;
  labelledBy?: string;
  id?: string;
  className?: string;
}

const BACKGROUND_CLASSES: Record<SectionBackground, string> = {
  paper: "bg-paper",
  cream: "bg-cream",
};

export default function Section({
  children,
  background = "paper",
  labelledBy,
  id,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={twMerge("section-space", BACKGROUND_CLASSES[background], className)}
    >
      <div className="container-page">{children}</div>
    </section>
  );
}
