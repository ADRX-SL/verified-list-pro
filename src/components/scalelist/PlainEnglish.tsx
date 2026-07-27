const chips = [
  "VPs of Engineering at Series B SaaS companies in Singapore",
  "Owners of ecommerce brands in Australia with 10 to 50 staff",
  "Heads of Marketing at healthcare companies in APAC, 200+ employees",
];

export function PlainEnglish() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <span className="overline">Plain English</span>
        <h2 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1]">
          AI sales prospecting in <span className="text-primary">plain English</span>.
        </h2>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          Scalelist turns AI sales prospecting into a single sentence. Instead of learning a query builder or stacking filters, you write the prospect you want the way you'd describe it to a colleague, and the AI lead finder maps it to structured criteria and returns the matching list.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {chips.map((c) => (
            <span
              key={c}
              className="rounded-full border border-border bg-card px-4 py-2 text-xs sm:text-sm text-muted-foreground"
            >
              {c}
            </span>
          ))}
        </div>

        <p className="mt-8 text-base text-foreground/90 leading-relaxed">
          Every result comes from Scalelist's verified prospecting database, so the list you build is one you can actually contact.
        </p>
      </div>
    </section>
  );
}
