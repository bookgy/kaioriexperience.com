import { PageShell } from "./Shell";

export default function LegalContent({ title, description, sections }) {
  return (
    <PageShell>
      <main className="section">
        <article className="container legal-page">
          <p className="eyebrow">Legal</p>
          <h1>{title}</h1>
          <p className="lead">{description}</p>
          <p>Last updated: May 20, 2026</p>
          {sections.map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>
          ))}
        </article>
      </main>
    </PageShell>
  );
}
