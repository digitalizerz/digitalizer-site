import { z } from "zod";
import {
  budgetOptions,
  contactMethods,
  featureOptions,
  logoOptions,
  questionnaireLimits as limits,
  styleOptions,
  timelineOptions,
  type BudgetId,
  type FeatureId,
  type LogoId,
  type StyleId,
  type TimelineId,
} from "@/data/websiteQuestionnaire";

const ids = <T extends readonly { id: string }[]>(options: T) =>
  options.map((option) => option.id) as [T[number]["id"], ...T[number]["id"][]];

const optionalText = (max: number) =>
  z
    .string()
    .trim()
    .max(max)
    .optional()
    .transform((value) => value ?? "");

export function normalizeWebsiteUrl(value: string) {
  const trimmed = value.trim();
  if (!trimmed) return "";
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `https://${trimmed}`;
}

export function isHttpUrl(value: string) {
  if (!value) return true;
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

const inspirationEntrySchema = z.object({
  url: z
    .string()
    .trim()
    .max(limits.inspirationUrl)
    .transform(normalizeWebsiteUrl)
    .refine(isHttpUrl, "Please add a valid website address."),
  likes: optionalText(limits.inspirationLikes),
});

export const step1Schema = z.object({
  name: z.string().trim().min(2, "Please add your name.").max(limits.name),
  organization: z
    .string()
    .trim()
    .min(2, "Please add your organization.")
    .max(limits.organization),
  email: z
    .string()
    .trim()
    .max(limits.email)
    .email("Please add a valid email.")
    .transform((value) => value.toLowerCase()),
  phone: optionalText(limits.phone),
  location: optionalText(limits.location),
  preferredContact: z.enum(ids(contactMethods), {
    error: "Please choose a preferred way to contact you.",
  }),
  aboutNotes: optionalText(limits.aboutNotes),
});

export const step2Schema = z.object({
  organizationAbout: z
    .string()
    .trim()
    .min(10, "Please tell us a little about your organization.")
    .max(limits.longText),
  productsServices: z
    .string()
    .trim()
    .min(8, "Please describe your products or services.")
    .max(limits.longText),
  websitePurpose: z
    .string()
    .trim()
    .min(8, "Please describe the primary purpose of the website.")
    .max(limits.longText),
  audience: z
    .string()
    .trim()
    .min(8, "Please describe your target audience.")
    .max(limits.longText),
});

export const step3Schema = z
  .object({
    colors: optionalText(limits.colors),
    styles: z
      .array(z.enum(ids(styleOptions)))
      .min(1, "Please choose at least one look and feel."),
    otherStyle: optionalText(limits.otherStyle),
    visualNotes: optionalText(limits.visualNotes),
    inspiration: z.array(inspirationEntrySchema).max(limits.inspirationMax),
  })
  .superRefine((value, ctx) => {
    if (value.styles.includes("other") && value.otherStyle.trim().length < 2) {
      ctx.addIssue({
        code: "custom",
        path: ["otherStyle"],
        message: "Please describe the style you’re looking for.",
      });
    }
  });

export const step4Schema = z.object({
  features: z
    .array(z.enum(ids(featureOptions)))
    .min(1, "Please choose at least one feature."),
  otherFunctionality: optionalText(limits.longText),
  logo: z.enum(ids(logoOptions), {
    error: "Please tell us about your logo.",
  }),
});

export const step5Schema = z
  .object({
    timeline: z.enum(ids(timelineOptions), {
      error: "Please choose a launch timeline.",
    }),
    specificDate: optionalText(40),
    budget: z.enum(ids(budgetOptions), {
      error: "Please choose a budget range.",
    }),
    projectNotes: optionalText(limits.projectNotes),
  })
  .superRefine((value, ctx) => {
    if (value.timeline === "specific-date" && !value.specificDate.trim()) {
      ctx.addIssue({
        code: "custom",
        path: ["specificDate"],
        message: "Please add the date you’d like to launch.",
      });
    }
  });

export const questionnaireFieldsSchema = step1Schema
  .and(step2Schema)
  .and(step3Schema)
  .and(step4Schema)
  .and(step5Schema);

export const questionnaireSchemas = {
  1: step1Schema,
  2: step2Schema,
  3: step3Schema,
  4: step4Schema,
  5: step5Schema,
} as const;

export const questionnaireDefaults = {
  name: "",
  organization: "",
  email: "",
  phone: "",
  location: "",
  preferredContact: "email" as const,
  aboutNotes: "",
  organizationAbout: "",
  productsServices: "",
  websitePurpose: "",
  audience: "",
  colors: "",
  styles: [] as string[],
  otherStyle: "",
  visualNotes: "",
  inspiration: [{ url: "", likes: "" }],
  features: [] as string[],
  otherFunctionality: "",
  logo: "" as LogoId | "",
  timeline: "" as TimelineId | "",
  specificDate: "",
  budget: "" as BudgetId | "",
  projectNotes: "",
};

export type QuestionnaireFields = z.infer<typeof questionnaireFieldsSchema>;
export type QuestionnaireFormValues = {
  name: string;
  organization: string;
  email: string;
  phone: string;
  location: string;
  preferredContact: "email" | "phone" | "either";
  aboutNotes: string;
  organizationAbout: string;
  productsServices: string;
  websitePurpose: string;
  audience: string;
  colors: string;
  styles: StyleId[] | string[];
  otherStyle: string;
  visualNotes: string;
  inspiration: { url: string; likes: string }[];
  features: FeatureId[] | string[];
  otherFunctionality: string;
  logo: LogoId | "";
  timeline: TimelineId | "";
  specificDate: string;
  budget: BudgetId | "";
  projectNotes: string;
};

export type FieldErrors = Record<string, string>;

export function flattenZodErrors(error: z.ZodError): FieldErrors {
  const next: FieldErrors = {};
  for (const issue of error.issues) {
    const path = issue.path.map(String).join(".");
    if (path && !next[path]) next[path] = issue.message;
  }
  return next;
}
