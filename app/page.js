import { PageShell } from "./components/Shell";
import Icon from "./components/Icon";
import { Card, CTA, SectionIntro } from "./components/Blocks";
import { method, outcomes, physicalAudit, reviews, sectors, services } from "../src/data/site";

export const metadata = {
  title: "Kaiori | Analyse your real customer experience",
  description:
    "Kaiori analyses your real customer experience to detect friction, improve clarity and prioritise improvements for hospitality businesses.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <PageShell>
      <main>
        <section id="home" className="hero hero-home">
          <div className="container hero-grid home-hero-grid">
            <div className="home-copy">
              <p className="home-badge"><Icon name="sparkles" className="icon-sm" /> Hospitality experience audit</p>
              <h1>Analyse your real customer experience</h1>
              <p className="lead">The gap between what you believe you offer and what your guests actually experience.</p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="/free-diagnosis">Request a free diagnosis <Icon name="arrowRight" className="icon-sm" /></a>
                <a className="btn btn-secondary" href="#method">View method</a>
              </div>
            </div>
            <div className="home-visual-card" aria-label="The details you do not see">
              <svg className="home-wave-svg" viewBox="0 0 1200 260" preserveAspectRatio="none" aria-hidden="true">
                <rect width="1200" height="260" fill="#1d4484" />
                <path
                  d="M0,158 C145,105 298,148 445,151 C622,155 682,124 815,93 C956,60 1082,48 1200,82 L1200,260 L0,260 Z"
                  fill="#4389dc"
                />
                <path
                  d="M0,202 C130,166 285,184 440,192 C622,201 724,162 884,134 C1011,112 1118,116 1200,138 L1200,260 L0,260 Z"
                  fill="#5bc0ca"
                />
              </svg>
              <span className="visual-kicker">The details you do not see</span>
              <div className="visual-journey">
                {[
                  ["01", "What your guests want", "Search"],
                  ["02", "What your guests decide", "Decision"],
                  ["03", "What your guests feel", "Perception"],
                ].map(([number, title, label], index) => (
                  <div className="visual-row" key={title}>
                    <span className={`visual-number tone-${index + 1}`}>{number}</span>
                    <span>
                      <strong>{title}</strong>
                      <small>{label}</small>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section white services-overview">
          <div className="container">
            <SectionIntro eyebrow="Core services" title="Diagnosis, clarity and improvement plan." text="We analyse the customer journey and prioritise what should be improved first." />
            <div className="grid grid-3">
              {services.map((service) => (
                <Card key={service.title} className="service-card" icon={service.icon} title={service.title} text={service.text}>
                  <a className="btn btn-secondary" href="/services#services">View full service <Icon name="arrowRight" className="icon-sm" /></a>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="method" className="section method-showcase-section">
          <div className="container method-showcase">
            <svg className="home-wave-svg" viewBox="0 0 1200 260" preserveAspectRatio="none" aria-hidden="true">
                <rect width="1200" height="260" fill="#1d4484" />
                <path
                  d="M0,158 C145,105 298,148 445,151 C622,155 682,124 815,93 C956,60 1082,48 1200,82 L1200,260 L0,260 Z"
                  fill="#4389dc"
                />
                <path
                  d="M0,202 C130,166 285,184 440,192 C622,201 724,162 884,134 C1011,112 1118,116 1200,138 L1200,260 L0,260 Z"
                  fill="#5bc0ca"
                />
              </svg>
            <div className="method-showcase-copy">
              <p className="eyebrow light">Method</p>
              <h2>From observation to plan.</h2>
              <p>A process for businesses that need clarity: what is happening, what is slowing down the customer decision and what should be improved first.</p>
            </div>
            <div className="method-showcase-grid">
              {[
                ["message", "01", "We listen to the context", "We understand your business, ideal guest, goals and the points where you suspect value is being lost."],
                ["search", "02", "We audit the journey", "We analyse the full journey: search, booking, arrival, service, follow-up and recommendation."],
                ["target", "03", "We prioritise opportunities", "We separate what is urgent from what is secondary and turn findings into easy decisions."],
                ["clipboard", "04", "We deliver a clear plan", "You receive a visual, structured and actionable report with concrete next steps."],
              ].map(([icon, number, title, text]) => (
                <article className="method-showcase-card" key={title}>
                  <div className="method-showcase-top">
                    <span className="method-icon"><Icon name={icon} /></span>
                    <span className="method-number">{number}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="sectors" className="section white">
          <div className="container">
            <SectionIntro eyebrow="Sectors" title="We analyse businesses where experience drives the decision." />
            <div className="grid grid-3">{sectors.map((sector) => <Card key={sector} icon="checkCircle" title={sector} />)}</div>
          </div>
        </section>

        <section className="section signals-section">
          <div className="container signals-panel">
            <SectionIntro eyebrow="Common signals" title="What usually appears when you look from the outside." />
            <div className="grid grid-3">{reviews.map((review) => <Card key={review.name} className="signal-card" icon="star" title={review.name} text={review.role ? `${review.text} — ${review.role}` : review.text} />)}</div>
          </div>
        </section>

        <section id="mystery-guest" className="section white">
          <div className="container hero-grid">
            <div className="card dark">
              <p className="eyebrow light">Special service</p>
              <h2>Mystery Guest experience audit.</h2>
              <p>We visit or experience the service as a guest to observe arrival, atmosphere, service, signals, timing and details.</p>
              <a className="btn btn-cyan" href="/mystery-guest">View Mystery Guest <Icon name="arrowRight" className="icon-sm" /></a>
            </div>
            <div className="grid">
              {physicalAudit.map((item, index) => <Card className="audit-point" key={item} title={`${index + 1}. ${item}`} />)}
            </div>
          </div>
        </section>

        <section className="section surface result-section">
          <div className="container hero-grid result-grid">
            <div>
              <p className="eyebrow">Result</p>
              <h2>A clear report to make better decisions.</h2>
              <p>We do not deliver an endless list of problems. We deliver a structured, visual and useful reading to prioritise.</p>
              <a className="btn btn-primary" href="/free-diagnosis">Request a free diagnosis <Icon name="arrowRight" className="icon-sm" /></a>
            </div>
            <div className="result-list">{outcomes.map((item) => <Card key={item} className="result-item" icon="checkCircle" text={item} />)}</div>
          </div>
        </section>

        <CTA title="Real experiences leave signals." text="If your business depends on customer trust, we can help you read those signals clearly." />
      </main>
    </PageShell>
  );
}
