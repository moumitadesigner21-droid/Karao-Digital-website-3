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
            <h3 className="text-4xl font-playfair font-bold text-white">50<span style={{ color: '#00BFCB' }}>+</span></h3>
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
              src="/460x996bb.webp"
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
            <h3 className="text-4xl font-playfair font-bold text-white">50<span style={{ color: '#00BFCB' }}>+</span></h3>
            <p className="text-slate-400 font-semibold text-sm uppercase tracking-wider">Happy customers</p>
          </TiltCard>

          {/* Column 4 - Software Dashboard Analytics */}
          <TiltCard className="glass-panel p-8 rounded-[2.5rem] flex flex-col justify-center gap-2 text-center md:text-left relative overflow-hidden group interactive-element backdrop-blur-md bg-slate-900/40">
            <div className="absolute inset-x-0 bottom-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" style={{ backgroundImage: 'linear-gradient(to right, #00BFCB, #C4A028)' }}></div>
            <h3 className="text-4xl font-playfair font-bold text-white">20<span style={{ color: '#C4A028' }}>+</span></h3>
            <p className="text-slate-400 font-semibold text-sm uppercase tracking-wider">App MVPs launched</p>
          </TiltCard>

          <TiltCard className="overflow-hidden rounded-[2.5rem] glass-card group border border-white/5 relative interactive-element">
            <img
              src="/whatsapp-showcase.jpeg"
              alt="Product showcase"
              width="460"
              height="996"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60"></div>
          </TiltCard>

        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
