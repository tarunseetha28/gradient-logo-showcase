import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

const serviceLinks = [
  { to: "/services", label: "All Services" },
  { to: "/services/risk-compliance", label: "Risk & Compliance" },
  { to: "/services/tprm", label: "Third-Party Risk (TPRM)" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center" aria-label="LTUSS home">
          <Logo className="h-12 w-auto sm:h-14" priority />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) =>
            item.label === "Services" ? (
              <div key={item.to} className="group relative">
                <Link
                  to={item.to}
                  className="inline-flex items-center gap-1 rounded-md px-4 py-2 text-sm font-medium text-foreground/80 transition hover:text-foreground"
                  activeProps={{ className: "text-foreground" }}
                >
                  {item.label}
                  <ChevronDown className="h-4 w-4" />
                </Link>
                <div className="invisible absolute left-0 top-full w-64 translate-y-1 pt-2 opacity-0 transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="rounded-xl border border-border bg-popover p-2 shadow-soft">
                    {serviceLinks.map((s) => (
                      <Link
                        key={s.to}
                        to={s.to}
                        className="block rounded-lg px-3 py-2 text-sm text-foreground/80 transition hover:bg-accent hover:text-foreground"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-md px-4 py-2 text-sm font-medium text-foreground/80 transition hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="inline-flex h-11 items-center rounded-full bg-gradient-brand px-6 text-sm font-semibold text-white shadow-pink transition hover:scale-[1.02]"
          >
            Schedule Consultation
          </Link>
        </div>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div className={cn("border-t border-border bg-background lg:hidden", open ? "block" : "hidden")}>
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-foreground/80 hover:bg-accent"
            >
              {item.label}
            </Link>
          ))}
          {serviceLinks.slice(1).map((s) => (
            <Link
              key={s.to}
              to={s.to}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 pl-6 text-sm text-foreground/70 hover:bg-accent"
            >
              ↳ {s.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex h-12 items-center justify-center rounded-full bg-gradient-brand text-sm font-semibold text-white shadow-pink"
          >
            Schedule Consultation
          </Link>
        </div>
      </div>
    </header>
  );
}
