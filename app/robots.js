import { siteUrl } from "../src/data/seo";

export const dynamic = "force-static";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/login/", "/panel/", "/staging/", "/test/", "/private/", "/tmp/", "/api/", "/docs/"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
