import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Rocket, Zap, Send, ExternalLink } from 'lucide-react';
import aiTorAvatar from '@/assets/ai-tor-avatar.jpg';
import { trackEvent } from '@/lib/analytics';
import { spaces } from '@/data/spaces';

type Message = {
  id: number;
  sender: 'ai' | 'user';
  text: string;
  links?: { label: string; url: string }[];
};

const AI_TOR_URL = 'https://aitor.alienflow.space/';

interface KnowledgeEntry {
  keywords: string[];
  response: string;
  links?: { label: string; url: string }[];
}

const KNOWLEDGE_BASE: KnowledgeEntry[] = [
  {
    keywords: ['academy', 'learn', 'course', 'education', 'study', 'tutorial', 'teach'],
    response: `The Academy is our learning hub with ${spaces[0].partners}+ platforms covering blockchain, DeFi, sustainability, and more. You'll find courses from edX, Hotmart, SkillShare, MasterClass, UNED, and many others — all curated to take you from beginner to expert.`,
    links: [{ label: 'Explore Academy', url: '/academy' }],
  },
  {
    keywords: ['club', 'community', 'belong', 'join', 'group', 'member'],
    response: `Clubs are specialized communities within the ecosystem — crypto, gaming, music, and more. With ${spaces[1].partners}+ partner communities, you can find your tribe and connect with people who share your passions.`,
    links: [{ label: 'Browse Clubs', url: '/clubs' }],
  },
  {
    keywords: ['conetworking', 'network', 'connect', 'collaborate', 'partner', 'work together', 'business'],
    response: `CoNetWorKing is where collaboration happens. Connect with ${spaces[2].partners}+ aligned people and projects to build together. Whether you need a co-founder, a freelancer, or a strategic partner, this is the place.`,
    links: [{ label: 'Start Connecting', url: '/conetworking' }],
  },
  {
    keywords: ['dao', 'governance', 'vote', 'proposal', 'token', 'aragon'],
    response: 'The AlienFlowSpace DAO uses Aragon for decentralized governance. Token holders can create proposals, vote on initiatives, and shape the future of the ecosystem. Every voice matters in cosmic governance.',
    links: [{ label: 'DAO Documentation', url: 'https://alienflowspace.gitbook.io/DAO' }],
  },
  {
    keywords: ['newsletter', 'subscribe', 'email', 'updates', 'news', 'stay connected'],
    response: 'Subscribe to our newsletter on the Contact page to receive updates, new drops, bonuses, and exclusive discounts. We never spam — just meaningful cosmic signals. You can unsubscribe anytime.',
    links: [{ label: 'Subscribe', url: '/contact' }],
  },
  {
    keywords: ['nft', 'opensea', 'drop', 'collectible', 'art'],
    response: "Our NFT collection lives on OpenSea. These aren't just collectibles — they're keys to the ecosystem, granting access to exclusive clubs, DAO voting power, and special rewards.",
    links: [{ label: 'View on OpenSea', url: 'https://opensea.io/' }],
  },
  {
    keywords: ['contact', 'support', 'help', 'reach', 'email contact', 'message'],
    response: 'You can reach us at contact@alienflow.space or through any of our 14+ social channels — Discord, Telegram, X, Instagram, LinkedIn, GitHub, and more. Visit the Contact page for the full list.',
    links: [{ label: 'Contact Page', url: '/contact' }],
  },
  {
    keywords: ['roadmap', 'future', 'plan', 'what next', 'timeline'],
    response: 'Our roadmap includes expanding the Academy curriculum, launching new Club partnerships, growing the CoNetWorKing platform, and releasing new NFT collections. The DAO votes on all major milestones.',
  },
  {
    keywords: ['tesla', '369', 'frequency', 'neutrino', 'cosmic code', '3-6-9'],
    response: 'Tesla\'s 3-6-9 frequency principle guides our cosmic philosophy. We believe in unifying science, community, and decentralized technology at a universal frequency. The code is active.',
  },
  {
    keywords: ['tokenomics', 'token', 'economy', 'supply', 'distribution'],
    response: 'Our tokenomics model is designed for long-term sustainability with community rewards, DAO governance rights, and ecosystem utility. Full details are in our GitBook documentation.',
    links: [{ label: 'Tokenomics Docs', url: 'https://alienflowspace.gitbook.io/DAO' }],
  },
  {
    keywords: ['wallet', 'connect', 'metamask', 'web3', 'crypto wallet'],
    response: 'You can connect your wallet using the button in the header. We support MetaMask, WalletConnect, and other major Web3 wallets. Connecting lets you interact with the DAO and access exclusive features.',
  },
  {
    keywords: ['eco', 'sustainable', 'green', 'environment', 'merch', 'product'],
    response: 'Our eco-friendly merch line features sustainable products — from baseball caps to bucket hats, all designed with cosmic aesthetics and environmental responsibility. Check the merch section!',
  },
  {
    keywords: ['price', 'ticker', 'market', 'crypto price', 'bitcoin price'],
    response: 'Check the live price ticker in the header for real-time crypto prices. We track BTC, ETH, and other major tokens to keep you informed of market movements.',
  },
  {
    keywords: ['who', 'what is', 'about', 'alienflow', 'what alienflowspace'],
    response: 'AlienFlowSpace is a decentralized ecosystem uniting blockchain, education, and community under a cosmic governance structure. We have three core spaces: Academy (learn), Clubs (belong), and CoNetWorKing (collaborate). Together we build the future of decentralized finance across the multiverse.',
    links: [{ label: 'About Us', url: '/about' }],
  },
];

