"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { AnimatedText } from "@/components/ui/AnimatedText";

export function StoryIntro() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 64]);

  return (
    <section
      id="intro"
      ref={sectionRef}
      data-story-chapter="intro"
      className="relative flex min-h-svh flex-col justify-center overflow-hidden bg-soft-white text-ink"
    >
      <div className="page-shell relative grid items-center gap-12 py-28 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-8 lg:py-32">
        <div className="relative z-10 max-w-xl">
          <h1 className="font-sans text-[clamp(3.1rem,8vw,6.4rem)] font-medium leading-[0.9] tracking-[-0.04em]">
            <AnimatedText
              lines={[
                "We exist",
                "to close the",
                <>
                  <span className="text-brand-green">human</span>
                  <span className="text-ink/25">—</span>
                  <span className="text-brand-blue">tech</span>
                </>,
                "gap.",
              ]}
            />
          </h1>

          <p className="mt-10 max-w-md text-lg leading-relaxed text-ink/62 lg:mt-12">
            Technology is most powerful when it amplifies human potential — not
            when it asks people to adapt to the machine.
          </p>
        </div>

        <motion.div
          className="relative -mx-[var(--gutter)] min-h-[18rem] sm:min-h-[24rem] lg:mx-0 lg:-mr-[var(--gutter)] lg:min-h-[32rem] xl:min-h-[38rem]"
          style={{ y: imageY }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-[12%] rounded-full bg-[radial-gradient(circle,rgba(99,167,58,0.16),rgba(0,112,183,0.1)_42%,transparent_70%)]"
          />
          <Image
            src="/images/story-chameleon.png"
            alt="A chameleon dissolving from living green scales into digital blue fragments — adaptation between nature and technology."
            width={1024}
            height={682}
            priority
            sizes="(min-width: 1024px) 48vw, 100vw"
            className="relative h-full w-full object-contain object-center lg:object-right lg:scale-110"
          />
        </motion.div>
      </div>
    </section>
  );
}
