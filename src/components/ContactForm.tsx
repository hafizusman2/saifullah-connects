"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

type EnquirerType = "brand" | "creator" | "other";

const tabs: { value: EnquirerType; label: string }[] = [
  { value: "brand", label: "Brand" },
  { value: "creator", label: "Creator" },
  { value: "other", label: "Other" },
];

const channelLabel: Record<EnquirerType, string> = {
  brand: "Company or channel link",
  creator: "Company or channel link",
  other: "Company or channel link",
};

type Status = "idle" | "submitting" | "error";

export default function ContactForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initial = searchParams.get("as");
  const [type, setType] = useState<EnquirerType>(
    initial === "creator" ? "creator" : initial === "other" ? "other" : "brand"
  );
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const formData = new FormData(event.currentTarget);
    const payload = {
      type,
      name: formData.get("name"),
      email: formData.get("email"),
      channel: formData.get("channel"),
      message: formData.get("message"),
      timing: formData.get("timing"),
      budget: formData.get("budget"),
    };

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      // Drive the success view off the URL (not component state) so it can't
      // get stuck showing "sent" if Next.js reuses this component instance
      // from its router cache when the user navigates away and back.
      router.replace("/contact?sent=1", { scroll: false });
      setStatus("idle");
    } catch {
      setStatus("error");
    }
  }

  if (searchParams.get("sent") === "1") {
    return (
      <div className="rounded-2xl border border-border bg-white p-8 text-center">
        <h2 className="text-lg font-semibold text-navy">Enquiry sent.</h2>
        <p className="mt-2 text-sm leading-relaxed text-navy-soft">
          Thanks for reaching out — we&apos;ll review the details and get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-white p-8">
      <h2 className="text-lg font-semibold text-navy">Your enquiry</h2>

      <div className="mt-5 grid grid-cols-3 gap-1 rounded-full bg-mint p-1">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            type="button"
            onClick={() => setType(tab.value)}
            className={`cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              type === tab.value ? "bg-teal text-white" : "text-navy-soft hover:text-navy"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-navy">
            Name <span className="text-teal">*</span>
          </label>
          <input
            id="name"
            name="name"
            required
            type="text"
            className="mt-1.5 w-full rounded-lg border border-border px-4 py-2.5 text-sm text-navy outline-none focus:border-teal"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-navy">
            Email <span className="text-teal">*</span>
          </label>
          <input
            id="email"
            name="email"
            required
            type="email"
            className="mt-1.5 w-full rounded-lg border border-border px-4 py-2.5 text-sm text-navy outline-none focus:border-teal"
          />
        </div>

        <div>
          <label htmlFor="channel" className="block text-sm font-medium text-navy">
            {channelLabel[type]} <span className="text-teal">*</span>
          </label>
          <input
            id="channel"
            name="channel"
            required
            type="text"
            className="mt-1.5 w-full rounded-lg border border-border px-4 py-2.5 text-sm text-navy outline-none focus:border-teal"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-navy">
            How can we help? <span className="text-teal">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className="mt-1.5 w-full resize-none rounded-lg border border-border px-4 py-2.5 text-sm text-navy outline-none focus:border-teal"
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="timing" className="block text-sm font-medium text-navy">
              Preferred timing <span className="text-navy-soft">(optional)</span>
            </label>
            <input
              id="timing"
              name="timing"
              type="text"
              placeholder="e.g. Next month"
              className="mt-1.5 w-full rounded-lg border border-border px-4 py-2.5 text-sm text-navy outline-none placeholder:text-navy-soft/60 focus:border-teal"
            />
          </div>
          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-navy">
              Budget range <span className="text-navy-soft">(optional)</span>
            </label>
            <select
              id="budget"
              name="budget"
              defaultValue=""
              className="mt-1.5 w-full rounded-lg border border-navy/25 bg-white px-4 py-2.5 text-sm text-navy outline-none focus:border-teal"
            >
              <option value="">Not decided</option>
              <option value="under-1k">Under £1,000</option>
              <option value="1k-5k">£1,000 – £5,000</option>
              <option value="5k-15k">£5,000 – £15,000</option>
              <option value="15k-plus">£15,000+</option>
            </select>
          </div>
        </div>

        <p className="text-xs leading-relaxed text-navy-soft">
          We use these details to respond to your enquiry.{" "}
          <Link href="/privacy" className="font-medium text-teal hover:underline">
            Privacy Notice
          </Link>
        </p>

        {status === "error" && (
          <p className="text-sm font-medium text-red-600">
            Something went wrong sending your enquiry. Please try again.
          </p>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-dark disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? "Sending..." : "Send enquiry"}
          {status !== "submitting" && (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path
                d="M2 7H12M12 7L7 2M12 7L7 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </form>
    </div>
  );
}
