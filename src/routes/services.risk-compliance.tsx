import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Section, FadeIn, Eyebrow } from "@/components/site/Section";
import { ShieldIcon } from "@/components/site/Icons3D";

export const Route = createFileRoute("/services/risk-compliance")({
  head: () => ({
    meta: [
      { title: "Risk & Compliance Advisory | LTUSS" },
      { name: "description", content: "Enterprise Risk Management, governance, regulatory alignment, internal audit support, and operational resilience advisory from LTUSS." },
      { property: "og:title", content: "Risk & Compliance Advisory — LTUSS" },
      { property: "og:description", content: "ERM, governance, compliance, and operational resilience." },
      { property: "og:url", content: "/services/risk-compliance" },
    ],
    links: [{ rel: "canonical", href: "/services/risk-compliance" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Risk & Compliance Advisory",
        provider: { "@type": "Organization", name: "LTUSS" },
        areaServed: "Global",
      }),
    }],
  }),
  component: RiskPage,
});

const sections = [
  {
    title: "Risk & Compliance Management",
    items: [
      "Enterprise Risk Management (ERM) support",
      "Risk identification, assessment, and mitigation strategies",
      "Policy and control framework development",
      "Regulatory and compliance alignment",
    ],
  },
  {
    title: "Operational & Governance Support",
    items: [
      "Process optimization and control assurance",
      "Internal audit support",
      "Risk reporting and dashboards",
      "Governance program enhancement",
    ],
  },
];

function RiskPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-brand-soft">
        <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-royal/30 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <Eyebrow>Specialty Practice</Eyebrow>
            <h1 className="mt-5 text-4xl font-bold sm:text-5xl lg:text-6xl">
              <span className="text-gradient-brand">Risk &amp; Compliance</span> Advisory
            </h1>
            <p className="mt-6 max-w-xl text-lg text-foreground/70">
              Structured frameworks and industry best practices to help organizations manage risk,
              strengthen governance, and improve operational resilience.
            </p>
            <div className="mt-8">
              <Link to="/contact" className="inline-flex h-12 items-center gap-2 rounded-full bg-gradient-brand px-7 text-sm font-semibold text-white shadow-pink">
                Talk to an advisor <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="mx-auto grid h-72 w-72 place-items-center rounded-[2rem] border border-white/50 bg-white/70 shadow-brand backdrop-blur sm:h-96 sm:w-96">
            <ShieldIcon className="h-56 w-56" />
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          {sections.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.1}>
              <div className="h-full rounded-3xl border border-border bg-card p-8 shadow-soft">
                <h2 className="text-xl font-semibold">{s.title}</h2>
                <ul className="mt-5 space-y-2">
                  {s.items.map((x) => (
                    <li key={x} className="flex items-start gap-2 text-sm text-foreground/80">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-magenta" /> {x}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="mt-10 rounded-3xl bg-gradient-brand p-8 text-white shadow-brand sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-wider opacity-80">Outcome</p>
            <p className="mt-3 text-xl font-medium">
              Stronger risk posture, improved compliance, and enhanced operational transparency.
            </p>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
