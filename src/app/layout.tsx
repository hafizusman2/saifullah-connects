import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://saifullahconnects.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Saifullah Connects | The right creators. Meaningful partnerships.",
    template: "%s | Saifullah Connects",
  },
  description:
    "Saifullah Connects helps AI and software brands find relevant creators and coordinate approved campaigns, through research-led, clearly agreed partnerships.",
  keywords: [
    "influencer marketing",
    "creator partnerships",
    "AI brand creators",
    "SaaS influencer marketing",
    "creator discovery",
  ],
  openGraph: {
    title: "Saifullah Connects | The right creators. Meaningful partnerships.",
    description:
      "We help AI and software brands find relevant creators and coordinate approved campaigns.",
    url: siteUrl,
    siteName: "Saifullah Connects",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saifullah Connects | The right creators. Meaningful partnerships.",
    description:
      "We help AI and software brands find relevant creators and coordinate approved campaigns.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white text-navy">
        <Header />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
