import React, { useState } from 'react';
import kairoSecLogo from '../assets/KairoSecuritybluelogonew.png';
import kairoCleanLogo from '../assets/image1_(3).png';
import bgKairoSec from '../assets/bg-kairosec-new.png';
import bgKairoClean from '../assets/bg-kairoclean-new.png';

const CARD_STYLE: React.CSSProperties = {
  border: '1px solid rgba(255,255,255,0.18)',
  background: 'transparent',
};

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
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{
            backgroundImage: `url(${bgKairoSec})`,
            filter: `blur(3px) brightness(${hoveredPanel === 'kairosec' ? 0.55 : 0.38}) contrast(1.1)`,
            transform: `scale(${hoveredPanel === 'kairosec' ? 1.06 : 1.03})`,
          }}
        />
        {/* Single colour overlay — covers the ENTIRE panel */}
        <div className="absolute inset-0 bg-blue-950/40" />

        {/* Card — transparent, no glow */}
        <div className="relative z-10 w-full flex justify-center px-5 md:px-10">
          <div
            className="w-full max-w-[260px] md:max-w-[400px] rounded-xl md:rounded-3xl
                        px-5 py-3 md:px-12 md:py-10
                        text-center transition-all duration-500"
            style={CARD_STYLE}
          >
            <div className="flex justify-center mb-2 transition-all duration-500">
              <img
                src={kairoSecLogo}
                alt="KairoSec"
                className="h-10 md:h-28 lg:h-32 w-auto"
              />
            </div>

            <p className="text-[9px] md:text-xs font-bold text-blue-100 tracking-[0.18em] uppercase mb-1 md:mb-3">
              Where Vigilance Meets Brilliance
            </p>

            <h1 className="text-xl md:text-4xl lg:text-5xl font-black tracking-tight leading-none">
              <span className="text-white">Kairo</span>
              <span className="text-blue-400">Sec</span>
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
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{
            backgroundImage: `url(${bgKairoClean})`,
            filter: `blur(3px) brightness(${hoveredPanel === 'kairoclean' ? 0.55 : 0.38}) contrast(1.1) saturate(0.9)`,
            transform: `scale(${hoveredPanel === 'kairoclean' ? 1.06 : 1.03})`,
          }}
        />
        {/* Single colour overlay — covers the ENTIRE panel */}
        <div className="absolute inset-0 bg-pink-950/40" />

        {/* Card — transparent, no glow */}
        <div className="relative z-10 w-full flex justify-center px-5 md:px-10">
          <div
            className="w-full max-w-[260px] md:max-w-[400px] rounded-xl md:rounded-3xl
                        px-5 py-3 md:px-12 md:py-10
                        text-center transition-all duration-500"
            style={CARD_STYLE}
          >
            <div className="flex justify-center mb-2 transition-all duration-500">
              <img
                src={kairoCleanLogo}
                alt="KairoClean"
                className="h-10 md:h-28 lg:h-32 w-auto"
              />
            </div>

            <p className="text-[9px] md:text-xs font-bold text-pink-100 tracking-[0.18em] uppercase mb-1 md:mb-3">
              Where Precision Meets Perfection
            </p>

            <h1 className="text-xl md:text-4xl lg:text-5xl font-black tracking-tight leading-none">
              <span className="text-white">Kairo</span>
              <span style={{ color: '#CF66C4' }}>Clean</span>
            </h1>
          </div>
        </div>
      </a>

    </section>
  );
};
