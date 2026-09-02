"use client";

import { motion, useReducedMotion } from "motion/react";

const particles = [
  { x: 18, y: 22, size: 2, color: "#63A73A", delay: 0.02 },
  { x: 78, y: 18, size: 3, color: "#0070B7", delay: 0.08 },
  { x: 28, y: 68, size: 2, color: "#0070B7", delay: 0.12 },
  { x: 70, y: 72, size: 2, color: "#63A73A", delay: 0.05 },
  { x: 36, y: 34, size: 2, color: "#63A73A", delay: 0.18 },
  { x: 62, y: 30, size: 3, color: "#0070B7", delay: 0.1 },
  { x: 44, y: 58, size: 2, color: "#63A73A", delay: 0.16 },
  { x: 56, y: 62, size: 2, color: "#0070B7", delay: 0.22 },
  { x: 22, y: 48, size: 2, color: "#0070B7", delay: 0.14 },
  { x: 80, y: 46, size: 2, color: "#63A73A", delay: 0.2 },
  { x: 40, y: 20, size: 2, color: "#0070B7", delay: 0.06 },
  { x: 60, y: 80, size: 2, color: "#63A73A", delay: 0.24 },
  { x: 50, y: 28, size: 3, color: "#0070B7", delay: 0.11 },
  { x: 48, y: 74, size: 2, color: "#63A73A", delay: 0.19 },
  { x: 32, y: 52, size: 2, color: "#0070B7", delay: 0.15 },
  { x: 68, y: 50, size: 2, color: "#63A73A", delay: 0.09 },
] as const;

const lines = [
  { x1: 24, y1: 40, x2: 38, y2: 44 },
  { x1: 76, y1: 38, x2: 64, y2: 46 },
  { x1: 30, y1: 62, x2: 42, y2: 56 },
  { x1: 72, y1: 64, x2: 60, y2: 54 },
  { x1: 46, y1: 36, x2: 54, y2: 42 },
] as const;

export function HumanTechGap() {
  const reduce = useReducedMotion();

  return (
    <section
      id="gap"
      data-story-chapter="gap"
      className="relative flex min-h-svh flex-col justify-center overflow-hidden bg-near-black text-white"
    >
      <div className="page-shell relative flex min-h-[80vh] flex-col justify-center py-28 lg:min-h-svh lg:py-32">
        <motion.p
          className="text-center font-mono text-[0.72rem] uppercase tracking-[0.28em] text-white/40"
          initial={reduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
        >
          There was a gap.
        </motion.p>

        <div className="relative mt-12 grid min-h-[22rem] items-center lg:mt-16 lg:min-h-[28rem] lg:grid-cols-[1fr_minmax(16rem,1.1fr)_1fr]">
          <motion.p
            className="text-center font-sans text-[clamp(2.4rem,7vw,6.5rem)] font-medium tracking-[-0.04em] text-white/42 lg:text-left"
            initial={reduce ? false : { x: -28, opacity: 0.35 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            TECHNOLOGY
          </motion.p>

          <div className="relative mx-auto h-40 w-full max-w-md lg:h-64">
            <svg
              viewBox="0 0 100 100"
              className="h-full w-full"
              aria-hidden
            >
              {lines.map((line, index) => (
                <motion.line
                  key={`${line.x1}-${line.y1}`}
                  x1={line.x1}
                  y1={line.y1}
                  x2={line.x2}
                  y2={line.y2}
                  stroke="rgba(255,255,255,0.18)"
                  strokeWidth="0.25"
                  initial={reduce ? false : { pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.15 + index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              ))}
              {particles.map((particle) => (
                <motion.circle
                  key={`${particle.x}-${particle.y}`}
                  r={particle.size * 0.18}
                  fill={particle.color}
                  initial={
                    reduce
                      ? { cx: 50, cy: 50, opacity: 0.55 }
                      : {
                          cx: particle.x,
                          cy: particle.y,
                          opacity: 0.15,
                        }
                  }
                  whileInView={{
                    cx: 50 + (particle.x - 50) * 0.22,
                    cy: 50 + (particle.y - 50) * 0.22,
                    opacity: 0.85,
                  }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 0.85,
                    delay: particle.delay,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              ))}
            </svg>
          </div>

          <motion.p
            className="text-center font-sans text-[clamp(2.4rem,7vw,6.5rem)] font-medium tracking-[-0.04em] text-white/42 lg:text-right"
            initial={reduce ? false : { x: 28, opacity: 0.35 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            PEOPLE
          </motion.p>
        </div>

        <motion.div
          className="mx-auto mt-12 max-w-sm text-center text-lg leading-relaxed text-white/62 lg:mt-16"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <p>We saw it.</p>
          <p className="mt-2">We felt it.</p>
          <p className="mt-2">We decided to do something about it.</p>
        </motion.div>
      </div>
    </section>
  );
}
