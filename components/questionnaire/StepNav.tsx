import { Check } from "lucide-react";
import { contact } from "@/data/contact";
import { questionnairePage, questionnaireSteps } from "@/data/websiteQuestionnaire";
import { cn } from "@/lib/cn";

export function DesktopStepNav({
  current,
  furthest,
  onSelect,
}: {
  current: number;
  furthest: number;
  onSelect: (step: number) => void;
}) {
  return (
    <aside className="hidden lg:block">
      <ol className="relative">
        {questionnaireSteps.map((step, index) => {
          const active = current === step.id;
          const complete = furthest > step.id;
          const reachable = step.id <= furthest;
          return (
            <li key={step.id} className="relative flex gap-4 pb-8 last:pb-0">
              {index < questionnaireSteps.length - 1 ? (
                <span
                  aria-hidden
                  className="absolute top-8 left-[15px] h-[calc(100%-1.25rem)] w-px bg-ink/12"
                />
              ) : null}
              <button
                type="button"
                disabled={!reachable}
                onClick={() => onSelect(step.id)}
                className={cn(
                  "relative z-10 grid size-8 shrink-0 place-items-center rounded-full border text-[0.7rem] font-mono",
                  active && "border-brand-green bg-brand-green text-white",
                  complete && !active && "border-brand-green bg-white text-brand-green",
                  !active && !complete && "border-ink/25 bg-white text-ink/40",
                  reachable ? "cursor-pointer" : "cursor-default",
                )}
                aria-current={active ? "step" : undefined}
              >
                {complete && !active ? <Check className="size-3.5" aria-hidden /> : step.number}
              </button>
              <button
                type="button"
                disabled={!reachable}
                onClick={() => onSelect(step.id)}
                className="text-left"
              >
                <p className={cn("text-[0.95rem]", active ? "text-ink" : "text-ink/45")}>
                  {step.title}
                </p>
                <p className="mt-1 text-sm text-ink/40">{step.summary}</p>
              </button>
            </li>
          );
        })}
      </ol>

      <div className="mt-14">
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-ink/40">
          {questionnairePage.help.label}
        </p>
        <a
          href={contact.email.href}
          className="mt-3 inline-flex min-h-11 items-center text-ink/75 transition-colors hover:text-ink"
        >
          {contact.email.label}
        </a>
        <a
          href={contact.phone.href}
          className="flex min-h-11 items-center text-ink/75 transition-colors hover:text-ink"
        >
          {contact.phone.label}
        </a>
      </div>
    </aside>
  );
}

export function MobileStepProgress({ current }: { current: number }) {
  const step = questionnaireSteps[current - 1];

  return (
    <div className="lg:hidden">
      <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-brand-green">
        Step {current} of {questionnaireSteps.length}
      </p>
      <p className="mt-2 text-xl tracking-tight">{step?.title}</p>
      <ol className="mt-5 flex items-center gap-2" aria-hidden>
        {questionnaireSteps.map((item) => (
          <li
            key={item.id}
            className={cn(
              "h-1.5 flex-1 rounded-full",
              item.id <= current ? "bg-brand-green" : "bg-ink/12",
            )}
          />
        ))}
      </ol>
    </div>
  );
}
