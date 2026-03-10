import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Book Now', href: '#book-form' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-white/5 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <a href="#hero" className="font-black text-[#E1147B] text-xl tracking-widest uppercase">
            Kairo Clean
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-black uppercase tracking-widest transition-colors hover:text-[#E1147B]"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:text-[#E1147B] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 border-t border-white/5 animate-in fade-in slide-in-from-top-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-4 text-sm font-black uppercase tracking-widest transition-colors hover:text-[#E1147B]"
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
