const cols = [
  {
    title: "Get started",
    links: [
      { label: "Pricing", href: "https://scalelist.com/pricing/" },
      { label: "Log in", href: "https://app.scalelist.com/auth/login?redirectUrl=%2Fapp%2Fdashboard" },
      { label: "Sign up for free", href: "https://app.scalelist.com/auth/signup?redirectUrl=%2Fapp%2Fdashboard" },
      { label: "Get a demo", href: "https://calendly.com/arnaud-scalelist/30min" },
    ],
  },
  {
    title: "Product",
    links: [
      { label: "Email Finder", href: "https://scalelist.com/free-email-finder/" },
      { label: "Email Verifier", href: "https://scalelist.com/email-verifier/" },
      { label: "Chrome Extension", href: "https://scalelist.com/extension/" },
      { label: "Lead Mobile Finder", href: "https://scalelist.com/lead-mobile-finder/" },
      { label: "Monitoring", href: "https://scalelist.com/monitoring/" },
      { label: "Integrations", href: "https://scalelist.com/integrations/" },
      { label: "API", href: "https://app.scalelist.com/docs" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "https://scalelist.com/blog/" },
      { label: "YouTube", href: "https://www.youtube.com/@Scalelist" },
      { label: "Help Center", href: "https://intercom.help/scalelist/en/collections/12728118-general" },
      { label: "Scalelist Academy", href: "https://scalelist.com/academy/" },
    ],
  },
  {
    title: "Free tools",
    links: [
      { label: "Free Email Verifier", href: "https://scalelist.com/free-email-verifier/" },
      { label: "Free Email Finder", href: "https://scalelist.com/free-email-finder/" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Partner with Scalelist", href: "https://affiliates.scalelist.com/signup" },
      { label: "Top Lead Generation Companies", href: "https://scalelist.com/top-lead-generation-companies/" },
      { label: "Public Listed Company USA", href: "https://scalelist.com/public-companies-usa/" },
      { label: "Terms of use", href: "https://scalelist.com/terms-of-use/" },
      { label: "Privacy policy", href: "https://scalelist.com/privacy/" },
      { label: "Contact us", href: "https://form.typeform.com/to/lvQHcXGx?typeform-source=scalelist.com" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-10">
          <div>
            <span className="text-2xl font-extrabold tracking-tight text-foreground">Scalelist</span>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs leading-relaxed">
              Describe your ideal customer. Get a ready to use lead list with verified emails and mobile numbers.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
            {cols.map((c) => (
              <div key={c.title}>
                <h3 className="overline">{c.title}</h3>
                <ul className="mt-5 space-y-3">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <span className="font-semibold tabular-nums">© 2026 Scalelist</span>
            <span aria-hidden>·</span>
            <a href="mailto:hello@scalelist.com" className="hover:text-foreground font-semibold tabular-nums">hello@scalelist.com</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/company/scalelist" className="hover:text-foreground">LinkedIn</a>
            <a href="https://www.youtube.com/@Scalelist" className="hover:text-foreground">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
