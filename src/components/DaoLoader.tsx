import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DaoLoader: React.FC<{ onFinish?: () => void }> = ({ onFinish }) => {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const minMs = 2600;
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
      const fallback = window.setTimeout(finish, 4500);
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
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-alien-space-darker overflow-hidden"
          aria-live="polite"
          aria-busy="true"
          role="status"
        >
          {/* Ambient glow */}
          <div className="absolute inset-0 bg-glow-radial opacity-70" />

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

          {/* Planet stage — immersive "from inside" rotating planet */}
          <div className="relative" style={{ width: 280, height: 280 }}>
            {/* Expanding pulse rings */}
            <motion.div
              className="absolute inset-0 rounded-full border border-alien-gold/25"
              animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0, 0.4] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeOut' }}
            />
            <motion.div
              className="absolute inset-0 rounded-full border border-alien-green/15"
              animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeOut', delay: 1 }}
            />

            {/* Planet sphere with 3D-like inner rotation */}
            <div
              className="absolute rounded-full overflow-hidden"
              style={{
                width: 220,
                height: 220,
                left: 30,
                top: 30,
                background: 'radial-gradient(circle at 35% 35%, #1a3a2e 0%, #0a1a14 40%, #050510 80%)',
                boxShadow: [
                  '0 0 30px rgba(240,216,130,0.15)',
                  'inset -12px 0 30px rgba(0,0,0,0.7)',
                  'inset 8px 0 20px rgba(34,197,94,0.15)',
                ].join(', '),
              }}
            >
              {/* Rotating surface texture — moves horizontally to simulate planet rotation from inside */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: [
                    'radial-gradient(ellipse 60px 30px at 20% 40%, rgba(34,197,94,0.12), transparent)',
                    'radial-gradient(ellipse 50px 25px at 60% 60%, rgba(240,216,130,0.08), transparent)',
                    'radial-gradient(ellipse 70px 35px at 85% 35%, rgba(34,197,94,0.1), transparent)',
                    'radial-gradient(ellipse 40px 20px at 40% 80%, rgba(240,216,130,0.06), transparent)',
                    'radial-gradient(ellipse 55px 28px at 10% 55%, rgba(34,197,94,0.08), transparent)',
                  ].join(', '),
                  backgroundSize: '440px 220px',
                  backgroundRepeat: 'repeat-x',
                  animation: 'dao-planet-spin 18s linear infinite',
                }}
              />

              {/* Cloud / atmosphere layer — slower counter-rotation for depth */}
              <div
                className="absolute inset-0"
                style={{
                  background: [
                    'radial-gradient(ellipse 80px 15px at 30% 30%, rgba(255,255,255,0.04), transparent)',
                    'radial-gradient(ellipse 60px 12px at 70% 50%, rgba(255,255,255,0.03), transparent)',
                    'radial-gradient(ellipse 50px 10px at 15% 70%, rgba(255,255,255,0.03), transparent)',
                  ].join(', '),
                  backgroundSize: '440px 220px',
                  backgroundRepeat: 'repeat-x',
                  animation: 'dao-planet-spin 26s linear infinite reverse',
                }}
              />

              {/* Terminator / day-night shadow gradient — stays fixed, gives 3D sphere illusion */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'linear-gradient(90deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.2) 35%, transparent 50%, rgba(0,0,0,0.1) 70%, rgba(0,0,0,0.55) 100%)',
                }}
              />

              {/* Inner glow highlight — top-left specular for 3D feel */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'radial-gradient(circle at 30% 28%, rgba(240,216,130,0.12) 0%, transparent 35%)',
                }}
              />
            </div>

            {/* Orbit ring */}
            <div
              className="absolute rounded-full border border-dashed border-alien-gold/20"
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

          {/* Brand wordmark */}
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
            <motion.p
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              className="mt-3 text-alien-gold/50 text-[10px] font-mono tracking-[0.3em] uppercase"
            >
              Entering the multiverse…
            </motion.p>
          </motion.div>

          {/* Scoped keyframes */}
          <style>{`
            @keyframes dao-planet-spin {
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
