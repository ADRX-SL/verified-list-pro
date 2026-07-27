import { useState } from "react";
import { ArrowRight, Coins } from "lucide-react";

const examples = [
  "Heads of Sales at SaaS companies in Singapore, 50 to 200 employees",
  "Founders of software companies in San Francisco, 50 to 200 employees",
  "Owners of retail companies in Australia with under 200 people",
];

export function Hero() {
  const [query, setQuery] = useState("");

  return (
    <section className="relative overflow-hidden pt-20 pb-20 md:pt-28 md:pb-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <span className="overline">AI B2B LEAD FINDER</span>

        <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05] text-foreground">
          AI B2B lead finder: describe your ideal customer, get a <span className="text-primary">ready to use</span> list.
        </h1>

        <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Type who you are targeting in plain English and Scalelist's AI lead finder builds a matching list of contacts with verified work emails and mobile numbers. No filter mazes. No exporting from LinkedIn and cleaning spreadsheets.
        </p>

        <div className="mt-12 mx-auto max-w-2xl">
          <div className="rounded-3xl border border-border bg-card p-4 sm:p-5 shadow-sm text-left">
            <textarea
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              rows={3}
                placeholder="Heads of Growth at fintech companies in APAC with over 200 employees"
              className="w-full resize-none rounded-2xl bg-transparent px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/70 outline-none"
            />
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mt-2 px-2">
              <div className="hidden sm:flex items-center gap-2 text-xs text-muted-foreground">
                <Coins className="h-3.5 w-3.5" />
                <span>Free to explore. <span className="font-semibold tabular-nums">1</span> credit per email, <span className="font-semibold tabular-nums">20</span> per mobile.</span>
              </div>
              <a
                href="https://app.scalelist.com/auth/signup?redirectUrl=%2Fapp%2Fdashboard"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:bg-primary-hover hover:gap-3 group"
              >
                Generate my list
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2 justify-center">
            {examples.map((ex) => (
              <button
                key={ex}
                onClick={() => setQuery(ex)}
                className="rounded-full border border-border bg-card px-4 py-2 text-xs sm:text-sm text-muted-foreground hover:border-primary/40 hover:text-foreground transition-colors text-left"
              >
                {ex}
              </button>
            ))}
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            <span className="font-semibold tabular-nums">50</span> free credits included. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
}
