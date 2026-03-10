import React, { useState } from 'react';
import kairoSecLogo from '../assets/KairoSecuritybluelogonew.png';
import kairoCleanLogo from '../assets/image1_(3).png';

export const TwoBoxesLanding: React.FC = () => {
  const [hoveredPanel, setHoveredPanel] = useState<'kairosec' | 'kairoclean' | null>(null);

  return (
    <section className="w-full h-screen bg-black relative overflow-hidden flex flex-col">
      {/* KairoSec - Top Panel */}
      <a
        href="/kairosec"
        onMouseEnter={() => setHoveredPanel('kairosec')}
        onMouseLeave={() => setHoveredPanel(null)}
        className="h-1/2 w-full relative group cursor-pointer overflow-hidden flex items-center justify-center"
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            backgroundPosition: 'center',
            filter: `blur(12px) brightness(${hoveredPanel === 'kairosec' ? 0.8 : 0.5}) contrast(1.3) hue-rotate(10deg) saturate(1.1)`,
            transform: `scale(${hoveredPanel === 'kairosec' ? 1.05 : 1})`,
          }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/60 via-blue-900/40 to-black/60 mix-blend-multiply"></div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 md:px-10">
          <div
            className="backdrop-blur-2xl bg-white/14 border border-white/30 rounded-3xl p-8 md:p-12 shadow-2xl transition-all duration-500 max-w-lg w-full"
            style={{
              boxShadow: hoveredPanel === 'kairosec'
                ? '0 0 80px rgba(59, 130, 246, 0.5), inset 0 0 80px rgba(59, 130, 246, 0.15)'
                : '0 20px 60px rgba(0, 0, 0, 0.9), inset 0 0 40px rgba(255, 255, 255, 0.08)',
            }}
          >
            <div
              className={`relative mb-6 flex justify-center transition-all duration-500 ${
                hoveredPanel === 'kairosec' ? 'scale-125' : 'scale-100'
              }`}
            >
              <div
                className={`absolute inset-0 rounded-full transition-all duration-500 ${
                  hoveredPanel === 'kairosec' ? 'blur-3xl opacity-80' : 'blur-2xl opacity-25'
                }`}
                style={{ backgroundColor: '#3B82F6' }}
              ></div>

              <img
                src={kairoSecLogo}
                alt="KairoSec"
                className="h-32 w-auto relative z-10 transition-all duration-500"
                style={{
                  filter: 'drop-shadow(0 0 15px rgba(59, 130, 246, 0.5))',
                }}
              />
            </div>

            <h2
              className="text-sm md:text-base font-bold mb-4 text-blue-100 tracking-wider"
              style={{ letterSpacing: '0.15em' }}
            >
              WHERE VIGILANCE<br />MEETS BRILLIANCE
            </h2>

            <h1 className="text-3xl md:text-4xl font-black tracking-tight">
              <span className="text-white">Kairo</span>
              <span
                className="text-blue-400 transition-colors duration-500"
                style={{
                  textShadow: hoveredPanel === 'kairosec'
                    ? '0 0 50px rgba(59, 130, 246, 1)'
                    : '0 0 25px rgba(59, 130, 246, 0.7)',
                }}
              >
                Sec
              </span>
            </h1>
          </div>
        </div>
      </a>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      {/* KairoClean - Bottom Panel */}
      <a
        href="/kairoclean"
        onMouseEnter={() => setHoveredPanel('kairoclean')}
        onMouseLeave={() => setHoveredPanel(null)}
        className="h-1/2 w-full relative group cursor-pointer overflow-hidden flex items-center justify-center"
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/6267613/pexels-photo-6267613.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            backgroundPosition: 'center',
            filter: `blur(12px) brightness(${hoveredPanel === 'kairoclean' ? 0.8 : 0.5}) contrast(1.3) hue-rotate(340deg) saturate(1.2)`,
            transform: `scale(${hoveredPanel === 'kairoclean' ? 1.05 : 1})`,
          }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-t from-pink-950/60 via-pink-900/40 to-black/60 mix-blend-multiply"></div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 md:px-10">
          <div
            className="backdrop-blur-2xl bg-white/14 border border-white/30 rounded-3xl p-8 md:p-12 shadow-2xl transition-all duration-500 max-w-lg w-full"
            style={{
              boxShadow: hoveredPanel === 'kairoclean'
                ? '0 0 80px rgba(207, 102, 196, 0.5), inset 0 0 80px rgba(207, 102, 196, 0.15)'
                : '0 20px 60px rgba(0, 0, 0, 0.9), inset 0 0 40px rgba(255, 255, 255, 0.08)',
            }}
          >
            <div
              className={`relative mb-6 flex justify-center transition-all duration-500 ${
                hoveredPanel === 'kairoclean' ? 'scale-125' : 'scale-100'
              }`}
            >
              <div
                className={`absolute inset-0 rounded-full transition-all duration-500 ${
                  hoveredPanel === 'kairoclean' ? 'blur-3xl opacity-80' : 'blur-2xl opacity-25'
                }`}
                style={{ backgroundColor: '#CF66C4' }}
              ></div>

              <img
                src={kairoCleanLogo}
                alt="KairoClean"
                className="h-32 w-auto relative z-10 transition-all duration-500"
                style={{
                  filter: 'drop-shadow(0 0 15px rgba(207, 102, 196, 0.6))',
                }}
              />
            </div>

            <h2
              className="text-sm md:text-base font-bold mb-4 text-pink-100 tracking-wider"
              style={{ letterSpacing: '0.15em' }}
            >
              WHERE PRECISION<br />MEETS PERFECTION
            </h2>

            <h1 className="text-3xl md:text-4xl font-black tracking-tight">
              <span className="text-white">Kairo</span>
              <span
                className="transition-colors duration-500"
                style={{
                  color: '#CF66C4',
                  textShadow: hoveredPanel === 'kairoclean'
                    ? '0 0 50px rgba(207, 102, 196, 1)'
                    : '0 0 25px rgba(207, 102, 196, 0.7)',
                }}
              >
                Clean
              </span>
            </h1>
          </div>
        </div>
      </a>
    </section>
  );
};
