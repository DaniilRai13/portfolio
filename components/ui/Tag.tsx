import type { CSSProperties, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type TagProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

/** Контурная «наклейка» — используется для плавающих тегов в hero */
export default function Tag({ children, className = "", style }: TagProps) {
  return (
    <span
      style={style}
      className={twMerge(
        "inline-flex items-center rounded-full border-[1.5px] border-ink bg-paper px-3 py-1 text-xs font-bold text-strong",
        className,
      )}
    >
      {children}
    </span>
  );
}
