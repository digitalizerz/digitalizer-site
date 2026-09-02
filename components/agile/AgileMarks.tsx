import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type MarkProps = {
  className?: string;
};

function Frame({ className, children }: MarkProps & { children: ReactNode }) {
  return (
    <svg viewBox="0 0 48 48" className={cn("size-9", className)} aria-hidden>
      {children}
    </svg>
  );
}

export function IconScrum({ className }: MarkProps) {
  return (
    <Frame className={className}>
      <circle cx="24" cy="24" r="12" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <path d="M24 15 V25 L31 29" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </Frame>
  );
}

export function IconKanban({ className }: MarkProps) {
  return (
    <Frame className={className}>
      <rect x="10" y="10" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <path d="M19 10 V38 M29 10 V38 M10 18 H19 M19 24 H29 M29 20 H38" fill="none" stroke="currentColor" strokeWidth="1.2" />
    </Frame>
  );
}

export function IconBacklog({ className }: MarkProps) {
  return (
    <Frame className={className}>
      <path d="M14 14 H34 V18 H14 Z M12 22 H36 V26 H12 Z M16 30 H32 V34 H16 Z" fill="none" stroke="currentColor" strokeWidth="1.2" />
    </Frame>
  );
}

export function IconSprint({ className }: MarkProps) {
  return (
    <Frame className={className}>
      <rect x="12" y="12" width="24" height="24" rx="2" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <path d="M18 12 V18 H30 V12 M18 24 H30 M18 29 H26" fill="none" stroke="currentColor" strokeWidth="1.2" />
    </Frame>
  );
}

export function IconRetro({ className }: MarkProps) {
  return (
    <Frame className={className}>
      <path d="M14 20 A10 10 0 1 1 14 30" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <path d="M14 14 V21 H21" fill="none" stroke="currentColor" strokeWidth="1.2" />
    </Frame>
  );
}
