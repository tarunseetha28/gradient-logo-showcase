import { useEffect, useState } from "react";

export function CookieBanner() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!localStorage.getItem("ltuss-cookies")) setShow(true);
  }, []);
  if (!show) return null;
  const accept = () => { localStorage.setItem("ltuss-cookies", "1"); setShow(false); };
  return (
    <div className="fixed inset-x-3 bottom-24 z-40 mx-auto max-w-2xl rounded-2xl border border-border bg-card/95 p-4 shadow-brand backdrop-blur sm:bottom-5 sm:left-5 sm:right-auto sm:mx-0">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <p className="text-sm text-foreground/80">
          We use cookies to improve your experience and analyze site traffic. By continuing you agree to our use of cookies.
        </p>
        <button onClick={accept} className="inline-flex h-10 shrink-0 items-center justify-center rounded-full bg-gradient-brand px-5 text-sm font-semibold text-white shadow-pink">
          Accept
        </button>
      </div>
    </div>
  );
}
