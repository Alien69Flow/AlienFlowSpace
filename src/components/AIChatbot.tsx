import React, { useEffect, useCallback, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader2, Zap, Sparkles, Rocket, HeadphonesIcon, Shield } from 'lucide-react';
import { toast } from 'sonner';
import aiTorAvatar from '@/assets/ai-tor-avatar.jpg';

// Configuración de Personalidades/Roles basada en tus versiones previas
const AI_DAPP_ROLES = [
  {
    id: 'welcome',
    name: 'AI Tor',
    role: 'Sistemas Tor',
    icon: Rocket,
    color: 'from-alien-green to-emerald-500',
    borderColor: 'rgba(57,255,20,0.5)', 
    messages: [
      "👽 ¡Conexión establecida! Soy AI Tor. ¿Exploramos el ecosistema juntos?",
      "✨ ¿Buscas algo específico en la DAO? Estoy sincronizado y listo.",
      "🌌 El viaje cósmico empieza aquí. Pregúntame lo que necesites."
    ]
  },
  {
    id: 'promo',
    name: 'AI Tor',
    role: 'Oportunidad',
    icon: Sparkles,
    color: 'from-pink-500 to-rose-500',
    borderColor: 'rgba(236,72,153,0.6)',
    messages: [
      "🚀 ¡Misión Especial! Únete a la DAO y desbloquea NFTs exclusivos.",
      "🔥 Academy, Clubs y CoNetWorKing... todo a tu alcance.",
      "💎 Coleccionables únicos detectados. ¿Quieres verlos?"
    ]
  },
  {
    id: 'dao',
    name: 'Voz de la DAO',
    role: 'Estrategia',
    icon: Zap,
    color: 'from-alien-gold to-yellow-500',
    borderColor: 'rgba(240,216,130,0.6)',
    messages: [
      "⚖️ Alerta de Gobernanza: ¡Hay nuevas propuestas! Tu voto es tu poder.",
      "🏛️ ¿Listo para influir en el futuro? Mira cómo participar en la DAO.",
      "🌟 Formar parte de AlienFlowSpace es decidir el futuro."
    ]
  }
];

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showProactive, setShowProactive] = useState(false);
  const [proactiveMessage, setProactiveMessage] = useState('');
  const [hasInteracted, setHasInteracted] = useState(false);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [messageCount, setMessageCount] = useState(0);

  const currentRole = useMemo(() => AI_DAPP_ROLES[currentRoleIndex], [currentRoleIndex]);

  // 1. Gestión Proactiva con tus tiempos: 18s y 33s
  useEffect(() => {
    if (hasInteracted || isOpen) return;

    const delay = messageCount === 0 ? 18000 : 33000; 
    
    const timer = setTimeout(() => {
      let nextIndex = messageCount === 0 ? 0 : Math.floor(Math.random() * AI_DAPP_ROLES.length);
      
      const role = AI_DAPP_ROLES[nextIndex];
      const randomMsg = role.messages[Math.floor(Math.random() * role.messages.length)];
      
      setCurrentRoleIndex(nextIndex);
      setProactiveMessage(randomMsg);
      setShowProactive(true);
      setMessageCount(prev => prev + 1);

      // Auto-ocultar después de 10 segundos
      setTimeout(() => setShowProactive(false), 10000);
    }, delay);

    return () => clearTimeout(timer);
  }, [hasInteracted, isOpen, messageCount]);

  // 2. Tracking de interacción robusto (Cualquier interacción humana real)
  useEffect(() => {
    const handleInteraction = () => setHasInteracted(true);
    const events = ['mousedown', 'keydown', 'touchstart', 'wheel'];
    
    events.forEach(event => window.addEventListener(event, handleInteraction, { once: true }));
    return () => events.forEach(event => window.removeEventListener(event, handleInteraction));
  }, []);

  // 3. Handlers con Feedback (Toast)
  const handleOpen = useCallback(() => {
    setIsOpen(true);
    setIsLoading(true);
    setShowProactive(false);
    setHasInteracted(true);
    toast.info('AI Assistant', {
      description: 'Estableciendo enlace con AI Tor...',
      duration: 3000,
    });
  }, []);

  const handleIframeLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  const handleIframeError = useCallback(() => {
    setIsLoading(false);
    toast.error('Error de Enlace', {
      description: 'No se pudo conectar con AI Tor. Reintenta más tarde.'
    });
  }, []);

  return (
    <>
      {/* Overlay con Blur dinámico */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Burbuja Proactiva / Promocional */}
      <AnimatePresence>
        {showProactive && !isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8, y: 0 }}
            animate={{ opacity: 1, x: 0, scale: 1, y: 0 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            className="fixed bottom-36 right-4 sm:bottom-40 sm:right-8 z-40 
                       max-w-[300px] p-4 rounded-2xl rounded-br-sm border-2
                       shadow-[0_10px_40px_rgba(0,0,0,0.5)] cursor-pointer"
            style={{ 
              background: 'linear-gradient(135deg, rgba(15,15,25,0.98) 0%, rgba(30,30,45,0.98) 100%)',
              borderColor: currentRole.borderColor 
            }}
            onClick={handleOpen}
          >
            <div className="flex gap-3">
              <div className="shrink-0 relative">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-alien-gold/30">
                  <img src={aiTorAvatar} alt="AI Tor" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-alien-space-dark rounded-full p-1 border border-alien-gold/40">
                  <currentRole.icon className="w-3 h-3 text-alien-gold" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-nasalization text-alien-gold tracking-widest uppercase italic">
                    {currentRole.role}
                  </span>
                </div>
                <p className="text-gray-200 font-exo text-[13px] leading-snug">
                  {proactiveMessage}
                </p>
                {currentRole.id === 'promo' && (
                  <span className="text-[10px] text-alien-gold mt-2 block font-bold animate-pulse">
                    VER MÁS AHORA →
                  </span>
                )}
              </div>
            </div>
            <button
              onClick={(e) => { e.stopPropagation(); setShowProactive(false); }}
              className="absolute -top-2 -right-2 w-6 h-6 bg-alien-space-dark rounded-full 
                         flex items-center justify-center border border-white/10 hover:bg-red-900/40 transition-colors"
            >
              <X className="w-3 h-3 text-gray-400" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón Flotante Principal (Avatar) */}
      <motion.button
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleOpen}
        className="fixed bottom-20 right-4 sm:bottom-24 sm:right-8 z-40
                   w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-alien-gold-light/50
                   shadow-2xl overflow-hidden ai-button-pulse"
      >
        <img src={aiTorAvatar} alt="AI Tor" className="w-full h-full object-cover" />
      </motion.button>

      {/* Ventana de Chat (Iframe de Lovable) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed z-50 inset-2 sm:inset-auto sm:bottom-24 sm:right-8 
                       sm:w-[360px] md:w-[400px] sm:h-[550px] md:h-[600px]
                       bg-alien-space-dark/98 backdrop-blur-xl border-2 border-alien-gold/40 
                       rounded-2xl shadow-2xl overflow-hidden flex flex-col chat-glow"
          >
            {/* Header de la Interfaz */}
            <div className="bg-gradient-to-r from-alien-space-dark via-alien-space to-alien-space-dark 
                          border-b border-alien-gold/20 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border-2 border-alien-gold/40 overflow-hidden">
                  <img src={aiTorAvatar} alt="AI Tor" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-alien-gold font-bold font-nasalization text-[12px] tracking-wider">AI TOR INTERFACE</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-alien-green rounded-full animate-pulse" />
                    <span className="text-[10px] text-alien-green font-exo uppercase tracking-tighter">Sincronización Cuántica</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-lg text-alien-gold">
                <X size={20} />
              </button>
            </div>

            {/* Contenedor del Iframe con Loading State */}
            <div className="flex-1 relative bg-black">
              {isLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-alien-space-dark/95 z-10">
                  <div className="relative mb-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-alien-gold/30">
                      <img src={aiTorAvatar} alt="Loading" className="w-full h-full object-cover animate-pulse opacity-50" />
                    </div>
                    <Loader2 className="absolute -bottom-2 -right-2 h-8 w-8 text-alien-gold animate-spin" />
                  </div>
                  <p className="text-alien-gold font-nasalization text-[10px] tracking-widest uppercase">Enlazando Red Neural...</p>
                  {/* Animación de puntos que pedías */}
                  <div className="flex gap-1.5 mt-4">
                    <div className="w-1.5 h-1.5 bg-alien-gold rounded-full animate-bounce" />
                    <div className="w-1.5 h-1.5 bg-alien-gold rounded-full animate-bounce [animation-delay:-.3s]" />
                    <div className="w-1.5 h-1.5 bg-alien-gold rounded-full animate-bounce [animation-delay:-.5s]" />
                  </div>
                </div>
              )}
              <iframe
                src="https://aitor.lovable.app/"
                className="w-full h-full border-none"
                title="AI Tor Assistant"
                allow="microphone; camera; clipboard-write; geolocation"
                onLoad={handleIframeLoad}
                onError={handleIframeError}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatbot;
