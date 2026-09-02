import { marketingPage } from "@/data/marketingCapabilities";
import { primaryCta } from "@/data/navigation";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { Button } from "@/components/ui/Button";

export function MarketingCTA() {
  const { cta } = marketingPage;

  return (
    <section className="relative overflow-hidden border-t border-ink/8 bg-soft-white text-ink">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 bg-[radial-gradient(circle,rgba(99,167,58,0.12),rgba(0,112,183,0.08)_46%,transparent_70%)]"
      />
      <div className="page-shell relative grid items-end gap-10 pt-[clamp(10rem,16vw,12.5rem)] pb-[clamp(7.5rem,14vw,10rem)] lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)]">
        <h2 className="max-w-3xl font-sans text-[clamp(2.2rem,5vw,4.2rem)] font-medium leading-[0.95] tracking-[-0.035em]">
          <AnimatedText
            lines={[
              cta.headline[0],
              cta.headline[1],
              <>
                forward—
                <span className="text-adapt">together.</span>
              </>,
            ]}
          />
        </h2>
        <div>
          <p className="max-w-md text-lg leading-relaxed text-ink/62">
            {cta.supporting}
          </p>
          <Button href={primaryCta.href} variant="outline-ink" className="mt-8">
            {primaryCta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
