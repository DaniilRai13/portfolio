import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Size = "md" | "lg";

type CommonProps = {
  size?: Size;
  arrow?: boolean;
  className?: string;
  children: ReactNode;
};

type LinkProps = CommonProps &
  Omit<ComponentPropsWithoutRef<"a">, keyof CommonProps> & { href: string };

type NativeButtonProps = CommonProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof CommonProps> & { href?: undefined };

type ButtonProps = LinkProps | NativeButtonProps;

const base =
  "group inline-flex items-center justify-center gap-2 rounded-field border-[1.5px] border-ink font-bold bg-ink text-white" +
  "transition-[transform,box-shadow,background-color,color] duration-200 ease-out " +
  "hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_var(--color-sun)] hover:bg-brand" +
  "active:translate-x-0 active:translate-y-0 active:shadow-none " +
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand " +
  "disabled:pointer-events-none disabled:opacity-50 motion-reduce:transition-none";


const sizes: Record<Size, string> = {
  md: "px-5 py-3.5 text-[15px]",
  lg: "px-7 py-4 text-base",
};

export default function Button({
  size = "md",
  arrow = false,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = `${base} ${sizes[size]} ${className}`;

  const content = (
    <>
      {children}
      {arrow && (
        <span
          aria-hidden="true"
          className="transition-transform duration-200 group-hover:translate-x-1"
        >
          &rarr;
        </span>
      )}
    </>
  );

  if ("href" in props && props.href) {
    return (
      <a {...(props as ComponentPropsWithoutRef<"a">)} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      {...(props as ComponentPropsWithoutRef<"button">)}
      className={classes}
    >
      {content}
    </button>
  );
}