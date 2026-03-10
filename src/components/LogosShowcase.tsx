import React from 'react';
import Logo from './Logo';

export const LogosShowcase: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-b from-black via-gray-950 to-black py-24 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Brands</h2>
          <p className="text-gray-400 text-lg">Excellence in Security and Cleanliness</p>
        </div>

        <div className="flex justify-center">
          <div className="group flex flex-col items-center justify-center p-12 rounded-2xl bg-gradient-to-br from-pink-950/20 to-transparent border border-pink-900/30 hover:border-pink-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-900/20 max-w-sm">
            <div className="mb-8 transform group-hover:scale-110 transition-transform duration-500">
              <Logo brand="kairoclean" size="xl" />
            </div>
            <h3 className="text-white text-2xl font-bold mb-3 tracking-wide">KAIROCLEAN</h3>
            <p className="text-gray-400 text-center text-base leading-relaxed">
              Professional Cleaning Services
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
