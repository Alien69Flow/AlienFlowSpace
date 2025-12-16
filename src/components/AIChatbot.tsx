import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, X } from 'lucide-react';
import { toast } from 'sonner';

const AIChatbot = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    toast.info('AI Assistant Loading', {
      description: 'Opening AI Tor Assistant...'
    });
  };

  return (
    <>
      {/* Dark overlay for mobile when chat is open */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm sm:hidden"
          />
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        onClick={handleOpen}
        className="fixed bottom-20 right-4 sm:bottom-24 sm:right-8 z-40 p-3 sm:p-4 
          bg-gradient-to-br from-alien-gold to-alien-gold-dark backdrop-blur-md 
          border-2 border-alien-gold-light rounded-full text-alien-space-dark 
          hover:scale-110 transition-all duration-300 
          shadow-2xl hover:shadow-alien-gold/50 ai-button-pulse"
        aria-label="Open AI Assistant"
      >
        <Brain className="h-6 w-6 sm:h-7 sm:w-7" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-4 right-4 sm:bottom-24 sm:right-8 z-50 
              w-[calc(100vw-2rem)] sm:w-[380px] md:w-[420px] 
              h-[calc(100vh-6rem)] sm:h-[550px] md:h-[600px]
              max-w-[420px] max-h-[calc(100vh-4rem)] sm:max-h-[calc(100vh-8rem)]
              bg-alien-space-dark/98 backdrop-blur-xl 
              border-2 border-alien-gold/40 rounded-2xl 
              shadow-2xl overflow-hidden chat-glow"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-alien-space-dark via-alien-space/90 to-alien-space-dark 
              border-b border-alien-gold/30 p-3 sm:p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-alien-gold/30 to-alien-green/20 rounded-full">
                  <Brain className="h-5 w-5 text-alien-gold" />
                </div>
                <div>
                  <h3 className="text-alien-gold font-bold font-nasalization text-sm sm:text-base">
                    AI Assistant
                  </h3>
                  <p className="text-xs text-alien-green font-exo">AI Tor</p>
                </div>
                {/* Status indicator */}
                <div className="flex items-center gap-1.5 ml-2">
                  <span className="w-2 h-2 bg-alien-green rounded-full animate-pulse" />
                  <span className="text-xs text-muted-foreground hidden sm:inline">Online</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:bg-alien-gold/20 rounded-lg transition-colors"
                aria-label="Close chat"
              >
                <X className="h-5 w-5 text-alien-gold" />
              </button>
            </div>

            {/* iframe Content */}
            <iframe
              src="https://aitor.lovable.app/"
              className="w-full h-[calc(100%-3.5rem)] sm:h-[calc(100%-4rem)] border-none bg-alien-space-dark"
              title="AI Tor Assistant"
              allow="microphone; camera"
              onError={() => {
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
