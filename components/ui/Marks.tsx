import { cn } from "@/lib/cn";

type MarkProps = {
  className?: string;
};

export function MarkCircles({ className }: MarkProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={cn("size-10", className)}
      aria-hidden
    >
      <circle
        key="a"
        cx="19"
        cy="24"
        r="11"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <circle
        key="b"
        cx="29"
        cy="24"
        r="11"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}

export function MarkSquares({ className }: MarkProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={cn("size-10", className)}
      aria-hidden
    >
      <rect
        key="a"
        x="10"
        y="10"
        width="18"
        height="18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <rect
        key="b"
        x="20"
        y="20"
        width="18"
        height="18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}

export function MarkFacet({ className }: MarkProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={cn("size-10", className)}
      aria-hidden
    >
      <path
        d="M24 8 L40 36 H8 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MarkArc({ className }: MarkProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={cn("size-10", className)}
      aria-hidden
    >
      <path
        d="M10 30 A14 14 0 1 1 38 30"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M24 30 V16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
