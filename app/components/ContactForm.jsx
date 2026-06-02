"use client";

import { useState } from "react";
import Icon from "./Icon";
import { businessTypes, knownProblems } from "../../src/data/diagnosisPage";

const requestedServices = [
  ["free-diagnosis", "Free diagnosis"],
  ["digital-audit", "Digital audit"],
  ["mystery-guest", "Mystery Guest"],
  ["complete-audit", "Complete audit"],
  ["reputation-analysis", "Reputation analysis"],
  ["not-sure-yet", "Not sure yet"],
];

export default function ContactForm({
  eyebrow = "Free diagnosis",
  title = "Request a free diagnosis",
  subtitle = "Tell us about your case. We will review how your business is perceived from the outside and reply with initial guidance.",
  intro = "We are not here to judge. We are here to understand the customer experience and detect points worth reviewing.",
  defaultService = "free-diagnosis",
  sourcePage = "free-diagnosis",
  submitButtonText = "Request a free diagnosis",
  locationLabel = "Country / city *",
  locationPlaceholder = "E.g. Spain, Cantabria / Lisbon / Bali / Marrakech...",
  locationHelp = "",
}) {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const isMysteryGuest = defaultService === "mystery-guest";

  function track(eventName, params = {}) {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: eventName, ...params });
    }
  }

  async function onSubmit(event) {
    event.preventDefault();
    setError("");
    setStatus("loading");
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get("name"),
      businessName: data.get("businessName"),
      email: data.get("email"),
      phone: data.get("phone"),
      company: data.get("company"),
      website: data.get("website"),
      requestedService: data.get("requestedService"),
      businessType: data.get("businessType"),
      location: data.get("location"),
      preferredDates: data.get("preferredDates"),
      knownProblem: data.get("knownProblem"),
      interestedPhysicalAudit: data.get("interestedPhysicalAudit") === "yes",
      message: data.get("message"),
      legalAccepted: data.get("legalAccepted") === "on",
      sourcePage,
    };
    const required = ["name", "businessName", "email", "website", "businessType", "location", "message"];
    const missing = required.find((field) => !payload[field]);
    if (missing || !payload.legalAccepted) {
      setStatus("error");
      setError(!payload.legalAccepted ? "Please accept the privacy policy to send your request." : "Please review the required fields.");
      return;
    }
    track("form_submit", { sourcePage, requestedService: payload.requestedService });
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      setStatus("error");
      setError("We could not send your request. Please review the required fields or try again in a few minutes.");
      track("form_submit_error", { sourcePage, requestedService: payload.requestedService });
      return;
    }
    form.reset();
    setStatus("success");
    track("lead_generated", { sourcePage, requestedService: payload.requestedService });
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
            {["We review your case", "We detect initial signals", "We give you initial guidance", "We define the next step"].map((item) => (
              <p className="check-line" key={item}><Icon name="checkCircle" className="icon-sm" />{item}</p>
            ))}
          </div>
        </div>
        <form className="form-card" onSubmit={onSubmit}>
          <input type="hidden" name="sourcePage" value={sourcePage} />
          <input type="text" name="company" tabIndex="-1" autoComplete="off" aria-hidden="true" className="hp-field" />
          <div className="form-grid two">
            <label>Name *<input name="name" placeholder="Your name" required /></label>
            <label>Business *<input name="businessName" placeholder="Your hotel, restaurant, experience or business name" required /></label>
          </div>
          <div className="form-grid two">
            <label>Email *<input name="email" type="email" placeholder="you@email.com" required /></label>
            <label>Phone<input name="phone" placeholder="Include international prefix" /></label>
          </div>
          <label>Website or main link *<input name="website" type="url" placeholder="https://..." required /><span>It can be your website, Google profile, Booking listing, Instagram or main platform.</span></label>
          <label>Service you are interested in<select name="requestedService" defaultValue={defaultService}>{requestedServices.map(([value, label]) => <option value={value} key={value}>{label}</option>)}</select></label>
          <div className="form-grid two">
            <label>Business type *<select name="businessType" required defaultValue=""><option value="">Select an option</option>{businessTypes.map((item) => <option key={item}>{item}</option>)}</select></label>
            <label>{locationLabel}<input name="location" placeholder={locationPlaceholder} required />{locationHelp && <span>{locationHelp}</span>}</label>
          </div>
          {isMysteryGuest && <label>Preferred dates or season<input name="preferredDates" placeholder="E.g. June-July, high season, any available date..." /></label>}
          <label>Have you already detected a problem?<select name="knownProblem" defaultValue=""><option value="">Select an option</option>{knownProblems.map((item) => <option key={item}>{item}</option>)}</select></label>
          <label className="checkbox"><input type="checkbox" name="interestedPhysicalAudit" value="yes" defaultChecked={isMysteryGuest} /><span className="checkbox-text">Interested in the special service: Mystery Guest</span></label>
          <label>Message *<textarea name="message" placeholder="Briefly tell us what worries you or what you would like to improve." required /></label>
          <label className="checkbox"><input name="legalAccepted" type="checkbox" required /><span className="checkbox-text">I accept the <a href="/privacy-policy">privacy policy</a> and the processing of my data to respond to this request.</span></label>
          {status === "error" && <p className="form-error">{error}</p>}
          {status === "success" && <div className="form-success"><h3>Request received</h3><p>Thank you for contacting Kaiori. We will review your case and reply as soon as possible.</p></div>}
          <button className="btn btn-primary" type="submit" disabled={status === "loading"}>{status === "loading" ? "Sending..." : submitButtonText} <Icon name="send" className="icon-sm" /></button>
        </form>
      </div>
    </section>
  );
}
