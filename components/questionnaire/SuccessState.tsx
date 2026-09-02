import { contact } from "@/data/contact";
import { questionnairePage } from "@/data/websiteQuestionnaire";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function SuccessState() {
  return (
    <div className="rounded-lg border border-ink/12 bg-white px-6 py-12 sm:px-10" role="status" aria-live="polite">
      <SectionLabel tone="green">{questionnairePage.success.eyebrow}</SectionLabel>
      <h2 className="mt-6 max-w-xl font-sans text-[clamp(2rem,4vw,3.2rem)] font-medium leading-[0.95] tracking-[-0.035em]">
        {questionnairePage.success.title}
      </h2>
      <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink/62">
        {questionnairePage.success.body}
      </p>
      <div className="mt-8 flex flex-col">
        <a
          href={contact.email.href}
          className="inline-flex min-h-11 items-center text-xl tracking-tight text-ink hover:text-brand-green"
        >
          {contact.email.label}
        </a>
        <a
          href={contact.phone.href}
          className="inline-flex min-h-11 items-center text-xl tracking-tight text-ink hover:text-brand-green"
        >
          {contact.phone.label}
        </a>
      </div>
      <Button href="/" variant="outline-ink" className="mt-10">
        Back to home
      </Button>
    </div>
  );
}
