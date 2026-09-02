import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionLabelProps = {
  children: ReactNode;
  className?: string;
  tone?: "dark" | "light" | "green";
};

const tones = {
  dark: "text-white/55",
  light: "text-ink/50",
  green: "text-brand-green",
} as const;

export function SectionLabel({
  children,
  className,
  tone = "dark",
}: SectionLabelProps) {
  return (
    <p
      className={cn(
        "font-mono text-[0.7rem] font-normal uppercase tracking-[0.26em]",
        tones[tone],
        className,
      )}
    >
      {children}
    </p>
  );
}
