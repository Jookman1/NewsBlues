import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SpongeWipeLoader({ onComplete }: { onComplete: () => void }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const completeTimer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => onComplete(), 300);
    }, 1200);

    return () => {
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  const WindowCleaner = () => (
    <svg width="120" height="140" viewBox="0 0 120 140" className="drop-shadow-2xl">
      <defs>
        <linearGradient id="squeegeeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#1f2937', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#374151', stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      <rect x="10" y="10" width="100" height="100" rx="8" fill="#64748b" />
      <rect x="15" y="15" width="90" height="90" fill="#e5e7eb" />

      <ellipse cx="35" cy="35" rx="12" ry="14" fill="#9ca3af" opacity="0.4" />
      <ellipse cx="75" cy="45" rx="15" ry="18" fill="#9ca3af" opacity="0.5" />
      <circle cx="50" cy="70" r="10" fill="#9ca3af" opacity="0.35" />

      <rect x="20" y="75" width="60" height="22" rx="4" fill="url(#squeegeeGrad)" />
      <rect x="22" y="77" width="56" height="3" fill="#fbbf24" />

      <line x1="50" y1="75" x2="45" y2="50" stroke="#1f2937" strokeWidth="3" />
      <circle cx="50" cy="45" r="6" fill="#1f2937" />
    </svg>
  );

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] pointer-events-none overflow-hidden flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-slate-400 via-slate-300 to-slate-400"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          />

          <motion.div
            className="relative w-80 h-96 will-change-transform"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          >
            <motion.div
              className="absolute inset-0 bg-white/80 rounded-lg shadow-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            />

            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-slate-400/50 to-transparent rounded-lg"
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
            />

            <motion.div
              className="absolute -top-12 left-1/2 -translate-x-1/2 will-change-transform"
              initial={{ y: -150, rotate: -45 }}
              animate={[
                { y: -150, rotate: -45 },
                { y: 0, rotate: 0, x: -80 },
                { y: 0, rotate: 0, x: 80 },
                { y: 380, rotate: 45 }
              ]}
              transition={{
                duration: 1.2,
                times: [0, 0.25, 0.75, 1],
                ease: 'easeInOut'
              }}
            >
              <WindowCleaner />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
