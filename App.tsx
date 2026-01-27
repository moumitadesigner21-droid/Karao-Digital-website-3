
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-cyan-500/30">
      <Navbar />
      <main>
        <Hero />
        <BentoGrid />
        <Services />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default App;
