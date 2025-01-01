import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="relative group">
      <div className="absolute inset-0.5 bg-gradient-to-r from-primary to-primary-dark rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
      <div className="relative bg-black p-8 rounded-lg hover-glow">
        <div className="relative scanner mb-6">
          <Icon className="h-12 w-12 text-primary" />
        </div>
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
          {description}
        </p>
      </div>
    </div>
  );
}