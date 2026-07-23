import { ArrowRight, CheckCircle2, ShieldCheck, Star } from "lucide-react";

export function Verified() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-3xl bg-card border border-border p-8 sm:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
            <div>
              <span className="overline">Verified data</span>
              <h2 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1]">
                Verified data you can <span className="text-primary">actually send to</span>.
              </h2>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                Scalelist verifies every professional email and mobile number before it reaches your list. Up to <span className="font-semibold tabular-nums text-foreground">95%</span> coverage and around <span className="font-semibold tabular-nums text-foreground">99%</span> email accuracy on verified, weekly refreshed data.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground">
                  <span className="flex items-center gap-0.5 text-primary">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </span>
                  <span className="font-semibold tabular-nums">4.8/5</span> Google
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                  GDPR compliant
                </span>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://app.scalelist.com/auth/signup?redirectUrl=%2Fapp%2Fdashboard"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground hover:bg-primary-hover transition-all group"
                >
                  Sign up for free
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="https://form.typeform.com/to/lvQHcXGx"
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border border-border bg-background px-8 py-4 text-base font-semibold text-foreground hover:bg-accent transition-colors"
                >
                  Talk to sales
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-background p-6">
              <span className="overline">Live check</span>
              <div className="mt-4 space-y-3">
                {[
                  { label: "sarah.chen@finovate.com", ok: true, tag: "Deliverable" },
                  { label: "+1 (415) 555 0182", ok: true, tag: "Verified" },
                  { label: "j.taylor@old-domain.io", ok: false, tag: "Miss · 0 credits" },
                ].map((r) => (
                  <div key={r.label} className="flex items-center justify-between gap-3 rounded-xl border border-border bg-card px-3 py-2.5">
                    <div className="flex items-center gap-2 min-w-0">
                      <CheckCircle2
                        className="h-4 w-4 shrink-0"
                        style={{ color: r.ok ? "var(--color-verify)" : "hsl(var(--muted-foreground))" }}
                      />
                      <span className="font-semibold tabular-nums text-xs sm:text-sm text-foreground truncate">{r.label}</span>
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground shrink-0">{r.tag}</span>
                  </div>
                ))}
              </div>
              <p className="mt-5 font-semibold tabular-nums text-[11px] text-muted-foreground">
                Email 1 credit · Mobile 20 credits · Miss 0 credits
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
