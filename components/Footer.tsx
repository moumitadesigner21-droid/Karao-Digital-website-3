import React from 'react';
import { ArrowRight, Twitter, Instagram, Linkedin, Github, Mail } from 'lucide-react';
import Logo from './Logo';

const WA_LINK = 'https://wa.me/918134857604';

// WhatsApp logo SVG (official green brand icon)
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#020617] overflow-hidden border-t border-white/5">

      {/* ── CTA BANNER ── */}
      <div className="relative overflow-hidden border-b border-white/5">

        {/* Ambient glows — CSS gradients, no GPU compositor layer */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(circle 600px at 25% -40%, rgba(0,191,203,0.10) 0%, transparent 70%), radial-gradient(circle 500px at 75% 140%, rgba(196,160,40,0.10) 0%, transparent 70%)',
        }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 relative z-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12">

            {/* Left: Big headline */}
            <div className="max-w-2xl">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-5">Start a project</p>
              <h2 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.05] tracking-tight">
                Let's build something <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00BFCB] via-[#C4A028] to-[#00939E]">
                  smarter.
                </span>
              </h2>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed mt-5 max-w-xl">
                Starting small or starting fresh — we partner with you to build something meaningful.
              </p>
            </div>

            {/* Right: Contact line + CTA */}
            <div className="flex flex-col items-start lg:items-end gap-6">
              <a
                href="mailto:hello@karaodigital.com"
                className="group flex items-center gap-3 text-slate-300 hover:text-white transition-colors text-lg font-semibold"
              >
                <Mail className="w-5 h-5 text-[#00BFCB]" />
                hello@karaodigital.com
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-slate-900 font-black text-sm hover:bg-[#e0fafb] transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(0,191,203,0.4)] hover:-translate-y-0.5 group"
              >
                Get In Touch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── FOOTER LINKS ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-14 border-b border-white/8">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Logo className="mb-4" />
            <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-xs">
              Karao.Digital designs intelligent digital systems for businesses that are ready to scale with precision.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {[
                { Icon: Twitter, href: '#' },
                { Icon: Instagram, href: 'https://www.instagram.com/karao.digital?igsh=MWEyazN2bWIycnJ3eg==' },
                { Icon: Linkedin, href: '#' },
                { Icon: Github, href: '#' },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target={href !== '#' ? '_blank' : undefined}
                  rel={href !== '#' ? 'noopener noreferrer' : undefined}
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-[#00BFCB]/20 hover:text-[#00BFCB] hover:border-[#00BFCB]/40 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-xs font-black text-white uppercase tracking-widest mb-6">Services</h5>
            <ul className="space-y-3">
              {['MVP Development', 'Low-Code Solutions', 'Custom Software', 'AI Automation'].map(item => (
                <li key={item}>
                  <a
                    href="#"
                    className="group flex items-center gap-2 text-slate-400 text-sm font-medium hover:text-white transition-colors"
                  >
                    <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-300 text-[#00BFCB]">
                      <ArrowRight className="w-3 h-3" />
                    </span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="text-xs font-black text-white uppercase tracking-widest mb-6">Company</h5>
            <ul className="space-y-3">
              {['About Us', 'Case Studies', 'Contact'].map(item => (
                <li key={item}>
                  <a
                    href="#"
                    className="group flex items-center gap-2 text-slate-400 text-sm font-medium hover:text-white transition-colors"
                  >
                    <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-300 text-[#00BFCB]">
                      <ArrowRight className="w-3 h-3" />
                    </span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact detail */}
          <div>
            <h5 className="text-xs font-black text-white uppercase tracking-widest mb-6">Contact</h5>

            {/* Email */}
            <a
              href="mailto:hello@karaodigital.com"
              className="flex items-start gap-3 group mb-5"
            >
              <div className="w-9 h-9 rounded-xl bg-[#00BFCB]/10 border border-[#00BFCB]/20 flex items-center justify-center text-[#00BFCB] group-hover:bg-[#00BFCB] group-hover:text-white transition-all flex-shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Email us</p>
                <p className="text-slate-300 text-sm font-semibold group-hover:text-white transition-colors">hello@karaodigital.com</p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 group mb-6"
            >
              <div className="w-9 h-9 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-all flex-shrink-0">
                <WhatsAppIcon className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">WhatsApp</p>
                <p className="text-slate-300 text-sm font-semibold group-hover:text-white transition-colors">+91 81348 57604</p>
              </div>
            </a>

            {/* Status badge */}
            <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">Accepting Projects</span>
            </div>
          </div>

        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-xs font-medium">
            © {year} Karao.Digital. All rights reserved.
          </p>
          <div className="flex gap-6 text-[11px] font-bold text-slate-600 uppercase tracking-widest">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Legal</a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
