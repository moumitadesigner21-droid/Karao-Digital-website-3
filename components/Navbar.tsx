
import React from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/40 backdrop-blur-xl border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <span className="text-2xl font-brand text-slate-900 tracking-tight">Karau</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-cyan-500 transition-colors">Product</a>
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-cyan-500 transition-colors">Service</a>
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-cyan-500 transition-colors">About</a>
          </div>

          <div className="hidden md:flex items-center">
            <button className="glass-card px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2 text-slate-800 hover:bg-white transition-all shadow-sm">
              Get Started
              <div className="bg-cyan-400 p-1 rounded-full">
                <ArrowUpRight className="w-3 h-3 text-white" />
              </div>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-900">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-black/5 px-4 py-6 space-y-4 shadow-xl">
          <a href="#" className="block text-lg font-medium text-slate-900">Product</a>
          <a href="#" className="block text-lg font-medium text-slate-900">Service</a>
          <a href="#" className="block text-lg font-medium text-slate-900">About</a>
          <button className="w-full bg-cyan-500 text-white px-5 py-3 rounded-full font-bold">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
