import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/scalelist/Navbar";
import { Hero } from "@/components/scalelist/Hero";
import { WhatIsAI } from "@/components/scalelist/WhatIsAI";
import { LogoBar } from "@/components/scalelist/LogoBar";
import { Features } from "@/components/scalelist/Features";
import { UseCases } from "@/components/scalelist/UseCases";
import { PlainEnglish } from "@/components/scalelist/PlainEnglish";
import { Testimonial } from "@/components/scalelist/Testimonial";
import { Coverage } from "@/components/scalelist/Coverage";
import { Verified } from "@/components/scalelist/Verified";
import { FAQ, faqs } from "@/components/scalelist/FAQ";
import { CTABanner } from "@/components/scalelist/CTABanner";
import { Footer } from "@/components/scalelist/Footer";

const TITLE = "AI B2B Lead Finder: Build Prospect Lists Fast | Scalelist";
const DESCRIPTION =
  "Describe your ideal customer in plain English and Scalelist's AI B2B Lead Finder builds a targeted list with verified work emails and mobile numbers. Try free.";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Scalelist Lead Finder",
  applicationCategory: "BusinessApplication",
  url: "https://scalelist.com/lead-finder/",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "50 free credits, no credit card required",
  },
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image:alt", content: "Scalelist AI lead finder building a list of CTOs in financial services" },
      { property: "og:image:alt", content: "Scalelist AI lead finder building a list of CTOs in financial services" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd) },
      { type: "application/ld+json", children: JSON.stringify(softwareJsonLd) },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <WhatIsAI />
        <LogoBar />
        <Features />
        <UseCases />
        <PlainEnglish />
        <Testimonial />
        <Coverage />
        <Verified />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
