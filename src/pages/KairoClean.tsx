import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Sparkles, Star, ChevronRight, 
  Shield, Users, Building2, Check, Clock, Home,
  Trash2, PartyPopper
} from 'lucide-react';

const PINK = '#E1147B';

export default function KairoClean() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Inquiry Sent Successfully! We will be in touch shortly.");
  };

  return (
    <div className="w-full text-white bg-[#0a0a0a] min-h-screen relative font-sans selection:bg-[#E1147B]">
      
      {/* --- 1. TOP LOGO AREA (Centered Diamond) --- */}
      <div className="flex justify-center pt-16 pb-8 relative z-10">
        <div className="w-32 h-32 bg-[#0a0a0a] border-4 border-[#E1147B] rotate-45 flex items-center justify-center shadow-[0_0_40px_rgba(225,20,123,0.3)] hover:scale-105 transition-transform duration-500">
          <div className="-rotate-45 text-center">
            <span className="text-4xl font-black" style={{ color: PINK }}>KC</span>
            <p className="text-[10px] font-bold tracking-widest uppercase opacity-40">Clean</p>
          </div>
        </div>
      </div>

      {/* --- 2. HERO SECTION --- */}
      <section className="px-6 py-12 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-[7.5rem] font-black uppercase leading-[0.9] tracking-tighter mb-8 italic">
            Where <span style={{ color: PINK }}>Precision</span><br />
            Meets <span style={{ color: PINK }}>Perfection</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-12 italic font-light tracking-wide leading-relaxed">
            The elite standard in professional cleaning. Reliable, vetted, and relentlessly thorough.
          </p>
          <div className="flex justify-center gap-6">
            <a href="#book-form" className="px-12 py-5 font-black uppercase tracking-widest text-sm transition-all hover:bg-white hover:text-[#E1147B] shadow-[0_0_20px_rgba(225,20,123,0.3)]" style={{ backgroundColor: PINK }}>Request Quote</a>
          </div>
        </div>
      </section>

      {/* --- 3. OUR SERVICES (3x2 Grid Style) --- */}
      <section className="px-6 py-24 bg-[#0d0d0d] border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-black uppercase mb-16 tracking-tight italic text-white">Our <span style={{ color: PINK }}>Services</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Office Cleaning', desc: 'Elite janitorial services for corporate spaces, ensuring your workplace reflects your brand.', icon: Building2 },
              { title: 'End-of-tenancy', desc: 'Precision deep cleans designed for maximum deposit return and property readiness.', icon: Home },
              { title: 'Commercial', desc: 'Heavy-duty maintenance for warehouses, retail units, and industrial sites.', icon: Shield },
              { title: 'Domestic Clean', desc: 'Showroom-standard cleaning for high-end residential properties and private homes.', icon: Sparkles },
              { title: 'After-event', desc: 'Rapid-response mess removal for venues, festivals, and elite private parties.', icon: PartyPopper },
              { title: 'Deep Cleaning', desc: 'Intensive restoration cleaning. We clear the grime that others choose to ignore.', icon: Trash2 },
            ].map((s, i) => (
              <div key={i} className="p-10 border border-zinc-800 bg-[#0a0a0a] hover:border-[#E1147B] transition-all group text-left relative overflow-hidden">
                <s.icon className="w-10 h-10 mb-6 group-hover:scale-110 transition-transform" style={{ color: PINK }} />
                <h3 className="text-2xl font-black uppercase mb-4 tracking-wide group-hover:text-[#E1147B] transition-colors">{s.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed font-medium">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. ABOUT SECTION (Split 12-Column Layout) --- */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5 p-12 border border-zinc-800 bg-[#0d0d0d] shadow-xl">
            <h2 className="text-4xl font-black uppercase mb-8 leading-none italic text-[#E1147B]">The Standard</h2>
            <p className="text-zinc-300 mb-8 italic text-lg leading-relaxed font-light">
              "We've brought the tactical discipline of Kairo Security to the cleaning industry. No missed corners. No compromise. Only perfection."
            </p>
            <div className="space-y-5 pt-8 border-t border-zinc-800">
              <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest"><Check size={18} style={{ color: PINK }} /> Fully Insured & Licensed</div>
              <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest"><Check size={18} style={{ color: PINK }} /> Elite Vetted Professionals</div>
              <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest"><Check size={18} style={{ color: PINK }} /> Flexible High-Spec Cleaning</div>
            </div>
          </div>

          {/* Right Column Grid (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: 'Tactical Prep', sub: 'Site Hazard Assessment', icon: Clock },
              { label: 'Top-Down', sub: 'Systematic Method', icon: Sparkles },
              { label: 'Elite Staff', sub: 'Rigorous Background Checks', icon: Users },
              { label: 'Integrity', sub: 'Secured Client Properties', icon: Shield }
            ].map((v, i) => (
              <div key={i} className="p-10 border border-zinc-800 bg-[#0d0d0d] flex flex-col items-center text-center group hover:bg-zinc-900 transition-all">
                <v.icon className="w-10 h-10 mb-4 transition-transform group-hover:scale-110" style={{ color: PINK }} />
                <h4 className="text-xl font-black uppercase tracking-widest mb-1">{v.label}</h4>
                <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-[0.2em]">{v.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 5. BOOKING FORM (Visible Form Boxes) --- */}
      <section id="book-form" className="px-6 py-24 bg-[#0d0d0d] border-t border-white/5 relative">
        <div className="max-w-4xl mx-auto bg-[#0a0a0a] p-10 md:p-16 border border-zinc-800 shadow-2xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-4 italic">Book a <span style={{ color: PINK }}>Clean</span></h2>
            <p className="text-zinc-500 font-bold uppercase tracking-[0.3em] text-xs underline decoration-[#E1147B] underline-offset-4">Professional Response within 24 hours</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" required placeholder="FULL NAME" className="bg-[#111] border border-zinc-800 p-4 text-sm font-bold uppercase outline-none focus:border-[#E1147B] transition-all" onChange={e => setFormData({...formData, name: e.target.value})} />
              <input type="email" required placeholder="EMAIL ADDRESS" className="bg-[#111] border border-zinc-800 p-4 text-sm font-bold uppercase outline-none focus:border-[#E1147B] transition-all" onChange={e => setFormData({...formData, email: e.target.value})} />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="tel" required placeholder="PHONE NUMBER" className="bg-[#111] border border-zinc-800 p-4 text-sm font-bold uppercase outline-none focus:border-[#E1147B] transition-all" onChange={e => setFormData({...formData, phone: e.target.value})} />
              <select className="bg-[#111] border border-zinc-800 p-4 text-sm font-bold uppercase outline-none focus:border-[#E1147B] transition-all appearance-none cursor-pointer" onChange={e => setFormData({...formData, service: e.target.value})}>
                <option value="">SELECT SERVICE</option>
                <option value="office">OFFICE CLEANING</option>
                <option value="tenancy">END-OF-TENANCY</option>
                <option value="domestic">DOMESTIC CLEAN</option>
                <option value="deep">DEEP ONE-OFF</option>
              </select>
            </div>
            
            <textarea rows={4} placeholder="ANY SPECIFIC REQUIREMENTS?" className="w-full bg-[#111] border border-zinc-800 p-4 text-sm font-bold uppercase outline-none focus:border-[#E1147B] transition-all resize-none" onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
            
            <button type="submit" className="w-full py-5 font-black uppercase tracking-[0.4em] transition-all hover:tracking-[0.6em] hover:scale-[1.01] active:scale-95 shadow-xl" style={{ backgroundColor: PINK }}>Submit Booking Request</button>
          </form>
        </div>
      </section>

      {/* --- 6. CTA PILL SECTION (Fixed Tag Structure) --- */}
      <section className="px-6 py-24 text-center bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto rounded-[100px] border-[4px] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10 mb-20 shadow-2xl hover:shadow-[0_0_80px_rgba(225,20,123,0.3)] transition-all" style={{ borderColor: PINK }}>
          <div className="text-center md:text-left">
             <span className="block text-4xl md:text-5xl font-black uppercase tracking-tighter" style={{ color: PINK }}>Direct Line</span>
             <span className="block text-4xl md:text-5xl font-black uppercase tracking-tighter" style={{ color: PINK }}>For Quotes</span>
          </div>
          <div className="flex items-center gap-8">
             <Phone size={60} style={{ color: PINK }} className="hidden sm:block animate-pulse" />
             <span className="text-5xl md:text-8xl font-black tracking-tighter drop-shadow-lg leading-none">033 0043 1631</span>
          </div>
        </div>
      </section>

      {/* --- 7. FOOTER (Standalone Tag) --- */}
      <footer className="py-16 px-6 border-t border-white/10 bg-[#0a0a0a] text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-white/40 font-black tracking-[0.4em] text-xs md:text-sm uppercase mb-3">WWW.KAIROSECURITY.CO.UK</p>
          <div className="flex justify-center gap-2 mb-8 text-[#E1147B]">
             {[...Array(5)].map((_, i) => <Star key={i} size={18} fill={PINK} className="drop-shadow-[0_0_10px_rgba(225,20,123,0.5)]" />)}
          </div>
          <p className="font-black text-lg md:text-xl tracking-[0.3em] uppercase mb-2" style={{ color: PINK }}>KAIRO SECURITY LTD</p>
          <p className="text-white/20 text-[10px] uppercase font-black tracking-widest">(Registered in England and Wales)</p>
        </div>
      </footer>

    </div>
  );
}