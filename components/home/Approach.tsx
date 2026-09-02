"use client";

import type { CSSProperties, PointerEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { approachStages, type ApproachStage } from "@/data/approach";
import { accentHex } from "@/lib/accents";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

function StageField({ stage }: { stage: ApproachStage }) {
  const color = accentHex[stage.accent];

  return (
    <svg
      viewBox="0 0 220 72"
      className="mt-10 h-16 w-full opacity-30 transition-opacity duration-500 group-hover:opacity-90 group-focus-within:opacity-90"
      aria-hidden
    >
      {stage.id === "understand" ? (
        <path
          d="M4 48 C 28 48, 36 18, 62 28 S 98 62, 128 40 S 176 8, 216 30"
          fill="none"
          stroke={color}
          strokeWidth="1.2"
        />
      ) : null}
      {stage.id === "design" ? (
        <>
          {[0, 1, 2, 3, 4].flatMap((column) =>
            [0, 1].map((row) => (
              <rect
                key={`${column}-${row}`}
                x={18 + column * 38}
                y={18 + row * 22}
                width="16"
                height="16"
                fill="none"
                stroke={color}
                strokeWidth="1.1"
              />
            )),
          )}
        </>
      ) : null}
      {stage.id === "build" ? (
        [18, 34, 22, 46, 28, 40, 20].map((height, index) => (
          <rect
            key={index}
            x={20 + index * 28}
            y={64 - height}
            width="10"
            height={height}
            fill="none"
            stroke={color}
            strokeWidth="1.1"
          />
        ))
      ) : null}
      {stage.id === "adapt" ? (
        <path
          d="M4 36 Q 32 8, 60 36 T 116 36 T 172 36 T 216 36"
          fill="none"
          stroke={color}
          strokeWidth="1.2"
        />
      ) : null}
    </svg>
  );
}

function Stage({ stage, index }: { stage: ApproachStage; index: number }) {
  const reduce = useReducedMotion();
  const color = accentHex[stage.accent];

  const onMove = (event: PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty(
      "--mx",
      `${event.clientX - rect.left}px`,
    );
    event.currentTarget.style.setProperty(
      "--my",
      `${event.clientY - rect.top}px`,
    );
  };

  return (
    <motion.article
      onPointerMove={onMove}
      initial={reduce ? false : { opacity: 0.45 }}
      whileInView={reduce ? undefined : { opacity: 1 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{
        duration: 0.65,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(
        "group relative flex flex-col py-10 md:py-0",
        "md:px-6 lg:px-8",
        index > 0 ? "border-t border-white/10 md:border-t-0 md:border-l" : "",
      )}
      style={
        {
          "--accent": color,
        } as CSSProperties
      }
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-within:opacity-100"
        style={{
          background:
            "radial-gradient(280px circle at var(--mx, 50%) var(--my, 20%), color-mix(in srgb, var(--accent) 22%, transparent), transparent 68%)",
        }}
      />

      <span
        className="font-mono text-[clamp(2.75rem,5vw,4.5rem)] leading-none tracking-tight text-white/20 transition-colors duration-500 group-hover:text-[var(--accent)] group-focus-within:text-[var(--accent)]"
      >
        {stage.number}
      </span>

      <h3 className="mt-6 font-sans text-3xl tracking-tight text-white md:text-[2rem]">
        {stage.title}
      </h3>
      <span
        aria-hidden
        className="mt-3 block h-px w-0 bg-[var(--accent)] transition-[width] duration-500 group-hover:w-12 group-focus-within:w-12"
      />

      <p className="mt-5 max-w-sm text-[0.98rem] leading-relaxed text-white/62">
        {stage.description}
      </p>

      <ArrowUpRight
        aria-hidden
        className="mt-6 size-4 text-[var(--accent)] transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        strokeWidth={1.6}
      />

      <StageField stage={stage} />
    </motion.article>
  );
}

export function Approach() {
  return (
    <section
      id="approach"
      className="section-space relative bg-near-black scroll-mt-24"
    >
      <div className="page-shell">
        <Reveal>
          <SectionLabel>How we work</SectionLabel>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 lg:mt-24 lg:grid-cols-4">
          {approachStages.map((stage, index) => (
            <Stage key={stage.id} stage={stage} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
