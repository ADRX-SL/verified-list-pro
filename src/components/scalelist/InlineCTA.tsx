import { ArrowRight } from "lucide-react";

interface InlineCTAProps {
  headline: string;
  sub?: string;
}

export function InlineCTA({ headline, sub }: InlineCTAProps) {
  return (
    <section className="py-20 md:py-28 bg-stone-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-[2rem] bg-card border border-border px-6 py-12 md:py-16 text-center shadow-sm">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
            {headline}
          </h2>
          {sub && (
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              {sub}
            </p>
          )}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://app.scalelist.com/auth/signup?redirectUrl=%2Fapp%2Fdashboard"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground hover:bg-primary-hover transition-all group"
            >
              Sign up for free
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="https://form.typeform.com/to/lvQHcXGx"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-white border border-border px-8 py-4 text-base font-semibold text-foreground hover:bg-accent transition-colors"
            >
              Talk to sales
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
