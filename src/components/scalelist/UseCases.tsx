import { CheckCircle2, Coins, Download } from "lucide-react";

const rows = [
  {
    title: "Build an outbound list from scratch",
    body: "You do not need names yet. Describe the persona and Scalelist returns matching contacts with emails and mobiles, ready for sequencing.",
    bullets: [
      "Describe role, industry, location, and company size",
      "Review matching contacts with company context",
      "Reveal verified emails and mobile numbers",
    ],
  },
  {
    title: "Spin up a fresh ICP list per campaign or client",
    body: "Agencies and RevOps rebuild lists in seconds as targeting changes, without stacking filters or re-learning a query builder.",
    bullets: [
      "Save and reuse lists",
      "Swap the persona and regenerate",
      "Keep every client list separate and clean",
    ],
  },
  {
    title: "Find direct dials for cold calling across the United States",
    body: "Filter to a persona and reveal verified US cell and direct-dial numbers where most databases fall short. Scalelist delivers strong nationwide coverage so your reps reach real American decision makers.",
    bullets: [
      "Verified US mobile and direct-dial numbers",
      "Coverage across all 50 states",
      "Higher US cell coverage than most databases",
    ],
  },
];

/* --- Distinct visuals per use case --- */

function PromptCard() {
  return (
    <div className="rounded-2xl bg-[#1a1a1a] p-6 sm:p-8 shadow-sm text-[#EAF1FB]">
      <div className="flex items-center justify-between">
        <span className="font-semibold tabular-nums text-[10px] uppercase tracking-widest rounded-full bg-primary/20 text-[#8DA9F0] px-2 py-1">
          ONE PROMPT
        </span>
        <span className="font-semibold tabular-nums text-[10px] text-white/40">scalelist › search</span>
      </div>
      <p className="mt-6 font-semibold tabular-nums text-sm leading-relaxed text-[#EAF1FB]">
        <span className="text-primary">$</span> find CTOs in Financial Services companies in the US with over <span className="text-white font-semibold">500</span> employees
      </p>
      <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.03] p-4">
        <div className="flex items-center justify-between">
          <div className="min-w-0">
            <div className="text-sm font-semibold truncate">Sarah Chen</div>
            <div className="text-xs text-white/60 truncate">CTO · Finovate Capital · New York</div>
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="rounded-md bg-white/10 text-white px-2 py-1 text-[10px] font-semibold tabular-nums">EMAIL</span>
            <span className="rounded-md bg-primary text-primary-foreground px-2 py-1 text-[10px] font-semibold tabular-nums">MOBILE</span>
          </div>
        </div>
      </div>
      <p className="mt-3 font-semibold tabular-nums text-[11px] text-white/40">
        + <span className="text-white/70">1,239</span> matching contacts
      </p>
    </div>
  );
}

