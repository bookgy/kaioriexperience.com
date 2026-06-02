import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

function clean(value, max = 2000) {
  return String(value || "")
    .replace(/[<>]/g, "")
    .trim()
    .slice(0, max);
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || ""));
}

function isUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

export async function POST(request) {
  try {
    const rawPayload = await request.json();
    if (rawPayload.company) {
      return Response.json({ ok: true });
    }

    const payload = {
      name: clean(rawPayload.name, 120),
      businessName: clean(rawPayload.businessName, 160),
      email: clean(rawPayload.email, 180),
      phone: clean(rawPayload.phone, 80),
      website: clean(rawPayload.website, 300),
      requestedService: clean(rawPayload.requestedService, 80),
      businessType: clean(rawPayload.businessType, 120),
      location: clean(rawPayload.location, 160),
      preferredDates: clean(rawPayload.preferredDates, 160),
      knownProblem: clean(rawPayload.knownProblem, 160),
      interestedPhysicalAudit: Boolean(rawPayload.interestedPhysicalAudit),
      message: clean(rawPayload.message, 3000),
      legalAccepted: Boolean(rawPayload.legalAccepted),
      sourcePage: clean(rawPayload.sourcePage, 120),
    };

    const required = ["name", "businessName", "email", "website", "businessType", "location", "message"];
    const missing = required.find((field) => !payload[field]);
    if (missing || !payload.legalAccepted || !isEmail(payload.email) || !isUrl(payload.website)) {
      return Response.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }

    const entry = {
      ...payload,
      createdAt: new Date().toISOString(),
      recipient: "mabel@kaiori.com",
    };
    const dir = path.join(process.cwd(), "data", "contact-requests");
    await mkdir(dir, { recursive: true });
    const filename = `${Date.now()}-${String(payload.email).replace(/[^a-z0-9]/gi, "_").toLowerCase()}.json`;
    await writeFile(path.join(dir, filename), JSON.stringify(entry, null, 2), "utf8");

    return Response.json({ ok: true });
  } catch (error) {
    return Response.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }
}
