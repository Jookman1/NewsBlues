import React from 'react';
import { Sparkles } from 'lucide-react';
import kairosecLogo from '../assets/image0.png';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  brand?: 'kairosec' | 'kairoclean';
}

export default function Logo({ className = '', size = 'md', brand = 'kairosec' }: LogoProps) {
  const sizes = {
    sm: 'h-10',
    md: 'h-16',
    lg: 'h-28',
    xl: 'h-40',
  };

  if (brand === 'kairoclean') {
    const iconSizes = {
      sm: 24,
      md: 40,
      lg: 80,
      xl: 120,
    };
    return (
      <Sparkles
        size={iconSizes[size]}
        className={`text-pink-400 drop-shadow-2xl ${className}`}
        strokeWidth={1.5}
      />
    );
  }

  return (
    <img
      src={kairosecLogo}
      alt="Kairosec Logo"
      className={`${sizes[size]} w-auto object-contain drop-shadow-2xl ${className}`}
    />
  );
}
