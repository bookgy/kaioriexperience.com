import LegalContent from "../components/LegalContent";

export const metadata = {
  title: "Cookies policy | Kaiori",
  description: "Information about cookies and similar technologies used on the Kaiori website.",
  alternates: {
    canonical: "/cookies-policy",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function CookiesPage() {
  return <LegalContent title="Cookies policy" description="Information about cookies, similar technologies and browser settings." sections={[
    { title: "What cookies are", paragraphs: ["Cookies are small files stored on a user's device when visiting a website.", "They can be used to remember preferences, analyse site usage or enable certain technical functions."] },
    { title: "Cookies used on this website", paragraphs: ["In its current version, the Kaiori website is designed as a static website and does not include advertising cookies or configured analytics tools.", "If tools such as analytics, advertising pixels, advanced forms or external embeds are added in the future, this policy must be updated."] },
    { title: "Cookie management", paragraphs: ["You can configure or block cookies from your browser preferences.", "Disabling some cookies could affect certain functions if external services are added in the future."] },
  ]} />;
}
