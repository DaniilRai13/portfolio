import type { ReactNode } from "react";
import { CircleAlert, CircleCheck } from "lucide-react";
import { twMerge } from "tailwind-merge";

type AlertVariant = "success" | "error";

interface AlertProps {
  children: ReactNode;
  variant?: AlertVariant;
  className?: string;
}

const VARIANTS = {
  success: { icon: CircleCheck, role: "status", classes: "bg-mint/60 text-success" },
  error: { icon: CircleAlert, role: "alert", classes: "bg-peach-soft text-error" },
};

export default function Alert({
  children,
  variant = "success",
  className = "",
}: AlertProps) {
  const { icon: Icon, role, classes } = VARIANTS[variant];

  return (
    <div
      role={role}
      className={twMerge(
        "flex items-start gap-3 rounded-field p-4 text-sm font-medium",
        classes,
        className,
      )}
    >
      <Icon size={20} aria-hidden="true" className="mt-px shrink-0" />
      <div>{children}</div>
    </div>
  );
}
