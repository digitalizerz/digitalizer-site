"use client";

import { motion, useReducedMotion } from "motion/react";
import { originFragments } from "@/data/story";
import { AnimatedText } from "@/components/ui/AnimatedText";

export function OriginStory() {
  const reduce = useReducedMotion();

  return (
    <section
      id="origin"
      className="relative overflow-hidden bg-near-black text-white"
    >
      <div className="page-shell section-space">
        <h2 className="max-w-4xl font-sans text-[clamp(2.6rem,6vw,5.5rem)] font-medium leading-[0.94] tracking-[-0.035em]">
          <AnimatedText
            lines={[
              "Born from curiosity.",
              <>
                Built on <span className="text-brand-green">empathy.</span>
              </>,
            ]}
          />
        </h2>

        <div className="mt-20 grid gap-x-16 gap-y-14 md:grid-cols-2 lg:mt-28 lg:grid-cols-6">
          {originFragments.map((fragment, index) => (
            <motion.article
              key={fragment.lead}
              className={
                index === 0
                  ? "lg:col-span-3"
                  : index === 1
                    ? "lg:col-span-3"
                    : "lg:col-span-2"
              }
              initial={reduce ? false : { opacity: 0.25 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.6,
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-brand-green/80">
                {fragment.lead}
              </p>
              <p className="mt-4 max-w-md text-[1.05rem] leading-relaxed text-white/68">
                {fragment.text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
