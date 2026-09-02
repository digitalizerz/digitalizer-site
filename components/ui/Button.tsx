import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";

type ButtonVariant = "outline" | "outline-ink" | "ghost" | "text";

type ButtonProps = {
  href?: string;
  variant?: ButtonVariant;
  arrow?: boolean;
  className?: string;
  children: ReactNode;
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "onClick">;

const variants: Record<ButtonVariant, string> = {
  outline:
    "min-h-11 rounded-full border border-white/80 px-6 text-white transition-colors duration-500 hover:border-white hover:bg-white hover:text-near-black",
  "outline-ink":
    "min-h-11 rounded-full border border-ink px-6 text-ink transition-colors duration-500 hover:bg-ink hover:text-soft-white",
  ghost:
    "min-h-11 rounded-full px-1 text-white/80 transition-colors duration-500 hover:text-white",
  text: "min-h-11 text-ink/70 transition-colors duration-500 hover:text-ink",
};

export function Button({
  href,
  variant = "outline",
  arrow = true,
  className,
  children,
  type = "button",
  onClick,
  ...props
}: ButtonProps) {
  const classes = cn(
    "group inline-flex items-center justify-center gap-2 text-sm tracking-wide",
    variants[variant],
    className,
  );

  const content = (
    <>
      <span>{children}</span>
      {arrow ? (
        <ArrowUpRight
          aria-hidden
          className="size-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={1.75}
        />
      ) : null}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick as never}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...props}>
      {content}
    </button>
  );
}
