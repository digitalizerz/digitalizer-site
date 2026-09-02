"use client";

import { motion, useReducedMotion } from "motion/react";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";

function Terrain() {
  const reduce = useReducedMotion();
  const paths = [
    "M0 70 Q 80 40, 160 68 T 320 62 T 480 74 T 640 58 T 800 72",
    "M0 88 Q 90 64, 180 90 T 360 78 T 540 94 T 800 86",
    "M0 108 Q 70 86, 150 110 T 340 98 T 560 116 T 800 104",
    "M0 128 Q 110 108, 220 132 T 440 118 T 660 136 T 800 124",
    "M0 148 Q 80 130, 200 150 T 400 140 T 620 158 T 800 146",
  ];

  return (
    <svg
      viewBox="0 0 800 180"
      className="h-auto w-full"
      aria-hidden
      preserveAspectRatio="none"
    >
      {paths.map((d, index) => (
        <motion.path
          key={d}
          d={d}
          fill="none"
          stroke={index % 2 === 0 ? "#63A73A" : "#0070B7"}
          strokeWidth="1"
          opacity={0.28 + index * 0.06}
          initial={reduce ? false : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 1.4,
            delay: index * 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      ))}
    </svg>
  );
}

export function StoryClosing() {
  return (
    <section
      id="closing"
      className="relative overflow-hidden bg-soft-white text-ink"
    >
      <div className="page-shell section-space">
        <SectionLabel tone="light">The story continues</SectionLabel>
        <h2 className="mt-8 max-w-3xl font-sans text-[clamp(2.8rem,6.4vw,5.8rem)] font-medium leading-[0.92] tracking-[-0.04em]">
          <AnimatedText
            lines={[
              "This is just",
              <>
                the <span className="text-brand-blue">beginning.</span>
              </>,
            ]}
          />
        </h2>
        <p className="mt-8 max-w-lg text-lg leading-relaxed text-ink/62">
          Digitalizer began in 2017. We are much more interested in what happens
          next. Every challenge is an opportunity. Every idea is a chance to
          create something extraordinary together.
        </p>
        <Button href="/contact" variant="outline-ink" className="mt-12">
          Let&apos;s build what&apos;s next
        </Button>
      </div>

      <div className="mt-8 px-[var(--gutter)] pb-6 md:pb-10">
        <Terrain />
      </div>
    </section>
  );
}
