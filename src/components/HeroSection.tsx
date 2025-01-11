import React from 'react';
import Logo from './Logo';

export default function HeroSection() {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen flex items-center justify-center cyber-grid overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/70" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="mb-8 relative scanner">
          <Logo size="xl" className="mx-auto" />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 neon-text">
          KAIRO SECURITY
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-300">
          Where Vigilance Meets Brilliance
        </p>
        
        <div className="flex justify-center gap-4">
          <button 
            onClick={scrollToServices}
            className="bg-primary/90 px-8 py-3 rounded-lg font-bold hover-glow neon-border"
          >
            Our Services
          </button>
          <button 
            onClick={scrollToContact}
            className="bg-transparent px-8 py-3 rounded-lg font-bold border-2 border-primary/50 hover-glow"
          >
            Contact Us
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 text-center">
        <div className="animate-bounce">
          <span className="sr-only">Scroll down</span>
          <svg className="h-6 w-6 mx-auto text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}