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

export function IconCube({ className }: MarkProps) {
  return (
    <Frame className={className}>
      <path d="M24 8 L40 16 V32 L24 40 L8 32 V16 Z" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <path d="M24 8 V40 M8 16 L24 24 L40 16" fill="none" stroke="currentColor" strokeWidth="1.2" />
    </Frame>
  );
}

export function IconGlobe({ className }: MarkProps) {
  return (
    <Frame className={className}>
      <circle cx="24" cy="24" r="13" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <path d="M11 24 H37 M24 11 C18 16 18 32 24 37 C30 32 30 16 24 11" fill="none" stroke="currentColor" strokeWidth="1.2" />
    </Frame>
  );
}

export function IconDevice({ className }: MarkProps) {
  return (
    <Frame className={className}>
      <rect x="16" y="8" width="16" height="32" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <path d="M22 36 H26" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </Frame>
  );
}

export function IconNodes({ className }: MarkProps) {
  return (
    <Frame className={className}>
      <circle cx="14" cy="16" r="3" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="34" cy="16" r="3" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="24" cy="34" r="3" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <path d="M17 16 H31 M16 19 L22 32 M32 19 L26 32" fill="none" stroke="currentColor" strokeWidth="1.2" />
    </Frame>
  );
}

export function IconShield({ className }: MarkProps) {
  return (
    <Frame className={className}>
      <path d="M24 8 L36 13 V24 C36 32 30 37 24 40 C18 37 12 32 12 24 V13 Z" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <path d="M18 24 L22 28 L30 18" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </Frame>
  );
}

export function IconTarget({ className }: MarkProps) {
  return (
    <Frame className={className}>
      <circle cx="24" cy="24" r="12" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="24" cy="24" r="5" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="24" cy="24" r="1.4" fill="currentColor" />
    </Frame>
  );
}

export function IconLock({ className }: MarkProps) {
  return (
    <Frame className={className}>
      <rect x="13" y="22" width="22" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <path d="M18 22 V17 A6 6 0 0 1 30 17 V22" fill="none" stroke="currentColor" strokeWidth="1.2" />
    </Frame>
  );
}

export function IconCycle({ className }: MarkProps) {
  return (
    <Frame className={className}>
      <path d="M14 20 A10 10 0 0 1 34 18" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <path d="M34 28 A10 10 0 0 1 14 30" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <path d="M32 12 V19 H39 M16 36 V29 H9" fill="none" stroke="currentColor" strokeWidth="1.2" />
    </Frame>
  );
}

export function IconExpand({ className }: MarkProps) {
  return (
    <Frame className={className}>
      <rect x="16" y="16" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <path d="M12 20 V12 H20 M36 20 V12 H28 M12 28 V36 H20 M36 28 V36 H28" fill="none" stroke="currentColor" strokeWidth="1.2" />
    </Frame>
  );
}

export function IconSearch({ className }: MarkProps) {
  return (
    <Frame className={className}>
      <circle cx="21" cy="21" r="9" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <path d="M28 28 L36 36" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </Frame>
  );
}

export function IconPlan({ className }: MarkProps) {
  return (
    <Frame className={className}>
      <rect x="13" y="10" width="22" height="28" rx="2" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <path d="M18 18 H30 M18 24 H30 M18 30 H26" fill="none" stroke="currentColor" strokeWidth="1.2" />
    </Frame>
  );
}

export function IconCode({ className }: MarkProps) {
  return (
    <Frame className={className}>
      <path d="M18 16 L10 24 L18 32 M30 16 L38 24 L30 32" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    </Frame>
  );
}

export function IconLaunch({ className }: MarkProps) {
  return (
    <Frame className={className}>
      <path d="M24 8 L30 26 H18 Z" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <path d="M20 28 L18 38 M28 28 L30 38 M24 26 V36" fill="none" stroke="currentColor" strokeWidth="1.2" />
    </Frame>
  );
}

export function IconGrow({ className }: MarkProps) {
  return (
    <Frame className={className}>
      <path d="M10 34 H38 M14 34 V26 H20 V20 H26 V14 H32 V34" fill="none" stroke="currentColor" strokeWidth="1.2" />
    </Frame>
  );
}
