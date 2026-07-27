import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/scalelist/Navbar";
import { Hero } from "@/components/scalelist/Hero";
import { LogoBar } from "@/components/scalelist/LogoBar";
import { Features } from "@/components/scalelist/Features";
import { UseCases } from "@/components/scalelist/UseCases";
import { Coverage } from "@/components/scalelist/Coverage";
import { WhoItsFor } from "@/components/scalelist/WhoItsFor";
import { Comparison } from "@/components/scalelist/Comparison";
import { FAQ, faqs } from "@/components/scalelist/FAQ";
import { CTABanner } from "@/components/scalelist/CTABanner";
import { InlineCTA } from "@/components/scalelist/InlineCTA";
import { Footer } from "@/components/scalelist/Footer";

const TITLE = "AI B2B Lead Finder: Build Verified Prospect Lists in Plain English | Scalelist";
const DESCRIPTION =
  "Scalelist is an AI B2B lead finder. Describe your ideal customer in plain English and get a ready to use list with verified work emails and mobile numbers worldwide, with strong APAC coverage. Try free.";

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
  description: DESCRIPTION,
  keywords: [
    "ai b2b lead finder",
    "b2b lead finder",
    "ai lead finder",
    "lead finder",
    "lead generation software",
    "b2b contact database",
    "b2b lead generation",
    "outbound lead generation",
    "sales leads",
  ],
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "50 free credits, no credit card required",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://scalelist.com" },
    { "@type": "ListItem", position: 2, name: "Platform", item: "https://scalelist.com" },
    { "@type": "ListItem", position: 3, name: "Lead Finder", item: "https://scalelist.com/lead-finder/" },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://scalelist.com/lead-finder/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image:alt", content: "Scalelist AI lead finder building a list of CTOs in financial services" },
      { property: "og:image:alt", content: "Scalelist AI lead finder building a list of CTOs in financial services" },
    ],
    links: [{ rel: "canonical", href: "https://scalelist.com/lead-finder/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd) },
      { type: "application/ld+json", children: JSON.stringify(softwareJsonLd) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbJsonLd) },
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
        <LogoBar />
        <UseCases />
        <Features />
        <Coverage />
        <WhoItsFor />
        <Comparison />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
