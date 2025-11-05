import { useEffect, useMemo, useRef, useState } from "react";
import { MessageCircle, X, SendHorizonal, PhoneCall } from "lucide-react";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [sessionId] = useState(() => `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi! I’m your Free Zone Concierge. I’ll ask a few quick questions to tailor your setup. What’s your business activity?" },
  ]);
  const listRef = useRef(null);
  const backend = import.meta.env.VITE_BACKEND_URL || "";

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, open]);

  const sendToBackend = async (msgs) => {
    try {
      setLoading(true);
      const res = await fetch(`${backend}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId, messages: msgs }),
      });
      const data = await res.json();
      if (data?.assistant?.content) {
        setMessages((prev) => [...prev, data.assistant]);
      }
    } catch (e) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Let’s keep it simple. Tell me your business activity, number of shareholders, number of visas and your preferred emirate (Dubai/Abu Dhabi/Sharjah/Ajman)." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const onSend = async () => {
    const text = input.trim();
    if (!text) return;
    const next = [...messages, { role: "user", content: text }];
    setMessages(next);
    setInput("");
    await sendToBackend(next);
  };

  return (
    <div id="chat" className="fixed bottom-5 right-5 z-50">
      {open && (
        <div className="mb-3 w-[92vw] max-w-sm overflow-hidden rounded-2xl border border-[#EAEAEA] bg-white shadow-xl">
          <div className="flex items-center justify-between px-4 py-3 border-b border-[#EAEAEA]">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#b8962f]" />
              <div>
                <div className="text-sm font-medium text-[#222222]">Free Zone Concierge</div>
                <div className="text-xs text-[#222222]/70">We reply in under 2 min</div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="rounded-full p-1 hover:bg-[#F7F7F7]">
              <X className="h-4 w-4 text-[#222222]" />
            </button>
          </div>

          <div ref={listRef} className="max-h-[60vh] overflow-y-auto px-4 py-4 space-y-4">
            {messages.map((m, i) => (
              <Bubble key={i} role={m.role}>{m.content}</Bubble>
            ))}
            {loading && (
              <Bubble role="assistant">
                <span className="inline-flex gap-1">
                  <Dot /> <Dot className="animation-delay-150" /> <Dot className="animation-delay-300" />
                </span>
              </Bubble>
            )}
          </div>

          <div className="px-3 pb-3">
            <div className="flex items-end gap-2 rounded-2xl border border-[#EAEAEA] bg-white p-2">
              <textarea
                rows={1}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); onSend(); } }}
                className="min-h-[40px] max-h-28 flex-1 resize-none outline-none px-2 py-1 text-sm"
                placeholder="Type your message…"
              />
              <button
                onClick={onSend}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#D4AF37] text-white disabled:opacity-50"
                disabled={loading}
                aria-label="Send"
              >
                <SendHorizonal className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-2 text-[11px] text-[#222222]/60">Only free zone setup is discussed. Share your email/phone to receive an instant quote.</div>
          </div>
        </div>
      )}

      <div className="flex gap-3 justify-end">
        <a
          href="https://wa.me/971000000000?text=Hi!%20I%20want%20a%20UAE%20free%20zone%20company%20setup%20quote"
          target="_blank"
          className="grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-white shadow-lg"
          aria-label="WhatsApp"
        >
          <PhoneCall className="h-5 w-5" />
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-4 py-3 text-white font-medium shadow-lg"
        >
          <MessageCircle className="h-5 w-5" />
          {open ? "Close" : "Free Zone Concierge"}
        </button>
      </div>
    </div>
  );
}

function Bubble({ role, children }) {
  const isUser = role === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm shadow-sm ${
        isUser ? "bg-[#222222] text-white" : "bg-gradient-to-b from-white to-[#F7F7F7] border border-[#EAEAEA] text-[#222222]"
      }`}>
        {children}
      </div>
    </div>
  );
}

function Dot({ className = "" }) {
  return <span className={`h-1.5 w-1.5 rounded-full bg-[#222222]/50 animate-bounce ${className}`}></span>;
}
