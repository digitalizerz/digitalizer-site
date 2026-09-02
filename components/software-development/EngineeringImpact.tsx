import { engineeringPrinciples, softwarePage } from "@/data/softwareCapabilities";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CodeVisual } from "@/components/software-development/CodeVisual";
import {
  IconCycle,
  IconExpand,
  IconLock,
  IconTarget,
} from "@/components/software-development/SoftwareMarks";

const icons = {
  target: IconTarget,
  lock: IconLock,
  cycle: IconCycle,
  expand: IconExpand,
} as const;

export function EngineeringImpact() {
  const { impact } = softwarePage;

  return (
    <section className="border-t border-ink/8 bg-soft-white text-ink">
      <div className="page-shell grid gap-16 pt-[clamp(8.75rem,16vw,11.25rem)] pb-[clamp(8.75rem,16vw,11.25rem)] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-20">
        <div>
          <SectionLabel tone="green">{impact.eyebrow}</SectionLabel>
          <h2 className="mt-8 max-w-xl font-sans text-[clamp(2.2rem,5vw,4.2rem)] font-medium leading-[0.95] tracking-[-0.035em]">
            <AnimatedText
              lines={[
                impact.headline[0],
                <>
                  Real business <span className="text-adapt">impact.</span>
                </>,
              ]}
            />
          </h2>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-ink/62">
            {impact.supporting}
          </p>

          <ul className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2">
            {engineeringPrinciples.map((item) => {
              const Icon = icons[item.icon];
              return (
                <li key={item.id}>
                  <Icon className="size-8 text-brand-green" />
                  <h3 className="mt-4 font-sans text-xl tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[0.98rem] leading-relaxed text-ink/60">
                    {item.description}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="lg:pt-16">
          <CodeVisual />
        </div>
      </div>
    </section>
  );
}
