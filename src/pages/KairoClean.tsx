import React from 'react';
import Logo from '../components/Logo';

export const KairoClean: React.FC = () => {
  return (
    <div className="min-h-screen w-screen bg-black relative overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute inset-0 hexagon-pattern opacity-30"></div>

      <div className="absolute inset-0 bg-gradient-to-br from-pink-900/10 via-transparent to-pink-900/10"></div>

      <div className="relative z-10 text-center">
        <div className="mb-12 flex justify-center animate-fade-in">
          <Logo brand="kairoclean" size="xl" className="drop-shadow-[0_0_30px_rgba(236,72,153,0.6)]" />
        </div>

        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight">
          <span className="text-white">KAIRO</span>
          <span className="text-pink-400" style={{ textShadow: '0 0 40px rgba(236, 72, 153, 0.9), 0 0 80px rgba(236, 72, 153, 0.5)' }}>CLEAN</span>
        </h1>
        <p className="text-gray-300 text-xl md:text-2xl font-light tracking-wide">Coming soon...</p>
      </div>
    </div>
  );
};
