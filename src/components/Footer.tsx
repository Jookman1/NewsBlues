import React from 'react';
import { Facebook, Instagram, MessageCircle } from 'lucide-react';
import { smoothScrollToId } from '../utils/smoothScroll';

export const Footer: React.FC = () => {
  const handleContactClick = () => {
    smoothScrollToId('contact');
  };

  const handleNavClick = (sectionId: string) => {
    smoothScrollToId(sectionId);
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/rfowler%20logos.png" 
                alt="Kairo Security Logo" 
                className="h-12 w-12"
              />
              <span className="text-xl font-bold text-white tracking-wide">
                KAIRO SECURITY LTD
              </span>
            </div>
            <p className="text-gray-400 mb-4 text-lg">
              Where Vigilance Meets Brilliance
            </p>
            <p className="text-gray-400">
              Phone: <span className="text-white">020 3883 1389</span>
            </p>
            <p className="text-gray-400">
              Company No: <span className="text-white">13428156</span>
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <div className="space-y-3">
              <button 
                onClick={() => handleNavClick('home')}
                className="block text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavClick('about')}
                className="block text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                About Us
              </button>
              <button 
                onClick={() => handleNavClick('services')}
                className="block text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                Services
              </button>
              <button 
                onClick={() => handleNavClick('join')}
                className="block text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                Join the Team
              </button>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Get In Touch</h3>
            <p className="text-gray-400 mb-4">
              Ready to secure your business? Contact us today for a free consultation.
            </p>
            <div className="flex flex-col space-y-4">
              <button 
                onClick={handleContactClick}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </button>
              
              {/* Social Media Section */}
              <div className="pt-4 border-t border-gray-700">
                <h4 className="text-white font-semibold text-sm mb-3">Follow Us</h4>
                <div className="flex flex-col space-y-3">
                  <a
                    href="https://www.facebook.com/Kairosec.ne"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-all duration-300"
                  >
                    <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-blue-500/10 group-hover:border-blue-500/30 border border-gray-700 transition-all duration-300">
                      <Facebook className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <span className="font-medium group-hover:translate-x-1 transition-transform duration-300">
                      Facebook
                    </span>
                  </a>
                  
                  <a
                    href="https://www.instagram.com/kairosecurity/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center space-x-2 text-gray-400 hover:text-pink-400 transition-all duration-300"
                  >
                    <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-pink-500/10 group-hover:border-pink-500/30 border border-gray-700 transition-all duration-300">
                      <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <span className="font-medium group-hover:translate-x-1 transition-transform duration-300">
                      Instagram
                    </span>
                  </a>
                  
                  <a
                    href="https://wa.me/message/BNFMV2FTWBKAI1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-all duration-300"
                  >
                    <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-green-500/10 group-hover:border-green-500/30 border border-gray-700 transition-all duration-300">
                      <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <span className="font-medium group-hover:translate-x-1 transition-transform duration-300">
                      WhatsApp
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Kairo Security Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};