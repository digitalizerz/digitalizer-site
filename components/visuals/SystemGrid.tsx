"use client";

import { motion, useReducedMotion } from "motion/react";

type SystemGridProps = {
  color?: string;
  className?: string;
};

function cube(x: number, y: number) {
  return {
    top: `M${x} ${y} l12 -7 12 7 -12 7 z`,
    left: `M${x} ${y} l0 16 12 7 0 -16 z`,
    right: `M${x + 24} ${y} l0 16 -12 7 0 -16 z`,
  };
}

const cubes = [
  [28, 36],
  [68, 22],
  [108, 36],
  [148, 22],
  [188, 36],
  [48, 62],
  [88, 76],
  [128, 62],
  [168, 76],
  [228, 50],
  [268, 36],
  [308, 50],
  [248, 78],
  [288, 64],
] as const;

export function SystemGrid({
  color = "#0070B7",
  className,
}: SystemGridProps) {
  const reduce = useReducedMotion();

  return (
    <svg viewBox="0 0 400 120" className={className} aria-hidden>
      <path
        d="M40 44 H 188 M 80 80 H 216 M 228 58 H 332"
        fill="none"
        stroke={color}
        strokeWidth="0.7"
        opacity="0.22"
      />
      {cubes.map(([x, y], index) => {
        const paths = cube(x, y);
        return (
          <motion.g
            key={`${x}-${y}`}
            initial={reduce ? false : { opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.025 }}
          >
            <path d={paths.top} fill="none" stroke={color} strokeWidth="1" opacity="0.7" />
            <path d={paths.left} fill="none" stroke={color} strokeWidth="1" opacity="0.38" />
            <path d={paths.right} fill="none" stroke={color} strokeWidth="1" opacity="0.52" />
          </motion.g>
        );
      })}
    </svg>
  );
}