const GREETING_RESPONSE = "I'm AI Tor, your guide to the AlienFlowSpace ecosystem. Ask me about our Academy, Clubs, CoNetWorKing, the DAO, NFTs, tokenomics, or anything else you'd like to explore!";

const FALLBACK_RESPONSE = "I'm not sure about that yet, but I'm always learning. Try asking me about our Academy, Clubs, CoNetWorKing, the DAO, NFTs, newsletter, or how to get involved!";

function findResponse(input: string): KnowledgeEntry | null {
  const lower = input.toLowerCase();
  let bestMatch: KnowledgeEntry | null = null;
  let bestScore = 0;

  for (const entry of KNOWLEDGE_BASE) {
    let score = 0;
    for (const keyword of entry.keywords) {
      if (lower.includes(keyword)) {
        score += keyword.split(' ').length > 1 ? 3 : 1;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = entry;
    }
  }

  return bestScore > 0 ? bestMatch : null;
}

const AI_DAPP_ROLES = [
  { id: 'welcome', role: 'Sistemas Tor', icon: Rocket, color: '#39FF14', messages: ["What can I help you explore?"] },
  { id: 'promo', role: 'Oportunidad', icon: Sparkles, color: '#EC4899', messages: ["Discover the ecosystem!"] },
  { id: 'dao', role: 'Voz de la DAO', icon: Zap, color: '#F0D882', messages: ["Your vote is your power."] }
];

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProactive, setShowProactive] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [messages, setMessages] = useState<Message[]>([
    { id: 0, sender: 'ai', text: "Connection established. I'm AI Tor — your cosmic guide to AlienFlowSpace. Ask me anything!" },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const messageIdRef = useRef(1);

  const currentRole = useMemo(() => AI_DAPP_ROLES[currentRoleIndex], [currentRoleIndex]);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, scrollToBottom]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  useEffect(() => {
    if (hasInteracted || isOpen) return;
    const timer = setTimeout(() => {
      setCurrentRoleIndex(Math.floor(Math.random() * AI_DAPP_ROLES.length));
      setShowProactive(true);
      setTimeout(() => setShowProactive(false), 10000);
    }, 18000);
    return () => clearTimeout(timer);
  }, [hasInteracted, isOpen]);

  useEffect(() => {
    const handleInteraction = () => setHasInteracted(true);
    const events = ['mousedown', 'keydown', 'touchstart'];
    events.forEach(e => window.addEventListener(e, handleInteraction, { once: true }));
    return () => events.forEach(e => window.removeEventListener(e, handleInteraction));
  }, []);

  const handleSend = () => {
    const text = input.trim();
    if (!text || isTyping) return;

    const userMsg: Message = { id: messageIdRef.current++, sender: 'user', text };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);
    trackEvent('chat_message', { message: text.substring(0, 50) });

    setTimeout(() => {
      const match = findResponse(text);
      const aiMsg: Message = {
        id: messageIdRef.current++,
        sender: 'ai',
        text: match ? match.response : FALLBACK_RESPONSE,
        links: match?.links,
      };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 600 + Math.random() * 500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const quickQuestions = [
    'What is AlienFlowSpace?',
    'Tell me about the Academy',
    'How does the DAO work?',
    'How do I join?',
  ];

  return (
    <>
      <motion.button
        initial={{ scale: 0, rotate: -180, filter: "blur(20px)" }}
        animate={{ scale: 1, rotate: 0, filter: "blur(0px)" }}
        transition={{ type: "spring", stiffness: 200, damping: 20, delay: 1.5 }}
        whileHover={{ scale: 1.1, boxShadow: `0 0 25px ${currentRole.color}44` }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[120] w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-alien-gold/40 overflow-hidden bg-black shadow-2xl"
        aria-label="Open AI Tor chat"
      >
        <img src={aiTorAvatar} alt="AI Tor" className="w-full h-full object-cover" />
      </motion.button>

      <AnimatePresence>
        {showProactive && !isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 50, scale: 0.8 }}
            onClick={() => {
              trackEvent('chat_open', { app: 'aitor' });
              setIsOpen(true);
            }}
            className="fixed bottom-24 right-6 z-[121] max-w-[260px] p-4 rounded-2xl bg-black/90 backdrop-blur-xl border border-white/10 shadow-2xl cursor-pointer"
            style={{ borderLeft: `4px solid ${currentRole.color}` }}
          >
            <div className="flex items-center gap-2 mb-1">
              <currentRole.icon size={12} style={{ color: currentRole.color }} />
              <span className="text-[11px] font-nasalization text-alien-gold tracking-widest uppercase">{currentRole.role}</span>
            </div>
            <p className="text-white text-xs font-exo leading-tight">{currentRole.messages[0]}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0, x: 150, y: 150, filter: "blur(20px)" }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0, x: 150, y: 150, filter: "blur(20px)" }}
            transition={{ duration: 0.5, ease: "circOut" }}
            className="fixed z-[9999] bottom-6 right-6 left-6 sm:left-auto sm:w-[420px] md:w-[480px] h-[80vh] max-h-[700px] bg-alien-space-dark rounded-[2.5rem] border-2 border-alien-gold/30 shadow-[0_0_80px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col"
          >
            <div className="p-5 bg-black/60 border-b border-white/10 flex justify-between items-center flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full border border-alien-green/50 p-0.5">
                  <img src={aiTorAvatar} alt="AI" className="w-full h-full rounded-full object-cover" />
                </div>
                <div>
                  <h3 className="text-alien-gold font-nasalization text-[11px] tracking-widest leading-none">AI TOR INTERFACE</h3>
                  <span className="text-alien-green text-[11px] font-exo uppercase animate-pulse">Online · Neural Link Active</span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <a
                  href={AI_TOR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-white/10 rounded-full text-white/50 hover:text-alien-green transition-all"
                  title="Open Full AI Tor"
                >
                  <ExternalLink size={18} />
                </a>
                <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full text-white/50 hover:text-alien-green transition-all" aria-label="Close chat">
                  <X size={22} />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-black/30">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[85%] px-4 py-2.5 text-sm leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-alien-gold/20 border border-alien-gold/30 text-white rounded-2xl rounded-br-sm'
                        : 'bg-white/5 border border-white/10 text-alien-green/90 rounded-2xl rounded-bl-sm'
                    }`}
                  >
                    <p>{msg.text}</p>
                    {msg.links && msg.links.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-2">
                        {msg.links.map((link, i) => (
                          <a
                            key={i}
                            href={link.url}
                            className="inline-flex items-center gap-1 text-[11px] text-alien-gold hover:text-alien-gold-light underline"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/10 rounded-2xl rounded-bl-sm px-4 py-3">
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 bg-alien-green rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-1.5 h-1.5 bg-alien-green rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-1.5 h-1.5 bg-alien-green rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}

              {messages.length === 1 && !isTyping && (
                <div className="pt-2">
                  <p className="text-[11px] text-white/40 mb-2 px-1">Quick questions:</p>
                  <div className="flex flex-wrap gap-2">
                    {quickQuestions.map((q, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          setInput(q);
                          setTimeout(() => {
                            const userMsg: Message = { id: messageIdRef.current++, sender: 'user', text: q };
                            setMessages(prev => [...prev, userMsg]);
                            setInput('');
                            setIsTyping(true);
                            trackEvent('chat_message', { message: q.substring(0, 50) });
                            setTimeout(() => {
                              const match = findResponse(q);
                              setMessages(prev => [...prev, {
                                id: messageIdRef.current++,
                                sender: 'ai',
                                text: match ? match.response : FALLBACK_RESPONSE,
                                links: match?.links,
                              }]);
                              setIsTyping(false);
                            }, 600);
                          }, 50);
                        }}
                        className="text-[11px] px-3 py-1.5 bg-white/5 border border-white/10 text-alien-green/70 hover:text-alien-gold hover:border-alien-gold/30 rounded-full transition-all"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 border-t border-white/10 bg-black/40 flex-shrink-0">
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask AI Tor anything..."
                  className="flex-1 bg-white/5 border border-white/10 text-white text-sm px-4 py-2.5 rounded-full focus:outline-none focus:border-alien-green/50 placeholder:text-white/30 transition-colors"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isTyping}
                  className="w-10 h-10 rounded-full bg-alien-gold/20 border border-alien-gold/30 text-alien-gold hover:bg-alien-gold/30 disabled:opacity-30 flex items-center justify-center transition-all flex-shrink-0"
                  aria-label="Send message"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatbot;
