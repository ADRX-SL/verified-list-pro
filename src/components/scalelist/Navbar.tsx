import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";

const platformItems = [
  { label: "Lead Finder", href: "https://scalelist.com/lead-finder/" },
  { label: "Email Finder", href: "https://scalelist.com/free-email-finder/" },
  { label: "Lead Mobile Finder", href: "https://scalelist.com/lead-mobile-finder/" },
  { label: "Email Verifier", href: "https://scalelist.com/email-verifier/" },
  { label: "Chrome Extension", href: "https://scalelist.com/extension/" },
  { label: "Integrations", href: "https://scalelist.com/integrations/" },
];

const resourceItems = [
  { label: "Blog", href: "https://scalelist.com/blog/" },
  { label: "Help Center", href: "https://intercom.help/scalelist/en/collections/12728118-general" },
  { label: "Scalelist Academy", href: "https://scalelist.com/academy/" },
  { label: "YouTube", href: "https://www.youtube.com/@Scalelist" },
];

function Dropdown({ label, items }: { label: string; items: { label: string; href: string }[] }) {
  return (
    <div className="group relative">
      <button className="inline-flex items-center gap-1 text-sm text-foreground/80 hover:text-foreground transition-colors py-2">
        {label}
        <ChevronDown className="h-3.5 w-3.5" />
      </button>
      <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all absolute left-0 top-full pt-2 w-60 z-50">
        <div className="rounded-2xl border border-border bg-card shadow-sm p-2">
          {items.map((i) => (
            <a
              key={i.label}
              href={i.href}
              className="block px-3 py-2 rounded-lg text-sm text-foreground/80 hover:bg-accent hover:text-foreground"
            >
              {i.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <a href="https://scalelist.com" className="flex items-center">
            <span className="text-xl font-extrabold tracking-tight text-foreground">Scalelist</span>
          </a>
          <div className="hidden lg:flex items-center gap-6">
            <Dropdown label="Platform" items={platformItems} />
            <Dropdown label="Resources" items={resourceItems} />
            <a href="https://scalelist.com/customers/" className="text-sm text-foreground/80 hover:text-foreground py-2">Customers</a>
            <a href="https://scalelist.com/pricing/" className="text-sm text-foreground/80 hover:text-foreground py-2">Pricing</a>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://app.scalelist.com/auth/login?redirectUrl=%2Fapp%2Fdashboard"
            className="text-sm text-foreground/80 hover:text-foreground"
          >
            Login
          </a>
          <a
            href="https://form.typeform.com/to/lvQHcXGx?typeform-source=scalelist.com"
            className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors"
          >
            Get a demo
          </a>
          <a
            href="https://app.scalelist.com/auth/signup?redirectUrl=%2Fapp%2Fdashboard"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary-hover transition-colors"
          >
            Sign up for free
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 -mr-2 text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="px-6 py-4 flex flex-col gap-1">
            {[...platformItems, ...resourceItems].slice(0, 6).map((i) => (
              <a key={i.label} href={i.href} className="py-2 text-sm text-foreground/80">
                {i.label}
              </a>
            ))}
            <a href="https://scalelist.com/customers/" className="py-2 text-sm text-foreground/80">Customers</a>
            <a href="https://scalelist.com/pricing/" className="py-2 text-sm text-foreground/80">Pricing</a>
            <a href="https://app.scalelist.com/auth/login?redirectUrl=%2Fapp%2Fdashboard" className="py-2 text-sm text-foreground/80">Login</a>
            <a
              href="https://app.scalelist.com/auth/signup?redirectUrl=%2Fapp%2Fdashboard"
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              Sign up for free
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