function FiltersCard() {
  const chips = ["SaaS", "Series B+", "50–500", "Germany", "France", "UK", "VP Engineering", "CTO"];
  return (
    <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
      <div className="flex items-center justify-between">
        <span className="overline">Criteria</span>
        <span className="font-semibold tabular-nums text-xs text-muted-foreground">campaign · q3-emea</span>
      </div>

      <div className="mt-5 space-y-4">
        <div>
          <div className="text-xs text-muted-foreground mb-2">Industry & stage</div>
          <div className="flex flex-wrap gap-1.5">
            {chips.slice(0, 2).map((c) => (
              <span key={c} className="rounded-full bg-accent text-accent-foreground px-2.5 py-1 text-xs font-medium">{c}</span>
            ))}
          </div>
        </div>
        <div>
          <div className="text-xs text-muted-foreground mb-2">Headcount</div>
          <div className="flex flex-wrap gap-1.5">
            {chips.slice(2, 3).map((c) => (
              <span key={c} className="rounded-full bg-accent text-accent-foreground px-2.5 py-1 text-xs font-semibold tabular-nums">{c}</span>
            ))}
          </div>
        </div>
        <div>
          <div className="text-xs text-muted-foreground mb-2">Geography</div>
          <div className="flex flex-wrap gap-1.5">
            {chips.slice(3, 6).map((c) => (
              <span key={c} className="rounded-full bg-accent text-accent-foreground px-2.5 py-1 text-xs font-medium">{c}</span>
            ))}
          </div>
        </div>
        <div>
          <div className="text-xs text-muted-foreground mb-2">Titles</div>
          <div className="flex flex-wrap gap-1.5">
            {chips.slice(6).map((c) => (
              <span key={c} className="rounded-full bg-accent text-accent-foreground px-2.5 py-1 text-xs font-medium">{c}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between rounded-xl border border-primary/30 bg-primary/5 px-4 py-3">
        <span className="text-sm text-foreground">Matching contacts</span>
        <span className="font-semibold tabular-nums text-2xl font-bold text-primary">1,240</span>
      </div>
    </div>
  );
}

function ExportCard() {
  const rowsData = [
    { name: "Sarah Chen", role: "CTO · San Francisco", mobile: "+1 415 555 0182" },
    { name: "Marcus Lee", role: "VP Sales · Austin", mobile: "+1 512 555 0147" },
    { name: "Priya Nair", role: "Sales Director · Chicago", mobile: "+1 312 555 0193" },
  ];
  return (
    <div className="rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Download className="h-3.5 w-3.5 text-primary" />
          <span className="overline">Enriched export</span>
        </div>
        <span className="font-semibold tabular-nums text-[11px] text-muted-foreground">us-cto-q3.csv</span>
      </div>

      <div className="mt-4 overflow-hidden rounded-xl border border-border">
        <div className="grid grid-cols-[1.4fr_1fr_1fr] gap-3 px-3 py-2 bg-accent/40 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          <span>Name</span><span>Email</span><span>Mobile</span>
        </div>
        {rowsData.map((r) => (
          <div key={r.name} className="grid grid-cols-[1.4fr_1fr_1fr] items-center gap-3 px-3 py-2.5 border-t border-border bg-card">
            <div className="min-w-0">
              <div className="text-sm font-semibold text-foreground truncate">{r.name}</div>
              <div className="text-[11px] text-muted-foreground truncate">{r.role}</div>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-foreground">
              <CheckCircle2 className="h-3.5 w-3.5 shrink-0" style={{ color: "var(--color-verify)" }} />
              <span className="font-semibold tabular-nums truncate">verified</span>
            </div>
            <div className="font-semibold tabular-nums text-xs text-foreground truncate">{r.mobile}</div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between text-xs">
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <Coins className="h-3.5 w-3.5" />
          <span>Email <span className="font-semibold tabular-nums text-foreground">1</span> · Mobile <span className="font-semibold tabular-nums text-foreground">20</span> · Miss <span className="font-semibold tabular-nums text-foreground">0</span></span>
        </div>
        <span className="font-semibold tabular-nums text-foreground">63 credits used</span>
      </div>
    </div>
  );
}

const visuals = [PromptCard, FiltersCard, ExportCard];

export function UseCases() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <span className="overline">How you can use it</span>
          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            From an idea to an outbound list with <span className="text-primary">one lead finder tool</span>.
          </h2>
        </div>

        <div className="mt-16 space-y-20 md:space-y-28">
          {rows.map((r, i) => {
            const mediaRight = i % 2 === 0;
            const Visual = visuals[i];
            return (
              <div
                key={r.title}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
              >
                <div className={mediaRight ? "lg:order-1" : "lg:order-2"}>
                  <span className="font-semibold tabular-nums text-xs text-primary">{String(i + 1).padStart(2, "0")} / 03</span>
                  <h3 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-foreground leading-[1.15]">
                    {r.title}
                  </h3>
                  <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{r.body}</p>
                  <ul className="mt-6 space-y-3">
                    {r.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        <span className="text-base text-foreground/90">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={mediaRight ? "lg:order-2" : "lg:order-1"}>
                  <Visual />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
