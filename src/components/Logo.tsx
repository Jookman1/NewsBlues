import React from 'react';
import kairosecImg from '../assets/image0.png';
import kairocleanImg from '../assets/image1.png';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  brand?: 'kairosec' | 'kairoclean';
}

export default function Logo({ className = '', size = 'md', brand = 'kairosec' }: LogoProps) {
  const sizes = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-24',
    xl: 'h-32',
  };

  const logo = brand === 'kairoclean' ? kairocleanImg : kairosecImg;
  const alt = brand === 'kairoclean' ? 'Kairoclean Logo' : 'Kairosec Logo';

  return (
    <img
      src={logo}
      alt={alt}
      className={`${sizes[size]} w-auto object-contain ${className}`}
    />
  );
}
