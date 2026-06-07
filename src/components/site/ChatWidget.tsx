import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Logo } from "./Logo";

type Msg = { from: "bot" | "user"; text: string };

const quick = [
  { label: "Our Services", reply: "We offer Advisory, Staffing, and Technology Solutions — including Risk & Compliance and TPRM. Visit /services for the full overview." },
  { label: "Book a Consultation", reply: "Great! Head to the Contact page and submit the form, or email info@ltuss.com — we respond within 24–48 hours." },
  { label: "Contact Details", reply: "📍 Valley Stream, NY · ✉ info@ltuss.com · ☎ +1 516-240-3877" },
];

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([
    { from: "bot", text: "Hi! I'm the LTUSS assistant. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const send = (text: string, reply?: string) => {
    const t = text.trim();
    if (!t) return;
    setMsgs((m) => [
      ...m,
      { from: "user", text: t },
      { from: "bot", text: reply ?? "Thanks! Our team will follow up — please share your email on the Contact page so we can route this to the right specialist." },
    ]);
    setInput("");
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open && (
        <div className="mb-3 flex h-[460px] w-[340px] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-brand">
          <div className="flex items-center justify-between bg-gradient-brand px-4 py-3 text-white">
            <div className="flex items-center gap-2">
              <div className="grid h-8 w-8 place-items-center rounded-full bg-white/20">
                <MessageCircle className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-semibold">LTUSS Assistant</p>
                <p className="text-[10px] opacity-80">Typically replies in minutes</p>
              </div>
            </div>
            <button aria-label="Close chat" onClick={() => setOpen(false)} className="grid h-7 w-7 place-items-center rounded-full bg-white/20 hover:bg-white/30">
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto bg-gradient-brand-soft p-3">
            {msgs.map((m, i) => (
              <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm ${m.from === "user" ? "bg-gradient-brand text-white" : "bg-white text-foreground shadow-soft"}`}>
                  {m.text}
                </div>
              </div>
            ))}
            <div className="flex flex-wrap gap-2 pt-1">
              {quick.map((q) => (
                <button
                  key={q.label}
                  onClick={() => send(q.label, q.reply)}
                  className="rounded-full border border-border bg-white/80 px-3 py-1 text-xs font-medium text-foreground/80 transition hover:bg-white"
                >
                  {q.label}
                </button>
              ))}
            </div>
          </div>

          <form
            className="flex items-center gap-2 border-t border-border bg-card p-2"
            onSubmit={(e) => { e.preventDefault(); send(input); }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message…"
              className="h-10 flex-1 rounded-full border border-border bg-background px-4 text-sm outline-none focus:border-magenta"
              maxLength={500}
            />
            <button type="submit" aria-label="Send" className="grid h-10 w-10 place-items-center rounded-full bg-gradient-brand text-white">
              <Send className="h-4 w-4" />
            </button>
          </form>
          <div className="flex items-center justify-center gap-1 border-t border-border bg-card py-1">
            <span className="text-[10px] text-foreground/50">Powered by</span>
            <Logo className="h-3 w-auto opacity-70" />
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Open chat"
        className="grid h-14 w-14 place-items-center rounded-full bg-gradient-brand text-white shadow-pink transition hover:scale-105"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  );
}
