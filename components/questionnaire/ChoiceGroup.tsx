import { Check } from "lucide-react";
import { cn } from "@/lib/cn";

type Option = { id: string; label: string };

export function ChipSelect({
  legend,
  options,
  value,
  onChange,
  error,
}: {
  legend: string;
  options: readonly Option[];
  value: string[];
  onChange: (next: string[]) => void;
  error?: string;
}) {
  const toggle = (id: string) => {
    onChange(value.includes(id) ? value.filter((item) => item !== id) : [...value, id]);
  };

  return (
    <fieldset>
      <legend className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-ink/55">
        {legend}
      </legend>
      <div className="mt-4 flex flex-wrap gap-2">
        {options.map((option) => {
          const selected = value.includes(option.id);
          return (
            <button
              key={option.id}
              type="button"
              aria-pressed={selected}
              onClick={() => toggle(option.id)}
              className={cn(
                "inline-flex min-h-11 items-center gap-2 rounded-full border px-4 text-sm transition-colors duration-300",
                selected
                  ? "border-brand-green bg-brand-green/10 text-ink"
                  : "border-ink/20 bg-white text-ink/75 hover:border-ink/40",
              )}
            >
              {selected ? <Check className="size-3.5 text-brand-green" aria-hidden /> : null}
              {option.label}
            </button>
          );
        })}
      </div>
      {error ? <p className="mt-3 text-sm text-ink/60">{error}</p> : null}
    </fieldset>
  );
}

export function CardSelect({
  legend,
  options,
  value,
  onChange,
  error,
  required,
}: {
  legend: string;
  options: readonly Option[];
  value?: string;
  onChange: (next: string) => void;
  error?: string;
  required?: boolean;
}) {
  return (
    <fieldset>
      <legend className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-ink/55">
        {legend}
        {required ? <span className="text-ink/35"> *</span> : null}
      </legend>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {options.map((option) => {
          const selected = value === option.id;
          return (
            <button
              key={option.id}
              type="button"
              aria-pressed={selected}
              onClick={() => onChange(option.id)}
              className={cn(
                "flex min-h-14 items-center justify-between rounded-lg border px-4 py-3 text-left text-sm transition-colors duration-300",
                selected
                  ? "border-brand-green bg-brand-green/10 text-ink"
                  : "border-ink/20 bg-white text-ink/80 hover:border-ink/40",
              )}
            >
              <span>{option.label}</span>
              <span
                className={cn(
                  "grid size-5 place-items-center rounded-full border",
                  selected ? "border-brand-green bg-brand-green text-white" : "border-ink/25",
                )}
                aria-hidden
              >
                {selected ? <Check className="size-3" /> : null}
              </span>
            </button>
          );
        })}
      </div>
      {error ? <p className="mt-3 text-sm text-ink/60">{error}</p> : null}
    </fieldset>
  );
}
