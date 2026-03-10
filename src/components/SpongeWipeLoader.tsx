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

  const WindowCleaner = () => (
    <svg width="100" height="100" viewBox="0 0 100 100" className="drop-shadow-2xl">
      <defs>
        <linearGradient id="poleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#d1d5db', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#f3f4f6', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#d1d5db', stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      <line x1="50" y1="0" x2="50" y2="35" stroke="url(#poleGrad)" strokeWidth="6" strokeLinecap="round" />

      <rect x="30" y="20" width="40" height="35" rx="4" fill="#64748b" />
      <rect x="33" y="23" width="34" height="29" fill="#e5e7eb" />

      <ellipse cx="43" cy="33" rx="6" ry="8" fill="#9ca3af" opacity="0.5" />
      <ellipse cx="57" cy="39" rx="7" ry="10" fill="#9ca3af" opacity="0.4" />
      <circle cx="50" cy="50" r="5" fill="#9ca3af" opacity="0.35" />

      <ellipse cx="50" cy="62" rx="20" ry="12" fill="#ef4444" opacity="0.9" />
      <ellipse cx="50" cy="58" rx="18" ry="10" fill="#f87171" />

      <g opacity="0.8">
        <ellipse cx="35" cy="58" rx="3" ry="6" fill="#60a5fa" />
        <ellipse cx="65" cy="58" rx="3" ry="6" fill="#60a5fa" />
        <ellipse cx="43" cy="66" rx="2" ry="4" fill="#60a5fa" />
        <ellipse cx="57" cy="66" rx="2" ry="4" fill="#60a5fa" />
      </g>
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
          className="fixed inset-0 z-[100] pointer-events-none overflow-hidden bg-gradient-to-b from-sky-300 to-blue-200"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-100/20 to-amber-200/30" />

          <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-amber-900/40 to-transparent" />

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
              }}
            >
              <Spider x={0} y={0} />
            </motion.div>
          ))}

          {/* Brush moving down */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 will-change-transform"
            initial={{ y: -100 }}
            animate={{ y: window.innerHeight + 100 }}
            transition={{
              duration: 2.8,
              ease: 'easeInOut',
            }}
          >
            <WindowCleaner />
          </motion.div>

          {/* Clean area overlay */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 w-32 h-32 bg-gradient-to-b from-white/20 to-transparent rounded-full pointer-events-none"
            initial={{ y: -100 }}
            animate={{ y: window.innerHeight + 100 }}
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
