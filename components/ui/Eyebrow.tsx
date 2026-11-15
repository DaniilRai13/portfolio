import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface EyebrowProps {
  children: ReactNode;
  className?: string;
}

export default function Eyebrow({ children, className = "" }: EyebrowProps) {
  return <p className={twMerge("eyebrow mb-3", className)}>{children}</p>;
}
