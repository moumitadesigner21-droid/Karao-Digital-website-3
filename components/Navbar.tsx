import React from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';

const WA_LINK = 'https://wa.me/918134857604';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex justify-between items-center h-20">
          <Logo />

          {/* Nav links — visible from sm (640px) up */}
          <div className="hidden sm:flex items-center space-x-6 md:space-x-10">
            <a href="/" className="text-xs md:text-sm font-medium text-slate-300 hover:text-[#00BFCB] transition-colors">Home</a>
            <a href="#about" onClick={(e) => e.preventDefault()} className="text-xs md:text-sm font-medium text-slate-300 hover:text-[#00BFCB] transition-colors cursor-pointer">About</a>
            <a href="#product" className="text-xs md:text-sm font-medium text-slate-300 hover:text-[#00BFCB] transition-colors">Product</a>
            <a href="#services" className="text-xs md:text-sm font-medium text-slate-300 hover:text-[#00BFCB] transition-colors">Service</a>
            <a href="#case-studies" className="relative group flex items-center gap-1.5 text-xs md:text-sm font-bold text-white transition-colors hover:text-[#00BFCB]">
              Case Studies
              <div className="w-1.5 h-1.5 rounded-full bg-[#00BFCB] shadow-[0_0_8px_rgba(0,191,203,0.8)]" />
              <div className="absolute -bottom-1.5 left-0 right-0 h-px bg-gradient-to-r from-[#00BFCB]/0 via-[#00BFCB] to-[#00BFCB]/0 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

          {/* Right side — Get Started always visible + hamburger on xs only */}
          <div className="flex items-center gap-2">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card flex items-center gap-1.5 text-white font-semibold transition-all hover:bg-white/10 hover:border-[#00BFCB]/50 hover:shadow-[0_0_15px_rgba(0,191,203,0.3)]
                px-3 py-2 text-xs rounded-full
                sm:px-4 sm:py-2 sm:text-xs
                md:px-6 md:py-2.5 md:text-sm md:gap-2"
            >
              <span>Get Started</span>
              <div className="bg-[#00BFCB] p-1 md:p-1.5 rounded-full flex-shrink-0">
                <ArrowUpRight className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" />
              </div>
            </a>

            {/* Hamburger — xs screens only (< 640px) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="sm:hidden p-2 text-slate-100 hover:bg-white/5 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown — xs screens only */}
      {isOpen && (
        <div className="sm:hidden bg-slate-900/95 backdrop-blur border-b border-white/5 px-4 py-5 space-y-1 shadow-2xl">
          <a href="/" onClick={() => setIsOpen(false)} className="flex items-center text-base font-medium text-slate-200 hover:text-[#00BFCB] transition-colors py-3 border-b border-white/5">Home</a>
          <a href="#about" onClick={(e) => { e.preventDefault(); setIsOpen(false); }} className="flex items-center text-base font-medium text-slate-200 hover:text-[#00BFCB] transition-colors py-3 border-b border-white/5">About</a>
          <a href="#product" onClick={() => setIsOpen(false)} className="flex items-center text-base font-medium text-slate-200 hover:text-[#00BFCB] transition-colors py-3 border-b border-white/5">Product</a>
          <a href="#services" onClick={() => setIsOpen(false)} className="flex items-center text-base font-medium text-slate-200 hover:text-[#00BFCB] transition-colors py-3 border-b border-white/5">Service</a>
          <a href="#case-studies" onClick={() => setIsOpen(false)} className="flex items-center gap-2 text-base font-bold text-white hover:text-[#00BFCB] transition-colors py-3 cursor-pointer">
            Case Studies
            <div className="w-1.5 h-1.5 rounded-full bg-[#00BFCB] shadow-[0_0_8px_rgba(0,191,203,0.8)]" />
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
