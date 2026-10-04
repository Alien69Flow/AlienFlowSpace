import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DaoLoader: React.FC<{ onFinish?: () => void }> = ({ onFinish }) => {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const minMs = 2800;
    const start = performance.now();

    const finish = () => {
      const elapsed = performance.now() - start;
      const wait = Math.max(0, minMs - elapsed);
      window.setTimeout(() => {
        setDone(true);
        onFinish?.();
      }, wait);
    };

    if (document.readyState === 'complete') {
      finish();
    } else {
      window.addEventListener('load', finish, { once: true });
      const fallback = window.setTimeout(finish, 5000);
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
          exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050510] overflow-hidden"
          aria-live="polite"
          aria-busy="true"
          role="status"
        >
          {/* HUD wireframe grid overlay — GT Planar inspired */}
          <div
            className="absolute inset-0 pointer-events-none opacity-30"
            style={{
              backgroundImage: [
                'linear-gradient(rgba(240,216,130,0.06) 1px, transparent 1px)',
                'linear-gradient(90deg, rgba(240,216,130,0.06) 1px, transparent 1px)',
              ].join(', '),
              backgroundSize: '48px 48px',
            }}
          />

          {/* Corner HUD brackets — 1px wireframe aesthetic */}
          <div className="absolute top-8 left-8 w-12 h-12 border-l border-t border-alien-gold/40" />
          <div className="absolute top-8 right-8 w-12 h-12 border-r border-t border-alien-gold/40" />
          <div className="absolute bottom-8 left-8 w-12 h-12 border-l border-b border-alien-gold/40" />
          <div className="absolute bottom-8 right-8 w-12 h-12 border-r border-b border-alien-gold/40" />

          {/* HUD status text top bar — 1px border, instrument readout */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 flex items-center gap-3 px-4 py-1 border border-af-border-hairline">
            <span className="w-1.5 h-1.5 rounded-full bg-alien-green animate-pulse" />
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-af-text-muted">
              SYS_BOOT // DAO_SYNC
            </span>
          </div>

          {/* Twinkling stars */}
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

          {/* Planet stage */}
          <div className="relative" style={{ width: 280, height: 280 }}>
            {/* Expanding pulse rings — GT Planar wireframe style */}
            <motion.div
              className="absolute inset-0 rounded-full border border-alien-gold/30"
              animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeOut' }}
            />
            <motion.div
              className="absolute inset-0 rounded-full border border-alien-green/20"
              animate={{ scale: [1, 1.4, 1], opacity: [0.35, 0, 0.35] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeOut', delay: 1 }}
            />

            {/* Rotating planet — ET.png with continents visible, scrolling horizontally */}
            <div
              className="absolute rounded-full overflow-hidden"
              style={{
                width: 220,
                height: 220,
                left: 30,
                top: 30,
                backgroundImage: 'url("/lovable-uploads/ET.png")',
                backgroundSize: 'cover',
                backgroundRepeat: 'repeat-x',
                animation: 'dao-earth-rotate 24s linear infinite',
                boxShadow: [
                  '0 0 24px rgba(240,216,130,0.15)',
                  '-5px 0 10px rgba(34,197,94,0.3) inset',
                  '15px 2px 25px rgba(0,0,0,0.7) inset',
                  '-20px -2px 30px rgba(34,197,94,0.2) inset',
                  '250px 0 44px rgba(0,0,0,0.4) inset',
                ].join(', '),
              }}
            />

            {/* Orbit ring — dashed wireframe */}
            <div
              className="absolute rounded-full border border-dashed border-alien-gold/25"
              style={{ width: 280, height: 280, left: 0, top: 0 }}
            />

            {/* Orbiting UFO */}
            <motion.div
              className="absolute left-1/2 top-1/2"
              style={{ width: 0, height: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            >
              <img
                src="/lovable-uploads/VC.png"
                alt=""
                className="absolute -translate-x-1/2 -translate-y-1/2 w-7 h-7 object-contain drop-shadow-[0_0_6px_rgba(240,216,130,0.5)]"
                style={{ left: 140, top: 0 }}
              />
            </motion.div>
          </div>

          {/* Brand wordmark — GT Planar style: tight tracking, 1px underline */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-12 text-center"
          >
            <p className="font-nasalization text-sm tracking-[0.4em] uppercase">
              <span className="text-alien-green">Δlieπ</span>
              <span className="text-alien-gold">FlΦw</span>
              <span className="text-alien-green"> $pac€</span>
              <span className="text-alien-gold"> DAO</span>
            </p>
            <div className="mx-auto mt-2 w-48 h-px bg-alien-gold/30" />
            <motion.p
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              className="mt-3 text-alien-gold/50 text-[10px] font-mono tracking-[0.3em] uppercase"
            >
              Entering the multiverse…
            </motion.p>
          </motion.div>

          {/* HUD progress bar — GT Planar wireframe instrument */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-64">
            <div className="flex justify-between items-center mb-2">
              <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-af-text-muted">LOADING</span>
              <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-alien-gold/60">
                <motion.span
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  INITIALIZING
                </motion.span>
              </span>
            </div>
            <div className="h-px bg-af-border-hairline w-full relative overflow-hidden">
              <motion.div
                className="absolute left-0 top-0 h-full bg-alien-gold/60"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 2.5, ease: 'easeInOut' }}
              />
            </div>
          </div>

          {/* Scoped keyframes */}
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
  { left: 42, top: 28, size: 1, dur: 3, delay: 1.5 },
  { left: 78, top: 15, size: 1, dur: 2.5, delay: 0.3 },
];

export default DaoLoader;
