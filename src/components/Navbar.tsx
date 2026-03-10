import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { FEATURES } from '../config/features';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/services', label: 'Services' },
    ...(FEATURES.COURSES_ENABLED ? [{ to: '/courses', label: 'Courses' }] : []),
    { to: '/join', label: 'Join the Team' }
  ];

  return (
    <nav className="bg-black/95 text-white fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <Logo size="sm" />
            <span className="text-xl font-bold">KAIRO SECURITY</span>
          </Link>

          <div className="hidden md:flex space-x-8">
            {navLinks.map(({ to, label }) => (
              <Link key={to} to={to} className="hover:text-primary transition-colors">
                {label}
              </Link>
            ))}
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-black/95 border-t border-gray-700">
            <div className="flex flex-col space-y-4 px-4 py-6">
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-primary transition-colors text-lg"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}