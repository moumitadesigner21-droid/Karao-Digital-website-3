
import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Github, 
  Mail, 
  Phone, 
  ArrowRight,
  Sparkles,
  Calendar,
  MessageSquare
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-24 pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Call to Action Banner - Replaces Newsletter */}
        <div className="relative -mb-32 z-10">
          <div className="bg-gradient-to-r from-cyan-600 to-indigo-600 rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 shadow-2xl shadow-cyan-500/20 overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl -ml-32 -mb-32"></div>

            {/* Left: Interactive/Visual Element */}
            <div className="lg:w-1/3 flex justify-center relative">
              <div className="w-64 h-64 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center relative">
                 <div className="absolute inset-0 animate-pulse bg-cyan-300/20 rounded-full blur-xl"></div>
                 <Calendar className="w-32 h-32 text-white drop-shadow-2xl animate-bounce" style={{ animationDuration: '4s' }} />
                 {/* Decorative Stars/Dots */}
                 <div className="absolute top-4 right-10 w-2 h-2 bg-yellow-300 rounded-full animate-ping"></div>
                 <div className="absolute bottom-10 left-4 w-3 h-3 bg-white rounded-full opacity-50"></div>
              </div>
            </div>

            {/* Right: Text and Action */}
            <div className="lg:w-2/3 text-center lg:text-left text-white">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
                Ready to turn your vision <br className="hidden md:block" />
                into a high-performance reality?
              </h2>
              <p className="text-cyan-100 mb-10 text-lg opacity-90 leading-relaxed">
                Skip the months of planning. Book a free 30-minute strategy session <br className="hidden lg:block"/> 
                and let's discuss how we can launch your MVP in record time.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-6">
                <button className="w-full sm:w-auto bg-white text-indigo-600 px-10 py-5 rounded-2xl font-bold hover:bg-cyan-50 transition-all shadow-xl hover:shadow-white/20 flex items-center justify-center gap-3 group text-lg">
                  <Calendar className="w-5 h-5" />
                  Book Strategy Call
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="w-full sm:w-auto bg-transparent border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-3 text-lg">
                  <MessageSquare className="w-5 h-5" />
                  Chat on WhatsApp
                </button>
              </div>
              
              <div className="mt-8 flex items-center justify-center lg:justify-start gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <img key={i} src={`https://i.pravatar.cc/100?img=${i + 10}`} className="w-8 h-8 rounded-full border-2 border-indigo-500" alt="team" />
                  ))}
                </div>
                <p className="text-sm font-semibold text-cyan-100/80">
                  <span className="text-white">Next available slot:</span> Today at 4:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Links Section */}
        <div className="pt-56 pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 border-b border-slate-100">
          
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-8">
              <span className="text-3xl font-brand text-slate-900">Karau</span>
            </div>
            <p className="text-slate-500 font-medium leading-relaxed max-w-sm mb-10">
              Empowering visionary founders with AI-driven engineering, rapid MVP development, and high-performance software solutions built for the next generation of digital leaders.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin, Github].map((Icon, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-cyan-500 hover:text-white transition-all duration-300 shadow-sm"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Columns */}
          <div>
            <h4 className="font-bold text-slate-900 mb-8 uppercase tracking-widest text-sm">Company</h4>
            <ul className="space-y-4">
              {['About Us', 'Services', 'Community', 'Testimonials', 'Careers'].map(item => (
                <li key={item}>
                  <a href="#" className="text-slate-500 font-medium hover:text-cyan-600 transition-colors flex items-center group">
                    <span className="w-0 group-hover:w-4 overflow-hidden transition-all duration-300 text-cyan-500">
                       <ArrowRight className="w-3 h-3" />
                    </span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-8 uppercase tracking-widest text-sm">Expertise</h4>
            <ul className="space-y-4">
              {['MVP Dev', 'AI Agents', 'Low-Code', 'SaaS Dev', 'UI/UX Design'].map(item => (
                <li key={item}>
                  <a href="#" className="text-slate-500 font-medium hover:text-cyan-600 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-8 uppercase tracking-widest text-sm">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-center gap-4 text-slate-500 group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="font-bold text-slate-700">+1 (888) 987-6543</span>
              </li>
              <li className="flex items-center gap-4 text-slate-500 group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="font-bold text-slate-700">hello@karau.digital</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 font-medium text-sm">
            © {new Date().getFullYear()} Karau Digital. All rights reserved. Built with precision and purpose.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm font-bold text-slate-400 uppercase tracking-widest">
            <a href="#" className="hover:text-cyan-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cyan-600 transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-cyan-600 transition-colors">Legal</a>
            <a href="#" className="hover:text-cyan-600 transition-colors">Site Map</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
