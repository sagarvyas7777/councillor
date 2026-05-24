import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

export type FieldDef = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "textarea" | "checkboxes" | "radio";
  required?: boolean;
  max?: number;
  options?: string[];
};

type Props = {
  fields: FieldDef[];
  submitLabel: string;
  successTitle: string;
  successBody: string;
  storageKey: string;
};

function buildSchema(fields: FieldDef[]) {
  const shape: Record<string, z.ZodTypeAny> = {};
  for (const f of fields) {
    if (f.type === "checkboxes") {
      const arr = z.array(z.string());
      shape[f.name] = f.required ? arr.min(1, `Please select at least one option`) : arr;
    } else if (f.type === "radio") {
      const s = z.string();
      shape[f.name] = f.required ? s.min(1, `Please choose an option`) : s.optional();
    } else if (f.type === "email") {
      let s = z.string().trim().email("Enter a valid email").max(f.max ?? 200);
      shape[f.name] = f.required ? s : s.optional().or(z.literal(""));
    } else {
      let s = z.string().trim().max(f.max ?? 500);
      shape[f.name] = f.required ? s.min(1, `${f.label} is required`) : s.optional().or(z.literal(""));
    }
  }
  return z.object(shape);
}

export function CampaignForm({ fields, submitLabel, successTitle, successBody, storageKey }: Props) {
  const [values, setValues] = useState<Record<string, string | string[]>>(() =>
    Object.fromEntries(fields.map((f) => [f.name, f.type === "checkboxes" ? [] : ""])),
  );
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function setField(name: string, value: string | string[]) {
    setValues((v) => ({ ...v, [name]: value }));
  }

  function toggleCheckbox(name: string, option: string) {
    const current = (values[name] as string[]) || [];
    setField(name, current.includes(option) ? current.filter((o) => o !== option) : [...current, option]);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const schema = buildSchema(fields);
    const result = schema.safeParse(values);
    if (!result.success) {
      const errs: Record<string, string> = {};
      for (const issue of result.error.issues) errs[String(issue.path[0])] = issue.message;
      setErrors(errs);
      setLoading(false);
      toast.error("Please fix the highlighted fields.");
      return;
    }
    setErrors({});
    try {
      const existing = JSON.parse(localStorage.getItem(storageKey) || "[]");
      existing.push({ ...result.data, submittedAt: new Date().toISOString() });
      localStorage.setItem(storageKey, JSON.stringify(existing));
    } catch {
      // ignore
    }
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
      toast.success(successTitle);
    }, 400);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-accent/30 bg-accent/5 p-10 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground">✓</div>
        <h3 className="mt-5 font-serif text-2xl text-foreground">{successTitle}</h3>
        <p className="mt-3 text-muted-foreground">{successBody}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-6 md:p-8">
      <div className="grid gap-5">
        {fields.map((f) => (
          <div key={f.name}>
            <label className="mb-1.5 block text-sm font-medium text-foreground">
              {f.label} {f.required && <span className="text-primary">*</span>}
            </label>
            {f.type === "textarea" ? (
              <textarea
                rows={4}
                maxLength={f.max ?? 1000}
                value={values[f.name] as string}
                onChange={(e) => setField(f.name, e.target.value)}
                className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            ) : f.type === "checkboxes" ? (
              <div className="grid gap-2 sm:grid-cols-2">
                {f.options?.map((opt) => {
                  const checked = ((values[f.name] as string[]) || []).includes(opt);
                  return (
                    <label key={opt} className={`flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2 text-sm transition ${checked ? "border-primary bg-primary/5 text-primary" : "border-input hover:border-primary/40"}`}>
                      <input type="checkbox" className="accent-primary" checked={checked} onChange={() => toggleCheckbox(f.name, opt)} />
                      {opt}
                    </label>
                  );
                })}
              </div>
            ) : f.type === "radio" ? (
              <div className="grid gap-2">
                {f.options?.map((opt) => {
                  const checked = values[f.name] === opt;
                  return (
                    <label key={opt} className={`flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2 text-sm transition ${checked ? "border-primary bg-primary/5 text-primary" : "border-input hover:border-primary/40"}`}>
                      <input type="radio" name={f.name} className="accent-primary" checked={checked} onChange={() => setField(f.name, opt)} />
                      {opt}
                    </label>
                  );
                })}
              </div>
            ) : (
              <input
                type={f.type ?? "text"}
                maxLength={f.max ?? 200}
                value={values[f.name] as string}
                onChange={(e) => setField(f.name, e.target.value)}
                className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            )}
            {errors[f.name] && <p className="mt-1 text-xs text-destructive">{errors[f.name]}</p>}
          </div>
        ))}
      </div>
      <button
        type="submit"
        disabled={loading}
        className="mt-7 w-full rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90 disabled:opacity-60"
      >
        {loading ? "Submitting…" : submitLabel}
      </button>
      <p className="mt-4 text-center text-xs text-muted-foreground">
        Your information stays with the campaign and is never sold.
      </p>
    </form>
  );
}
