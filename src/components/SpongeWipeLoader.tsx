import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SpongeWipeLoader({ onComplete }: { onComplete: () => void }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const completeTimer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => onComplete(), 400);
    }, 1800);

    return () => {
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  const DirtySponge = () => (
    <svg width="200" height="200" viewBox="0 0 140 140" className="drop-shadow-2xl">
      <defs>
        <filter id="dirtySurface" x="-50%" y="-50%" width="200%" height="200%">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" result="noise" seed="2" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>

      <rect x="20" y="20" width="100" height="100" rx="15" fill="#F4D03F" filter="url(#dirtySurface)" />

      <g opacity="0.15">
        <circle cx="45" cy="35" r="8" fill="#3D2817" />
        <circle cx="92" cy="52" r="6" fill="#3D2817" />
        <circle cx="35" cy="78" r="7" fill="#3D2817" />
        <circle cx="105" cy="85" r="9" fill="#3D2817" />
        <circle cx="65" cy="110" r="6" fill="#3D2817" />
        <ellipse cx="50" cy="65" rx="10" ry="6" fill="#3D2817" opacity="0.12" />
        <path d="M 70 40 Q 75 45 70 50" stroke="#3D2817" strokeWidth="2" fill="none" opacity="0.15" />
        <path d="M 30 95 Q 35 98 40 95" stroke="#3D2817" strokeWidth="2" fill="none" opacity="0.15" />
      </g>

      <text x="70" y="95" textAnchor="middle" fill="#FFF" fontSize="40" fontWeight="bold" opacity="0.3">✓</text>
    </svg>
  );

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] pointer-events-none overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            className="absolute inset-0 bg-slate-300"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1.6, ease: 'easeInOut' }}
          />

          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-slate-200 via-slate-300 to-slate-200 opacity-100"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1.6, ease: 'easeInOut' }}
          />

          <motion.div
            className="absolute top-0 left-0 z-20"
            initial={{
              x: '-100vw',
              y: '-100vh'
            }}
            animate={[
              { x: '100vw', y: '-100vh' },
              { x: '100vw', y: '50vh' },
              { x: '-100vw', y: '50vh' },
              { x: '-100vw', y: '100vh' }
            ]}
            transition={{
              duration: 1.6,
              times: [0, 0.33, 0.66, 1],
              ease: 'easeInOut'
            }}
          >
            <DirtySponge />
          </motion.div>

          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.3, 0] }}
            transition={{ duration: 1.6, ease: 'easeInOut' }}
            style={{
              background: 'radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(255,255,255,0.6) 0%, transparent 70%)'
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
