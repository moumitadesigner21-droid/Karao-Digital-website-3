import React, { useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface TiltCardProps {
    children: React.ReactNode;
    className?: string;
}

const TiltCard: React.FC<TiltCardProps> = ({ children, className = '' }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);
    // Track last RAF id to avoid queuing multiple frames on fast moves
    const rafRef = useRef<number>(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current || !innerRef.current) return;
        // Cancel any pending frame before scheduling a new one
        cancelAnimationFrame(rafRef.current);
        const clientX = e.clientX;
        const clientY = e.clientY;
        rafRef.current = requestAnimationFrame(() => {
            if (!cardRef.current || !innerRef.current) return;
            const rect = cardRef.current.getBoundingClientRect();
            const x = clientX - rect.left;
            const y = clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            // Max rotation of 8 degrees (reduced from 10) — direct DOM style, no re-render
            const rotateX = ((y - centerY) / centerY) * -8;
            const rotateY = ((x - centerX) / centerX) * 8;

            cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            innerRef.current.style.transform = 'translateZ(20px)';
        });
    };

    const handleMouseLeave = () => {
        cancelAnimationFrame(rafRef.current);
        if (!cardRef.current || !innerRef.current) return;
        cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        innerRef.current.style.transform = 'translateZ(0px)';
    };

    return (
        <div
            ref={cardRef}
            className={`transition-transform duration-200 ease-out will-change-transform ${className}`}
            style={{ transformStyle: 'preserve-3d' }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div ref={innerRef} className="h-full w-full">
                {children}
            </div>
        </div>
    );
};

