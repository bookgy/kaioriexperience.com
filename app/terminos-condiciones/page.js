import LegalContent from "../components/LegalContent";

export const metadata = {
  title: "Terms and conditions | Kaiori",
  description: "General access, use and service conditions for Kaiori.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function TerminosPage() {
  return <LegalContent title="Terms and conditions" description="General conditions related to website use and information about Kaiori services." sections={[
    { title: "Scope", paragraphs: ["These terms govern access to the Kaiori website and the general information about the services offered.", "The contracting of specific services may be subject to proposals, quotes or specific agreements accepted by both parties."] },
    { title: "Services", paragraphs: ["Kaiori offers customer experience audit, friction diagnosis, customer journey analysis and action plan services for hospitality and service businesses.", "The characteristics, scope, timing and deliverables of each service will be defined in the proposal accepted by the client."] },
    { title: "Requests and communications", paragraphs: ["Sending a form or email does not imply automatic contracting of any service.", "Kaiori may respond with a proposal, request for additional information or recommendation about the best starting point."] },
  ]} />;
}
