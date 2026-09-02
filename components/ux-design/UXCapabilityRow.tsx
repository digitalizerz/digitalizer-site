import type { CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";
import type { UXCapability } from "@/data/uxCapabilities";
import { accentHex } from "@/lib/accents";
import {
  IconArchitecture,
  IconInteraction,
  IconPrototype,
  IconResearch,
  IconTesting,
} from "@/components/ux-design/UXMarks";

const icons = {
  research: IconResearch,
  architecture: IconArchitecture,
  interaction: IconInteraction,
  prototype: IconPrototype,
  testing: IconTesting,
} as const;

export function UXCapabilityRow({ item }: { item: UXCapability }) {
  const Icon = icons[item.icon];

  return (
    <article
      className="group grid items-start gap-5 border-t border-ink/10 py-8 transition-colors duration-500 last:border-b hover:border-ink/20 md:grid-cols-[auto_auto_minmax(0,1fr)_auto] md:gap-8 md:py-10"
      style={{ "--accent": accentHex[item.accent] } as CSSProperties}
    >
      <Icon className="size-9 text-[var(--accent)] transition-opacity duration-500 group-hover:opacity-100 opacity-80" />
      <p className="font-mono text-[clamp(1.8rem,3vw,2.6rem)] leading-none tracking-tight text-ink/18 transition-colors duration-500 group-hover:text-ink/32">
        {item.number}
      </p>
      <div className="max-w-2xl">
        <h3 className="font-sans text-xl tracking-tight text-ink md:text-[1.55rem]">
          {item.title}
        </h3>
        <p className="mt-3 text-[0.98rem] leading-relaxed text-ink/60">
          {item.description}
        </p>
      </div>
      <ArrowUpRight
        aria-hidden
        className="mt-1 size-4 text-ink/30 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--accent)] md:justify-self-end"
        strokeWidth={1.6}
      />
    </article>
  );
}
