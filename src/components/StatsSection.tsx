import React from 'react';
import { Shield, Users, Award, Clock } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const stats = [
  { icon: Shield, value: '1000+', label: 'Events Secured' },
  { icon: Users, value: '50+', label: 'Security Professionals' },
  { icon: Award, value: '10+', label: 'Years Experience' },
  { icon: Clock, value: '24/7', label: 'Support Available' },
];

export default function StatsSection() {
  return (
    <div className="py-20 cyber-grid relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/95 to-black/90" />
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} effect={index % 2 === 0 ? 'fade-left' : 'fade-right'}>
              <div className="text-center">
                <stat.icon className="h-12 w-12 mx-auto text-primary mb-4" />
                <div className="text-3xl font-bold mb-2 neon-text">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}