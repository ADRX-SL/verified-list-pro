import { Coins, Database, Globe, Layers, Phone, Search } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const features: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Search, title: "Plain English search", desc: "Skip the filter wall. Describe your ICP in one sentence and get the matching people back." },
  { icon: Phone, title: "Verified emails and mobiles", desc: "Every list comes with verified work emails (1 credit each) and mobile numbers (20 credits each)." },
  { icon: Globe, title: "Number one on mobile coverage in APAC", desc: "Highest coverage of any provider tested across North America, EMEA, and APAC." },
  { icon: Database, title: "Push to your CRM", desc: "Export to CSV or send contacts straight to HubSpot, Salesforce, Zapier, or your own API and MCP." },
  { icon: Layers, title: "Built into Scalelist", desc: "The list you build is contact ready in the same place. No exporting into another tool to clean it." },
  { icon: Coins, title: "Pay only for what you reveal", desc: "Exploring and shaping your list is free. You spend credits when you reveal contact data." },
];

export function Features() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <span className="overline">What you get</span>
          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            Everything a B2B lead finder <span className="text-primary">should give you</span>.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="rounded-2xl border border-border bg-card p-8 shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
            >
              <div className="flex items-center gap-3">
                <span className="font-semibold tabular-nums text-xs text-primary">{String(i + 1).padStart(2, "0")}</span>
                <span className="h-px flex-1 bg-border" />
                <f.icon className="h-4 w-4 text-muted-foreground" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-foreground">{f.title}</h3>
              <p className="mt-3 text-base text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
