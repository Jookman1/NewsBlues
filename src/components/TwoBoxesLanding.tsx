import React, { useState } from 'react';
import kairoSecLogo from '../assets/KairoSecuritybluelogonew.png';
import kairoCleanLogo from '../assets/image1_(3).png';
import bgKairoSec from '../assets/bg-kairosec-new.png';
import bgKairoClean from '../assets/bg-kairoclean-new.png';

export const TwoBoxesLanding: React.FC = () => {
  const [hoveredPanel, setHoveredPanel] = useState<'kairosec' | 'kairoclean' | null>(null);

  return (
    <section
      className="w-full bg-black overflow-hidden flex flex-col md:flex-row"
      style={{ height: '100dvh' }}
    >

      {/* ── KairoSec ── */}
      <a
        href="/kairosec"
        onMouseEnter={() => setHoveredPanel('kairosec')}
        onMouseLeave={() => setHoveredPanel(null)}
        className="flex-1 relative cursor-pointer overflow-hidden flex items-center justify-center"
      >
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{
            backgroundImage: `url(${bgKairoSec})`,
            filter: `blur(3px) brightness(${hoveredPanel === 'kairosec' ? 0.55 : 0.40}) contrast(1.1)`,
            transform: `scale(${hoveredPanel === 'kairosec' ? 1.06 : 1.03})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/45 via-blue-900/20 to-black/55" />

        {/* Card */}
        <div className="relative z-10 w-full flex justify-center px-5 md:px-10">
          <div
            className="w-full max-w-[260px] md:max-w-[400px] rounded-xl md:rounded-3xl
                        px-5 py-3 md:px-12 md:py-10
                        text-center transition-all duration-500"
            style={{
              background: 'rgba(8,12,36,0.58)',
              backdropFilter: 'blur(20px) saturate(1.4)',
              WebkitBackdropFilter: 'blur(20px) saturate(1.4)',
              border: hoveredPanel === 'kairosec'
                ? '1px solid rgba(59,130,246,0.45)'
                : '1px solid rgba(255,255,255,0.13)',
              boxShadow: hoveredPanel === 'kairosec'
                ? '0 0 60px rgba(59,130,246,0.22), 0 12px 30px rgba(0,0,0,0.75)'
                : '0 12px 30px rgba(0,0,0,0.7)',
            }}
          >
            <div className={`relative flex justify-center mb-2 transition-all duration-500 ${hoveredPanel === 'kairosec' ? 'scale-105' : 'scale-100'}`}>
              <div
                className={`absolute inset-0 rounded-full transition-all duration-500 ${hoveredPanel === 'kairosec' ? 'blur-2xl opacity-55' : 'blur-xl opacity-12'}`}
                style={{ backgroundColor: '#3B82F6' }}
              />
              <img
                src={kairoSecLogo}
                alt="KairoSec"
                className="h-10 md:h-28 lg:h-32 w-auto relative z-10"
                style={{ filter: 'drop-shadow(0 0 12px rgba(59,130,246,0.55))' }}
              />
            </div>

            <p className="text-[9px] md:text-xs font-bold text-blue-100 tracking-[0.18em] uppercase mb-1 md:mb-3">
              Where Vigilance Meets Brilliance
            </p>

            <h1 className="text-xl md:text-4xl lg:text-5xl font-black tracking-tight leading-none">
              <span className="text-white">Kairo</span>
              <span
                className="text-blue-400 transition-all duration-500"
                style={{ textShadow: hoveredPanel === 'kairosec' ? '0 0 35px rgba(59,130,246,0.9)' : '0 0 18px rgba(59,130,246,0.5)' }}
              >
                Sec
              </span>
            </h1>
          </div>
        </div>
      </a>

      {/* ── Divider ── */}
      <div className="w-full h-px md:h-full md:w-px flex-shrink-0 bg-gradient-to-r md:bg-gradient-to-b from-transparent via-white/20 to-transparent" />

      {/* ── KairoClean ── */}
      <a
        href="/kairoclean"
        onMouseEnter={() => setHoveredPanel('kairoclean')}
        onMouseLeave={() => setHoveredPanel(null)}
        className="flex-1 relative cursor-pointer overflow-hidden flex items-center justify-center"
      >
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{
            backgroundImage: `url(${bgKairoClean})`,
            filter: `blur(3px) brightness(${hoveredPanel === 'kairoclean' ? 0.55 : 0.40}) contrast(1.1) saturate(0.9)`,
            transform: `scale(${hoveredPanel === 'kairoclean' ? 1.06 : 1.03})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-pink-950/45 via-pink-900/20 to-black/55" />

        {/* Card */}
        <div className="relative z-10 w-full flex justify-center px-5 md:px-10">
          <div
            className="w-full max-w-[260px] md:max-w-[400px] rounded-xl md:rounded-3xl
                        px-5 py-3 md:px-12 md:py-10
                        text-center transition-all duration-500"
            style={{
              background: 'rgba(36,8,30,0.58)',
              backdropFilter: 'blur(20px) saturate(1.4)',
              WebkitBackdropFilter: 'blur(20px) saturate(1.4)',
              border: hoveredPanel === 'kairoclean'
                ? '1px solid rgba(207,102,196,0.45)'
                : '1px solid rgba(255,255,255,0.13)',
              boxShadow: hoveredPanel === 'kairoclean'
                ? '0 0 60px rgba(207,102,196,0.22), 0 12px 30px rgba(0,0,0,0.75)'
                : '0 12px 30px rgba(0,0,0,0.7)',
            }}
          >
            <div className={`relative flex justify-center mb-2 transition-all duration-500 ${hoveredPanel === 'kairoclean' ? 'scale-105' : 'scale-100'}`}>
              <div
                className={`absolute inset-0 rounded-full transition-all duration-500 ${hoveredPanel === 'kairoclean' ? 'blur-2xl opacity-55' : 'blur-xl opacity-12'}`}
                style={{ backgroundColor: '#CF66C4' }}
              />
              <img
                src={kairoCleanLogo}
                alt="KairoClean"
                className="h-10 md:h-28 lg:h-32 w-auto relative z-10"
                style={{ filter: 'drop-shadow(0 0 12px rgba(207,102,196,0.6))' }}
              />
            </div>

            <p className="text-[9px] md:text-xs font-bold text-pink-100 tracking-[0.18em] uppercase mb-1 md:mb-3">
              Where Precision Meets Perfection
            </p>

            <h1 className="text-xl md:text-4xl lg:text-5xl font-black tracking-tight leading-none">
              <span className="text-white">Kairo</span>
              <span
                className="transition-all duration-500"
                style={{
                  color: '#CF66C4',
                  textShadow: hoveredPanel === 'kairoclean' ? '0 0 35px rgba(207,102,196,0.9)' : '0 0 18px rgba(207,102,196,0.5)',
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
