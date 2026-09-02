"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { isCurrentPath, navigation, primaryCta } from "@/data/navigation";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { CapabilitiesMenu } from "@/components/layout/CapabilitiesMenu";
import { MobileNavigation } from "@/components/layout/MobileNavigation";

export function Header() {
  const pathname = usePathname();
  const solid = pathname !== "/";
  const [scrolled, setScrolled] = useState(solid);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(solid || window.scrollY > 16);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [solid]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <a
        href="#main"
        className="fixed left-4 top-4 z-[80] -translate-y-16 rounded-full bg-white px-4 py-2 text-sm text-near-black transition focus:translate-y-0"
      >
        Skip to content
      </a>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,height] duration-500",
          scrolled || open
            ? "bg-near-black/75 backdrop-blur-md"
            : "bg-transparent",
        )}
      >
        <div
          className={cn(
            "page-shell flex items-center justify-between transition-[height] duration-500",
            scrolled ? "h-16" : "h-20",
          )}
        >
          <Link href="/" className="relative z-50 flex items-center" onClick={() => setOpen(false)}>
            <Image
              src="/images/digitalizer-logo.png"
              alt="Digitalizer"
              width={1600}
              height={331}
              priority
              className="h-7 w-auto md:h-8"
            />
          </Link>

          <div className="relative z-50 flex items-center gap-8">
            <nav
              aria-label="Primary"
              className="hidden items-center gap-8 lg:flex xl:gap-9"
            >
              {navigation.map((item) => {
                if (item.label === "Capabilities") {
                  return <CapabilitiesMenu key={item.href} />;
                }

                const current = isCurrentPath(pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={current ? "page" : undefined}
                    className={cn(
                      "relative text-[0.95rem] transition-colors duration-300 hover:text-white",
                      current ? "text-white" : "text-white/80",
                      current &&
                        "after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:bg-brand-green",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden lg:block">
              <Button href={primaryCta.href}>{primaryCta.label}</Button>
            </div>

            <button
              type="button"
              className="inline-flex size-11 items-center justify-center lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-navigation"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((current) => !current)}
            >
              <span className="relative block h-3 w-6" aria-hidden>
                <span
                  className={cn(
                    "absolute left-0 h-px w-full bg-white transition-transform duration-300",
                    open ? "top-1.5 rotate-45" : "top-0",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 h-px w-full bg-white transition-transform duration-300",
                    open ? "top-1.5 -rotate-45" : "top-3",
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <MobileNavigation open={open} onClose={() => setOpen(false)} />
    </>
  );
}
