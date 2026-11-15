import { useId, type ComponentPropsWithRef, type ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface CommonProps {
  label?: string;
  error?: string;
}

type FieldProps = CommonProps & ComponentPropsWithRef<"input">;
type TextAreaProps = CommonProps & ComponentPropsWithRef<"textarea">;

function useFieldIds(id?: string) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  return { inputId, errorId: `${inputId}-error` };
}

function FieldShell({
  inputId,
  errorId,
  label,
  error,
  children,
}: CommonProps & { inputId: string; errorId: string; children: ReactNode }) {
  return (
    <div>
      {label && (
        <label htmlFor={inputId} className="mb-1.5 block text-sm font-bold text-ink">
          {label}
        </label>
      )}

      {children}

      {error && (
        <p id={errorId} className="mt-1 text-sm text-error">
          {error}
        </p>
      )}
    </div>
  );
}

export default function Field({ label, error, id, className = "", ...props }: FieldProps) {
  const { inputId, errorId } = useFieldIds(id);

  return (
    <FieldShell inputId={inputId} errorId={errorId} label={label} error={error}>
      <input
        {...props}
        id={inputId}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={twMerge("field", className)}
      />
    </FieldShell>
  );
}

export function TextArea({ label, error, id, className = "", ...props }: TextAreaProps) {
  const { inputId, errorId } = useFieldIds(id);

  return (
    <FieldShell inputId={inputId} errorId={errorId} label={label} error={error}>
      <textarea
        {...props}
        id={inputId}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={twMerge("field min-h-28 resize-y", className)}
      />
    </FieldShell>
  );
}
