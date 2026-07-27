import { Target, Megaphone, LineChart, Building2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const personas: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Target, title: "Sales", desc: "Build account and persona lists by role, region, and company size, then push straight to your CRM." },
  { icon: Megaphone, title: "Marketing", desc: "Spin up targeted lists for outbound and lifecycle campaigns without waiting on ops." },
  { icon: LineChart, title: "Growth & RevOps", desc: "Generate and refresh lists via API to power routing and dynamic prospecting." },
  { icon: Building2, title: "Agencies", desc: "Rebuild a fresh ICP list per client in seconds, without juggling multiple tools." },
];

export function WhoItsFor() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <span className="overline">Who it's for</span>
          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            One list builder for every <span className="text-primary">outbound team</span>.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {personas.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-border bg-card p-8 shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
            >
              <p.icon className="h-5 w-5 text-primary" />
              <h3 className="mt-6 text-lg font-semibold text-foreground">{p.title}</h3>
              <p className="mt-3 text-base text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}