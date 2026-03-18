import React from 'react';
import { ArrowRight, Zap, Code2, Bot, Layers } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const services = [
  {
    id: '01',
    icon: <Zap className="w-6 h-6" />,
    iconColor: '#00BFCB',
    accentColor: 'rgba(0,191,203,0.12)',
    borderColor: 'rgba(0,191,203,0.25)',
    glowColor: 'rgba(0,191,203,0.15)',
    title: 'MVP Development',
    subtitle: 'Functional in 7 Days',
    description:
      'We build lean, market-ready Minimum Viable Products that validate your idea before full-scale investment. Focused on core functionality, speed, and clarity — so you can test, iterate, and grow without waste.',
    points: ['Rapid prototyping', 'Market validation', 'Scalable foundation', 'Agile iteration model'],
    cta: 'Start Your MVP',
    large: true,
  },
  {
    id: '02',
    icon: <Layers className="w-6 h-6" />,
    iconColor: '#C4A028',
    accentColor: 'rgba(196,160,40,0.12)',
    borderColor: 'rgba(196,160,40,0.25)',
    glowColor: 'rgba(196,160,40,0.15)',
    title: 'Low-Code & No-Code Solutions',
    subtitle: '',
    description:
      'High-performance web applications built using modern low-code platforms like Framer, Webflow, and scalable backend integrations. Faster development cycles without compromising performance or flexibility.',
    points: ['Faster launch timelines', 'Cost-efficient development', 'Clean and scalable architecture', 'Easy management post-launch'],
    cta: 'Explore Solutions',
    large: false,
  },
  {
    id: '03',
    icon: <Code2 className="w-6 h-6" />,
    iconColor: '#00BFCB',
    accentColor: 'rgba(0,191,203,0.12)',
    borderColor: 'rgba(0,191,203,0.25)',
    glowColor: 'rgba(0,191,203,0.15)',
    title: 'Custom Software Built for Your Business',
    subtitle: '',
    description:
      'When your business needs something beyond templates, we engineer tailored digital systems designed around your operations, workflows, and long-term goals.',
    points: ['Custom workflows', 'AI integration', 'Secure backend systems', 'Enterprise-ready scalability'],
    cta: 'Get a Custom Build',
    large: false,
  },
  {
    id: '04',
    icon: <Bot className="w-6 h-6" />,
    iconColor: '#C4A028',
    accentColor: 'rgba(196,160,40,0.12)',
    borderColor: 'rgba(196,160,40,0.25)',
    glowColor: 'rgba(196,160,40,0.15)',
    title: 'AI Automation for Smarter Operations',
    subtitle: '',
    description:
      'We integrate AI-driven automation systems that reduce manual effort, improve efficiency, and unlock new growth opportunities.',
    points: ['Workflow automation', 'CRM integrations', 'Intelligent data processing', 'Performance tracking dashboards'],
    cta: 'Automate Now',
    large: true,
  },
];

const ServiceCard: React.FC<{ service: typeof services[0]; reverse?: boolean }> = ({ service, reverse }) => (
  <div
    className="group relative rounded-[2rem] overflow-hidden flex flex-col justify-between transition-all duration-500 hover:-translate-y-1"
    style={{
      background: `radial-gradient(ellipse at ${reverse ? 'bottom right' : 'top left'}, ${service.accentColor} 0%, rgba(2,6,23,0.95) 70%)`,
      border: `1px solid ${service.borderColor}`,
      boxShadow: `0 0 60px 0 ${service.glowColor}`,
      padding: '2.5rem',
      minHeight: service.large ? '460px' : '380px',
    }}
  >

    {/* Top row: number + icon */}
    <div className="flex items-start justify-between relative z-10">
      <span
        className="text-6xl font-black tracking-tighter leading-none select-none"
        style={{ color: service.borderColor }}
      >
        {service.id}
      </span>
      <div
        className="w-12 h-12 rounded-2xl flex items-center justify-center"
        style={{
          background: service.accentColor,
          border: `1px solid ${service.borderColor}`,
        }}
      >
        <span style={{ color: service.iconColor }}>{service.icon}</span>
      </div>
    </div>

    {/* Middle: title + description */}
    <div className="relative z-10 mt-6 flex-1">
      <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-1 leading-tight">
        {service.title}
        {service.subtitle && (
          <span className="block text-lg font-semibold mt-0.5" style={{ color: service.iconColor }}>
            {service.subtitle}
          </span>
        )}
      </h3>
      <p className="text-slate-400 text-sm md:text-base leading-relaxed mt-4 max-w-md">
        {service.description}
      </p>
    </div>

    {/* Value points */}
    <div className="relative z-10 mt-6 grid grid-cols-2 gap-x-4 gap-y-2">
      {service.points.map((point, i) => (
        <div key={i} className="flex items-center gap-2">
          <span
            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{ background: service.borderColor }}
          />
          <span className="text-slate-300 text-xs font-semibold tracking-wide">{point}</span>
        </div>
      ))}
    </div>

    {/* CTA */}
    <div className="relative z-10 mt-8">
      <button
        className="flex items-center justify-center w-full sm:w-max gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 group/btn"
        style={{
          background: 'rgba(255,255,255,0.06)',
          border: `1px solid ${service.borderColor}`,
          color: '#fff',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLButtonElement).style.background = service.accentColor;
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.06)';
        }}
      >
        {service.cta}
        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
      </button>
    </div>
  </div>
);

const Services: React.FC = () => {
  const revealRef = useScrollReveal<HTMLDivElement>();
  return (
    <section id="services" ref={revealRef} className="py-28 bg-[#020617] relative overflow-hidden border-t border-white/5">
      {/* Background glows — CSS gradients, no GPU compositor layers */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 600px 400px at 25% 0%, rgba(0,191,203,0.07) 0%, transparent 70%), radial-gradient(ellipse 600px 400px at 75% 100%, rgba(196,160,40,0.07) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section header */}
        <div data-reveal className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-5 border border-white/10 bg-white/5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#C4A028' }} />
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">What We Build</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Services That <br />
              <span className="text-[#00BFCB]">Actually</span> <span className="text-[#E8C040]">Deliver</span>
            </h2>
          </div>
          <p className="text-slate-400 max-w-sm text-base leading-relaxed">
            From idea to launch — every service is designed to help you move fast, build smart, and scale with confidence.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div data-reveal><ServiceCard service={services[0]} /></div>
          <div data-reveal><ServiceCard service={services[1]} reverse /></div>
          <div data-reveal><ServiceCard service={services[2]} /></div>
          <div data-reveal><ServiceCard service={services[3]} reverse /></div>
        </div>
      </div>
    </section>
  );
};

export default Services;
