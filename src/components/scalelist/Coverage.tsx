import { ArrowRight, CheckCircle2, ShieldCheck, Star } from "lucide-react";

const regions = [
  { label: "North America", note: "Verified work emails and mobile numbers" },
  { label: "EMEA", note: "Verified work emails and mobile numbers" },
  { label: "APAC", note: "Verified work emails and mobile numbers" },
];

export function Coverage() {
  return (
    <section className="py-20 md:py-28 text-[#EAF1FB]" style={{ backgroundColor: "#1a1a1a" }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <span className="font-sans font-semibold uppercase tracking-[0.18em] text-xs" style={{ color: "#8DA9F0" }}>
            Coverage
          </span>
          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.1]">
            The verified contact data other tools miss, <span className="text-primary">worldwide</span>.
          </h2>
          <p className="mt-5 text-lg text-white/70 leading-relaxed">
            Scalelist verifies every professional email and mobile number before it reaches your list. Up to <span className="font-semibold tabular-nums">95%</span> coverage, around <span className="font-semibold tabular-nums">99%</span> email accuracy, and under <span className="font-semibold tabular-nums">5%</span> bounce on verified, weekly refreshed data.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6 items-start">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-10">
            <div className="text-[10px] font-semibold uppercase tracking-widest text-white/60 mb-6">
              Verified coverage by region
            </div>
            <div className="space-y-4">
              {regions.map((r) => (
                <div
                  key={r.label}
                  className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-5"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" style={{ color: "var(--color-verify)" }} aria-hidden />
                  <div className="min-w-0">
                    <div className="text-base font-semibold text-white">{r.label}</div>
                    <div className="mt-1 text-sm text-white/70">{r.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 sm:p-10">
            <span className="font-sans font-semibold uppercase tracking-[0.18em] text-xs" style={{ color: "#8DA9F0" }}>
              Signal
            </span>
            <div className="mt-6 font-semibold tabular-nums text-6xl font-bold text-white leading-none">
              95%
            </div>
            <p className="mt-5 text-[11px] font-semibold uppercase tracking-widest text-white/60">
              Verified coverage worldwide
            </p>
            <p className="mt-5 text-2xl font-semibold leading-snug text-white">
              Around <span className="text-primary">99% email accuracy</span> on weekly refreshed data.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex flex-col sm:flex-row gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white">
              <span className="flex items-center gap-0.5" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current text-white" />
                ))}
              </span>
              <span className="font-semibold tabular-nums">4.8/5</span>
              <span className="text-white/70">Google</span>
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white">
              <ShieldCheck className="h-4 w-4" aria-hidden />
              <span>GDPR compliant</span>
            </span>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://app.scalelist.com/auth/signup?redirectUrl=%2Fapp%2Fdashboard"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:bg-primary-hover hover:gap-3 group"
            >
              Sign up for free
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="https://form.typeform.com/to/lvQHcXGx"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border border-white/20 bg-transparent px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              Talk to sales
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
