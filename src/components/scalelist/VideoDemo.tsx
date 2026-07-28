export function VideoDemo() {
  return (
    <section className="py-20 md:py-28 bg-stone-50">
      <div className="mx-auto max-w-4xl px-6">
        <div className="relative w-full overflow-hidden rounded-2xl border border-border bg-card shadow-sm" style={{ paddingBottom: "56.25%" }}>
          <iframe
            className="absolute inset-0 h-full w-full"
            src="https://www.youtube.com/embed/ZTFRRZC93CQ"
            title="Scalelist Lead Finder demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
