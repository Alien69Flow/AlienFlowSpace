import React, { useEffect, useCallback, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader2, Shield, Zap, HeadphonesIcon, Bot, Sparkles, Rocket } from 'lucide-react';
import { toast } from 'sonner';
import aiTorAvatar from '@/assets/ai-tor-avatar.jpg';

// AI Personalities with unique messages and slight visual variations
// Now includes promotional messages integrated into personalities
const AI_PERSONALITIES = [
  {
    id: 'support',
    name: 'AI Tor',
    role: 'Soporte Técnico',
    icon: HeadphonesIcon,
    color: 'from-alien-green to-emerald-500',
    borderColor: 'border-alien-green/50',
    messages: [
      "¿Tienes algún problema técnico? Estoy aquí para ayudarte.",
      "¿Necesitas ayuda con tu wallet o transacciones?",
      "¿Problemas conectando? Déjame echarte una mano.",
      "¿Algo no funciona como esperabas? Cuéntame.",
    ]
  },
  {
    id: 'dao',
    name: 'Voz de la DAO',
    role: 'Estrategia',
    icon: Zap,
    color: 'from-alien-gold to-yellow-500',
    borderColor: 'border-alien-gold/50',
    messages: [
      "¿Quieres saber cómo participar en las votaciones?",
      "Hay propuestas activas esperando tu voto...",
      "¿Conoces los beneficios de ser miembro de la DAO?",
      "La comunidad está decidiendo el futuro. ¿Te unes?",
    ]
  },
  {
    id: 'sentinel',
    name: 'Alien Sentinel',
    role: 'Seguridad',
    icon: Shield,
    color: 'from-purple-500 to-violet-600',
    borderColor: 'border-purple-500/50',
    messages: [
      "¿Preocupado por la seguridad de tus activos?",
      "Recuerda: nunca compartas tus claves privadas.",
      "¿Quieres consejos para proteger tu wallet?",
      "La seguridad primero. ¿Alguna duda?",
    ]
  },
  {
    id: 'guide',
    name: 'Cosmic Guide',
    role: 'Navegador',
    icon: Bot,
    color: 'from-cyan-500 to-blue-500',
    borderColor: 'border-cyan-500/50',
    messages: [
      "¿Primera vez en AlienFlowSpace? Te guío.",
      "Hay mucho por explorar. ¿Por dónde empezamos?",
      "¿Buscas algo específico en el ecosistema?",
      "Déjame mostrarte lo que puedes hacer aquí.",
    ]
  },
  {
    id: 'promo',
    name: 'AI Tor',
    role: 'Promociones',
    icon: Sparkles,
    color: 'from-pink-500 to-rose-500',
    borderColor: 'border-pink-500/50',
    messages: [
      "🚀 ¡Únete a AlienFlowSpace DAO y obtén NFTs exclusivos!",
      "🎁 Descubre los beneficios de ser miembro de la DAO",
      "💎 Colecciona NFTs únicos en nuestro ecosistema",
      "🌟 ¡Nuevas propuestas en la DAO! Tu voto cuenta",
      "🔥 Explora Academy, Clubs y CoNetWorKing - ¡Todo te espera!",
    ]
  },
  {
    id: 'welcome',
    name: 'AI Tor',
    role: 'Bienvenida',
    icon: Rocket,
    color: 'from-orange-500 to-amber-500',
    borderColor: 'border-orange-500/50',
    messages: [
      "👽 ¡Bienvenido viajero! ¿Primera vez aquí? Te ayudo a explorar",
      "🌌 El universo AlienFlowSpace te espera. ¿Qué quieres descubrir?",
      "✨ ¿Listo para tu viaje cósmico? Pregúntame lo que quieras",
    ]
  }
];

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showProactive, setShowProactive] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [shouldLoadIframe, setShouldLoadIframe] = useState(false);
  const [currentPersonality, setCurrentPersonality] = useState(0);
  const [proactiveMessage, setProactiveMessage] = useState('');
  const [messageCount, setMessageCount] = useState(0);

  // Get current personality
  const personality = useMemo(() => AI_PERSONALITIES[currentPersonality], [currentPersonality]);
  const PersonalityIcon = personality.icon;

  // Lazy load iframe after initial render
  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldLoadIframe(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Proactive engagement with rotating personalities - shorter initial delay
  useEffect(() => {
    if (hasInteracted || isOpen) return;

    // First message after 30 seconds
    const initialDelay = messageCount === 0 ? 30000 : 120000; // 30s first, then 2min
    
    const timer = setTimeout(() => {
      // Pick random personality and message
      const randomPersonalityIndex = Math.floor(Math.random() * AI_PERSONALITIES.length);
      const randomPersonality = AI_PERSONALITIES[randomPersonalityIndex];
      const randomMessage = randomPersonality.messages[Math.floor(Math.random() * randomPersonality.messages.length)];
      
      setCurrentPersonality(randomPersonalityIndex);
      setProactiveMessage(randomMessage);
      setShowProactive(true);
      setMessageCount(prev => prev + 1);
      
      // Auto-hide after 12 seconds
      setTimeout(() => setShowProactive(false), 12000);
    }, initialDelay);

    return () => clearTimeout(timer);
  }, [hasInteracted, isOpen, messageCount]);

  // Track user interaction - only on meaningful interactions
  useEffect(() => {
    const handleInteraction = () => {
      // Don't mark as interacted if just scrolling slightly
      if (window.scrollY > 200) {
        setHasInteracted(true);
      }
    };
    
    const handleClick = () => setHasInteracted(true);
    
    window.addEventListener('click', handleClick, { once: true });
    window.addEventListener('scroll', handleInteraction);
    
    return () => {
      window.removeEventListener('click', handleClick);
      window.removeEventListener('scroll', handleInteraction);
    };
  }, []);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
    setIsLoading(true);
    setShowProactive(false);
    setHasInteracted(true);
    setShouldLoadIframe(true);
  }, []);

  const handleIframeLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {/* Dark overlay when chat is open */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Proactive Engagement Bubble with Personality - FIXED: Right side */}
      <AnimatePresence>
        {showProactive && !isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            className="fixed bottom-36 right-4 sm:bottom-40 sm:right-8 z-40 
              max-w-[300px] rounded-2xl rounded-br-sm overflow-hidden
              backdrop-blur-xl border shadow-2xl cursor-pointer"
            style={{
              background: 'linear-gradient(135deg, rgba(17,17,25,0.95) 0%, rgba(30,30,40,0.95) 100%)',
              borderColor: `rgba(${personality.id === 'support' ? '57,255,20' : personality.id === 'dao' ? '240,216,130' : personality.id === 'sentinel' ? '168,85,247' : personality.id === 'promo' ? '236,72,153' : personality.id === 'welcome' ? '249,115,22' : '34,211,238'},0.4)`
            }}
            onClick={handleOpen}
          >
            {/* Personality Header */}
            <div className={`bg-gradient-to-r ${personality.color} p-2 px-3 flex items-center gap-2`}>
              <PersonalityIcon className="w-4 h-4 text-white" />
              <div className="flex-1">
                <p className="text-white text-xs font-nasalization font-bold">{personality.name}</p>
                <p className="text-white/80 text-[10px] font-exo">{personality.role}</p>
              </div>
              <div className="w-6 h-6 rounded-full overflow-hidden border border-white/30">
                <img 
                  src={aiTorAvatar} 
                  alt={personality.name}
                  className="w-full h-full object-cover"
                  style={{
                    filter: personality.id === 'sentinel' ? 'hue-rotate(270deg)' : 
                           personality.id === 'guide' ? 'hue-rotate(180deg)' : 
                           personality.id === 'dao' ? 'sepia(30%)' : 
                           personality.id === 'promo' ? 'hue-rotate(320deg)' :
                           personality.id === 'welcome' ? 'hue-rotate(30deg)' : 'none'
                  }}
                />
              </div>
            </div>
            {/* Message */}
            <div className="p-3">
              <p className="text-gray-200 font-exo text-sm leading-relaxed">
                {proactiveMessage}
              </p>
              {/* CTA for promo messages */}
              {personality.id === 'promo' && (
                <span className="inline-block mt-2 text-xs text-alien-gold font-nasalization hover:text-alien-green transition-colors">
                  Descubre más →
                </span>
              )}
            </div>
            {/* Close button */}
            <button
              onClick={(e) => { e.stopPropagation(); setShowProactive(false); }}
              className="absolute -top-2 -right-2 w-6 h-6 bg-alien-space-dark rounded-full 
                flex items-center justify-center border border-gray-600 
                hover:bg-gray-700 transition-colors shadow-lg"
            >
              <X className="w-3 h-3 text-gray-400" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button - FIXED: Positioned at bottom RIGHT */}
      <motion.button
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        onClick={handleOpen}
        className="fixed bottom-20 right-4 sm:bottom-24 sm:right-8 z-40
          bg-gradient-to-br from-alien-gold to-alien-gold-dark backdrop-blur-md 
          border-2 border-alien-gold-light rounded-full
          hover:scale-110 transition-all duration-300 
          shadow-2xl hover:shadow-alien-gold/50
          overflow-hidden w-14 h-14 sm:w-16 sm:h-16
          relative"
        aria-label="Open AI Assistant"
      >
        {/* Pulsing ring */}
        <span className="absolute inset-0 rounded-full animate-ping bg-alien-gold/30" style={{ animationDuration: '2s' }} />
        <span className="absolute inset-0 rounded-full animate-pulse bg-gradient-to-br from-alien-green/20 to-transparent" />
        <img 
          src={aiTorAvatar} 
          alt="AI Tor" 
          className="w-full h-full object-cover relative z-10"
        />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed z-50 
              inset-2 sm:inset-auto
              sm:bottom-24 sm:right-8 
              sm:w-[340px] md:w-[360px] 
              sm:h-[420px] md:h-[460px]
              sm:max-h-[calc(100vh-10rem)]
              bg-alien-space-dark/98 backdrop-blur-xl 
              border-2 border-alien-gold/40 rounded-xl 
              shadow-2xl overflow-hidden"
            style={{
              boxShadow: '0 0 40px rgba(57,255,20,0.1), 0 0 80px rgba(240,216,130,0.05)'
            }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-alien-space-dark via-alien-space/90 to-alien-space-dark 
              border-b border-alien-gold/30 p-3 sm:p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-alien-gold/50 relative">
                  <img 
                    src={aiTorAvatar} 
                    alt="AI Tor" 
                    className="w-full h-full object-cover"
                  />
                  {/* Online indicator */}
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-alien-green rounded-full border-2 border-alien-space-dark" />
                </div>
                <div>
                  <h3 className="text-alien-gold font-bold font-nasalization text-sm sm:text-base">
                    AI Tor
                  </h3>
                  <p className="text-xs text-alien-green font-exo">Asistente Inteligente</p>
                </div>
                <div className="flex items-center gap-1.5 ml-2">
                  {isLoading ? (
                    <div className="flex items-center gap-1">
                      <span className="typing-dot" />
                      <span className="typing-dot" style={{ animationDelay: '0.2s' }} />
                      <span className="typing-dot" style={{ animationDelay: '0.4s' }} />
                    </div>
                  ) : (
                    <span className="text-xs text-alien-green/80 hidden sm:inline font-exo">Conectado</span>
                  )}
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-alien-gold/20 rounded-lg transition-colors"
                aria-label="Close chat"
              >
                <X className="h-5 w-5 text-alien-gold" />
              </button>
            </div>

            {/* Loading State Overlay */}
            <AnimatePresence>
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 top-14 sm:top-16 flex flex-col items-center justify-center 
                    bg-alien-space-dark/98 z-10"
                >
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-alien-gold/50 mb-4">
                      <img 
                        src={aiTorAvatar} 
                        alt="AI Tor Loading" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <Loader2 className="absolute -bottom-1 -right-1 h-8 w-8 text-alien-gold animate-spin" />
                  </div>
                  <p className="text-alien-gold font-nasalization text-sm mt-4 uppercase tracking-wider">
                    Sincronizando...
                  </p>
                  <div className="flex gap-1.5 mt-3">
                    <span className="w-2 h-2 bg-alien-green rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                    <span className="w-2 h-2 bg-alien-green rounded-full animate-bounce" style={{ animationDelay: '0.15s' }} />
                    <span className="w-2 h-2 bg-alien-green rounded-full animate-bounce" style={{ animationDelay: '0.3s' }} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* iframe Content with lazy loading */}
            {shouldLoadIframe && (
              <iframe
                src="https://aitor.lovable.app/"
                className="w-full h-[calc(100%-3.5rem)] sm:h-[calc(100%-4rem)] border-none bg-alien-space-dark"
                title="AI Tor Assistant"
                allow="microphone; camera"
                onLoad={handleIframeLoad}
                onError={() => {
                  setIsLoading(false);
                  toast.error('Error de conexión', {
                    description: 'No se pudo conectar con AI Tor. Intenta de nuevo.'
                  });
                }}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatbot;