"use client";

import { useId } from "react";
import {
  contactDetailsContent,
  contactFormContent,
  followUsContent,
} from "@/data/contact-content";
import { Reveal } from "@/components/motion/Reveal";
import { fadeInLeft, fadeInRight } from "@/components/motion/variants";

function PinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden className="text-[var(--ezway-orange)]">
      <path
        d="M8 15C8 15 13 10.6 13 6.5C13 3.7 10.8 1.5 8 1.5C5.2 1.5 3 3.7 3 6.5C3 10.6 8 15 8 15Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <circle cx="8" cy="6.5" r="1.75" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden className="text-[var(--ezway-orange)]">
      <path
        d="M3.5 2.5H6L7 5.5L5.3 6.7C5.9 8.2 7.3 9.6 8.8 10.2L10 8.5L13 9.5V12C13 12.83 12.3 13.5 11.47 13.4C6.5 12.9 2.6 9 2.1 4.03C2 3.2 2.67 2.5 3.5 2.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden className="text-[var(--ezway-orange)]">
      <rect x="1.5" y="3.5" width="13" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M2 4.5L8 9L14 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden className={className}>
      <circle cx="8" cy="8" r="6.25" stroke="currentColor" strokeWidth="1.4" />
      <path d="M8 1.75C9.8 3.8 10.7 5.9 10.7 8C10.7 10.1 9.8 12.2 8 14.25C6.2 12.2 5.3 10.1 5.3 8C5.3 5.9 6.2 3.8 8 1.75Z" stroke="currentColor" strokeWidth="1.4" />
      <path d="M1.75 8H14.25" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
      <rect x="4" y="4" width="16" height="16" rx="5" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
      <path d="M14 8h2V5h-2c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.5l.5-3H13V9c0-.6.4-1 1-1z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
      <path d="M10 9.5v5l4.5-2.5L10 9.5zm8.8-3.2a2.5 2.5 0 0 0-1.8-1.8C15.5 4 12 4 12 4s-3.5 0-5.9.5a2.5 2.5 0 0 0-1.8 1.8C4 8.2 4 12 4 12s0 3.8.3 5.3a2.5 2.5 0 0 0 1.8 1.8C8.5 20 12 20 12 20s3.5 0 5.9-.5a2.5 2.5 0 0 0 1.8-1.8c.3-1.5.3-5.3.3-5.3s0-3.8-.2-5.3z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
      <path d="M6 9h3v10H6V9zm1.5-4.5A1.8 1.8 0 1 1 6 6.3a1.8 1.8 0 0 1 1.5-1.8zM10 9h2.9v1.4h.1c.4-.8 1.5-1.7 3.1-1.7 3.3 0 3.9 2.2 3.9 5V19H16v-4.6c0-1.1 0-2.5-1.5-2.5-1.6 0-1.9 1.3-1.9 2.5V19H10V9z" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M14.5 1.5L7.5 14L6 9L1.5 7.5L14.5 1.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M14.5 1.5L6 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

const contactIconMap = {
  pin: PinIcon,
  phone: PhoneIcon,
  mail: MailIcon,
  globe: GlobeIcon,
};

const socialIconMap = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  linkedin: LinkedInIcon,
  youtube: YouTubeIcon,
};

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
        className="w-full rounded-[10px] border border-[#e5e5e5] bg-[#f7f7f7] px-4 py-2.5 text-[14px] text-[var(--ezway-black)] placeholder-[#b3b3b3] outline-none transition-colors focus:border-[var(--ezway-orange)]"
      />
    </div>
  );
}

function SendMessageCard() {
  const { fields, submitLabel } = contactFormContent;
  const messageId = useId();

  return (
    <div className="rounded-[24px] bg-white p-5 md:p-6 lg:p-8">
      <h2 className="text-[20px] font-black uppercase tracking-[-0.01em] text-[var(--ezway-black)]">
        {contactFormContent.heading}
      </h2>
      <p className="mt-2 text-[13.5px] text-[var(--ezway-muted)]">
        {contactFormContent.subtext}
      </p>

      <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
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
          <FormField label={fields.subject.label} placeholder={fields.subject.placeholder} />
        </div>
        <div>
          <label
            htmlFor={messageId}
            className="mb-1.5 block text-[11px] font-bold uppercase tracking-[0.06em] text-[var(--ezway-muted)]"
          >
            {fields.message.label}
          </label>
          <textarea
            id={messageId}
            rows={4}
            placeholder={fields.message.placeholder}
            className="w-full resize-none rounded-[10px] border border-[#e5e5e5] bg-[#f7f7f7] px-4 py-3 text-[14px] text-[var(--ezway-black)] placeholder-[#b3b3b3] outline-none transition-colors focus:border-[var(--ezway-orange)]"
          />
        </div>
        <button
          type="submit"
          className="ezway-btn-primary mt-2 w-full py-3.5 text-[15px] transition-transform duration-200 hover:scale-[1.02] active:scale-95"
        >
          <SendIcon />
          {submitLabel}
        </button>
      </form>
    </div>
  );
}

function ContactDetailsCard() {
  return (
    <div className="rounded-[24px] bg-[var(--ezway-black)] p-5 md:p-6 lg:p-7">
      <h3 className="text-[16px] font-black uppercase tracking-[-0.01em] text-white">
        {contactDetailsContent.heading}
      </h3>
      <div className="mt-5 space-y-5">
        {contactDetailsContent.items.map((item) => {
          const Icon = contactIconMap[item.icon];
          return (
            <div key={item.label} className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--ezway-orange)]/15">
                <Icon />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-[var(--ezway-orange)]">
                  {item.label}
                </p>
                {item.lines.map((line, i) =>
                  item.href ? (
                    <a
                      key={line}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className={`block text-[13.5px] leading-[1.5] hover:underline ${
                        i === 0 ? "text-white" : "text-[#a1a1a1]"
                      }`}
                    >
                      {line}
                    </a>
                  ) : (
                    <p
                      key={line}
                      className={`text-[13.5px] leading-[1.5] ${
                        i === 0 ? "text-white" : "text-[#a1a1a1]"
                      }`}
                    >
                      {line}
                    </p>
                  )
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function FollowUsCard() {
  return (
    <div className="rounded-[24px] bg-[var(--ezway-orange)] p-5 md:p-6 lg:p-7">
      <h3 className="text-[16px] font-black uppercase tracking-[-0.01em] text-white">
        {followUsContent.heading}
      </h3>
      <div className="mt-5 space-y-3">
        {followUsContent.items.map((item) => {
          const Icon = socialIconMap[item.icon];
          return (
            <a
              key={item.handle}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-[16px] bg-white/10 px-4 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/15"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/25 text-white">
                <Icon />
              </div>
              <div>
                <p className="text-[13.5px] font-bold text-white">{item.handle}</p>
                <p className="text-[12px] text-white/70">{item.platform}</p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export function ContactFormSection() {
  return (
    <section className="bg-[var(--ezway-light-gray)]">
      <div className="ezway-container grid grid-cols-1 items-start gap-6 px-5 py-10 md:px-10 md:py-12 lg:grid-cols-[1.5fr_1fr] lg:px-16 lg:py-16">
        <Reveal variants={fadeInLeft}>
          <SendMessageCard />
        </Reveal>
        <Reveal variants={fadeInRight} className="space-y-6">
          <ContactDetailsCard />
          <FollowUsCard />
        </Reveal>
      </div>
    </section>
  );
}
