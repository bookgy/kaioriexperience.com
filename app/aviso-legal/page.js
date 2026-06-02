import LegalContent from "../components/LegalContent";

export const metadata = {
  title: "Legal notice | Kaiori",
  description: "Kaiori legal notice and general conditions for using the website.",
  alternates: {
    canonical: "/legal-notice",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function AvisoLegalPage() {
  return <LegalContent title="Legal notice" description="Basic legal information about ownership, use and access conditions for the Kaiori website." sections={[
    { title: "Website ownership", paragraphs: ["This website belongs to Kaiori. Complete tax information, registered address, tax ID and registry details will be added to this page when available.", "You can contact Kaiori by email at mabel@kaiori.com."] },
    { title: "Purpose", paragraphs: ["The purpose of this website is to present Kaiori services related to experience audits, friction diagnosis and process improvement for hospitality and service businesses.", "Accessing and using this website implies acceptance of the conditions described in this legal notice."] },
    { title: "Website use", paragraphs: ["Users agree to use the website lawfully, respectfully and in accordance with applicable regulations.", "It is not permitted to use the site for unlawful, harmful activities or anything that may affect normal website operation."] },
    { title: "Intellectual property", paragraphs: ["The copy, design, brand, logo, visual assets and content on this website belong to Kaiori or are used with authorisation.", "Reproduction, distribution or modification without express authorisation is prohibited."] },
  ]} />;
}
