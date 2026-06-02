import { PageShell } from "../components/Shell";
import ContactForm from "../components/ContactForm";

export const metadata = {
  title: "Contact Kaiori | Request a free diagnosis",
  description: "Tell us about your challenge and we will reply with initial guidance to improve your customer experience.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactoPage() {
  return <PageShell><main><ContactForm /></main></PageShell>;
}
