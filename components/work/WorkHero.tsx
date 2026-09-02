"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { workPage, workProjects } from "@/data/projects";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { SectionLabel } from "@/components/ui/SectionLabel";

const preview = workProjects[0];

export function WorkHero() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const artY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 36]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[70svh] flex-col overflow-hidden bg-soft-white pt-28 pb-6 text-ink lg:min-h-[82svh] lg:pb-8"
    >
      <div className="page-shell relative grid flex-1 items-end gap-12 lg:min-h-[calc(82svh-8.5rem)] lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:grid-rows-1">
        <div className="relative z-10 max-w-xl lg:self-center">
          <SectionLabel tone="green" className="mb-8">
            {workPage.eyebrow}
          </SectionLabel>
          <h1 className="font-sans text-[clamp(2.6rem,6.4vw,5.2rem)] font-medium leading-[0.9] tracking-[-0.04em]">
            <AnimatedText
              lines={[
                "Work built around",
                "real people and",
                <span key="problems" className="text-adapt">
                  real problems.
                </span>,
              ]}
            />
          </h1>
          <p className="mt-10 max-w-md text-lg leading-relaxed text-ink/62">
            {workPage.supporting}
          </p>
        </div>

        <motion.div
          aria-hidden
          className="relative -mx-[var(--gutter)] min-h-[46vw] sm:min-h-[22rem] lg:mx-0 lg:-mr-[var(--gutter)] lg:h-[28rem] lg:min-h-0 xl:h-[32rem]"
          style={{ y: artY }}
        >
          <motion.div
            className="absolute inset-0"
            initial={reduce ? false : { y: 16, opacity: 0.76 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={preview.image}
              alt=""
              width={1024}
              height={576}
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="h-full w-full origin-bottom-right object-contain object-bottom scale-[1.12] lg:object-right-bottom lg:scale-[1.16]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
