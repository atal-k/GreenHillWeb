"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type FieldName = "name" | "phone" | "query";
type Status = "idle" | "submitting" | "success" | "error";

const EMPTY_FIELDS: Record<FieldName, string> = { name: "", phone: "", query: "" };

export function QueryForm() {
  const t = useTranslations("home.queryForm");
  const [fields, setFields] = useState<Record<FieldName, string>>(EMPTY_FIELDS);
  const [errors, setErrors] = useState<Record<FieldName, boolean>>({
    name: false,
    phone: false,
    query: false,
  });
  const [status, setStatus] = useState<Status>("idle");

  function updateField(field: FieldName, value: string) {
    setFields((current) => ({ ...current, [field]: value }));
    if (value.trim()) {
      setErrors((current) => ({ ...current, [field]: false }));
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors: Record<FieldName, boolean> = {
      name: !fields.name.trim(),
      phone: !fields.phone.trim(),
      query: !fields.query.trim(),
    };
    setErrors(nextErrors);
    if (Object.values(nextErrors).some(Boolean)) {
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("success");
      setFields(EMPTY_FIELDS);
    } catch {
      setStatus("error");
    }
  }

  const inputBase =
    "w-full rounded-xl border bg-surface-white px-4 py-3 text-ink-900 placeholder:text-ink-500 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-700";

  return (
    <Section tone="alt">
      <Container>
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
          align="center"
        />

        <Card variant="geometric" padding="lg" className="mx-auto mt-10 max-w-2xl p-6 sm:p-8">
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div>
              <label htmlFor="qf-name" className="mb-1.5 block text-sm font-medium text-ink-900">
                {t("nameLabel")} <span className="text-brand-700">*</span>
              </label>
              <input
                id="qf-name"
                type="text"
                value={fields.name}
                onChange={(e) => updateField("name", e.target.value)}
                placeholder={t("namePlaceholder")}
                className={cn(
                  inputBase,
                  errors.name ? "border-red-600 focus:ring-red-600" : "border-ink-900/15",
                )}
                aria-invalid={errors.name}
                aria-required="true"
              />
            </div>

            <div>
              <label htmlFor="qf-phone" className="mb-1.5 block text-sm font-medium text-ink-900">
                {t("phoneLabel")} <span className="text-brand-700">*</span>
              </label>
              <input
                id="qf-phone"
                type="tel"
                inputMode="tel"
                value={fields.phone}
                onChange={(e) => updateField("phone", e.target.value)}
                placeholder={t("phonePlaceholder")}
                className={cn(
                  inputBase,
                  errors.phone ? "border-red-600 focus:ring-red-600" : "border-ink-900/15",
                )}
                aria-invalid={errors.phone}
                aria-required="true"
              />
            </div>

            <div>
              <label htmlFor="qf-query" className="mb-1.5 block text-sm font-medium text-ink-900">
                {t("queryLabel")} <span className="text-brand-700">*</span>
              </label>
              <textarea
                id="qf-query"
                rows={4}
                value={fields.query}
                onChange={(e) => updateField("query", e.target.value)}
                placeholder={t("queryPlaceholder")}
                className={cn(
                  inputBase,
                  "resize-none",
                  errors.query ? "border-red-600 focus:ring-red-600" : "border-ink-900/15",
                )}
                aria-invalid={errors.query}
                aria-required="true"
              />
            </div>

            {Object.values(errors).some(Boolean) && (
              <p className="flex items-center gap-2 text-sm font-medium text-red-600">
                <AlertCircle className="h-4 w-4 shrink-0" />
                {t("validationError")}
              </p>
            )}

            {status === "success" && (
              <p className="flex items-center gap-2 text-sm font-medium text-green-700">
                <CheckCircle2 className="h-4 w-4 shrink-0" />
                {t("successMessage")}
              </p>
            )}

            {status === "error" && (
              <p className="flex items-center gap-2 text-sm font-medium text-red-600">
                <AlertCircle className="h-4 w-4 shrink-0" />
                {t("errorMessage")}
              </p>
            )}

            <Button
              type="submit"
              size="lg"
              disabled={status === "submitting"}
              className="w-full sm:w-auto"
            >
              {status === "submitting" ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <Send className="h-5 w-5" />
              )}
              {status === "submitting" ? t("sending") : t("submit")}
            </Button>
          </form>
        </Card>
      </Container>
    </Section>
  );
}
