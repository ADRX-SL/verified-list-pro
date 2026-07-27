import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const faqs = [
  { q: "What is an AI lead finder?", a: "An AI lead finder is a lead generation tool that finds real, contactable B2B prospects from a description of your ideal customer, instead of making you stack filters or already know the names." },
  { q: "What is a B2B lead finder?", a: "A B2B lead finder searches a prospecting database to build a list of business contacts that match your ideal customer, then reveals their verified work emails and mobile numbers." },
  { q: "How does an AI lead finder work?", a: "You describe your target in plain English. The AI maps it to structured criteria such as title, industry, geography, and company size, and returns matching people with company context, ready to reveal and export." },
  { q: "How is Lead Finder different from Email Finder and Mobile Finder?", a: "Lead Finder builds a list of prospects from Scalelist's database when you don't have names yet. Email Finder and Mobile Finder reveal verified contact details for people you already have. They work together." },
  { q: "What's the difference between a lead finder and a contact database?", a: "A contact database is the raw data. A lead finder is the search layer on top that turns your description into a usable, verified list." },
  { q: "What filters can I use?", a: "You can target by job title, industry, geography, and company size, expressed in natural language." },
  { q: "Are the emails and mobile numbers verified?", a: "Yes. Scalelist verifies every professional email and mobile number before it reaches your list, with around 99% email verification accuracy and up to 95% of contacts verified on weekly refreshed data." },
  { q: "Does Lead Finder cover prospects outside North America?", a: "Yes. Scalelist has strong verified coverage worldwide, including work emails and mobile numbers, and is particularly strong across APAC where many databases are thin." },
  { q: "How do I find B2B leads with Scalelist?", a: "Describe your ideal customer in plain English, for example 'Heads of Sales at SaaS companies in Singapore with 50 to 200 employees'. Scalelist's AI lead finder returns a matching list and reveals verified work emails and mobile numbers, ready to export." },
  { q: "What is outbound lead generation?", a: "Outbound lead generation is proactively building a list of target prospects and reaching out to them, rather than waiting for inbound interest. A B2B lead finder like Scalelist gives you the verified contact list to run outbound at scale." },
  { q: "How much does a B2B lead finder cost?", a: "A verified email costs 1 credit and a verified mobile number costs 20 credits. New accounts get 50 free credits, no credit card required." },
];

export function FAQ() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div>
          <span className="overline">FAQ</span>
          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            Lead Finder questions, <span className="text-primary">answered</span>.
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-2xl border border-border bg-card px-6 shadow-sm"
            >
              <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline py-5">
                <span className="flex items-center gap-4">
                  <span className="font-semibold tabular-nums text-xs text-primary shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <span>{f.q}</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-5 pl-10">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
