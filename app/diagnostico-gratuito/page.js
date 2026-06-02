import { PageShell } from "../components/Shell";
import ContactForm from "../components/ContactForm";
import { Card, CTA, FAQ, SectionIntro } from "../components/Blocks";
import { diagnosisFaqs, notIncluded, yesIncluded } from "../../src/data/diagnosisPage";
import Icon from "../components/Icon";

export const metadata = {
  title: "Free customer experience diagnosis | Kaiori",
  description: "Request a free customer experience diagnosis. We review your digital presence, booking process, reputation and possible friction points.",
  alternates: {
    canonical: "/free-diagnosis",
  },
};

export default function DiagnosticoPage() {
  return (
    <PageShell>
      <main>
        <ContactForm />
        <section id="what-is-included" className="section surface">
          <div className="container">
            <SectionIntro eyebrow="What is included" title="What the free diagnosis includes" text="A first review to understand initial signals, without turning it into a complete audit." />
            <div className="grid grid-2">
              <Card title="What this first diagnosis includes">
                <p>An initial reading to see whether there are visible points worth reviewing in more depth.</p>
                <ul>{yesIncluded.map((x) => <li key={x}><Icon name="checkCircle" className="icon-sm" />{x}</li>)}</ul>
              </Card>
              <Card title="What this first diagnosis does not include">
                <p>It helps define the next step. It does not replace a complete audit or a phase-by-phase report.</p>
                <ul>{notIncluded.map((x) => <li key={x}><Icon name="x" className="icon-sm icon-danger" />{x}</li>)}</ul>
              </Card>
            </div>
          </div>
        </section>
        <CTA title="Your customer experience is already leaving signals." text="Request a first assessment and we will see whether there are clear points worth analysing in more detail." href="#diagnosis-form" />
        <section id="faq" className="section white"><div className="container"><SectionIntro center eyebrow="FAQ" title="Frequently asked questions" text="We answer the most common questions before you request your free diagnosis." /><FAQ items={diagnosisFaqs} /></div></section>
        <CTA title="Start with a simple review." text="Tell us about your case and we will tell you what type of analysis may make sense for your business." href="#diagnosis-form" />
      </main>
    </PageShell>
  );
}
