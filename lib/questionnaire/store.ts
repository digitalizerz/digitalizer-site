import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import type { QuestionnaireFields } from "@/lib/questionnaire/schema";

export type StoredQuestionnaire = {
  id: string;
  submittedAt: string;
  fields: QuestionnaireFields;
};

export async function storeQuestionnaire(fields: QuestionnaireFields) {
  const record: StoredQuestionnaire = {
    id: crypto.randomUUID(),
    submittedAt: new Date().toISOString(),
    fields,
  };

  try {
    const directory = path.join(process.cwd(), ".data", "questionnaires");
    await mkdir(directory, { recursive: true });
    await writeFile(
      path.join(directory, `${record.id}.json`),
      JSON.stringify(record, null, 2),
      "utf8",
    );
  } catch {
    // Serverless filesystems may be read-only. Email remains the durable copy.
  }

  return record;
}
