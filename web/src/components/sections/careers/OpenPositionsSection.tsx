"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useId, useState } from "react";
import {
  applicationFormContent,
  openPositionsContent,
} from "@/data/careers-content";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerItem, StaggerReveal } from "@/components/motion/Stagger";
import { EASE } from "@/components/motion/variants";
import { getJobs, submitJobApplication, type WebJob } from "@/lib/api";

// Fallback used only if the backend can't be reached, so the page never renders empty.
const FALLBACK_JOBS: WebJob[] = openPositionsContent.jobs.map((job) => ({
  id: job.id,
  slug: job.id,
  title: job.title,
  department: job.tags[0] ?? "",
  location: job.tags[1] ?? "",
  employment: job.tags[2] ?? "",
  experience: job.tags[3] ?? null,
  description: job.description,
  skills: job.skills,
}));

function BoltIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden className="text-[var(--ezway-green)]">
      <path
        d="M10 1.5L3.5 10.5H8.5L8 16.5L14.5 7.5H9.5L10 1.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden
      className={`text-[var(--ezway-muted)] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path
        d="M2.5 5L7 9.5L11.5 5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FormField({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  required,
}: {
  label: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}) {
  const id = useId();
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-[11px] font-bold uppercase tracking-[0.06em] text-[var(--ezway-muted)]"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full rounded-[10px] border border-[#e5e5e5] bg-white px-4 py-2.5 text-[14px] text-[var(--ezway-black)] placeholder-[#b3b3b3] outline-none transition-colors focus:border-[var(--ezway-orange)]"
      />
    </div>
  );
}

const EMPTY_APPLICATION_FORM = { fullName: "", email: "", phone: "", portfolioUrl: "", motivation: "" };

function ApplicationForm({ slug, jobTitle }: { slug: string; jobTitle: string }) {
  const { fields, submitLabel } = applicationFormContent;
  const motivationId = useId();
  const [form, setForm] = useState(EMPTY_APPLICATION_FORM);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const update = (key: keyof typeof form) => (value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const result = await submitJobApplication({
      slug,
      fullName: form.fullName,
      email: form.email,
      phone: form.phone || undefined,
      portfolioUrl: form.portfolioUrl || undefined,
      motivation: form.motivation || undefined,
    });

    if (result.ok) {
      setStatus("success");
      setForm(EMPTY_APPLICATION_FORM);
    } else {
      setStatus("error");
      setErrorMessage(result.error);
    }
  };

  if (status === "success") {
    return (
      <div className="mt-6 flex flex-col items-center rounded-[18px] bg-[#f6f6f7] px-5 py-8 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e6f7ec] text-xl text-[var(--ezway-green)]">
          ✓
        </span>
        <h4 className="mt-4 text-[15px] font-bold text-[var(--ezway-black)]">
          Application submitted!
        </h4>
        <p className="mt-1.5 max-w-xs text-[13.5px] text-[var(--ezway-muted)]">
          Thanks for applying to {jobTitle} — we&apos;ll be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-6 rounded-[18px] bg-[#f6f6f7] p-5 md:p-6">
      <h4 className="text-[15px] font-bold text-[var(--ezway-black)]">
        Apply for {jobTitle}
      </h4>

      <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormField
            label={fields.fullName.label}
            placeholder={fields.fullName.placeholder}
            value={form.fullName}
            onChange={update("fullName")}
            required
          />
          <FormField
            label={fields.email.label}
            placeholder={fields.email.placeholder}
            type="email"
            value={form.email}
            onChange={update("email")}
            required
          />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormField
            label={fields.phone.label}
            placeholder={fields.phone.placeholder}
            type="tel"
            value={form.phone}
            onChange={update("phone")}
          />
          <FormField
            label={fields.portfolio.label}
            placeholder={fields.portfolio.placeholder}
            type="url"
            value={form.portfolioUrl}
            onChange={update("portfolioUrl")}
          />
        </div>
        <div>
          <label
            htmlFor={motivationId}
            className="mb-1.5 block text-[11px] font-bold uppercase tracking-[0.06em] text-[var(--ezway-muted)]"
          >
            {fields.motivation.label}
          </label>
          <textarea
            id={motivationId}
            rows={3}
            placeholder={fields.motivation.placeholder}
            value={form.motivation}
            onChange={(e) => update("motivation")(e.target.value)}
            className="w-full resize-none rounded-[10px] border border-[#e5e5e5] bg-white px-4 py-3 text-[14px] text-[var(--ezway-black)] placeholder-[#b3b3b3] outline-none transition-colors focus:border-[var(--ezway-orange)]"
          />
        </div>

        {status === "error" && (
          <p className="rounded-[10px] bg-[#fdecea] px-4 py-3 text-[13px] text-[#c0392b]">
            {errorMessage}
          </p>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center gap-2 rounded-full bg-[var(--ezway-green)] px-6 py-3 text-[14px] font-bold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? "Submitting..." : submitLabel}
        </button>
      </form>
    </div>
  );
}

function JobCard({ job }: { job: WebJob }) {
  const [open, setOpen] = useState(false);
  const tags = [job.department, job.location, job.employment, job.experience].filter(
    (tag): tag is string => Boolean(tag)
  );

  return (
    <div className="rounded-[20px] border border-[#ececec] bg-white p-5 md:p-6 lg:p-7">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
        <div className="flex items-center gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--ezway-mint)]">
            <BoltIcon />
          </div>
          <div>
            <h3 className="text-[16px] font-bold text-[var(--ezway-black)]">
              {job.title}
            </h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[var(--ezway-light-gray)] px-3 py-1 text-[12px] font-medium text-[var(--ezway-muted)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex w-full items-center gap-3 sm:w-auto sm:shrink-0">
          {!open && (
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="flex-1 rounded-full bg-[var(--ezway-green)] px-6 py-2.5 text-[14px] font-bold text-white transition-all duration-200 hover:opacity-90 active:scale-95 sm:flex-none"
            >
              Apply Now
            </button>
          )}
          <button
            type="button"
            aria-expanded={open}
            aria-label={open ? "Hide role details" : "Show role details"}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--ezway-light-gray)] transition-all duration-200 hover:bg-[#ececec] active:scale-90"
          >
            <ChevronIcon open={open} />
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="details"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="overflow-hidden"
          >
            <p className="mt-5 text-[14px] leading-[1.7] text-[var(--ezway-muted)]">
              {job.description}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="text-[13px] font-semibold text-[var(--ezway-muted)]">
                Skills:
              </span>
              {job.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-[#e6f7ec] px-3 py-1 text-[12px] font-semibold text-[var(--ezway-green)]"
                >
                  {skill}
                </span>
              ))}
            </div>

            <ApplicationForm slug={job.slug} jobTitle={job.title} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function OpenPositionsSection() {
  const [jobs, setJobs] = useState<WebJob[]>(FALLBACK_JOBS);

  useEffect(() => {
    let cancelled = false;
    getJobs().then((live) => {
      if (!cancelled && live.length > 0) setJobs(live);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="careers-open-positions" className="bg-white">
      <div className="ezway-container px-5 py-10 md:px-10 md:py-14 lg:px-16 lg:py-20">
      <Reveal className="flex flex-col items-start gap-4 sm:flex-row sm:justify-between sm:gap-6">
        <div>
          <p className="ezway-label mb-3">{openPositionsContent.label}</p>
          <h2 className="ezway-display text-[26px] leading-[1] text-[var(--ezway-black)] md:text-[34px] lg:text-[42px] lg:leading-[0.95]">
            {openPositionsContent.heading}
          </h2>
        </div>
        <span className="shrink-0 rounded-full bg-[#fff0e0] px-4 py-2 text-[13px] font-bold text-[var(--ezway-orange)] sm:mt-2">
          {jobs.length} role{jobs.length === 1 ? "" : "s"} open
        </span>
      </Reveal>

      <StaggerReveal className="mt-8 space-y-4 md:mt-10">
        {jobs.map((job) => (
          <StaggerItem key={job.id}>
            <JobCard job={job} />
          </StaggerItem>
        ))}
      </StaggerReveal>
      </div>
    </section>
  );
}
