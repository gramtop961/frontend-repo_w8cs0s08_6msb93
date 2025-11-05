import { Timer, Shield, Handshake, BadgeCheck, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Sections() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">
      <Process />
      <WhyUs />
      <BlogPreview />
      <Contact />
    </div>
  );
}

function Process() {
  const steps = [
    {
      title: "Tell us your business activity",
      desc: "We match you with the best UAE free zone for your activity.",
    },
    {
      title: "Get instant estimate",
      desc: "Transparent pricing based on visas and workspace needs.",
    },
    {
      title: "Launch in as little as 24h",
      desc: "Your dedicated advisor handles the process end to end.",
    },
  ];
  return (
    <section id="services" className="scroll-mt-20">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-4xl font-semibold text-[#222222] text-center"
      >
        Simple 3‑Step Free Zone Setup
      </motion.h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
            className="rounded-2xl border border-[#EAEAEA] bg-white p-6 shadow-sm"
          >
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37] font-semibold">
              {i + 1}
            </div>
            <h3 className="mt-4 text-lg font-semibold text-[#222222]">{s.title}</h3>
            <p className="mt-1 text-sm text-[#222222]/70">{s.desc}</p>
          </motion.div>
        ))}
      </div>
      <div className="mt-10 rounded-2xl border border-[#EAEAEA] bg-white p-6 sm:p-8 shadow-sm">
        <div className="grid gap-6 sm:grid-cols-4">
          <Stat icon={<Timer className="h-5 w-5" />} title="Fastest setup" desc="License in as little as 24 hours" />
          <Stat icon={<Shield className="h-5 w-5" />} title="Trusted" desc="10+ years UAE expertise" />
          <Stat icon={<Handshake className="h-5 w-5" />} title="Personal" desc="1:1 advisor guidance" />
          <Stat icon={<BadgeCheck className="h-5 w-5" />} title="Transparent" desc="Clear, upfront pricing" />
        </div>
      </div>
    </section>
  );
}

function Stat({ icon, title, desc }) {
  return (
    <div className="flex items-start gap-3">
      <div className="text-[#D4AF37]">{icon}</div>
      <div>
        <div className="font-medium text-[#222222]">{title}</div>
        <div className="text-sm text-[#222222]/70">{desc}</div>
      </div>
    </div>
  );
}

function WhyUs() {
  const items = [
    {
      title: "Free zone specialists",
      desc: "We align your activity with the right UAE free zone authority.",
    },
    {
      title: "Expert advisors",
      desc: "Dedicated concierge to guide you throughout the process.",
    },
    {
      title: "Tailored activities",
      desc: "Get the precise activity list required by the authority.",
    },
    {
      title: "Transparent pricing",
      desc: "No hidden fees — your quote breaks down every cost.",
    },
  ];

  return (
    <section id="why" className="scroll-mt-20">
      <div className="rounded-3xl border border-[#EAEAEA] bg-gradient-to-b from-white to-[#F7F7F7] p-8 sm:p-12">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl font-semibold text-[#222222]"
            >
              Why Choose Us
            </motion.h2>
            <p className="mt-3 text-[#222222]/80">
              We combine speed, expertise and a personal touch to get your free zone trade license quickly and without surprises.
            </p>
            <div className="mt-8 grid gap-6">
              {items.map((it) => (
                <div key={it.title} className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center">
                    <BadgeCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium text-[#222222]">{it.title}</div>
                    <div className="text-sm text-[#222222]/70">{it.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[#EAEAEA] bg-white shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop"
                alt="Business meeting"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-xl bg-white border border-[#EAEAEA] p-4 shadow-sm">
              <div className="text-sm text-[#222222]/70">Speak to a free zone advisor</div>
              <div className="font-medium text-[#222222]">Instant chat or call</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BlogPreview() {
  const posts = [
    {
      title: "Best Free Zones in UAE for 2025",
      img: "https://images.unsplash.com/photo-1541534401786-2077eed87a72?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "How to Get a Free Zone Trade License Fast",
      img: "https://images.unsplash.com/photo-1516009082704-3b9a261c1e2b?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "Free Zone Company Setup: Step-by-Step Guide",
      img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop",
    },
  ];

  return (
    <section id="blog" className="scroll-mt-20">
      <h2 className="text-3xl sm:text-4xl font-semibold text-[#222222] text-center">Insights & Guides</h2>
      <p className="mt-2 text-center text-[#222222]/80">Learn how to launch smarter in UAE free zones.</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        {posts.map((p) => (
          <article key={p.title} className="group rounded-2xl overflow-hidden border border-[#EAEAEA] bg-white shadow-sm">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="p-5">
              <h3 className="font-medium text-[#222222] group-hover:text-[#D4AF37] transition-colors">{p.title}</h3>
              <a href="#contact" className="mt-3 inline-block text-sm text-[#D4AF37]">Read more</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="scroll-mt-20">
      <div className="rounded-3xl border border-[#EAEAEA] bg-gradient-to-b from-white to-[#F7F7F7] p-8 sm:p-12">
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#222222]">Contact Us</h2>
            <p className="mt-3 text-[#222222]/80">Minimal form, instant help. Prefer WhatsApp? Tap the green button.</p>
            <div className="mt-6 flex items-center gap-4 text-sm text-[#222222]/70">
              <HelpCircle className="h-4 w-4" />
              <span>No hidden fees, instant quote, personal advisor.</span>
            </div>
          </div>
          <form className="grid gap-4">
            <input className="rounded-xl border border-[#EAEAEA] bg-white px-4 py-3 outline-none focus:border-[#D4AF37]" placeholder="Name" />
            <div className="grid sm:grid-cols-2 gap-4">
              <input className="rounded-xl border border-[#EAEAEA] bg-white px-4 py-3 outline-none focus:border-[#D4AF37]" placeholder="Email" />
              <input className="rounded-xl border border-[#EAEAEA] bg-white px-4 py-3 outline-none focus:border-[#D4AF37]" placeholder="Phone" />
            </div>
            <textarea className="rounded-xl border border-[#EAEAEA] bg-white px-4 py-3 outline-none focus:border-[#D4AF37]" placeholder="Tell us about your free zone business" rows={4} />
            <button type="button" className="rounded-full bg-[#D4AF37] px-6 py-3 text-white font-medium shadow-sm hover:shadow-lg transition-shadow">Get Free Consultation</button>
          </form>
        </div>
      </div>
    </section>
  );
}
