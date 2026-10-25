import Link from "next/link";
import Footer from "@/components/Footer";
import HeroVideo from "@/components/HeroVideo";

const researchSteps = [
  {
    number: "01",
    title: "Research",
    heading: "Find relevant creators.",
    body: "We research your product, category and audience to find a strong fit.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="11" cy="11" r="7" stroke="#006D77" strokeWidth="1.8" />
        <path d="M21 21l-4.35-4.35" stroke="#006D77" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Introductions",
    heading: "Start the right conversation.",
    body: "We make warm introductions to relevant creators and help set the context.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="8" cy="9" r="3" stroke="#006D77" strokeWidth="1.8" />
        <circle cx="17" cy="9" r="3" stroke="#006D77" strokeWidth="1.8" />
        <path
          d="M2 20c0-3 2.7-5 6-5s6 2 6 5M12 20c0-3 2.7-5 5-5s5 2 5 5"
          stroke="#006D77"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Coordination",
    heading: "Keep approved work on track.",
    body: "We help coordinate the agreed campaign, with clear communication throughout.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="5" y="3" width="14" height="18" rx="1.5" stroke="#006D77" strokeWidth="1.8" />
        <path d="M9 8h6M9 12h6M9 16h3" stroke="#006D77" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
];

const simpleSteps = [
  {
    title: "Tell us your goal",
    body: "Share a few details about what you're looking for.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8l-5-5z"
          stroke="var(--color-ink)"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path d="M14 3v5h5" stroke="var(--color-ink)" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Review the fit",
    body: "We research and identify relevant creators.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="11" cy="11" r="7" stroke="var(--color-ink)" strokeWidth="1.6" />
        <path d="M21 21l-4.35-4.35" stroke="var(--color-ink)" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Agree the details",
    body: "We discuss and confirm the scope.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.6l-1-1a5.5 5.5 0 10-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 000-7.8z"
          stroke="var(--color-ink)"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Coordinate & review",
    body: "We keep things on track and review the results together.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 20h18M6 20V10M12 20V4M18 20v-7" stroke="var(--color-ink)" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
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

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-20 md:pt-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
              The right creators.
              <br />
              Meaningful partnerships.
            </h1>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-soft">
              We help AI and software brands find relevant creators and coordinate approved
              campaigns.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact?as=brand"
                className="inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-dark"
              >
                I&apos;m a Brand <ArrowIcon />
              </Link>
              <Link
                href="/contact?as=creator"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-page px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink"
              >
                I&apos;m a Creator <ArrowIcon />
              </Link>
            </div>
          </div>

          <div>
            <div className="rounded-2xl bg-soft p-4">
              <HeroVideo />
            </div>
            <p className="mt-4 text-center text-xs font-medium text-ink-soft">
              Research-led. Founder-led. Clearly agreed.
            </p>
          </div>
        </div>
      </section>

      {/* FROM A GOOD FIT TO AN AGREED CAMPAIGN */}
      <section id="how-it-works" className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          From a good fit to an agreed campaign.
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {researchSteps.map((step) => (
            <div key={step.number} className="rounded-2xl border border-line p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-soft text-xs font-bold text-teal">
                  {step.number}
                </span>
                {step.icon}
              </div>
              <h3 className="mt-4 text-sm font-semibold text-ink">{step.title}</h3>
              <p className="mt-1 text-[15px] font-semibold text-ink">{step.heading}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SIMPLE STEPS, CLEAR RESPONSIBILITIES */}
      <section className="bg-soft py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Simple steps. Clear responsibilities.
          </h2>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {simpleSteps.map((step, i) => (
              <div key={step.title} className="relative text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-page shadow-sm">
                  {step.icon}
                </div>
                <h3 className="mt-4 text-sm font-semibold text-ink">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">{step.body}</p>
                {i < simpleSteps.length - 1 && (
                  <span className="pointer-events-none absolute top-7 left-[calc(50%+40px)] hidden text-ink-soft/40 lg:block">
                    <ArrowIcon />
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl bg-navy p-8 text-white">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="opacity-90">
                <rect x="3" y="4" width="18" height="12" rx="1.5" stroke="#EAF6F2" strokeWidth="1.6" />
                <path d="M8 20h8M12 16v4" stroke="#EAF6F2" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
              <h3 className="mt-4 text-lg font-semibold">For brands</h3>
              <p className="mt-1 text-sm font-medium text-mint">
                Find an audience that fits your product.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                Work with relevant creators who understand your space, with clear agreements and a
                coordinated approach.
              </p>
              <Link
                href="/contact?as=brand"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-teal px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-dark"
              >
                Discuss a campaign <ArrowIcon />
              </Link>
            </div>

            <div className="rounded-2xl border border-line bg-page p-8">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="8" r="3.5" stroke="var(--color-ink)" strokeWidth="1.6" />
                <path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6" stroke="var(--color-ink)" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
              <h3 className="mt-4 text-lg font-semibold text-ink">For creators</h3>
              <p className="mt-1 text-sm font-medium text-teal">
                Explore relevant brand opportunities.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                Get introduced to brands that match your content, audience and interests, with
                clear and professional communication.
              </p>
              <Link
                href="/contact?as=creator"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-navy px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-navy hover:text-white"
              >
                Introduce your channel <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BUILT AROUND CAREFUL RESEARCH */}
      <section className="relative overflow-hidden py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-soft"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-16 top-1/2 h-36 w-36 -translate-y-1/2 translate-x-10 rounded-full border border-teal/30"
        />
        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <h2 className="mx-auto max-w-2xl text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Built around careful research and clear communication.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-ink-soft">
            Saifullah Connects brings brands and creators into focused commercial conversations.
          </p>
        </div>
      </section>

      {/* CTA BAR */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-navy p-8 sm:flex-row sm:items-center sm:p-10">
          <div>
            <h2 className="text-xl font-bold text-white sm:text-2xl">
              Let&apos;s explore the right fit.
            </h2>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-white/70">
              Whether you&apos;re a brand or a creator, we&apos;ll help you find relevant
              opportunities and take the next step with confidence.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-dark"
          >
            Start a conversation <ArrowIcon />
          </Link>
        </div>
      </section>

      <Footer variant="home" />
    </>
  );
}
