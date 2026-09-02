"use client";

import { motion, useReducedMotion } from "motion/react";
import { agilePage, agileStages } from "@/data/agileCapabilities";
import { accentHex } from "@/lib/accents";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { DeliveryStage } from "@/components/agile/DeliveryStage";

export function DeliverySystem() {
  const reduce = useReducedMotion();
  const { workflow } = agilePage;

  return (
    <section className="border-t border-ink/8 bg-soft-white text-ink">
      <div className="page-shell pt-[clamp(8.75rem,16vw,11.25rem)] pb-[clamp(8.75rem,16vw,11.25rem)]">
        <SectionLabel tone="green">{workflow.eyebrow}</SectionLabel>
        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end">
          <h2 className="max-w-xl font-sans text-[clamp(2.2rem,5vw,4.2rem)] font-medium leading-[0.95] tracking-[-0.035em]">
            <AnimatedText
              lines={[
                workflow.headline[0],
                <span key="system" className="text-adapt">
                  {workflow.headline[1]}
                </span>,
              ]}
            />
          </h2>
          <p className="max-w-md text-lg leading-relaxed text-ink/60">
            {workflow.supporting}
          </p>
        </div>

        <div className="relative mt-20 lg:mt-24">
          <div className="mb-8 hidden lg:grid lg:grid-cols-5 lg:gap-x-6" aria-hidden>
            {agileStages.map((item, index) => (
              <div key={item.id} className="relative flex items-center">
                {index < agileStages.length - 1 ? (
                  <motion.span
                    className="absolute left-2 right-[-100%] top-1/2 origin-left border-t border-dashed border-ink/15"
                    initial={reduce ? false : { scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.12 }}
                  />
                ) : null}
                <motion.span
                  className="relative z-10 size-2 rounded-full"
                  style={{ background: accentHex[item.accent] }}
                  initial={reduce ? false : { scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.28, delay: index * 0.12 }}
                />
              </div>
            ))}
          </div>

          <div className="relative lg:grid lg:grid-cols-5 lg:gap-x-6">
            <div
              aria-hidden
              className="absolute top-3 bottom-10 left-[0.3rem] w-px bg-ink/12 lg:hidden"
            />
            {agileStages.map((item, index) => (
              <motion.div
                key={item.id}
                className="relative py-8 first:pt-0 last:pb-0 lg:py-0"
                initial={reduce ? false : { opacity: 0.35 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.4, delay: index * 0.12 }}
              >
                <span
                  aria-hidden
                  className="absolute top-8 left-0 size-2 -translate-x-[3px] rounded-full lg:hidden"
                  style={{ background: accentHex[item.accent] }}
                />
                <div className="pl-7 lg:pl-0">
                  <DeliveryStage item={item} />
                </div>
              </motion.div>
            ))}
          </div>

          <p className="mt-12 flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-ink/40">
            <span aria-hidden className="text-brand-green">
              ↺
            </span>
            Iterate again
          </p>
        </div>
      </div>
    </section>
  );
}
