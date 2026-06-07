import { createFileRoute } from "@tanstack/react-router";
import { Section, Eyebrow } from "@/components/site/Section";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service | LTUSS" },
      { name: "description", content: "LTUSS terms of service governing the use of our website and engagement of our services." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <Section>
      <Eyebrow>Legal</Eyebrow>
      <h1 className="mt-4 text-4xl font-bold sm:text-5xl">Terms of Service</h1>
      <div className="prose mt-8 max-w-3xl text-foreground/80">
        <p>
          By accessing or using the LTUSS website you agree to these terms. Content is provided
          for general information and does not constitute professional advice.
        </p>
        <h2 className="mt-8 text-xl font-semibold">Use of services</h2>
        <p>Engagement of LTUSS services is governed by separate written agreements.</p>
        <h2 className="mt-6 text-xl font-semibold">Intellectual property</h2>
        <p>All content, logos, and trademarks are owned by LTUSS or its licensors.</p>
        <h2 className="mt-6 text-xl font-semibold">Liability</h2>
        <p>To the maximum extent permitted by law, LTUSS disclaims liability for indirect or consequential losses.</p>
        <p className="mt-6 text-sm text-foreground/60">This is a placeholder and should be reviewed by legal counsel.</p>
      </div>
    </Section>
  );
}
