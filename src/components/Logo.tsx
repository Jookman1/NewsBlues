import React from 'react';

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
      src="https://i.imgur.com/CHctNu1.png" // Direct image link
      alt="Kairo Security Logo"
      className={`${sizes[size]} w-auto object-contain ${className}`}
    />
  );
}
