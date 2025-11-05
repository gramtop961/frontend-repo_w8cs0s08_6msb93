import { Phone, MessageCircle } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-[#EAEAEA]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#b8962f]" />
          <span className="font-semibold tracking-tight text-[#222222]">UAE Setup Pro</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-[#222222]">
          <a href="#services" className="hover:text-[#D4AF37] transition-colors">Services</a>
          <a href="#why" className="hover:text-[#D4AF37] transition-colors">Why Us</a>
          <a href="#blog" className="hover:text-[#D4AF37] transition-colors">Blog</a>
          <a href="#contact" className="hover:text-[#D4AF37] transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="tel:+971000000000"
            className="hidden sm:flex items-center gap-2 text-[#222222] hover:text-[#D4AF37]"
          >
            <Phone className="h-4 w-4" />
            <span className="text-sm">Call</span>
          </a>
          <a
            href="#chat"
            className="inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-4 py-2 text-white font-medium shadow-sm hover:shadow-md transition-shadow"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Get Free Consultation</span>
          </a>
        </div>
      </div>
    </header>
  );
}
