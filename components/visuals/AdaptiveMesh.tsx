"use client";

import { motion, useReducedMotion } from "motion/react";

type AdaptiveMeshProps = {
  color?: string;
  className?: string;
};

const contours = [
  "M0 88 C 42 70, 70 108, 118 86 S 176 42, 228 68 S 300 110, 400 74",
  "M0 64 C 56 40, 96 92, 154 58 S 220 20, 278 48 S 340 88, 400 44",
  "M0 102 C 64 96, 110 72, 168 98 S 250 120, 320 86 S 368 70, 400 96",
  "M20 50 C 80 28, 130 66, 190 36 S 270 8, 340 32",
];

export function AdaptiveMesh({
  color = "#63A73A",
  className,
}: AdaptiveMeshProps) {
  const reduce = useReducedMotion();

  return (
    <svg
      viewBox="0 0 400 120"
      className={className}
      aria-hidden
      preserveAspectRatio="none"
    >
      {contours.map((d, index) => (
        <motion.path
          key={d}
          d={d}
          fill="none"
          stroke={color}
          strokeWidth={index === 1 ? 1.25 : 1}
          opacity={0.22 + index * 0.1}
          initial={reduce ? false : { pathLength: 0.2 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: index * 0.07 }}
        />
      ))}
      {[
        [118, 86],
        [228, 68],
        [154, 58],
        [278, 48],
        [190, 36],
        [320, 86],
      ].map(([cx, cy], index) => (
        <motion.circle
          key={`${cx}-${cy}`}
          cx={cx}
          cy={cy}
          r={index % 2 === 0 ? 2.2 : 1.6}
          fill={color}
          opacity="0.55"
          initial={reduce ? false : { scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.35 + index * 0.05 }}
        />
      ))}
    </svg>
  );
}
