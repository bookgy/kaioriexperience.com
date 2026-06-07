"use client";

import { useEffect, useState } from "react";
import Icon from "./Icon";
import { businessTypes } from "../../src/data/diagnosisPage";
import { getLeadAttribution } from "../lib/attribution";

const CONTACT_FORM_ENDPOINT =
  "https://desarrollo.bookgy.com/procesos/proceso_recibir_formulario_pagina_kaioriexperience.com.php";

const DEFAULT_COUNTRY_CODE = "ES";
const DEFAULT_COUNTRY_PREFIX = "+34";

const requestedServices = [
  ["free-diagnosis", "Free diagnosis"],
  ["digital-audit", "Digital audit"],
  ["mystery-guest", "Mystery Guest"],
  ["complete-audit", "Complete audit"],
  ["reputation-analysis", "Reputation analysis"],
  ["not-sure-yet", "Not sure yet"],
];

const countryPrefixes = [
  { countryCode: "ES", label: "Spain", prefix: "+34" },
  { countryCode: "AD", label: "Andorra", prefix: "+376" },
  { countryCode: "PT", label: "Portugal", prefix: "+351" },
  { countryCode: "FR", label: "France", prefix: "+33" },
  { countryCode: "IT", label: "Italy", prefix: "+39" },
  { countryCode: "DE", label: "Germany", prefix: "+49" },
  { countryCode: "GB", label: "United Kingdom", prefix: "+44" },
  { countryCode: "IE", label: "Ireland", prefix: "+353" },
  { countryCode: "NL", label: "Netherlands", prefix: "+31" },
  { countryCode: "BE", label: "Belgium", prefix: "+32" },
  { countryCode: "CH", label: "Switzerland", prefix: "+41" },
  { countryCode: "AT", label: "Austria", prefix: "+43" },
  { countryCode: "DK", label: "Denmark", prefix: "+45" },
  { countryCode: "SE", label: "Sweden", prefix: "+46" },
  { countryCode: "NO", label: "Norway", prefix: "+47" },
  { countryCode: "FI", label: "Finland", prefix: "+358" },
  { countryCode: "PL", label: "Poland", prefix: "+48" },
  { countryCode: "US", label: "United States", prefix: "+1" },
  { countryCode: "CA", label: "Canada", prefix: "+1" },
  { countryCode: "MX", label: "Mexico", prefix: "+52" },
  { countryCode: "AR", label: "Argentina", prefix: "+54" },
  { countryCode: "BO", label: "Bolivia", prefix: "+591" },
  { countryCode: "BR", label: "Brazil", prefix: "+55" },
  { countryCode: "CL", label: "Chile", prefix: "+56" },
  { countryCode: "CO", label: "Colombia", prefix: "+57" },
  { countryCode: "CR", label: "Costa Rica", prefix: "+506" },
  { countryCode: "CU", label: "Cuba", prefix: "+53" },
  { countryCode: "DO", label: "Dominican Republic", prefix: "+1" },
  { countryCode: "EC", label: "Ecuador", prefix: "+593" },
  { countryCode: "SV", label: "El Salvador", prefix: "+503" },
  { countryCode: "GT", label: "Guatemala", prefix: "+502" },
  { countryCode: "HN", label: "Honduras", prefix: "+504" },
  { countryCode: "NI", label: "Nicaragua", prefix: "+505" },
  { countryCode: "PA", label: "Panama", prefix: "+507" },
  { countryCode: "PY", label: "Paraguay", prefix: "+595" },
  { countryCode: "PE", label: "Peru", prefix: "+51" },
  { countryCode: "PR", label: "Puerto Rico", prefix: "+1" },
  { countryCode: "UY", label: "Uruguay", prefix: "+598" },
  { countryCode: "VE", label: "Venezuela", prefix: "+58" },
  { countryCode: "MA", label: "Morocco", prefix: "+212" },
];

function getBrowserCountryCode() {
  if (typeof navigator === "undefined") {
    return DEFAULT_COUNTRY_CODE;
  }

  const locale = navigator.languages?.[0] || navigator.language || "";

  try {
    const region = new Intl.Locale(locale).region;

    if (region) {
      return region.toUpperCase();
    }
  } catch {}

  return locale.split(/[-_]/)[1]?.toUpperCase() || DEFAULT_COUNTRY_CODE;
}

function getCountryByCode(countryCode) {
  return (
    countryPrefixes.find((item) => item.countryCode === countryCode) ||
    countryPrefixes.find((item) => item.countryCode === DEFAULT_COUNTRY_CODE)
  );
}

function getBrowserCountry() {
  return getCountryByCode(getBrowserCountryCode());
}

