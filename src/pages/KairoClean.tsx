import React from 'react';
import { 
  Phone, Sparkles, Star, ChevronRight, ShieldCheck, 
  UserCheck, Clock, Check, Building2, Home, 
  Factory, PartyPopper, Calendar, Trophy 
} from 'lucide-react';

const PINK = '#E1147B';
const PINK_RGB = '225,20,123';

const services = [
  { title: 'Office Cleaning', desc: 'Professional janitorial services for corporate environments, ensuring a productive and sterile workspace.', icon: Building2 },
  { title: 'End-of-tenancy', desc: 'Deep cleaning solutions tailored for landlords and tenants to guarantee deposit returns and property standards.', icon: Home },
  { title: 'Commercial Cleaning', desc: 'Heavy-duty cleaning for warehouses, retail spaces, and industrial facilities with precision.', icon: Factory },
  { title: 'Domestic Cleaning', desc: 'Elite home cleaning services that bring the hotel-standard sparkle to your private residence.', icon: Sparkles },
  { title: 'After-event Cleaning', desc: 'Rapid response cleaning for venues and private events. We remove the mess while you recover.', icon: PartyPopper },
  { title: 'Regular/One-off', desc: 'Flexible cleaning schedules. Whether it is a weekly shine or a deep one-off blast, we handle it.', icon: Calendar },
];

