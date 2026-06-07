import { Link } from "@tanstack/react-router";
import { Linkedin, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-gradient-brand-soft">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <Logo className="h-14 w-auto" />
          <p className="mt-4 max-w-sm text-sm text-foreground/70">
            A global advisory and solutions provider delivering integrated services across advisory,
            staffing, and enterprise technology.
          </p>
          <div className="mt-6 space-y-2 text-sm text-foreground/80">
            <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-magenta" /> Valley Stream, New York</p>
            <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-magenta" /> info@ltuss.com</p>
            <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-magenta" /> +1 516-240-3877</p>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Company</h4>
          <ul className="mt-4 space-y-3 text-sm text-foreground/70">
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Solutions</h4>
          <ul className="mt-4 space-y-3 text-sm text-foreground/70">
            <li><Link to="/services/risk-compliance" className="hover:text-foreground">Risk & Compliance</Link></li>
            <li><Link to="/services/tprm" className="hover:text-foreground">TPRM</Link></li>
            <li><Link to="/privacy" className="hover:text-foreground">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-foreground">Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-xs text-foreground/60">© {new Date().getFullYear()} LTUSS. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"
               className="grid h-9 w-9 place-items-center rounded-full bg-white/60 text-foreground/70 transition hover:bg-gradient-brand hover:text-white">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"
               className="grid h-9 w-9 place-items-center rounded-full bg-white/60 text-foreground/70 transition hover:bg-gradient-brand hover:text-white">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
