import React from 'react';
import { Phone, Sparkles, Star } from 'lucide-react';

const PINK = '#E1147B';

const TikTokIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34l-.03-8.36a10.27 10.27 0 0 0 5.86 1.65V5.13a4.85 4.85 0 0 1-2.06-.44z" />
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378L2 15l1.785 5.042a9.9 9.9 0 005.232 1.523c5.448 0 9.886-4.434 9.889-9.882.002-5.462-4.415-9.89-9.856-9.89-2.64 0-5.122 1.03-6.988 2.898a9.825 9.825 0 00-2.892 6.994c-.003 1.792.476 3.545 1.388 5.083l-1.56 5.683 5.803-1.524a9.9 9.9 0 004.976 1.326h.004c5.446 0 9.882-4.434 9.885-9.882a9.826 9.826 0 00-2.894-6.993A9.826 9.826 0 0012.051 2.12z" />
  </svg>
);

const QRCodePlaceholder = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
    <rect x="5" y="5" width="35" height="35" rx="2" stroke={PINK} strokeWidth="3" />
    <rect x="14" y="14" width="17" height="17" rx="1" fill={PINK} opacity="0.7" />
    <rect x="60" y="5" width="35" height="35" rx="2" stroke={PINK} strokeWidth="3" />
    <rect x="69" y="14" width="17" height="17" rx="1" fill={PINK} opacity="0.7" />
    <rect x="5" y="60" width="35" height="35" rx="2" stroke={PINK} strokeWidth="3" />
    <rect x="14" y="69" width="17" height="17" rx="1" fill={PINK} opacity="0.7" />
    <rect x="60" y="60" width="8" height="8" rx="1" fill={PINK} opacity="0.7" />
    <rect x="72" y="60" width="8" height="8" rx="1" fill={PINK} opacity="0.7" />
    <rect x="84" y="60" width="11" height="8" rx="1" fill={PINK} opacity="0.7" />
    <rect x="60" y="72" width="8" height="8" rx="1" fill={PINK} opacity="0.7" />
    <rect x="72" y="72" width="8" height="8" rx="1" fill={PINK} opacity="0.5" />
    <rect x="84" y="72" width="11" height="8" rx="1" fill={PINK} opacity="0.7" />
    <rect x="60" y="84" width="8" height="11" rx="1" fill={PINK} opacity="0.7" />
    <rect x="72" y="84" width="23" height="11" rx="1" fill={PINK} opacity="0.5" />
    <line x1="47" y1="5" x2="47" y2="22" stroke={PINK} strokeWidth="3" opacity="0.6" />
    <line x1="53" y1="5" x2="53" y2="14" stroke={PINK} strokeWidth="3" opacity="0.6" />
    <line x1="47" y1="28" x2="47" y2="40" stroke={PINK} strokeWidth="3" opacity="0.6" />
    <line x1="53" y1="22" x2="53" y2="40" stroke={PINK} strokeWidth="3" opacity="0.6" />
    <line x1="5" y1="47" x2="22" y2="47" stroke={PINK} strokeWidth="3" opacity="0.6" />
    <line x1="5" y1="53" x2="14" y2="53" stroke={PINK} strokeWidth="3" opacity="0.6" />
    <line x1="28" y1="47" x2="40" y2="47" stroke={PINK} strokeWidth="3" opacity="0.6" />
    <line x1="22" y1="53" x2="40" y2="53" stroke={PINK} strokeWidth="3" opacity="0.6" />
  </svg>
);

const services = [
  'Office Cleaning',
  'End-of-tenancy Cleans',
  'Commercial Cleaning',
  'Domestic Cleaning',
  'After-event Cleaning',
  'Regular or One-off Cleans',
];

const socialIcons = [
  { Icon: TikTokIcon, label: 'TikTok' },
  { Icon: FacebookIcon, label: 'Facebook' },
  { Icon: InstagramIcon, label: 'Instagram' },
  { Icon: WhatsAppIcon, label: 'WhatsApp' },
];

