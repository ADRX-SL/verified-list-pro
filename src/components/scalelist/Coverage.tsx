import { CheckCircle2 } from "lucide-react";

const regions = [
  { label: "North America", note: "Verified work emails and mobile numbers" },
  { label: "EMEA", note: "Verified work emails and mobile numbers" },
  { label: "APAC", note: "Verified work emails and mobile numbers, particularly strong reach" },
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
            Scalelist verifies every professional email and mobile number before it reaches your list. Up to <span className="font-semibold tabular-nums">95%</span> coverage and around <span className="font-semibold tabular-nums">99%</span> email accuracy on verified, weekly refreshed data, with particularly strong reach across APAC where many databases are thin.
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
      </div>
    </section>
  );
}
