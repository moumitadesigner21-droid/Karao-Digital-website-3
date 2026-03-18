import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CustomCursor from './components/CustomCursor';
import InteractiveBackground from './components/InteractiveBackground';

// Below-fold sections — lazy-loaded so they don't inflate the initial bundle
const BentoGrid = React.lazy(() => import('./components/BentoGrid'));
const Services = React.lazy(() => import('./components/Services'));
const Process = React.lazy(() => import('./components/Process'));

const CaseStudies = React.lazy(() => import('./components/CaseStudies'));
const Testimonials = React.lazy(() => import('./components/Testimonials'));
const Footer = React.lazy(() => import('./components/Footer'));

// Tells the browser to skip layout/paint for off-screen sections.
// containIntrinsicSize is an estimated height so the scrollbar stays stable.
const LazySection: React.FC<{ children: React.ReactNode; height?: string }> = ({
  children,
  height = '800px',
}) => (
  <div style={{ contentVisibility: 'auto', containIntrinsicSize: `0 ${height}` }}>
    <Suspense fallback={null}>{children}</Suspense>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent text-slate-50 selection:bg-cyan-500/30 selection:text-white relative">
      <CustomCursor />
      <InteractiveBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <LazySection height="700px"><BentoGrid /></LazySection>
        <div id="services-anchor" />
        <LazySection height="1000px"><Services /></LazySection>
        <LazySection height="900px"><Process /></LazySection>
        <div id="case-studies-anchor" />
        <LazySection height="4500px"><CaseStudies /></LazySection>
        <LazySection height="900px"><Testimonials /></LazySection>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
