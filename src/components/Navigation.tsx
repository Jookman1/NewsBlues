import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Keiro Clean', href: '/keiro-clean' },
    { label: 'Book Now', href: '#book-form' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#0a0a0a] border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between py-4 h-20">
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs lg:text-sm font-black uppercase tracking-widest text-white transition-colors duration-200 hover:text-[#E1147B]"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button and Logo */}
          <div className="md:hidden flex items-center justify-between w-full">
            <a href="#hero" className="font-black text-xl tracking-widest text-white hover:text-[#E1147B] transition-colors">
              KairoClean
            </a>
            <button
              className="p-2 text-white hover:text-[#E1147B] transition-colors z-50"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              type="button"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-[#0a0a0a] border-t border-white/10 pb-6 px-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-3 text-sm font-black uppercase tracking-widest text-white transition-colors hover:text-[#E1147B]"
                onClick={handleNavClick}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
