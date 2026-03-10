import React from 'react';
import { Lock, Sparkles } from 'lucide-react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  brand?: 'kairosec' | 'kairoclean';
}

export default function Logo({ className = '', size = 'md', brand = 'kairosec' }: LogoProps) {
  const sizes = {
    sm: 24,
    md: 40,
    lg: 80,
    xl: 120,
  };

  const iconSize = sizes[size];

  if (brand === 'kairoclean') {
    return (
      <Sparkles
        size={iconSize}
        className={`text-pink-400 drop-shadow-2xl ${className}`}
        strokeWidth={1.5}
      />
    );
  }

  return (
    <Lock
      size={iconSize}
      className={`text-blue-400 drop-shadow-2xl ${className}`}
      strokeWidth={1.5}
    />
  );
}
