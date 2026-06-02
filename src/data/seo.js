export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.kaiori.com";

export const indexedRoutes = [
  {
    path: "/",
    priority: 1,
    changeFrequency: "monthly",
  },
  {
    path: "/services",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/free-diagnosis",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/mystery-guest",
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    path: "/methodology",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/contact",
    priority: 0.7,
    changeFrequency: "monthly",
  },
];

export function canonical(path = "/") {
  return path === "/" ? siteUrl : `${siteUrl}${path}`;
}
