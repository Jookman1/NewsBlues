import React from 'react';
import { Lock, Sparkles } from 'lucide-react';

export const TwoBoxesLanding: React.FC = () => {
  return (
    <section className="h-screen w-screen bg-black relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 hexagon-pattern opacity-30"></div>

      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-pink-900/10"></div>

      <div className="relative z-10 w-full h-full flex items-center justify-center px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 w-full max-w-7xl h-full lg:h-auto lg:py-0 py-8">
          <a
            href="/"
            className="relative group cursor-pointer h-full lg:h-auto lg:min-h-[600px] flex flex-col items-stretch justify-stretch"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500 blur"></div>

            <div className="relative bg-black border-2 border-blue-500/50 rounded-lg p-8 md:p-12 lg:p-16 flex flex-col items-center justify-center text-center hover:border-blue-400 transition-all duration-500 h-full">
              <div className="absolute top-6 lg:top-8 left-1/2 transform -translate-x-1/2 text-white text-xs lg:text-sm font-bold tracking-widest hidden lg:block">
                PC LAYOUT
              </div>

              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 lg:mb-12 text-blue-400 tracking-wide" style={{ textShadow: '0 0 20px rgba(59, 130, 246, 0.8)' }}>
                WHERE VIGILANCE<br />MEETS BRILLIANCE
              </h2>

              <div className="relative mb-6 lg:mb-12 group-hover:scale-110 transition-transform duration-500 flex-shrink-0">
                <div className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-50"></div>
                <div className="relative diamond-icon blue-glow">
                  <Lock className="h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 text-blue-400" strokeWidth={1.5} />
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                <span className="text-white">Kairo</span>
                <span className="text-blue-400" style={{ textShadow: '0 0 30px rgba(59, 130, 246, 0.9)' }}>Sec</span>
              </h1>
            </div>
          </a>

          <a
            href="/kairoclean"
            className="relative group cursor-pointer h-full lg:h-auto lg:min-h-[600px] flex flex-col items-stretch justify-stretch"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500 blur"></div>

            <div className="relative bg-black border-2 border-pink-500/50 rounded-lg p-8 md:p-12 lg:p-16 flex flex-col items-center justify-center text-center hover:border-pink-400 transition-all duration-500 h-full">
              <div className="absolute top-6 lg:top-8 left-1/2 transform -translate-x-1/2 text-white text-xs lg:text-sm font-bold tracking-widest hidden lg:block">
                PC LAYOUT
              </div>

              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 lg:mb-12 text-pink-400 tracking-wide" style={{ textShadow: '0 0 20px rgba(236, 72, 153, 0.8)' }}>
                WHERE PRECISION<br />MEETS PERFECTION
              </h2>

              <div className="relative mb-6 lg:mb-12 group-hover:scale-110 transition-transform duration-500 flex-shrink-0">
                <div className="absolute inset-0 bg-pink-500 rounded-full blur-3xl opacity-50"></div>
                <div className="relative diamond-icon pink-glow">
                  <Sparkles className="h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 text-pink-400" strokeWidth={1.5} />
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                <span className="text-white">Kairo</span>
                <span className="text-pink-400" style={{ textShadow: '0 0 30px rgba(236, 72, 153, 0.9)' }}>Clean</span>
              </h1>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
