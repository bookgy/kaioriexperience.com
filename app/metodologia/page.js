import { PageShell } from "../components/Shell";
import { Card, SectionIntro } from "../components/Blocks";
import { method, outcomes } from "../../src/data/site";

export const metadata = {
  title: "Kaiori Methodology | How we analyse customer experience",
  description: "Kaiori's process for analysing the real customer experience and turning findings into concrete improvements.",
  alternates: {
    canonical: "/methodology",
  },
};

export default function MetodologiaPage() {
  return (
    <PageShell>
      <main>
        <section className="hero"><div className="container"><p className="eyebrow">Kaiori method</p><h1>We analyse, organise and turn experience into action.</h1><p className="lead">A clear process to understand what guests experience and what the business should improve first.</p></div></section>
        <section className="section white"><div className="container"><SectionIntro title="How we work" /><div className="grid grid-4">{method.map((step, i) => <Card key={step.title} icon={step.icon} title={`0${i + 1}. ${step.title}`} text={step.text} />)}</div></div></section>
        <section className="section surface"><div className="container"><SectionIntro title="What you get" /><div className="grid grid-2">{outcomes.map((item) => <Card key={item} icon="checkCircle" text={item} />)}</div></div></section>
      </main>
    </PageShell>
  );
}
