import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Sparkles, Star, ChevronRight, 
  Shield, Users, Building2, Calendar, Check, 
  Clock, Trash2, PartyPopper, Home 
} from 'lucide-react';

const PINK = '#E1147B';
const PINK_RGB = '225,20,123';

// Custom Social Icons
const TikTokIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34l-.03-8.36a10.27 10.27 0 0 0 5.86 1.65V5.13a4.85 4.85 0 0 1-2.06-.44z" /></svg>
);
const FacebookIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
);
const InstagramIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
);
const WhatsAppIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378L2 15l1.785 5.042a9.9 9.9 0 005.232 1.523c5.448 0 9.886-4.434 9.889-9.882.002-5.462-4.415-9.89-9.856-9.89-2.64 0-5.122 1.03-6.988 2.898a9.825 9.825 0 00-2.892 6.994c-.003 1.792.476 3.545 1.388 5.083l-1.56 5.683 5.803-1.524a9.9 9.9 0 004.976 1.326h.004c5.446 0 9.882-4.434 9.885-9.882a9.826 9.826 0 00-2.894-6.993A9.826 9.826 0 0012.051 2.12z" /></svg>
);

const KairoCleanLanding: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Inquiry Sent! We will contact you within 24 hours.");
  };

  return (
    <div className="w-full text-white bg-[#0a0a0a] min-h-screen relative font-sans">
      
      {/* 1. TOP LOGO AREA */}
      <div className="flex justify-center pt-16 pb-8 relative z-10">
        <div className="w-32 h-32 bg-[#0a0a0a] border-4 border-[#E1147B] rotate-45 flex items-center justify-center shadow-[0_0_40px_rgba(225,20,123,0.3)]">
          <div className="-rotate-45 text-center">
            <span className="text-4xl font-black" style={{ color: PINK }}>KC</span>
            <p className="text-[10px] font-bold tracking-widest uppercase opacity-40">Clean</p>
          </div>
        </div>
      </div>

      {/* 2. HERO */}
      <section className="px-6 py-12 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-[7.5rem] font-black uppercase leading-[0.9] tracking-tighter mb-8 italic">
            Where <span style={{ color: PINK }}>Precision</span><br />
            Meets <span style={{ color: PINK }}>Perfection</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-12 italic font-light tracking-wide">
            The elite standard in professional cleaning.
          </p>
          <a href="#book-form" className="inline-block px-12 py-5 font-black uppercase tracking-widest text-sm shadow-[0_0_30px_rgba(225,20,123,0.3)] transition-all hover:scale-105 active:scale-95" style={{ backgroundColor: PINK }}>Request Quote</a>
        </div>
      </section>

      {/* 3. OUR SERVICES (3x2 Grid like KairoSec) */}
      <section className="px-6 py-24 bg-[#0d0d0d] border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-black uppercase mb-16 tracking-tight italic">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cleaningServices.map((s, i) => (
              <div key={i} className="p-10 border border-zinc-800 bg-[#0a0a0a] hover:border-[#E1147B] transition-all group text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <s.icon size={60} />
                </div>
                <s.icon className="w-10 h-10 mb-6 group-hover:scale-110 transition-transform" style={{ color: PINK }} />
                <h3 className="text-2xl font-black uppercase mb-4 tracking-wide group-hover:text-[#E1147B] transition-colors">{s.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed font-medium">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ABOUT (Split 12-Column Layout like KairoSec) */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Text Box */}
          <div className="lg:col-span-5 p-12 border border-zinc-800 bg-[#0d0d0d] shadow-xl">
            <h2 className="text-4xl font-black uppercase mb-8 leading-none italic">About <span style={{ color: PINK }}>KairoClean</span></h2>
            <p className="text-zinc-300 mb-8 italic text-lg leading-relaxed font-light">
              "Excellence is not an act, but a habit. We've taken the military discipline from Kairo Security and applied it to every surface we clean."
            </p>
            <div className="space-y-5 pt-8 border-t border-zinc-800">
              <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest"><Check size={18} style={{ color: PINK }} /> Fully Insured & Licensed</div>
              <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest"><Check size={18} style={{ color: PINK }} /> Elite Vetted Professionals</div>
              <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest"><Check size={18} style={{ color: PINK }} /> Flexible High-Spec Cleaning</div>
            </div>
          </div>

          {/* Right Value Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-6">
            {[
              { label: 'Tactical Prep', sub: 'Site Hazard Assessment', icon: Clock },
              { label: 'Top-Down', sub: 'Systematic Cleaning Method', icon: Sparkles },
              { label: 'Staffing', sub: 'Rigorous Background Checks', icon: Users },
              { label: 'Integrity', sub: 'Secured Client Properties', icon: Shield }
            ].map((v, i) => (
              <div key={i} className="p-8 border border-zinc-800 bg-[#0d0d0d] flex flex-col items-center text-center group hover:bg-zinc-900 transition-all">
                <v.icon className="w-10 h-10 mb-4 transition-transform group-hover:scale-110" style={{ color: PINK }} />
                <h4 className="text-xl font-black uppercase tracking-widest mb-1">{v.label}</h4>
                <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-[0.2em]">{v.sub}</p>
              </div>
            ))}
            <div className="col-span-2 p-10 border border-[#E1147B]/20 bg-[#E1147B]/5 flex items-center justify-between rounded-xl">
              <p className="font-black uppercase tracking-widest text-sm">Follow the standard:</p>
              <div className="flex gap-6 text-zinc-500 hover:text-white transition-colors">
                <TikTokIcon /> <FacebookIcon /> <InstagramIcon /> <WhatsAppIcon />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BOOKING FORM (The Visible "Join" Style Form) */}
      <section id="book-form" className="px-6 py-24 bg-[#0d0d0d] border-t border-white/5 relative">
        <div className="max-w-4xl mx-auto bg-[#0a0a0a] p-10 md:p-16 border border-zinc-800 shadow-2xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-4 italic">Book a <span style={{ color: PINK }}>Clean</span></h2>
            <p className="text-zinc-500 font-bold uppercase tracking-[0.3em] text-xs">Professional Quote within 24 hours</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-1">Full Name</label>
                <input type="text" required placeholder="John Doe" className="bg-[#111] border border-zinc-800 p-4 text-sm font-bold uppercase outline-none focus:border-[#E1147B] transition-all" onChange={e => setFormData({...formData, name: e.target.value})} />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-1">Email Address</label>
                <input type="email" required placeholder="Email@example.com" className="bg-[#111] border border-zinc-800 p-4 text-sm font-bold uppercase outline-none focus:border-[#E1147B] transition-all" onChange={e => setFormData({...formData, email: e.target.value})} />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-1">Phone Number</label>
                <input type="tel" required placeholder="07123 456789" className="bg-[#111] border border-zinc-800 p-4 text-sm font-bold uppercase outline-none focus:border-[#E1147B] transition-all" onChange={e => setFormData({...formData, phone: e.target.value})} />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-1">Type of Service</label>
                <select className="bg-[#111] border border-zinc-800 p-4 text-sm font-bold uppercase outline-none focus:border-[#E1147B] transition-all appearance-none cursor-pointer" onChange={e => setFormData({...formData, service: e.target.value})}>
                  <option>Select Service</option>
                  <option>Office Cleaning</option>
                  <option>End-Of-Tenancy</option>
                  <option>Domestic Clean</option>
                  <option>Deep One-Off</option>
                </select>
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-1">Requirements / Message</label>
              <textarea rows={4} placeholder="Number of rooms, square footage, or special requests..." className="w-full bg-[#111] border border-zinc-800 p-4 text-sm font-bold uppercase outline-none focus:border-[#E1147B] transition-all resize-none" onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
            </div>
            
            <button type="submit" className="w-full py-5 font-black uppercase tracking-[0.4em] transition-all hover:tracking-[0.6em] hover:scale-[1.01] active:scale-95 shadow-xl" style={{ backgroundColor: PINK }}>Submit Booking Request</button>
          </form>
        </div>
      </section>

      {/* 6. CTA PILL SECTION */}
      <section className="px-6 py-24 text-center bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto rounded-[100px] border-[4px] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10 mb-20 shadow-2xl hover:shadow-[0_0_80px_rgba(225,20,123,0.3)] transition-all" style={{ borderColor: PINK }}>
          <div className="text-center md:text-left">
             <span className="block text-4xl md:text-5xl font-black uppercase tracking-tighter" style={{ color: PINK }}>Direct Line</span>
             <span className="block text-4xl md:text-5xl font-black uppercase tracking-tighter" style={{ color: PINK }}>For Quotes</span>
          </div>
          <div className="flex items-center gap-8">
             <Phone size={60} style={{ color: PINK }} className="hidden sm:block animate-pulse" />
             <span className="text-5xl md:text-8xl font-black tracking-tighter drop-shadow-lg">033 0043 1631</span>
          </div>
        </div>
        
        <p className="text-zinc-600 text-[11px] font-black tracking-[0.5em] uppercase mb-6">WWW.KAIROSECURITY.CO.UK</p>
        <div className="flex justify-center gap-2 mb-8">
           {[...Array(5)].map((_, i) => <Star key={i} size={18} fill={PINK} stroke={PINK} className="drop-shadow-[0_0_10px_rgba(225,20,123,0.5)]" />)}
        </div>
        <p className="text-[#E1147B] text-sm font-black tracking-[0.3em] uppercase">Kairo Security Ltd (Clean Division)</p>
      </footer>
    </div>
  );
};

const cleaningServices = [
  { title: 'Office Cleaning', desc: 'Surgical precision for corporate environments, ensuring your workspace stays professional.', icon: Building2 },
  { title: 'End-of-tenancy', desc: 'Tactical deep cleaning designed for maximum deposit return and property readiness.', icon: Home },
  { title: 'Commercial', desc: 'High-spec industrial and retail maintenance for businesses that demand the best.', icon: Shield },
  { title: 'Domestic', desc: 'Bringing the elite hotel-standard shine to your high-end private residence.', icon: Sparkles },
  { title: 'After-event', desc: 'Rapid-response cleanup for venues, festivals, and elite corporate gatherings.', icon: PartyPopper },
  { title: 'Deep Cleaning', desc: 'Intensive restoration cleaning. We clear the grime that others choose to ignore.', icon: Trash2 },
];

export default KairoCleanLanding;