
import React, { useEffect, useRef, useState } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Founder at BloomTech",
    content: "Karau Digital turned our napkin sketch into a fully functional MVP in record time. Their AI automation integration saved us roughly 20 hours of manual work per week.",
    avatar: "https://i.pravatar.cc/150?u=sarah",
    rating: 5
  },
  {
    name: "Marcus Chen",
    role: "CTO, Nexus Systems",
    content: "The custom software they built for our logistics chain is a masterpiece of efficiency. It's clean, scalable, and exactly what we needed to move to the next level.",
    avatar: "https://i.pravatar.cc/150?u=marcus",
    rating: 5
  },
  {
    name: "Elena Rodriguez",
    role: "Product Lead at Vibe",
    content: "I've worked with many agencies, but Karau's low-code approach combined with their deep engineering knowledge is unique. They don't just build; they strategize.",
    avatar: "https://i.pravatar.cc/150?u=elena",
    rating: 5
  },
  {
    name: "David Smith",
    role: "CEO, Spark AI",
    content: "The speed of execution is mind-blowing. We had our core features live in 7 days, allowing us to pivot based on real user feedback almost immediately.",
    avatar: "https://i.pravatar.cc/150?u=david",
    rating: 5
  },
  {
    name: "Aisha Khan",
    role: "Director of Operations",
    content: "Their AI agents are now handling 60% of our customer inquiries. The ROI was visible within the first month of deployment. Truly transformative.",
    avatar: "https://i.pravatar.cc/150?u=aisha",
    rating: 5
  },
  {
    name: "James Wilson",
    role: "Co-Founder, Lift Logistics",
    content: "Clean code, brilliant design, and a team that actually understands business goals. Karau Digital is our go-to partner for all things digital.",
    avatar: "https://i.pravatar.cc/150?u=james",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-32 bg-[#fafafa] relative overflow-hidden"
    >
      {/* Refined Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.05)_0%,transparent_50%)] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 mb-8 shadow-sm">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em]">Our Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
            Trusted by the next generation <br />
            <span className="text-cyan-500">of digital leaders</span>
          </h2>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto text-lg leading-relaxed">
            We don't just build products; we build partnerships. Join hundreds of satisfied founders who scaled their vision with Karau.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div 
              key={idx} 
              className={`group bg-white p-10 rounded-[3rem] border border-slate-100 transition-all duration-500 hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] hover:-translate-y-2 relative
                ${isVisible ? 'animate-testimonial' : 'opacity-0'}
              `}
              style={{ 
                animationDelay: `${idx * 150}ms`,
              }}
            >
              {/* Quote Mark Decoration */}
              <div className="absolute top-10 right-10 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none">
                <Quote className="w-16 h-16 text-slate-900" />
              </div>

              <div className="flex gap-1 mb-8">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              
              <div className="relative z-10 h-full flex flex-col">
                <blockquote className="text-slate-700 text-[17px] font-medium leading-[1.6] mb-10 flex-grow">
                  "{t.content}"
                </blockquote>
                
                <div className="flex items-center gap-4 pt-8 border-t border-slate-50">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-sm ring-1 ring-slate-100">
                    <img 
                      src={t.avatar} 
                      alt={t.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base leading-none mb-1.5">{t.name}</h4>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
