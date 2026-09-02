"use client";

import { motion, useReducedMotion } from "motion/react";

type ConnectedMeshProps = {
  color?: string;
  className?: string;
};

const nodes = [
  [36, 72],
  [78, 38],
  [118, 86],
  [164, 28],
  [198, 68],
  [246, 42],
  [288, 88],
  [332, 34],
  [372, 70],
] as const;

const links: Array<[number, number]> = [
  [0, 1],
  [0, 2],
  [1, 2],
  [1, 3],
  [2, 4],
  [3, 4],
  [3, 5],
  [4, 5],
  [4, 6],
  [5, 7],
  [6, 7],
  [6, 8],
  [7, 8],
];

export function ConnectedMesh({
  color = "#8A6BC4",
  className,
}: ConnectedMeshProps) {
  const reduce = useReducedMotion();

  return (
    <svg viewBox="0 0 400 120" className={className} aria-hidden>
      {links.map(([from, to], index) => {
        const [x1, y1] = nodes[from];
        const [x2, y2] = nodes[to];
        return (
          <motion.line
            key={`${from}-${to}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={color}
            strokeWidth="1.1"
            opacity="0.5"
            initial={reduce ? false : { opacity: 0 }}
            whileInView={{ opacity: 0.5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: index * 0.04 }}
          />
        );
      })}
      {nodes.map(([cx, cy], index) => (
        <motion.circle
          key={`${cx}-${cy}`}
          cx={cx}
          cy={cy}
          r={index === 4 || index === 1 ? 2.6 : 1.8}
          fill={color}
          opacity="0.7"
          initial={reduce ? false : { scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.2 + index * 0.04 }}
        />
      ))}
    </svg>
  );
}
