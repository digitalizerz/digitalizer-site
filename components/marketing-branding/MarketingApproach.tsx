import { marketingPage, marketingPrinciples } from "@/data/marketingCapabilities";
import { accentHex } from "@/lib/accents";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import {
  IconHeart,
  IconIdea,
  IconSignal,
  IconTrend,
} from "@/components/marketing-branding/MarketingMarks";

const icons = {
  heart: IconHeart,
  idea: IconIdea,
  signal: IconSignal,
  trend: IconTrend,
} as const;

export function MarketingApproach() {
  const { approach } = marketingPage;

  return (
    <section className="border-t border-white/8 bg-near-black text-white">
      <div className="page-shell pt-[clamp(8.75rem,16vw,11.25rem)] pb-[clamp(8.75rem,16vw,11.25rem)]">
        <SectionLabel tone="green">{approach.eyebrow}</SectionLabel>
        <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-end lg:gap-16">
          <h2 className="max-w-3xl font-sans text-[clamp(2.2rem,5vw,4.3rem)] font-medium leading-[0.94] tracking-[-0.035em]">
            <AnimatedText
              lines={[
                <>
                  <span className="text-brand-green">Strategy</span> with{" "}
                  <span className="text-brand-green">soul.</span>
                </>,
                <>
                  <span className="text-brand-blue">Creativity</span> with{" "}
                  <span className="text-brand-blue">purpose.</span>
                </>,
              ]}
            />
          </h2>
          <p className="max-w-md text-lg leading-relaxed text-white/62">
            {approach.supporting}
          </p>
        </div>

        <ul className="mt-24 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {marketingPrinciples.map((item) => {
            const Icon = icons[item.icon];
            return (
              <li key={item.id} className="border-t border-white/12 pt-7">
                <Icon
                  className="size-8"
                  style={{ color: accentHex[item.accent] }}
                />
                <h3
                  className="mt-5 font-sans text-[1.45rem] tracking-tight"
                  style={{ color: accentHex[item.accent] }}
                >
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {item.description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