const KairoCleanLanding: React.FC = () => {
  return (
    <div className="w-full text-white overflow-hidden relative font-sans bg-[#0a0a0a]">
      
      {/* 1. ELITE HERO SECTION */}
      <section className="relative px-6 md:px-12 lg:px-20 pt-24 pb-32 z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-8">
               <div className="h-px w-12 bg-[#E1147B]"></div>
               <span className="text-[#E1147B] font-black tracking-[0.3em] uppercase text-sm">Elite Cleaning Division</span>
            </div>
            <h1 className="text-7xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-8 uppercase">
              Where <span style={{ color: PINK }}>Precision</span><br />
              Meets <span style={{ color: PINK }}>Perfection</span>
            </h1>
            <p className="text-zinc-400 text-xl max-w-lg mb-10 leading-relaxed italic font-light">
              The gold standard in professional cleaning. Reliable, vetted, and relentlessly thorough.
            </p>
            <div className="flex gap-6">
              <button className="px-10 py-4 font-black uppercase tracking-widest text-sm transition-all hover:scale-105 active:scale-95" style={{ backgroundColor: PINK, color: '#fff' }}>
                Book Now
              </button>
              <button className="px-10 py-4 font-black uppercase tracking-widest text-sm border transition-all hover:bg-white/5" style={{ borderColor: PINK, color: PINK }}>
                Contact Us
              </button>
            </div>
          </div>
          
          <div className="relative flex justify-center">
             <div className="w-full max-w-md aspect-[4/5] bg-zinc-900/50 border border-zinc-800 rounded-2xl relative overflow-hidden flex items-center justify-center">
                <span className="text-zinc-700 font-black tracking-widest uppercase opacity-20 rotate-12 text-4xl">KairoClean Visual</span>
                {/* Overlapping Diamond Logo */}
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#0a0a0a] border-4 border-[#E1147B] rotate-45 flex items-center justify-center shadow-[0_0_40px_rgba(225,20,123,0.3)]">
                  <div className="-rotate-45 text-center">
                    <span className="text-4xl font-black" style={{ color: PINK }}>KC</span>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 2. OUR SERVICES GRID (3x2 Layout like KairoSec) */}
      <section className="relative px-6 py-24 bg-[#0d0d0d] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black uppercase tracking-tight mb-4">Our Services</h2>
            <p className="text-zinc-500 max-w-2xl mx-auto tracking-wide uppercase text-sm font-bold">Comprehensive cleaning solutions tailored to your standards</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className="p-10 border border-zinc-800 bg-[#0a0a0a] hover:border-[#E1147B]/50 transition-all group cursor-default">
                <s.icon className="w-10 h-10 mb-6 group-hover:scale-110 transition-transform" style={{ color: PINK }} />
                <h3 className="text-xl font-black uppercase mb-4 tracking-wide group-hover:text-[#E1147B] transition-colors">{s.title}</h3>
                <p className="text-zinc-500 leading-relaxed text-sm font-medium">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ABOUT KAIROCLEAN (Split Layout like KairoSec) */}
      <section className="relative px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black uppercase tracking-tight">About KairoClean</h2>
            <p className="text-[#E1147B] font-bold tracking-[0.2em] uppercase text-xs mt-2">Precision at Kairo Security Ltd</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Story */}
            <div className="lg:col-span-5 p-10 border border-zinc-800 bg-[#0d0d0d]">
              <p className="text-zinc-300 leading-[1.8] text-lg font-light mb-6 italic">
                "In my role as the Managing Director, I recognized a gap in the market for cleaning services that shared the same tactical precision as our security operations."
              </p>
              <p className="text-zinc-400 leading-[1.8]">
                Whether actively maintaining frontline hygiene or meticulously orchestrating deep-clean logistics behind the scenes, my commitment is unwavering. We deliver a tailored, efficient cleaning approach that aligns seamlessly with your needs.
              </p>
              <div className="mt-10 pt-10 border-t border-zinc-800">
                 <h4 className="text-[#E1147B] font-black uppercase tracking-widest text-sm mb-2">Our Commitment</h4>
                 <p className="text-zinc-500 text-sm">Superior cleaning solutions precisely tailored to your requirements, maintaining the highest standards of excellence.</p>
              </div>
            </div>

            {/* Right Column: 2x2 Value Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: '10+ Years', sub: 'Industry Experience', icon: Trophy },
                { label: 'Expert Team', sub: 'Professional Staff', icon: UserCheck },
                { label: 'Excellence', sub: 'Highest Standards', icon: ShieldCheck },
                { label: 'Tailored', sub: 'Custom Solutions', icon: Sparkles }
              ].map((val, idx) => (
                <div key={idx} className="p-10 border border-zinc-800 bg-[#0d0d0d] flex flex-col items-center text-center">
                  <val.icon className="w-8 h-8 mb-4" style={{ color: PINK }} />
                  <h5 className="text-xl font-black uppercase tracking-widest mb-1">{val.label}</h5>
                  <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">{val.sub}</p>
                </div>
              ))}
              
              {/* Wide Card Below Grid */}
              <div className="md:col-span-2 p-10 border border-[#E1147B]/20 bg-[#E1147B]/5">
                 <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-center md:text-left">
                       <p className="text-white font-black uppercase tracking-[0.2em]">Ready for a spotless property?</p>
                       <p className="text-zinc-400 text-sm">Join the hundreds of satisfied commercial and domestic clients.</p>
                    </div>
                    <button className="px-8 py-3 font-black uppercase text-xs tracking-widest border border-[#E1147B] text-[#E1147B] hover:bg-[#E1147B] hover:text-white transition-all">
                       Get Started
                    </button>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA PILL (THE "G" BUTTON) */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="p-8 md:p-12 rounded-full border-[3px] flex flex-col md:flex-row items-center justify-between gap-8 transition-all hover:shadow-[0_0_60px_rgba(225,20,123,0.4)]" style={{ borderColor: PINK }}>
            <div className="text-center md:text-left">
               <span className="block text-4xl font-black uppercase tracking-tighter" style={{ color: PINK }}>Call now for a</span>
               <span className="block text-4xl font-black uppercase tracking-tighter" style={{ color: PINK }}>free quote</span>
            </div>
            <div className="flex items-center gap-6">
               <Phone size={48} style={{ color: PINK }} />
               <span className="text-5xl md:text-7xl font-black tracking-tighter">033 0043 1631</span>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 mt-12 opacity-50">
             <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest"><Check size={16} /> Fully Insured</div>
             <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest"><Check size={16} /> Vetted Pros</div>
             <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest"><Check size={16} /> Flexible Bookings</div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 border-t border-white/5 text-center">
        <p className="text-zinc-600 text-[10px] font-black tracking-[0.4em] uppercase mb-4">WWW.KAIROSECURITY.CO.UK</p>
        <div className="flex justify-center gap-6 mb-8">
           <Star fill={PINK} stroke={PINK} size={16} />
           <Star fill={PINK} stroke={PINK} size={16} />
           <Star fill={PINK} stroke={PINK} size={16} />
           <Star fill={PINK} stroke={PINK} size={16} />
           <Star fill={PINK} stroke={PINK} size={16} />
        </div>
        <p className="text-[#E1147B] text-xs font-black tracking-[0.2em] uppercase">Kairo Security Ltd</p>
      </footer>
    </div>
  );
};

export default KairoCleanLanding;