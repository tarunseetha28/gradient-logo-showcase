import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Section, FadeIn, Eyebrow } from "@/components/site/Section";
import { NetworkIcon } from "@/components/site/Icons3D";

export const Route = createFileRoute("/services/tprm")({
  head: () => ({
    meta: [
      { title: "Third-Party Risk Management (TPRM) | LTUSS" },
      { name: "description", content: "LTUSS TPRM services: vendor tiering, due diligence, backlog remediation, and ongoing monitoring frameworks for third-party risk." },
      { property: "og:title", content: "TPRM — Third-Party Risk Management | LTUSS" },
      { property: "og:description", content: "Vendor tiering, due diligence, and continuous monitoring." },
      { property: "og:url", content: "/services/tprm" },
    ],
    links: [{ rel: "canonical", href: "/services/tprm" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Third-Party Risk Management",
        provider: { "@type": "Organization", name: "LTUSS" },
        areaServed: "Global",
      }),
    }],
  }),
  component: TprmPage,
});

const items = [
  "Third-party risk tiering and re-tiering",
  "Review and validation of inherent risk assessments",
  "Full third-party risk assessments and due diligence",
  "Backlog remediation and program clean-up",
  "Ongoing monitoring framework design",
];

function TprmPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-brand-soft">
        <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-magenta/30 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <Eyebrow>Specialty Practice</Eyebrow>
            <h1 className="mt-5 text-4xl font-bold sm:text-5xl lg:text-6xl">
              <span className="text-gradient-brand">Third-Party Risk</span> Management
            </h1>
            <p className="mt-6 max-w-xl text-lg text-foreground/70">
              Help your organization manage vendor and third-party risk effectively — from tiering and due
              diligence to backlog remediation and continuous monitoring.
            </p>
            <div className="mt-8">
              <Link to="/contact" className="inline-flex h-12 items-center gap-2 rounded-full bg-gradient-brand px-7 text-sm font-semibold text-white shadow-pink">
                Request a TPRM consult <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="mx-auto grid h-72 w-72 place-items-center rounded-[2rem] border border-white/50 bg-white/70 shadow-brand backdrop-blur sm:h-96 sm:w-96">
            <NetworkIcon className="h-56 w-56" />
          </div>
        </div>
      </section>

      <Section>
        <FadeIn>
          <div className="rounded-3xl border border-border bg-card p-8 shadow-soft sm:p-10">
            <h2 className="text-2xl font-semibold">What we deliver</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {items.map((x) => (
                <li key={x} className="flex items-start gap-2 rounded-xl bg-gradient-brand-soft p-4 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-magenta" /> {x}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mt-10 rounded-3xl bg-gradient-brand p-8 text-white shadow-brand sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-wider opacity-80">Outcome</p>
            <p className="mt-3 text-xl font-medium">
              A defensible, transparent third-party risk program — with reduced backlog and ongoing assurance.
            </p>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
