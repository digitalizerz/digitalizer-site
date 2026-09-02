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
import { SectionLabel } from "@/components/ui/SectionLabel";

const particles = [
  { left: "18%", top: "24%", size: 2, delay: 0.2, color: "bg-brand-green" },
  { left: "28%", top: "72%", size: 3, delay: 1.6, color: "bg-brand-blue" },
  { left: "74%", top: "20%", size: 2, delay: 0.8, color: "bg-brand-green" },
  { left: "84%", top: "62%", size: 3, delay: 2.2, color: "bg-brand-blue" },
  { left: "62%", top: "78%", size: 2, delay: 1.1, color: "bg-brand-green" },
];

export function CapabilitiesHero() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 46, damping: 20 });
  const springY = useSpring(pointerY, { stiffness: 46, damping: 20 });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const parallax = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 56]);
  const artX = useTransform(springX, [-0.5, 0.5], [-8, 12]);
  const artY = useTransform(springY, [-0.5, 0.5], [-6, 8]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[85svh] flex-col justify-center overflow-hidden bg-near-black pt-24 pb-20 lg:min-h-[92svh]"
      onMouseMove={(event) => {
        if (reduce) return;
        const rect = event.currentTarget.getBoundingClientRect();
        pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
        pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_72%_42%,rgba(0,112,183,0.18),transparent_44%),radial-gradient(ellipse_at_28%_68%,rgba(99,167,58,0.12),transparent_40%)]"
      />

      {!reduce
        ? particles.map((particle) => (
            <motion.span
              key={`${particle.left}-${particle.top}`}
              aria-hidden
              className={`pointer-events-none absolute rounded-full ${particle.color}`}
              style={{
                left: particle.left,
                top: particle.top,
                width: particle.size,
                height: particle.size,
              }}
              animate={{ y: [0, -8, 0], opacity: [0.2, 0.65, 0.2] }}
              transition={{
                duration: 10,
                delay: particle.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))
        : null}

      <div className="page-shell relative grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
        <div className="relative z-10 max-w-2xl">
          <SectionLabel tone="green" className="mb-8">
            What we do
          </SectionLabel>
          <h1 className="font-sans text-[clamp(3rem,8vw,6.4rem)] font-medium leading-[0.9] tracking-[-0.04em] text-white">
            <AnimatedText
              lines={[
                "Capabilities",
                "that unlock",
                <span key="next" className="text-adapt">
                  what&apos;s next.
                </span>,
              ]}
            />
          </h1>
          <p className="mt-10 max-w-md text-lg leading-relaxed text-white/68">
            We combine human-centered thinking with modern technology to create
            digital solutions that drive real impact.
          </p>
        </div>

        <motion.div
          className="relative -mx-[var(--gutter)] min-h-[50vw] sm:min-h-[26rem] lg:mx-0 lg:-mr-[var(--gutter)] lg:min-h-[34rem] xl:min-h-[40rem]"
          style={{ y: parallax, x: reduce ? 0 : artX }}
        >
          <motion.div
            className="absolute inset-0"
            style={{ y: reduce ? 0 : artY }}
          >
            <Image
              src="/images/capabilities-hero.png"
              alt="A human profile with adaptive digital geometry emerging around it — technology extending human capability."
              width={1024}
              height={768}
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="h-full w-full object-contain object-center lg:object-right lg:scale-110"
            />
          </motion.div>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r from-near-black to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
