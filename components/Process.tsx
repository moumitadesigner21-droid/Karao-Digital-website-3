import React, { useRef, useEffect, useState } from 'react';
import { Target, Layers, Code, TestTube, Rocket, TrendingUp } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const steps = [
    {
        num: '01',
        title: 'Discovery & Strategic Understanding',
        short: 'Understand your vision & goals',
        desc: 'Every successful digital system begins with clarity. We start by deeply understanding your business goals, target audience, operational challenges, and growth vision. Through strategic consultations and analysis, we map the exact digital solution your business needs.',
        Icon: Target,
        gradient: 'from-[#00BFCB] to-[#00939E]',
        glow: 'rgba(0,191,203,0.5)',
        ring: 'rgba(0,191,203,0.3)',
    },
    {
        num: '02',
        title: 'Solution Architecture & Planning',
        short: 'Design the right tech blueprint',
        desc: 'Once the problem is defined, our team designs a structured digital architecture tailored to your requirements. We define the technology stack, AI integrations, workflows, and product roadmap to ensure scalability, efficiency, and long-term performance.',
        Icon: Layers,
        gradient: 'from-[#C4A028] to-[#99790b]',
        glow: 'rgba(196,160,40,0.5)',
        ring: 'rgba(196,160,40,0.3)',
    },
    {
        num: '03',
        title: 'MVP & Product Development',
        short: 'Build fast, launch smart',
        desc: 'We rapidly build your Minimum Viable Product or core platform using modern low-code frameworks and custom development. This stage focuses on speed, usability, and building the essential functionality required to validate and launch your solution.',
        Icon: Code,
        gradient: 'from-[#00BFCB] to-[#00939E]',
        glow: 'rgba(0,191,203,0.5)',
        ring: 'rgba(0,191,203,0.3)',
    },
    {
        num: '04',
        title: 'Testing & Optimization',
        short: 'Polish every interaction',
        desc: 'Before deployment, we rigorously test the product for performance, usability, and system stability. We refine user flows, optimize the interface, and ensure every component operates seamlessly across platforms.',
        Icon: TestTube,
        gradient: 'from-[#C4A028] to-[#99790b]',
        glow: 'rgba(196,160,40,0.5)',
        ring: 'rgba(196,160,40,0.3)',
    },
    {
        num: '05',
        title: 'Launch & Deployment',
        short: 'Go live with confidence',
        desc: 'Once validated, we launch your digital product with a structured deployment process. This includes hosting setup, integrations, security configurations, and real-world testing to ensure a smooth and successful launch.',
        Icon: Rocket,
        gradient: 'from-[#00BFCB] to-[#00939E]',
        glow: 'rgba(0,191,203,0.5)',
        ring: 'rgba(0,191,203,0.3)',
    },
    {
        num: '06',
        title: 'Growth, Automation & Scaling',
        short: 'Evolve and scale with AI',
        desc: 'After launch, Karao.Digital continues to support your growth. We implement AI automation, performance optimization, and strategic improvements to help your system evolve and scale alongside your business.',
        Icon: TrendingUp,
        gradient: 'from-[#C4A028] to-[#99790b]',
        glow: 'rgba(196,160,40,0.5)',
        ring: 'rgba(196,160,40,0.3)',
    },
];

