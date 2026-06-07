import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { MapPin, Mail, Phone, Send } from "lucide-react";
import { Section, FadeIn, Eyebrow } from "@/components/site/Section";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact LTUSS — Advisory, Staffing & Technology" },
      {
        name: "description",
        content:
          "Reach LTUSS for advisory, staffing, and technology solutions. Based in Valley Stream, NY — serving clients globally. We respond within 24–48 hours.",
      },
      { property: "og:title", content: "Contact LTUSS" },
      { property: "og:description", content: "Get in touch with our advisory team." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  service: z.string().min(1, "Please select a service"),
  message: z.string().trim().min(10, "Tell us a bit more (min 10 chars)").max(2000),
  // honeypot
  website: z.string().max(0).optional().or(z.literal("")),
});

type FormData = z.infer<typeof schema>;

const services = [
  "Professional & Advisory",
  "Staffing Solutions",
  "Technology Solutions",
  "Risk & Compliance",
  "Third-Party Risk (TPRM)",
  "Other",
];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { service: "" },
  });

  const onSubmit = async (data: FormData) => {
    if (data.website) return; // honeypot
    await new Promise((r) => setTimeout(r, 600));
    toast.success("Thank you for contacting LTUSS — our team will respond within 24–48 hours.");
    setSubmitted(true);
    reset();
  };

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-brand-soft">
        <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-magenta/30 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-5 max-w-3xl text-4xl font-bold sm:text-5xl lg:text-6xl">
            Let's <span className="text-gradient-brand">build what's next</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-foreground/70">
            We're here to support your journey — share a few details and our team will be in touch.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-5">
          <FadeIn className="lg:col-span-2">
            <h2 className="text-2xl font-semibold">Get in touch</h2>
            <p className="mt-3 text-foreground/70">We typically respond within 24–48 hours.</p>
            <div className="mt-8 space-y-5">
              <InfoRow
                icon={<MapPin className="h-5 w-5" />}
                title="Location"
                value="Valley Stream, New York"
              />
              <InfoRow
                icon={<Mail className="h-5 w-5" />}
                title="Email"
                value="info@ltuss.com"
                href="mailto:info@ltuss.com"
              />
              <InfoRow
                icon={<Phone className="h-5 w-5" />}
                title="Phone"
                value="+1 516-240-3877"
                href="tel:+15162403877"
              />
            </div>
            {/* <div className="mt-10 rounded-2xl bg-gradient-brand p-6 text-white shadow-brand">
              <p className="text-sm font-semibold uppercase tracking-wider opacity-80">Auto-response</p>
              <p className="mt-2 text-sm text-white/95">
                "Thank you for contacting LTUSS. Our team will respond within 24–48 hours."
              </p>
            </div> */}
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8"
            >
              {submitted && (
                <div className="mb-6 rounded-xl bg-gradient-brand-soft p-4 text-sm">
                  ✓ Inquiry received. We'll be in touch shortly.
                </div>
              )}

              <Field label="Name" error={errors.name?.message}>
                <input {...register("name")} className={inputCls} placeholder="Jane Doe" />
              </Field>
              <Field label="Email" error={errors.email?.message}>
                <input
                  type="email"
                  {...register("email")}
                  className={inputCls}
                  placeholder="you@company.com"
                />
              </Field>
              <Field label="Phone (optional)" error={errors.phone?.message}>
                <input
                  type="tel"
                  {...register("phone")}
                  className={inputCls}
                  placeholder="+1 555 123 4567"
                />
              </Field>
              <Field label="Service of interest" error={errors.service?.message}>
                <select {...register("service")} className={inputCls}>
                  <option value="">Select a service…</option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Message" error={errors.message?.message}>
                <textarea
                  {...register("message")}
                  rows={5}
                  className={inputCls + " resize-y"}
                  placeholder="Tell us about your goals…"
                />
              </Field>

              {/* honeypot */}
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                {...register("website")}
                className="hidden"
                aria-hidden
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-brand px-7 text-sm font-semibold text-white shadow-pink transition hover:scale-[1.01] disabled:opacity-60"
              >
                {isSubmitting ? (
                  "Submitting…"
                ) : (
                  <>
                    Submit Inquiry <Send className="h-4 w-4" />
                  </>
                )}
              </button>
              <p className="mt-3 text-center text-xs text-foreground/60">
                Submitted securely over HTTPS. We respect your privacy.
              </p>
            </form>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}

const inputCls =
  "mt-2 h-12 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none transition focus:border-magenta focus:ring-2 focus:ring-magenta/20";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-4">
      <label className="text-sm font-medium text-foreground/85">{label}</label>
      {children}
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function InfoRow({
  icon,
  title,
  value,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4 shadow-soft transition hover:-translate-y-0.5 hover:shadow-brand">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-brand text-white">
        {icon}
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-foreground/60">{title}</p>
        <p className="mt-1 text-sm font-medium text-foreground">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}
