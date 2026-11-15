import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ButtonVariant = "primary" | "outline" | "light";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  type?: "button" | "submit";
  disabled?: boolean;
  /** Открыть ссылку в новой вкладке */
  external?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const LIFT =
  "hover:-translate-y-0.5 hover:shadow-btn active:translate-y-0 active:shadow-none";

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: `bg-ink text-paper hover:bg-strong ${LIFT}`,
  outline: `bg-paper text-ink ${LIFT}`,
  light: `border-paper bg-paper text-ink ${LIFT}`,
};

export default function Button({
  children,
  href,
  variant = "primary",
  type = "button",
  disabled,
  external = false,
  onClick,
  className = "",
}: ButtonProps) {
  const classes = twMerge(
    "btn group disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-none",
    VARIANT_CLASSES[variant],
    className,
  );

  if (href?.startsWith("/")) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} disabled={disabled} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

/** Стрелка, которая сдвигается при наведении на кнопку */
export function ButtonArrow({ children = "→" }: { children?: ReactNode }) {
  return (
    <span
      aria-hidden="true"
      className="inline-block transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
    >
      {children}
    </span>
  );
}
