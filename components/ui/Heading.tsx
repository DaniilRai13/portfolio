import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type HeadingLevel = "h1" | "h2" | "h3";

interface HeadingProps {
  children: ReactNode;
  as?: HeadingLevel;
  id?: string;
  className?: string;
}

const LEVEL_CLASSES: Record<HeadingLevel, string> = {
  h1: "heading-1",
  h2: "heading-2",
  h3: "heading-3",
};

export default function Heading({
  children,
  as: Tag = "h2",
  id,
  className = "",
}: HeadingProps) {
  return (
    <Tag id={id} className={twMerge(LEVEL_CLASSES[Tag], className)}>
      {children}
    </Tag>
  );
}
