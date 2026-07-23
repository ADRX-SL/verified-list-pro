const stats = [
  { value: "92%", label: "Email hit rate" },
  { value: "87%", label: "Mobile coverage, NA" },
  { value: "174", label: "Mobiles found in 5 min" },
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
            The lead finder software, measured on the same input lists across eight B2B data providers. Every miss costs zero credits.
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
