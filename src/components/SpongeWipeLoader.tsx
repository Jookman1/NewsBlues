import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SpongeWipeLoader({ onComplete }: { onComplete: () => void }) {
  const [isLoading, setIsLoading] = useState(true);
  const [showSparkle, setShowSparkle] = useState(false);

  useEffect(() => {
    const sparkleTimer = setTimeout(() => {
      setShowSparkle(true);
    }, 2500);

    const completeTimer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => onComplete(), 500);
    }, 3200);

    return () => {
      clearTimeout(sparkleTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  const DirtySponge = () => (
    <svg width="140" height="140" viewBox="0 0 140 140" className="drop-shadow-2xl">
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
          className="fixed inset-0 z-[100] pointer-events-none bg-white flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="absolute inset-0 bg-slate-200"
            initial={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
            animate={{ clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
            transition={{
              duration: 2.5,
              ease: [0.65, 0, 0.35, 1],
            }}
          />

          <motion.div
            className="relative z-20"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <DirtySponge />
          </motion.div>

          {showSparkle && (
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.5, 1], opacity: [0, 1, 0] }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <span className="text-6xl">✨</span>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
