import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Sparkles, Star, ChevronRight, 
  Shield, Users, Building2, Check, Clock, Home 
} from 'lucide-react';

const PINK = '#E1147B';

const KairoCleanLanding: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Inquiry Sent Successfully!");
  };

  return (
    <div className="w-full text-white bg-[#0a0a0a] min-h-screen relative font-sans selection:bg-[#E1147B]">
      
      {/* 1. TOP LOGO AREA */}
      <div className="flex justify-center pt-16 pb-8 relative z-10">
        <div className="w-28 h-28 bg-[#0a0a0a] border-4 border-[#E1147B] rotate-45 flex items-center justify-center shadow-[0_0_30px_rgba(225,20,123,0.3)]">
          <div className="-rotate-45 text-center">
            <span className="text-3xl font-black" style={{ color: PINK }}>KC</span>
            <p className="text-[8px] font-bold tracking-widest uppercase opacity-40">Clean</p>
          </div>
        </div>
      </div>

      {/* 2. HERO */}
      <section className="px-6 py-12 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-8 italic">
            Where <span style={{ color: PINK }}>Precision</span><br />
            Meets <span style={{ color: PINK }}>Perfection</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 italic font-light">
            Tactical cleaning standards for elite properties.
          </p>
          <a href="#book-form" className="inline-block px-10 py-4 font-black uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(225,20,123,0.3)]" style={{ backgroundColor: PINK }}>Request Quote</a>
        </div>
      </section>

      {/* 3. SERVICES (3x2 Grid like KairoSec) */}
      <section className="px-6 py-20 bg-[#0d0d0d] border-y border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-12 tracking-tight italic text-[#E1147B]">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Office Cleaning', desc: 'Surgical precision for corporate environments.', icon: Building2 },
              { title: 'End-of-tenancy', desc: 'Tactical deep cleaning for property readiness.', icon: Home },
              { title: 'Commercial', desc: 'High-spec industrial and retail maintenance.', icon: Shield },
              { title: 'Domestic', desc: 'Elite hotel-standard shine for private homes.', icon: Sparkles },
              { title: 'After-event', desc: 'Rapid-response cleanup for venues and parties.', icon: Sparkles },
              { title: 'Deep Cleaning', desc: 'Intensive restoration and sanitization.', icon: Shield },
            ].map((s, i) => (
              <div key={i} className="p-8 border border-zinc-800 bg-[#0a0a0a] hover:border-[#E1147B] transition-all group text-left">
                <s.icon className="w-8 h-8 mb-6" style={{ color: PINK }} />
                <h3 className="text-xl font-black uppercase mb-3 tracking-wide group-hover:text-[#E1147B]">{s.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ABOUT (Split Layout like KairoSec) */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 p-8 border border-zinc-800 bg-[#0d0d0d]">
            <h2 className="text-3xl font-black uppercase mb-6 leading-none italic">About <span style={{ color: PINK }}>KairoClean</span></h2>
            <p className="text-zinc-400 mb-6 italic text-md leading-relaxed">
              "Tactical discipline meets elite hygiene. We clear the grime that others choose to ignore."
            </p>
            <div className="space-y-3 pt-6 border-t border-zinc-800">
              <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest"><Check size={14} style={{ color: PINK }} /> Fully Insured</div>
              <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest"><Check size={14} style={{ color: PINK }} /> Vetted Pros</div>
              <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest"><Check size={14} style={{ color: PINK }} /> Flexible Booking</div>
            </div>
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 gap-4 text-center">
            {[
              { label: 'Tactical', sub: 'Site Assessment', icon: Clock },
              { label: 'Method', sub: 'Top-To-Bottom', icon: Sparkles },
              { label: 'Elite', sub: 'Vetted Staff', icon: Users },
              { label: 'Secure', sub: 'Property Safe', icon: Shield }
            ].map((v, i) => (
              <div key={i} className="p-6 border border-zinc-800 bg-[#0d0d0d] hover:bg-zinc-900 transition-colors">
                <v.icon className="w-6 h-6 mx-auto mb-3" style={{ color: PINK }} />
                <h4 className="text-md font-black uppercase tracking-widest mb-1">{v.label}</h4>
                <p className="text-zinc-600 text-[8px] font-bold uppercase tracking-widest">{v.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BOOKING FORM (Visible Form) */}
      <section id="book-form" className="px-6 py-20 bg-[#0d0d0d] border-t border-white/5">
        <div className="max-w-3xl mx-auto bg-[#0a0a0a] p-8 md:p-12 border border-zinc-800 shadow-2xl">
          <h2 className="text-3xl font-black uppercase mb-10 text-center italic">Book Your <span style={{ color: PINK }}>Clean</span></h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input type="text" placeholder="FULL NAME" required className="bg-[#111] border border-zinc-800 p-4 text-xs font-bold uppercase outline-none focus:border-[#E1147B]" onChange={e => setFormData({...formData, name: e.target.value})} />
              <input type="email" placeholder="EMAIL ADDRESS" required className="bg-[#111] border border-zinc-800 p-4 text-xs font-bold uppercase outline-none focus:border-[#E1147B]" onChange={e => setFormData({...formData, email: e.target.value})} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input type="tel" placeholder="PHONE NUMBER" required className="bg-[#111] border border-zinc-800 p-4 text-xs font-bold uppercase outline-none focus:border-[#E1147B]" onChange={e => setFormData({...formData, phone: e.target.value})} />
              <select className="bg-[#111] border border-zinc-800 p-4 text-xs font-bold uppercase outline-none focus:border-[#E1147B] cursor-pointer" onChange={e => setFormData({...formData, service: e.target.value})}>
                <option>SELECT SERVICE</option>
                <option>OFFICE CLEANING</option>
                <option>DOMESTIC CLEAN</option>
                <option>END-OF-TENANCY</option>
              </select>
            </div>
            <textarea rows={3} placeholder="MESSAGE" className="w-full bg-[#111] border border-zinc-800 p-4 text-xs font-bold uppercase outline-none focus:border-[#E1147B] resize-none" onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
            <button type="submit" className="w-full py-4 font-black uppercase tracking-[0.2em] hover:tracking-[0.3em] transition-all" style={{ backgroundColor: PINK }}>Submit Request</button>
          </form>
        </div>
      </section>

      {/* 6. CTA PILL & FOOTER */}
      <section className="px-6 py-20 text-center bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto rounded-full border-4 p-8 flex flex-col md:flex-row items-center justify-between gap-6 mb-16" style={{ borderColor: PINK }}>
          <span className="text-2xl font-black uppercase tracking-tighter" style={{ color: PINK }}>Free Quote</span>
          <div className="flex items-center gap-4">
            <Phone size={36} style={{ color: PINK }} />
            <span className="text-4xl md:text-6xl font-black tracking-tighter">033 0043 1631</span>
          </div>
        </div>
        <p className="text-zinc-600 text-[8px] font-black tracking-[0.3em] uppercase mb-2">WWW.KAIROSECURITY.CO.UK</p>
        <p className="text-[#E1147B] text-[10px] font-black tracking-[0.2em] uppercase">Kairo Security Ltd (Clean Division)</p>
      </footer>
    </div>
  );
};

export default KairoCleanLanding;