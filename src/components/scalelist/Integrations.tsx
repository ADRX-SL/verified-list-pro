import { Database, Cloud, Zap, FileDown, Code2, Bot } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const integrations: { icon: LucideIcon; name: string; desc: string }[] = [
  { icon: Database, name: "HubSpot", desc: "Push contacts straight to your CRM" },
  { icon: Cloud, name: "Salesforce", desc: "Sync verified records to your pipeline" },
  { icon: Zap, name: "Zapier", desc: "Automate exports into any tool" },
  { icon: FileDown, name: "CSV", desc: "One-click export, every field" },
  { icon: Code2, name: "API", desc: "Pull lists programmatically" },
  { icon: Bot, name: "MCP / Claude", desc: "Query and enrich from your AI agent" },
];

export function Integrations() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <span className="overline">Integrations</span>
          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            Send your list <span className="text-primary">anywhere you work</span>.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4">
          {integrations.map((it) => (
            <div
              key={it.name}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
            >
              <it.icon className="h-5 w-5 text-primary" aria-hidden />
              <div className="mt-4 text-base font-semibold text-foreground">{it.name}</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}