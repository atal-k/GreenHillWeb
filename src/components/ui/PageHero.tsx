import { Container } from "./Container";
import { Section } from "./Section";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <Section tone="alt">
      <Container className="mx-auto max-w-3xl text-center">
        {eyebrow && (
          <p className="text-sm font-semibold tracking-wide text-brand-700 uppercase">{eyebrow}</p>
        )}
        <h1 className="mt-2 text-4xl font-semibold text-ink-900 md:text-5xl">{title}</h1>
        {description && <p className="mt-4 text-lg text-ink-700">{description}</p>}
      </Container>
    </Section>
  );
}
