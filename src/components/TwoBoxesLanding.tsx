import React from 'react';
import { Lock, Sparkles } from 'lucide-react';

export const TwoBoxesLanding: React.FC = () => {
  return (
    <section className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center py-20">
      <div className="absolute inset-0 hexagon-pattern opacity-30"></div>

      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-pink-900/10"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 mb-16">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500 blur"></div>

            <div className="relative bg-black border-2 border-blue-500/50 rounded-lg p-12 lg:p-16 min-h-[500px] flex flex-col items-center justify-center text-center hover:border-blue-400 transition-all duration-500">
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-white text-sm font-bold tracking-widest hidden lg:block">
                PC LAYOUT
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-12 text-blue-400 tracking-wide" style={{ textShadow: '0 0 20px rgba(59, 130, 246, 0.8)' }}>
                WHERE VIGILANCE<br />MEETS BRILLIANCE
              </h2>

              <div className="relative mb-12 group-hover:scale-110 transition-transform duration-500">
                <div className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-50"></div>
                <div className="relative diamond-icon blue-glow">
                  <Lock className="h-32 w-32 md:h-40 md:w-40 text-blue-400" strokeWidth={1.5} />
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="text-white">Kairo</span>
                <span className="text-blue-400" style={{ textShadow: '0 0 30px rgba(59, 130, 246, 0.9)' }}>Sec</span>
              </h1>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500 blur"></div>

            <div className="relative bg-black border-2 border-pink-500/50 rounded-lg p-12 lg:p-16 min-h-[500px] flex flex-col items-center justify-center text-center hover:border-pink-400 transition-all duration-500">
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-white text-sm font-bold tracking-widest hidden lg:block">
                PC LAYOUT
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-12 text-pink-400 tracking-wide" style={{ textShadow: '0 0 20px rgba(236, 72, 153, 0.8)' }}>
                WHERE PRECISION<br />MEETS PERFECTION
              </h2>

              <div className="relative mb-12 group-hover:scale-110 transition-transform duration-500">
                <div className="absolute inset-0 bg-pink-500 rounded-full blur-3xl opacity-50"></div>
                <div className="relative diamond-icon pink-glow">
                  <Sparkles className="h-32 w-32 md:h-40 md:w-40 text-pink-400" strokeWidth={1.5} />
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="text-white">Kairo</span>
                <span className="text-pink-400" style={{ textShadow: '0 0 30px rgba(236, 72, 153, 0.9)' }}>Clean</span>
              </h1>
            </div>
          </div>
        </div>

        <div className="relative mt-20 lg:mt-32">
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -rotate-90 origin-center">
            <p className="text-white text-xl md:text-2xl font-bold tracking-widest whitespace-nowrap">
              MOBILE LAYOUT <span className="text-gray-500">(Stacked)</span>
            </p>
          </div>

          <div className="ml-16 md:ml-24 flex flex-col items-center space-y-8 max-w-md mx-auto">
            <div className="relative group w-full">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg opacity-50 blur"></div>

              <div className="relative bg-black border-2 border-blue-500/50 rounded-lg p-8 flex flex-col items-center justify-center text-center">
                <h3 className="text-lg font-bold mb-6 text-blue-400 tracking-wide" style={{ textShadow: '0 0 15px rgba(59, 130, 246, 0.8)' }}>
                  WHERE VIGILANCE<br />MEETS BRILLIANCE
                </h3>

                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-blue-500 rounded-full blur-2xl opacity-40"></div>
                  <Lock className="relative h-20 w-20 text-blue-400" strokeWidth={1.5} />
                </div>

                <h2 className="text-3xl font-bold">
                  <span className="text-white">Kairo</span>
                  <span className="text-blue-400" style={{ textShadow: '0 0 20px rgba(59, 130, 246, 0.9)' }}>Sec</span>
                </h2>
              </div>
            </div>

            <div className="relative group w-full">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg opacity-50 blur"></div>

              <div className="relative bg-black border-2 border-pink-500/50 rounded-lg p-8 flex flex-col items-center justify-center text-center">
                <h3 className="text-lg font-bold mb-6 text-pink-400 tracking-wide" style={{ textShadow: '0 0 15px rgba(236, 72, 153, 0.8)' }}>
                  WHERE PRECISION<br />MEETS PERFECTION
                </h3>

                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-pink-500 rounded-full blur-2xl opacity-40"></div>
                  <Sparkles className="relative h-20 w-20 text-pink-400" strokeWidth={1.5} />
                </div>

                <h2 className="text-3xl font-bold">
                  <span className="text-white">Kairo</span>
                  <span className="text-pink-400" style={{ textShadow: '0 0 20px rgba(236, 72, 153, 0.9)' }}>Clean</span>
                </h2>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-2 mt-6">
              <svg className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <rect x="5" y="4" width="14" height="17" rx="2" strokeWidth="2"/>
              </svg>
              <svg className="h-10 w-10 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <rect x="4" y="2" width="16" height="20" rx="2" strokeWidth="2"/>
              </svg>
            </div>
          </div>

          <svg className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-32 hidden lg:block" width="400" height="200" viewBox="0 0 400 200">
            <path d="M 100 0 Q 150 50 200 100" stroke="white" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" opacity="0.6"/>
            <path d="M 300 0 Q 250 50 200 100" stroke="white" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" opacity="0.6"/>
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
                <polygon points="0 0, 10 5, 0 10" fill="white" opacity="0.6" />
              </marker>
            </defs>
          </svg>
        </div>

        <div className="text-center mt-16 text-gray-500 text-sm tracking-widest">
          KAIRO SECURITY LTD
        </div>
      </div>
    </section>
  );
};
