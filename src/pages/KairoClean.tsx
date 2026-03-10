import React, { useState } from 'react';
import {
  Phone, Mail, MapPin, Sparkles, Star, ChevronRight,
  Shield, Users, Building2, Check, Clock, Home,
  Trash2, PartyPopper
} from 'lucide-react';
import logoImg from '../assets/image copy copy copy.png';
import Navigation from '../components/Navigation';

export default function KairoClean() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Inquiry Sent Successfully!");
  };

  return (
    <div className="w-full text-white bg-[#0a0a0a] min-h-screen relative font-sans selection:bg-[#E1147B]">
      <Navigation />

      {/* 1. LOGO TOP */}
      <header className="flex justify-center pt-32 pb-8 relative z-10">
        <h1 className="text-6xl md:text-7xl font-black uppercase tracking-wider text-white">KairoClean</h1>
      </header>

      {/* 2. HERO */}
      <section id="hero" className="px-6 py-12 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase leading-[1] tracking-tight mb-8 italic">
            Where <span className="text-[#E1147B]">Precision</span><br />
            Meets <span className="text-[#E1147B]">Perfection</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-12 italic font-light tracking-wide">
            Elite cleaning standards for residential and commercial properties.
          </p>
          <div className="flex justify-center gap-6">
            <a href="#book-form" className="px-12 py-5 font-black uppercase tracking-widest text-sm transition-all bg-[#E1147B] text-white hover:bg-white hover:text-[#E1147B] shadow-[0_0_20px_rgba(225,20,123,0.3)]">
              Request Quote
            </a>
          </div>
        </div>
      </section>

      {/* 3. SERVICES (3x2 Grid) */}
      <section id="services" className="px-6 py-24 bg-[#0d0d0d] border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-black uppercase mb-16 tracking-tight italic">Our <span className="text-[#E1147B]">Services</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Office Cleaning', desc: 'Elite janitorial services for corporate spaces.', icon: Building2 },
              { title: 'End-of-tenancy', desc: 'Precision deep cleans for property readiness.', icon: Home },
              { title: 'Commercial', desc: 'Heavy-duty maintenance for warehouses and retail.', icon: Shield },
              { title: 'Domestic Clean', desc: 'Showroom-standard cleaning for high-end homes.', icon: Sparkles },
              { title: 'After-event', desc: 'Rapid-mess removal for venues and parties.', icon: Clock },
              { title: 'Deep Cleaning', desc: 'Intensive top-to-bottom sanitization.', icon: Check },
            ].map((s, i) => (
              <div key={i} className="p-10 border border-zinc-800 bg-[#0a0a0a] hover:border-[#E1147B] transition-all group text-left">
                <s.icon className="w-10 h-10 mb-6 group-hover:scale-110 transition-transform text-[#E1147B]" />
                <h3 className="text-2xl font-black uppercase mb-4 tracking-wide group-hover:text-[#E1147B] transition-colors">{s.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ABOUT (Split Layout) */}
      <section id="about" className="px-6 py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 p-12 border border-zinc-800 bg-[#0d0d0d] shadow-xl">
            <h2 className="text-4xl font-black uppercase mb-8 leading-none italic text-[#E1147B]">The Standard</h2>
            <p className="text-zinc-300 mb-8 italic text-lg leading-relaxed font-light">
              "We've brought the tactical discipline of Kairo Security to the cleaning industry. No missed corners. No compromise."
            </p>
            <div className="space-y-5 pt-8 border-t border-zinc-800">
              <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest"><Check size={18} className="text-[#E1147B]" /> Fully Insured</div>
              <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest"><Check size={18} className="text-[#E1147B]" /> Vetted Professionals</div>
              <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest"><Check size={18} className="text-[#E1147B]" /> Flexible Scheduling</div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: 'Tactical Prep', sub: 'Site Assessment', icon: Clock },
              { label: 'Top-Down', sub: 'Systematic Method', icon: Sparkles },
              { label: 'Elite Staff', sub: 'Background Checks', icon: Users },
              { label: 'Integrity', sub: 'Secure Properties', icon: Shield }
            ].map((v, i) => (
              <div key={i} className="p-10 border border-zinc-800 bg-[#0d0d0d] flex flex-col items-center text-center group hover:bg-zinc-900 transition-all">
                <v.icon className="w-10 h-10 mb-4 text-[#E1147B]" />
                <h4 className="text-xl font-black uppercase tracking-widest mb-1">{v.label}</h4>
                <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-[0.2em]">{v.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BOOKING FORM (The Boxes are here) */}
      <section id="book-form" className="px-6 py-24 bg-[#0d0d0d] border-t border-white/5 relative">
        <div className="max-w-4xl mx-auto bg-[#0a0a0a] p-10 md:p-16 border border-zinc-800 shadow-2xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-4 italic">Book a <span className="text-[#E1147B]">Clean</span></h2>
            <p className="text-zinc-500 font-bold uppercase tracking-[0.3em] text-xs underline decoration-[#E1147B] underline-offset-4">Quote within 24 hours</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" required placeholder="FULL NAME" className="bg-[#111] border border-zinc-800 p-4 text-sm font-bold uppercase outline-none focus:border-[#E1147B] transition-all" onChange={e => setFormData({...formData, name: e.target.value})} />
              <input type="email" required placeholder="EMAIL ADDRESS" className="bg-[#111] border border-zinc-800 p-4 text-sm font-bold uppercase outline-none focus:border-[#E1147B] transition-all" onChange={e => setFormData({...formData, email: e.target.value})} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="tel" required placeholder="PHONE NUMBER" className="bg-[#111] border border-zinc-800 p-4 text-sm font-bold uppercase outline-none focus:border-[#E1147B] transition-all" onChange={e => setFormData({...formData, phone: e.target.value})} />
              <select className="bg-[#111] border border-zinc-800 p-4 text-sm font-bold uppercase outline-none focus:border-[#E1147B] cursor-pointer" onChange={e => setFormData({...formData, service: e.target.value})}>
                <option value="">SELECT SERVICE</option>
                <option value="office">OFFICE CLEANING</option>
                <option value="tenancy">END-OF-TENANCY</option>
                <option value="domestic">DOMESTIC CLEAN</option>
              </select>
            </div>
            <textarea rows={4} placeholder="HOW CAN WE HELP?" className="w-full bg-[#111] border border-zinc-800 p-4 text-sm font-bold uppercase outline-none focus:border-[#E1147B] transition-all resize-none" onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
            <button type="submit" className="w-full py-5 font-black uppercase tracking-[0.4em] bg-[#E1147B] text-white hover:tracking-[0.6em] transition-all shadow-xl">
              Submit Request
            </button>
          </form>
        </div>
      </section>

      {/* 6. CALL PILL */}
      <section id="contact" className="px-6 py-24 text-center bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto rounded-[100px] border-[4px] border-[#E1147B] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10 mb-20 shadow-2xl hover:shadow-[0_0_80px_rgba(225,20,123,0.3)] transition-all">
          <div className="text-center md:text-left">
             <span className="block text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#E1147B]">Direct Line</span>
             <span className="block text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#E1147B]">For Quotes</span>
          </div>
          <div className="flex items-center gap-8">
             <Phone size={60} className="hidden sm:block text-[#E1147B] animate-pulse" />
             <span className="text-5xl md:text-8xl font-black tracking-tighter drop-shadow-lg">033 0043 1631</span>
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="py-16 px-6 border-t border-white/10 bg-[#0a0a0a] text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-white/40 font-black tracking-[0.4em] text-xs uppercase mb-3">WWW.KAIROSECURITY.CO.UK</p>
          <div className="flex justify-center gap-2 mb-8 text-[#E1147B]">
             {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#E1147B" className="drop-shadow-[0_0_10px_rgba(225,20,123,0.5)]" />)}
          </div>
          <p className="font-black text-lg md:text-xl tracking-[0.3em] uppercase mb-2 text-[#E1147B]">KAIRO SECURITY LTD</p>
          <p className="text-white/20 text-[10px] uppercase font-black tracking-widest">(Registered in England and Wales)</p>
        </div>
      </footer>

    </div>
  );
}