import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: {
    root,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: "/servicios", destination: "/services", permanent: true },
      { source: "/diagnostico-gratuito", destination: "/free-diagnosis", permanent: true },
      { source: "/auditoria-presencial", destination: "/mystery-guest", permanent: true },
      { source: "/metodologia", destination: "/methodology", permanent: true },
      { source: "/contacto", destination: "/contact", permanent: true },
      { source: "/aviso-legal", destination: "/legal-notice", permanent: true },
      { source: "/politica-privacidad", destination: "/privacy-policy", permanent: true },
      { source: "/politica-cookies", destination: "/cookies-policy", permanent: true },
      { source: "/terminos-condiciones", destination: "/terms-and-conditions", permanent: true },
    ];
  },
};

export default nextConfig;
