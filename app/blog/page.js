import { PageShell } from "../components/Shell";

export const metadata = {
  title: "Kaiori Blog | Analysis, guides and experience cases",
  description: "Coming soon: experience analysis, common accommodation mistakes, comparisons, case studies and improvement guides.",
  alternates: {
    canonical: "/blog",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function BlogPage() {
  return (
    <PageShell>
      <main className="section">
        <div className="container legal-page">
          <p className="eyebrow">Blog</p>
          <h1>Kaiori analysis and guides</h1>
          <p className="lead">A space prepared for experience analysis, common accommodation mistakes, comparisons, case studies and educational content for businesses.</p>
        </div>
      </main>
    </PageShell>
  );
}
