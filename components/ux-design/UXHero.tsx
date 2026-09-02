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
import { uxPage } from "@/data/uxCapabilities";
import { primaryCta } from "@/data/navigation";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function UXHero() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 42, damping: 22 });
  const springY = useSpring(pointerY, { stiffness: 42, damping: 22 });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const parallax = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 52]);
  const artX = useTransform(springX, [-0.5, 0.5], [-8, 10]);
  const artY = useTransform(springY, [-0.5, 0.5], [-6, 8]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[85svh] flex-col justify-center overflow-hidden bg-near-black pt-28 pb-20 text-white lg:min-h-[92svh]"
      onMouseMove={(event) => {
        if (reduce) return;
        const rect = event.currentTarget.getBoundingClientRect();
        pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
        pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_74%_40%,rgba(0,112,183,0.16),transparent_46%),radial-gradient(ellipse_at_24%_70%,rgba(99,167,58,0.12),transparent_40%)]"
      />

      <div className="page-shell relative grid items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="relative z-10 max-w-xl">
          <nav aria-label="Breadcrumb" className="mb-7">
            <ol className="flex flex-wrap items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-white/38">
              {uxPage.breadcrumb.map((item, index) => (
                <li key={item.label} className="flex items-center gap-2">
                  {index > 0 ? <span aria-hidden>&gt;</span> : null}
                  {"href" in item && item.href ? (
                    <Link
                      href={item.href}
                      className="inline-flex min-h-11 items-center transition-colors duration-300 hover:text-white"
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
            {uxPage.eyebrow}
          </SectionLabel>

          <h1 className="font-sans text-[clamp(2.8rem,7.4vw,6rem)] font-medium leading-[0.9] tracking-[-0.04em]">
            <AnimatedText
              lines={[
                "From human",
                "complexity to",
                <span key="next" className="text-adapt">
                  intuitive
                </span>,
                "experiences.",
              ]}
            />
          </h1>

          <p className="mt-10 max-w-md text-lg leading-relaxed text-white/66">
            {uxPage.supporting}
          </p>

          <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
            <Button href={primaryCta.href}>{primaryCta.label}</Button>
            <Button href="/capabilities" variant="ghost">
              Explore all capabilities
            </Button>
          </div>
        </div>

        <motion.div
          className="relative -mx-[var(--gutter)] min-h-[52vw] sm:min-h-[26rem] lg:mx-0 lg:-mr-[var(--gutter)] lg:min-h-[34rem] xl:min-h-[40rem]"
          style={{ y: parallax, x: reduce ? 0 : artX }}
        >
          <motion.div className="absolute inset-0" style={{ y: reduce ? 0 : artY }}>
            <Image
              src="/images/ux-hero.png"
              alt="A human profile surrounded by research insights, journey maps, personas and interface fragments — human insight becoming digital experience."
              width={1024}
              height={682}
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
