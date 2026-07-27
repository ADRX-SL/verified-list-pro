const stats = [
  { value: "Up to 95%", label: "B2B emails and mobiles worldwide" },
  { value: "~99%", label: "Email verification accuracy" },
  { value: "<5%", label: "Bounce rate" },
  { value: "15", label: "Data points per contact" },
];

export function Stats() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <span className="overline">By the numbers</span>
          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            The list you get, <span className="text-primary">measured</span>.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Verified, weekly refreshed data you can actually send to.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm"
            >
              <div className="font-semibold tabular-nums text-xs text-primary">{String(i + 1).padStart(2, "0")}</div>
              <div className="mt-4 font-semibold tabular-nums text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
                {s.value}
              </div>
              <div className="mt-4 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { Stats as Testimonial };
