import React, { useState } from 'react';
import { 
  Sparkles, ShieldCheck, Clock, UserCheck, 
  ChevronRight, Phone, Mail, MapPin, 
  Home, Building2, PartyPopper, Trash2, 
  CheckCircle2, Brush
} from 'lucide-react';

const PINK = '#E1147B';
const PINK_RGB = '225,20,123';

export default function KairoClean() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    propertyType: '',
    message: '',
    datePreferred: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const webhookUrl = 'YOUR_MAKE_WEBHOOK_URL';
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('Booking request sent successfully!');
        setFormData({ name: '', email: '', phone: '', serviceType: '', propertyType: '', message: '', datePreferred: '' });
      }
    } catch (error) {
      alert('Error submitting request.');
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#E1147B]">
      
      {/* 1. TOP LOGO & HERO SECTION */}
      <section className="relative pt-12 pb-32 px-6 overflow-hidden">
        {/* Diamond Logo at Top */}
        <div className="flex justify-center mb-16 relative z-10">
          <div className="w-32 h-32 bg-[#0a0a0a] border-4 border-[#E1147B] rotate-45 flex items-center justify-center shadow-[0_0_30px_rgba(225,20,123,0.4)] transition-transform hover:scale-110 duration-500 cursor-pointer">
            <div className="-rotate-45 text-center">
              <span className="text-3xl font-black tracking-tighter" style={{ color: PINK }}>KC</span>
              <p className="text-[8px] font-bold tracking-[0.3em] uppercase opacity-50">KairoClean</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex mb-8 rounded-full overflow-hidden border border-[#E1147B]">
              <span className="bg-[#E1147B] text-black font-black px-6 py-2 text-xs tracking-widest uppercase">Elite Division</span>
              <span className="px-6 py-2 text-xs font-bold tracking-widest uppercase text-[#E1147B]">Premium Cleaning</span>
            </div>
            <h1 className="text-6xl md:text-[7rem] font-black leading-[0.9] tracking-tighter uppercase mb-8">
              Where <span style={{ color: PINK }}>Precision</span><br />
              Meets <span style={{ color: PINK }}>Perfection</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 italic font-light mb-12 max-w-2xl mx-auto">
              Reliable cleaners with high standards and flexible bookings.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
               <a href="#book" className="px-12 py-5 font-black uppercase tracking-widest text-sm transition-all hover:bg-white hover:text-[#E1147B] shadow-[0_0_20px_rgba(225,20,123,0.3)]" style={{ backgroundColor: PINK }}>Book Now</a>
               <a href="#services" className="px-12 py-5 font-black uppercase tracking-widest text-sm border transition-all hover:bg-white/5" style={{ borderColor: PINK, color: PINK }}>Our Services</a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES GRID (Based on KairoSec Services Layout) */}
      <section id="services" className="py-24 bg-[#0d0d0d] border-y border-white/5 px-6">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-center mb-16 tracking-tighter italic">Our <span style={{ color: PINK }}>Services</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cleaningServices.map((service, index) => (
              <div key={index} className="bg-zinc-900/50 p-10 border border-zinc-800 hover:border-[#E1147B]/50 transition-all group group cursor-pointer">
                <div className="mb-6 p-4 bg-[#0a0a0a] w-fit border border-zinc-800 group-hover:border-[#E1147B]/50 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-black uppercase mb-4 tracking-wide group-hover:text-[#E1147B] transition-colors">{service.title}</h3>
                <p className="text-zinc-500 leading-relaxed font-medium">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ABOUT & STANDARDS (Based on KairoSec About Split Layout) */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left side: The Mission */}
            <div className="lg:col-span-5 bg-zinc-900/30 p-10 border border-zinc-800 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-10">
                 <Sparkles size={120} style={{ color: PINK }} />
               </div>
               <h2 className="text-4xl font-black uppercase mb-8 leading-none">The <span style={{ color: PINK }}>KairoClean</span> Standard</h2>
               <p className="text-zinc-300 leading-relaxed mb-6 italic text-lg font-light">
                 "We've brought the same tactical precision from our security background into the cleaning industry. Every corner, every surface, every time."
               </p>
               <p className="text-zinc-400 leading-relaxed mb-10">
                 KairoClean was built to cater to clients who demand more than just a surface-level wipe down. We provide an elite service tailored precisely to residential and commercial requirements.
               </p>
               <div className="space-y-4">
                  {['Flexible Scheduling', 'Fully Insured', 'Vetted Professionals'].map(item => (
                    <div key={item} className="flex items-center gap-3 font-bold uppercase tracking-widest text-xs">
                      <CheckCircle2 size={18} style={{ color: PINK }} /> {item}
                    </div>
                  ))}
               </div>
            </div>

            {/* Right side: 2x2 Grid (Process/Values) */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
               {standards.map((s, i) => (
                 <div key={i} className="bg-[#0d0d0d] p-8 border border-zinc-800 flex flex-col items-center text-center group hover:bg-zinc-900/50 transition-colors">
                   <div className="mb-4 text-[#E1147B] group-hover:scale-110 transition-transform">
                     {s.icon}
                   </div>
                   <h4 className="text-xl font-black uppercase tracking-widest mb-2">{s.title}</h4>
                   <p className="text-zinc-500 text-xs font-bold leading-relaxed">{s.desc}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. BOOKING FORM (Based on KairoSec Join Form Layout) */}
      <section id="book" className="py-24 bg-[#0d0d0d] border-t border-white/5 px-6 italic">
        <div className="container mx-auto max-w-4xl">
           <div className="bg-[#0a0a0a] p-10 md:p-16 border border-[#E1147B]/30 shadow-[0_0_50px_rgba(225,20,123,0.1)]">
              <h2 className="text-4xl md:text-5xl font-black uppercase mb-4 text-center">Book Your <span style={{ color: PINK }}>Clean</span></h2>
              <p className="text-zinc-500 text-center mb-12 uppercase tracking-widest text-sm font-bold underline decoration-[#E1147B]">Get a free quote within 24 hours</p>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest mb-2 text-[#E1147B]">Full Name</label>
                    <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-zinc-900/50 border border-zinc-800 p-4 focus:border-[#E1147B] outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest mb-2 text-[#E1147B]">Phone Number</label>
                    <input type="tel" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full bg-zinc-900/50 border border-zinc-800 p-4 focus:border-[#E1147B] outline-none transition-colors" />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest mb-2 text-[#E1147B]">Service Required</label>
                  <select required value={formData.serviceType} onChange={(e) => setFormData({...formData, serviceType: e.target.value})} className="w-full bg-zinc-900/50 border border-zinc-800 p-4 focus:border-[#E1147B] outline-none transition-colors appearance-none">
                    <option value="">Select Service</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest mb-2 text-[#E1147B]">Tell us about the property</label>
                  <textarea rows={4} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full bg-zinc-900/50 border border-zinc-800 p-4 focus:border-[#E1147B] outline-none transition-colors resize-none" placeholder="Number of rooms, specific requirements..."></textarea>
                </div>

                <button type="submit" className="w-full py-5 font-black uppercase tracking-[0.3em] transition-all hover:tracking-[0.5em] shadow-[0_0_30px_rgba(225,20,123,0.2)]" style={{ backgroundColor: PINK, color: '#fff' }}>
                  Send Request
                </button>
              </form>
           </div>
        </div>
      </section>

      {/* 5. CONTACT & FOOTER */}
      <footer className="py-20 px-6 border-t border-white/5">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-16">
            <div className="flex flex-col items-center">
              <Phone size={24} className="mb-4" style={{ color: PINK }} />
              <p className="text-xl font-black">033 0043 1631</p>
            </div>
            <div className="flex flex-col items-center border-y md:border-y-0 md:border-x border-white/10 py-8 md:py-0">
              <Mail size={24} className="mb-4" style={{ color: PINK }} />
              <p className="text-xl font-black">Enquiries@kairosecurity.co.uk</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin size={24} className="mb-4" style={{ color: PINK }} />
              <p className="text-xl font-black uppercase tracking-widest">United Kingdom</p>
            </div>
          </div>
          
          <div className="text-center pt-12 border-t border-white/5 opacity-50">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill={PINK} stroke={PINK} />)}
            </div>
            <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-4">WWW.KAIROSECURITY.CO.UK</p>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: PINK }}>Kairo Security Ltd (Clean Division)</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const cleaningServices = [
  { icon: <Building2 />, title: "Office Cleaning", description: "Elite janitorial services for corporate spaces, ensuring your office reflects your professionalism." },
  { icon: <Home />, title: "End-of-Tenancy", description: "Military-grade deep cleaning to guarantee deposit returns and landlord satisfaction." },
  { icon: <ShieldCheck />, title: "Commercial", description: "Heavy-duty cleaning for warehouses, retail, and industrial sites with tactical efficiency." },
  { icon: <Brush />, title: "Domestic", description: "Bespoke cleaning for high-end residential properties. We treat your home like a showroom." },
  { icon: <PartyPopper />, title: "After-Event", description: "Rapid response cleaning for venues and parties. We vanish the mess while you recover." },
  { icon: <Trash2 />, title: "One-Off Deep", description: "The ultimate reset. A top-to-bottom blast that clears every missed corner and hidden dust." }
];

const standards = [
  { icon: <Clock size={32} />, title: "Arrival", desc: "Respectful parking, safety hazard checks, and clear communication on start." },
  { icon: <Sparkles size={32} />, title: "Order", desc: "Top-to-bottom methodology: Declutter, Dust, Clean, Vacuum, then Mop last." },
  { icon: <CheckCircle2 size={32} />, title: "Final Check", desc: "Streak-free glass, equipment inventory, and property security verification." },
  { icon: <Users size={32} />, title: "Trust", desc: "Only vetted professionals trained in the KairoClean tactical standard." }
];ß