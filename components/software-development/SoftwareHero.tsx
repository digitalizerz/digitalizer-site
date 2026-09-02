"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { softwarePage } from "@/data/softwareCapabilities";
import { primaryCta } from "@/data/navigation";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ExplodedArchitecture } from "@/components/visuals/ExplodedArchitecture";

export function SoftwareHero() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const artY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 48]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[80svh] flex-col justify-center overflow-hidden bg-soft-white text-ink pt-28 pb-24 lg:min-h-[88svh] lg:pb-32"
    >
      <div className="page-shell relative grid items-center gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-8">
        <div className="relative z-10 max-w-xl">
          <nav aria-label="Breadcrumb" className="mb-7">
            <ol className="flex flex-wrap items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-ink/40">
              {softwarePage.breadcrumb.map((item, index) => (
                <li key={item.label} className="flex items-center gap-2">
                  {index > 0 ? <span aria-hidden>&gt;</span> : null}
                  {"href" in item && item.href ? (
                    <Link
                      href={item.href}
                      className="min-h-11 inline-flex items-center transition-colors duration-300 hover:text-ink"
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
            {softwarePage.eyebrow}
          </SectionLabel>

          <h1 className="font-sans text-[clamp(2.8rem,7vw,5.6rem)] font-medium leading-[0.92] tracking-[-0.04em]">
            <AnimatedText
              lines={[
                "We build software",
                <>
                  that <span className="text-adapt">adapts</span> with you.
                </>,
              ]}
            />
          </h1>

          <p className="mt-10 max-w-md text-lg leading-relaxed text-ink/62">
            {softwarePage.supporting}
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
          className="relative -mx-[var(--gutter)] lg:mx-0 lg:-mr-[var(--gutter)]"
          style={{ y: artY }}
        >
          <ExplodedArchitecture />
        </motion.div>
      </div>
    </section>
  );
}
