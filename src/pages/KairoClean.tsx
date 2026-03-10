import React from 'react';
import { Phone, Sparkles, Star, ChevronRight, Shield, User, Clock, Check } from 'lucide-react';

const PINK = '#E1147B';
const PINK_RGB = '225,20,123';

// Your custom Social Icons (Stays exactly as you had them)
const TikTokIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34l-.03-8.36a10.27 10.27 0 0 0 5.86 1.65V5.13a4.85 4.85 0 0 1-2.06-.44z" /></svg>
);
const FacebookIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
);
const InstagramIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
);
const WhatsAppIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378L2 15l1.785 5.042a9.9 9.9 0 005.232 1.523c5.448 0 9.886-4.434 9.889-9.882.002-5.462-4.415-9.89-9.856-9.89-2.64 0-5.122 1.03-6.988 2.898a9.825 9.825 0 00-2.892 6.994c-.003 1.792.476 3.545 1.388 5.083l-1.56 5.683 5.803-1.524a9.9 9.9 0 004.976 1.326h.004c5.446 0 9.882-4.434 9.885-9.882a9.826 9.826 0 00-2.894-6.993A9.826 9.826 0 0012.051 2.12z" /></svg>
);

const services = [
  'Office Cleaning', 'End-of-tenancy Cleans', 'Commercial Cleaning',
  'Domestic Cleaning', 'After-event Cleaning', 'Regular or One-off Cleans'
];

const socialIcons = [
  { Icon: TikTokIcon, label: 'TikTok' },
  { Icon: FacebookIcon, label: 'Facebook' },
  { Icon: InstagramIcon, label: 'Instagram' },
  { Icon: WhatsAppIcon, label: 'WhatsApp' },
];

