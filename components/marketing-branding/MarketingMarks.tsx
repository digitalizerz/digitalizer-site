import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/cn";

type MarkProps = {
  className?: string;
  style?: CSSProperties;
};

function Frame({
  className,
  style,
  children,
}: MarkProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={cn("size-9", className)}
      style={style}
      aria-hidden
    >
      {children}
    </svg>
  );
}

export function IconHeart({ className, style }: MarkProps) {
  return (
    <Frame className={className} style={style}>
      <path
        d="M24 36 C 12 27 10 18 16 14 C 20 11 23 13 24 16 C 25 13 28 11 32 14 C 38 18 36 27 24 36 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </Frame>
  );
}

export function IconIdea({ className, style }: MarkProps) {
  return (
    <Frame className={className} style={style}>
      <circle cx="24" cy="20" r="9" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <path d="M20 30 H28 M21 34 H27 M24 11 V8" fill="none" stroke="currentColor" strokeWidth="1.2" />
    </Frame>
  );
}

export function IconSignal({ className, style }: MarkProps) {
  return (
    <Frame className={className} style={style}>
      <path d="M18 32 L24 12 L30 32 Z" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <path d="M16 36 H32" fill="none" stroke="currentColor" strokeWidth="1.2" />
    </Frame>
  );
}

export function IconTrend({ className, style }: MarkProps) {
  return (
    <Frame className={className} style={style}>
      <path d="M10 34 H38 M12 28 L20 22 L26 26 L36 14" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <path d="M30 14 H36 V20" fill="none" stroke="currentColor" strokeWidth="1.2" />
    </Frame>
  );
}

export function IconBrand({ className, style }: MarkProps) {
  return (
    <Frame className={className} style={style}>
      <circle cx="24" cy="24" r="12" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="24" cy="24" r="4" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <path d="M24 12 V16 M24 32 V36 M12 24 H16 M32 24 H36" fill="none" stroke="currentColor" strokeWidth="1.2" />
    </Frame>
  );
}

export function IconContent({ className, style }: MarkProps) {
  return (
    <Frame className={className} style={style}>
      <rect x="12" y="10" width="24" height="28" rx="2" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <path d="M17 18 H31 M17 24 H31 M17 30 H26" fill="none" stroke="currentColor" strokeWidth="1.2" />
    </Frame>
  );
}

export function IconCampaign({ className, style }: MarkProps) {
  return (
    <Frame className={className} style={style}>
      <path d="M12 20 H22 L34 12 V36 L22 28 H12 Z" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M12 22 V26" fill="none" stroke="currentColor" strokeWidth="1.2" />
    </Frame>
  );
}

export function IconGrowth({ className, style }: MarkProps) {
  return (
    <Frame className={className} style={style}>
      <path d="M12 32 H36 M14 32 V22 H20 V16 H26 V12 H32 V32" fill="none" stroke="currentColor" strokeWidth="1.2" />
    </Frame>
  );
}

export function IconAnalytics({ className, style }: MarkProps) {
  return (
    <Frame className={className} style={style}>
      <circle cx="24" cy="24" r="12" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <path d="M24 24 L24 14 A10 10 0 0 1 33 28 Z" fill="none" stroke="currentColor" strokeWidth="1.2" />
    </Frame>
  );
}
