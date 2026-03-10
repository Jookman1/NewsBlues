import React from 'react';
import logoImg from '../assets/logo.png';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function Logo({ className = '', size = 'md' }: LogoProps) {
  const sizes = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-24',
    xl: 'h-32',
  };

  return (
    <img
      src={logoImg}
      alt="Kairosec Logo"
      className={`${sizes[size]} w-auto object-contain ${className}`}
    />
  );
}
