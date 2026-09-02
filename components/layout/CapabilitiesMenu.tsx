"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { capabilityNav, isCurrentPath } from "@/data/navigation";
import { cn } from "@/lib/cn";

export function CapabilitiesMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const current =
    isCurrentPath(pathname, "/capabilities") ||
    capabilityNav.some((item) => isCurrentPath(pathname, item.href));

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) {
          setOpen(false);
        }
      }}
    >
      <Link
        href="/capabilities"
        aria-current={current ? "page" : undefined}
        aria-expanded={open}
        aria-haspopup="true"
        className={cn(
          "relative inline-flex min-h-11 items-center text-[0.95rem] transition-colors duration-300 hover:text-white",
          current ? "text-white" : "text-white/80",
          current &&
            "after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:bg-brand-green",
        )}
        onFocus={() => setOpen(true)}
      >
        Capabilities
      </Link>

      <div
        className={cn(
          "absolute left-1/2 top-full z-50 w-[22rem] -translate-x-1/2 pt-3 transition-all duration-300",
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-1 opacity-0",
        )}
      >
        <div
          className="border border-white/10 bg-near-black/95 p-3 shadow-[0_24px_60px_-28px_rgba(0,0,0,0.8)] backdrop-blur-md"
          role="menu"
          aria-label="Capabilities"
        >
          <Link
            href="/capabilities"
            role="menuitem"
            className="flex min-h-11 items-center px-3 text-sm text-white/70 transition-colors duration-300 hover:text-white"
          >
            All capabilities
          </Link>
          <ul className="mt-1 border-t border-white/8 pt-1">
            {capabilityNav.map((item) => {
              const active = isCurrentPath(pathname, item.href);
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    role="menuitem"
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "flex min-h-12 items-center gap-3 px-3 text-sm transition-colors duration-300 hover:text-white",
                      active ? "text-white" : "text-white/70",
                    )}
                  >
                    <span className="font-mono text-[0.62rem] tracking-[0.16em] text-white/35">
                      {item.number}
                    </span>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
