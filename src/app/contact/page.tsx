import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us who you are and what you have in mind. Saifullah Connects will review the fit and discuss next steps.",
};

const introSteps = [
  {
    number: 1,
    title: "Share your goal",
    body: "Tell us who you are and what you're looking to achieve.",
  },
  {
    number: 2,
    title: "We review the fit",
    body: "We research and consider relevant creators or brand opportunities.",
  },
  {
    number: 3,
    title: "We discuss next steps",
    body: "If there's a good fit, we'll talk through the details and next steps.",
  },
];

const faqs = [
  {
    question: "Do you guarantee sales?",
    answer: "No. We agree the work and measurement before a campaign.",
  },
  {
    question: "Can creators enquire?",
    answer: "Yes. Share your channel and partnership interests.",
  },
];

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M2 7H12M12 7L7 2M12 7L7 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-soft"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-10 top-20 h-40 w-40 rounded-full border border-teal/30"
        />
        <div className="relative mx-auto max-w-6xl px-6 pt-16 pb-12">
          <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Let&apos;s find the right fit.
          </h1>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-soft">
            Tell us who you are and what you have in mind.
          </p>
        </div>
      </section>

      <section id="enquiry" className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1fr]">
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl bg-soft p-8">
              <h2 className="text-lg font-semibold text-ink">A clear first conversation.</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                We&apos;ll learn about your goals, review the fit and discuss next steps.
              </p>

              <ol className="mt-8 space-y-6">
                {introSteps.map((step) => (
                  <li key={step.number} className="flex gap-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal text-xs font-bold text-white">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-ink">{step.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-ink-soft">{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="flex gap-3 rounded-2xl border border-line p-5">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="mt-0.5 shrink-0"
              >
                <circle cx="12" cy="12" r="9" stroke="var(--color-ink-soft)" strokeWidth="1.6" />
                <path d="M12 11v6M12 8v.01" stroke="var(--color-ink-soft)" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
              <p className="text-sm leading-relaxed text-ink-soft">
                Submitting an enquiry does not create a partnership.
              </p>
            </div>
          </div>

          <Suspense fallback={null}>
            <ContactForm />
          </Suspense>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="text-xl font-bold tracking-tight text-ink">Frequently asked questions</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          {faqs.map((faq) => (
            <div key={faq.question}>
              <h3 className="text-sm font-semibold text-ink">{faq.question}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-navy p-8 sm:flex-row sm:items-center sm:p-10">
          <div>
            <h2 className="text-xl font-bold text-white sm:text-2xl">
              Relevant connections start with a conversation.
            </h2>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-white/70">
              Tell us what you&apos;re looking for and we&apos;ll take it from there.
            </p>
          </div>
          <Link
            href="#enquiry"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-dark"
          >
            Start a conversation <ArrowIcon />
          </Link>
        </div>
      </section>

      <Footer variant="contact" />
    </>
  );
}
