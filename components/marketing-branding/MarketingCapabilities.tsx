import { marketingCapabilities, marketingPage } from "@/data/marketingCapabilities";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MarketingCapabilityRow } from "@/components/marketing-branding/MarketingCapabilityRow";

export function MarketingCapabilities() {
  const { whatWeDo } = marketingPage;

  return (
    <section className="border-t border-ink/8 bg-soft-white text-ink">
      <div className="page-shell pt-[clamp(8.75rem,16vw,11.25rem)] pb-[clamp(6.5rem,12vw,8.75rem)]">
        <SectionLabel tone="green">{whatWeDo.eyebrow}</SectionLabel>
        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end">
          <h2 className="max-w-3xl font-sans text-[clamp(2.2rem,5vw,4.2rem)] font-medium leading-[0.95] tracking-[-0.035em]">
            <AnimatedText
              lines={[
                whatWeDo.headline[0],
                <>
                  Everything <span className="text-adapt">connected.</span>
                </>,
              ]}
            />
          </h2>
          <p className="max-w-md text-lg leading-relaxed text-ink/60">
            {whatWeDo.supporting}
          </p>
        </div>

        <div className="mt-16 md:mt-20">
          {marketingCapabilities.map((item) => (
            <MarketingCapabilityRow key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
