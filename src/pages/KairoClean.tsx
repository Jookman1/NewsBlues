import React, { useState } from 'react';
import {
  Phone, Mail, MapPin, Sparkles, Star, ChevronRight,
  Shield, Users, Building2, Check, Clock, Home,
  Trash2, PartyPopper, Send, CheckCircle
} from 'lucide-react';
import kairoCleanLogo from '../assets/image1_(2).png';
import Navigation from '../components/Navigation';
import heroLogo from '../assets/image copy copy.png';
import kairocleanHeroBg from '../assets/kairoclean-hero-new.png';
import { getPatternBackground } from '../utils/theme';

const services = [
  'OFFICE CLEANING',
  'END-OF-TENANCY',
  'COMMERCIAL',
  'DOMESTIC CLEAN',
  'AFTER-EVENT',
  'DEEP CLEANING'
];

export default function KairoClean() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.target as HTMLFormElement;
      const formDataToSubmit = new FormData(form);

      const response = await fetch('https://formsubmit.co/Enquiries@kairosecurity.co.uk', {
        method: 'POST',
        body: formDataToSubmit
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const patternStyle = getPatternBackground('kairoclean');

  if (isSubmitted) {
    return (
      <>
        <div
          className="w-full text-white min-h-screen relative font-sans selection:bg-[#FF66C4]"
          data-brand="kairoclean"
          style={{
            backgroundColor: patternStyle.backgroundColor,
            backgroundImage: patternStyle.backgroundImage,
            backgroundSize: patternStyle.backgroundSize,
            backgroundAttachment: patternStyle.backgroundAttachment,
          }}
        >
          <Navigation />
          <section id="contact" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
              <div className="max-w-2xl mx-auto text-center">
                <div className="bg-black/40 backdrop-blur-md border border-[#CF66C4]/30 rounded-xl p-12">
                  <CheckCircle className="h-16 w-16 text-[#CF66C4] mx-auto mb-6" />
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Thank You!
                  </h2>
                  <p className="text-xl text-gray-300 mb-6">
                    Thanks for reaching out! We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-[#CF66C4] hover:bg-[#E377D4] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }

  return (
    <>
      <div
        className="w-full text-white min-h-screen relative font-sans selection:bg-[#FF66C4]"
        data-brand="kairoclean"
        style={{
          backgroundColor: patternStyle.backgroundColor,
          backgroundImage: patternStyle.backgroundImage,
          backgroundSize: patternStyle.backgroundSize,
          backgroundAttachment: patternStyle.backgroundAttachment,
        }}
      >
        <Navigation />

      {/* 2. HERO */}
      <section id="hero" className="px-6 py-12 pt-32 text-center relative overflow-hidden">
        {/* Hero background image */}
        <div
          className="absolute inset-0 bg-cover bg-center pointer-events-none"
          style={{
            backgroundImage: `url(${kairocleanHeroBg})`,
            filter: 'blur(3px) brightness(0.45) saturate(0.9)',
          }}
        />
        <div className="max-w-5xl mx-auto relative z-10">
          {/* --- ADDED IMAGE HERE --- */}
          <img
            src={kairoCleanLogo}
            alt="KairoClean Logo"
            className="h-32 w-auto mx-auto mb-8 object-contain"
          />

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase leading-[1] tracking-tight mb-8 italic">
            Where <span className="text-[#CF66C4]">Precision</span><br />
            Meets <span className="text-[#CF66C4]">Perfection</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-12 italic font-light tracking-wide">
            Elite cleaning standards for residential and commercial properties.
          </p>
          <div className="flex justify-center gap-6">
            <a href="#book-form" className="px-12 py-5 font-black uppercase tracking-widest text-sm transition-all bg-[#CF66C4] text-white hover:bg-white hover:text-[#CF66C4] shadow-[0_0_20px_rgba(207,102,196,0.3)]">
              Request Quote
            </a>
          </div>
        </div>
      </section>
      {/* 3. SERVICES (3x2 Grid) */}
      <section id="services" className="px-6 py-24 relative">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-black uppercase mb-16 tracking-tight italic">Our <span className="text-[#CF66C4]">Services</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Office Cleaning', desc: 'Elite janitorial services for corporate spaces.', icon: Building2 },
              { title: 'End-of-tenancy', desc: 'Precision deep cleans for property readiness.', icon: Home },
              { title: 'Commercial', desc: 'Heavy-duty maintenance for warehouses and retail.', icon: Shield },
              { title: 'Domestic Clean', desc: 'Showroom-standard cleaning for high-end homes.', icon: Sparkles },
              { title: 'After-event', desc: 'Rapid-mess removal for venues and parties.', icon: Clock },
              { title: 'Deep Cleaning', desc: 'Intensive top-to-bottom sanitization.', icon: Check },
            ].map((s, i) => (
              <div key={i} className="p-10 border border-zinc-800 bg-black/40 backdrop-blur-md hover:border-[#CF66C4] hover:bg-black/60 transition-all group text-left">
                <s.icon className="w-10 h-10 mb-6 group-hover:scale-110 transition-transform text-[#CF66C4]" />
                <h3 className="text-2xl font-black uppercase mb-4 tracking-wide group-hover:text-[#CF66C4] transition-colors">{s.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ABOUT (Split Layout) */}
      <section id="about" className="px-6 py-24 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 p-12 border border-zinc-800 bg-black/40 backdrop-blur-md shadow-xl hover:border-[#CF66C4] transition-all">
            <h2 className="text-4xl font-black uppercase mb-8 leading-none italic text-[#CF66C4]">The Standard</h2>
            <p className="text-zinc-300 mb-8 italic text-lg leading-relaxed font-light">
              "We've brought the tactical discipline of Kairo Security to the cleaning industry. No missed corners. No compromise."
            </p>
            <div className="space-y-5 pt-8 border-t border-zinc-800">
              <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest"><Check size={18} className="text-[#CF66C4]" /> Fully Insured</div>
              <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest"><Check size={18} className="text-[#CF66C4]" /> Vetted Professionals</div>
              <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest"><Check size={18} className="text-[#CF66C4]" /> Flexible Scheduling</div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: 'Tactical Prep', sub: 'Site Assessment', icon: Clock },
              { label: 'Top-Down', sub: 'Systematic Method', icon: Sparkles },
              { label: 'Elite Staff', sub: 'Background Checks', icon: Users },
              { label: 'Integrity', sub: 'Secure Properties', icon: Shield }
            ].map((v, i) => (
              <div key={i} className="p-10 border border-zinc-800 bg-black/40 backdrop-blur-md flex flex-col items-center text-center group hover:bg-black/60 hover:border-[#CF66C4] transition-all">
                <v.icon className="w-10 h-10 mb-4 text-[#CF66C4]" />
                <h4 className="text-xl font-black uppercase tracking-widest mb-1">{v.label}</h4>
                <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-[0.2em]">{v.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BOOKING FORM (The Boxes are here) */}
      <section id="book-form" className="px-6 py-24 relative">
        <div className="max-w-4xl mx-auto bg-black/40 backdrop-blur-md p-10 md:p-16 border border-zinc-800 shadow-2xl relative z-10 hover:border-[#CF66C4] transition-all rounded-xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Book a Clean
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Request a quote from our elite cleaning team
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            action="https://formsubmit.co/Enquiries@kairosecurity.co.uk"
            method="POST"
            className="space-y-6"
          >
            <input type="hidden" name="_honey" style={{ display: 'none' }} />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value={window.location.origin + window.location.pathname + '#book-form'} />
            <input type="hidden" name="_subject" value="Hey, you have a message from your website KairoClean" />
            <input type="hidden" name="_template" value="table" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full bg-black/60 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#CF66C4] focus:outline-none focus:ring-1 focus:ring-[#CF66C4] transition-colors duration-200"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full bg-black/60 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#CF66C4] focus:outline-none focus:ring-1 focus:ring-[#CF66C4] transition-colors duration-200"
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-black/60 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#CF66C4] focus:outline-none focus:ring-1 focus:ring-[#CF66C4] transition-colors duration-200"
                required
                disabled={isSubmitting}
              />
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-black/60 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#CF66C4] focus:outline-none focus:ring-1 focus:ring-[#CF66C4] transition-colors duration-200"
                required
                disabled={isSubmitting}
              />
            </div>

            <div>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-black/60 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#CF66C4] focus:outline-none focus:ring-1 focus:ring-[#CF66C4] transition-colors duration-200 cursor-pointer"
                required
                disabled={isSubmitting}
              >
                <option value="">Select Service</option>
                {services.map((svc) => (
                  <option key={svc} value={svc}>
                    {svc}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-black/60 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#CF66C4] focus:outline-none focus:ring-1 focus:ring-[#CF66C4] transition-colors duration-200 resize-none"
                required
                disabled={isSubmitting}
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="group w-full bg-[#CF66C4] hover:bg-[#E377D4] disabled:bg-[#CF66C4]/40 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#CF66C4]/25 disabled:transform-none disabled:shadow-none flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </>
              )}
            </button>
          </form>
        </div>
      </section>

      {/* 6. CALL PILL */}
      <section id="contact" className="px-6 py-24 text-center relative">
        <div className="max-w-6xl mx-auto rounded-[100px] border-[4px] border-[#CF66C4] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10 mb-20 shadow-2xl hover:shadow-[0_0_80px_rgba(207,102,196,0.3)] transition-all bg-black/40 backdrop-blur-md">
          <div className="text-center md:text-left">
             <span className="block text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#CF66C4]">Direct Line</span>
             <span className="block text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#CF66C4]">For Quotes</span>
          </div>
          <div className="flex items-center gap-8">
             <Phone size={60} className="hidden sm:block text-[#CF66C4]" />
             <span className="text-5xl md:text-8xl font-black tracking-tighter drop-shadow-lg">033 0043 1631</span>
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="py-16 px-6 border-t border-white/10 relative text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-white/40 font-black tracking-[0.4em] text-xs uppercase mb-3">WWW.KAIROSECURITY.CO.UK</p>
          <div className="flex justify-center gap-2 mb-8 text-[#CF66C4]">
             {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#CF66C4" className="drop-shadow-[0_0_10px_rgba(207,102,196,0.5)]" />)}
          </div>
          <p className="font-black text-lg md:text-xl tracking-[0.3em] uppercase mb-2 text-[#CF66C4]">KAIRO SECURITY LTD</p>
          <p className="text-white/20 text-[10px] uppercase font-black tracking-widest">(Registered in England and Wales)</p>
        </div>
      </footer>

      </div>
    </>
  );
}
