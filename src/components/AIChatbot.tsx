import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, X } from 'lucide-react';
import { toast } from 'sonner';

const AIChatbot = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    toast.info('AI Assistant Loading', {
      description: 'Opening Aitor AI Assistant...'
    });
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        onClick={handleOpen}
        className="fixed bottom-24 right-8 z-40 p-4 bg-gradient-to-br from-alien-gold to-alien-gold-dark backdrop-blur-md border-2 border-alien-gold-light rounded-full text-alien-space-dark hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-alien-gold/50"
        aria-label="Open AI Assistant"
      >
        <Brain className="h-7 w-7" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-8 z-50 w-[400px] h-[600px] max-w-[calc(100vw-2rem)] max-h-[calc(100vh-8rem)] bg-alien-space-dark/95 backdrop-blur-xl border-2 border-alien-gold/50 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-alien-gold/20 to-alien-gold-dark/20 border-b border-alien-gold/30 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-alien-gold/30 rounded-full">
                  <Brain className="h-5 w-5 text-alien-gold" />
                </div>
                <div>
                  <h3 className="text-alien-gold font-bold font-nasalization">
                    AI Assistant
                  </h3>
                  <p className="text-xs text-gray-400 font-[Exo]">Aitor AI</p>
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
              className="w-full h-[calc(100%-4rem)] border-none"
              title="Aitor AI Assistant"
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
