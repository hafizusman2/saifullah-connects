import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description: "How Saifullah Connects collects, uses and stores the details you share with us.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-bold tracking-tight text-navy">Privacy Notice</h1>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-navy-soft">
          <p>
            When you submit an enquiry through our contact form, we collect your name, email
            address, company or channel link, and the details of your message, along with any
            optional timing or budget information you choose to share.
          </p>
          <p>
            We use these details only to respond to your enquiry and assess whether there&apos;s a
            relevant fit between a brand and a creator. We do not sell your information, and we
            don&apos;t share it with third parties beyond what&apos;s needed to respond to you.
          </p>
          <p>
            Submitting an enquiry does not create a partnership or any obligation on either side —
            it&apos;s simply the start of a conversation.
          </p>
          <p>
            If you&apos;d like your details removed from our records, email us at{" "}
            <a href="mailto:saifullah@saifullahconnects.com" className="font-medium text-teal hover:underline">
              saifullah@saifullahconnects.com
            </a>{" "}
            and we&apos;ll action your request.
          </p>
        </div>
      </section>
      <Footer variant="home" />
    </>
  );
}
