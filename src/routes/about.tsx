import { createFileRoute } from "@tanstack/react-router";
import { Section, FadeIn, Eyebrow } from "@/components/site/Section";
import { GlobeIcon, SparkIcon } from "@/components/site/Icons3D";
import { Search, Handshake, Lightbulb, Rocket } from "lucide-react";
import aboutImg from "@/assets/about.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About LTUSS — Mission, Vision & Approach" },
      { name: "description", content: "LTUSS empowers organizations with insights, talent, and technology to achieve sustainable growth through a proven Discover → Engage → Solve → Execute framework." },
      { property: "og:title", content: "About LTUSS" },
      { property: "og:description", content: "Our mission, vision, and structured engagement approach." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const steps = [
  { Icon: Search, title: "Discover", desc: "Understand your needs, context, and goals." },
  { Icon: Handshake, title: "Engage", desc: "Align strategies with your objectives and stakeholders." },
  { Icon: Lightbulb, title: "Solve", desc: "Deliver tailored, evidence-based solutions." },
  { Icon: Rocket, title: "Execute", desc: "Implement, monitor, and support successful outcomes." },
];

function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-brand-soft">
        <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-magenta/30 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-royal/30 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <Eyebrow>About LTUSS</Eyebrow>
          <h1 className="mt-5 max-w-3xl text-4xl font-bold sm:text-5xl lg:text-6xl">
            Insights, talent, and <span className="text-gradient-brand">technology</span> — delivered with purpose.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-foreground/70">
            A global advisory and solutions provider committed to measurable impact for individuals, businesses, and organizations.
          </p>
        </div>
      </section>

      {/* Mission / Vision */}
      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <FadeIn>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 shadow-soft">
              <SparkIcon className="h-16 w-16" />
              <h2 className="mt-6 text-2xl font-bold">Our Mission</h2>
              <p className="mt-4 text-foreground/75">
                To empower individuals and organizations with the insights, talent, and technology needed
                to achieve sustainable growth and global success.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-brand p-10 text-white shadow-brand">
              <GlobeIcon className="h-16 w-16" />
              <h2 className="mt-6 text-2xl font-bold">Our Vision</h2>
              <p className="mt-4 text-white/90">
                To be a trusted global partner delivering innovative advisory, staffing, and technology
                solutions that drive measurable impact.
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Approach */}
      <Section className="pt-0">
        <FadeIn>
          <div className="text-center">
            <Eyebrow>Our approach</Eyebrow>
            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold sm:text-4xl">
              A structured engagement model
            </h2>
          </div>
        </FadeIn>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.08}>
              <div className="relative h-full overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-soft">
                <div className="absolute right-4 top-4 text-6xl font-bold text-gradient-brand opacity-30">
                  {i + 1}
                </div>
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-brand text-white shadow-pink">
                  <s.Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-foreground/70">{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>
    </>
  );
}
