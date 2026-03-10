import React from 'react';
import { Phone, Sparkles, CheckCircle2, Star, Facebook, Instagram, MessageCircle } from 'lucide-react';
import Logo from './Logo';

const KairoCleanLanding: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-[#111111] text-white overflow-hidden">
      {/* Subtle hexagon pattern overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)',
          backgroundSize: '70px 70px'
        }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div className="flex flex-col justify-center">
              {/* Logo */}
              <div className="mb-8 flex items-center gap-3">
                <Logo brand="kairoclean" size="lg" />
                <div className="w-16 h-16 border-2 border-[#E1147B] rounded-full flex items-center justify-center transform rotate-45">
                  <div className="transform -rotate-45 text-[#E1147B] text-2xl font-bold">♦</div>
                </div>
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                <span className="block text-white">Where Precision</span>
                <span className="block" style={{ color: '#E1147B' }}>Meets Perfection</span>
              </h1>

              {/* Sub-headline */}
              <p className="text-lg md:text-xl text-gray-300 font-light italic mb-8 leading-relaxed">
                Reliable cleaners with high standards & flexible bookings.
              </p>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <button className="px-8 py-4 rounded-full border-2 border-[#E1147B] bg-[#E1147B] hover:bg-[#c70a66] transition-all duration-300 font-bold text-white flex items-center gap-3 whitespace-nowrap text-sm md:text-base">
                  <Phone size={20} />
                  Call now for a free quote
                </button>
                <span className="text-2xl font-bold text-[#E1147B]">033 0043 1631</span>
              </div>
            </div>

            {/* Right Image Placeholder */}
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#E1147B]/20 via-transparent to-[#E1147B]/10 z-10"></div>
              <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                <div className="text-center">
                  <Sparkles size={80} className="mx-auto mb-4 text-[#E1147B] opacity-50" />
                  <p className="text-gray-400 text-lg">Professional Cleaner Image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-10 px-4 md:px-8 py-16 md:py-24 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Sparkles size={32} className="text-[#E1147B]" />
            <h2 className="text-4xl md:text-5xl font-bold">We Provide</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Office Cleaning',
              'End-of-tenancy Cleans',
              'Commercial Cleaning',
              'Domestic Cleaning',
              'After-event Cleaning',
              'Regular or One-off Cleans',
            ].map((service, index) => (
              <div key={index} className="flex items-center gap-4 p-6 rounded-xl border border-gray-700 hover:border-[#E1147B] transition-all duration-300 bg-gray-900/30 backdrop-blur-sm">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E1147B] flex items-center justify-center">
                  <CheckCircle2 size={20} className="text-white" strokeWidth={2.5} />
                </div>
                <span className="text-lg font-semibold">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Benefits Bar */}
      <section className="relative z-10 px-4 md:px-8 py-16 md:py-20 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
            {/* Benefits */}
            {[
              { icon: '✓', text: 'Flexible Scheduling' },
              { icon: '✓', text: 'Fully Insured' },
              { icon: '✓', text: 'Vetted Professionals' },
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-4 p-4">
                <span className="text-3xl font-bold text-[#E1147B]">{benefit.icon}</span>
                <span className="text-lg font-semibold">{benefit.text}</span>
              </div>
            ))}

            {/* Rating */}
            <div className="flex items-center gap-3 p-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={24} className="fill-[#E1147B] text-[#E1147B]" />
                ))}
              </div>
              <span className="text-lg font-semibold">5-Star Rated</span>
            </div>
          </div>
        </div>
      </section>

      {/* Social & Contact Section */}
      <section className="relative z-10 px-4 md:px-8 py-16 md:py-24 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Social */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-8">Find us on</h3>
              <div className="flex gap-6 flex-wrap">
                <a href="#" className="p-4 rounded-full border-2 border-gray-700 hover:border-[#E1147B] transition-all duration-300 hover:bg-gray-900">
                  <Facebook size={28} className="text-[#E1147B]" />
                </a>
                <a href="#" className="p-4 rounded-full border-2 border-gray-700 hover:border-[#E1147B] transition-all duration-300 hover:bg-gray-900">
                  <Instagram size={28} className="text-[#E1147B]" />
                </a>
                <a href="#" className="p-4 rounded-full border-2 border-gray-700 hover:border-[#E1147B] transition-all duration-300 hover:bg-gray-900">
                  <MessageCircle size={28} className="text-[#E1147B]" />
                </a>
                <a href="#" className="p-4 rounded-full border-2 border-gray-700 hover:border-[#E1147B] transition-all duration-300 hover:bg-gray-900">
                  <svg className="w-7 h-7 text-[#E1147B]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right: Contact Info */}
            <div className="space-y-4 text-center md:text-right">
              <p className="text-gray-400 text-sm tracking-widest uppercase">Contact Information</p>
              <div className="space-y-2">
                <p className="text-lg font-semibold">WWW.KAIROSECURITY.CO.UK</p>
                <p className="text-lg font-semibold">Enquiries@kairosecurity.co.uk</p>
                <p className="text-lg font-semibold">KAIRO SECURITY LTD</p>
              </div>
            </div>
          </div>

          {/* Footer Divider */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <p className="text-center text-gray-500 text-sm">
              © 2024 Kairo Security Ltd. All rights reserved. | Professional cleaning services
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KairoCleanLanding;
