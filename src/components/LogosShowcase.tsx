import React from 'react';
import Logo from './Logo';

export const LogosShowcase: React.FC = () => {
  return (
    <div className="w-full bg-black py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-3xl font-bold text-white mb-16">Our Brands</h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-16">
          <div className="flex flex-col items-center">
            <Logo brand="kairosec" size="lg" />
            <h3 className="text-white text-xl font-semibold mt-6">Kairosec</h3>
            <p className="text-gray-400 text-sm mt-2">Security Solutions</p>
          </div>

          <div className="flex flex-col items-center">
            <Logo brand="kairoclean" size="lg" />
            <h3 className="text-white text-xl font-semibold mt-6">Kairoclean</h3>
            <p className="text-gray-400 text-sm mt-2">Cleaning Services</p>
          </div>
        </div>
      </div>
    </div>
  );
};
