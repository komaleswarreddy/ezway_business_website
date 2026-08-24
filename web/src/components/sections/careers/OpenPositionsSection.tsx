"use client";

import { useId, useState } from "react";
import {
  applicationFormContent,
  openPositionsContent,
} from "@/data/careers-content";

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
}: {
  label: string;
  placeholder: string;
  type?: string;
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
        className="w-full rounded-[10px] border border-[#e5e5e5] bg-white px-4 py-2.5 text-[14px] text-[var(--ezway-black)] placeholder-[#b3b3b3] outline-none transition-colors focus:border-[var(--ezway-orange)]"
      />
    </div>
  );
}

function ApplicationForm({ jobTitle }: { jobTitle: string }) {
  const { fields, submitLabel } = applicationFormContent;
  const motivationId = useId();

  return (
    <div className="mt-6 rounded-[18px] bg-[#f6f6f7] p-5 md:p-6">
      <h4 className="text-[15px] font-bold text-[var(--ezway-black)]">
        Apply for {jobTitle}
      </h4>

      <form
        className="mt-5 space-y-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormField label={fields.fullName.label} placeholder={fields.fullName.placeholder} />
          <FormField
            label={fields.email.label}
            placeholder={fields.email.placeholder}
            type="email"
          />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormField label={fields.phone.label} placeholder={fields.phone.placeholder} type="tel" />
          <FormField label={fields.portfolio.label} placeholder={fields.portfolio.placeholder} type="url" />
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
            className="w-full resize-none rounded-[10px] border border-[#e5e5e5] bg-white px-4 py-3 text-[14px] text-[var(--ezway-black)] placeholder-[#b3b3b3] outline-none transition-colors focus:border-[var(--ezway-orange)]"
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-full bg-[var(--ezway-green)] px-6 py-3 text-[14px] font-bold text-white transition-opacity hover:opacity-90"
        >
          {submitLabel}
        </button>
      </form>
    </div>
  );
}

function JobCard({ job }: { job: (typeof openPositionsContent.jobs)[number] }) {
  const [open, setOpen] = useState(false);

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
              {job.tags.map((tag) => (
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
              className="flex-1 rounded-full bg-[var(--ezway-green)] px-6 py-2.5 text-[14px] font-bold text-white transition-opacity hover:opacity-90 sm:flex-none"
            >
              {job.applyLabel}
            </button>
          )}
          <button
            type="button"
            aria-expanded={open}
            aria-label={open ? "Hide role details" : "Show role details"}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--ezway-light-gray)] transition-colors hover:bg-[#ececec]"
          >
            <ChevronIcon open={open} />
          </button>
        </div>
      </div>

      {open && (
        <>
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

          <ApplicationForm jobTitle={job.title} />
        </>
      )}
    </div>
  );
}

export function OpenPositionsSection() {
  return (
    <section
      id="careers-open-positions"
      className="bg-white px-5 py-10 md:px-10 md:py-14 lg:px-16 lg:py-20"
    >
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:justify-between sm:gap-6">
        <div>
          <p className="ezway-label mb-3">{openPositionsContent.label}</p>
          <h2 className="ezway-display text-[26px] leading-[1] text-[var(--ezway-black)] md:text-[34px] lg:text-[42px] lg:leading-[0.95]">
            {openPositionsContent.heading}
          </h2>
        </div>
        <span className="shrink-0 rounded-full bg-[#fff0e0] px-4 py-2 text-[13px] font-bold text-[var(--ezway-orange)] sm:mt-2">
          {openPositionsContent.rolesOpenBadge}
        </span>
      </div>

      <div className="mt-8 space-y-4 md:mt-10">
        {openPositionsContent.jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </section>
  );
}
