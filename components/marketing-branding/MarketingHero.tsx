"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { marketingPage } from "@/data/marketingCapabilities";
import { primaryCta } from "@/data/navigation";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function MarketingHero() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 40, damping: 22 });
  const springY = useSpring(pointerY, { stiffness: 40, damping: 22 });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const parallax = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 44]);
  const artX = useTransform(springX, [-0.5, 0.5], [-8, 12]);
  const artY = useTransform(springY, [-0.5, 0.5], [-6, 8]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[85svh] flex-col justify-center overflow-hidden bg-soft-white pt-28 pb-20 text-ink lg:min-h-[92svh]"
      onMouseMove={(event) => {
        if (reduce) return;
        const rect = event.currentTarget.getBoundingClientRect();
        pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
        pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
      }}
    >
      <div className="page-shell relative grid items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="relative z-10 max-w-xl">
          <nav aria-label="Breadcrumb" className="mb-7">
            <ol className="flex flex-wrap items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-ink/40">
              {marketingPage.breadcrumb.map((item, index) => (
                <li key={item.label} className="flex items-center gap-2">
                  {index > 0 ? <span aria-hidden>&gt;</span> : null}
                  {"href" in item && item.href ? (
                    <Link
                      href={item.href}
                      className="inline-flex min-h-11 items-center transition-colors duration-300 hover:text-ink"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span>{item.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <SectionLabel tone="green" className="mb-8">
            {marketingPage.eyebrow}
          </SectionLabel>

          <h1 className="font-sans text-[clamp(2.7rem,6.8vw,5.5rem)] font-medium leading-[0.9] tracking-[-0.04em]">
            <AnimatedText
              lines={[
                "Build brands",
                "that connect.",
                <span key="market" className="text-adapt">
                  Market with
                </span>,
                <span key="meaning" className="text-adapt">
                  meaning.
                </span>,
              ]}
            />
          </h1>

          <p className="mt-10 max-w-md text-lg leading-relaxed text-ink/62">
            {marketingPage.supporting}
          </p>

          <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
            <Button href={primaryCta.href} variant="outline-ink">
              {primaryCta.label}
            </Button>
            <Button href="/capabilities" variant="text">
              Explore all capabilities
            </Button>
          </div>
        </div>

        <motion.div
          className="relative -mx-[var(--gutter)] min-h-[48vw] sm:min-h-[24rem] lg:mx-0 lg:-mr-[var(--gutter)] lg:min-h-[32rem] xl:min-h-[38rem]"
          style={{ y: parallax, x: reduce ? 0 : artX }}
        >
          <motion.div
            className="absolute inset-0"
            style={{ y: reduce ? 0 : artY }}
            initial={reduce ? false : { y: 14, opacity: 0.78 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="/images/marketing-hero.png"
              alt="A connected marketing system: brand, content and campaign interfaces orbiting a central digital experience."
              width={1024}
              height={576}
              priority
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="h-full w-full object-contain object-center lg:object-right lg:scale-110"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
