import { ArrowRight } from "lucide-react";

export function CTABanner() {
  return (
    <section className="py-20 md:py-28 text-white" style={{ backgroundColor: "#1a1a1a" }}>
      <div className="mx-auto max-w-4xl px-6 text-center">
        <span className="font-sans font-semibold uppercase tracking-[0.18em] text-xs" style={{ color: "#8DA9F0" }}>
          Get started
        </span>
        <h2 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05] text-white">
          Unlock B2B emails and mobiles, <span className="text-primary">for free</span>.
        </h2>
        <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
          <span className="font-semibold tabular-nums">50</span> credits on the house. No card required.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://app.scalelist.com/auth/signup?redirectUrl=%2Fapp%2Fdashboard"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground hover:bg-primary-hover transition-all group"
          >
            Get started for free
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="https://form.typeform.com/to/lvQHcXGx?typeform-source=scalelist.com"
            className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border border-white/20 bg-transparent px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-colors"
          >
            Talk to sales
          </a>
        </div>
      </div>
    </section>
  );
}