const Process: React.FC = () => {
    const [activeStep, setActiveStep] = useState<number | null>(null);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setActiveStep(0); },
            { threshold: 0.2 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (activeStep === null) return;
        if (activeStep < steps.length - 1) {
            const timer = setTimeout(() => setActiveStep(prev => (prev ?? 0) + 1), 300);
            return () => clearTimeout(timer);
        }
    }, [activeStep]);

    return (
        <section ref={sectionRef} className="py-28 bg-[#020617] relative overflow-hidden border-t border-white/5">

            {/* Background glow — CSS gradient, no GPU compositor layer */}
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 900px 400px at 50% 50%, rgba(0,191,203,0.10) 0%, transparent 70%)' }} />

            {/* stepPulse / fadeUp keyframes now live in index.css */}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div data-reveal className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-5 border border-white/10 bg-white/5 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C4A028] animate-pulse" />
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">The Karao.Digital Workflow</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight mb-5">
                        From Idea to <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00BFCB] via-[#C4A028] to-[#00939E]">
                            Intelligent System
                        </span>
                    </h2>
                    <p className="text-slate-400 max-w-xl mx-auto text-base leading-relaxed">
                        See how Karao.Digital transforms ideas into intelligent digital systems — from understanding your vision to launching scalable AI-powered solutions.
                    </p>
                </div>

                {/* ── HORIZONTAL TIMELINE (desktop) ── */}
                <div className="hidden lg:block relative">

                    {/* Dashed connecting line */}
                    <div
                        className="absolute top-[108px] left-[calc(100%/12)] right-[calc(100%/12)] h-0"
                        style={{
                            borderTop: '2px dashed rgba(0,191,203,0.3)',
                            zIndex: 0,
                        }}
                    />

                    {/* Steps row */}
                    <div className="grid grid-cols-6 gap-4 relative z-10">
                        {steps.map((step, i) => {
                            const isTop = i % 2 === 0;   // even: label on top, odd: label on bottom
                            const isActive = activeStep !== null && i <= activeStep;
                            const { Icon } = step;

                            return (
                                <div key={step.num} className="flex flex-col items-center group cursor-default">

                                    {/* ── Top label ── */}
                                    <div className={`h-[90px] flex flex-col justify-end pb-3 text-center transition-all duration-500 ${isTop ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                                        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wide group-hover:text-white transition-colors leading-snug">
                                            {step.short}
                                        </p>
                                    </div>

                                    {/* ── Circle node ── */}
                                    <div
                                        className="step-active relative flex items-center justify-center w-[72px] h-[72px] rounded-full transition-all duration-500"
                                        style={{
                                            '--glow': step.glow,
                                            background: isActive
                                                ? `radial-gradient(circle at 35% 35%, ${step.ring}, rgba(2,6,23,0.95))`
                                                : 'rgba(15,23,42,0.9)',
                                            border: isActive
                                                ? `2px solid ${step.ring}`
                                                : '2px solid rgba(255,255,255,0.08)',
                                            boxShadow: isActive ? `0 0 28px 4px ${step.glow}` : 'none',
                                        } as React.CSSProperties}
                                    >
                                        {/* Inner gradient circle */}
                                        <div
                                            className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500"
                                            style={{
                                                background: isActive
                                                    ? `linear-gradient(135deg, ${step.glow.replace('0.5', '0.3')}, ${step.glow.replace('0.5', '0.05')})`
                                                    : 'rgba(255,255,255,0.04)',
                                            }}
                                        >
                                            <Icon
                                                className="w-5 h-5 transition-colors duration-500"
                                                style={{ color: isActive ? '#fff' : 'rgba(148,163,184,0.6)' }}
                                            />
                                        </div>

                                        {/* Step number badge */}
                                        <span
                                            className="absolute -top-2 -right-2 text-[10px] font-black px-1.5 py-0.5 rounded-full"
                                            style={{
                                                background: isActive
                                                    ? `linear-gradient(135deg, ${step.glow}, ${step.ring})`
                                                    : 'rgba(30,41,59,0.9)',
                                                color: isActive ? '#fff' : 'rgba(148,163,184,0.5)',
                                                border: '1px solid rgba(255,255,255,0.1)',
                                            }}
                                        >
                                            {step.num}
                                        </span>
                                    </div>

                                    {/* ── Bottom label ── */}
                                    <div className={`h-[90px] flex flex-col justify-start pt-3 text-center transition-all duration-500 ${!isTop ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                                        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wide group-hover:text-white transition-colors leading-snug">
                                            {step.short}
                                        </p>
                                    </div>

                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* ── DETAIL CARDS BELOW TIMELINE ── */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {steps.map((step, i) => {
                        const { Icon } = step;
                        return (
                            <div
                                key={step.num}
                                className="group relative rounded-[1.5rem] p-6 border border-white/8 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                                style={{
                                    background: 'rgba(12,18,38,0.95)',
                                }}
                                onMouseEnter={e => {
                                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px 0 ${step.glow}`;
                                    (e.currentTarget as HTMLElement).style.borderColor = step.ring;
                                }}
                                onMouseLeave={e => {
                                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
                                }}
                            >
                                {/* Corner glow */}
                                <div
                                    className="absolute -top-10 -right-10 w-32 h-32 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                                    style={{ background: step.glow, filter: 'blur(24px)' }}
                                />

                                {/* Header row */}
                                <div className="flex items-center gap-3 mb-4 relative z-10">
                                    <div
                                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                                        style={{ background: `linear-gradient(135deg, ${step.ring}, transparent)`, border: `1px solid ${step.ring}` }}
                                    >
                                        <Icon className="w-5 h-5 text-white" />
                                    </div>
                                    <span
                                        className="text-xs font-black uppercase tracking-widest bg-clip-text text-transparent"
                                        style={{ backgroundImage: `linear-gradient(90deg, ${step.glow}, ${step.ring})` }}
                                    >
                                        STEP {step.num}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-extrabold text-white mb-2 leading-snug relative z-10">
                                    {step.title}
                                </h3>

                                {/* Description */}
                                <p className="text-slate-400 text-sm leading-relaxed relative z-10 group-hover:text-slate-300 transition-colors">
                                    {step.desc}
                                </p>

                                {/* Background big number */}
                                <div
                                    className="absolute -bottom-4 -right-2 text-8xl font-black pointer-events-none select-none transition-opacity duration-500 opacity-[0.03] group-hover:opacity-[0.06]"
                                    style={{ color: '#fff' }}
                                >
                                    {step.num}
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default Process;
