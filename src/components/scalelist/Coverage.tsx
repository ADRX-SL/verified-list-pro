const regions = [
  { label: "North America", email: 92, mobile: 87 },
  { label: "EMEA", email: 89, mobile: 73 },
  { label: "APAC", email: 76, mobile: 75 },
  { label: "Average across all three regions", email: 85, mobile: 77, avg: true },
];

function Bar({ pct, color }: { pct: number; color: string }) {
  return (
    <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
      <div className="h-full rounded-full" style={{ width: `${pct}%`, backgroundColor: color }} />
    </div>
  );
}

export function Coverage() {
  return (
    <section className="py-20 md:py-28 text-[#EAF1FB]" style={{ backgroundColor: "#15171A" }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <span className="font-sans font-semibold uppercase tracking-[0.18em] text-xs" style={{ color: "#8DA9F0" }}>
            Coverage
          </span>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl font-light tracking-tight text-white leading-[1.1]">
            The data other tools miss, especially in <em className="italic font-normal">APAC</em>.
          </h2>
          <p className="mt-5 text-lg text-white/70 leading-relaxed">
            We ran the same lead lists through <span className="font-mono">8</span> B2B data providers across three regions. Scalelist returned the highest coverage of any tool tested and ranked number one on mobile coverage in all three.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6 items-start">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-10">
            <div className="flex items-center justify-end gap-6 text-[10px] font-semibold uppercase tracking-widest text-white/60 mb-6">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "#4971DF" }} /> Email
              </span>
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-white" /> Mobile
              </span>
            </div>
            <div className="space-y-6">
              {regions.map((r) => (
                <div key={r.label} className={r.avg ? "pt-6 border-t border-white/10" : ""}>
                  <div className="flex items-baseline justify-between gap-4 mb-2.5">
                    <span className={`text-sm sm:text-base text-white ${r.avg ? "font-semibold" : ""}`}>
                      {r.label}
                    </span>
                    <span className="font-mono text-xs text-white/70 tabular-nums shrink-0">
                      {r.email}% <span className="text-white/30">·</span> {r.mobile}%
                    </span>
                  </div>
                  <div className="space-y-2">
                    <Bar pct={r.email} color="#4971DF" />
                    <Bar pct={r.mobile} color="#FFFFFF" />
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 font-mono text-[11px] text-white/40">
              Same lead lists · 8 providers · NA, EMEA, APAC.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 sm:p-10">
            <span className="font-sans font-semibold uppercase tracking-[0.18em] text-xs" style={{ color: "#8DA9F0" }}>
              Signal
            </span>
            <div className="mt-6 font-mono text-6xl font-bold text-white leading-none">
              9×
            </div>
            <p className="mt-5 font-serif text-2xl font-light leading-snug text-white">
              In APAC, Scalelist returned about <em className="italic">nine times more</em> mobile numbers than Apollo.
            </p>
            <p className="mt-4 font-mono text-xs text-white/50">75% vs 8%</p>
          </div>
        </div>
      </div>
    </section>
  );
}
