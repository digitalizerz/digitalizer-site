import { softwarePage } from "@/data/softwareCapabilities";
import { primaryCta } from "@/data/navigation";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { Button } from "@/components/ui/Button";

export function SoftwareCTA() {
  const { cta } = softwarePage;

  return (
    <section className="bg-near-black text-white">
      <div className="page-shell grid items-end gap-10 pt-[clamp(8.75rem,16vw,12.5rem)] pb-[clamp(7.5rem,14vw,10rem)] lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
        <h2 className="max-w-3xl font-sans text-[clamp(2.4rem,5.4vw,4.6rem)] font-medium leading-[0.95] tracking-[-0.035em]">
          <AnimatedText
            lines={[
              cta.headline[0],
              <>
                extraordinary <span className="text-adapt">together.</span>
              </>,
            ]}
          />
        </h2>
        <div>
          <p className="max-w-md text-lg leading-relaxed text-white/62">
            {cta.supporting}
          </p>
          <Button href={primaryCta.href} className="mt-8">
            {primaryCta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
