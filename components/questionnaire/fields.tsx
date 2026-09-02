import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export const fieldClass =
  "mt-2 min-h-11 w-full rounded-lg border border-ink/40 bg-white px-4 py-3 text-base text-ink shadow-[inset_0_0_0_1px_rgba(5,6,7,0.04)] outline-none transition-[border-color,box-shadow] duration-300 placeholder:text-ink/40 focus:border-ink focus:shadow-[0_0_0_3px_rgba(5,6,7,0.1)]";

export function FieldLabel({
  htmlFor,
  required,
  optional,
  children,
}: {
  htmlFor?: string;
  required?: boolean;
  optional?: boolean;
  children: ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-ink/55"
    >
      {children}
      {required ? <span className="text-ink/35"> *</span> : null}
      {optional ? <span className="text-ink/30"> Optional</span> : null}
    </label>
  );
}

export function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-2 text-sm text-ink/60">
      {message}
    </p>
  );
}

export function FieldHint({ children }: { children: ReactNode }) {
  return <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink/50">{children}</p>;
}

export function CharCount({ value, max }: { value: string; max: number }) {
  return (
    <p className="mt-2 text-right font-mono text-[0.68rem] tracking-[0.12em] text-ink/35">
      {value.length}/{max}
    </p>
  );
}

export function inputClass(invalid?: boolean) {
  return cn(fieldClass, invalid && "border-ink/70");
}
