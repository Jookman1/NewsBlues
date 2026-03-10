import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Sparkles, Star, ChevronRight, 
  Shield, Users, Building2, Calendar, Check, 
  Clock, Trash2, PartyPopper, Home 
} from 'lucide-react';

const PINK = '#E1147B';

// CLEAN SOCIAL ICONS
const SocialIcon = ({ d }: { d: string }) => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d={d} />
  </svg>
);

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
          <h1 className="text-6xl md:text-[7rem] font-black uppercase leading-[0.9] tracking-tighter mb-8 italic">
            Where <span style={{ color: PINK }}>Precision</span><br />
            Meets <span style={{ color: PINK }}>Perfection</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-12 italic font-light">
            Tactical cleaning standards for elite properties.
          </p>
          <a href="#book-form" className="inline-block px-12 py-5 font-black uppercase tracking-widest text-sm shadow-[0_0_30px_rgba(225,20,123,0.3)]" style={{ backgroundColor: PINK }}>Request Quote</a>
        </div>
      </section>

      {/* 3. SERVICES (3x2 Grid like KairoSec) */}
      <section className="px-6 py-24 bg-[#0d0d0d] border-y border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-black uppercase mb-16 tracking-tight italic">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Office Cleaning', desc: 'Surgical precision for corporate environments.', icon: Building2 },
              { title: 'End-of-tenancy', desc: 'Tactical deep cleaning for property readiness.', icon: Home },
              { title: 'Commercial', desc: 'High-spec industrial and retail maintenance.', icon: Shield },
              { title: 'Domestic', desc: 'Elite hotel-standard shine for private homes.', icon: Sparkles },
              { title: 'After-event', desc: 'Rapid-response cleanup for venues and parties.', icon: PartyPopper },
              { title: 'Deep Cleaning', desc: 'Intensive restoration and sanitization.', icon: Trash2 },
            ].map((s, i) => (
              <div key={i} className="p-10 border border-zinc-800 bg-[#0a0a0a] hover:border-[#E1147B] transition-all group text-left">
                <s.icon className="w-10 h-10 mb-6 group-hover:scale-110 transition-transform" style={{ color: PINK }} />
                <h3 className="text-2xl font-black uppercase mb-4 tracking-wide group-hover:text-[#E1147B] transition-colors">{s.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ABOUT (Split 12-Column like KairoSec) */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 p-10 border border-zinc-800 bg-[#0d0d0d]">
            <h2 className="text-4xl font-black uppercase mb-8 leading-none italic">About <span style={{ color: PINK }}>KairoClean</span></h2>
            <p className="text-zinc-400 mb-8 italic text-lg leading-relaxed">
              "Tactical discipline meets elite hygiene. We clear the grime that others choose to ignore."
            </p>
            <div className="space-y-4 pt-8 border-t border-zinc-800">
              <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest"><Check size={16} style={{ color: PINK }} /> Fully Insured</div>
              <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest"><Check size={16} style={{ color: PINK }} /> Vetted Pros</div>
              <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest"><Check size={16} style={{ color: PINK }} /> Flexible Booking</div>
            </div>
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 gap-6 text-center">
            {[
              { label: 'Tactical', sub: 'Site Assessment', icon: Clock },
              { label: 'Method', sub: 'Top-To-Bottom', icon: Sparkles },
              { label: 'Elite', sub: 'Vetted Staff', icon: Users },
              { label: 'Secure', sub: 'Property Safe', icon: Shield }
            ].map((v, i) => (
              <div key={i} className="p-8 border border-zinc-800 bg-[#0d0d0d] hover:bg-zinc-900 transition-colors">
                <v.icon className="w-8 h-8 mx-auto mb-4" style={{ color: PINK }} />
                <h4 className="text-lg font-black uppercase tracking-widest mb-1">{v.label}</h4>
                <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest">{v.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BOOKING FORM (Visible Form) */}
      <section id="book-form" className="px-6 py-24 bg-[#0d0d0d] border-t border-white/5">
        <div className="max-w-4xl mx-auto bg-[#0a0a0a] p-12 border border-zinc-800 relative shadow-2xl">
          <h2 className="text-4xl font-black uppercase mb-12 text-center italic">Book Your <span style={{ color: PINK }}>Clean</span></h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="FULL NAME" required className="bg-[#111] border border-zinc-800 p-4 text-sm font-bold uppercase outline-none focus:border-[#E1147B]" onChange={e => setFormData({...formData, name: e.target.value})} />
              <input type="email" placeholder="EMAIL ADDRESS" required className="bg-[#111] border border-zinc-800 p-4 text-sm font-bold uppercase outline-none focus:border-[#E1147B]" onChange={e => setFormData({...formData, email: e.target.value})} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="tel" placeholder="PHONE NUMBER" required className="bg-[#111] border border-zinc-800 p-4 text-sm font-bold uppercase outline-none focus:border-[#E1147B]" onChange={e => setFormData({...formData, phone: e.target.value})} />
              <select className="bg-[#111] border border-zinc-800 p-4 text-sm font-bold uppercase outline-none focus:border-[#E1147B] cursor-pointer" onChange={e => setFormData({...formData, service: e.target.value})}>
                <option>SELECT SERVICE</option>
                <option>OFFICE CLEANING</option>
                <option>DOMESTIC CLEAN</option>
                <option>END-OF-TENANCY</option>
              </select>
            </div>
            <textarea rows={4} placeholder="ANY SPECIFIC REQUIREMENTS?" className="w-full bg-[#111] border border-zinc-800 p-4 text-sm font-bold uppercase outline-none focus:border-[#E1147B] resize-none" onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
            <button type="submit" className="w-full py-5 font-black uppercase tracking-[0.3em] hover:tracking-[0.5em] transition-all shadow-lg" style={{ backgroundColor: PINK }}>Submit Request</button>
          </form>
        </div>
      </section>

      {/* 6. CTA PILL & FOOTER */}
      <section className="px-6 py-24 text-center">
        <div className="max-w-5xl mx-auto rounded-full border-[3px] p-10 flex flex-col md:flex-row items-center justify-between gap-8 mb-24 transition-all hover:shadow-[0_0_50px_rgba(225,20,123,0.3)]" style={{ borderColor: PINK }}>
          <div className="text-left"><span className="block text-4xl font-black uppercase tracking-tighter" style={{ color: PINK }}>Direct Line</span></div>
          <div className="flex items-center gap-6">
            <Phone size={48} style={{ color: PINK }} />
            <span className="text-5xl md:text-7xl font-black tracking-tighter">033 0043 1631</span>
          </div>
        </div>
        <p className="text-zinc-600 text-[10px] font-black tracking-[0.4em] uppercase mb-4">WWW.KAIROSECURITY.CO.UK</p>
        <p className="text-[#E1147B] text-xs font-black tracking-[0.2em] uppercase">Kairo Security Ltd (Clean Division)</p>
      </footer>
    </div>
  );
};

export default KairoCleanLanding;