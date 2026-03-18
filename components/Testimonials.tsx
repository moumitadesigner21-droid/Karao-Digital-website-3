import React from 'react';
import { Star, Search, X, MoreHorizontal } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

/* ─── DATA ────────────────────────────────────────────── */
const testimonials = [
  {
    name: 'Jerina Ahmeda',
    role: 'Principal Architect & Founder, MSA Design Studio',
    avatar: '/jerina.png',
    content:
      'Working with Karao.Digital has been a smooth and rewarding experience. From understanding our design approach to translating it into clear digital communication — their team handled everything with professionalism.',
    rating: 5,
    tags: ['Fast delivery', 'Professional'],
    date: '2 days ago',
    variant: 'wide',         // wide card with tags
  },
  {
    name: 'Aarav Mehta',
    role: 'Technical Lead, Private Firm',
    avatar: 'https://ui-avatars.com/api/?name=Aarav+Mehta&background=0f172a&color=00BFCB&size=80&bold=true&format=png',
    content:
      'The custom software they built for our logistics chain is a masterpiece of efficiency. Clean, scalable, and exactly what we needed.',
    rating: 5,
    variant: 'quote',        // big quote card
  },
  {
    name: 'Rohan Kulkarni',
    role: 'Co-founder, Early-Stage Startup',
    avatar: 'https://ui-avatars.com/api/?name=Rohan+Kulkarni&background=0f172a&color=C4A028&size=80&bold=true&format=png',
    content:
      'What stood out was their ability to simplify complex processes. The software feels thoughtfully built and easy to scale.',
    rating: 5,
    variant: 'minimal',      // compact card
  },
  {
    name: 'Vikram Iyer',
    role: 'Engineering Head',
    avatar: 'https://ui-avatars.com/api/?name=Vikram+Iyer&background=0f172a&color=00BFCB&size=80&bold=true&format=png',
    content:
      'Incredible service. Perfect, exceeded expectations. The solution delivered has brought clarity and consistency to our operations.',
    rating: 5,
    date: '26 Mar 2024',
    variant: 'photo',        // card with photo
  },
  {
    name: 'Ankit Sharma',
    role: 'Operations Lead',
    avatar: 'https://ui-avatars.com/api/?name=Ankit+Sharma&background=0f172a&color=C4A028&size=80&bold=true&format=png',
    content:
      'Highly satisfied with the work done — reliable, clean, and thoughtfully built for our needs.',
    rating: 5,
    tags: ['Good deal', 'Fast'],
    variant: 'tag-simple',   // rating + tags, no avatar shown prominently
  },
  {
    name: 'Neha Verma',
    role: 'Product Manager',
    avatar: 'https://ui-avatars.com/api/?name=Neha+Verma&background=0f172a&color=00BFCB&size=80&bold=true&format=png',
    content:
      'They were responsive, detail-oriented, and delivered a solution that genuinely supports our operational goals.',
    rating: 5,
    variant: 'featured',     // CEO-style featured card
  },
  {
    name: 'Siddharth Rao',
    role: 'Founder, Independent Venture',
    avatar: 'https://ui-avatars.com/api/?name=Siddharth+Rao&background=0f172a&color=C4A028&size=80&bold=true&format=png',
    content:
      'Amazing Product! When it comes to quality, this product is top-notch. Delivered exactly what was promised.',
    rating: 5,
    variant: 'avatar-right', // avatar floats right
  },
];

/* ─── STAR ROW ────────────────────────────────────────── */
const Stars: React.FC<{ count?: number; color?: string }> = ({ count = 5, color = '#22d3ee' }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} className="w-3.5 h-3.5" fill={color} color={color} />
    ))}
  </div>
);

/* ─── CARD STYLES ─────────────────────────────────────── */
const cardBase =
  'rounded-2xl border border-white/10 bg-[#0f172a]/90 p-5 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,191,203,0.15)]';

