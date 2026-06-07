const STORAGE_PREFIX = "kaiori_";

export const UTM_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
];

const EXTRA_ATTRIBUTION_PARAMS = ["gclid", "fbclid", "msclkid"];

function getStorageKey(key) {
  return `${STORAGE_PREFIX}${key}`;
}

function getCurrentUrl() {
  if (typeof window === "undefined") {
    return "";
  }

  return window.location.href;
}

function getCurrentPath() {
  if (typeof window === "undefined") {
    return "";
  }

  return `${window.location.pathname}${window.location.search}${window.location.hash}`;
}

function setStorageValueIfMissing(key, value) {
  if (typeof window === "undefined" || !value) {
    return;
  }

  try {
    if (!window.localStorage.getItem(getStorageKey(key))) {
      window.localStorage.setItem(getStorageKey(key), value);
    }
  } catch {}
}

function getStoredValue(key) {
  if (typeof window === "undefined") {
    return "";
  }

  try {
    return window.localStorage.getItem(getStorageKey(key)) || "";
  } catch {
    return "";
  }
}

export function captureInitialAttribution() {
  if (typeof window === "undefined") {
    return;
  }

  const params = new URLSearchParams(window.location.search);

  setStorageValueIfMissing("first_visit_url", getCurrentUrl());
  setStorageValueIfMissing("landing_page", getCurrentPath());
  setStorageValueIfMissing("initial_referrer", document.referrer || "");

  [...UTM_PARAMS, ...EXTRA_ATTRIBUTION_PARAMS].forEach((param) => {
    setStorageValueIfMissing(param, params.get(param) || "");
  });
}

export function getLeadAttribution() {
  if (typeof window === "undefined") {
    return {};
  }

  captureInitialAttribution();

  const attribution = {
    ...Object.fromEntries(UTM_PARAMS.map((param) => [param, getStoredValue(param)])),
    ...Object.fromEntries(
      EXTRA_ATTRIBUTION_PARAMS.map((param) => [param, getStoredValue(param)])
    ),
    first_visit_url: getStoredValue("first_visit_url"),
    landing_page: getStoredValue("landing_page"),
    initial_referrer: getStoredValue("initial_referrer"),
    current_page: getCurrentUrl(),
    user_agent: window.navigator.userAgent || "",
    timestamp: new Date().toISOString(),
  };

  return Object.fromEntries(
    Object.entries(attribution).filter(([, value]) => value)
  );
}
