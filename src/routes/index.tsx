import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Check, Compass, Sparkles } from "lucide-react";
import { Section, FadeIn, Eyebrow } from "@/components/site/Section";
import { AdvisoryIcon, StaffingIcon, TechIcon, ShieldIcon, GlobeIcon, SparkIcon } from "@/components/site/Icons3D";
import { Logo } from "@/components/site/Logo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LTUSS — Advisory, Staffing & Technology Solutions" },
      { name: "description", content: "Empowering growth through advisory, staffing, and enterprise technology. LTUSS helps individuals and organizations succeed locally and internationally." },
      { property: "og:title", content: "LTUSS — Advisory, Staffing & Technology" },
      { property: "og:description", content: "Empowering growth through advisory, staffing, and enterprise-grade technology solutions." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const services = [
  { Icon: AdvisoryIcon, title: "Professional & Advisory", desc: "Strategic guidance for individuals and organizations across education, relocation, and business growth.", to: "/services" as const },
  { Icon: StaffingIcon, title: "Staffing Solutions", desc: "Access global talent for contract, permanent, or project-based workforce needs.", to: "/services" as const },
  { Icon: TechIcon, title: "Technology Solutions", desc: "Custom platforms, automation, and enterprise system support to drive efficiency and scale.", to: "/services" as const },
];

const why = [
  "Global expertise with local insight",
  "End-to-end service delivery",
  "Tailored client solutions",
  "Proven Discover → Engage → Solve → Execute framework",
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-brand-soft" />
        <div
          className="absolute inset-0 -z-10 opacity-70"
          style={{ background: "var(--gradient-radial)" }}
        />
        <div className="absolute -top-32 -right-32 -z-10 h-96 w-96 rounded-full bg-gradient-brand opacity-30 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 -z-10 h-96 w-96 rounded-full bg-magenta opacity-20 blur-3xl" />

        <div className="mx-auto max-w-7xl px-4 pb-24 pt-20 sm:px-6 lg:px-8 lg:pb-32 lg:pt-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Eyebrow>Advisory · Solutions · Staffing</Eyebrow>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
              >
                Empowering growth through{" "}
                <span className="text-gradient-brand">Advisory, Staffing &amp; Technology</span>{" "}
                solutions
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="mt-6 max-w-xl text-lg text-foreground/70"
              >
                LTUSS helps individuals, businesses, and organizations navigate complex challenges
                with expert advisory services, global staffing, and enterprise-grade technology platforms.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25 }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <Link to="/contact" className="inline-flex h-12 items-center gap-2 rounded-full bg-gradient-brand px-7 text-sm font-semibold text-white shadow-pink transition hover:scale-[1.02]">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/contact" className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-white/70 px-7 text-sm font-semibold text-foreground backdrop-blur transition hover:bg-white">
                  Schedule a Consultation
                </Link>
              </motion.div>

              <div className="mt-10 flex items-center gap-6 text-xs text-foreground/60">
                <div className="flex items-center gap-2"><Check className="h-4 w-4 text-magenta" /> Global delivery</div>
                <div className="flex items-center gap-2"><Check className="h-4 w-4 text-magenta" /> Enterprise-ready</div>
                <div className="flex items-center gap-2"><Check className="h-4 w-4 text-magenta" /> SEO-optimized</div>
              </div>
            </div>

            {/* Logo showcase card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="relative"
            >
              <div className="relative mx-auto aspect-square w-full max-w-md">
                <div className="absolute inset-0 rounded-[3rem] bg-gradient-brand opacity-90 blur-2xl" />
                <div className="relative grid h-full place-items-center rounded-[2.5rem] border border-white/40 bg-white/80 p-10 shadow-brand backdrop-blur-xl">
                  <Logo className="w-full" priority />
                  <div className="absolute -top-6 -right-6 grid h-20 w-20 place-items-center rounded-2xl bg-white shadow-pink">
                    <SparkIcon className="h-12 w-12" />
                  </div>
                  <div className="absolute -bottom-6 -left-6 grid h-20 w-20 place-items-center rounded-2xl bg-white shadow-soft">
                    <GlobeIcon className="h-12 w-12" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-5">
          <FadeIn className="lg:col-span-2">
            <Eyebrow>Who we are</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              A trusted global partner for <span className="text-gradient-brand">integrated solutions</span>.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1} className="lg:col-span-3">
            <p className="text-lg text-foreground/70">
              LTUSS is a global advisory and solutions provider delivering integrated services across
              education, business, career development, risk management, and enterprise technology.
              We combine insights, talent, and innovation to help our clients succeed locally and internationally.
            </p>
          </FadeIn>
        </div>
      </Section>

      {/* CORE SERVICES */}
      <Section className="pt-0">
        <FadeIn>
          <div className="text-center">
            <Eyebrow>Our core services</Eyebrow>
            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold sm:text-4xl">
              Three pillars. One <span className="text-gradient-brand">measurable outcome</span>.
            </h2>
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.1}>
              <Link
                to={s.to}
                className="group relative block h-full overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft transition hover:-translate-y-1 hover:shadow-brand"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-brand" />
                <s.Icon className="h-20 w-20" />
                <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm text-foreground/70">{s.desc}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-magenta">
                  Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* WHY LTUSS */}
      <Section>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-brand p-10 text-white shadow-brand sm:p-16">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-magenta/40 blur-3xl" />
          <div className="relative grid gap-12 lg:grid-cols-2">
            <FadeIn>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur">
                <Sparkles className="h-3 w-3" /> Why choose LTUSS
              </span>
              <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
                Built on a proven framework: Discover → Engage → Solve → Execute.
              </h2>
              <p className="mt-5 max-w-md text-white/85">
                We bring rigor and clarity to every engagement — from first conversation through long-term support.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <ul className="grid gap-4 sm:grid-cols-2">
                {why.map((w) => (
                  <li key={w} className="flex items-start gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur">
                    <Compass className="mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-sm font-medium">{w}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* SPECIALTY: Risk + TPRM */}
      <Section className="pt-0">
        <div className="grid gap-6 lg:grid-cols-2">
          <FadeIn>
            <Link to="/services/risk-compliance" className="group relative block h-full overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft transition hover:-translate-y-1 hover:shadow-brand">
              <ShieldIcon className="h-20 w-20" />
              <h3 className="mt-6 text-2xl font-semibold">Risk &amp; Compliance Advisory</h3>
              <p className="mt-3 text-foreground/70">
                Enterprise Risk Management, governance frameworks, regulatory alignment, and operational resilience.
              </p>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-magenta">
                Explore Risk &amp; Compliance <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Link to="/services/tprm" className="group relative block h-full overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft transition hover:-translate-y-1 hover:shadow-brand">
              <GlobeIcon className="h-20 w-20" />
              <h3 className="mt-6 text-2xl font-semibold">Third-Party Risk (TPRM)</h3>
              <p className="mt-3 text-foreground/70">
                Tiering, due diligence, backlog remediation, and ongoing monitoring frameworks for vendor risk.
              </p>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-magenta">
                Explore TPRM <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
          </FadeIn>
        </div>
      </Section>

      {/* FINAL CTA */}
      <Section>
        <FadeIn>
          <div className="rounded-[2.5rem] border border-border bg-card p-10 text-center shadow-soft sm:p-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold sm:text-4xl">
              Ready to transform your goals into <span className="text-gradient-brand">results</span>?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-foreground/70">Let LTUSS guide your journey.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="inline-flex h-12 items-center gap-2 rounded-full bg-gradient-brand px-7 text-sm font-semibold text-white shadow-pink">
                Schedule a Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/services" className="inline-flex h-12 items-center rounded-full border border-border px-7 text-sm font-semibold">
                View Services
              </Link>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
