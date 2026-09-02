import { agilePage } from "@/data/agileCapabilities";
import { primaryCta } from "@/data/navigation";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { Button } from "@/components/ui/Button";

export function AgileCTA() {
  const { cta } = agilePage;

  return (
    <section className="border-t border-ink/8 bg-soft-white text-ink">
      <div className="page-shell grid items-end gap-10 pt-[clamp(10rem,16vw,12.5rem)] pb-[clamp(7.5rem,14vw,10rem)] lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
        <h2 className="max-w-3xl font-sans text-[clamp(2.3rem,5.2vw,4.5rem)] font-medium leading-[0.95] tracking-[-0.035em]">
          <AnimatedText
            lines={[
              cta.headline[0],
              <>
                next idea <span className="text-adapt">forward.</span>
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
