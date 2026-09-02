import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Capability } from "@/data/capabilities";
import { accentHex } from "@/lib/accents";
import { cn } from "@/lib/cn";
import { MarkArc, MarkCircles, MarkFacet, MarkSquares } from "@/components/ui/Marks";
import { AdaptiveMesh } from "@/components/visuals/AdaptiveMesh";
import { ConnectedMesh } from "@/components/visuals/ConnectedMesh";
import { DataWave } from "@/components/visuals/DataWave";
import { SystemGrid } from "@/components/visuals/SystemGrid";

const marks = {
  experience: MarkCircles,
  technology: MarkSquares,
  agile: MarkFacet,
  marketing: MarkArc,
} as const;

export function CapabilityPanel({ item }: { item: Capability }) {
  const color = accentHex[item.accent];
  const Mark = marks[item.id as keyof typeof marks] ?? MarkCircles;

  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-md border border-white/10 bg-dark-surface p-7 md:p-8",
        "transition-[border-color,box-shadow] duration-500",
        "hover:border-[color-mix(in_srgb,var(--accent)_55%,transparent)]",
        "hover:shadow-[0_0_40px_-18px_var(--accent)]",
        "focus-within:border-[color-mix(in_srgb,var(--accent)_55%,transparent)]",
      )}
      style={{ "--accent": color } as CSSProperties}
    >
      <div className="flex items-start justify-between gap-4">
        <p className="font-mono text-[clamp(2rem,4vw,3rem)] leading-none tracking-tight text-white/22">
          {item.number}
        </p>
        <Mark className="size-9 text-[var(--accent)]" />
      </div>

      <h3 className="mt-8 font-sans text-[1.7rem] leading-[1.05] tracking-tight text-white md:text-[2rem]">
        {item.titleLines[0]}
        <br />
        {item.titleLines[1]}
      </h3>

      <p className="mt-5 max-w-md text-[0.98rem] leading-relaxed text-white/62">
        {item.pageDescription}
      </p>

      <ul className="mt-6 space-y-2">
        {item.pageExpertise.map((skill) => (
          <li
            key={skill}
            className="flex items-start gap-2 text-sm text-white/70"
          >
            <span aria-hidden className="mt-1.5 text-[var(--accent)]">
              ›
            </span>
            <span>{skill}</span>
          </li>
        ))}
      </ul>

      <Link
        href={item.href}
        className="mt-8 inline-flex min-h-11 w-fit items-center gap-3 text-sm text-white/80 transition-colors duration-300 hover:text-white"
      >
        Learn more
        <span
          aria-hidden
          className="inline-flex size-8 items-center justify-center rounded-full border border-[color-mix(in_srgb,var(--accent)_55%,transparent)] text-[var(--accent)] transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        >
          <ArrowUpRight className="size-3.5" strokeWidth={1.7} />
        </span>
      </Link>

      <div className="mt-auto pt-8 opacity-70 transition-[opacity,transform] duration-500 group-hover:translate-x-1 group-hover:opacity-100">
        <CapabilityVisual visual={item.visual} color={color} />
      </div>
    </article>
  );
}

function CapabilityVisual({
  visual,
  color,
}: {
  visual: Capability["visual"];
  color: string;
}) {
  const className = "h-24 w-full";

  if (visual === "grid") return <SystemGrid color={color} className={className} />;
  if (visual === "mesh") return <ConnectedMesh color={color} className={className} />;
  if (visual === "wave") return <DataWave color={color} className={className} />;
  return <AdaptiveMesh color={color} className={className} />;
}
