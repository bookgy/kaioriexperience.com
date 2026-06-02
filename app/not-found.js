import { PageShell } from "./components/Shell";
import Icon from "./components/Icon";

export const metadata = {
  title: "Page not found | Kaiori",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <PageShell>
      <main className="section">
        <article className="container legal-page">
          <p className="eyebrow">Error 404</p>
          <h1>Page not found</h1>
          <p className="lead">The URL you are looking for does not exist or has changed.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="/">
              Back to home <Icon name="arrowRight" className="icon-sm" />
            </a>
            <a className="btn btn-secondary" href="/services">
              View services
            </a>
            <a className="btn btn-secondary" href="/contact">
              Contact
            </a>
          </div>
        </article>
      </main>
    </PageShell>
  );
}
