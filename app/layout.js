import "./globals.css";
import { siteUrl } from "../src/data/seo";
import VisitorAttribution from "./components/VisitorAttribution";

export const metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Kaiori",
  title: "Kaiori | Analyse your real customer experience",
  description:
    "Kaiori analyses the real customer experience to detect friction, improve clarity and help hospitality and service businesses make better decisions.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Kaiori",
    title: "Kaiori | Analyse your real customer experience",
    description:
      "Kaiori analyses the real customer experience to detect friction, improve clarity and help hospitality and service businesses make better decisions.",
    images: [
      {
        url: "/assets/brand/kaiori-logo-500.png",
        width: 500,
        height: 179,
        alt: "Kaiori",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaiori | Analyse your real customer experience",
    description:
      "Kaiori analyses the real customer experience to detect friction, improve clarity and help hospitality and service businesses make better decisions.",
    images: ["/assets/brand/kaiori-logo-500.png"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Kaiori",
    url: siteUrl,
    logo: `${siteUrl}/assets/brand/kaiori-logo-500.png`,
    email: "mabel@kaiori.com",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Kaiori",
    url: siteUrl,
    inLanguage: "en",
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        <VisitorAttribution />
        {children}
      </body>
    </html>
  );
}
