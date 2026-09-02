import type { CSSProperties } from "react";
import { accentHex } from "@/lib/accents";
import { developmentProcess } from "@/data/developmentProcess";
import {
  IconCode,
  IconGrow,
  IconLaunch,
  IconPlan,
  IconSearch,
} from "@/components/software-development/SoftwareMarks";

const icons = {
  search: IconSearch,
  plan: IconPlan,
  code: IconCode,
  launch: IconLaunch,
  grow: IconGrow,
} as const;

export function ProcessNode({
  item,
}: {
  item: (typeof developmentProcess)[number];
}) {
  const Icon = icons[item.icon];

  return (
    <article
      className="relative"
      style={{ "--accent": accentHex[item.accent] } as CSSProperties}
    >
      <p className="font-mono text-[0.7rem] tracking-[0.18em] text-white/35">
        {item.number}
      </p>
      <Icon className="mt-4 size-8 text-[var(--accent)]" />
      <h3 className="mt-5 font-sans text-xl tracking-tight text-white">
        {item.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-white/60">
        {item.description}
      </p>
    </article>
  );
}
