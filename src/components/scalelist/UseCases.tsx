import { CheckCircle2, Coins, Download } from "lucide-react";

const rows = [
  {
    title: "Describe your ideal customer",
    body: "Write your target the way you'd say it to a colleague. No filter mazes, no query builder to learn.",
    bullets: [
      "Plain-English input",
      "Role, industry, location, and company size",
      "Refine and rerun in seconds",
    ],
  },
  {
    title: "Target precisely, not approximately",
    body: "Scalelist maps your sentence to structured criteria, so the list matches exactly who you meant.",
    bullets: [
      "Understands title, seniority, industry, geography, and headcount",
      "See the matching count before you spend a credit",
      "Adjust and rebuild instantly",
    ],
  },
  {
    title: "Activate anywhere",
    body: "Reveal verified work emails and mobile numbers, then push the list into your stack in one click.",
    bullets: [
      "Verified emails and mobile numbers",
      "Export to CSV or send to HubSpot, Salesforce, and Zapier",
      "Or pull it via API and MCP",
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
        <span className="text-primary">$</span> find Heads of Growth at SaaS companies in the US with over <span className="text-white font-semibold">200</span> employees
      </p>
      <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.03] p-4">
        <div className="flex items-center justify-between">
          <div className="min-w-0">
            <div className="text-sm font-semibold truncate">Emily Carter</div>
            <div className="text-xs text-white/60 truncate">Head of Growth · Northwind · San Francisco</div>
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
  const chips = ["SaaS", "Series B+", "50-500", "United States", "New York", "California", "VP Sales", "CTO"];
  return (
    <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
      <div className="flex items-center justify-between">
        <span className="overline">Understood from your prompt</span>
        <span className="font-semibold tabular-nums text-xs text-muted-foreground">campaign · q3-us</span>
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
    { name: "Emily Carter", role: "Head of Growth · San Francisco", mobile: "+1 415 555 0173" },
    { name: "Michael Torres", role: "VP Sales · Austin", mobile: "+1 512 555 0142" },
    { name: "David Kim", role: "CTO · New York", mobile: "+1 212 555 0198" },
  ];
  return (
    <div className="rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Download className="h-3.5 w-3.5 text-primary" />
          <span className="overline">Enriched export</span>
        </div>
        <span className="font-semibold tabular-nums text-[11px] text-muted-foreground">us-leads-q3.csv</span>
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
          <span className="overline">How it works</span>
          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            From one sentence to a <span className="text-primary">ready-to-send list</span>.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Describe who you want to reach, and Lead Finder builds a verified, contact-ready list from Scalelist's database.
          </p>
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
