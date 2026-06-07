import { motion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({ children, className, id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={cn("relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8", className)}>
      {children}
    </section>
  );
}

export function FadeIn({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-foreground/70 backdrop-blur">
      <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
      {children}
    </span>
  );
}
