"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";

const labels = [
  { text: "Scalable Architecture", top: "8%", left: "4%" },
  { text: "Clean Code Quality", top: "22%", right: "2%" },
  { text: "Seamless Integration", bottom: "28%", left: "0%" },
  { text: "Reliable Performance", bottom: "12%", right: "6%" },
] as const;

export function ExplodedArchitecture() {
  const reduce = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 40, damping: 22 });
  const springY = useSpring(pointerY, { stiffness: 40, damping: 22 });
  const x = useTransform(springX, [-0.5, 0.5], [-10, 12]);
  const y = useTransform(springY, [-0.5, 0.5], [-8, 10]);

  return (
    <motion.div
      className="relative h-full min-h-[22rem] w-full sm:min-h-[26rem] lg:min-h-[34rem] xl:min-h-[40rem]"
      onMouseMove={(event) => {
        if (reduce) return;
        const rect = event.currentTarget.getBoundingClientRect();
        pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
        pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
      }}
      initial={reduce ? false : { y: 18, opacity: 0.7 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div className="absolute inset-0" style={{ x: reduce ? 0 : x, y: reduce ? 0 : y }}>
        <Image
          src="/images/software-hero.png"
          alt="An exploded software architecture: interface, code, systems and infrastructure stacked as connected planes."
          width={985}
          height={1024}
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="h-full w-full object-contain object-center lg:object-right lg:scale-[1.08]"
        />
      </motion.div>

      <ul className="pointer-events-none absolute inset-0 hidden xl:block" aria-hidden>
        {labels.map((label, index) => (
          <motion.li
            key={label.text}
            className="absolute font-mono text-[0.62rem] uppercase tracking-[0.18em] text-ink/45"
            style={label}
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 + index * 0.08 }}
          >
            {label.text}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
