import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SpongeWipeLoader({ onComplete }: { onComplete: () => void }) {
  const [isLoading, setIsLoading] = useState(true);
  const [brushY, setBrushY] = useState(-150);

  useEffect(() => {
    const completeTimer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => onComplete(), 500);
    }, 3000);

    return () => {
      clearTimeout(completeTimer);
    };
  }, [onComplete]);


  const brushWidth = 280;
  const brushHeight = 200;
  const sweepWidth = 400;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] pointer-events-none overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Dirty background image covering entire screen */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url("/image.png")',
            }}
          />

          {/* Brush sweeping across */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 will-change-transform z-20"
            initial={{ y: -brushHeight - 50 }}
            animate={{ y: window.innerHeight + 50 }}
            transition={{
              duration: 2.8,
              ease: 'easeInOut',
            }}
            onAnimationUpdate={(latest) => {
              setBrushY(latest.y as number);
            }}
          >
            <img
              src="/rfowler logos.png"
              alt="brush"
              style={{
                width: brushWidth,
                height: brushHeight,
                objectFit: 'contain',
              }}
            />
          </motion.div>

          {/* Progressive reveal mask - shows clean page underneath */}
          <motion.div
            className="absolute inset-0 pointer-events-none will-change-transform"
            initial={{ y: 0 }}
            animate={{ y: 0 }}
            style={{
              zIndex: 21,
            }}
          >
            <svg
              className="absolute inset-0"
              width="100%"
              height="100%"
              style={{ pointerEvents: 'none' }}
            >
              <defs>
                <mask id="brushMask">
                  {/* Black covers dirty area (hidden), white reveals clean page */}
                  <rect width="100%" height="100%" fill="black" />

                  {/* White rectangular sweep area that moves down */}
                  <motion.rect
                    x={`calc(50% - ${sweepWidth / 2}px)`}
                    width={sweepWidth}
                    height={140}
                    fill="white"
                    initial={{ y: -brushHeight - 50 }}
                    animate={{ y: window.innerHeight + 50 }}
                    transition={{
                      duration: 2.8,
                      ease: 'easeInOut',
                    }}
                  />
                </mask>
              </defs>

              {/* Clean page underneath - fully visible through mask */}
              <rect
                width="100%"
                height="100%"
                fill="white"
                opacity="1"
                mask="url(#brushMask)"
              />
            </svg>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
