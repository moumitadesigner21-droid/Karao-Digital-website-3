
import React, { useEffect, useRef, useState } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Jerina Ahmeda",
    role: "MSA Design Studio",
    content: “Working with Karao Digital has been a smooth and rewarding experience. From understanding our design approach to translating it into clear digital communication, their team handled everything with professionalism and creativity.

Karao Digital helped us shape our online presence from the ground up, ensuring our work, collaborations, and brand story were presented thoughtfully and effectively. Their attention to detail, timely execution, and collaborative mindset made the entire process seamless.

We truly appreciate their dedication and would gladly recommend Karao Digital to anyone looking for reliable and creative digital solutions.”*.",
    avatar: "https://i.pravatar.cc/150?u=sarah",
    rating: 5
  },
  {
    name: " "Aarav Mehta",
role: "Technical Lead, Private Firm",
content: "The custom software they built for our logistics chain is a masterpiece of efficiency. It's clean, scalable, and exactly what we needed to move to the next level.",
avatar: "https://i.pravatar.cc/150?u=aarav",
",
    role: "Cname: "Rohan Kulkarni",
role: "Co-founder, Early-Stage Startup",
content: "What stood out was their ability to simplify complex processes. The software feels thoughtfully built, easy to scale, and has helped us streamline operations across teams",
avatar: "https://i.pravatar.cc/150?u=rohan",
,
    rating: 5
  },
  {
    name: "Ename: "Vikram Iyer",
role: "Engineering Head, Confidential Client",
content: "The solution delivered has brought clarity and consistency to our operations. It has reduced manual effort and improved coordination across teams.",
avatar: "https://i.pravatar.cc/150?u=vikram",
,
    rating: 5
  },
  {
    name: "name: "Ankit Sharma",
role: "Operations Lead, Private Organization",
content: "A well-executed solution that improved our workflows and made scaling much easier. Reliable, clean, and thoughtfully built.",
avatar: "https://i.pravatar.cc/150?u=ankit",

  },
  {
    name: "name: "Neha Verma",
role: "Product Manager, Confidential Client",
content: "The collaboration was effortless from start to finish. They were responsive, detail-oriented, and delivered a solution that genuinely supports our operational goals.",
avatar: "https://i.pravatar.cc/150?u=neha",

  },
  {
    name: "name: "Siddharth Rao",
role: "Founder, Independent Venture",
content: "They delivered exactly what was promised, without unnecessary complexity. The solution feels dependable and ready to grow with our business.",,
avatar: "https://i.pravatar.cc/150?u=siddharth",

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
            We don't just build products; we build partnerships. Join hundreds of satisfied founders who scaled their vision with Karao.
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
