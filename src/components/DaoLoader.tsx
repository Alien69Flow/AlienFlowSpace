import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Full-screen DAO loader.
 *
 * Rotating planet built from a static Earth image scrolled horizontally
 * inside a circular mask (the classic CSS "rotating earth" trick), wrapped
 * in an orbital ring with a small UFO orbiting it, plus twinkling stars and
 * the gold/green brand glow. Shown once per full page load, then fades out.
 */
const DaoLoader: React.FC<{ onFinish?: () => void }> = ({ onFinish }) => {
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Minimum display time so the animation reads as intentional, not a flash.
    const minMs = 2200;
    const start = performance.now();

    const finish = () => {
      const elapsed = performance.now() - start;
      const wait = Math.max(0, minMs - elapsed);
      window.setTimeout(() => {
        setDone(true);
        onFinish?.();
      }, wait);
    };

    // Hide as soon as the app is interactive, but never before minMs.
    if (document.readyState === 'complete') {
      finish();
    } else {
      window.addEventListener('load', finish, { once: true });
      // Fallback in case 'load' already fired or never does.
      const fallback = window.setTimeout(finish, 4000);
      return () => {
        window.removeEventListener('load', finish);
        window.clearTimeout(fallback);
      };
    }
  }, [onFinish]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="dao-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-alien-space-darker overflow-hidden"
          aria-live="polite"
          aria-busy="true"
          role="status"
        >
          {/* Ambient glow */}
          <div className="absolute inset-0 bg-glow-radial opacity-60" />

          {/* Twinkling stars layer */}
          <div className="absolute inset-0 pointer-events-none">
            {STARS.map((s, i) => (
              <span
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  left: `${s.left}%`,
                  top: `${s.top}%`,
                  width: `${s.size}px`,
                  height: `${s.size}px`,
                  animation: `dao-twinkle ${s.dur}s ease-in-out ${s.delay}s infinite`,
                }}
              />
            ))}
          </div>

          {/* Planet + orbit stage */}
          <div className="relative" style={{ width: 260, height: 260 }}>
            {/* Outer pulse ring */}
            <motion.div
              className="absolute inset-0 rounded-full border border-alien-gold/30"
              animate={{ scale: [1, 1.18, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeOut' }}
            />
            <motion.div
              className="absolute inset-0 rounded-full border border-alien-green/20"
              animate={{ scale: [1, 1.3, 1], opacity: [0.35, 0, 0.35] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeOut', delay: 0.8 }}
            />

            {/* Rotating planet */}
            <div
              className="absolute rounded-full overflow-hidden"
              style={{
                width: 220,
                height: 220,
                left: 20,
                top: 20,
                backgroundImage:
                  'url("/lovable-uploads/ET.png")',
                backgroundSize: 'cover',
                backgroundRepeat: 'repeat-x',
                animation: 'dao-earth-rotate 30s linear infinite',
                boxShadow:
                  '0 0 24px rgba(240,216,130,0.25), -5px 0 8px rgba(34,197,94,0.35) inset, 15px 2px 25px rgba(0,0,0,0.75) inset, -24px -2px 34px rgba(34,197,94,0.25) inset, 250px 0 44px rgba(0,0,0,0.4) inset, 150px 0 38px rgba(0,0,0,0.65) inset',
              }}
            />

            {/* Orbit ring */}
            <div
              className="absolute rounded-full border border-dashed border-alien-gold/25"
              style={{ width: 260, height: 260, left: 0, top: 0 }}
            />

            {/* Orbiting UFO */}
            <motion.div
              className="absolute left-1/2 top-1/2"
              style={{ width: 0, height: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            >
              <img
                src="/lovable-uploads/VC.png"
                alt=""
                className="absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 object-contain drop-shadow-[0_0_8px_rgba(240,216,130,0.7)]"
                style={{ left: 130, top: 0 }}
              />
            </motion.div>
          </div>

          {/* Brand wordmark */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-10 text-center"
          >
            <p className="font-nasalization text-sm tracking-[0.4em] uppercase">
              <span className="text-alien-green">Δlieπ</span>
              <span className="text-alien-gold">FlΦw</span>
              <span className="text-alien-green"> $pac€</span>
              <span className="text-alien-gold"> DAO</span>
            </p>
            <motion.p
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.6, repeat: Infinity }}
              className="mt-3 text-alien-gold/60 text-[10px] font-mono tracking-[0.3em] uppercase"
            >
              Synchronizing the multiverse…
            </motion.p>
          </motion.div>

          {/* Inline keyframes (scoped names to avoid collisions) */}
          <style>{`
            @keyframes dao-earth-rotate {
              0% { background-position: 0 0; }
              100% { background-position: 440px 0; }
            }
            @keyframes dao-twinkle {
              0%, 100% { opacity: 0.1; transform: scale(0.8); }
              50% { opacity: 1; transform: scale(1.1); }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Static star field config (positions/durations chosen once).
const STARS = [
  { left: 8, top: 18, size: 2, dur: 3, delay: 0 },
  { left: 22, top: 70, size: 1.5, dur: 2, delay: 0.4 },
  { left: 35, top: 12, size: 2, dur: 4, delay: 1 },
  { left: 48, top: 82, size: 1.5, dur: 3, delay: 0.2 },
  { left: 60, top: 25, size: 2, dur: 2.5, delay: 0.8 },
  { left: 72, top: 65, size: 1.5, dur: 3.5, delay: 0.1 },
  { left: 85, top: 35, size: 2, dur: 2, delay: 0.6 },
  { left: 15, top: 45, size: 1.5, dur: 4, delay: 1.2 },
  { left: 90, top: 80, size: 2, dur: 3, delay: 0.5 },
  { left: 55, top: 50, size: 1.5, dur: 2.5, delay: 0.9 },
];

export default DaoLoader;
