"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "motion/react";
import { capabilityNav, isCurrentPath, navigation, primaryCta } from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

type MobileNavigationProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileNavigation({ open, onClose }: MobileNavigationProps) {
  const reduce = useReducedMotion();
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKey);
    panelRef.current?.querySelector("a")?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <motion.div
      ref={panelRef}
      id="mobile-navigation"
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
      className="fixed inset-0 z-40 flex flex-col bg-near-black px-[var(--gutter)] pb-10 pt-28"
      initial={reduce ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
    >
      <nav aria-label="Mobile">
        <ul className="flex flex-col">
          {navigation.map((item, index) => (
            <li key={item.href} className="border-b border-white/10">
              <motion.div
                initial={reduce ? false : { clipPath: "inset(100% 0 0 0)" }}
                animate={{ clipPath: "inset(0% 0 0 0)" }}
                transition={{
                  duration: 0.55,
                  delay: 0.06 * index,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  aria-current={isCurrentPath(pathname, item.href) ? "page" : undefined}
                  className="flex min-h-16 items-baseline justify-between gap-6 py-4"
                >
                  <span
                    className={cn(
                      "font-sans text-3xl tracking-tight sm:text-4xl",
                      isCurrentPath(pathname, item.href) ? "text-white" : "text-white/80",
                    )}
                  >
                    {item.label}
                  </span>
                  <span className="font-mono text-xs text-white/35">
                    0{index + 1}
                  </span>
                </Link>
                {item.label === "Capabilities" ? (
                  <ul className="mb-5 space-y-1">
                    {capabilityNav.map((child) => (
                      <li key={child.label}>
                        <Link
                          href={child.href}
                          onClick={onClose}
                          className="flex min-h-11 items-center gap-3 pl-1 text-white/60 transition-colors duration-300 hover:text-white"
                        >
                          <span className="font-mono text-[0.62rem] tracking-[0.16em] text-white/30">
                            {child.number}
                          </span>
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </motion.div>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto pt-10">
        <Button href={primaryCta.href} className="w-full" onClick={onClose}>
          {primaryCta.label}
        </Button>
      </div>
    </motion.div>
  );
}
