import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export default function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={twMerge(
        "inline-block rounded-full bg-brand-soft px-3 py-1 text-xs font-bold text-brand-deep",
        className,
      )}
    >
      {children}
    </span>
  );
}
