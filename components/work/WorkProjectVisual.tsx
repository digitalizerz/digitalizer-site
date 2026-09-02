"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import type { WorkProject } from "@/data/projects";
import { cn } from "@/lib/cn";

export function WorkProjectVisual({ project }: { project: WorkProject }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={cn(
        "relative -mx-[var(--gutter)] min-h-[52vw] overflow-hidden sm:min-h-[24rem] lg:mx-0 lg:min-h-[32rem] xl:min-h-[38rem]",
        project.imagePosition === "right" ? "lg:-mr-[var(--gutter)]" : "lg:-ml-[var(--gutter)]",
        project.visualAlign === "end" && "lg:min-h-[34rem] xl:min-h-[40rem]",
      )}
      initial={reduce ? false : { y: 22, opacity: 0.78 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {project.theme === "dark" ? (
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(0,112,183,0.16),transparent_68%)]"
        />
      ) : null}
      <Image
        src={project.image}
        alt={project.alt}
        width={project.imageWidth}
        height={project.imageHeight}
        sizes="(min-width: 1024px) 60vw, 100vw"
        className={cn(
          "relative h-full w-full object-contain",
          project.imagePosition === "right"
            ? "object-center lg:object-right"
            : "object-center lg:object-left",
          project.visualAlign === "end" && "lg:scale-[1.06]",
        )}
      />
    </motion.div>
  );
}
