import React, { useState, useEffect } from 'react';
import { smoothScrollToId } from '../utils/smoothScroll';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    smoothScrollToId(sectionId);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-md border-b border-gray-700 shadow-lg shadow-black/20' 
          : 'bg-black/90 backdrop-blur-sm border-b border-gray-800'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            <div 
              className="flex items-center space-x-5 cursor-pointer group"
              onClick={() => handleNavClick('home')}
            >
              <img 
                src="/rfowler%20logos.png" 
                alt="Kairo Security Logo" 
                className={`h-20 w-20 transition-all duration-300 ${
                  isScrolled ? 'group-hover:scale-110' : ''
                }`}
              />
              <span className="text-xl font-bold text-white tracking-wide group-hover:text-blue-100 transition-colors duration-300">
                KAIRO SECURITY
              </span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About Us' },
                { id: 'services', label: 'Services' },
                { id: 'join', label: 'Join the Team' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="relative text-gray-300 hover:text-blue-400 transition-all duration-300 font-medium group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};