"use client";

import { motion, useReducedMotion } from "motion/react";
import { storyBeliefs } from "@/data/story";
import { accentHex } from "@/lib/accents";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { SectionLabel } from "@/components/ui/SectionLabel";

const orbit = [
  { top: "2%", left: "50%", transform: "translateX(-50%)" },
  { top: "26%", left: "100%", transform: "translateX(-100%)" },
  { top: "76%", left: "82%", transform: "translateX(-50%)" },
  { top: "76%", left: "18%", transform: "translateX(-50%)" },
  { top: "26%", left: "0%", transform: "none" },
] as const;

export function PhilosophySystem() {
  const reduce = useReducedMotion();

  return (
    <section
      id="beliefs"
      className="relative overflow-hidden bg-near-black text-white"
    >
      <div className="page-shell section-space grid items-center gap-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
        <div>
          <SectionLabel>Our vision</SectionLabel>
          <h2 className="mt-8 max-w-xl font-sans text-[clamp(2.4rem,5vw,4.6rem)] font-medium leading-[0.96] tracking-[-0.035em]">
            <AnimatedText
              lines={[
                "A future where",
                "technology adapts",
                <>
                  to <span className="text-brand-green">humanity</span> —
                </>,
                "not the other way around.",
              ]}
            />
          </h2>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-white/62">
            Harmonizing humanity and high tech. Every principle we hold connects
            back to that center.
          </p>
        </div>

        <div className="relative mx-auto hidden aspect-square w-full max-w-[36rem] lg:block">
          <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden>
            {[28, 40, 52].map((radius, index) => (
              <motion.circle
                key={radius}
                cx="50"
                cy="50"
                r={radius}
                fill="none"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="0.25"
                initial={reduce ? false : { pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.9, delay: 0.1 * index }}
              />
            ))}
          </svg>

          <div className="absolute top-1/2 left-1/2 z-10 flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-near-black">
            <span className="size-4 rounded-full bg-linear-to-br from-brand-green to-brand-blue" />
          </div>

          {storyBeliefs.map((belief, index) => {
            const point = orbit[index];
            return (
              <motion.article
                key={belief.title}
                className="absolute w-44"
                style={{
                  top: point.top,
                  left: point.left,
                  transform: point.transform,
                }}
                initial={reduce ? false : { opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: 0.12 * index }}
              >
                <span
                  className="mb-2 block size-2 rounded-full"
                  style={{ background: accentHex[belief.accent] }}
                />
                <h3 className="font-sans text-sm tracking-tight text-white">
                  {belief.title}
                </h3>
                <p className="mt-1 text-[0.8rem] leading-relaxed text-white/55">
                  {belief.text}
                </p>
              </motion.article>
            );
          })}
        </div>

        <ul className="space-y-8 lg:hidden">
          {storyBeliefs.map((belief) => (
            <li key={belief.title} className="border-t border-white/10 pt-6">
              <span
                className="mb-3 block size-2 rounded-full"
                style={{ background: accentHex[belief.accent] }}
              />
              <h3 className="font-sans text-xl tracking-tight">{belief.title}</h3>
              <p className="mt-2 max-w-md text-white/62">{belief.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
