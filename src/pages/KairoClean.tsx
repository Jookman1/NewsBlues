import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Sparkles, Star, ChevronRight, 
  Shield, Users, Building2, Calendar, Check, 
  Clock, Trash2, PartyPopper, Home 
} from 'lucide-react';

const PINK = '#E1147B';
const PINK_RGB = '225,20,123';

// Custom Social SVGs (Your exact icons)
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

const KairoCleanLanding: React.FC = () => {
  return (
    <div className="w-full text-white bg-[#0a0a0a] min-h-screen relative font-sans">
      
      {/* 1. TOP LOGO AREA */}
      <div className="flex justify-center pt-12 pb-6 relative z-10">
        <div className="w-32 h-32 bg-[#0a0a0a] border-4 border-[#E1147B] rotate-45 flex items-center justify-center shadow-[0_0_40px_rgba(225,20,123,0.3)]">
          <div className="-rotate-45 text-center">
            <span className="text-4xl font-black" style={{ color: PINK }}>KC</span>
            <p className="text-[10px] font-bold tracking-widest uppercase opacity-50">Clean</p>
          </div>
        </div>
      </div>

      {/* 2. HERO SECTION */}
      <section className="px-6 py-12 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-8 italic">
            Where <span style={{ color: PINK }}>Precision</span><br />
            Meets <span style={{ color: PINK }}>Perfection</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-12 italic font-light">
            Reliable cleaners with high standards and flexible bookings.
          </p>
          <div className="flex justify-center gap-6">
            <button className="px-10 py-4 font-black uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(225,20,123,0.3)]" style={{ backgroundColor: PINK }}>Book a Clean</button>
            <button className="px-10 py-4 font-black uppercase tracking-widest text-sm border" style={{ borderColor: PINK, color: PINK }}>Our Services</button>
          </div>
        </div>
      </section>

      {/* 3. OUR SERVICES (KairoSec Box Layout) */}
      <section className="px-6 py-24 bg-[#0d0d0d] border-y border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-black uppercase mb-4 tracking-tight italic">Our Services</h2>
          <p className="text-zinc-500 mb-16 uppercase font-bold tracking-widest text-sm">Comprehensive solutions tailored to your standards</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cleaningServices.map((s, i) => (
              <div key={i} className="p-10 border border-zinc-800 bg-[#0a0a0a] hover:border-[#E1147B] transition-all group text-left">
                <s.icon className="w-10 h-10 mb-6 group-hover:scale-110 transition-transform" style={{ color: PINK }} />
                <h3 className="text-2xl font-black uppercase mb-4 tracking-wide group-hover:text-[#E1147B]">{s.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ABOUT SECTION (KairoSec Split Layout) */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column */}
            <div className="lg:col-span-5 p-10 border border-zinc-800 bg-[#0d0d0d]">
              <h2 className="text-4xl font-black uppercase mb-8 leading-none italic">About <span style={{ color: PINK }}>KairoClean</span></h2>
              <p className="text-zinc-400 mb-6 italic text-lg leading-relaxed">
                "We brought the tactical precision of our security background into the cleaning industry. Every surface, every corner, handled with military standards."
              </p>
              <div className="space-y-4 pt-6 border-t border-zinc-800">
                <div className="flex items-center gap-4 text-xs font-black uppercase tracking-[0.2em]"><Check size={16} style={{ color: PINK }} /> Flexible Scheduling</div>
                <div className="flex items-center gap-4 text-xs font-black uppercase tracking-[0.2em]"><Check size={16} style={{ color: PINK }} /> Fully Insured</div>
                <div className="flex items-center gap-4 text-xs font-black uppercase tracking-[0.2em]"><Check size={16} style={{ color: PINK }} /> Vetted Professionals</div>
              </div>
            </div>

            {/* Right Column Value Grid */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-6">
              {[
                { label: 'Arrival', sub: 'Hazard checks & scope confirmation', icon: Clock },
                { label: 'Order', sub: 'Systematic top-to-bottom method', icon: Sparkles },
                { label: 'Finals', sub: 'Streak-free glass & safety verification', icon: Shield },
                { label: 'Expert', sub: 'Only trained professional staff', icon: Users }
              ].map((val, idx) => (
                <div key={idx} className="p-8 border border-zinc-800 bg-[#0d0d0d] flex flex-col items-center text-center group hover:bg-zinc-900/50">
                  <val.icon className="w-8 h-8 mb-4 group-hover:text-white transition-colors" style={{ color: PINK }} />
                  <h4 className="text-lg font-black uppercase tracking-widest mb-1">{val.label}</h4>
                  <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest">{val.sub}</p>
                </div>
              ))}
              <div className="col-span-2 p-10 border border-[#E1147B]/20 bg-[#E1147B]/5 flex items-center justify-between">
                <p className="font-black uppercase tracking-widest text-sm">Find us on socials:</p>
                <div className="flex gap-4">
                  <TikTokIcon /> <FacebookIcon /> <InstagramIcon /> <WhatsAppIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA PILL */}
      <section className="px-6 pb-32">
        <div className="max-w-5xl mx-auto group">
          <div className="p-10 md:p-14 rounded-full border-[3px] flex flex-col md:flex-row items-center justify-between transition-all group-hover:shadow-[0_0_60px_rgba(225,20,123,0.35)]" style={{ borderColor: PINK }}>
            <div className="text-center md:text-left mb-6 md:mb-0">
               <span className="block text-4xl font-black uppercase tracking-tighter" style={{ color: PINK }}>Call now for a</span>
               <span className="block text-4xl font-black uppercase tracking-tighter" style={{ color: PINK }}>free quote</span>
            </div>
            <div className="flex items-center gap-6">
               <Phone size={48} style={{ color: PINK }} />
               <span className="text-5xl md:text-7xl font-black tracking-tighter">033 0043 1631</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 border-t border-white/5 text-center">
        <p className="text-zinc-600 text-[10px] font-black tracking-[0.4em] uppercase mb-4">WWW.KAIROSECURITY.CO.UK</p>
        <div className="flex justify-center gap-1 mb-6">
           {[...Array(5)].map((_, i) => <Star key={i} size={14} fill={PINK} stroke={PINK} />)}
        </div>
        <p className="text-[#E1147B] text-xs font-black tracking-[0.2em] uppercase">Kairo Security Ltd (Clean Division)</p>
      </footer>
    </div>
  );
};

const cleaningServices = [
  { title: 'Office Cleaning', desc: 'Elite janitorial services for corporate spaces, ensuring your workplace reflects your brand.', icon: Building2 },
  { title: 'End-of-tenancy', desc: 'Precision deep cleans to ensure deposit returns and property readiness for new tenants.', icon: Home },
  { title: 'Commercial', desc: 'Heavy-duty maintenance for warehouses, retail units, and industrial sites.', icon: Shield },
  { title: 'Domestic', desc: 'Showroom-standard cleaning for high-end residential properties.', icon: Sparkles },
  { title: 'After-event', desc: 'Rapid mess removal for venues, festivals, and private parties.', icon: PartyPopper },
  { title: 'Deep Cleaning', desc: 'Intensive top-to-bottom sanitization and restoration cleans.', icon: Trash2 },
];

export default KairoCleanLanding;