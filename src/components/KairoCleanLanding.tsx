import React from 'react';
import { Phone, Star } from 'lucide-react';
import Logo from './Logo';

const KairoCleanLanding: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-[#111111] text-white overflow-hidden relative">
      {/* Hexagon pattern background */}
      <div className="fixed inset-0 pointer-events-none opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hexagon" x="0" y="0" width="100" height="115.5" patternUnits="userSpaceOnUse">
              <path d="M50,0 L100,28.875 L100,86.625 L50,115.5 L0,86.625 L0,28.875 Z" fill="none" stroke="rgba(225,20,123,0.1)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagon)"/>
        </svg>
      </div>

      {/* Sweeping Pink Wave Separator */}
      <div className="fixed top-1/2 left-0 right-0 h-32 pointer-events-none z-20">
        <svg className="w-full h-full" viewBox="0 0 1200 200" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#E1147B', stopOpacity: 0.3 }} />
              <stop offset="100%" style={{ stopColor: '#E1147B', stopOpacity: 0 }} />
            </linearGradient>
          </defs>
          <path
            d="M0,50 Q300,0 600,50 T1200,50 L1200,200 L0,200 Z"
            fill="url(#waveGradient)"
          />
          <path
            d="M0,80 Q300,30 600,80 T1200,80 L1200,200 L0,200 Z"
            fill="rgba(225,20,123,0.15)"
          />
        </svg>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="px-4 md:px-12 py-20 md:py-32 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">

              {/* Left Side: QR Code & Socials */}
              <div className="flex flex-col gap-12">
                {/* QR Code Placeholder */}
                <div className="flex flex-col items-center">
                  <p className="text-[#E1147B] font-bold text-sm tracking-widest mb-4 uppercase">Scan me</p>
                  <div className="w-40 h-40 md:w-48 md:h-48 border-2 border-[#E1147B] rounded-lg flex items-center justify-center bg-gray-900/30 backdrop-blur-sm hover:border-pink-400 transition-colors duration-300">
                    <div className="text-center">
                      <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-2 border-2 border-dashed border-[#E1147B] flex items-center justify-center rounded">
                        <span className="text-[#E1147B] text-xs">QR Code</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Socials & Stars Section */}
                <div className="flex flex-col items-center gap-6">
                  <div className="text-center">
                    <p className="text-white font-semibold text-sm mb-4">Find us on...</p>
                    <div className="flex gap-4 justify-center">
                      {/* TikTok */}
                      <div className="w-12 h-12 border-2 border-gray-600 rounded hover:border-[#E1147B] transition-colors duration-300 flex items-center justify-center bg-gray-900/30 cursor-pointer">
                        <svg className="w-6 h-6 text-[#E1147B]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.66 0q0-1.34 1-2.3a2.88 2.88 0 0 1 4.66 0v-3.34a9.15 9.15 0 0 0-5.85 1.65A7.59 7.59 0 0 0 2 16.24a7.71 7.71 0 0 0 2.14 5.45A7.68 7.68 0 0 0 9.55 23a7.59 7.59 0 0 0 7.59-7.5q0-.61 0-1.24v-8.36a10 10 0 0 0 5.86 1.65z"/>
                        </svg>
                      </div>
                      {/* Facebook */}
                      <div className="w-12 h-12 border-2 border-gray-600 rounded hover:border-[#E1147B] transition-colors duration-300 flex items-center justify-center bg-gray-900/30 cursor-pointer">
                        <svg className="w-6 h-6 text-[#E1147B]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </div>
                      {/* Instagram */}
                      <div className="w-12 h-12 border-2 border-gray-600 rounded hover:border-[#E1147B] transition-colors duration-300 flex items-center justify-center bg-gray-900/30 cursor-pointer">
                        <svg className="w-6 h-6 text-[#E1147B]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.117.6c-.779.263-1.618.634-2.589 1.605-.975.97-1.46 1.84-1.604 2.589-.27.8-.47 1.67-.57 3.015C.039 8.333.024 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.528 2.91.26.79.645 1.629 1.604 2.589.961.961 1.816 1.333 2.589 1.604 1.09.3 2.148.528 3.946.604 1.277.06 1.686.075 4.947.075s3.667-.015 4.947-.072c1.777-.06 2.856-.261 3.946-.528.79-.27 1.628-.634 2.589-1.604.961-.961 1.46-1.8 1.604-2.589.27-.96.47-1.626.57-3.015.06-1.28.075-1.689.075-4.948 0-3.259-.015-3.667-.072-4.947-.06-1.277-.261-2.148-.528-2.91-.27-.79-.634-1.629-1.604-2.589-.961-.961-1.8-1.333-2.589-1.604-1.277-.3-2.856-.531-4.946-.604C15.667.039 15.259.024 12 0zm0 2.16c3.203 0 3.585.009 4.849.070 1.171.054 1.805.244 2.227.408.562.217 1.273.645 1.833 1.204.56.56.987 1.271 1.204 1.833.164.422.354 1.056.408 2.227.06 1.264.07 1.646.07 4.849s-.01 3.585-.07 4.849c-.054 1.171-.244 1.805-.408 2.227-.217.562-.645 1.273-1.204 1.833-.56.56-1.271.987-1.833 1.204-.422.164-1.056.354-2.227.408-1.264.06-1.646.07-4.849.07s-3.585-.01-4.849-.07c-1.171-.054-1.805-.244-2.227-.408-.562-.217-1.273-.645-1.833-1.204-.56-.56-.987-1.271-1.204-1.833-.164-.422-.354-1.056-.408-2.227-.06-1.264-.07-1.646-.07-4.849s.01-3.585.07-4.849c.054-1.171.244-1.805.408-2.227.217-.562.645-1.273 1.204-1.833.56-.56 1.271-.987 1.833-1.204.422-.164 1.056-.354 2.227-.408 1.264-.06 1.646-.07 4.849-.07zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
                        </svg>
                      </div>
                      {/* WhatsApp */}
                      <div className="w-12 h-12 border-2 border-gray-600 rounded hover:border-[#E1147B] transition-colors duration-300 flex items-center justify-center bg-gray-900/30 cursor-pointer">
                        <svg className="w-6 h-6 text-[#E1147B]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.869 1.171c-1.493.821-2.771 1.993-3.393 3.362C3.467 11.97 3.27 13.456 3.27 15.01c0 1.554.196 3.04.625 4.41.429 1.365 1.054 2.531 1.875 3.491 1.772 1.932 4.199 3.12 6.866 3.12 2.667 0 5.094-1.188 6.866-3.12.821-.96 1.446-2.126 1.875-3.491.429-1.37.625-2.856.625-4.41 0-1.554-.196-3.04-.625-4.41-.429-1.365-1.054-2.532-1.875-3.492-1.772-1.932-4.199-3.12-6.866-3.12zm5.972 7.403c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-2 justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={24} className="fill-[#E1147B] text-[#E1147B]" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side: Hero Content & Logo */}
              <div className="flex flex-col justify-center items-end text-right">
                {/* Main Headline - All in Pink */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8" style={{ color: '#E1147B' }}>
                  Where Precision
                  <br />
                  Meets Perfection
                </h1>

                {/* Sub-headline */}
                <p className="text-lg md:text-xl text-gray-300 font-light italic mb-12 leading-relaxed max-w-md">
                  Reliable cleaners with high standards & flexible bookings.
                </p>

                {/* Diamond Logo Placeholder */}
                <div className="mb-12 flex justify-end w-full">
                  <div className="w-48 h-48 md:w-64 md:h-64 border-4 border-[#E1147B] rounded-lg transform rotate-45 flex items-center justify-center bg-gray-900/30 backdrop-blur-sm hover:border-pink-400 transition-colors duration-300">
                    <div className="transform -rotate-45 text-center">
                      <div className="text-[#E1147B] text-6xl font-bold mb-2">♦</div>
                      <p className="text-[#E1147B] text-sm font-semibold">Logo Here</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section with Pink Wave */}
        <section className="px-4 md:px-12 py-32 md:py-40">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left: Image Placeholder */}
              <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#E1147B]/20 via-transparent to-[#E1147B]/10 z-10"></div>
                <div className="absolute inset-0 bg-gray-800 flex items-center justify-center border-2 border-gray-700">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full border-2 border-[#E1147B] mx-auto mb-4 flex items-center justify-center">
                      <span className="text-[#E1147B] text-4xl">✓</span>
                    </div>
                    <p className="text-gray-400 text-lg">Professional Cleaner Image</p>
                  </div>
                </div>
              </div>

              {/* Right: Services List */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-12">We Provide</h2>
                <ul className="space-y-6">
                  {[
                    'Office Cleaning',
                    'End-of-tenancy Cleans',
                    'Commercial Cleaning',
                    'Domestic Cleaning',
                    'After-event Cleaning',
                    'Regular or One-off Cleans',
                  ].map((service, index) => (
                    <li key={index} className="flex items-center gap-4 text-xl">
                      <span className="text-[#E1147B] font-bold text-2xl">●</span>
                      <span className="text-white font-semibold">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Full Width Pill */}
        <section className="px-4 md:px-12 py-24">
          <div className="max-w-7xl mx-auto">
            <button className="w-full px-8 md:px-12 py-6 md:py-8 rounded-full border-3 border-[#E1147B] hover:bg-[#E1147B]/5 transition-all duration-300 flex items-center justify-between">
              <span className="text-xl md:text-2xl font-bold text-white flex items-center gap-4">
                <Phone size={32} className="text-[#E1147B]" />
                Call now for a free quote
              </span>
              <span className="text-3xl md:text-4xl font-bold" style={{ color: '#E1147B' }}>
                033 0043 1631
              </span>
            </button>
          </div>
        </section>

        {/* Footer Contact Info */}
        <section className="px-4 md:px-12 py-12 border-t border-gray-800">
          <div className="max-w-7xl mx-auto text-center space-y-2">
            <p className="text-white font-semibold">WWW.KAIROSECURITY.CO.UK</p>
            <p className="text-gray-400">Enquiries@kairosecurity.co.uk</p>
            <p className="text-gray-500 text-sm mt-4">KAIRO SECURITY LTD</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default KairoCleanLanding;
