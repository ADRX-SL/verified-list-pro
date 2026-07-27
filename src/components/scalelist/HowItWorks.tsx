import { MessageSquare, BadgeCheck, Send } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const steps: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: MessageSquare,
    title: "Describe your ICP",
    desc: "Type who you are targeting in plain English. No filter mazes, no query builder to learn.",
  },
  {
    icon: BadgeCheck,
    title: "Reveal verified contacts",
    desc: "Scalelist returns matching people and reveals verified work emails and mobile numbers. You spend credits only on what you reveal.",
  },
  {
    icon: Send,
    title: "Push to your workflow",
    desc: "Export to CSV or send straight to HubSpot, Salesforce, Zapier, your API, or MCP, ready for outbound.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <span className="overline">How it works</span>
          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            From a sentence to a verified list, in <span className="text-primary">three steps</span>.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="rounded-2xl border border-border bg-card p-8 shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
            >
              <div className="flex items-center gap-3">
                <span className="font-semibold tabular-nums text-xs text-primary">{String(i + 1).padStart(2, "0")}</span>
                <span className="h-px flex-1 bg-border" />
                <s.icon className="h-4 w-4 text-muted-foreground" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-3 text-base text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}