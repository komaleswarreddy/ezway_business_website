// Client for ezway_backend's public website API (`/api/v1/web/*`).
// See ezway_backend/docs/IMPLEMENTING_WEBSITE_AND_ADMIN.md for the full contract.
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api/v1";

export type ApiResult = { ok: true } | { ok: false; error: string };

async function postJson(path: string, body: unknown): Promise<ApiResult> {
  try {
    const res = await fetch(`${API_URL}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const data = await res.json().catch(() => null);
      const message =
        (Array.isArray(data?.error?.message) ? data.error.message[0] : data?.error?.message) ||
        data?.error ||
        "Something went wrong. Please try again.";
      return { ok: false, error: message };
    }

    return { ok: true };
  } catch {
    return { ok: false, error: "Couldn't reach the server. Please check your connection and try again." };
  }
}

export type ContactFormPayload = {
  fullName: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
};

export function submitContactForm(payload: ContactFormPayload) {
  return postJson("/web/contact", {
    name: payload.fullName,
    email: payload.email,
    phone: payload.phone,
    subject: payload.subject,
    message: payload.message,
  });
}

export type WebJob = {
  id: string;
  slug: string;
  title: string;
  department: string;
  location: string;
  employment: string;
  experience: string | null;
  description: string;
  skills: string[];
};

export async function getJobs(): Promise<WebJob[]> {
  try {
    const res = await fetch(`${API_URL}/web/jobs`, { cache: "no-store" });
    if (!res.ok) return [];
    return await res.json();
  } catch {
    return [];
  }
}

export type JobApplicationPayload = {
  slug: string;
  fullName: string;
  email: string;
  phone?: string;
  portfolioUrl?: string;
  motivation?: string;
};

export function submitJobApplication(payload: JobApplicationPayload) {
  return postJson(`/web/jobs/${payload.slug}/apply`, {
    name: payload.fullName,
    email: payload.email,
    phone: payload.phone,
    portfolio: payload.portfolioUrl,
    motivation: payload.motivation,
  });
}

export type WebHomeStats = {
  ridesCompleted: string;
  verifiedMembers: string;
  co2Kg: string;
  cities: string;
  rating: string;
  communitySavingsInr: string;
  ngoDonatedInr: string;
};

export type WebTestimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
  rating: number;
};

export type WebHomeContent = {
  stats: WebHomeStats;
  testimonials: WebTestimonial[];
};

export async function getHomeContent(): Promise<WebHomeContent | null> {
  try {
    const res = await fetch(`${API_URL}/web/home`, { cache: "no-store" });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

export type LegalPageContent = {
  badge: string;
  heading: string;
  lastUpdated: string;
  subtext: string;
  tocLabel: string;
  sections: { num: string; title: string; body?: string; bullets?: string[] }[];
};

export async function getLegalContent(key: "terms" | "privacy"): Promise<LegalPageContent | null> {
  try {
    const res = await fetch(`${API_URL}/web/legal/${key}`, { next: { revalidate: 300 } });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}
