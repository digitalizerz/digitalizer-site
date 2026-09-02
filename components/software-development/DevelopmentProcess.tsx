"use client";

import { motion, useReducedMotion } from "motion/react";
import { developmentProcess, developmentProcessIntro } from "@/data/developmentProcess";
import { accentHex } from "@/lib/accents";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ProcessNode } from "@/components/software-development/ProcessNode";

export function DevelopmentProcess() {
  const reduce = useReducedMotion();

  return (
    <section className="border-t border-white/8 bg-near-black text-white">
      <div className="page-shell pt-[clamp(8.75rem,16vw,11.25rem)] pb-10">
        <SectionLabel tone="green">{developmentProcessIntro.eyebrow}</SectionLabel>
        <h2 className="mt-8 max-w-3xl font-sans text-[clamp(2.2rem,5vw,4.2rem)] font-medium leading-[0.95] tracking-[-0.035em]">
          <AnimatedText
            lines={[
              developmentProcessIntro.headline[0],
              <>
                Predictable <span className="text-adapt">outcomes.</span>
              </>,
            ]}
          />
        </h2>

        <div className="relative mt-20 lg:mt-24">
          <div className="mb-8 hidden lg:grid lg:grid-cols-5 lg:gap-x-6 xl:gap-x-8" aria-hidden>
            {developmentProcess.map((item, index) => (
              <div key={item.id} className="relative flex items-center">
                {index < developmentProcess.length - 1 ? (
                  <motion.span
                    className="absolute left-2 right-[-100%] top-1/2 origin-left border-t border-dashed border-white/20"
                    initial={reduce ? false : { scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.45, delay: 0.12 + index * 0.12 }}
                  />
                ) : null}
                <motion.span
                  className="relative z-10 size-2 rounded-full"
                  style={{ background: accentHex[item.accent] }}
                  initial={reduce ? false : { scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.3, delay: index * 0.12 }}
                />
              </div>
            ))}
          </div>

          <div className="relative lg:grid lg:grid-cols-5 lg:gap-x-6 xl:gap-x-8">
            <div
              aria-hidden
              className="absolute top-3 bottom-6 left-[0.3rem] w-px bg-white/15 lg:hidden"
            />
            {developmentProcess.map((item, index) => (
              <motion.div
                key={item.id}
                className="relative py-8 first:pt-0 last:pb-0 lg:py-0"
                initial={reduce ? false : { opacity: 0.35 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: index * 0.12 }}
              >
                <span
                  aria-hidden
                  className="absolute top-8 left-0 size-2 -translate-x-[3px] rounded-full lg:hidden"
                  style={{ background: accentHex[item.accent] }}
                />
                <div className="pl-7 lg:pl-0">
                  <ProcessNode item={item} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
