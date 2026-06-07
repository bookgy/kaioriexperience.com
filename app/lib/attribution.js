export function getLeadAttribution() {
  if (typeof window === "undefined") {
    return {};
  }

  const params = new URLSearchParams(window.location.search);
  const attribution = {
    utm_source: params.get("utm_source") || "",
    utm_medium: params.get("utm_medium") || "",
    utm_campaign: params.get("utm_campaign") || "",
    utm_term: params.get("utm_term") || "",
    utm_content: params.get("utm_content") || "",
    gclid: params.get("gclid") || "",
    fbclid: params.get("fbclid") || "",
    msclkid: params.get("msclkid") || "",
    landing_page: window.location.href,
    referrer: document.referrer || "",
  };

  return Object.fromEntries(
    Object.entries(attribution).filter(([, value]) => value)
  );
}
