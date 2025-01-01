import React from 'react';
import { Facebook, Instagram, Linkedin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black/95 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">KAIRO SECURITY LTD</h3>
            <p className="text-gray-400">Where Vigilance Meets Brilliance</p>
            <div className="flex items-center mt-4 space-x-2">
              <Phone className="h-5 w-5" />
              <span>07939119680</span>
            </div>
            <p className="mt-2">Company No. 13428156</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-primary">Home</a></li>
              <li><a href="/about" className="hover:text-primary">About Us</a></li>
              <li><a href="/services" className="hover:text-primary">Services</a></li>
              <li><a href="/courses" className="hover:text-primary">Courses</a></li>
              <li><a href="/join" className="hover:text-primary">Join the Team</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary"><Facebook className="h-6 w-6" /></a>
              <a href="#" className="hover:text-primary"><Instagram className="h-6 w-6" /></a>
              <a href="#" className="hover:text-primary"><Linkedin className="h-6 w-6" /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Kairo Security Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}