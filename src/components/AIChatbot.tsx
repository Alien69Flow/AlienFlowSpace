import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader2, Sparkles, Rocket, Zap } from 'lucide-react';
import aiTorAvatar from '@/assets/ai-tor-avatar.jpg';

const AI_DAPP_ROLES = [
  { id: 'welcome', role: 'Sistemas Tor', icon: Rocket, color: '#39FF14', messages: ["👽 ¡Conexión establecida! Soy AI Tor. ¿Exploramos el ecosistema?"] },
  { id: 'promo', role: 'Oportunidad', icon: Sparkles, color: '#EC4899', messages: ["🚀 ¡Misión Especial! Únete a la DAO y desbloquea NFTs."] },
  { id: 'dao', role: 'Voz de la DAO', icon: Zap, color: '#F0D882', messages: ["⚖️ ¡Nuevas propuestas de gobernanza! Tu voto es tu poder."] }
];

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showProactive, setShowProactive] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  const currentRole = useMemo(() => AI_DAPP_ROLES[currentRoleIndex], [currentRoleIndex]);

  // Gestión Proactiva (Tiempos 18s / 33s)
  useEffect(() => {
    if (hasInteracted || isOpen) return;
    const timer = setTimeout(() => {
      setCurrentRoleIndex(Math.floor(Math.random() * AI_DAPP_ROLES.length));
      setShowProactive(true);
      setTimeout(() => setShowProactive(false), 10000);
    }, 18000);
    return () => clearTimeout(timer);
  }, [hasInteracted, isOpen]);

  // Tracking de interacción (Escucha si el usuario mueve el mouse o tecla)
  useEffect(() => {
    const handleInteraction = () => setHasInteracted(true);
    const events = ['mousedown', 'keydown', 'touchstart'];
    events.forEach(e => window.addEventListener(e, handleInteraction, { once: true }));
    return () => events.forEach(e => window.removeEventListener(e, handleInteraction));
  }, []);

  return (
    <>
      {/* Botón Avatar con entrada desde el Hiperespacio */}
      <motion.button
        initial={{ scale: 0, rotate: -180, filter: "blur(20px)" }}
        animate={{ scale: 1, rotate: 0, filter: "blur(0px)" }}
        transition={{ type: "spring", stiffness: 200, damping: 20, delay: 1.5 }}
        whileHover={{ scale: 1.1, boxShadow: `0 0 25px ${currentRole.color}44` }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[120] w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-alien-gold/40 overflow-hidden bg-black shadow-2xl"
      >
        <img src={aiTorAvatar} alt="AI Tor" className="w-full h-full object-cover" />
      </motion.button>

      {/* Burbuja Proactiva */}
      <AnimatePresence>
        {showProactive && !isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 50, scale: 0.8 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-24 right-6 z-[121] max-w-[260px] p-4 rounded-2xl bg-black/90 backdrop-blur-xl border border-white/10 shadow-2xl cursor-pointer"
            style={{ borderLeft: `4px solid ${currentRole.color}` }}
          >
            <div className="flex items-center gap-2 mb-1">
              <currentRole.icon size={12} style={{ color: currentRole.color }} />
              <span className="text-[10px] font-nasalization text-alien-gold tracking-widest uppercase">{currentRole.role}</span>
            </div>
            <p className="text-white text-xs font-exo leading-tight">{currentRole.messages[0]}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Interfaz de Chat Adaptable (Móvil/Tablet/PC) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0, x: 150, y: 150, filter: "blur(20px)" }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0, x: 150, y: 150, filter: "blur(20px)" }}
            transition={{ duration: 0.5, ease: "circOut" }}
            className="fixed z-[9999] bottom-6 right-6 left-6 sm:left-auto sm:w-[380px] md:w-[420px] h-[75vh] max-h-[600px] bg-alien-space-dark rounded-[2.5rem] border-2 border-alien-gold/30 shadow-[0_0_80px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col"
          >
            {/* Header Interface */}
            <div className="p-5 bg-black/60 border-b border-white/10 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full border border-alien-green/50 p-0.5">
                  <img src={aiTorAvatar} alt="AI" className="w-full h-full rounded-full object-cover" />
                </div>
                <div>
                  <h3 className="text-alien-gold font-nasalization text-[10px] tracking-widest leading-none">AI TOR INTERFACE</h3>
                  <span className="text-alien-green text-[8px] font-exo uppercase animate-pulse">Online • Quantum Link</span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full text-white/50 hover:text-alien-green transition-all">
                <X size={22} />
              </button>
            </div>

            {/* Iframe & Radar de Carga */}
            <div className="flex-1 bg-black relative">
              {isLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-alien-space-dark z-10">
                  <motion.div 
                    animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="w-24 h-24 rounded-full border border-alien-green absolute"
                  />
                  <Loader2 className="w-10 h-10 text-alien-green animate-spin mb-4" />
                  <p className="text-alien-green font-nasalization text-[8px] tracking-[0.4em]">SYNCHRONIZING...</p>
                </div>
              )}
              <iframe src="https://aitor.lovable.app/" className="w-full h-full border-none" onLoad={() => setIsLoading(false)} title="AI Tor" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatbot;
