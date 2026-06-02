import { indexedRoutes, siteUrl } from "../src/data/seo";

export default function sitemap() {
  const lastModified = new Date();

  return indexedRoutes.map((route) => ({
    url: route.path === "/" ? siteUrl : `${siteUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