const Testimonials: React.FC = () => {
  const revealRef = useScrollReveal<HTMLDivElement>();
  return (
    <section ref={revealRef} className="py-28 bg-[#020617] relative overflow-hidden border-t border-white/5">

      {/* Background glows — CSS gradients, no GPU compositor layers */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle 500px at 25% 33%, rgba(0,191,203,0.10) 0%, transparent 70%), radial-gradient(circle 400px at 75% 75%, rgba(196,160,40,0.10) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section header */}
        <div data-reveal className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-5 border border-white/10 bg-white/5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00BFCB] animate-pulse" />
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Client Reviews</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight mb-4">
            What Our Clients <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00BFCB] via-[#C4A028] to-[#00939E]">
              Are Saying
            </span>
          </h2>
          <p className="text-slate-400 max-w-md mx-auto text-base">
            Real results from real businesses. Trusted by founders, operators, and engineering teams.
          </p>
        </div>

        {/* ── SERVICE RATING BADGE (centred) ── */}
        <div className="flex justify-center mb-10">
          <div className="flex items-center gap-3 px-5 py-3 rounded-2xl border border-white/10 bg-[#0f172a]">
            <Stars color="#facc15" />
            <span className="text-white font-bold text-sm">Service Rating</span>
            <span className="text-slate-400 text-xs">(5/5) from 49 customers</span>
            <span className="ml-2 text-[10px] font-bold bg-[#00BFCB]/20 border border-[#00BFCB]/30 text-[#00BFCB] px-2 py-0.5 rounded-full">99+</span>
          </div>
        </div>

        {/* ── MASONRY GRID ── */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">

          {/* CARD 1 — Featured client card (Jerina) */}
          <div data-reveal className={`${cardBase} break-inside-avoid bg-gradient-to-br from-[#C4A028]/10 to-[#0f172a]`}
            style={{ border: '1px solid rgba(196,160,40,0.2)' }}>
            {/* Large photo banner */}
            <div className="w-full h-40 rounded-xl overflow-hidden mb-4 relative"
              style={{ boxShadow: '0 0 0 1px rgba(196,160,40,0.3)' }}>
              <picture>
                <source srcSet="/jerina.webp" type="image/webp" />
                <img
                  src="/jerina.png"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 62%' }}
                  alt={testimonials[0].name}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-transparent to-transparent" />
              {/* Name overlay at bottom */}
              <div className="absolute bottom-2 left-3 flex items-center gap-2">
                <span className="text-white font-extrabold text-sm leading-tight drop-shadow">{testimonials[0].name}</span>
                <Stars color="#facc15" />
              </div>
            </div>
            {/* Identity row */}
            <p className="text-[#C4A028] text-[11px] font-semibold mb-3">{testimonials[0].role}</p>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">{testimonials[0].content}</p>
            <div className="flex gap-2 flex-wrap">
              {testimonials[0].tags?.map(t => (
                <span key={t} className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#C4A028]/15 border border-[#C4A028]/30 text-[#C4A028]">{t}</span>
              ))}
            </div>
          </div>

          {/* CARD 2 — Featured (Neha — CEO-style) */}
          <div data-reveal className={`${cardBase} break-inside-avoid bg-gradient-to-br from-[#1e1b4b]/80 to-[#0f172a]`}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <img src={testimonials[5].avatar} className="w-10 h-10 rounded-full ring-2 ring-[#00BFCB]/40" alt={testimonials[5].name} loading="lazy" decoding="async" />
                <div>
                  <p className="text-white font-extrabold text-base">{testimonials[5].name}</p>
                  <p className="text-[#00BFCB] text-[11px]">{testimonials[5].role}</p>
                </div>
              </div>
              <div className="flex gap-1">
                {[0, 1, 2].map(i => <div key={i} className="w-1 h-1 rounded-full bg-slate-500" />)}
              </div>
            </div>
            <Stars color="#22d3ee" />
            <p className="text-white text-xl font-extrabold leading-snug mt-4 mb-2">
              "Prompt and helpful responses — superb quality!"
            </p>
            <p className="text-slate-400 text-sm">{testimonials[5].content}</p>
          </div>

          {/* CARD 3 — Minimal compact (Rohan) */}
          <div data-reveal className={`${cardBase} break-inside-avoid`}>
            <Stars color="#C4A028" />
            <p className="text-slate-300 text-sm leading-relaxed mt-3 mb-4">{testimonials[2].content}</p>
            <div className="border-t border-white/10 pt-3 flex items-center gap-3">
              <img src={testimonials[2].avatar} className="w-8 h-8 rounded-full ring-1 ring-white/20" alt={testimonials[2].name} loading="lazy" decoding="async" />
              <div>
                <p className="text-white font-semibold text-xs">{testimonials[2].name}</p>
                <p className="text-slate-500 text-[10px]">{testimonials[2].role}</p>
              </div>
            </div>
          </div>

          {/* CARD 4 — Big quote (Aarav) */}
          <div data-reveal className={`${cardBase} break-inside-avoid bg-gradient-to-br from-[#00BFCB]/20 to-[#0f172a]`}>
            <div className="text-[#00BFCB] text-5xl font-black leading-none mb-3 opacity-40">"</div>
            <p className="text-white text-lg font-bold leading-snug mb-4">
              {testimonials[1].content}
            </p>
            <Stars color="#00BFCB" />
            <div className="border-t border-white/10 pt-4 mt-4 flex items-center gap-3">
              <img src={testimonials[1].avatar} className="w-9 h-9 rounded-full ring-1 ring-[#00BFCB]/40" alt={testimonials[1].name} loading="lazy" decoding="async" />
              <div>
                <p className="text-white font-bold text-sm">{testimonials[1].name}</p>
                <p className="text-[#00BFCB] text-[10px] uppercase tracking-wider">{testimonials[1].role}</p>
              </div>
            </div>
          </div>

          {/* CARD 5 — Tag + rating simple (Ankit) */}
          <div data-reveal className={`${cardBase} break-inside-avoid`}>
            <Stars color="#C4A028" />
            <p className="text-3xl font-black text-white mt-4 mb-1 leading-tight">Highly satisfied.</p>
            <p className="text-slate-400 text-sm mb-4">{testimonials[4].content}</p>
            <div className="flex gap-2 flex-wrap mb-3">
              {testimonials[4].tags?.map(t => (
                <span key={t} className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#C4A028]/15 border border-[#C4A028]/30 text-[#C4A028]">{t}</span>
              ))}
            </div>
            <p className="text-slate-500 text-[11px]">— @{testimonials[4].name.split(' ')[0]}Ward —</p>
          </div>

          {/* CARD 6 — Incredible service with photo feel (Vikram) */}
          <div data-reveal className={`${cardBase} break-inside-avoid bg-gradient-to-br from-[#1e1b4b]/70 to-[#0f172a]`}>
            <p className="text-slate-500 text-[11px] mb-3">{testimonials[3].date}</p>
            <p className="text-white text-2xl font-extrabold leading-tight mb-2">Incredible service</p>
            <p className="text-slate-400 text-sm mb-4">{testimonials[3].content}</p>
            <Stars color="#facc15" />
            <div className="border-t border-white/10 pt-4 mt-4 flex items-center gap-3">
              <img src={testimonials[3].avatar} className="w-9 h-9 rounded-full ring-1 ring-white/20" alt={testimonials[3].name} loading="lazy" decoding="async" />
              <div>
                <p className="text-white font-bold text-sm">{testimonials[3].name}</p>
                <p className="text-slate-500 text-[10px]">{testimonials[3].role}</p>
              </div>
            </div>
          </div>

          {/* CARD 7 — Avatar right + "Amazing Product" (Siddharth) */}
          <div data-reveal className={`${cardBase} break-inside-avoid flex gap-4`}>
            <div className="flex-1">
              <Stars color="#00BFCB" />
              <p className="text-white text-lg font-extrabold mt-3 mb-2">Amazing work!</p>
              <p className="text-slate-400 text-sm leading-relaxed">{testimonials[6].content}</p>
              <p className="text-slate-500 text-[11px] mt-3">@{testimonials[6].name.split(' ')[0]} · 12h ago</p>
            </div>
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-2xl overflow-hidden ring-1 ring-[#00BFCB]/30">
                <img src={testimonials[6].avatar} className="w-full h-full object-cover" alt={testimonials[6].name} loading="lazy" decoding="async" />
              </div>
            </div>
          </div>

          {/* CARD 8 — Client Reviews UI widget */}
          <div data-reveal className={`${cardBase} break-inside-avoid`}>
            <div className="flex items-center gap-2 mb-4 p-2 rounded-xl bg-white/5 border border-white/10">
              <span className="text-slate-300 text-xs font-bold flex-1">Client Reviews</span>
              <X className="w-3 h-3 text-slate-500" />
              <Search className="w-3 h-3 text-slate-500" />
            </div>
            <div className="space-y-3">
              {testimonials.slice(0, 3).map((t, i) => (
                <div key={i} className="flex items-start gap-2.5 pb-3 border-b border-white/5 last:border-0">
                  <img src={t.avatar} className="w-7 h-7 rounded-full ring-1 ring-white/10 mt-0.5 flex-shrink-0 object-cover" style={{ objectPosition: i === 0 ? 'center 55%' : 'center' }} alt={t.name} loading="lazy" decoding="async" />
                  <div>
                    <p className="text-white text-[11px] font-semibold">{t.name}</p>
                    <p className="text-slate-500 text-[10px] leading-snug mt-0.5">{t.content.slice(0, 65)}…</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
