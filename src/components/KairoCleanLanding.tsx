import React from 'react';
import { Check, Phone, Star, Sparkles, ChevronRight } from 'lucide-react';
import Logo from './Logo';

const PINK = '#E1147B';

// Custom Social SVGs
const TikTokIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34l-.03-8.36a10.27 10.27 0 0 0 5.86 1.65V5.13a4.85 4.85 0 0 1-2.06-.44z" />
  </svg>
);
const FacebookIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);
const InstagramIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);
const WhatsAppIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378L2 15l1.785 5.042a9.9 9.9 0 005.232 1.523c5.448 0 9.886-4.434 9.889-9.882.002-5.462-4.415-9.89-9.856-9.89-2.64 0-5.122 1.03-6.988 2.898a9.825 9.825 0 00-2.892 6.994c-.003 1.792.476 3.545 1.388 5.083l-1.56 5.683 5.803-1.524a9.9 9.9 0 004.976 1.326h.004c5.446 0 9.882-4.434 9.885-9.882a9.826 9.826 0 00-2.894-6.993A9.826 9.826 0 0012.051 2.12z" />
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

export default function KairoCleanLanding() {
  return (
    <div className="relative bg-[#0a0a0a] text-white overflow-hidden min-h-screen font-sans selection:bg-[#E1147B] selection:text-white">
      
      {/* ELITE BACKGROUND TEXTURE */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.04]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="kc-hex" x="0" y="0" width="60" height="69.28" patternUnits="userSpaceOnUse">
              <path d="M30 0L60 17.32v34.64L30 69.28L0 51.96V17.32L30 0z" fill="none" stroke="#E1147B" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#kc-hex)" />
        </svg>
      </div>
      
      {/* Top Gradient Glow */}
      <div className="absolute top-0 left-1/4 w-1/2 h-96 bg-[#E1147B] rounded-full blur-[150px] opacity-10 pointer-events-none z-0"></div>

      {/* --- HERO SECTION --- */}
      <div className="max-w-7xl mx-auto px-6 pt-20 md:pt-28 pb-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Left Side: Marketing Copy (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start z-20">
            {/* Premium Badges */}
            <div className="flex items-center gap-4 mb-8">
              <Logo brand="kairoclean" size="sm" className="transition-all duration-300" />
              <div className="flex rounded-full overflow-hidden border border-[#E1147B]/50 shadow-[0_0_20px_rgba(225,20,123,0.15)] bg-[#0a0a0a]">
                <span className="bg-[#E1147B] text-white font-black px-6 py-2.5 text-xs md:text-sm tracking-[0.2em] uppercase">
                  KAIROCLEAN
                </span>
                <span className="text-[#E1147B] font-bold px-6 py-2.5 text-xs md:text-sm tracking-[0.2em] uppercase">
                  Cleaning Services
                </span>
              </div>
            </div>
            
            {/* Headline */}
            <h1 className="text-6xl md:text-7xl lg:text-[6.5rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-[#E1147B] to-[#b30f60] leading-[0.95] mb-6 tracking-tighter uppercase drop-shadow-sm">
              Where<br />
              Precision<br />
              Meets<br />
              Perfection
            </h1>
            
            <p className="text-xl md:text-2xl text-zinc-300 font-light max-w-xl leading-relaxed mb-10">
              Experience the new standard in commercial and domestic cleaning. <span className="text-white font-semibold">Reliable, vetted, and spotless.</span>
            </p>

            {/* Immediate Action CTA */}
            <button className="group relative flex items-center gap-4 bg-[#E1147B] text-white px-8 py-4 rounded-full font-black text-lg tracking-wide uppercase transition-all duration-300 hover:bg-white hover:text-[#E1147B] shadow-[0_0_30px_rgba(225,20,123,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]">
              <span>Get a Free Quote</span>
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" strokeWidth={3} />
            </button>
          </div>

          {/* Right Side: The Overlapping Masterpiece (5 cols) */}
          <div className="lg:col-span-5 relative w-full max-w-md mx-auto mt-10 lg:mt-0 pb-12 pr-6">
             {/* Main Cleaner Image */}
             <div className="relative w-full aspect-[3/4] bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-2xl border border-zinc-800/80 shadow-[0_30px_60px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col items-center justify-center group cursor-pointer">
                <div className="absolute inset-0 bg-[#E1147B] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                <div className="w-20 h-20 rounded-full border border-zinc-700/50 bg-[#111] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-8 h-8 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <span className="text-zinc-600 font-bold tracking-[0.3em] text-xs uppercase text-center">
                  Professional<br/>Cleaner
                </span>
             </div>
             
             {/* Overlapping Diamond Logo */}
             <div className="absolute -bottom-4 -left-8 w-44 h-44 bg-[#0a0a0a] border-[3px] border-[#E1147B] rotate-45 z-30 shadow-[0_0_40px_rgba(225,20,123,0.35)] flex items-center justify-center backdrop-blur-md">
                <div className="-rotate-45 text-center flex flex-col items-center">
                  <span className="text-[#E1147B] font-black text-5xl tracking-tighter drop-shadow-md">KC</span>
                  <div className="h-0.5 w-8 bg-[#E1147B]/30 my-1"></div>
                  <span className="text-[#E1147B]/80 text-[10px] font-bold tracking-[0.2em] uppercase">Logo</span>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* --- WAVE DIVIDER --- */}
      <div className="relative z-20 -mt-24 md:-mt-32">
        <svg viewBox="0 0 1440 180" className="w-full h-auto drop-shadow-[0_-5px_25px_rgba(225,20,123,0.15)]" preserveAspectRatio="none">
          <path d="M0,90 C320,220 420,-30 720,90 C1020,220 1120,-30 1440,90 L1440,180 L0,180 Z" fill="#111111"></path>
          <path d="M0,95 C320,225 420,-25 720,95 C1020,225 1120,-25 1440,95 L1440,180 L0,180 Z" fill="#E1147B" opacity="0.15"></path>
        </svg>
      </div>

      {/* --- MIDDLE SECTION (Socials & Services) --- */}
      <div className="bg-[#111111] relative z-20 pt-12 pb-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
           
           {/* Left: Socials & Stars */}
           <div className="flex flex-col items-center md:items-end md:text-right pt-4">
              <h3 className="text-[#E1147B] text-xl md:text-2xl font-black uppercase tracking-widest mb-8">Find us on...</h3>
              <div className="flex gap-4 justify-center md:justify-end mb-8 w-full">
                {socialIcons.map(({ Icon, label }) => (
                  <button
                    key={label}
                    aria-label={label}
                    className="w-14 h-14 flex items-center justify-center text-zinc-400 bg-[#0a0a0a] border border-zinc-800 rounded-xl hover:border-[#E1147B] hover:text-[#E1147B] hover:shadow-[0_0_20px_rgba(225,20,123,0.3)] hover:-translate-y-1 transition-all duration-300"
                  >
                    <Icon />
                  </button>
                ))}
              </div>
              <div className="flex space-x-2 mb-4 justify-center md:justify-end w-full">
                 {[1,2,3,4,5].map(i => (
                   <Star key={i} size={28} className="fill-[#E1147B] text-[#E1147B] drop-shadow-[0_0_8px_rgba(225,20,123,0.5)]" />
                 ))}
              </div>
              <p className="text-zinc-400 text-sm font-medium w-full text-center md:text-right tracking-wide uppercase">5-star rated on Google</p>
           </div>

           {/* Right: Services List */}
           <div className="flex flex-col items-center md:items-start border-t md:border-t-0 md:border-l border-zinc-800/50 pt-12 md:pt-0 md:pl-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-10 flex items-center gap-4">
                 We <span className="text-[#E1147B]">Provide</span>
                 <Sparkles className="w-10 h-10 text-[#E1147B] drop-shadow-[0_0_10px_rgba(225,20,123,0.6)]" />
              </h2>
              <ul className="space-y-6 text-lg md:text-xl font-semibold w-full">
                 {services.map(service => (
                   <li key={service} className="flex items-center gap-5 text-zinc-200 group cursor-default">
                     <div className="bg-[#1a1a1a] p-2 rounded-full border border-zinc-800 group-hover:border-[#E1147B] group-hover:shadow-[0_0_15px_rgba(225,20,123,0.4)] transition-all duration-300">
                       <Check className="text-[#E1147B] w-5 h-5" strokeWidth={4} />
                     </div>
                     <span className="group-hover:translate-x-2 group-hover:text-white transition-transform duration-300">{service}</span>
                   </li>
                 ))}
              </ul>
           </div>
        </div>
      </div>

      {/* --- BOTTOM CTA & FOOTER --- */}
      <div className="bg-[#0a0a0a] border-t border-zinc-900 pt-16 pb-12 px-6 relative z-20">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          
          {/* Elite Trust Badges */}
          <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-8 md:gap-16 mb-20 w-full bg-[#111] py-8 rounded-3xl border border-zinc-800/50 shadow-xl">
             {['Flexible Scheduling', 'Fully Insured', 'Vetted Professionals'].map(text => (
               <div key={text} className="flex items-center gap-4 text-base md:text-lg font-bold text-white">
                 <Check className="text-[#E1147B] w-6 h-6 drop-shadow-[0_0_8px_rgba(225,20,123,0.5)]" strokeWidth={4}/>
                 <span className="tracking-wide">{text}</span>
               </div>
             ))}
          </div>

          {/* MASSIVE GLOWING CTA BUTTON */}
          <div className="w-full max-w-4xl border-[3px] border-[#E1147B] rounded-full shadow-[0_0_40px_rgba(225,20,123,0.3)] hover:shadow-[0_0_60px_rgba(225,20,123,0.5)] hover:border-white bg-[#0a0a0a] flex flex-col md:flex-row items-center justify-between p-2 mb-20 overflow-hidden transition-all duration-300 cursor-pointer group">
             
             <div className="flex-1 text-center md:text-left py-8 px-10">
               <span className="block text-[#E1147B] group-hover:text-white transition-colors text-3xl md:text-4xl font-black leading-tight drop-shadow-md">Call now for a</span>
               <span className="block text-[#E1147B] group-hover:text-white transition-colors text-3xl md:text-4xl font-black leading-tight drop-shadow-md">free quote</span>
             </div>

             <div className="hidden md:block w-px h-28 bg-zinc-800 group-hover:bg-[#E1147B] transition-colors"></div>

             <div className="flex-1 flex items-center justify-center gap-5 py-8 px-6 w-full md:w-auto bg-[#E1147B]/10 rounded-b-full md:rounded-none group-hover:bg-[#E1147B]/20 transition-colors">
               <Phone className="text-[#E1147B] group-hover:text-white w-10 h-10 drop-shadow-[0_0_8px_rgba(225,20,123,0.6)] group-hover:rotate-12 transition-all" />
               <span className="text-white text-4xl md:text-5xl lg:text-6xl font-black tracking-tight drop-shadow-lg">033 0043 1631</span>
             </div>
          </div>

          {/* Footer Info */}
          <div className="text-center space-y-3">
             <p className="text-zinc-300 font-semibold tracking-[0.2em] text-sm md:text-base uppercase hover:text-[#E1147B] cursor-pointer transition-colors">WWW.KAIROSECURITY.CO.UK</p>
             <p className="text-zinc-500 text-sm hover:text-white cursor-pointer transition-colors">Enquiries@kairosecurity.co.uk</p>
             <p className="text-[#E1147B] text-sm md:text-base font-black tracking-[0.25em] uppercase pt-4 drop-shadow-sm">KAIRO SECURITY LTD</p>
             <p className="text-zinc-600 text-xs">(Registered in England and Wales)</p>
          </div>
          
        </div>
      </div>
    </div>
  );
}