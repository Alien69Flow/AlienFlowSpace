import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Send, Mail, MessageSquare, X, Facebook, Instagram, Disc, Github, Linkedin, BookOpen, Users, Terminal, Shield, Scale, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import aiTorAvatar from '@/assets/ai-tor-avatar.jpg';

const Contact: React.FC = () => {
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState<Array<{ type: 'user' | 'system' | 'ai'; text: string }>>([
    { type: 'system', text: '> AlienFlowSpace Communication Terminal v2.0' },
    { type: 'system', text: '> Establishing secure connection...' },
    { type: 'ai', text: '¡Hola, viajero cósmico! Soy AI Tor. ¿En qué puedo ayudarte hoy?' },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll terminal
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalHistory]);

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!terminalInput.trim()) return;

    // Add user message
    setTerminalHistory(prev => [...prev, { type: 'user', text: terminalInput }]);
    const userMessage = terminalInput.toLowerCase();
    setTerminalInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      let response = '';
      
      if (userMessage.includes('dao') || userMessage.includes('gobernanza') || userMessage.includes('votar')) {
        response = 'La DAO de AlienFlowSpace opera en Polygon. Puedes participar en votaciones y propuestas a través de Aragon. ¿Quieres que te envíe el enlace directo?';
      } else if (userMessage.includes('nft') || userMessage.includes('colección')) {
        response = 'Nuestras colecciones NFT están disponibles en OpenSea: Alien69Flow y AlienFlowSpace. Son tu pasaporte al ecosistema. ¿Te interesa más información sobre los beneficios?';
      } else if (userMessage.includes('ayuda') || userMessage.includes('soporte')) {
        response = 'Estoy aquí para ayudarte. Puedes preguntarme sobre: DAO, NFTs, tokenomics, roadmap, partners o cualquier duda técnica. También puedes contactar al equipo por Telegram: @AlienFlow';
      } else if (userMessage.includes('legal') || userMessage.includes('términos')) {
        response = 'Para consultas legales, revisa nuestra política de privacidad en /privacy-policy. Para asuntos específicos, contacta: alien69flow@proton.me';
      } else if (userMessage.includes('token') || userMessage.includes('afs') || userMessage.includes('a69')) {
        response = 'Los tokens principales son $AFS (AlienFlowSpace) y $A69 (Alien69Flow), ambos en la red Polygon. ¿Quieres información sobre tokenomics o cómo adquirirlos?';
      } else if (userMessage.includes('hola') || userMessage.includes('hi') || userMessage.includes('hello')) {
        response = '¡Bienvenido a bordo! 👽 ¿Qué te gustaría saber sobre AlienFlowSpace? Puedo ayudarte con información sobre la DAO, NFTs, tokens, roadmap y mucho más.';
      } else {
        response = 'Interesante consulta. Déjame procesar... Para asistencia detallada, te sugiero contactar directamente por Telegram (@AlienFlow) o email. ¿Hay algo específico sobre el ecosistema que pueda explicarte?';
      }

      setTerminalHistory(prev => [...prev, { type: 'ai', text: response }]);
      setIsTyping(false);
    }, 1500);
  };

  const socialLinks = [
    { icon: Disc, name: 'Discord', link: '', text: 'discord.gg/alienflow', comingSoon: true },
    { icon: Mail, name: 'Email', link: 'mailto:alien69flow@proton.me', text: 'alien69flow@proton.me' },
    { icon: Facebook, name: 'Facebook', link: 'https://www.facebook.com/Alien69Flow', text: 'facebook.com/Alien69Flow' },
    { icon: BookOpen, name: 'GitBook', link: 'https://alienflowspace.gitbook.io/DAO', text: 'alienflowspace.gitbook.io' },
    { icon: Github, name: 'GitHub', link: 'https://github.com/Alien69Flow', text: 'github.com/Alien69Flow' },
    { icon: Instagram, name: 'Instagram', link: 'https://www.instagram.com/alien69flow/', text: '@alien69flow' },
    { icon: Linkedin, name: 'LinkedIn', link: 'https://linkedin.com/company/alienflowspace', text: 'alienflowspace' },
    { icon: Users, name: 'Telegram', link: 'https://t.me/AlienFlow', text: 't.me/AlienFlow' },
    { icon: MessageSquare, name: 'Threads', link: 'https://threads.net/@alien69flow', text: '@alien69flow' },
    { icon: X, name: 'X', link: 'https://x.com/alien69flow', text: '@alien69flow' },
  ];

  return (
    <div className="relative flex flex-col flex-1 min-h-screen">
      <main className="relative z-10 flex-grow container mx-auto px-4 pt-4 pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Hero */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative mb-12 py-8"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-nasalization text-center font-extrabold relative">
              <span className="bg-gradient-to-r from-alien-green via-alien-gold to-alien-green bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(57,255,20,0.5)]">
                Space Terminal
              </span>
            </h1>
            <p className="text-center text-gray-400 font-exo mt-4 max-w-2xl mx-auto">
              Centro de comunicaciones intergaláctico. Conecta con el equipo y la comunidad.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Terminal Interface */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-alien-space-dark/95 to-black border-2 border-alien-green/40 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(57,255,20,0.15)]"
            >
              {/* Terminal Header */}
              <div className="bg-gradient-to-r from-alien-green/20 to-alien-gold/10 border-b border-alien-green/30 px-4 py-3 flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex items-center gap-2 flex-1">
                  <Terminal className="w-4 h-4 text-alien-green" />
                  <span className="text-alien-green font-mono text-sm">ai-tor@alienflowspace:~</span>
                </div>
                <div className="w-8 h-8 rounded-full overflow-hidden border border-alien-gold/50">
                  <img src={aiTorAvatar} alt="AI Tor" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Terminal Body */}
              <div 
                ref={terminalRef}
                className="h-[400px] overflow-y-auto p-4 font-mono text-sm space-y-2 scrollbar-thin scrollbar-thumb-alien-green/30 scrollbar-track-transparent"
                onClick={() => inputRef.current?.focus()}
              >
                <AnimatePresence>
                  {terminalHistory.map((entry, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`${
                        entry.type === 'user' 
                          ? 'text-alien-gold' 
                          : entry.type === 'system' 
                          ? 'text-gray-500' 
                          : 'text-alien-green'
                      }`}
                    >
                      {entry.type === 'user' && <span className="text-gray-500">{'>'} </span>}
                      {entry.type === 'ai' && <span className="text-purple-400">[AI Tor] </span>}
                      {entry.text}
                    </motion.div>
                  ))}
                </AnimatePresence>
                
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-alien-green flex items-center gap-2"
                  >
                    <span className="text-purple-400">[AI Tor]</span>
                    <span className="flex gap-1">
                      <span className="w-2 h-2 bg-alien-green rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                      <span className="w-2 h-2 bg-alien-green rounded-full animate-bounce" style={{ animationDelay: '0.15s' }} />
                      <span className="w-2 h-2 bg-alien-green rounded-full animate-bounce" style={{ animationDelay: '0.3s' }} />
                    </span>
                  </motion.div>
                )}
              </div>

              {/* Terminal Input */}
              <form onSubmit={handleTerminalSubmit} className="border-t border-alien-green/30 p-4">
                <div className="flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-alien-green" />
                  <input
                    ref={inputRef}
                    type="text"
                    value={terminalInput}
                    onChange={(e) => setTerminalInput(e.target.value)}
                    placeholder="Escribe tu mensaje..."
                    className="flex-1 bg-transparent border-none outline-none text-alien-gold font-mono placeholder:text-gray-600"
                    disabled={isTyping}
                  />
                  <Button
                    type="submit"
                    size="sm"
                    disabled={isTyping || !terminalInput.trim()}
                    className="bg-alien-green/20 hover:bg-alien-green/30 text-alien-green border border-alien-green/50"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </form>
            </motion.div>

            {/* Support & Social Links */}
            <div className="space-y-6">
              {/* Quick Support Cards */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-2 gap-4"
              >
                <a 
                  href="https://alienflowspace.gitbook.io/DAO" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/40 rounded-xl hover:border-blue-500/60 transition-all group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <BookOpen className="w-5 h-5 text-blue-400" />
                    <span className="text-blue-400 font-nasalization font-semibold">Documentación</span>
                  </div>
                  <p className="text-gray-400 text-sm font-exo">Guías técnicas y roadmap</p>
                </a>
                <a 
                  href="/privacy-policy"
                  className="p-4 bg-gradient-to-br from-purple-500/20 to-purple-600/10 border border-purple-500/40 rounded-xl hover:border-purple-500/60 transition-all group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Scale className="w-5 h-5 text-purple-400" />
                    <span className="text-purple-400 font-nasalization font-semibold">Legal</span>
                  </div>
                  <p className="text-gray-400 text-sm font-exo">Política de privacidad</p>
                </a>
                <a 
                  href="mailto:alien69flow@proton.me"
                  className="p-4 bg-gradient-to-br from-green-500/20 to-green-600/10 border border-green-500/40 rounded-xl hover:border-green-500/60 transition-all group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Shield className="w-5 h-5 text-green-400" />
                    <span className="text-green-400 font-nasalization font-semibold">Soporte Técnico</span>
                  </div>
                  <p className="text-gray-400 text-sm font-exo">alien69flow@proton.me</p>
                </a>
                <a 
                  href="https://t.me/AlienFlow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 border border-cyan-500/40 rounded-xl hover:border-cyan-500/60 transition-all group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Users className="w-5 h-5 text-cyan-400" />
                    <span className="text-cyan-400 font-nasalization font-semibold">Comunidad</span>
                  </div>
                  <p className="text-gray-400 text-sm font-exo">Telegram @AlienFlow</p>
                </a>
              </motion.div>

              {/* Social Links Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-alien-space-dark/80 border border-alien-gold/30 rounded-xl p-6"
              >
                <h3 className="text-alien-gold font-nasalization text-lg mb-4 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Canales de Comunicación
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((social, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + idx * 0.05 }}
                    >
                      {social.comingSoon ? (
                        <div className="flex items-center gap-3 p-3 bg-alien-space-light/20 rounded-lg border border-gray-700/50 opacity-60">
                          <social.icon className="w-5 h-5 text-gray-500" />
                          <div className="flex-1 min-w-0">
                            <p className="text-gray-500 font-exo text-sm truncate">{social.name}</p>
                            <span className="text-[10px] text-orange-400">Coming Soon</span>
                          </div>
                        </div>
                      ) : (
                        <a
                          href={social.link}
                          target={social.link.startsWith('http') ? '_blank' : undefined}
                          rel={social.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="flex items-center gap-3 p-3 bg-alien-space-light/20 rounded-lg border border-alien-gold/20 hover:border-alien-green/40 hover:bg-alien-space-light/30 transition-all group"
                        >
                          <social.icon className="w-5 h-5 text-alien-gold group-hover:text-alien-green transition-colors" />
                          <div className="flex-1 min-w-0">
                            <p className="text-gray-300 font-exo text-sm truncate group-hover:text-alien-green transition-colors">
                              {social.text}
                            </p>
                          </div>
                        </a>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
