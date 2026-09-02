import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { SoftwareCapability } from "@/data/softwareCapabilities";
import { accentHex } from "@/lib/accents";
import { primaryCta } from "@/data/navigation";
import {
  IconCube,
  IconDevice,
  IconGlobe,
  IconNodes,
  IconShield,
} from "@/components/software-development/SoftwareMarks";

const icons = {
  cube: IconCube,
  globe: IconGlobe,
  device: IconDevice,
  nodes: IconNodes,
  shield: IconShield,
} as const;

export function ExpertiseNode({ item }: { item: SoftwareCapability }) {
  const color = accentHex[item.accent];
  const Icon = icons[item.icon];

  return (
    <article
      className="group relative flex min-h-0 flex-col"
      style={{ "--accent": color } as CSSProperties}
    >
      <p className="font-mono text-[0.7rem] tracking-[0.18em] text-white/35">
        {item.number}
      </p>
      <Icon className="mt-4 size-8 text-[var(--accent)] transition-opacity duration-500 group-hover:opacity-100 opacity-80" />
      <h3 className="mt-5 font-sans text-[1.15rem] leading-tight tracking-tight text-white md:text-[1.25rem]">
        {item.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-white/60">
        {item.description}
      </p>
      <Link
        href={primaryCta.href}
        className="mt-5 inline-flex min-h-11 w-fit items-center gap-2 text-sm text-white/75 transition-colors duration-300 hover:text-white"
      >
        Learn more
        <ArrowUpRight
          aria-hidden
          className="size-3.5 text-[var(--accent)] transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={1.7}
        />
      </Link>
    </article>
  );
}
