import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Navbar() {
  return (
    <nav className="bg-black/95 text-white fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <Logo size="sm" />
            <span className="text-xl font-bold">KAIRO SECURITY</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <Link to="/about" className="hover:text-primary transition-colors">About Us</Link>
            <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
            <Link to="/courses" className="hover:text-primary transition-colors">Courses</Link>
            <Link to="/join" className="hover:text-primary transition-colors">Join the Team</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}