const KairoCleanLanding: React.FC = () => {
  return (
    <div className="w-full text-white overflow-hidden relative font-sans" style={{ backgroundColor: '#0a0a0a' }}>
      
      {/* BACKGROUND HEXAGON TEXTURE */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="kc-hex" x="0" y="0" width="80" height="92" patternUnits="userSpaceOnUse">
              <polygon points="40,2 78,23 78,69 40,90 2,69 2,23" fill="none" stroke={`rgba(${PINK_RGB},0.07)`} strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#kc-hex)" />
        </svg>
      </div>

      {/* SECTION 1 — HERO */}
      <section className="relative px-6 md:px-12 lg:px-20 pt-16 pb-48 md:pb-56" style={{ zIndex: 1 }}>
        <div className="max-w-7xl mx-auto">
          {/* Badges */}
          <div className="flex items-stretch w-fit mb-12">
            <span className="px-6 py-2.5 text-sm font-black tracking-[0.25em] uppercase rounded-l-full" style={{ backgroundColor: PINK, color: '#0a0a0a' }}>KAIROCLEAN</span>
            <span className="px-6 py-2.5 text-sm font-black tracking-[0.25em] uppercase rounded-r-full border-t border-b border-r" style={{ color: PINK, borderColor: PINK, backgroundColor: 'transparent' }}>CLEANING SERVICES</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-end">
            {/* LEFT CONTENT */}
            <div>
              <h1 className="text-7xl md:text-8xl xl:text-9xl font-black leading-[0.95] tracking-tight mb-8" style={{ color: PINK }}>
                Where<br />Precision<br />Meets<br />Perfection
              </h1>
              <p className="text-gray-400 italic text-xl md:text-2xl font-light leading-relaxed max-w-md">
                Experience the new elite standard in professional cleaning.
              </p>
              
              <button className="mt-8 flex items-center gap-3 px-8 py-4 rounded-full font-black text-lg uppercase transition-all duration-300 group shadow-lg" style={{ backgroundColor: PINK, color: '#fff' }}>
                Book a Clean
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* RIGHT IMAGES */}
            <div className="relative flex justify-center lg:justify-end mt-12 lg:mt-0" style={{ minHeight: '520px' }}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ width: '340px', height: '520px', background: 'linear-gradient(160deg, #1a1a1a 0%, #242424 50%, #161616 100%)', border: `1px solid rgba(${PINK_RGB},0.15)` }}>
                <div className="w-full h-full flex flex-col items-center justify-center gap-5">
                  <div className="w-24 h-24 rounded-full flex items-center justify-center" style={{ border: `2px solid ${PINK}`, boxShadow: `0 0 20px rgba(${PINK_RGB},0.3)` }}>
                    <svg className="w-12 h-12" style={{ color: PINK }} fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
                  </div>
                  <p className="text-gray-600 text-sm font-bold uppercase tracking-widest text-center">Professional<br />Cleaner</p>
                </div>
              </div>

              {/* Diamond Logo Overlap */}
              <div className="absolute z-10" style={{ bottom: '-24px', left: '-16px' }}>
                <div style={{ width: '160px', height: '160px', transform: 'rotate(45deg)', border: `4px solid ${PINK}`, backgroundColor: '#0a0a0a', boxShadow: `0 0 30px rgba(${PINK_RGB},0.5)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ transform: 'rotate(-45deg)', textAlign: 'center' }}>
                    <div className="font-black leading-none" style={{ fontSize: '2.5rem', color: PINK }}>KC</div>
                    <div className="font-bold tracking-widest mt-1 uppercase" style={{ fontSize: '0.6rem', color: `rgba(${PINK_RGB},0.5)` }}>Logo</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WAVE DIVIDER */}
      <div className="relative w-full z-20" style={{ marginTop: '-200px' }}>
        <svg viewBox="0 0 1440 260" preserveAspectRatio="none" className="w-full block" style={{ height: '260px' }}>
          <path d="M0,215 C220,110 460,245 720,165 C980,85 1220,215 1440,148 L1440,260 L0,260 Z" fill="#111111" />
          <path d="M0,215 C220,110 460,245 720,165 C980,85 1220,215 1440,148" fill="none" stroke={PINK} strokeWidth="2" opacity="0.3" />
        </svg>
      </div>

      {/* SECTION 3 — SERVICES */}
      <section className="relative px-6 md:px-12 lg:px-20 pt-6 pb-20" style={{ backgroundColor: '#111111', zIndex: 1 }}>
        <div className="max-w-6xl mx-auto">
          {/* Trust Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-24 py-10 px-8 rounded-3xl border border-white/5 bg-[#0a0a0a]/50 backdrop-blur-sm shadow-xl">
            <div className="flex flex-col items-center gap-3 text-center">
              <Shield size={32} style={{ color: PINK }} />
              <span className="font-black tracking-widest text-xs uppercase">Fully Insured</span>
            </div>
            <div className="flex flex-col items-center gap-3 text-center border-y sm:border-y-0 sm:border-x border-white/10 py-6 sm:py-0">
              <User size={32} style={{ color: PINK }} />
              <span className="font-black tracking-widest text-xs uppercase">Vetted Pros</span>
            </div>
            <div className="flex flex-col items-center gap-3 text-center">
              <Clock size={32} style={{ color: PINK }} />
              <span className="font-black tracking-widest text-xs uppercase">Flexible Booking</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* Social Proof */}
            <div className="flex flex-col items-center lg:items-start">
              <h2 className="text-2xl font-black uppercase tracking-widest mb-10" style={{ color: PINK }}>Find us on...</h2>
              <div className="flex gap-4 mb-10">
                {socialIcons.map(({ Icon, label }) => (
                  <button key={label} className="w-16 h-16 flex items-center justify-center text-gray-500 bg-[#1a1a1a] border border-white/10 rounded-2xl transition-all duration-300 hover:text-[#E1147B] hover:border-[#E1147B]">
                    <Icon />
                  </button>
                ))}
              </div>
              <div className="flex gap-2 mb-3">
                {[...Array(5)].map((_, i) => <Star key={i} size={32} fill={PINK} style={{ color: PINK }} />)}
              </div>
              <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">5-star rated on Google</p>
            </div>

            {/* List */}
            <div>
              <div className="flex items-center gap-4 mb-10">
                <h2 className="text-5xl md:text-6xl font-black uppercase" style={{ color: PINK }}>We Provide</h2>
                <Sparkles size={36} style={{ color: PINK }} />
              </div>
              <ul className="space-y-6">
                {services.map((service, i) => (
                  <li key={i} className="flex items-center gap-6 group hover:translate-x-3 transition-transform duration-300">
                    <Check size={28} className="text-[#E1147B]" strokeWidth={4} />
                    <span className="text-2xl md:text-3xl font-bold">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA PILL */}
      <section className="relative px-4 md:px-8 pb-32 pt-12 z-10" style={{ backgroundColor: '#0a0a0a' }}>
        <div className="max-w-6xl mx-auto group">
          <div className="rounded-full flex flex-col sm:flex-row items-center justify-between px-12 md:px-20 py-12 md:py-16 border-[3px] transition-all duration-500 shadow-2xl" style={{ borderColor: PINK }}>
            <div className="text-center sm:text-left">
              <span className="block text-4xl md:text-5xl font-black tracking-tight" style={{ color: PINK }}>Call now for a</span>
              <span className="block text-4xl md:text-5xl font-black tracking-tight" style={{ color: PINK }}>free quote</span>
            </div>
            <div className="flex items-center gap-6">
              <Phone size={50} style={{ color: PINK }} />
              <span className="text-5xl md:text-6xl lg:text-7xl font-black">033 0043 1631</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative px-6 py-12 text-center z-10 border-t border-white/5" style={{ backgroundColor: '#0a0a0a' }}>
        <p className="text-gray-400 font-bold tracking-[0.3em] text-xs uppercase mb-2 text-zinc-500">WWW.KAIROSECURITY.CO.UK</p>
        <p className="text-gray-500 text-sm mb-6 opacity-50">Enquiries@kairosecurity.co.uk</p>
        <p className="font-black tracking-[0.2em] uppercase" style={{ color: PINK }}>KAIRO SECURITY LTD</p>
      </footer>
    </div>
  );
};

export default KairoCleanLanding;