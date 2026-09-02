"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";

const particles = [
  { left: "12%", top: "22%", size: 3, delay: 0, color: "bg-brand-green" },
  { left: "22%", top: "68%", size: 2, delay: 1.4, color: "bg-brand-blue" },
  { left: "78%", top: "18%", size: 2, delay: 0.6, color: "bg-brand-green" },
  { left: "86%", top: "58%", size: 3, delay: 2.1, color: "bg-brand-blue" },
  { left: "64%", top: "80%", size: 2, delay: 0.9, color: "bg-brand-green" },
  { left: "40%", top: "16%", size: 2, delay: 1.8, color: "bg-brand-blue" },
];

export function Hero() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 50, damping: 20 });
  const springY = useSpring(pointerY, { stiffness: 50, damping: 20 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const parallax = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 72]);
  const artX = useTransform(springX, [-0.5, 0.5], [-10, 14]);
  const artY = useTransform(springY, [-0.5, 0.5], [-8, 10]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-svh flex-col justify-center overflow-hidden bg-near-black pt-24 pb-20"
      onMouseMove={(event) => {
        if (reduce) return;
        const rect = event.currentTarget.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        pointerX.set(x);
        pointerY.set(y);
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_45%,rgba(0,112,183,0.16),transparent_42%),radial-gradient(ellipse_at_30%_70%,rgba(99,167,58,0.1),transparent_38%)]"
      />

      {!reduce
        ? particles.map((particle) => (
            <motion.span
              key={`${particle.left}-${particle.top}-${particle.delay}`}
              aria-hidden
              className={`pointer-events-none absolute rounded-full ${particle.color}`}
              style={{
                left: particle.left,
                top: particle.top,
                width: particle.size,
                height: particle.size,
              }}
              animate={{ y: [0, -10, 0], opacity: [0.25, 0.7, 0.25] }}
              transition={{
                duration: 9,
                delay: particle.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))
        : null}

      <div className="page-shell relative grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-6 xl:gap-10">
        <div className="relative z-10 max-w-2xl">
          <p className="sr-only">01</p>
          <div className="mb-8 hidden font-mono text-[0.7rem] tracking-[0.28em] text-white/35 md:block">
            01
          </div>

          <SectionLabel className="text-adapt mb-8">
            Harmonizing Humanity and High Tech
          </SectionLabel>

          <h1 className="font-sans text-[clamp(3rem,8.4vw,6.75rem)] font-medium leading-[0.9] tracking-[-0.04em] text-white">
            <AnimatedText
              lines={[
                "Technology",
                "should adapt",
                <>
                  to <span className="text-adapt">people.</span>
                </>,
              ]}
            />
          </h1>

          <p className="mt-10 max-w-md text-lg leading-relaxed text-white/68">
            We design, build, and evolve digital solutions that create
            meaningful impact — human-centered software for a transforming
            world.
          </p>

          <div className="mt-12 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <Button href="/contact">Let&apos;s build something amazing</Button>
            <Button href="/capabilities" variant="ghost">
              Our capabilities
            </Button>
          </div>
        </div>

        <motion.div
          className="relative -mx-[var(--gutter)] min-h-[52vw] sm:min-h-[28rem] lg:mx-0 lg:-mr-[var(--gutter)] lg:min-h-[38rem] xl:-mr-16 xl:min-h-[44rem]"
          style={{
            y: parallax,
            x: reduce ? 0 : artX,
          }}
        >
          <motion.div
            className="absolute inset-0"
            style={{
              y: reduce ? 0 : artY,
            }}
          >
            <Image
              src="/images/hero-human-chameleon.png"
              alt="A calm human profile merging with a chameleon of circuit light — humanity and technology in one form."
              width={1024}
              height={768}
              priority
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="h-full w-full object-contain object-center lg:object-right lg:scale-110"
            />
          </motion.div>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r from-near-black to-transparent lg:w-1/5"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-near-black to-transparent"
          />
        </motion.div>
      </div>

      <p className="page-shell mt-16 font-mono text-[0.65rem] uppercase tracking-[0.28em] text-white/30 lg:mt-24">
        Adaptive by nature
      </p>
    </section>
  );
}
