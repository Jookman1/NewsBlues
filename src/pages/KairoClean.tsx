import React from 'react';

export const KairoClean: React.FC = () => {
  return (
    <div className="min-h-screen w-screen bg-black relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 hexagon-pattern opacity-30"></div>

      <div className="absolute inset-0 bg-gradient-to-br from-pink-900/10 via-transparent to-pink-900/10"></div>

      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="text-white">Kairo</span>
          <span className="text-pink-400" style={{ textShadow: '0 0 30px rgba(236, 72, 153, 0.9)' }}>Clean</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl">Coming soon...</p>
      </div>
    </div>
  );
};
