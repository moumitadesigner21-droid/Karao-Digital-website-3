import React, { useRef } from 'react';
import { ExternalLink, Award, Compass, Palette, Monitor, Sparkles, Mic, Globe } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const MSA_TAGS = ['React + Vite', 'Custom Design', 'Responsive', 'SEO Optimized', 'Glassmorphism UI'];
const MSA_STATS = [
    { value: '7+', label: 'Years Experience', color: '#C4A028' },
    { value: '60+', label: 'Projects Completed', color: '#00BFCB' },
    { value: '98%', label: 'Client Satisfaction', color: '#E8C040' },
];

const CaseStudies: React.FC = () => {
    const revealRef = useScrollReveal<HTMLDivElement>();
    const sectionRef = useRef<HTMLDivElement>(null);
    const msaShimmerRef = useRef<HTMLDivElement>(null);

    return (
        <section ref={sectionRef} id="case-studies" className="py-28 bg-[#020617] relative overflow-hidden border-t border-white/5">

            {/* Ambient static glows */}
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle 600px at 100% 33%, rgba(196,160,40,0.06) 0%, transparent 70%), radial-gradient(circle 500px at 25% 100%, rgba(0,191,203,0.04) 0%, transparent 70%)' }} />

            {/* Noise grain overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.015]"
                style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />

            <div ref={revealRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div data-reveal className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-5 border border-white/10 bg-white/5 rounded-full">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00BFCB] animate-pulse" />
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Case Studies</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
                            Projects We've <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00BFCB] via-[#C4A028] to-[#00939E]">
                                Brought to Life
                            </span>
                        </h2>
                    </div>
                    <p className="text-slate-400 max-w-sm text-base leading-relaxed">
                        Real businesses. Real solutions. Built by Karao.Digital with award-winning design, modern technology and precision.
                    </p>
                </div>

                {/* Case Study Grid */}
                <div className="grid grid-cols-1 gap-12">

                    {/* ── CARD 1: MSA Design Studio ── */}
                    <div
                        data-reveal
                        className="group relative rounded-[2rem] overflow-hidden border border-white/8 transition-all duration-300 hover:-translate-y-1"
                        style={{
                            background: 'linear-gradient(145deg, rgba(15,23,42,0.95) 0%, rgba(10,14,26,0.98) 100%)',
                        }}
                        onMouseEnter={e => {
                            if (msaShimmerRef.current) msaShimmerRef.current.style.animationName = 'shimmer';
                            (e.currentTarget as HTMLElement).style.boxShadow = '0 0 60px 0 rgba(196,160,40,0.1)';
                            (e.currentTarget as HTMLElement).style.borderColor = 'rgba(196,160,40,0.2)';
                        }}
                        onMouseLeave={e => {
                            if (msaShimmerRef.current) msaShimmerRef.current.style.animationName = 'none';
                            (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                            (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
                        }}
                    >
                        <div className="grid lg:grid-cols-5 gap-0">
                            {/* LEFT: Content */}
                            <div className="lg:col-span-3 p-8 md:p-12 lg:p-16 flex flex-col justify-between relative z-10">
                                {/* Shimmer line */}
                                <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
                                    <div ref={msaShimmerRef} className="h-full w-full" style={{
                                        background: 'linear-gradient(90deg, transparent, rgba(196,160,40,0.6), transparent)',
                                        animationName: 'none',
                                        animationDuration: '2s',
                                        animationTimingFunction: 'ease-in-out',
                                        animationIterationCount: 'infinite',
                                    }} />
                                </div>

                                <div>
                                    <div className="flex items-center gap-3 mb-8">
                                        <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                                            style={{ background: 'linear-gradient(135deg, rgba(196,160,40,0.2), rgba(196,160,40,0.05))', border: '1px solid rgba(196,160,40,0.2)' }}>
                                            <Award className="w-5 h-5 text-[#E8C040]" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Signature Client</p>
                                        </div>
                                    </div>

                                    <h3 className="text-2xl md:text-4xl font-extrabold text-white leading-tight mb-2">
                                        Architecting an Online Masterpiece for <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #E8C040, #C4A028)' }}>MSA Design Studio</span>
                                    </h3>

                                    <p className="text-sm font-semibold text-slate-400 mb-6 flex items-center gap-2">
                                        <Compass className="w-4 h-4 text-[#C4A028]" />
                                        Architecture & Interior Design Studio — Est. 2018
                                    </p>

                                    <div className="w-20 h-0.5 rounded-full mb-6" style={{ background: 'linear-gradient(90deg, #C4A028, transparent)' }} />

                                    <p className="text-slate-400 text-base leading-relaxed max-w-lg mb-10">
                                        A premium digital experience crafted for a high-end architecture and interior design firm. Designed with a refined navy and gold aesthetic, immersive project showcases, and a seamless client interaction flow.
                                    </p>

                                    <div className="flex flex-wrap gap-8 mb-10">
                                        {MSA_STATS.map((stat, i) => (
                                            <div key={i} className="relative group/stat">
                                                <p className="text-3xl md:text-4xl font-black text-white leading-none">{stat.value}</p>
                                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] mt-1.5" style={{ color: stat.color }}>{stat.label}</p>
                                                {i < MSA_STATS.length - 1 && <div className="absolute top-0 -right-4 h-full w-px bg-white/8 hidden sm:block" />}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex flex-wrap gap-2.5 mb-10">
                                        {MSA_TAGS.map(tag => (
                                            <span key={tag} className="tag-pill text-[11px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider cursor-default"
                                                style={{ background: 'rgba(196,160,40,0.06)', border: '1px solid rgba(196,160,40,0.2)', color: '#E8C040' }}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <a href="https://msadesignstudio.in/" target="_blank" rel="noopener noreferrer"
                                        className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-bold group/btn transition-all"
                                        style={{ background: 'linear-gradient(135deg, rgba(196,160,40,0.12), rgba(196,160,40,0.04))', border: '1px solid rgba(196,160,40,0.35)', color: '#E8C040' }}>
                                        Visit Live Site
                                        <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                    </a>
                                </div>
                            </div>

                            {/* RIGHT: Visual */}
                            <div className="lg:col-span-2 relative hidden lg:flex items-center justify-center overflow-hidden p-8">
                                <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(196,160,40,0.08) 0%, transparent 70%)' }} />
                                <div className="mockup-glow relative w-full max-w-[480px] z-10 rounded-2xl overflow-hidden group-hover:-translate-y-2 transition-transform duration-400"
                                    style={{ border: '1px solid rgba(196,160,40,0.15)', boxShadow: '0 0 60px rgba(196,160,40,0.06), 0 20px 60px rgba(0,0,0,0.5)', background: '#0a0e1a' }}>
                                    <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5" style={{ background: 'linear-gradient(180deg, rgba(30,41,59,0.95), rgba(20,30,50,0.95))' }}>
                                        <div className="flex gap-1.5">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                                        </div>
                                        <div className="flex-1 mx-2">
                                            <div className="bg-white/5 rounded-md px-3 py-1 text-[9px] text-slate-500 font-mono truncate text-center">msadesignstudio.in</div>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <picture>
                                            <source srcSet="/msa-screenshot.webp" type="image/webp" />
                                            <img src="/msa-screenshot.png" alt="MSA Design Studio website screenshot" className="w-full h-auto block" loading="lazy" decoding="async" />
                                        </picture>
                                    </div>
                                </div>
                                <div className="absolute top-8 right-8 w-16 h-16 border-t border-r border-[#C4A028]/10 rounded-tr-xl" />
                                <div className="absolute bottom-8 left-8 w-16 h-16 border-b border-l border-[#C4A028]/10 rounded-bl-xl" />

                                {/* Removed backdrop-blur + floatSlow from these badges — saves compositor layers */}
                                <div className="absolute top-12 left-6 px-3 py-1.5 rounded-lg text-[9px] font-bold uppercase tracking-wider text-[#00BFCB] bg-[#00BFCB]/10 border border-[#00BFCB]/15"><Palette className="w-3 h-3 inline mr-1" /> UI Design</div>
                                <div className="absolute bottom-20 right-6 px-3 py-1.5 rounded-lg text-[9px] font-bold uppercase tracking-wider text-[#C4A028] bg-[#C4A028]/10 border border-[#C4A028]/15"><Monitor className="w-3 h-3 inline mr-1" /> Responsive</div>
                            </div>
                        </div>
                    </div>


                    {/* ── CARD 2: Samaan Bol ── */}
                    <div data-reveal className="group relative rounded-[2rem] overflow-hidden border border-white/8 transition-all duration-300 hover:-translate-y-1"
                        style={{
                            background: 'linear-gradient(145deg, rgba(0,191,203,0.06) 0%, rgba(15,23,42,0.95) 50%)',
                        }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 60px 0 rgba(0,191,203,0.1)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,191,203,0.2)'; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = 'none'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)'; }}
                    >
                        <div className="grid lg:grid-cols-5 gap-0">
                            {/* LEFT: Content */}
                            <div className="lg:col-span-3 p-8 md:p-10 lg:p-16 flex flex-col justify-between relative z-10">
                                <div>
                                    <div className="flex items-center gap-3 mb-8 flex-wrap">
                                        <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                            <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Live</span>
                                        </div>
                                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Product Launch</span>
                                        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/15 rounded-full">
                                            <svg className="w-3 h-3 text-white" viewBox="0 0 814 1000" fill="currentColor">
                                                <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-37.5-155.5-127.4C46.7 790.7 0 663 0 541.8c0-207.8 135.5-317.9 269.5-317.9 69 0 126.4 45.5 171 45.5 43.1 0 110.7-48 191.1-48 30.6 0 110.7 2.6 168.6 79.7zm-194.3-86.4c31.3-37.5 54.3-89.7 54.3-141.9 0-7.1-.6-14.3-1.9-20.1-51.6 1.9-112.3 34.4-149.3 75.8-28.5 32.4-55.1 84.7-55.1 137.6 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 46.5 0 102.8-31.1 136.5-70.8z"/>
                                            </svg>
                                            <span className="text-[10px] font-bold text-white/70 tracking-widest">App Store</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-12 h-12 rounded-2xl bg-[#00BFCB]/10 border border-[#00BFCB]/20 flex items-center justify-center">
                                            <Mic className="w-6 h-6 text-[#00BFCB]" />
                                        </div>
                                        <h3 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
                                            Samaan<span className="text-[#00BFCB]">-Bol</span>
                                        </h3>
                                    </div>

                                    <p className="text-slate-400 text-sm font-semibold mb-6 flex items-center gap-2">
                                        <Globe className="w-4 h-4 text-[#00BFCB]" />
                                        Voice-First AI Inventory for Indian Retail
                                    </p>
                                    
                                    <div className="w-20 h-0.5 rounded-full mb-6" style={{ background: 'linear-gradient(90deg, #00BFCB, transparent)' }} />

                                    <p className="text-slate-400 text-base leading-relaxed mb-10 max-w-lg">
                                        A revolutionary voice-first inventory management app that lets Indian shopkeepers manage their entire stock by speaking naturally — supporting 10 Indian languages, powered by AI.
                                    </p>

                                    <div className="flex flex-wrap gap-8 mb-10">
                                        {[
                                            { value: '11', label: 'Languages' },
                                            { value: 'AI', label: 'Voice Engine' },
                                            { value: '0', label: 'Training Needed' },
                                        ].map((stat, i) => (
                                            <div key={i} className="relative group/stat">
                                                <p className="text-3xl md:text-4xl font-black text-white leading-none">{stat.value}</p>
                                                <p className="text-[10px] font-bold text-[#00BFCB] uppercase tracking-[0.2em] mt-1.5">{stat.label}</p>
                                                {i < 2 && <div className="absolute top-0 -right-4 h-full w-px bg-white/8 hidden sm:block" />}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex flex-wrap gap-2.5 mb-10">
                                        {['Voice AI', 'Multilingual', 'React + Vite', 'Sarvam AI', 'Barcode Scan', 'WhatsApp Integration'].map(tag => (
                                            <span key={tag} className="tag-pill text-[11px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider cursor-default"
                                                style={{ background: 'rgba(0,191,203,0.06)', border: '1px solid rgba(0,191,203,0.2)', color: '#67e8f9' }}>
                                                {tag}
                                            </span>
                                        ))}
                                        <span className="tag-pill text-[11px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider cursor-default flex items-center gap-1.5"
                                            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.18)', color: '#e2e8f0' }}>
                                            <svg className="w-3 h-3" viewBox="0 0 814 1000" fill="currentColor"><path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-37.5-155.5-127.4C46.7 790.7 0 663 0 541.8c0-207.8 135.5-317.9 269.5-317.9 69 0 126.4 45.5 171 45.5 43.1 0 110.7-48 191.1-48 30.6 0 110.7 2.6 168.6 79.7zm-194.3-86.4c31.3-37.5 54.3-89.7 54.3-141.9 0-7.1-.6-14.3-1.9-20.1-51.6 1.9-112.3 34.4-149.3 75.8-28.5 32.4-55.1 84.7-55.1 137.6 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 46.5 0 102.8-31.1 136.5-70.8z"/></svg>
                                            iOS App Store
                                        </span>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-3 items-center">
                                    <a href="https://samaan-bol.netlify.app/" target="_blank" rel="noopener noreferrer"
                                        className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-bold group/btn transition-all"
                                        style={{ background: 'linear-gradient(135deg, rgba(0,191,203,0.12), rgba(0,191,203,0.04))', border: '1px solid rgba(0,191,203,0.35)', color: '#67e8f9' }}>
                                        Visit Live Product
                                        <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                    </a>
                                    <div className="flex flex-col gap-1.5">
                                        <a href="https://apps.apple.com/app/samaan-bol" target="_blank" rel="noopener noreferrer"
                                            className="inline-flex items-center gap-3 px-7 py-4 rounded-full text-sm font-bold group/appbtn transition-all hover:-translate-y-0.5"
                                            style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))', border: '1px solid rgba(255,255,255,0.18)', color: '#e2e8f0' }}>
                                            <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 814 1000" fill="currentColor">
                                                <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-37.5-155.5-127.4C46.7 790.7 0 663 0 541.8c0-207.8 135.5-317.9 269.5-317.9 69 0 126.4 45.5 171 45.5 43.1 0 110.7-48 191.1-48 30.6 0 110.7 2.6 168.6 79.7zm-194.3-86.4c31.3-37.5 54.3-89.7 54.3-141.9 0-7.1-.6-14.3-1.9-20.1-51.6 1.9-112.3 34.4-149.3 75.8-28.5 32.4-55.1 84.7-55.1 137.6 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 46.5 0 102.8-31.1 136.5-70.8z"/>
                                            </svg>
                                            <span className="flex flex-col leading-none text-left">
                                                <span className="text-[9px] font-semibold text-white/50 uppercase tracking-widest">Download on the</span>
                                                <span className="text-sm font-bold text-white">App Store</span>
                                            </span>
                                        </a>
                                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full"
                                            style={{ background: 'rgba(103,232,249,0.06)', border: '1px solid rgba(103,232,249,0.18)' }}>
                                            {/* Android icon */}
                                            <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#67e8f9' }}>
                                                <path d="M17.523 15.341a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-9.546 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM2.038 9.186l1.575-2.848A1.2 1.2 0 0 1 5.25 6h13.5a1.2 1.2 0 0 1 1.037.598l1.575 2.848A6.01 6.01 0 0 1 22.5 12c0 3.313-2.687 6-6 6h-9c-3.313 0-6-2.687-6-6a6.01 6.01 0 0 1 1.538-4.014ZM5.25 7.5l-1.2 2.17A4.506 4.506 0 0 0 3 12c0 2.485 2.015 4.5 4.5 4.5h9c2.485 0 4.5-2.015 4.5-4.5 0-.84-.23-1.627-.63-2.303L19.05 7.5H5.25ZM8.25 3a.75.75 0 0 1 .673.418l1.5 3a.75.75 0 1 1-1.346.664L8.25 5.427l-.827 1.655a.75.75 0 1 1-1.346-.664l1.5-3A.75.75 0 0 1 8.25 3Zm7.5 0a.75.75 0 0 1 .673.418l1.5 3a.75.75 0 1 1-1.346.664l-.827-1.655-.827 1.655a.75.75 0 1 1-1.346-.664l1.5-3A.75.75 0 0 1 15.75 3Z"/>
                                            </svg>
                                            <span className="text-[11px] font-bold tracking-wide" style={{ color: '#67e8f9' }}>Android version coming soon</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT: Visual */}
                            <div className="lg:col-span-2 relative hidden lg:flex items-center justify-center overflow-hidden p-8">
                                <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(0,191,203,0.08) 0%, transparent 70%)' }} />
                                <div className="mockup-glow relative w-full max-w-[480px] z-10 rounded-2xl overflow-hidden group-hover:-translate-y-2 transition-transform duration-400"
                                    style={{ border: '1px solid rgba(0,191,203,0.15)', boxShadow: '0 0 60px rgba(0,191,203,0.06), 0 20px 60px rgba(0,0,0,0.5)', background: '#0a0e1a' }}>
                                    <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5" style={{ background: 'linear-gradient(180deg, rgba(30,41,59,0.95), rgba(20,30,50,0.95))' }}>
                                        <div className="flex gap-1.5">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                                        </div>
                                        <div className="flex-1 mx-2">
                                            <div className="bg-white/5 rounded-md px-3 py-1 text-[9px] text-slate-500 font-mono truncate text-center">samaan-bol.netlify.app</div>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <picture>
                                            <source srcSet="/samaan-screenshot.webp" type="image/webp" />
                                            <img src="/samaan-screenshot.png" alt="Samaan-Bol website screenshot" className="w-full h-auto block" loading="lazy" decoding="async" />
                                        </picture>
                                    </div>
                                </div>
                                <div className="absolute top-8 right-8 w-16 h-16 border-t border-r border-[#00BFCB]/10 rounded-tr-xl" />
                                <div className="absolute bottom-8 left-8 w-16 h-16 border-b border-l border-[#00BFCB]/10 rounded-bl-xl" />
                                {/* Removed backdrop-blur + floatSlow from badges */}
                                <div className="absolute top-12 left-6 px-3 py-1.5 rounded-lg text-[9px] font-bold uppercase tracking-wider text-[#00BFCB] bg-[#00BFCB]/10 border border-[#00BFCB]/15 flex items-center gap-1.5">
                                    <Mic className="w-3 h-3 inline" /> Voice First
                                </div>
                                <div className="absolute bottom-20 right-6 px-3 py-2 rounded-xl text-white flex items-center gap-2" style={{ background: 'rgba(0,0,0,0.65)', border: '1px solid rgba(255,255,255,0.12)' }}>
                                    <svg className="w-4 h-4 flex-shrink-0 text-white" viewBox="0 0 814 1000" fill="currentColor"><path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-37.5-155.5-127.4C46.7 790.7 0 663 0 541.8c0-207.8 135.5-317.9 269.5-317.9 69 0 126.4 45.5 171 45.5 43.1 0 110.7-48 191.1-48 30.6 0 110.7 2.6 168.6 79.7zm-194.3-86.4c31.3-37.5 54.3-89.7 54.3-141.9 0-7.1-.6-14.3-1.9-20.1-51.6 1.9-112.3 34.4-149.3 75.8-28.5 32.4-55.1 84.7-55.1 137.6 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 46.5 0 102.8-31.1 136.5-70.8z"/></svg>
                                    <span className="flex flex-col leading-none">
                                        <span className="text-[8px] text-white/50 font-medium">Now on</span>
                                        <span className="text-[10px] font-bold text-white">App Store</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* ── CARD 3: Upcoming Project ── */}
                    <div
                        data-reveal
                        className="group relative rounded-[2rem] overflow-hidden border border-white/8 transition-all duration-300 hover:-translate-y-1"
                        style={{ background: 'linear-gradient(145deg, rgba(0,191,203,0.07) 0%, rgba(10,14,26,0.98) 60%)' }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 80px 0 rgba(0,191,203,0.12)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,191,203,0.22)'; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = 'none'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)'; }}
                    >
                        {/* Animated shimmer top border */}
                        <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
                            <div className="h-full w-full" style={{
                                background: 'linear-gradient(90deg, transparent, rgba(0,191,203,0.7), transparent)',
                                animation: 'shimmer 3s ease-in-out infinite',
                            }} />
                        </div>

                        <div className="grid lg:grid-cols-5 gap-0">
                            {/* LEFT: Content */}
                            <div className="lg:col-span-3 p-8 md:p-10 lg:p-16 flex flex-col justify-between relative z-10 overflow-hidden">

                                {/* Background "03" numeral */}
                                <div className="absolute -right-6 top-1/2 -translate-y-1/2 text-[200px] font-black leading-none select-none pointer-events-none"
                                    style={{ color: 'rgba(0,191,203,0.035)', letterSpacing: '-0.05em' }}>
                                    03
                                </div>

                                <div>
                                    {/* Badge row */}
                                    <div className="flex items-center gap-3 mb-8 flex-wrap">
                                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full"
                                            style={{ background: 'rgba(0,191,203,0.1)', border: '1px solid rgba(0,191,203,0.22)' }}>
                                            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#00BFCB' }} />
                                            <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: '#00BFCB' }}>Upcoming</span>
                                        </div>
                                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Next Chapter</span>
                                    </div>

                                    {/* Icon + Heading */}
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                                            style={{ background: 'rgba(0,191,203,0.1)', border: '1px solid rgba(0,191,203,0.25)', boxShadow: '0 0 24px rgba(0,191,203,0.2)' }}>
                                            <Sparkles className="w-6 h-6" style={{ color: '#00BFCB' }} />
                                        </div>
                                        <h3 className="text-3xl md:text-5xl font-extrabold leading-tight"
                                            style={{ color: '#fff', textShadow: '0 0 60px rgba(0,191,203,0.35)' }}>
                                            Coming <span style={{ color: '#00BFCB' }}>Soon</span><span className="animate-pulse" style={{ color: '#67e8f9' }}>…</span>
                                        </h3>
                                    </div>

                                    <p className="text-slate-400 text-sm font-semibold mb-5 flex items-center gap-2">
                                        <Globe className="w-4 h-4 flex-shrink-0" style={{ color: '#00BFCB' }} />
                                        Something extraordinary is being built
                                    </p>

                                    <div className="w-20 h-0.5 rounded-full mb-6" style={{ background: 'linear-gradient(90deg, #00BFCB, transparent)' }} />

                                    {/* Visible teaser copy */}
                                    <p className="text-slate-400 text-base leading-relaxed mb-3 max-w-lg">
                                        The next chapter is being crafted behind closed doors.
                                        Expect something that pushes the boundaries of what's possible —{' '}
                                        <span style={{ color: 'rgba(103,232,249,0.7)' }}>details will be revealed soon.</span>
                                    </p>

                                    {/* Two redacted lines hinting at more */}
                                    <div className="mb-10 max-w-lg space-y-2.5 select-none mt-4">
                                        {[100, 82].map((w, i) => (
                                            <div key={i} className="h-2.5 rounded-full animate-pulse"
                                                style={{ width: `${w}%`, background: 'linear-gradient(90deg, rgba(0,191,203,0.1), rgba(0,191,203,0.02))', border: '1px solid rgba(0,191,203,0.07)' }} />
                                        ))}
                                    </div>

                                    {/* Redacted stat blocks */}
                                    <div className="flex flex-wrap gap-8 mb-10 select-none">
                                        {[1, 2, 3].map((_, i) => (
                                            <div key={i} className="relative">
                                                <div className="h-10 w-14 rounded-lg mb-2"
                                                    style={{ background: 'rgba(0,191,203,0.07)', border: '1px solid rgba(0,191,203,0.1)', filter: 'blur(3px)' }} />
                                                <div className="h-2 w-20 rounded-full"
                                                    style={{ background: 'rgba(0,191,203,0.05)', filter: 'blur(1px)' }} />
                                                {i < 2 && <div className="absolute top-0 -right-4 h-full w-px bg-white/5 hidden sm:block" />}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Redacted tag pills */}
                                    <div className="flex flex-wrap gap-2.5 mb-10 select-none">
                                        {[68, 84, 60, 92, 76, 56].map((w, i) => (
                                            <div key={i} className="h-8 rounded-full"
                                                style={{ width: `${w}px`, background: 'rgba(0,191,203,0.05)', border: '1px solid rgba(0,191,203,0.12)', filter: 'blur(1.5px)' }} />
                                        ))}
                                    </div>
                                </div>

                                {/* CTA */}
                                <div>
                                    <a href="/"
                                        className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-bold group/btn transition-all hover:-translate-y-0.5"
                                        style={{ background: 'linear-gradient(135deg, rgba(0,191,203,0.14), rgba(0,191,203,0.04))', border: '1px solid rgba(0,191,203,0.38)', color: '#67e8f9' }}>
                                        Visit our website to discover more
                                        <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                    </a>
                                </div>
                            </div>

                            {/* RIGHT: Orbital visual composition */}
                            <div className="lg:col-span-2 relative hidden lg:flex items-center justify-center overflow-hidden">

                                {/* Deep ambient glow */}
                                <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(0,191,203,0.12) 0%, transparent 65%)' }} />

                                {/* Dot-grid texture */}
                                <div className="absolute inset-0 opacity-[0.07]" style={{
                                    backgroundImage: 'radial-gradient(circle, rgba(0,191,203,1) 1px, transparent 1px)',
                                    backgroundSize: '22px 22px'
                                }} />

                                {/* Orbital ring system */}
                                <div className="relative flex items-center justify-center" style={{ width: '300px', height: '300px' }}>

                                    {/* Outer ring — slow clockwise */}
                                    <div className="absolute rounded-full"
                                        style={{ width: '270px', height: '270px', border: '1px solid rgba(0,191,203,0.1)', animation: 'spin 28s linear infinite' }}>
                                        <div className="absolute w-2.5 h-2.5 rounded-full -top-1.5 left-1/2 -translate-x-1/2"
                                            style={{ background: '#00BFCB', boxShadow: '0 0 8px rgba(0,191,203,0.9), 0 0 16px rgba(0,191,203,0.4)' }} />
                                        <div className="absolute w-1.5 h-1.5 rounded-full -bottom-1 left-1/2 -translate-x-1/2"
                                            style={{ background: 'rgba(0,191,203,0.45)' }} />
                                        <div className="absolute w-1.5 h-1.5 rounded-full top-1/2 -left-1 -translate-y-1/2"
                                            style={{ background: 'rgba(0,191,203,0.45)' }} />
                                        <div className="absolute w-2 h-2 rounded-full top-1/2 -right-1 -translate-y-1/2"
                                            style={{ background: '#67e8f9', boxShadow: '0 0 8px rgba(103,232,249,0.7)' }} />
                                    </div>

                                    {/* Middle ring — slow counter-clockwise */}
                                    <div className="absolute rounded-full"
                                        style={{ width: '188px', height: '188px', border: '1px solid rgba(0,191,203,0.2)', boxShadow: '0 0 16px rgba(0,191,203,0.04)', animation: 'spin 18s linear infinite reverse' }}>
                                        <div className="absolute w-2 h-2 rounded-full -top-1 left-1/2 -translate-x-1/2"
                                            style={{ background: 'rgba(0,191,203,0.75)', boxShadow: '0 0 8px rgba(0,191,203,0.6)' }} />
                                        <div className="absolute w-1.5 h-1.5 rounded-full -bottom-0.5 left-1/2 -translate-x-1/2"
                                            style={{ background: 'rgba(0,191,203,0.35)' }} />
                                    </div>

                                    {/* Inner halo */}
                                    <div className="absolute rounded-full animate-pulse"
                                        style={{ width: '116px', height: '116px', border: '1px solid rgba(0,191,203,0.32)', boxShadow: '0 0 24px rgba(0,191,203,0.14), inset 0 0 24px rgba(0,191,203,0.06)' }} />

                                    {/* Core orb */}
                                    <div className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center"
                                        style={{
                                            background: 'radial-gradient(circle, rgba(0,191,203,0.22) 0%, rgba(0,191,203,0.06) 100%)',
                                            border: '1px solid rgba(0,191,203,0.45)',
                                            boxShadow: '0 0 40px rgba(0,191,203,0.4), 0 0 80px rgba(0,191,203,0.12), inset 0 0 30px rgba(0,191,203,0.1)'
                                        }}>
                                        <Sparkles className="w-8 h-8" style={{ color: '#67e8f9' }} />
                                    </div>
                                </div>

                                {/* Corner decorations */}
                                <div className="absolute top-8 right-8 w-16 h-16 border-t border-r border-[#00BFCB]/10 rounded-tr-xl" />
                                <div className="absolute bottom-8 left-8 w-16 h-16 border-b border-l border-[#00BFCB]/10 rounded-bl-xl" />

                                {/* "In Progress" badge — removed backdrop-blur + floatSlow */}
                                <div className="absolute top-10 left-6 flex items-center gap-2 px-3 py-1.5 rounded-lg"
                                    style={{ background: 'rgba(0,191,203,0.1)', border: '1px solid rgba(0,191,203,0.2)' }}>
                                    <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#00BFCB' }} />
                                    <span className="text-[9px] font-bold uppercase tracking-[0.18em]" style={{ color: '#00BFCB' }}>In Progress</span>
                                </div>

                                {/* Blurred date badge — removed backdrop-blur + floatSlow */}
                                <div className="absolute bottom-14 right-6 px-3 py-1.5 rounded-lg select-none"
                                    style={{ background: 'rgba(0,0,0,0.55)', border: '1px solid rgba(0,191,203,0.14)', filter: 'blur(2px)' }}>
                                    <span className="text-[9px] font-bold uppercase tracking-wider" style={{ color: 'rgba(103,232,249,0.55)' }}>███ 2025</span>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
