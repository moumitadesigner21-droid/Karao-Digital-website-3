
import React from 'react';
import { Rocket, Bot, Layout, Code, Zap, Shield, Cpu, Terminal, BarChart3, Layers } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden min-h-screen bg-grid-pattern">
      {/* Dynamic Background Elements */}
      <div className="absolute top-20 left-[5%] w-[400px] h-[400px] bg-cyan-200/30 blur-[120px] rounded-full -z-10 animate-pulse"></div>
      <div className="absolute top-40 right-[10%] w-[500px] h-[500px] bg-indigo-100/40 blur-[150px] rounded-full -z-10"></div>
      <div className="absolute bottom-40 left-[15%] w-[300px] h-[300px] bg-emerald-50/50 blur-[100px] rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        {/* Main Heading */}
        <div className="inline-block px-4 py-1.5 mb-6 border border-cyan-100 bg-cyan-50/50 rounded-full">
          <span className="text-xs font-bold text-cyan-600 uppercase tracking-widest flex items-center gap-2">
            <Zap className="w-3 h-3" /> Redefining Digital Engineering
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-[1.1] text-slate-900">
          We Build the <br />
          <span className="text-gradient-cyan">Future of Business</span>
        </h1>
        
        <p className="max-w-3xl mx-auto text-slate-500 text-lg md:text-xl font-medium mb-12 leading-relaxed">
          Specializing in <span className="text-slate-900 font-bold underline decoration-cyan-400 decoration-2 underline-offset-4">MVP Development</span>, 
          AI Automation, and Custom Software. <br className="hidden md:block"/>
          Karao Digital turns complex problems into scalable digital products.
        </p>

        {/* Floating Service Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 opacity-80">
          {['MVP Dev', 'AI Agents', 'Low-Code', 'Custom SaaS'].map((tag) => (
            <span key={tag} className="px-4 py-2 bg-white border border-slate-100 rounded-lg text-sm font-bold text-slate-600 shadow-sm transition-all hover:scale-105 hover:border-cyan-200">
              #{tag}
            </span>
          ))}
        </div>

        {/* Unique Hero Visual Composition - Laptop Version */}
        <div className="relative mx-auto max-w-[1000px]">
          
          {/* Decorative Floating Card: Automation */}
          <div className="absolute -left-12 top-0 hidden lg:block animate-bounce z-20" style={{ animationDuration: '4s' }}>
            <div className="glass-card p-5 rounded-2xl shadow-xl border border-white/80 flex items-center gap-4 text-left">
              <div className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-cyan-200">
                <Bot className="w-7 h-7" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">AI AGENT</p>
                <p className="text-sm font-bold text-slate-800">Workflow Optimized</p>
              </div>
            </div>
          </div>

          {/* Decorative Floating Card: MVP Speed */}
          <div className="absolute -right-12 top-10 hidden lg:block animate-bounce z-20" style={{ animationDuration: '6s' }}>
            <div className="glass-card p-5 rounded-2xl shadow-xl border border-white/80 flex items-center gap-4 text-left">
              <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center text-white shadow-lg shadow-yellow-100">
                <Rocket className="w-7 h-7" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">MVP ENGINE</p>
                <p className="text-sm font-bold text-slate-800">Ready in 4 Weeks</p>
              </div>
            </div>
          </div>

          {/* Central Laptop Mockup */}
          <div className="relative mx-auto max-w-[850px] group">
            {/* Glow effect behind laptop */}
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[120%] h-[120%] bg-cyan-100/20 blur-[150px] rounded-full -z-10 group-hover:bg-cyan-200/30 transition-all duration-700"></div>
            
            {/* Laptop Body */}
            <div className="relative">
              {/* Screen Part */}
              <div className="bg-slate-900 rounded-t-[2rem] p-3 shadow-2xl overflow-hidden">
                <div className="bg-[#f8fafc] aspect-[16/10] w-full rounded-2xl relative overflow-hidden flex">
                  
                  {/* Sidebar Mockup */}
                  <div className="w-16 h-full bg-slate-950 flex flex-col items-center py-6 gap-6">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center text-white shadow-lg shadow-cyan-500/40">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer">
                      <BarChart3 className="w-4 h-4" />
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer">
                      <Terminal className="w-4 h-4" />
                    </div>
                    <div className="mt-auto w-8 h-8 rounded-full border border-white/10 overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100" className="w-full h-full object-cover" />
                    </div>
                  </div>

                  {/* Main Screen Content */}
                  <div className="flex-1 p-8 flex flex-col text-left">
                    <div className="flex justify-between items-center mb-12">
                      <h3 className="text-2xl font-black text-slate-900 tracking-tighter">Automated <span className="text-cyan-500">Infrastructure</span></h3>
                      <div className="flex items-center gap-4">
                        <span className="text-[10px] font-bold text-emerald-500 flex items-center gap-1 bg-emerald-50 px-2 py-1 rounded">
                          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span> SYSTEM HEALTH: 99.9%
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8 flex-1">
                      {/* Left: Interactive Code/Logic View */}
                      <div className="bg-slate-950 rounded-2xl p-6 font-mono text-xs shadow-xl border border-slate-800">
                        <div className="flex gap-1.5 mb-6">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                        </div>
                        <div className="space-y-1">
                          <p className="text-cyan-400">async function <span className="text-white">initAgent()</span> {'{'}</p>
                          <p className="text-slate-500 ml-4">// Processing node clusters...</p>
                          <p className="text-indigo-400 ml-4">const <span className="text-white">status</span> = await deploy();</p>
                          <p className="text-emerald-400 ml-4">if <span className="text-white">(status.ok)</span> {'{'}</p>
                          <p className="text-yellow-400 ml-8">karau.scaleUp(instance_01);</p>
                          <p className="text-emerald-400 ml-4">{'}'}</p>
                          <p className="text-white">{'}'}</p>
                          <div className="pt-4 border-t border-slate-800 mt-4">
                            <p className="text-[10px] text-slate-500 animate-pulse">_ system deploying to production...</p>
                          </div>
                        </div>
                      </div>

                      {/* Right: Abstract 3D Tech Visual */}
                      <div className="relative rounded-2xl overflow-hidden group/viz shadow-xl">
                         <img 
                          src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2426&auto=format&fit=crop" 
                          alt="Digital Architecture" 
                          className="w-full h-full object-cover grayscale-[0.2] brightness-110 group-hover/viz:scale-110 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-indigo-500/10 backdrop-blur-[1px]"></div>
                        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-cyan-400/50 shadow-[0_0_15px_rgba(34,211,238,0.8)] animate-[bounce_4s_infinite]"></div>
                        
                        <div className="absolute bottom-4 left-4 right-4 bg-white/20 backdrop-blur-md p-3 rounded-xl border border-white/20 text-white">
                           <p className="text-[8px] font-black uppercase tracking-widest opacity-70">Neural Link</p>
                           <p className="text-[10px] font-bold">Active Sync: Node 0x7F2</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Case Part of Laptop */}
              <div className="h-4 bg-slate-700 mx-auto w-full rounded-b-xl relative shadow-2xl">
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-slate-800 rounded-b-full"></div>
              </div>
              <div className="h-2 bg-slate-800 mx-auto w-[92%] rounded-b-3xl opacity-50"></div>
            </div>
          </div>

          {/* Code Snippet Floating Panel */}
          <div className="absolute -right-16 bottom-0 hidden xl:block animate-pulse">
            <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 shadow-2xl text-left font-mono text-xs max-w-[220px]">
              <div className="flex gap-1.5 mb-3">
                <div className="w-2 h-2 rounded-full bg-red-400"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
              </div>
              <p className="text-cyan-400">const</p>
              <p className="text-white">karauAI = () ={'>'} {'{'}</p>
              <p className="text-indigo-400 ml-4">optimize(biz);</p>
              <p className="text-indigo-400 ml-4">scale(saas);</p>
              <p className="text-white">{'}'};</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
