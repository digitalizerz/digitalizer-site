import { contact, contactPage } from "@/data/contact";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ContactForm } from "@/components/contact/ContactForm";

export function ContactHero() {
  return (
    <section className="bg-soft-white pt-28 pb-[clamp(6.5rem,12vw,9rem)] text-ink">
      <div className="page-shell grid items-start gap-16 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-20">
        <div className="max-w-xl lg:sticky lg:top-28">
          <SectionLabel tone="green" className="mb-8">
            {contactPage.eyebrow}
          </SectionLabel>
          <h1 className="font-sans text-[clamp(2.7rem,6.6vw,5.4rem)] font-medium leading-[0.9] tracking-[-0.04em]">
            <AnimatedText
              lines={[
                "Let’s start",
                "a project",
                <>
                  <span className="text-adapt">together.</span>
                </>,
              ]}
            />
          </h1>
          <p className="mt-10 max-w-md text-lg leading-relaxed text-ink/62">
            {contactPage.supporting}
          </p>
          <div className="mt-10 flex flex-col">
            <a
              href={contact.phone.href}
              className="inline-flex min-h-11 items-center font-sans text-xl tracking-tight text-ink transition-colors duration-300 hover:text-brand-green"
            >
              {contact.phone.label}
            </a>
            <a
              href={contact.email.href}
              className="inline-flex min-h-11 items-center font-sans text-xl tracking-tight text-ink transition-colors duration-300 hover:text-brand-green"
            >
              {contact.email.label}
            </a>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
