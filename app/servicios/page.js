import { PageShell } from "../components/Shell";
import Icon from "../components/Icon";
import { Card, CTA, FAQ, SectionIntro } from "../components/Blocks";
import { benefits, businessTypes, deliverables, faqs, journey, problems, process, servicesLanding } from "../../src/data/servicesPage";

export const metadata = {
  title: "Kaiori Services | Customer experience audit for hospitality",
  description: "We analyse the real customer experience to detect friction, improve trust and prioritise improvements for hotels, accommodation, restaurants, tours and services.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServiciosPage() {
  return (
    <PageShell>
      <main>
        <section className="hero"><div className="container hero-grid"><div><p className="eyebrow">Kaiori services</p><h1>We analyse your real customer experience so you can improve with clarity.</h1><p className="lead">From the first search to the final review, we detect doubts, inconsistencies and details that affect trust.</p><div className="hero-actions"><a className="btn btn-primary" href="/free-diagnosis">Request a free diagnosis <Icon name="arrowRight" className="icon-sm" /></a><a className="btn btn-secondary" href="#what-we-audit">See what we audit</a></div></div><div className="hero-card"><p className="eyebrow">Customer journey</p>{["Search", "Booking", "Arrival", "Experience", "Departure", "Review"].map((item, i) => <div className="journey-row" key={item}><span className="number">0{i + 1}</span>{item}</div>)}<p>We observe signals that usually go unnoticed from the inside.</p></div></div></section>
        <section className="section white"><div className="container"><SectionIntro eyebrow="The problem" title="What the business believes it offers does not always match what the guest experiences." text="Many frictions are not obvious from the inside. Kaiori analyses the journey as a customer and translates it into concrete improvements." /><div className="grid grid-4">{problems.map((p) => <Card key={p.title} icon={p.icon} title={p.title} text={p.text} />)}</div></div></section>
        <section id="services" className="section surface"><div className="container"><SectionIntro eyebrow="Core services" title="Diagnosis, clarity and improvement plan." text="We work on the digital presence, real experience and prioritisation so every improvement has purpose." /><div className="grid grid-3">{servicesLanding.map((s) => <Card key={s.title} icon={s.icon} title={s.title} text={s.short}><details><summary>View service detail</summary><p>{s.body}</p><ul>{s.includes.map((x) => <li key={x}><Icon name="checkCircle" className="icon-sm" />{x}</li>)}</ul><p><strong>Result:</strong> {s.result}</p></details><a className="btn btn-primary" href="/free-diagnosis">{s.cta}</a></Card>)}</div></div></section>
        <section id="what-we-audit" className="section white"><div className="container"><SectionIntro eyebrow="What we audit" title="We analyse everything the customer sees, understands, books, experiences and remembers." text="The experience does not start when the customer arrives. It starts much earlier: when they search, compare, read reviews, look at photos and decide whether to trust you." /><div className="grid grid-3">{journey.map((phase) => <Card key={phase.phase} icon={phase.icon} title={phase.phase}><ul>{phase.items.map((x) => <li key={x}>{x}</li>)}</ul></Card>)}</div></div></section>
        <section className="section surface"><div className="container"><div className="card dark"><h2>Mystery Guest experience audit.</h2><p>We experience the service as a guest to detect what metrics do not show.</p><a className="btn btn-cyan" href="/mystery-guest">View Mystery Guest</a></div></div></section>
        <section id="sectors" className="section white"><div className="container"><SectionIntro eyebrow="Sectors" title="We apply the analysis to different hospitality and service businesses." /><div className="grid grid-3">{businessTypes.map((b) => <Card key={b.title} icon={b.icon} title={b.title} text={b.text}><ul>{b.points.map((x) => <li key={x}><Icon name="checkCircle" className="icon-sm" />{x}</li>)}</ul><a className="btn btn-secondary" href="/free-diagnosis">{b.cta}</a></Card>)}</div></div></section>
        <section id="deliverables" className="section surface"><div className="container"><SectionIntro eyebrow="What you receive" title="Clear, practical and actionable deliverables." text="We do not deliver theory. We deliver useful information to make decisions and improve." /><div className="grid grid-3">{deliverables.map(([t, x, i]) => <Card key={t} icon={i} title={t} text={x} />)}</div></div></section>
        <section id="process" className="section white"><div className="container"><SectionIntro eyebrow="How we work" title="A clear, direct process focused on real improvements." /><div className="grid grid-3">{process.map(([t, x], i) => <Card key={t} title={`0${i + 1}. ${t}`} text={x} />)}</div></div></section>
        <section className="section surface"><div className="container"><SectionIntro eyebrow="Benefits" title="What your business can achieve" /><div className="grid grid-3">{benefits.map(([t, x, i]) => <Card key={t} icon={i} title={t} text={x} />)}</div></div></section>
        <CTA title="Want to understand how your experience is really lived?" text="We review the customer journey and help you prioritise improvements with clarity." />
        <section id="faq" className="section white"><div className="container"><SectionIntro center eyebrow="FAQ" title="Frequently asked questions" /><FAQ items={faqs} /></div></section>
      </main>
    </PageShell>
  );
}
