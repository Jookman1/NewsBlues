import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SpongeWipeLoader({ onComplete }: { onComplete: () => void }) {
  const [isLoading, setIsLoading] = useState(true);
  const brushHeight = 80;

  useEffect(() => {
    const completeTimer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => onComplete(), 500);
    }, 3000);

    return () => {
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  const Brush = () => (
    <svg width="120" height="140" viewBox="0 0 120 140" className="drop-shadow-2xl">
      <defs>
        <linearGradient id="handleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#92400e', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#b45309', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#92400e', stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      <rect x="35" y="0" width="50" height="40" rx="6" fill="url(#handleGrad)" />
      <circle cx="60" cy="20" r="18" fill="#a16207" opacity="0.6" />

      <line x1="45" y1="35" x2="45" y2="65" stroke="#b45309" strokeWidth="4" strokeLinecap="round" />
      <line x1="60" y1="35" x2="60" y2="65" stroke="#b45309" strokeWidth="4" strokeLinecap="round" />
      <line x1="75" y1="35" x2="75" y2="65" stroke="#b45309" strokeWidth="4" strokeLinecap="round" />

      <g>
        {[0, 5, 10, 15, 20, 25, 30].map((offset) => (
          <line key={offset} x1={30 + offset} y1="65" x2={25 + offset} y2="130" stroke="#f59e0b" strokeWidth="3" opacity="0.9" />
        ))}
      </g>

      <ellipse cx="60" cy="75" rx="28" ry="12" fill="#fbbf24" opacity="0.8" />
      <ellipse cx="60" cy="90" rx="26" ry="20" fill="#fcd34d" opacity="0.7" />
      <ellipse cx="60" cy="110" rx="24" ry="18" fill="#fde047" opacity="0.6" />
    </svg>
  );

  const Grass = ({ x, y }: { x: number; y: number }) => (
    <svg width="12" height="16" viewBox="0 0 12 16" className="absolute pointer-events-none">
      <path d="M 2 16 Q 1 12 2 8 L 2 0" stroke="#16a34a" strokeWidth="1.5" fill="none" />
      <path d="M 6 16 Q 5 10 6 4 L 6 0" stroke="#22c55e" strokeWidth="1.5" fill="none" />
      <path d="M 10 16 Q 11 12 10 8 L 10 0" stroke="#16a34a" strokeWidth="1.5" fill="none" />
    </svg>
  );

  const Dirt = ({ x, y }: { x: number; y: number }) => (
    <div
      className="absolute w-3 h-3 bg-amber-800 rounded-full opacity-70"
      style={{ left: x, top: y }}
    />
  );

  const Spider = ({ x, y }: { x: number; y: number }) => (
    <svg width="16" height="16" viewBox="0 0 16 16" className="absolute pointer-events-none">
      <circle cx="8" cy="8" r="3" fill="#1f2937" />
      <line x1="8" y1="11" x2="8" y2="14" stroke="#1f2937" strokeWidth="1" />
      <line x1="8" y1="11" x2="5" y2="14" stroke="#1f2937" strokeWidth="1" />
      <line x1="8" y1="11" x2="11" y2="14" stroke="#1f2937" strokeWidth="1" />
      <line x1="5" y1="8" x2="2" y2="6" stroke="#1f2937" strokeWidth="1" />
      <line x1="11" y1="8" x2="14" y2="6" stroke="#1f2937" strokeWidth="1" />
    </svg>
  );

  const SpiderWeb = ({ x, y }: { x: number; y: number }) => (
    <svg width="40" height="40" viewBox="0 0 40 40" className="absolute pointer-events-none">
      <line x1="20" y1="5" x2="5" y2="20" stroke="#d1d5db" strokeWidth="1" opacity="0.6" />
      <line x1="20" y1="5" x2="35" y2="20" stroke="#d1d5db" strokeWidth="1" opacity="0.6" />
      <line x1="20" y1="5" x2="20" y2="35" stroke="#d1d5db" strokeWidth="1" opacity="0.6" />
      <line x1="5" y1="20" x2="35" y2="20" stroke="#d1d5db" strokeWidth="1" opacity="0.6" />
      <circle cx="20" cy="20" r="8" fill="none" stroke="#d1d5db" strokeWidth="1" opacity="0.5" />
    </svg>
  );

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] pointer-events-none overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Dirty overlay - covers everything initially */}
          <motion.div
            className="absolute inset-0 z-10"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Gradient dirt background */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-sky-300" />

            {/* Heavy grime at top */}
            <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-black/80 via-gray-800/60 to-transparent" />

            {/* Splatter and dirt effects */}
            <div className="absolute inset-0">
              {Array.from({ length: 100 }).map((_, i) => (
                <div
                  key={`grime-${i}`}
                  className="absolute bg-gray-900/40 rounded-full"
                  style={{
                    width: Math.random() * 40 + 10,
                    height: Math.random() * 40 + 10,
                    left: Math.random() * 100 + '%',
                    top: Math.random() * 100 + '%',
                    opacity: Math.random() * 0.6 + 0.3,
                  }}
                />
              ))}
            </div>

            {/* Grass layer */}
            {Array.from({ length: 30 }).map((_, i) => (
              <motion.div
                key={`grass-${i}`}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                style={{
                  left: `${(i * 13) % 100}%`,
                  top: `${70 + Math.random() * 20}%`,
                  zIndex: 11,
                }}
              >
                <Grass x={0} y={0} />
              </motion.div>
            ))}

            {/* Dirt particles */}
            {Array.from({ length: 25 }).map((_, i) => (
              <motion.div
                key={`dirt-${i}`}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${30 + Math.random() * 50}%`,
                  zIndex: 11,
                }}
              >
                <Dirt x={0} y={0} />
              </motion.div>
            ))}

            {/* Spiderwebs */}
            {Array.from({ length: 4 }).map((_, i) => (
              <motion.div
                key={`web-${i}`}
                initial={{ opacity: 0.7 }}
                animate={{ opacity: 0 }}
                transition={{ delay: i * 0.15, duration: 0.4 }}
                style={{
                  left: `${20 + i * 20}%`,
                  top: `${10 + Math.random() * 30}%`,
                  zIndex: 11,
                }}
              >
                <SpiderWeb x={0} y={0} />
              </motion.div>
            ))}

            {/* Spiders */}
            {Array.from({ length: 3 }).map((_, i) => (
              <motion.div
                key={`spider-${i}`}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ delay: i * 0.12, duration: 0.3 }}
                style={{
                  left: `${30 + i * 25}%`,
                  top: `${15 + Math.random() * 25}%`,
                  zIndex: 11,
                }}
              >
                <Spider x={0} y={0} />
              </motion.div>
            ))}
          </motion.div>

          {/* Brush moving down - reveals clean page below */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 will-change-transform z-20"
            initial={{ y: -150 }}
            animate={{ y: window.innerHeight + 50 }}
            transition={{
              duration: 2.8,
              ease: 'easeInOut',
            }}
          >
            <Brush />
          </motion.div>

          {/* Clean sweep area - mask revealing the page */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 z-20 pointer-events-none"
            style={{
              width: '100vw',
              height: 150,
              background: 'linear-gradient(to bottom, rgba(255,255,255,0.95), transparent)',
              boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
            }}
            initial={{ y: -150 }}
            animate={{ y: window.innerHeight + 50 }}
            transition={{
              duration: 2.8,
              ease: 'easeInOut',
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
