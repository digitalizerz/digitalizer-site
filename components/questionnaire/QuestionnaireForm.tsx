"use client";

import { useCallback, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { ArrowLeft, Shield } from "lucide-react";
import { questionnairePage, questionnaireSteps } from "@/data/websiteQuestionnaire";
import { Button } from "@/components/ui/Button";
import { DesktopStepNav, MobileStepProgress } from "@/components/questionnaire/StepNav";
import { SuccessState } from "@/components/questionnaire/SuccessState";
import { StepAbout } from "@/components/questionnaire/steps/StepAbout";
import { StepBusiness } from "@/components/questionnaire/steps/StepBusiness";
import { StepLook } from "@/components/questionnaire/steps/StepLook";
import { StepProject } from "@/components/questionnaire/steps/StepProject";
import { StepWebsite } from "@/components/questionnaire/steps/StepWebsite";
import {
  flattenZodErrors,
  questionnaireDefaults,
  questionnaireSchemas,
  type QuestionnaireFormValues,
} from "@/lib/questionnaire/schema";
import { cn } from "@/lib/cn";

export function QuestionnaireForm() {
  const [step, setStep] = useState(1);
  const [furthest, setFurthest] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [turnstileToken, setTurnstileToken] = useState(
    process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ? "" : "dev-ok",
  );

  const form = useForm<QuestionnaireFormValues>({
    defaultValues: questionnaireDefaults,
    shouldUseNativeValidation: false,
  });

  const current = questionnaireSteps[step - 1];
  const honeypotRef = useRef<HTMLInputElement>(null);

  const validateStep = useCallback(
    (target: number) => {
      const schema = questionnaireSchemas[target as keyof typeof questionnaireSchemas];
      const result = schema.safeParse(form.getValues());
      if (!result.success) {
        setFieldErrors(flattenZodErrors(result.error));
        return false;
      }
      setFieldErrors({});
      return true;
    },
    [form],
  );

  const goTo = (next: number) => {
    if (next < step) {
      setFieldErrors({});
      setStep(next);
      return;
    }
    if (next > step && !validateStep(step)) return;
    setStep(next);
    setFurthest((currentFurthest) => Math.max(currentFurthest, next));
  };

  const onTurnstile = useCallback((token: string) => {
    setTurnstileToken(token);
  }, []);

  const onSubmit = async () => {
    if (!validateStep(5)) return;
    if (!turnstileToken) {
      setFormError("Please confirm you’re human and try again.");
      return;
    }

    setSubmitting(true);
    setFormError("");

    try {
      const response = await fetch("/api/website-questionnaire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form.getValues(),
          turnstileToken,
          company_reference_url: honeypotRef.current?.value ?? "",
        }),
      });
      const result = (await response.json()) as {
        ok?: boolean;
        message?: string;
        errors?: Record<string, string>;
      };

      if (!response.ok || !result.ok) {
        if (result.errors) setFieldErrors(result.errors);
        setFormError(result.message ?? "Please review the form and try again.");
        return;
      }

      setSubmitted(true);
    } catch {
      setFormError("We couldn’t send this just now. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const shared = {
    register: form.register,
    watch: form.watch,
    errors: fieldErrors,
    setValue: form.setValue,
  };

  return (
    <section className="bg-soft-white pb-[clamp(6rem,12vw,9rem)] text-ink">
      <div className="mx-auto max-w-[80rem] px-[var(--gutter)] pt-14 lg:pt-16">
        {submitted ? (
          <SuccessState />
        ) : (
          <div className="grid gap-10 lg:grid-cols-[15.5rem_minmax(0,1fr)] lg:gap-12">
            <DesktopStepNav current={step} furthest={furthest} onSelect={goTo} />

            <div>
              <form
                noValidate
                onSubmit={(event) => event.preventDefault()}
                onKeyDown={(event) => {
                  if (
                    event.key === "Enter" &&
                    event.target instanceof HTMLInputElement
                  ) {
                    event.preventDefault();
                  }
                }}
              >
                <input
                  ref={honeypotRef}
                  type="text"
                  name="company_reference_url"
                  tabIndex={-1}
                  autoComplete="off"
                  className="absolute left-[-9999px] h-0 w-0 overflow-hidden"
                  aria-hidden
                />

                <div className="rounded-lg border border-ink/12 bg-white px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
                  <MobileStepProgress current={step} />
                  <p className="hidden font-mono text-[0.68rem] uppercase tracking-[0.18em] text-brand-green lg:block">
                    Step {current.number} of 05
                  </p>
                  <h2 className="mt-3 hidden font-sans text-[clamp(1.8rem,3vw,2.4rem)] font-medium tracking-[-0.03em] lg:block">
                    {current.title}
                  </h2>
                  <p className="mt-3 max-w-xl text-ink/58">{current.intro}</p>
                  <div className="mt-8 border-t border-ink/10 pt-8">
                    {step === 1 ? <StepAbout {...shared} /> : null}
                    {step === 2 ? <StepBusiness {...shared} /> : null}
                    {step === 3 ? <StepLook {...shared} /> : null}
                    {step === 4 ? <StepWebsite {...shared} /> : null}
                    {step === 5 ? (
                      <StepProject {...shared} onTurnstile={onTurnstile} />
                    ) : null}
                  </div>

                  {formError ? (
                    <p className="mt-6 text-sm text-ink/65" role="alert">
                      {formError}
                    </p>
                  ) : null}

                  <div
                    className={cn(
                      "mt-10 flex flex-col-reverse gap-4 sm:flex-row sm:items-center",
                      step === 1 ? "sm:justify-end" : "sm:justify-between",
                    )}
                  >
                    {step > 1 ? (
                      <button
                        type="button"
                        onClick={() => goTo(step - 1)}
                        className="inline-flex min-h-11 items-center gap-2 text-sm text-ink/65 transition-colors hover:text-ink"
                      >
                        <ArrowLeft className="size-4" aria-hidden />
                        Back
                      </button>
                    ) : null}

                    {step < 5 ? (
                      <Button
                        type="button"
                        variant="solid"
                        data-action="continue"
                        onClick={() => goTo(step + 1)}
                      >
                        Continue
                      </Button>
                    ) : (
                      <Button
                        type="button"
                        variant="solid"
                        disabled={submitting}
                        onClick={onSubmit}
                        className={submitting ? "pointer-events-none opacity-50" : undefined}
                      >
                        {submitting ? "Sending" : "Submit Questionnaire"}
                      </Button>
                    )}
                  </div>
                </div>
              </form>

              <p className="mt-5 flex items-start gap-2 text-sm text-ink/45">
                <Shield className="mt-0.5 size-4 shrink-0" aria-hidden />
                <span>
                  {questionnairePage.security}
                  {step === 5 ? ` ${questionnairePage.turnstileNote}` : ""}
                </span>
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
