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

export function IconResearch({ className }: MarkProps) {
  return (
    <Frame className={className}>
      <circle cx="20" cy="20" r="8" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <path d="M26 26 L34 34" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="20" cy="20" r="3" fill="none" stroke="currentColor" strokeWidth="1.2" />
    </Frame>
  );
}

export function IconArchitecture({ className }: MarkProps) {
  return (
    <Frame className={className}>
      <rect x="18" y="8" width="12" height="8" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <rect x="8" y="28" width="12" height="8" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <rect x="28" y="28" width="12" height="8" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <path d="M24 16 V22 M14 28 V22 H34 V28" fill="none" stroke="currentColor" strokeWidth="1.2" />
    </Frame>
  );
}

export function IconInteraction({ className }: MarkProps) {
  return (
    <Frame className={className}>
      <path d="M16 12 L32 20 L22 22 L20 32 Z" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M26 28 L34 36" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </Frame>
  );
}

export function IconPrototype({ className }: MarkProps) {
  return (
    <Frame className={className}>
      <rect x="10" y="12" width="28" height="22" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <path d="M10 18 H38 M16 24 H28 M16 28 H24" fill="none" stroke="currentColor" strokeWidth="1.2" />
    </Frame>
  );
}

export function IconTesting({ className }: MarkProps) {
  return (
    <Frame className={className}>
      <rect x="11" y="10" width="26" height="28" rx="2" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <path d="M18 24 L22 28 L30 18" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </Frame>
  );
}
