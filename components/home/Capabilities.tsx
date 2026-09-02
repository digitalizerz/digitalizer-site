import type { CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";
import { capabilities, type Capability } from "@/data/capabilities";
import { accentHex } from "@/lib/accents";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { Button } from "@/components/ui/Button";
import { MarkArc, MarkCircles, MarkFacet, MarkSquares } from "@/components/ui/Marks";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

const marks = {
  experience: MarkCircles,
  technology: MarkSquares,
  agile: MarkFacet,
  marketing: MarkArc,
} as const;

function CapabilityRow({ item }: { item: Capability }) {
  const Mark = marks[item.id as keyof typeof marks] ?? MarkCircles;
  const color = accentHex[item.accent];

  return (
    <article
      tabIndex={0}
      className="group relative border-t border-ink/10 py-8 last:border-b last:border-ink/10 md:py-10"
      style={{ "--accent": color } as CSSProperties}
    >
      <div className="flex items-start gap-5 md:gap-8">
        <Mark className="mt-1 shrink-0 text-[var(--accent)] transition-transform duration-500 group-hover:scale-105" />

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-[0.7rem] text-ink/40">{item.number}</p>
              <h3 className="mt-2 font-sans text-xl tracking-tight text-ink md:text-[1.65rem]">
                {item.title}
              </h3>
            </div>
            <ArrowUpRight
              aria-hidden
              className="mt-6 size-4 shrink-0 text-ink/30 transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--accent)]"
              strokeWidth={1.6}
            />
          </div>

          <p className="mt-3 max-w-xl text-[0.98rem] leading-relaxed text-ink/62">
            {item.description}
          </p>

          <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 overflow-hidden opacity-100 transition-all duration-500 md:max-h-0 md:opacity-0 md:group-hover:max-h-20 md:group-hover:opacity-100 md:group-focus-within:max-h-20 md:group-focus-within:opacity-100">
            {item.expertise.map((skill) => (
              <li
                key={skill}
                className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink/45"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export function Capabilities() {
  return (
    <section
      id="capabilities"
      className="section-space scroll-mt-24 bg-soft-white text-ink"
    >
      <div className="page-shell grid gap-16 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-20 xl:gap-28">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <SectionLabel tone="light">Capabilities</SectionLabel>
          </Reveal>

          <h2 className="mt-8 font-sans text-[clamp(2.5rem,5.4vw,4.75rem)] font-medium leading-[0.95] tracking-[-0.035em] text-ink">
            <AnimatedText
              lines={[
                "End-to-end digital",
                "solutions built for",
                <>
                  <span className="text-adapt">humans.</span>
                </>,
              ]}
            />
          </h2>

          <p className="mt-8 max-w-md text-lg leading-relaxed text-ink/62">
            We combine technology and creative skill to help clients evolve —
            building human-focused experiences that create lasting value.
          </p>

          <Button
            href="/capabilities"
            variant="text"
            className="mt-10"
          >
            Explore all capabilities
          </Button>
        </div>

        <div>
          {capabilities.map((item) => (
            <CapabilityRow key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
