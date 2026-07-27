import { Filter, Mail, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const features: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Filter, title: "Target by six axes", desc: "Title, seniority, industry, geography, company size, and tenure, all from one sentence." },
  { icon: Mail, title: "Verified work emails", desc: "The professional email for each match, checked before it reaches your list." },
  { icon: Phone, title: "Verified mobile numbers", desc: "Cell and direct-dial numbers, verified and ready for cold calling." },
];

export function Features() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <span className="overline">The data</span>
          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            Find and reveal <span className="text-primary">exactly who you need</span>.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Every match comes with up to 15 data points, so you know who you're reaching before you spend a credit.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
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
