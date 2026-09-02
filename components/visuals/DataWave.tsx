"use client";

import { motion, useReducedMotion } from "motion/react";

type DataWaveProps = {
  color?: string;
  className?: string;
};

const waves = [
  "M0 68 Q 40 28, 80 68 T 160 68 T 240 68 T 320 68 T 400 68",
  "M0 80 Q 40 48, 80 80 T 160 80 T 240 80 T 320 80 T 400 80",
  "M0 52 Q 40 18, 80 52 T 160 52 T 240 52 T 320 52 T 400 52",
];

export function DataWave({
  color = "#E0893C",
  className,
}: DataWaveProps) {
  const reduce = useReducedMotion();

  return (
    <svg
      viewBox="0 0 400 120"
      className={className}
      aria-hidden
      preserveAspectRatio="none"
    >
      {waves.map((d, index) => (
        <motion.path
          key={d}
          d={d}
          fill="none"
          stroke={color}
          strokeWidth={index === 0 ? 1.4 : 1}
          opacity={0.28 + index * 0.14}
          initial={reduce ? false : { pathLength: 0.15 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: index * 0.08 }}
        />
      ))}
      {[80, 160, 240, 320].map((cx, index) => (
        <motion.circle
          key={cx}
          cx={cx}
          cy={index % 2 === 0 ? 52 : 68}
          r="2"
          fill={color}
          opacity="0.7"
          initial={reduce ? false : { scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.4 + index * 0.06 }}
        />
      ))}
    </svg>
  );
}
