"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { storyLenses } from "@/data/story";

export function StoryLenses() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-near-black pb-[var(--section-space)] text-white">
      <div className="page-shell">
        <div className="-mx-[var(--gutter)] flex snap-x snap-mandatory gap-px overflow-x-auto md:mx-0 md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-4">
          {storyLenses.map((lens, index) => (
            <motion.article
              key={lens.id}
              className="group relative h-[72vw] min-w-[78%] snap-center overflow-hidden sm:min-w-[56%] md:min-w-0 md:h-[36rem] lg:h-[42rem]"
              initial={reduce ? false : { opacity: 0.2 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.65,
                delay: index * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Image
                src={lens.image}
                alt={lens.alt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 80vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-near-black via-near-black/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-white/55">
                  {lens.title}
                </p>
                <p className="mt-3 font-sans text-2xl tracking-tight text-white md:text-[1.7rem]">
                  {lens.line}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
