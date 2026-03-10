import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { smoothScrollToId } from '../utils/smoothScroll';
import Logo from './Logo';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

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

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-md border-b border-gray-700 shadow-lg shadow-black/20'
          : 'bg-black/90 backdrop-blur-sm border-b border-gray-800'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-28 gap-4">
            <div
              className="flex items-center space-x-4 cursor-pointer group flex-shrink-0"
              onClick={handleLogoClick}
            >
              <Logo brand="kairosec" size="sm" className="transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
              <span className="text-2xl font-bold text-white tracking-wider group-hover:text-blue-100 transition-all duration-300 hidden sm:inline bg-gradient-to-r from-white to-blue-100 bg-clip-text">
                KAIROSEC
              </span>
            </div>

            <nav className="hidden md:flex items-center space-x-8 flex-1 justify-center">
              {[
                { id: 'services', label: 'Home' },
                { id: 'about', label: 'About Us' },
                { id: 'contact', label: 'Services' },
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

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors duration-300 flex-shrink-0"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} className="text-blue-400" /> : <Menu size={28} className="text-white" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-700 animate-fade-in-up">
              <div className="flex flex-col space-y-1 px-0 py-4 pb-6">
                {[
                  { id: 'services', label: 'Home' },
                  { id: 'about', label: 'About Us' },
                  { id: 'contact', label: 'Services' },
                  { id: 'join', label: 'Join the Team' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      handleNavClick(item.id);
                      setIsMenuOpen(false);
                    }}
                    className="px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300 text-base font-medium text-left text-gray-300 hover:text-blue-400"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};
