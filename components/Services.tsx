
import React from 'react';
import { ArrowRight, Zap, Bot, Globe, ShieldCheck } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section className="py-24 bg-[#f8fafc] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* New Branding Header based on user snippet */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            <span className="text-cyan-500">Your Vision</span> <br />
            <span className="text-yellow-500">Powered by AI</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4 text-slate-400 font-bold text-sm md:text-lg uppercase tracking-widest">
            <span>MVP Development</span>
            <span className="text-slate-200">||</span>
            <span>AI Automations</span>
            <span className="text-slate-200">||</span>
            <span>Low/No-Code Website</span>
            <span className="text-slate-200">||</span>
            <span>Custom Software</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:auto-rows-[300px]">
          
          {/* MVP Development - Large Tall Card */}
          <div className="md:col-span-4 md:row-span-2 bg-white rounded-[2.5rem] p-8 flex flex-col justify-between shadow-sm border border-slate-100 group">
            <div>
              <div className="w-full aspect-[4/5] rounded-[2rem] overflow-hidden mb-8 shadow-inner">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" 
                  alt="Team building MVP" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4 leading-tight">
                MVP Development <br />
                <span className="text-cyan-500">functional in 7 days.</span>
              </h4>
              <p className="text-slate-500 font-medium leading-relaxed mb-8">
                We focus on core features that matter. Launch your product to market faster than the competition with our streamlined engineering sprint.
              </p>
            </div>
            <button className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full w-fit font-bold text-sm group/btn hover:bg-cyan-500 transition-colors">
              Launch MVP
              <div className="bg-white/20 p-1 rounded-full group-hover/btn:translate-x-1 transition-transform">
                <ArrowRight className="w-3 h-3" />
              </div>
            </button>
          </div>

          {/* AI Automation - Middle Top Card */}
          <div className="md:col-span-4 bg-white rounded-[2.5rem] p-8 flex flex-col shadow-sm border border-slate-100 group">
            <div className="w-full h-32 rounded-2xl overflow-hidden mb-6 relative">
              <img 
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800" 
                alt="AI Neural Network" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur rounded-lg shadow-sm">
                <Bot className="w-4 h-4 text-cyan-500" />
              </div>
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">
              AI Automations <span className="text-slate-400">for business.</span>
            </h4>
            <p className="text-slate-400 font-medium text-sm">Automate repetitive tasks and integrate intelligent LLM agents into your existing ecosystem.</p>
            <div className="mt-auto pt-4 flex items-center gap-2">
               <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
               <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">System Operational</span>
            </div>
          </div>

          {/* Low-code/No-code - Top Right Card */}
          <div className="md:col-span-4 bg-white rounded-[2.5rem] p-8 flex flex-col justify-between shadow-sm border border-slate-100 relative group overflow-hidden">
             <div className="absolute -top-4 -right-4 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity rotate-12">
                <Globe className="text-cyan-500 w-full h-full" />
             </div>
             <div>
                <span className="text-5xl font-black text-slate-900 tracking-tighter">10X</span>
                <p className="text-slate-400 font-bold text-sm uppercase tracking-wider mt-2">Scale Speed</p>
             </div>
             <div>
                <h4 className="font-bold text-slate-900 mb-1">Low-Code & No-Code</h4>
                <p className="text-slate-500 font-medium text-sm leading-relaxed">
                   High-performance web apps built with Framer, Webflow, and Supabase for maximum scalability and easy management.
                </p>
             </div>
          </div>

          {/* Custom Software - Bottom Wide Card */}
          <div className="md:col-span-8 bg-white rounded-[2.5rem] p-8 flex flex-col md:flex-row shadow-sm border border-slate-100 group relative overflow-hidden">
            <div className="flex-1 flex flex-col justify-center pr-0 md:pr-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-cyan-50 p-2 rounded-lg">
                  <ShieldCheck className="w-5 h-5 text-cyan-600" />
                </div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Enterprise Ready</span>
              </div>
              <h4 className="text-3xl font-bold text-slate-900 mb-4 leading-tight">
                Custom Software <span className="text-slate-400">built for unique operational power.</span>
              </h4>
              <p className="text-slate-500 font-medium leading-relaxed max-w-sm mb-6">
                Bespoke digital architecture designed to solve your company's most complex challenges with precision and security.
              </p>
              <div className="flex gap-4">
                 <div className="flex -space-x-2">
                    {[5, 6, 7].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i+20}`} className="w-full h-full object-cover" />
                      </div>
                    ))}
                 </div>
                 <span className="text-xs font-bold text-slate-400 self-center uppercase tracking-widest">Scalable & Secure</span>
              </div>
            </div>
            <div className="flex-1 mt-8 md:mt-0 relative">
               <div className="w-full h-full rounded-[2rem] overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
                    alt="Custom Dashboard Development" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
               </div>
               <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent hidden md:block"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
