import LegalContent from "../components/LegalContent";

export const metadata = {
  title: "Privacy policy | Kaiori",
  description: "Information about how personal data is processed on the Kaiori website.",
  alternates: {
    canonical: "/privacy-policy",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacidadPage() {
  return <LegalContent title="Privacy policy" description="How Kaiori collects, uses and protects personal data submitted through the website." sections={[
    { title: "Data controller", paragraphs: ["The controller of personal data collected through this website is Kaiori. Complete legal and tax details will be added when available.", "Contact email: mabel@kaiori.com."] },
    { title: "Data we may collect", paragraphs: ["Through the contact form, we may collect name, email address, business type and any information the user chooses to include in the message.", "Minimum technical data derived from browsing may also be processed, such as device or browser information and logs required for site security."] },
    { title: "Purpose of processing", paragraphs: ["We use data to respond to requests, prepare diagnoses, manage requested commercial communications and improve service quality.", "No automated decisions with legal effects on users will be made."] },
    { title: "Retention and rights", paragraphs: ["Data will be retained for the time needed to handle the request and comply with possible legal obligations.", "You can request access, rectification, erasure, objection, restriction or portability by writing to mabel@kaiori.com."] },
  ]} />;
}
