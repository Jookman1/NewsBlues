import React, { useState } from 'react';
import kairoSecLogo from '../assets/KairoSecuritybluelogonew.png';
import kairoCleanLogo from '../assets/image1_(3).png';

export const TwoBoxesLanding: React.FC = () => {
  const [hoveredPanel, setHoveredPanel] = useState<'kairosec' | 'kairoclean' | null>(null);

  return (
    <section className="w-full h-screen bg-black relative overflow-hidden flex flex-col md:flex-row">

      {/* ── KairoSec ── */}
      <a
        href="/kairosec"
        onMouseEnter={() => setHoveredPanel('kairosec')}
        onMouseLeave={() => setHoveredPanel(null)}
        className="h-1/2 md:h-full md:w-1/2 w-full relative cursor-pointer overflow-hidden flex items-center justify-center"
      >
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            filter: `blur(14px) brightness(${hoveredPanel === 'kairosec' ? 0.75 : 0.45}) contrast(1.3) hue-rotate(10deg) saturate(1.1)`,
            transform: `scale(${hoveredPanel === 'kairosec' ? 1.06 : 1.02})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/50 via-blue-900/30 to-black/70" />

        {/* Card */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full max-w-xs mx-auto">
          <div
            className="w-full rounded-2xl px-6 py-5 md:px-10 md:py-9 transition-all duration-500"
            style={{
              background: 'rgba(255,255,255,0.055)',
              backdropFilter: 'blur(24px) saturate(1.4)',
              WebkitBackdropFilter: 'blur(24px) saturate(1.4)',
              border: hoveredPanel === 'kairosec'
                ? '1px solid rgba(59,130,246,0.35)'
                : '1px solid rgba(255,255,255,0.10)',
              boxShadow: hoveredPanel === 'kairosec'
                ? '0 0 60px rgba(59,130,246,0.25), 0 20px 50px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.08)'
                : '0 20px 50px rgba(0,0,0,0.75), inset 0 1px 0 rgba(255,255,255,0.05)',
            }}
          >
            {/* Logo — untouched */}
            <div className={`relative flex justify-center mb-4 transition-all duration-500 ${hoveredPanel === 'kairosec' ? 'scale-110' : 'scale-100'}`}>
              <div
                className={`absolute inset-0 rounded-full transition-all duration-500 ${hoveredPanel === 'kairosec' ? 'blur-3xl opacity-70' : 'blur-2xl opacity-20'}`}
                style={{ backgroundColor: '#3B82F6' }}
              />
              <img
                src={kairoSecLogo}
                alt="KairoSec"
                className="h-24 md:h-32 w-auto relative z-10 transition-all duration-500"
                style={{ filter: 'drop-shadow(0 0 15px rgba(59, 130, 246, 0.5))' }}
              />
            </div>

            <h2
              className="text-xs md:text-sm font-bold mb-2 text-blue-100 tracking-widest"
              style={{ letterSpacing: '0.18em' }}
            >
              WHERE VIGILANCE<br />MEETS BRILLIANCE
            </h2>

            <h1 className="text-2xl md:text-4xl font-black tracking-tight leading-none">
              <span className="text-white">Kairo</span>
              <span
                className="text-blue-400 transition-colors duration-500"
                style={{
                  textShadow: hoveredPanel === 'kairosec'
                    ? '0 0 40px rgba(59,130,246,1)'
                    : '0 0 20px rgba(59,130,246,0.6)',
                }}
              >
                Sec
              </span>
            </h1>
          </div>
        </div>
      </a>

      {/* ── Divider ── */}
      <div className="
        w-full h-px md:h-full md:w-px flex-shrink-0
        bg-gradient-to-r md:bg-gradient-to-b
        from-transparent via-white/15 to-transparent
      " />

      {/* ── KairoClean ── */}
      <a
        href="/kairoclean"
        onMouseEnter={() => setHoveredPanel('kairoclean')}
        onMouseLeave={() => setHoveredPanel(null)}
        className="h-1/2 md:h-full md:w-1/2 w-full relative cursor-pointer overflow-hidden flex items-center justify-center"
      >
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/6267613/pexels-photo-6267613.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            filter: `blur(14px) brightness(${hoveredPanel === 'kairoclean' ? 0.75 : 0.45}) contrast(1.3) hue-rotate(340deg) saturate(1.2)`,
            transform: `scale(${hoveredPanel === 'kairoclean' ? 1.06 : 1.02})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-pink-950/50 via-pink-900/30 to-black/70" />

        {/* Card */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full max-w-xs mx-auto">
          <div
            className="w-full rounded-2xl px-6 py-5 md:px-10 md:py-9 transition-all duration-500"
            style={{
              background: 'rgba(255,255,255,0.055)',
              backdropFilter: 'blur(24px) saturate(1.4)',
              WebkitBackdropFilter: 'blur(24px) saturate(1.4)',
              border: hoveredPanel === 'kairoclean'
                ? '1px solid rgba(207,102,196,0.35)'
                : '1px solid rgba(255,255,255,0.10)',
              boxShadow: hoveredPanel === 'kairoclean'
                ? '0 0 60px rgba(207,102,196,0.25), 0 20px 50px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.08)'
                : '0 20px 50px rgba(0,0,0,0.75), inset 0 1px 0 rgba(255,255,255,0.05)',
            }}
          >
            {/* Logo — untouched */}
            <div className={`relative flex justify-center mb-4 transition-all duration-500 ${hoveredPanel === 'kairoclean' ? 'scale-110' : 'scale-100'}`}>
              <div
                className={`absolute inset-0 rounded-full transition-all duration-500 ${hoveredPanel === 'kairoclean' ? 'blur-3xl opacity-70' : 'blur-2xl opacity-20'}`}
                style={{ backgroundColor: '#CF66C4' }}
              />
              <img
                src={kairoCleanLogo}
                alt="KairoClean"
                className="h-24 md:h-32 w-auto relative z-10 transition-all duration-500"
                style={{ filter: 'drop-shadow(0 0 15px rgba(207, 102, 196, 0.6))' }}
              />
            </div>

            <h2
              className="text-xs md:text-sm font-bold mb-2 text-pink-100 tracking-widest"
              style={{ letterSpacing: '0.18em' }}
            >
              WHERE PRECISION<br />MEETS PERFECTION
            </h2>

            <h1 className="text-2xl md:text-4xl font-black tracking-tight leading-none">
              <span className="text-white">Kairo</span>
              <span
                className="transition-colors duration-500"
                style={{
                  color: '#CF66C4',
                  textShadow: hoveredPanel === 'kairoclean'
                    ? '0 0 40px rgba(207,102,196,1)'
                    : '0 0 20px rgba(207,102,196,0.6)',
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
