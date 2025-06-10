import React from 'react';
import { Shield, Users, Camera, Home, Key, Sparkles } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

const services = [
  {
    icon: Shield,
    title: "Event Security & Stewards",
    description: "Professional security services for events, festivals, and concerts ensuring safety while maintaining a positive atmosphere."
  },
  {
    icon: Users,
    title: "Door Supervision & Retail Security",
    description: "Expert door supervision and retail security services with licensed professionals focused on customer service."
  },
  {
    icon: Camera,
    title: "Man Guarding & CCTV Operators",
    description: "24/7 CCTV monitoring and comprehensive site security solutions for complete peace of mind."
  },
  {
    icon: Home,
    title: "Close Protection & Residential",
    description: "Specialised close protection services and residential security for ultimate safety and privacy."
  },
  {
    icon: Key,
    title: "Key Holding & Alarm Response",
    description: "Locks & Unlocks, Site Patrols, VPI (Vacant Property Inspections)."
  },
  {
    icon: Sparkles,
    title: "Cleaning Services",
    description: "Commercial Cleaning, Deep Cleaning, Domestic Cleaning, End of tenancy & Residential Cleaning."
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeInUp" delay={100}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive security solutions tailored to your needs
            </p>
          </div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection 
              key={index} 
              animation="fadeInUp" 
              delay={200 + (index * 100)}
            >
              <div className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-blue-500/50 hover:bg-gray-800/70 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-500/15">
                <div className="mb-6">
                  <service.icon className="h-12 w-12 text-blue-400 group-hover:text-blue-300 transition-all duration-300 group-hover:scale-110" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-100 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};