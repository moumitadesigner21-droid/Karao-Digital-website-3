
import React from 'react';

const BentoGrid: React.FC = () => {
  return (
    <section className="py-24 bg-[#fcfcfd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[220px]">
          
          {/* Column 1 - Web Design Mockups */}
          <div className="md:row-span-2 overflow-hidden rounded-[2.5rem] bg-white shadow-md shadow-black/5 border border-slate-100 group">
            <img 
              src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=800" 
              alt="High-fidelity website mockup" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <div className="bg-white p-8 rounded-[2.5rem] shadow-md shadow-black/5 border border-slate-100 flex flex-col justify-center gap-2 text-center md:text-left transition-transform hover:-translate-y-1">
            <h3 className="text-4xl font-playfair font-bold text-slate-900">150<span className="text-cyan-500">+</span></h3>
            <p className="text-slate-400 font-semibold text-sm uppercase tracking-wider">Projects Completed</p>
          </div>

          {/* Column 2 - Modern Code Architectures */}
          <div className="bg-white p-8 rounded-[2.5rem] shadow-md shadow-black/5 border border-slate-100 flex flex-col justify-center gap-2 text-center md:text-left transition-transform hover:-translate-y-1">
            <h3 className="text-4xl font-playfair font-bold text-slate-900">8<span className="text-cyan-500">+</span></h3>
            <p className="text-slate-400 font-semibold text-sm uppercase tracking-wider">Years experience</p>
          </div>
          <div className="md:row-span-2 overflow-hidden rounded-[2.5rem] bg-white shadow-md shadow-black/5 border border-slate-100 group">
            <img 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800" 
              alt="Clean code and development environment" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          {/* Column 3 - UI/UX Design Interface */}
          <div className="md:row-span-2 overflow-hidden rounded-[2.5rem] bg-white shadow-md shadow-black/5 border border-slate-100 group">
            <img 
              src="https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80&w=800" 
              alt="UI/UX Design System" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <div className="bg-white p-8 rounded-[2.5rem] shadow-md shadow-black/5 border border-slate-100 flex flex-col justify-center gap-2 text-center md:text-left transition-transform hover:-translate-y-1">
            <h3 className="text-4xl font-playfair font-bold text-slate-900">120<span className="text-cyan-500">+</span></h3>
            <p className="text-slate-400 font-semibold text-sm uppercase tracking-wider">Happy customers</p>
          </div>

          {/* Column 4 - Software Dashboard Analytics */}
          <div className="bg-white p-8 rounded-[2.5rem] shadow-md shadow-black/5 border border-slate-100 flex flex-col justify-center gap-2 text-center md:text-left transition-transform hover:-translate-y-1">
            <h3 className="text-4xl font-playfair font-bold text-slate-900">50<span className="text-cyan-500">+</span></h3>
            <p className="text-slate-400 font-semibold text-sm uppercase tracking-wider">App MVPs launched</p>
          </div>
          <div className="md:row-span-2 overflow-hidden rounded-[2.5rem] bg-white shadow-md shadow-black/5 border border-slate-100 group">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bbbda5366392?auto=format&fit=crop&q=80&w=800" 
              alt="SaaS Analytics Dashboard" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
