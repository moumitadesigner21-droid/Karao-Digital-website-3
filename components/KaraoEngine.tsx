import React, { useState, useEffect } from 'react';
import { Shield, Cpu, Zap, Activity, Terminal, CheckCircle } from 'lucide-react';

const KaraoEngine: React.FC = () => {
    const [logs, setLogs] = useState<string[]>([]);
    const fullLogs = [
        "[SYSTEM] Initializing Karao.Digital engine...",
        "[MAP] Analyzing client workflow structure... [OK]",
        "[BUILD] Deploying intelligent product architecture...",
        "[AI] Activating automation modules...",
        "[OPTIMIZE] System continuously learning and improving...",
        "[ENGINE] Status: OPTIMAL",
        "[AUTO] Scaling infrastructure... [DONE]"
    ];

    useEffect(() => {
        let currentLog = 0;
        let timeoutId: NodeJS.Timeout;
        const interval = setInterval(() => {
            if (currentLog < fullLogs.length) {
                setLogs(prev => [...prev, fullLogs[currentLog]]);
                currentLog++;
            } else {
                timeoutId = setTimeout(() => setLogs([]), 5000);
                currentLog = 0;
            }
        }, 2000);
        return () => {
            clearInterval(interval);
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, []);

    return (
        <section className="py-24 bg-[#020617] relative overflow-hidden">
            {/* Background radial gradients — teal + gold */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-[120px] pointer-events-none" style={{ background: 'rgba(0,191,203,0.05)' }}></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-[100px] pointer-events-none" style={{ background: 'rgba(196,160,40,0.05)' }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
                        The Karao.Digital <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #00BFCB, #C4A028)' }}>Advantage</span>
                    </h2>
                    <p className="text-slate-400 font-medium text-lg md:text-xl max-w-2xl mx-auto">
                        A smarter way to build, launch, and evolve digital products.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Side: Cards */}
                    <div className="space-y-6">
                        <div className="glass-panel p-8 rounded-[2rem] border border-white/5 group transition-all duration-500" onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,191,203,0.3)'} onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.05)'}>
                            <div className="flex gap-6">
                                <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors" style={{ background: 'rgba(0,191,203,0.1)' }}>
                                    <Shield className="w-7 h-7" style={{ color: '#00BFCB' }} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-3">Strategic Problem Mapping</h3>
                                    <p className="text-slate-400 leading-relaxed">
                                        Every project begins with understanding the deeper structure of your business problem. Karao.Digital maps your workflows, bottlenecks, and opportunities to design a digital solution that actually solves the right challenge.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="glass-panel p-8 rounded-[2rem] border border-white/5 group transition-all duration-500" onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(196,160,40,0.3)'} onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.05)'}>
                            <div className="flex gap-6">
                                <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors" style={{ background: 'rgba(196,160,40,0.1)' }}>
                                    <Cpu className="w-7 h-7" style={{ color: '#C4A028' }} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-3">Intelligent Product Engineering</h3>
                                    <p className="text-slate-400 leading-relaxed">
                                        Instead of generic development, Karao.Digital builds structured digital products — combining MVP development, low-code systems, and custom architecture to launch scalable platforms faster.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="glass-panel p-8 rounded-[2rem] border border-white/5 group transition-all duration-500" onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,147,158,0.3)'} onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.05)'}>
                            <div className="flex gap-6">
                                <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors" style={{ background: 'rgba(0,147,158,0.1)' }}>
                                    <Zap className="w-7 h-7" style={{ color: '#00939E' }} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-3">Continuous AI Optimization</h3>
                                    <p className="text-slate-400 leading-relaxed">
                                        Once your system is live, Karao.Digital continuously improves it through automation, analytics, and AI-driven optimization — ensuring your digital infrastructure evolves with your business.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Dashboard */}
                    <div className="sticky top-24">
                        <div className="glass-panel rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl bg-slate-900/40 backdrop-blur-xl">
                            {/* Dashboard Header */}
                            <div className="bg-white/5 px-8 py-6 border-b border-white/10 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                                    <h4 className="text-xs font-black text-white uppercase tracking-[0.2em]">Digital Engine Status</h4>
                                </div>
                                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full uppercase tracking-widest border border-emerald-500/20">Active</span>
                            </div>

                            <div className="p-8">
                                {/* Stats Grid */}
                                <div className="grid grid-cols-3 gap-4 mb-8">
                                    <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Active Systems</p>
                                        <p className="text-2xl font-black text-white">32</p>
                                        <p className="text-[9px] text-emerald-400 mt-1 font-bold">● Running Platforms</p>
                                    </div>
                                    <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Automation</p>
                                        <p className="text-2xl font-black text-white">120+</p>
                                        <p className="text-[9px] mt-1 font-bold" style={{ color: '#00BFCB' }}>● Workflows</p>
                                    </div>
                                    <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Efficiency</p>
                                        <p className="text-2xl font-black text-white">99.9%</p>
                                        <p className="text-[9px] mt-1 font-bold" style={{ color: '#C4A028' }}>● Stability</p>
                                    </div>
                                </div>

                                {/* Terminal Feed */}
                                <div className="bg-black/40 rounded-2xl p-6 border border-white/10 font-mono text-sm relative group">
                                    <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-2">
                                        <Terminal className="w-4 h-4 text-slate-500" />
                                        <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">System Activity Feed</span>
                                    </div>
                                    <div className="space-y-2 h-48 overflow-y-auto custom-scrollbar">
                                        {logs.map((log, i) => (
                                            <div key={i} className="flex gap-3 animate-in fade-in slide-in-from-left-2 duration-300">
                                                <span className="shrink-0" style={{ color: 'rgba(0,191,203,0.5)' }}>➜</span>
                                                <p className={`${log.includes('[OK]') || log.includes('[DONE]') ? 'text-emerald-400' : 'text-slate-300'}`}>
                                                    {log}
                                                </p>
                                            </div>
                                        ))}
                                        <div className="w-2 h-4 animate-pulse inline-block align-middle ml-1" style={{ background: '#00BFCB' }}></div>
                                    </div>

                                    {/* Decorative Elements */}
                                    <div className="absolute top-4 right-4 opacity-10">
                                        <Activity className="w-12 h-12 text-white animate-pulse" />
                                    </div>
                                </div>

                                {/* Footer Action */}
                                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Engine Optimized</span>
                                    </div>
                                    <button className="text-[11px] font-black uppercase tracking-[0.2em] transition-colors hover:opacity-80" style={{ color: '#00BFCB' }}>View Documentation</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default KaraoEngine;
