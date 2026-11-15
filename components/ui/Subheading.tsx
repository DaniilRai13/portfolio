import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface SubheadingProps {
  children: ReactNode;
  className?: string;
}

export default function Subheading({ children, className = "" }: SubheadingProps) {
  return <p className={twMerge("subheading", className)}>{children}</p>;
}