function createInitialForm(defaultService, isMysteryGuest) {
  const country = getBrowserCountry();

  return {
    fullName: "",
    businessName: "",
    email: "",
    countryCode: country.countryCode,
    countryPrefix: country.prefix,
    mobile: "",
    businessWebsite: "",
    requestedService: defaultService,
    businessType: "",
    preferredDates: "",
    message: "",
    interestedPhysicalAudit: isMysteryGuest,
    legalAccepted: false,
    website: "",
  };
}

function getRequestedServiceLabel(service) {
  return (
    requestedServices.find(([value]) => value === service)?.[1] ||
    "Not sure yet"
  );
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function isValidUrl(value) {
  try {
    const url = new URL(value.trim());
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

function isValidCountryPrefix(prefix) {
  return /^\+\d{1,4}$/.test(prefix.trim());
}

function isValidMobile(mobile) {
  const digits = mobile.replace(/\D/g, "");
  return digits.length >= 6 && digits.length <= 15;
}

function getValidationError(form) {
  if (!form.fullName.trim()) {
    return "Please enter your name.";
  }

  if (!form.businessName.trim()) {
    return "Please enter your business name.";
  }

  if (!isValidEmail(form.email)) {
    return "Please enter a valid email address.";
  }

  if (!isValidCountryPrefix(form.countryPrefix)) {
    return "Please select a valid country code.";
  }

  if (!isValidMobile(form.mobile)) {
    return "Please enter a valid mobile number.";
  }

  if (!isValidUrl(form.businessWebsite)) {
    return "Please enter a valid website or main link.";
  }

  if (!form.businessType) {
    return "Please select a business type.";
  }

  if (!form.message.trim()) {
    return "Please add a short message.";
  }

  if (!form.legalAccepted) {
    return "Please accept the privacy policy to send your request.";
  }

  return "";
}

function getSubmissionValues(form, sourcePage) {
  const phone = `${form.countryPrefix} ${form.mobile}`.trim();
  const details = [
    `Service interested in: ${getRequestedServiceLabel(form.requestedService)}`,
    `Website or main link: ${form.businessWebsite.trim()}`,
    form.preferredDates.trim()
      ? `Preferred dates or season: ${form.preferredDates.trim()}`
      : "",
    `Interested in Mystery Guest: ${form.interestedPhysicalAudit ? "Yes" : "No"}`,
    `Source page: ${sourcePage}`,
  ].filter(Boolean);

  const message = [form.message.trim(), details.join("\n")]
    .filter(Boolean)
    .join("\n\n");

  return {
    empresa: form.businessName.trim(),
    tipoNegocio: form.businessType,
    tipoNegocioPrincipal: form.businessType,
    otroTipoNegocio: "",
    tamanoEmpresa: "",
    urgenciaProyecto: "",
    numeroClientes: "",
    nombre: form.fullName.trim(),
    email: form.email.trim(),
    paisPrefijo: form.countryCode,
    prefijoPais: form.countryPrefix,
    movil: form.mobile.trim(),
    telefono: phone,
    mensaje: message,
    origen: "kaiori.com",
    website: form.website || "",
    ...getLeadAttribution(),
  };
}

export default function ContactForm({
  eyebrow = "Free diagnosis",
  title = "Request a free diagnosis",
  subtitle = "Tell us about your case. We will review how your business is perceived from the outside and reply with initial guidance.",
  intro = "We are not here to judge. We are here to understand the customer experience and detect points worth reviewing.",
  defaultService = "free-diagnosis",
  sourcePage = "free-diagnosis",
  submitButtonText = "Request a free diagnosis",
}) {
  const isMysteryGuest = defaultService === "mystery-guest";
  const [form, setForm] = useState(() =>
    createInitialForm(defaultService, isMysteryGuest)
  );
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    setForm(createInitialForm(defaultService, isMysteryGuest));
  }, [defaultService, isMysteryGuest]);

  function track(eventName, params = {}) {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: eventName, ...params });
    }
  }

  function updateField(event) {
    const { name, value, type, checked } = event.target;

    if (name === "countryCode") {
      const country = getCountryByCode(value);

      setForm((current) => ({
        ...current,
        countryCode: country.countryCode,
        countryPrefix: country.prefix,
      }));
      return;
    }

    setForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  async function onSubmit(event) {
    event.preventDefault();
    setError("");

    const validationError = getValidationError(form);

    if (validationError) {
      setStatus("error");
      setError(validationError);
      return;
    }

    setStatus("loading");

    try {
      track("form_submit", {
        sourcePage,
        requestedService: form.requestedService,
      });

      const response = await fetch(CONTACT_FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(getSubmissionValues(form, sourcePage)),
      });

      const result = await response.json();

      if (!response.ok || !result.ok) {
        throw new Error(
          result.message ||
            "We could not send your request. Please try again in a few minutes."
        );
      }

      setStatus("success");
      setForm(createInitialForm(defaultService, isMysteryGuest));
      track("lead_generated", {
        sourcePage,
        requestedService: form.requestedService,
      });
    } catch (submitError) {
      setStatus("error");
      setError(
        submitError.message ||
          "We could not send your request. Please try again in a few minutes."
      );
      track("form_submit_error", {
        sourcePage,
        requestedService: form.requestedService,
      });
    }
  }

  return (
    <section id="diagnosis-form" className="section white">
      <div className="container form-layout">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="lead">{subtitle}</p>
          <p>{intro}</p>
          <div className="mini-panel">
            <h2>What we will do</h2>
            {[
              "We review your case",
              "We detect initial signals",
              "We give you initial guidance",
              "We define the next steps",
            ].map((item) => (
              <p className="check-line" key={item}>
                <Icon name="checkCircle" className="icon-sm" />
                {item}
              </p>
            ))}
          </div>
        </div>
        <form className="form-card" onSubmit={onSubmit}>
          <input
            type="text"
            name="website"
            value={form.website}
            onChange={updateField}
            tabIndex="-1"
            autoComplete="off"
            aria-hidden="true"
            className="hp-field"
          />
          <label>
            Name *
            <input
              name="fullName"
              value={form.fullName}
              onChange={updateField}
              placeholder="Your name"
              autoComplete="name"
              required
            />
          </label>
          <label>
            Email *
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={updateField}
              placeholder="you@email.com"
              autoComplete="email"
              required
            />
          </label>
          <div className="phone-grid">
            <label>
              Country code *
              <select
                name="countryCode"
                value={form.countryCode}
                onChange={updateField}
                required
              >
                {countryPrefixes.map((country) => (
                  <option
                    key={`${country.countryCode}-${country.prefix}`}
                    value={country.countryCode}
                  >
                    {country.label} {country.prefix}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Mobile *
              <input
                name="mobile"
                type="tel"
                value={form.mobile}
                onChange={updateField}
                placeholder="Your mobile number"
                autoComplete="tel-national"
                inputMode="tel"
                required
              />
            </label>
          </div>
          <label>
            Business name *
            <input
              name="businessName"
              value={form.businessName}
              onChange={updateField}
              placeholder="Your hotel, restaurant, experience or business name"
              autoComplete="organization"
              required
            />
          </label>
          <label>
            Business type *
            <select
              name="businessType"
              value={form.businessType}
              onChange={updateField}
              required
            >
              <option value="">Select an option</option>
              {businessTypes.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
                    <label>
            Website or main link *
            <input
              name="businessWebsite"
              type="url"
              value={form.businessWebsite}
              onChange={updateField}
              placeholder="https://..."
              required
            />
            <span>
              It can be your website, Google profile, Booking listing,
              Instagram or main platform.
            </span>
          </label>
          <label>
            Service you are interested in
            <select
              name="requestedService"
              value={form.requestedService}
              onChange={updateField}
            >
              {requestedServices.map(([value, label]) => (
                <option value={value} key={value}>
                  {label}
                </option>
              ))}
            </select>
          </label>
          {isMysteryGuest ? (
            <label>
              Preferred dates or season
              <input
                name="preferredDates"
                value={form.preferredDates}
                onChange={updateField}
                placeholder="E.g. June-July, high season, any available date..."
              />
            </label>
          ) : null}
          <label className="checkbox">
            <input
              type="checkbox"
              name="interestedPhysicalAudit"
              checked={form.interestedPhysicalAudit}
              onChange={updateField}
            />
            <span className="checkbox-text">
              Interested in the special service: Mystery Guest
            </span>
          </label>
          <label>
            Message *
            <textarea
              name="message"
              value={form.message}
              onChange={updateField}
              placeholder={
                isMysteryGuest
                  ? "Tell us about your business, location and what you would like us to review."
                  : "Briefly tell us what worries you or what you would like to improve."
              }
              required
            />
          </label>
          <label className="checkbox">
            <input
              name="legalAccepted"
              type="checkbox"
              checked={form.legalAccepted}
              onChange={updateField}
              required
            />
            <span className="checkbox-text">
              I accept the <a href="/privacy-policy">privacy policy</a> and the
              processing of my data to respond to this request.
            </span>
          </label>
          {status === "error" ? <p className="form-error">{error}</p> : null}
          {status === "success" ? (
            <div className="form-success">
              <h3>Request received</h3>
              <p>
                Thank you for contacting Kaiori. We will review your case and
                reply as soon as possible.
              </p>
            </div>
          ) : null}
          <button
            className="btn btn-primary"
            type="submit"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Sending..." : submitButtonText}{" "}
            <Icon name="send" className="icon-sm" />
          </button>
        </form>
      </div>
    </section>
  );
}
