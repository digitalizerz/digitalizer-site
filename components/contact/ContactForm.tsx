"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { contact, contactPage } from "@/data/contact";
import { submitContact, type ContactState } from "@/app/contact/actions";
import { Button } from "@/components/ui/Button";

const initialState: ContactState = { ok: false };

const fieldClass =
  "mt-2 min-h-11 w-full rounded-lg border border-ink/40 bg-white px-4 py-3 text-base text-ink shadow-[inset_0_0_0_1px_rgba(5,6,7,0.04)] outline-none transition-[border-color,box-shadow] duration-300 placeholder:text-ink/40 focus:border-ink focus:shadow-[0_0_0_3px_rgba(5,6,7,0.1)]";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      variant="outline-ink"
      disabled={pending}
      className={pending ? "pointer-events-none opacity-50" : undefined}
    >
      {pending ? contactPage.form.sending : contactPage.form.submit}
    </Button>
  );
}

export function ContactForm() {
  const [state, action] = useActionState(submitContact, initialState);

  if (state.ok) {
    return (
      <div
        className="border-t border-ink/10 pt-8"
        role="status"
        aria-live="polite"
      >
        <p className="max-w-md text-lg leading-relaxed text-ink/70">
          {contactPage.form.success}
        </p>
        <div className="mt-8 flex flex-col">
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
    );
  }

  return (
    <form action={action} className="grid gap-8" noValidate>
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] h-0 w-0 overflow-hidden"
        aria-hidden
      />

      <div>
        <label htmlFor="name" className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-ink/45">
          {contactPage.form.name} <span className="text-ink/30">Required</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          aria-invalid={Boolean(state.errors?.name)}
          aria-describedby={state.errors?.name ? "name-error" : undefined}
          className={fieldClass}
        />
        {state.errors?.name ? (
          <p id="name-error" className="mt-2 text-sm text-ink/55">
            {state.errors.name}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="email" className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-ink/45">
          {contactPage.form.email} <span className="text-ink/30">Required</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          aria-invalid={Boolean(state.errors?.email)}
          aria-describedby={state.errors?.email ? "email-error" : undefined}
          className={fieldClass}
        />
        {state.errors?.email ? (
          <p id="email-error" className="mt-2 text-sm text-ink/55">
            {state.errors.email}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="subject" className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-ink/45">
          {contactPage.form.subject} <span className="text-ink/30">Optional</span>
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          autoComplete="off"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="details" className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-ink/45">
          {contactPage.form.details} <span className="text-ink/30">Required</span>
        </label>
        <textarea
          id="details"
          name="details"
          required
          rows={5}
          placeholder={contactPage.form.detailsHint}
          aria-invalid={Boolean(state.errors?.details)}
          aria-describedby={state.errors?.details ? "details-error" : undefined}
          className={`${fieldClass} min-h-36 resize-y`}
        />
        {state.errors?.details ? (
          <p id="details-error" className="mt-2 text-sm text-ink/55">
            {state.errors.details}
          </p>
        ) : null}
      </div>

      <div className="pt-2">
        <SubmitButton />
      </div>
    </form>
  );
}