const BentoGrid: React.FC = () => {
  const revealRef = useScrollReveal<HTMLDivElement>();
  return (
    <section id="product" ref={revealRef} className="py-24 bg-transparent relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,_rgba(0,191,203,0.05)_0%,_transparent_40%)]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[220px]">

          {/* Column 1 - Web Design Mockups */}
          <div data-reveal>
          <TiltCard className="md:row-span-2 overflow-hidden rounded-[2.5rem] glass-card group border border-white/5 relative interactive-element">
            <img
              src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=800"
              alt="High-fidelity website mockup"
              width="800"
              height="600"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60"></div>
          </TiltCard>
          </div>

          <div data-reveal>
          <TiltCard className="glass-panel p-8 rounded-[2.5rem] flex flex-col justify-center gap-2 text-center md:text-left relative overflow-hidden group interactive-element backdrop-blur-md bg-slate-900/40">
            <div className="absolute inset-x-0 bottom-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" style={{ backgroundImage: 'linear-gradient(to right, #00BFCB, #C4A028)' }}></div>
            <h3 className="text-4xl font-playfair font-bold text-white">150<span style={{ color: '#00BFCB' }}>+</span></h3>
            <p className="text-slate-400 font-semibold text-sm uppercase tracking-wider">Projects Completed</p>
          </TiltCard>
          </div>

          {/* Column 2 - Modern Code Architectures */}
          <TiltCard className="glass-panel p-8 rounded-[2.5rem] flex flex-col justify-center gap-2 text-center md:text-left relative overflow-hidden group interactive-element backdrop-blur-md bg-slate-900/40">
            <div className="absolute inset-x-0 bottom-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" style={{ backgroundImage: 'linear-gradient(to right, #00BFCB, #C4A028)' }}></div>
            <h3 className="text-4xl font-playfair font-bold text-white">8<span style={{ color: '#C4A028' }}>+</span></h3>
            <p className="text-slate-400 font-semibold text-sm uppercase tracking-wider">Years experience</p>
          </TiltCard>

          <TiltCard className="md:row-span-2 overflow-hidden rounded-[2.5rem] glass-card group border border-white/5 relative interactive-element">
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
              alt="Clean code and development environment"
              width="800"
              height="600"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60"></div>
          </TiltCard>

          {/* Column 3 - UI/UX Design Interface */}
          <TiltCard className="md:row-span-2 overflow-hidden rounded-[2.5rem] glass-card group border border-white/5 relative interactive-element">
            <img
              src="https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80&w=800"
              alt="UI/UX Design System"
              width="800"
              height="600"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60"></div>
          </TiltCard>

          <TiltCard className="glass-panel p-8 rounded-[2.5rem] flex flex-col justify-center gap-2 text-center md:text-left relative overflow-hidden group interactive-element backdrop-blur-md bg-slate-900/40">
            <div className="absolute inset-x-0 bottom-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" style={{ backgroundImage: 'linear-gradient(to right, #00BFCB, #C4A028)' }}></div>
            <h3 className="text-4xl font-playfair font-bold text-white">120<span style={{ color: '#00BFCB' }}>+</span></h3>
            <p className="text-slate-400 font-semibold text-sm uppercase tracking-wider">Happy customers</p>
          </TiltCard>

          {/* Column 4 - Software Dashboard Analytics */}
          <TiltCard className="glass-panel p-8 rounded-[2.5rem] flex flex-col justify-center gap-2 text-center md:text-left relative overflow-hidden group interactive-element backdrop-blur-md bg-slate-900/40">
            <div className="absolute inset-x-0 bottom-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" style={{ backgroundImage: 'linear-gradient(to right, #00BFCB, #C4A028)' }}></div>
            <h3 className="text-4xl font-playfair font-bold text-white">50<span style={{ color: '#C4A028' }}>+</span></h3>
            <p className="text-slate-400 font-semibold text-sm uppercase tracking-wider">App MVPs launched</p>
          </TiltCard>

          <TiltCard className="md:row-span-2 overflow-hidden rounded-[2.5rem] glass-card group border border-white/5 relative interactive-element">
            <div className="w-full h-full transition-transform duration-700 group-hover:scale-105">
              <svg viewBox="0 0 360 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <defs>
                  <linearGradient id="dbAreaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#00BFCB" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#00BFCB" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="dbBg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0B1628" />
                    <stop offset="100%" stopColor="#060C18" />
                  </linearGradient>
                  <linearGradient id="dbBar1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#00BFCB" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#00BFCB" stopOpacity="0.5" />
                  </linearGradient>
                  <linearGradient id="dbBar2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#C4A028" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#C4A028" stopOpacity="0.45" />
                  </linearGradient>
                </defs>

                {/* ── Background ── */}
                <rect width="360" height="500" fill="url(#dbBg)" />

                {/* Subtle dot grid */}
                {[...Array(10)].map((_, row) =>
                  [...Array(12)].map((_, col) => (
                    <circle key={`${row}-${col}`} cx={18 + col * 30} cy={18 + row * 48} r="0.8" fill="#1a2d4a" opacity="0.6" />
                  ))
                )}

                {/* ── Header bar ── */}
                <rect x="0" y="0" width="360" height="44" fill="#0D1B35" />
                <circle cx="20" cy="22" r="6" fill="#00BFCB" />
                <circle cx="20" cy="22" r="10" fill="#00BFCB" fillOpacity="0.18" />
                <rect x="34" y="17" width="36" height="10" rx="5" fill="#1a2d4a" />
                <rect x="76" y="17" width="28" height="10" rx="5" fill="#1a2d4a" opacity="0.55" />
                <rect x="110" y="17" width="28" height="10" rx="5" fill="#1a2d4a" opacity="0.35" />
                {/* Header right */}
                <rect x="290" y="17" width="22" height="10" rx="5" fill="#1a2d4a" opacity="0.5" />
                <circle cx="336" cy="22" r="10" fill="#1a2d4a" />
                <circle cx="348" cy="22" r="7" fill="#00BFCB" fillOpacity="0.15" />
                <circle cx="348" cy="22" r="3.5" fill="#00BFCB" fillOpacity="0.7" />

                {/* ── Title ── */}
                <text x="16" y="65" fontFamily="monospace" fontSize="7" fill="#475569" letterSpacing="3">ANALYTICS</text>
                <text x="16" y="83" fontFamily="monospace" fontSize="14" fontWeight="bold" fill="#ffffff">Dashboard</text>
                <rect x="16" y="87" width="48" height="2" rx="1" fill="#00BFCB" opacity="0.6" />

                {/* ── KPI Cards ── */}
                {/* Card 1 */}
                <rect x="12" y="98" width="78" height="58" rx="8" fill="#0D1B35" />
                <rect x="12" y="98" width="78" height="58" rx="8" fill="none" stroke="#00BFCB" strokeWidth="0.6" opacity="0.35" />
                <text x="20" y="114" fontFamily="monospace" fontSize="5.5" fill="#64748b">Revenue</text>
                <text x="20" y="131" fontFamily="monospace" fontSize="13" fontWeight="bold" fill="#ffffff">$128K</text>
                <text x="20" y="147" fontFamily="monospace" fontSize="6" fill="#00BFCB">▲ 12.4%</text>

                {/* Card 2 */}
                <rect x="96" y="98" width="78" height="58" rx="8" fill="#0D1B35" />
                <rect x="96" y="98" width="78" height="58" rx="8" fill="none" stroke="#C4A028" strokeWidth="0.6" opacity="0.35" />
                <text x="104" y="114" fontFamily="monospace" fontSize="5.5" fill="#64748b">Users</text>
                <text x="104" y="131" fontFamily="monospace" fontSize="13" fontWeight="bold" fill="#ffffff">4,280</text>
                <text x="104" y="147" fontFamily="monospace" fontSize="6" fill="#C4A028">▲ 8.1%</text>

                {/* Card 3 */}
                <rect x="180" y="98" width="78" height="58" rx="8" fill="#0D1B35" />
                <rect x="180" y="98" width="78" height="58" rx="8" fill="none" stroke="#00BFCB" strokeWidth="0.6" opacity="0.35" />
                <text x="188" y="114" fontFamily="monospace" fontSize="5.5" fill="#64748b">Conv. Rate</text>
                <text x="188" y="131" fontFamily="monospace" fontSize="13" fontWeight="bold" fill="#ffffff">3.68%</text>
                <text x="188" y="147" fontFamily="monospace" fontSize="6" fill="#00BFCB">▲ 2.3%</text>

                {/* Card 4 */}
                <rect x="264" y="98" width="84" height="58" rx="8" fill="#0D1B35" />
                <rect x="264" y="98" width="84" height="58" rx="8" fill="none" stroke="#C4A028" strokeWidth="0.6" opacity="0.35" />
                <text x="272" y="114" fontFamily="monospace" fontSize="5.5" fill="#64748b">MRR</text>
                <text x="272" y="131" fontFamily="monospace" fontSize="13" fontWeight="bold" fill="#ffffff">$42.1K</text>
                <text x="272" y="147" fontFamily="monospace" fontSize="6" fill="#C4A028">▲ 18.7%</text>

                {/* ── Line Chart Panel ── */}
                <rect x="12" y="168" width="336" height="136" rx="10" fill="#0D1B35" />
                <rect x="12" y="168" width="336" height="136" rx="10" fill="none" stroke="#1a2d4a" strokeWidth="0.7" />
                <text x="24" y="186" fontFamily="monospace" fontSize="7" fontWeight="bold" fill="#ffffff">Revenue Overview</text>
                <text x="24" y="198" fontFamily="monospace" fontSize="5.5" fill="#475569">Last 12 months</text>
                {/* Legend */}
                <rect x="260" y="180" width="8" height="3" rx="1.5" fill="#00BFCB" />
                <text x="271" y="184" fontFamily="monospace" fontSize="5" fill="#64748b">Revenue</text>
                <rect x="260" y="190" width="8" height="3" rx="1.5" fill="#C4A028" />
                <text x="271" y="194" fontFamily="monospace" fontSize="5" fill="#64748b">Target</text>

                {/* Grid lines */}
                <line x1="24" y1="208" x2="336" y2="208" stroke="#1a2d4a" strokeWidth="0.5" />
                <line x1="24" y1="222" x2="336" y2="222" stroke="#1a2d4a" strokeWidth="0.5" />
                <line x1="24" y1="236" x2="336" y2="236" stroke="#1a2d4a" strokeWidth="0.5" />
                <line x1="24" y1="250" x2="336" y2="250" stroke="#1a2d4a" strokeWidth="0.5" />
                <line x1="24" y1="264" x2="336" y2="264" stroke="#1a2d4a" strokeWidth="0.5" />
                <line x1="24" y1="278" x2="336" y2="278" stroke="#1a2d4a" strokeWidth="0.5" />

                {/* Area fill */}
                <path d="M 24 268 L 52 260 L 80 263 L 108 247 L 136 236 L 164 226 L 192 216 L 220 205 L 248 210 L 276 197 L 304 188 L 332 178 L 336 180 L 336 285 L 24 285 Z" fill="url(#dbAreaGrad)" />
                {/* Main teal line */}
                <path d="M 24 268 L 52 260 L 80 263 L 108 247 L 136 236 L 164 226 L 192 216 L 220 205 L 248 210 L 276 197 L 304 188 L 332 178" stroke="#00BFCB" strokeWidth="2" fill="none" strokeLinejoin="round" />
                {/* Secondary gold line */}
                <path d="M 24 280 L 52 276 L 80 273 L 108 269 L 136 263 L 164 258 L 192 253 L 220 249 L 248 252 L 276 246 L 304 240 L 332 234" stroke="#C4A028" strokeWidth="1.5" fill="none" strokeLinejoin="round" opacity="0.6" />

                {/* Glowing data points */}
                <circle cx="276" cy="197" r="8" fill="#00BFCB" fillOpacity="0.15" />
                <circle cx="276" cy="197" r="3.5" fill="#00BFCB" />
                <circle cx="332" cy="178" r="8" fill="#00BFCB" fillOpacity="0.15" />
                <circle cx="332" cy="178" r="3.5" fill="#00BFCB" />

                {/* Month labels */}
                {['J','F','M','A','M','J','J','A','S','O','N','D'].map((m, i) => (
                  <text key={m + i} x={24 + i * 28} y="295" fontFamily="monospace" fontSize="5" fill="#334155">{m}</text>
                ))}

                {/* ── Bottom Two Panels ── */}
                {/* Left — Bar Chart */}
                <rect x="12" y="316" width="160" height="132" rx="10" fill="#0D1B35" />
                <rect x="12" y="316" width="160" height="132" rx="10" fill="none" stroke="#1a2d4a" strokeWidth="0.7" />
                <text x="24" y="334" fontFamily="monospace" fontSize="7" fontWeight="bold" fill="#ffffff">Channel Mix</text>

                {/* Bar baselines at y=425 */}
                <rect x="28" y="390" width="20" height="35" rx="3" fill="url(#dbBar1)" />
                <rect x="55" y="376" width="20" height="49" rx="3" fill="url(#dbBar1)" />
                <rect x="82" y="384" width="20" height="41" rx="3" fill="url(#dbBar2)" />
                <rect x="109" y="368" width="20" height="57" rx="3" fill="url(#dbBar1)" fillOpacity="0.7" />
                <rect x="136" y="378" width="20" height="47" rx="3" fill="url(#dbBar2)" fillOpacity="0.7" />

                {/* Bar labels */}
                <text x="30" y="434" fontFamily="monospace" fontSize="5" fill="#475569">Org</text>
                <text x="56" y="434" fontFamily="monospace" fontSize="5" fill="#475569">Paid</text>
                <text x="83" y="434" fontFamily="monospace" fontSize="5" fill="#475569">SEO</text>
                <text x="110" y="434" fontFamily="monospace" fontSize="5" fill="#475569">Ref</text>
                <text x="137" y="434" fontFamily="monospace" fontSize="5" fill="#475569">Soc</text>

                {/* Right — Horizontal Progress Bars */}
                <rect x="180" y="316" width="168" height="132" rx="10" fill="#0D1B35" />
                <rect x="180" y="316" width="168" height="132" rx="10" fill="none" stroke="#1a2d4a" strokeWidth="0.7" />
                <text x="192" y="334" fontFamily="monospace" fontSize="7" fontWeight="bold" fill="#ffffff">User Segments</text>

                {/* Row 1 */}
                <text x="192" y="352" fontFamily="monospace" fontSize="5.5" fill="#94a3b8">Enterprise</text>
                <rect x="192" y="356" width="130" height="7" rx="3.5" fill="#1a2d4a" />
                <rect x="192" y="356" width="98" height="7" rx="3.5" fill="#00BFCB" fillOpacity="0.85" />
                <text x="328" y="363" fontFamily="monospace" fontSize="5.5" fill="#00BFCB">75%</text>

                {/* Row 2 */}
                <text x="192" y="377" fontFamily="monospace" fontSize="5.5" fill="#94a3b8">Pro</text>
                <rect x="192" y="381" width="130" height="7" rx="3.5" fill="#1a2d4a" />
                <rect x="192" y="381" width="65" height="7" rx="3.5" fill="#C4A028" fillOpacity="0.85" />
                <text x="328" y="388" fontFamily="monospace" fontSize="5.5" fill="#C4A028">50%</text>

                {/* Row 3 */}
                <text x="192" y="402" fontFamily="monospace" fontSize="5.5" fill="#94a3b8">Starter</text>
                <rect x="192" y="406" width="130" height="7" rx="3.5" fill="#1a2d4a" />
                <rect x="192" y="406" width="40" height="7" rx="3.5" fill="#00BFCB" fillOpacity="0.5" />
                <text x="328" y="413" fontFamily="monospace" fontSize="5.5" fill="#64748b">31%</text>

                {/* Row 4 */}
                <text x="192" y="427" fontFamily="monospace" fontSize="5.5" fill="#94a3b8">Trial</text>
                <rect x="192" y="431" width="130" height="7" rx="3.5" fill="#1a2d4a" />
                <rect x="192" y="431" width="20" height="7" rx="3.5" fill="#C4A028" fillOpacity="0.45" />
                <text x="328" y="438" fontFamily="monospace" fontSize="5.5" fill="#64748b">15%</text>

                {/* ── Status Bar ── */}
                <rect x="12" y="460" width="336" height="28" rx="8" fill="#0D1B35" />
                <circle cx="28" cy="474" r="4" fill="#00BFCB" />
                <circle cx="28" cy="474" r="7" fill="#00BFCB" fillOpacity="0.2" />
                <text x="38" y="478" fontFamily="monospace" fontSize="6" fill="#00BFCB">Live</text>
                <text x="62" y="478" fontFamily="monospace" fontSize="5.5" fill="#475569">Updated 2 min ago</text>
                <text x="218" y="478" fontFamily="monospace" fontSize="5.5" fill="#475569">Q4 2024</text>
                <text x="268" y="478" fontFamily="monospace" fontSize="6" fill="#C4A028">↗ All metrics up</text>
              </svg>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-30"></div>
          </TiltCard>

        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