const KairoCleanLanding: React.FC = () => {
  return (
    <div className="w-full bg-[#111111] text-white overflow-hidden relative font-sans">

      {/* HEXAGON BACKGROUND */}
      <div className="absolute top-0 left-0 right-0 h-[55%] pointer-events-none overflow-hidden z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="hex-bg" x="0" y="0" width="88" height="100" patternUnits="userSpaceOnUse">
              <polygon
                points="44,2 86,26 86,74 44,98 2,74 2,26"
                fill="none"
                stroke="rgba(225,20,123,0.13)"
                strokeWidth="1"
              />
            </pattern>
            <linearGradient id="hex-fade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="40%" stopColor="#111111" stopOpacity="0" />
              <stop offset="100%" stopColor="#111111" stopOpacity="1" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#hex-bg)" />
          <rect width="100%" height="100%" fill="url(#hex-fade)" />
        </svg>
      </div>

      {/* ============================================================
          HERO SECTION
      ============================================================ */}
      <section className="relative z-10 px-6 md:px-12 lg:px-20 pt-16 pb-40">
        <div className="max-w-7xl mx-auto">

          {/* Top badges */}
          <div className="flex items-center gap-0 mb-10 w-fit">
            <span
              className="px-5 py-2 text-sm font-extrabold tracking-widest uppercase"
              style={{ backgroundColor: PINK, color: '#111111' }}
            >
              KAIROCLEAN
            </span>
            <span
              className="px-5 py-2 text-sm font-extrabold tracking-widest uppercase border"
              style={{ backgroundColor: '#1a1a1a', color: PINK, borderColor: PINK }}
            >
              CLEANING SERVICES
            </span>
          </div>

          {/* Hero grid: left = headline, right = overlapping image composition */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-end">

            {/* LEFT: Headline */}
            <div className="flex flex-col justify-end pb-4">
              <h1
                className="text-6xl md:text-7xl xl:text-8xl font-black leading-[1.0] tracking-tight mb-8"
                style={{ color: PINK }}
              >
                Where<br />
                Precision<br />
                Meets<br />
                Perfection
              </h1>
              <p className="text-gray-300 italic text-lg md:text-xl font-light leading-relaxed max-w-sm">
                Reliable cleaners with high standards &amp; flexible bookings.
              </p>
            </div>

            {/* RIGHT: Overlapping image composition */}
            <div className="relative flex justify-center lg:justify-end" style={{ minHeight: '480px' }}>

              {/* Large cleaner image placeholder */}
              <div
                className="relative w-72 md:w-80 lg:w-96 rounded-2xl overflow-hidden border border-gray-700"
                style={{ height: '480px', background: 'linear-gradient(160deg, #1e1e1e 0%, #2d2d2d 60%, #1a1a1a 100%)' }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" style={{ height: '40%', top: 'auto' }} />
                <div className="w-full h-full flex flex-col items-center justify-center gap-4">
                  <div
                    className="w-20 h-20 rounded-full border-2 flex items-center justify-center"
                    style={{ borderColor: PINK }}
                  >
                    <svg className="w-10 h-10" style={{ color: PINK }} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                  <p className="text-gray-500 text-sm text-center px-6 leading-relaxed">
                    Professional<br />Cleaner Image
                  </p>
                </div>
              </div>

              {/* Diamond KC logo — absolute, overlapping bottom-left of image */}
              <div
                className="absolute z-20"
                style={{ bottom: '-30px', left: '0px' }}
              >
                <div
                  className="w-36 h-36 md:w-44 md:h-44 border-4 flex items-center justify-center shadow-2xl"
                  style={{
                    borderColor: PINK,
                    transform: 'rotate(45deg)',
                    background: 'rgba(17,17,17,0.92)',
                    boxShadow: `0 0 40px rgba(225,20,123,0.35)`,
                  }}
                >
                  <div style={{ transform: 'rotate(-45deg)' }} className="text-center">
                    <div className="text-4xl font-black leading-none" style={{ color: PINK }}>KC</div>
                    <div className="text-xs font-bold text-gray-400 tracking-widest mt-1">LOGO</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          DRAMATIC WAVE DIVIDER — deeply swoops into hero
      ============================================================ */}
      <div className="relative z-20 w-full" style={{ marginTop: '-160px' }}>
        <svg
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
          className="w-full block"
          style={{ height: '200px' }}
        >
          {/* Deep pink glow layer */}
          <path
            d="M0,140 C200,60 400,190 720,110 C1040,30 1260,160 1440,90 L1440,200 L0,200 Z"
            fill={PINK}
            opacity="0.12"
          />
          {/* Dark fill layer — the main transition */}
          <path
            d="M0,160 C240,70 480,180 720,120 C960,60 1200,170 1440,100 L1440,200 L0,200 Z"
            fill="#1a1a1a"
          />
          {/* Thin pink highlight on wave crest */}
          <path
            d="M0,160 C240,70 480,180 720,120 C960,60 1200,170 1440,100"
            fill="none"
            stroke={PINK}
            strokeWidth="2.5"
            opacity="0.55"
          />
        </svg>
      </div>

      {/* ============================================================
          MIDDLE CONTENT SECTION
      ============================================================ */}
      <section className="relative z-10 bg-[#1a1a1a] px-6 md:px-12 lg:px-20 pt-4 pb-20">
        <div className="max-w-5xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* LEFT: QR + Socials + Stars */}
            <div className="flex flex-col items-center lg:items-start gap-8">

              {/* QR Code */}
              <div className="flex flex-col items-center gap-3 w-full">
                <span
                  className="text-base font-extrabold tracking-[0.3em] uppercase"
                  style={{ color: PINK }}
                >
                  Scan Me
                </span>
                <div className="w-56 h-56 md:w-64 md:h-64 bg-white p-3 rounded-sm shadow-xl"
                  style={{ boxShadow: `0 0 30px rgba(225,20,123,0.2)` }}
                >
                  <QRCodePlaceholder />
                </div>
              </div>

              {/* Socials + Stars together, centered */}
              <div className="flex flex-col items-center gap-4 w-full">
                <span className="text-sm font-semibold tracking-wide" style={{ color: PINK }}>
                  Find us on...
                </span>
                <div className="flex gap-3 justify-center">
                  {socialIcons.map(({ Icon, label }) => (
                    <button
                      key={label}
                      aria-label={label}
                      className="w-12 h-12 border border-white/30 flex items-center justify-center text-white hover:border-[#E1147B] hover:text-[#E1147B] transition-colors duration-200"
                    >
                      <Icon />
                    </button>
                  ))}
                </div>
                {/* Stars centered directly under social icons */}
                <div className="flex gap-2 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={28} className="fill-gray-400 text-gray-400" />
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT: Services List */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-8">
                <h2 className="text-4xl md:text-5xl font-black" style={{ color: PINK }}>
                  We Provide
                </h2>
                <Sparkles size={30} style={{ color: PINK }} />
              </div>

              <ul className="space-y-5">
                {services.map((service, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <span
                      className="text-2xl font-black leading-none flex-shrink-0"
                      style={{ color: PINK }}
                    >
                      ✓
                    </span>
                    <span className="text-white text-2xl font-semibold">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          TRUST BADGES
      ============================================================ */}
      <section className="relative z-10 bg-[#111111] px-6 md:px-12 lg:px-20 py-10 border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-16">
            {['Flexible Scheduling', 'Fully Insured', 'Vetted Professionals'].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="text-2xl font-black" style={{ color: PINK }}>✓</span>
                <span className="text-white font-semibold text-base tracking-wide">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          MASSIVE CTA PILL
      ============================================================ */}
      <section className="relative z-10 bg-[#111111] px-4 md:px-8 py-14">
        <div className="max-w-6xl mx-auto">
          <div
            className="rounded-full border-[3px] flex flex-col sm:flex-row items-center justify-between px-10 md:px-16 py-8 md:py-10 gap-8 sm:gap-0 cursor-pointer transition-all duration-300"
            style={{
              borderColor: PINK,
              boxShadow: `0 0 50px rgba(225,20,123,0.4), 0 0 100px rgba(225,20,123,0.15)`,
            }}
          >
            {/* Left: CTA text */}
            <div className="flex flex-col items-center sm:items-start">
              <span className="text-2xl md:text-3xl font-extrabold leading-tight" style={{ color: PINK }}>
                Call now for a
              </span>
              <span className="text-2xl md:text-3xl font-extrabold leading-tight" style={{ color: PINK }}>
                free quote
              </span>
            </div>

            {/* Vertical divider */}
            <div className="hidden sm:block w-px h-16 bg-gray-600" />

            {/* Right: Phone */}
            <div className="flex items-center gap-5">
              <Phone size={36} style={{ color: PINK }} />
              <span className="text-4xl md:text-5xl font-black text-white tracking-wide">
                033 0043 1631
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          FOOTER
      ============================================================ */}
      <footer className="relative z-10 bg-[#111111] border-t border-gray-800 px-6 py-10 text-center">
        <div className="space-y-1">
          <p className="text-white font-semibold tracking-widest text-sm uppercase">
            WWW.KAIROSECURITY.CO.UK
          </p>
          <p className="text-white text-sm">Enquiries@kairosecurity.co.uk</p>
          <p className="font-bold text-sm tracking-widest uppercase mt-3" style={{ color: PINK }}>
            KAIRO SECURITY LTD
          </p>
          <p className="text-gray-500 text-xs mt-1">(Registered in England and Wales)</p>
        </div>
      </footer>
    </div>
  );
};

export default KairoCleanLanding;
