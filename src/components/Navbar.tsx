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
    <nav className="bg-black text-white sticky top-0 w-full z-50 border-b border-gray-800">
      <div className="max-w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
            <Logo size="sm" />
            <span className="text-sm sm:text-lg font-bold">KAIROSEC</span>
          </Link>

          <div className="hidden md:flex space-x-8">
            {navLinks.map(({ to, label }) => (
              <Link key={to} to={to} className="hover:text-blue-400 transition-colors duration-300">
                {label}
              </Link>
            ))}
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} className="text-blue-400" /> : <Menu size={28} className="text-white" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-black border-t border-gray-700 animate-fade-in-up">
            <div className="flex flex-col space-y-1 px-4 py-4 pb-6">
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300 text-base font-medium"
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