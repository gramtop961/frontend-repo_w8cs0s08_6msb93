import { Rocket, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero({ onStartChat }) {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[#F7F7F7]" />
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-3xl" />
        <div className="absolute -left-24 -bottom-24 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-20 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#EAEAEA] bg-white px-3 py-1 text-xs text-[#222222] shadow-sm">
            <Rocket className="h-3.5 w-3.5 text-[#D4AF37]" />
            Fastest UAE Company Setup
          </div>

          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-[#222222]">
            Start Your UAE Business in 1 Day
          </h1>

          <p className="mt-4 text-lg text-[#222222]/80">
            Get expert guidance, instant cost estimate, and your license fast. Trusted advisors
            helping entrepreneurs launch in Dubai and across UAE Free Zones.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              onClick={onStartChat}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D4AF37] px-6 py-3 text-white font-medium shadow-sm hover:shadow-lg transition-shadow"
            >
              Chat with Expert
              <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href="#quote"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#EAEAEA] bg-white px-6 py-3 text-[#222222] hover:border-[#D4AF37]"
            >
              Get Instant Quote
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6">
            {[
              { label: "Avg. setup time", value: "24h" },
              { label: "Businesses launched", value: "2,500+" },
              { label: "Rating", value: "4.9/5" },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-[#EAEAEA] bg-white p-4 text-center">
                <div className="text-2xl font-semibold text-[#222222]">{item.value}</div>
                <div className="text-xs text-[#222222]/70">{item.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="relative z-10"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[#EAEAEA] bg-white shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1600&auto=format&fit=crop"
              alt="Dubai skyline"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/90 backdrop-blur p-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-[#222222]/70">Want to know the cost?</p>
                <p className="text-[#222222] font-medium">Get a tailored estimate in minutes</p>
              </div>
              <button
                onClick={onStartChat}
                className="rounded-full bg-[#D4AF37] px-4 py-2 text-white text-sm font-medium"
              >
                Calculate Now
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
