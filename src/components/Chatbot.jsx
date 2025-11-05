import { useEffect, useMemo, useRef, useState } from "react";
import { MessageCircle, X, ChevronRight, PhoneCall, Calendar, Calculator } from "lucide-react";

const emirateAdjustments = {
  Dubai: 1500,
  "Abu Dhabi": 1000,
  Sharjah: 0,
  Ajman: -500,
};

function estimateCost({ type, partners, visas, office, emirate }) {
  const base = type === "Free Zone" ? 7500 : type === "Mainland" ? 12000 : 9000;
  const perPartner = Math.max(0, partners - 1) * 500;
  const visaCost = visas * 1200;
  const officeCost = office ? 4000 : 0;
  const emirateAdj = emirateAdjustments[emirate] ?? 0;
  return base + perPartner + visaCost + officeCost + emirateAdj;
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    type: "Free Zone",
    partners: 1,
    visas: 0,
    office: false,
    emirate: "Dubai",
    name: "",
    email: "",
    phone: "",
  });

  const est = useMemo(() => estimateCost(form), [form]);
  const panelRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (open && panelRef.current && !panelRef.current.contains(e.target)) {
        // no auto-close to avoid losing progress
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  const reset = () => {
    setStep(0);
    setForm({ type: "Free Zone", partners: 1, visas: 0, office: false, emirate: "Dubai", name: "", email: "", phone: "" });
  };

  return (
    <div id="chat" className="fixed bottom-5 right-5 z-50">
      {open && (
        <div ref={panelRef} className="mb-3 w-[92vw] max-w-sm overflow-hidden rounded-2xl border border-[#EAEAEA] bg-white shadow-xl">
          <div className="flex items-center justify-between px-4 py-3 border-b border-[#EAEAEA]">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#b8962f]" />
              <div>
                <div className="text-sm font-medium text-[#222222]">UAE Setup Concierge</div>
                <div className="text-xs text-[#222222]/70">Typically replies in under 2 min</div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="rounded-full p-1 hover:bg-[#F7F7F7]">
              <X className="h-4 w-4 text-[#222222]" />
            </button>
          </div>

          <div className="max-h-[60vh] overflow-y-auto px-4 py-4 space-y-4">
            {step === 0 && (
              <Bubble>
                Hi! Want to know how much your UAE business setup will cost?
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {(["Free Zone", "Mainland", "Offshore"]).map((t) => (
                    <button
                      key={t}
                      onClick={() => { setForm({ ...form, type: t }); setStep(1); }}
                      className={`rounded-full border px-3 py-2 text-sm ${form.type === t ? "border-[#D4AF37] text-[#222222]" : "border-[#EAEAEA] text-[#222222]/80"}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </Bubble>
            )}

            {step >= 1 && (
              <Bubble>
                How many partners will be on the license?
                <div className="mt-3 flex items-center gap-2">
                  {[1,2,3,4].map((n) => (
                    <button key={n} onClick={() => setForm({ ...form, partners: n })} className={`rounded-full border px-3 py-2 text-sm ${form.partners === n ? "border-[#D4AF37]" : "border-[#EAEAEA]"}`}>{n}</button>
                  ))}
                </div>
              </Bubble>
            )}

            {step >= 2 && (
              <Bubble>
                Preferred emirate?
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {Object.keys(emirateAdjustments).map((e) => (
                    <button key={e} onClick={() => setForm({ ...form, emirate: e })} className={`rounded-full border px-3 py-2 text-sm ${form.emirate === e ? "border-[#D4AF37]" : "border-[#EAEAEA]"}`}>{e}</button>
                  ))}
                </div>
              </Bubble>
            )}

            {step >= 3 && (
              <Bubble>
                How many visas do you need initially?
                <div className="mt-3 flex items-center gap-2">
                  {[0,1,2,3,4].map((n) => (
                    <button key={n} onClick={() => setForm({ ...form, visas: n })} className={`rounded-full border px-3 py-2 text-sm ${form.visas === n ? "border-[#D4AF37]" : "border-[#EAEAEA]"}`}>{n}</button>
                  ))}
                </div>
              </Bubble>
            )}

            {step >= 4 && (
              <Bubble>
                Do you need a physical office?
                <div className="mt-3 flex items-center gap-2">
                  {[{label:"Yes", val:true},{label:"No", val:false}].map((o) => (
                    <button key={o.label} onClick={() => setForm({ ...form, office: o.val })} className={`rounded-full border px-3 py-2 text-sm ${form.office === o.val ? "border-[#D4AF37]" : "border-[#EAEAEA]"}`}>{o.label}</button>
                  ))}
                </div>
              </Bubble>
            )}

            {step >= 1 && (
              <EstimatorSummary form={form} est={est} />
            )}

            {step >= 5 && (
              <Bubble>
                Great! Can we have your contact details to send the quote and next steps?
                <div className="mt-3 grid gap-2">
                  <input value={form.name} onChange={(e)=>setForm({ ...form, name: e.target.value })} className="rounded-xl border border-[#EAEAEA] px-3 py-2 text-sm outline-none focus:border-[#D4AF37]" placeholder="Name" />
                  <input value={form.email} onChange={(e)=>setForm({ ...form, email: e.target.value })} className="rounded-xl border border-[#EAEAEA] px-3 py-2 text-sm outline-none focus:border-[#D4AF37]" placeholder="Email" />
                  <input value={form.phone} onChange={(e)=>setForm({ ...form, phone: e.target.value })} className="rounded-xl border border-[#EAEAEA] px-3 py-2 text-sm outline-none focus:border-[#D4AF37]" placeholder="Phone" />
                  <button
                    onClick={() => {
                      console.log("Lead:", { ...form, estimate: est });
                      setStep(6);
                    }}
                    className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#D4AF37] px-4 py-2 text-white text-sm font-medium"
                  >
                    Send me the quote
                  </button>
                </div>
              </Bubble>
            )}

            {step >= 6 && (
              <Bubble>
                Would you like to speak to a representative right now?
                <div className="mt-3 grid grid-cols-2 gap-2">
                  <a href="https://wa.me/971000000000?text=I%20want%20to%20set%20up%20a%20business%20in%20the%20UAE" target="_blank" className="rounded-full border border-[#EAEAEA] px-3 py-2 text-sm text-center hover:border-[#D4AF37] inline-flex items-center justify-center gap-2">
                    <MessageCircle className="h-4 w-4" /> WhatsApp
                  </a>
                  <a href="#contact" className="rounded-full border border-[#EAEAEA] px-3 py-2 text-sm text-center hover:border-[#D4AF37] inline-flex items-center justify-center gap-2">
                    <Calendar className="h-4 w-4" /> Schedule a Call
                  </a>
                </div>
              </Bubble>
            )}
          </div>

          <div className="px-4 py-3 border-t border-[#EAEAEA] flex items-center justify-between">
            <div className="text-xs text-[#222222]/70">Step {Math.min(step + 1, 6)} of 6</div>
            <div className="flex items-center gap-2">
              {step > 0 && (
                <button onClick={() => setStep(step - 1)} className="text-sm text-[#222222]/80 hover:text-[#222222]">Back</button>
              )}
              {step < 5 && (
                <button onClick={() => setStep(step + 1)} className="inline-flex items-center gap-2 rounded-full bg-[#222222] px-3 py-1.5 text-white text-sm">
                  Next <ChevronRight className="h-4 w-4" />
                </button>
              )}
              {step === 5 && (
                <button onClick={() => setStep(6)} className="inline-flex items-center gap-2 rounded-full bg-[#222222] px-3 py-1.5 text-white text-sm">
                  Finish <ChevronRight className="h-4 w-4" />
                </button>
              )}
              {step >= 6 && (
                <button onClick={reset} className="text-sm text-[#222222]/80 hover:text-[#222222]">Start over</button>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="flex gap-3 justify-end">
        <a
          href="https://wa.me/971000000000?text=Hi!%20I%20want%20a%20UAE%20company%20setup%20quote"
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
          <Calculator className="h-5 w-5" />
          {open ? "Close" : "Free Cost Estimate"}
        </button>
      </div>
    </div>
  );
}

function Bubble({ children }) {
  return (
    <div className="rounded-2xl border border-[#EAEAEA] bg-gradient-to-b from-white to-[#F7F7F7] p-4 text-sm text-[#222222] shadow-sm">
      {children}
    </div>
  );
}

function EstimatorSummary({ form, est }) {
  return (
    <div className="rounded-xl border border-[#EAEAEA] bg-white p-3 text-sm text-[#222222]">
      <div className="flex items-center justify-between">
        <div className="font-medium">Estimated cost</div>
        <div className="font-semibold text-[#D4AF37]">AED {est.toLocaleString()}</div>
      </div>
      <div className="mt-2 grid grid-cols-2 gap-2 text-xs text-[#222222]/70">
        <div>Type: <span className="text-[#222222]">{form.type}</span></div>
        <div>Partners: <span className="text-[#222222]">{form.partners}</span></div>
        <div>Emirate: <span className="text-[#222222]">{form.emirate}</span></div>
        <div>Visas: <span className="text-[#222222]">{form.visas}</span></div>
        <div>Office: <span className="text-[#222222]">{form.office ? "Yes" : "No"}</span></div>
      </div>
      <div className="mt-3 text-[11px] text-[#222222]/60">This is an instant estimate for guidance. Your advisor will confirm final pricing.</div>
    </div>
  );
}
