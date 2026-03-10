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
    <svg width="140" height="180" viewBox="0 0 140 180" className="drop-shadow-2xl">
      <defs>
        <linearGradient id="poleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#d1d5db', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#f3f4f6', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#d1d5db', stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      <line x1="70" y1="10" x2="70" y2="130" stroke="url(#poleGrad)" strokeWidth="8" strokeLinecap="round" />

      <rect x="45" y="30" width="50" height="50" rx="6" fill="#64748b" />
      <rect x="50" y="35" width="40" height="40" fill="#e5e7eb" />

      <ellipse cx="65" cy="50" rx="8" ry="10" fill="#9ca3af" opacity="0.5" />
      <ellipse cx="85" cy="58" rx="10" ry="12" fill="#9ca3af" opacity="0.4" />
      <circle cx="75" cy="75" r="7" fill="#9ca3af" opacity="0.35" />

      <ellipse cx="70" cy="120" rx="26" ry="16" fill="#ef4444" opacity="0.9" />
      <ellipse cx="70" cy="115" rx="24" ry="14" fill="#f87171" />

      <g opacity="0.8">
        <ellipse cx="50" cy="115" rx="4" ry="8" fill="#60a5fa" />
        <ellipse cx="90" cy="115" rx="4" ry="8" fill="#60a5fa" />
        <ellipse cx="60" cy="125" rx="3" ry="6" fill="#60a5fa" />
        <ellipse cx="80" cy="125" rx="3" ry="6" fill="#60a5fa" />
      </g>

      <rect x="35" y="135" width="70" height="6" rx="3" fill="#6b7280" />
      <rect x="35" y="145" width="70" height="6" rx="3" fill="#6b7280" />
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
