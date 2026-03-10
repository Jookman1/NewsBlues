import React from 'react';
import { Sparkles } from 'lucide-react';
import { useLocation } from 'react-router-dom';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  brand?: 'kairosec' | 'kairoclean';
}

export default function Logo({ className = '', size = 'md', brand = 'kairosec' }: LogoProps) {
  const location = useLocation();
  const isCleanPage = location.pathname.includes('clean');
  const effectiveBrand = brand === 'kairosec' && isCleanPage ? 'kairoclean' : brand;

  const textSizes = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-3xl',
    xl: 'text-4xl',
  };

  const iconSizes = {
    sm: 24,
    md: 40,
    lg: 80,
    xl: 120,
  };

  if (effectiveBrand === 'kairoclean') {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <Sparkles
          size={iconSizes[size]}
          className="text-pink-400 drop-shadow-2xl"
          strokeWidth={1.5}
        />
        <span className={`${textSizes[size]} font-black uppercase text-pink-400 drop-shadow-2xl`}>
          KairoClean
        </span>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className={`${textSizes[size]} font-black uppercase text-white drop-shadow-2xl tracking-tight`}>
        <span className="text-white">Kairo</span><span className="text-blue-400">Sec</span>
      </span>
    </div>
  );
}
