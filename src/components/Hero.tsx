import React from 'react';
import { ArrowDown } from 'lucide-react';
import { smoothScrollToId } from '../utils/smoothScroll';
import { useParallax } from '../hooks/useScrollAnimations';

export const Hero: React.FC = () => {
  const parallaxRef = useParallax(0.3);

  const scrollToServices = () => {
    smoothScrollToId('services');
  };

  const scrollToContact = () => {
    smoothScrollToId('contact');
  };

  const scrollToNext = () => {
    smoothScrollToId('about');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Background Pattern */}
      <div 
        ref={parallaxRef}
        className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%234DA6FF%22%20fill-opacity=%220.03%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"
      ></div>
      
      {/* Team Image Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/image%20copy%20copy%20copy.png)',
            filter: 'blur(2px) brightness(0.45) contrast(1.2) saturate(0.8)',
          }}
        ></div>
        {/* Lighter overlay gradients for better image visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/15 via-transparent to-blue-900/15"></div>
        {/* Lighter center focus overlay */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/20 to-black/40"></div>
      </div>
      
      <div className="relative text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto z-10">
        <div className="animate-fade-in-up">
          {/* Main Logo - Made Much Bigger */}
          <div className="mb-8 flex justify-center">
            <img 
              src="/rfowler%20logos.png" 
              alt="Kairo Security Logo" 
              className="h-48 w-48 md:h-64 md:w-64 lg:h-80 lg:w-80 xl:h-96 xl:w-96 drop-shadow-2xl hover:scale-105 transition-transform duration-500 filter brightness-110"
            />
          </div>
        </div>
        
        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-2xl md:text-3xl lg:text-4xl text-gray-200 mb-6 font-light tracking-wide drop-shadow-lg max-w-4xl mx-auto leading-relaxed">
            Where Vigilance Meets Brilliance
          </p>
          <p className="text-lg md:text-xl text-gray-300 mb-12 font-light tracking-wide drop-shadow-lg max-w-3xl mx-auto leading-relaxed">
            Expert security services for events, venues, and businesses across the UK. 
            <br className="hidden md:block" />
            Professional, reliable, and tailored to your needs.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <button 
            onClick={scrollToServices}
            className="group bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30 active:scale-95 backdrop-blur-sm"
          >
            Explore Our Services
            <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-2">→</span>
          </button>
          
          <button 
            onClick={scrollToContact}
            className="group border-2 border-blue-400 hover:border-blue-300 text-blue-400 hover:text-blue-300 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-500 transform hover:scale-105 hover:bg-blue-400/10 hover:shadow-xl hover:shadow-blue-400/20 active:scale-95 backdrop-blur-sm"
          >
            Get Quote
            <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-2">→</span>
          </button>
        </div>
      </div>
      
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:animate-none transition-all duration-300 hover:scale-110 hover:text-blue-300 cursor-pointer group z-10"
      >
        <ArrowDown className="h-6 w-6 text-blue-400 group-hover:text-blue-300 transition-colors duration-300 drop-shadow-lg" />
      </button>
    </section>
  );
};