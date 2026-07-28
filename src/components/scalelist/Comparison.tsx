import { Check, X } from "lucide-react";

const rows: { old: string; scalelist: string }[] = [
  { old: "Learn a query builder and stack filters", scalelist: "Describe your ICP in one sentence" },
  { old: "Export from LinkedIn and clean spreadsheets", scalelist: "Contact-ready list in one place" },
  { old: "Pay for unverified data you can't send to", scalelist: "Pay only for verified contacts you reveal" },
  { old: "Thin coverage outside North America", scalelist: "Strong verified coverage worldwide" },
  { old: "Separate tools for search, email, and phone", scalelist: "Search, verified email, and mobile in one flow" },
];

export function Comparison() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <span className="overline">Why Scalelist</span>
          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            A lead finder, <span className="text-primary">not another filter maze</span>.
          </h2>
        </div>

        <div className="mt-16 rounded-2xl border border-border bg-card shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-border">
              <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                The old way
                <X className="h-4 w-4 text-destructive" aria-hidden />
              </div>
            </div>
            <div className="p-6 md:p-8 bg-primary/5">
              <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-primary">
                Scalelist
                <Check className="h-4 w-4 text-green-500" aria-hidden />
              </div>
            </div>
          </div>
          {rows.map((r, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-2 border-t border-border"
            >
              <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-border flex items-start gap-3">
                <X className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" aria-hidden />
                <span className="text-base text-foreground/80">{r.old}</span>
              </div>
              <div className="p-6 md:p-8 bg-primary/5 flex items-start gap-3">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" aria-hidden />
                <span className="text-base text-foreground">{r.scalelist}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-base text-muted-foreground leading-relaxed">
          For head-to-head comparisons with specific tools, see our{" "}
          <a href="https://scalelist.com/zoominfo-alternative/" className="text-primary hover:underline font-medium">ZoomInfo alternative</a>,{" "}
          <a href="https://scalelist.com/apollo-alternative/" className="text-primary hover:underline font-medium">Apollo alternative</a>, and{" "}
          <a href="https://scalelist.com/lusha-alternative/" className="text-primary hover:underline font-medium">Lusha alternative</a> pages.
        </p>
      </div>
    </section>
  );
}