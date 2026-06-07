const LOGO_URL = "https://ltuss.vercel.app/assets/newlogo-qt8VpAm5.png";

export function Logo({ className = "h-10 w-auto", priority = false }: { className?: string; priority?: boolean }) {
  return (
    <img
      src={LOGO_URL}
      alt="LTUSS — Advisory, Solutions, Staffing"
      className={className}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
    />
  );
}
