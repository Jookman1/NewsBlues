import React from 'react';
import { Shield, Users, Camera, UserCheck } from 'lucide-react';
import ServiceCard from './ServiceCard';
import ScrollReveal from './ScrollReveal';

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
    icon: UserCheck,
    title: "Close Protection & Residential",
    description: "Specialised close protection services and residential security for ultimate safety and privacy."
  },
  {
    icon: UserCheck,
    title: "Key Holding & Alarm Response",
    description: "Locks & Unlocks, Site Patrols, VPI (Vacant Property Inspections."
  },
  {
    icon: UserCheck,
    title: "Cleaning Services",
    description: "Commercial Cleaning, Deep Cleaning, Domestic Cleaning, End of tenacy & Residental Cleaning"
  }
];

export default function ServicesSection() {
  return (
    <div id="services" className="py-20 bg-black/95">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
}