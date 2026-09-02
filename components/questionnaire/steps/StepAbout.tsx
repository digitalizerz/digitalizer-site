import type { UseFormRegister, UseFormSetValue, UseFormWatch } from "react-hook-form";
import { contactMethods, questionnaireLimits } from "@/data/websiteQuestionnaire";
import { CardSelect } from "@/components/questionnaire/ChoiceGroup";
import {
  CharCount,
  FieldError,
  FieldLabel,
  inputClass,
} from "@/components/questionnaire/fields";
import type { QuestionnaireFormValues } from "@/lib/questionnaire/schema";

export function StepAbout({
  register,
  watch,
  setValue,
  errors,
}: {
  register: UseFormRegister<QuestionnaireFormValues>;
  watch: UseFormWatch<QuestionnaireFormValues>;
  setValue: UseFormSetValue<QuestionnaireFormValues>;
  errors: Record<string, string>;
}) {
  const notes = watch("aboutNotes") ?? "";

  return (
    <div className="grid gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <FieldLabel htmlFor="name" required>
            Your name
          </FieldLabel>
          <input
            id="name"
            autoComplete="name"
            placeholder="e.g. Jane Smith"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={inputClass(Boolean(errors.name))}
            {...register("name")}
          />
          <FieldError id="name-error" message={errors.name} />
        </div>
        <div>
          <FieldLabel htmlFor="organization" required>
            Business / Organization name
          </FieldLabel>
          <input
            id="organization"
            autoComplete="organization"
            placeholder="e.g. Acme Industries"
            aria-invalid={Boolean(errors.organization)}
            className={inputClass(Boolean(errors.organization))}
            {...register("organization")}
          />
          <FieldError id="organization-error" message={errors.organization} />
        </div>
        <div>
          <FieldLabel htmlFor="email" required>
            Email address
          </FieldLabel>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="e.g. jane@acme.com"
            aria-invalid={Boolean(errors.email)}
            className={inputClass(Boolean(errors.email))}
            {...register("email")}
          />
          <FieldError id="email-error" message={errors.email} />
        </div>
        <div>
          <FieldLabel htmlFor="phone">Phone number</FieldLabel>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="e.g. 1-832-225-2424"
            className={inputClass()}
            {...register("phone")}
          />
        </div>
      </div>

      <div>
        <FieldLabel htmlFor="location">Business location</FieldLabel>
        <input
          id="location"
          autoComplete="address-level2"
          placeholder="e.g. Baltimore, MD"
          className={inputClass()}
          {...register("location")}
        />
      </div>

      <CardSelect
        legend="Preferred way to contact you"
        required
        options={contactMethods}
        value={watch("preferredContact")}
        onChange={(value) =>
          setValue("preferredContact", value as QuestionnaireFormValues["preferredContact"], {
            shouldDirty: true,
          })
        }
        error={errors.preferredContact}
      />

      <div>
        <FieldLabel htmlFor="aboutNotes" optional>
          Anything else you’d like to share with us?
        </FieldLabel>
        <textarea
          id="aboutNotes"
          rows={5}
          maxLength={questionnaireLimits.aboutNotes}
          placeholder="Optional"
          className={`${inputClass()} min-h-32 resize-y`}
          {...register("aboutNotes")}
        />
        <CharCount value={notes} max={questionnaireLimits.aboutNotes} />
      </div>
    </div>
  );
}
