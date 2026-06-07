import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Section, FadeIn, Eyebrow } from "@/components/site/Section";
import { AdvisoryIcon, StaffingIcon, TechIcon, ShieldIcon, GlobeIcon } from "@/components/site/Icons3D";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Advisory, Staffing & Technology | LTUSS" },
      { name: "description", content: "Explore LTUSS Professional & Advisory, Staffing, Technology, Risk & Compliance, and TPRM services across industries worldwide." },
      { property: "og:title", content: "LTUSS Services" },
      { property: "og:description", content: "Advisory, staffing, technology, risk & compliance, and TPRM services." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const blocks = [
  {
    Icon: AdvisoryIcon,
    title: "Professional & Advisory Services",
    bullets: [
      "Education & Career Advisory",
      "Business Strategy & Expansion",
      "Relocation & Global Mobility Support",
      "Personal and Professional Development",
      "Risk & Compliance Advisory",
    ],
    outcome: "Clear direction, informed decisions, and measurable growth.",
  },
  {
    Icon: StaffingIcon,
    title: "Staffing Solutions",
    bullets: [
      "Contract Staffing",
      "Permanent Placement",
      "Project-Based Hiring",
      "Global Talent Sourcing",
    ],
    outcome: "Skilled workforce aligned with your business needs.",
    note: "Industries: Technology, Finance, Healthcare, Education, and more.",
  },
  {
    Icon: TechIcon,
    title: "Technology Solutions",
    bullets: [
      "Custom Platform Development",
      "Business Process Automation",
      "Enterprise System Integration",
      "Support for Third-Party Tools",
    ],
    outcome: "Increased efficiency, scalability, and digital transformation.",
  },
];

const industries = ["Education", "Technology", "Finance", "Healthcare", "Insurance", "SMEs", "Startups", "Entrepreneurs"];
const steps = [
  { n: "01", title: "Consultation", desc: "We assess your needs through structured discussions." },
  { n: "02", title: "Strategy", desc: "We design a customized plan aligned with your goals." },
  { n: "03", title: "Implementation", desc: "We execute solutions with precision and transparency." },
  { n: "04", title: "Ongoing Support", desc: "We ensure continuous improvement and success." },
];

function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-brand-soft">
        <div className="absolute inset-0 opacity-70" style={{ background: "var(--gradient-radial)" }} />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <Eyebrow>Services</Eyebrow>
          <h1 className="mt-5 max-w-3xl text-4xl font-bold sm:text-5xl lg:text-6xl">
            Integrated services across <span className="text-gradient-brand">advisory, talent, and technology</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-foreground/70">
            Tailored to your goals. Delivered globally. Built on our Discover → Engage → Solve → Execute framework.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          {blocks.map((b, i) => (
            <FadeIn key={b.title} delay={i * 0.08}>
              <div className="relative h-full overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-brand" />
                <b.Icon className="h-20 w-20" />
                <h2 className="mt-6 text-xl font-semibold">{b.title}</h2>
                <ul className="mt-5 space-y-2">
                  {b.bullets.map((x) => (
                    <li key={x} className="flex items-start gap-2 text-sm text-foreground/80">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-magenta" /> {x}
                    </li>
                  ))}
                </ul>
                {b.note && <p className="mt-4 text-xs text-foreground/60">{b.note}</p>}
                <div className="mt-6 rounded-xl bg-gradient-brand-soft p-4 text-sm">
                  <strong className="text-foreground">Outcome:</strong>{" "}
                  <span className="text-foreground/80">{b.outcome}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Specialty links */}
      <Section className="pt-0">
        <FadeIn>
          <div className="text-center">
            <Eyebrow>Specialty practice</Eyebrow>
            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold sm:text-4xl">
              Risk &amp; Compliance — our <span className="text-gradient-brand">enterprise specialty</span>.
            </h2>
          </div>
        </FadeIn>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <FadeIn>
            <Link to="/services/risk-compliance" className="group block rounded-3xl border border-border bg-card p-8 shadow-soft transition hover:-translate-y-1 hover:shadow-brand">
              <ShieldIcon className="h-16 w-16" />
              <h3 className="mt-5 text-xl font-semibold">Risk &amp; Compliance Advisory</h3>
              <p className="mt-2 text-sm text-foreground/70">ERM, governance frameworks, regulatory alignment, internal audit support.</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-magenta">
                Read more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Link to="/services/tprm" className="group block rounded-3xl border border-border bg-card p-8 shadow-soft transition hover:-translate-y-1 hover:shadow-brand">
              <GlobeIcon className="h-16 w-16" />
              <h3 className="mt-5 text-xl font-semibold">Third-Party Risk Management</h3>
              <p className="mt-2 text-sm text-foreground/70">Tiering, due diligence, backlog remediation, ongoing monitoring.</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-magenta">
                Read more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
          </FadeIn>
        </div>
      </Section>

      {/* Industries */}
      <Section className="pt-0">
        <FadeIn>
          <div className="text-center">
            <Eyebrow>Industries we serve</Eyebrow>
            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold sm:text-4xl">Trusted across sectors</h2>
          </div>
        </FadeIn>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {industries.map((i) => (
            <span key={i} className="rounded-full border border-border bg-white px-5 py-2 text-sm font-medium text-foreground/80 shadow-soft">
              {i}
            </span>
          ))}
        </div>
      </Section>

      {/* How we work */}
      <Section className="pt-0">
        <FadeIn>
          <div className="text-center">
            <Eyebrow>How we work</Eyebrow>
            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold sm:text-4xl">Four steps to measurable impact</h2>
          </div>
        </FadeIn>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <FadeIn key={s.n} delay={i * 0.08}>
              <div className="relative h-full overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-soft">
                <div className="text-5xl font-bold text-gradient-brand">{s.n}</div>
                <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-foreground/70">{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Case study */}
      <Section className="pt-0">
        <FadeIn>
          <div className="overflow-hidden rounded-[2.5rem] bg-gradient-brand p-10 text-white shadow-brand sm:p-16">
            <Eyebrow>Success story</Eyebrow>
            <h2 className="mt-5 max-w-2xl text-3xl font-bold">Helping a startup scale globally</h2>
            <p className="mt-4 max-w-2xl text-white/90">
              We provided end-to-end advisory and staffing support — enabling rapid expansion and operational efficiency across multiple regions.
            </p>
            <Link to="/contact" className="mt-7 inline-flex h-12 items-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-foreground transition hover:scale-[1.02]">
              Start your engagement <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
