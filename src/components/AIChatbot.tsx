import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import aiTorAvatar from '@/assets/ai-tor-avatar.jpg';

const PROACTIVE_MESSAGES = [
  "¿Puedo ayudarte a encontrar algo?",
  "¿Tienes alguna pregunta sobre AlienFlowSpace?",
  "¿Necesitas ayuda con los NFTs o las DAOs?",
  "¿Te gustaría conocer más sobre nuestro ecosistema?",
  "¿En qué puedo asistirte hoy?"
];

const AIChatbot = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [showProactive, setShowProactive] = React.useState(false);
  const [proactiveMessage, setProactiveMessage] = React.useState('');
  const [hasInteracted, setHasInteracted] = React.useState(false);

  // Proactive engagement - show after 45 seconds of inactivity
  useEffect(() => {
    if (hasInteracted || isOpen) return;

    const timer = setTimeout(() => {
      const randomMessage = PROACTIVE_MESSAGES[Math.floor(Math.random() * PROACTIVE_MESSAGES.length)];
      setProactiveMessage(randomMessage);
      setShowProactive(true);
      
      // Auto-hide after 8 seconds
      setTimeout(() => setShowProactive(false), 8000);
    }, 45000);

    return () => clearTimeout(timer);
  }, [hasInteracted, isOpen]);

  // Track user interaction
  useEffect(() => {
    const handleInteraction = () => setHasInteracted(true);
    window.addEventListener('click', handleInteraction, { once: true });
    window.addEventListener('scroll', handleInteraction, { once: true });
    return () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('scroll', handleInteraction);
    };
  }, []);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
    setIsLoading(true);
    setShowProactive(false);
    setHasInteracted(true);
    toast.info('AI Assistant Loading', {
      description: 'Opening AI Tor Assistant...'
    });
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

      {/* Proactive Engagement Bubble */}
      <AnimatePresence>
        {showProactive && !isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            className="fixed bottom-36 right-4 sm:bottom-40 sm:right-8 z-40 
              max-w-[250px] p-3 rounded-xl rounded-br-sm
              bg-gradient-to-br from-alien-gold/90 to-alien-gold-dark/90 
              backdrop-blur-md border border-alien-gold-light/50
              shadow-lg shadow-alien-gold/20 cursor-pointer"
            onClick={handleOpen}
          >
            <p className="text-alien-space-dark font-exo text-sm font-medium">
              {proactiveMessage}
            </p>
            <button
              onClick={(e) => { e.stopPropagation(); setShowProactive(false); }}
              className="absolute -top-2 -right-2 w-5 h-5 bg-alien-space-dark rounded-full 
                flex items-center justify-center border border-alien-gold/50 
                hover:bg-alien-gold/20 transition-colors"
            >
              <X className="w-3 h-3 text-alien-gold" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        onClick={handleOpen}
        className="fixed bottom-20 right-4 sm:bottom-24 sm:right-8 z-40
          bg-gradient-to-br from-alien-gold to-alien-gold-dark backdrop-blur-md 
          border-2 border-alien-gold-light rounded-full
          hover:scale-110 transition-all duration-300 
          shadow-2xl hover:shadow-alien-gold/50 ai-button-pulse
          overflow-hidden w-14 h-14 sm:w-16 sm:h-16"
        aria-label="Open AI Assistant"
      >
        <img 
          src={aiTorAvatar} 
          alt="AI Tor" 
          className="w-full h-full object-cover"
        />
      </motion.button>

      {/* Chat Window - Fullscreen on mobile, optimized size on desktop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed z-50 
              inset-0 sm:inset-auto
              sm:bottom-24 sm:right-8 
              sm:w-[360px] md:w-[380px] 
              sm:h-[480px] md:h-[520px]
              sm:max-h-[calc(100vh-8rem)]
              bg-alien-space-dark/98 backdrop-blur-xl 
              sm:border-2 border-alien-gold/40 sm:rounded-2xl 
              shadow-2xl overflow-hidden chat-glow"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-alien-space-dark via-alien-space/90 to-alien-space-dark 
              border-b border-alien-gold/30 p-3 sm:p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-alien-gold/50">
                  <img 
                    src={aiTorAvatar} 
                    alt="AI Tor" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-alien-gold font-bold font-nasalization text-sm sm:text-base">
                    AI Assistant
                  </h3>
                  <p className="text-xs text-alien-green font-exo">AI Tor</p>
                </div>
                {/* Status indicator with typing animation when loading */}
                <div className="flex items-center gap-1.5 ml-2">
                  {isLoading ? (
                    <div className="flex items-center gap-1">
                      <span className="typing-dot" />
                      <span className="typing-dot" style={{ animationDelay: '0.2s' }} />
                      <span className="typing-dot" style={{ animationDelay: '0.4s' }} />
                    </div>
                  ) : (
                    <>
                      <span className="w-2 h-2 bg-alien-green rounded-full animate-pulse" />
                      <span className="text-xs text-muted-foreground hidden sm:inline">Online</span>
                    </>
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

            {/* Loading State */}
            <AnimatePresence>
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 top-14 sm:top-16 flex flex-col items-center justify-center 
                    bg-alien-space-dark/95 z-10"
                >
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-alien-gold/50 mb-4">
                      <img 
                        src={aiTorAvatar} 
                        alt="AI Tor Loading" 
                        className="w-full h-full object-cover animate-pulse"
                      />
                    </div>
                    <Loader2 className="absolute -bottom-1 -right-1 h-8 w-8 text-alien-gold animate-spin" />
                  </div>
                  <p className="text-alien-gold font-nasalization text-sm mt-4">Loading AI Tor...</p>
                  {/* Typing indicator animation */}
                  <div className="flex gap-1.5 mt-3">
                    <span className="typing-dot-lg" />
                    <span className="typing-dot-lg" style={{ animationDelay: '0.15s' }} />
                    <span className="typing-dot-lg" style={{ animationDelay: '0.3s' }} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* iframe Content */}
            <iframe
              src="https://aitor.lovable.app/"
              className="w-full h-[calc(100%-3.5rem)] sm:h-[calc(100%-4rem)] border-none bg-alien-space-dark"
              title="AI Tor Assistant"
              allow="microphone; camera"
              onLoad={handleIframeLoad}
              onError={() => {
                setIsLoading(false);
                toast.error('AI Assistant Error', {
                  description: 'Failed to load AI assistant. Please try again.'
                });
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatbot;
