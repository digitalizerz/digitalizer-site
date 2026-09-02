import type { CSSProperties } from "react";
import type { AgileStage } from "@/data/agileCapabilities";
import { accentHex } from "@/lib/accents";
import {
  IconBacklog,
  IconKanban,
  IconRetro,
  IconScrum,
  IconSprint,
} from "@/components/agile/AgileMarks";

const icons = {
  scrum: IconScrum,
  kanban: IconKanban,
  backlog: IconBacklog,
  sprint: IconSprint,
  retro: IconRetro,
} as const;

export function DeliveryStage({ item }: { item: AgileStage }) {
  const Icon = icons[item.icon];

  return (
    <article
      className="group relative"
      style={{ "--accent": accentHex[item.accent] } as CSSProperties}
    >
      <p className="font-mono text-[0.7rem] tracking-[0.18em] text-ink/35">
        {item.number}
      </p>
      <Icon className="mt-4 size-8 text-[var(--accent)] transition-opacity duration-500 group-hover:opacity-100 opacity-80" />
      <h3 className="mt-5 font-sans text-[1.15rem] leading-tight tracking-tight text-ink md:text-[1.25rem]">
        {item.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-ink/60">
        {item.description}
      </p>
    </article>
  );
}
