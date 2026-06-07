import { createFileRoute } from "@tanstack/react-router";
import { Section, Eyebrow } from "@/components/site/Section";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | LTUSS" },
      { name: "description", content: "LTUSS privacy policy — how we collect, use, and protect your information." },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <Section>
      <Eyebrow>Legal</Eyebrow>
      <h1 className="mt-4 text-4xl font-bold sm:text-5xl">Privacy Policy</h1>
      <div className="prose mt-8 max-w-3xl text-foreground/80">
        <p>
          LTUSS respects your privacy. This policy describes how we collect, use, and safeguard
          information you provide via our website. We comply with applicable privacy standards
          including GDPR and CCPA where relevant.
        </p>
        <h2 className="mt-8 text-xl font-semibold">Information we collect</h2>
        <p>Contact details you submit through our forms (name, email, phone, message) and standard analytics.</p>
        <h2 className="mt-6 text-xl font-semibold">How we use it</h2>
        <p>To respond to inquiries, deliver requested services, and improve our website experience.</p>
        <h2 className="mt-6 text-xl font-semibold">Your rights</h2>
        <p>You may request access, correction, or deletion of your data at any time by emailing info@ltuss.com.</p>
        <p className="mt-6 text-sm text-foreground/60">This is a placeholder and should be reviewed by legal counsel.</p>
      </div>
    </Section>
  );
}
