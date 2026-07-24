export function WhatIsAI() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <span className="overline">Definition</span>
        <h2 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1]">
          What is an <span className="text-primary">AI lead finder</span>?
        </h2>
        <div className="mt-8 rounded-2xl border border-border bg-card p-8 shadow-sm space-y-5">
          <p className="text-lg text-muted-foreground leading-relaxed">
            An AI lead finder is a lead generation tool that turns a plain-English description of your ideal customer into a list of real, contactable prospects. You give it criteria like job title, industry, location, and company size, and it returns matching people with verified work emails and mobile numbers.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A contact database is the underlying data. A lead finder is the search layer on top of it. Scalelist lets you query its prospecting database in plain English instead of stacking filters.
          </p>
        </div>
      </div>
    </section>
  );
}
