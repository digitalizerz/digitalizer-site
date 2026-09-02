import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type AnimatedTextProps = {
  lines: ReactNode[];
  className?: string;
  lineClassName?: string;
  delay?: number;
};

export function AnimatedText({
  lines,
  className,
  lineClassName,
  delay = 0,
}: AnimatedTextProps) {
  return (
    <span className={cn("block", className)}>
      {lines.map((line, index) => (
        <span key={index} className="block overflow-hidden py-[0.04em]">
          <span
            className={cn("reveal-line block", lineClassName)}
            style={{ animationDelay: `${delay + index * 0.09}s` }}
          >
            {line}
          </span>
        </span>
      ))}
    </span>
  );
}
