import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Send, Terminal, Loader2, ChevronRight,
  Twitter, Github, Disc, Instagram, Linkedin, 
  MessageCircle, Facebook, Share2, Globe, 
  BookOpen, Mail, Hash, User, Building2 
} from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [terminalInput, setTerminalInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  // Terminal Logic
  const [terminalHistory, setTerminalHistory] = useState([
    { type: 'ai', text: '[SYSTEM]: Neural Link established.' },
    { type: 'ai', text: '[AI-TOR]: DAO Support Channel ready.' }
  ]);
  
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalRef.current) terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
  }, [terminalHistory, isTyping]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const mailtoLink = `mailto:alien69flow@proton.me?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`FROM: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
    toast.success('TRANSMISSION INITIATED', {
      description: 'Opening secure mail channel...',
      style: { background: '#000', border: '1px solid #39FF14', color: '#39FF14' }
    });
    setTimeout(() => setIsSubmitting(false), 2000);
  };

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!terminalInput.trim()) return;
    setTerminalHistory(prev => [...prev, { type: 'user', text: terminalInput }]);
    const cmd = terminalInput.toLowerCase();
    setTerminalInput('');
    setIsTyping(true);

    setTimeout(() => {
      let response = "[ERR]: Unknown command. Try 'help'.";
      if (cmd.includes('help') || cmd.includes('ayuda')) response = "[AI-TOR]: Available: status, dao, contract, roadmap.";
      if (cmd.includes('status')) response = "[SYS]: All systems operational. TPS: Stable.";
      setTerminalHistory(prev => [...prev, { type: 'ai', text: response }]);
      setIsTyping(false);
    }, 600);
  };

  // DATA: Social Networks & Channels (ALPHABETICAL ORDER)
  const socialLinks = [
    { name: 'Company LinkedIn', icon: Building2, link: 'https://linkedin.com/company/alienflowspace', color: 'hover:text-[#0A66C2]', status: 'Active', display: 'AlienFlowSpace' },
    { name: 'Discord', icon: Disc, link: 'https://discord.gg/alienflow', color: 'hover:text-[#5865F2]', status: 'Coming Soon', display: 'alienflow' },
    { name: 'Email', icon: Mail, link: 'mailto:alien69flow@proton.me', color: 'hover:text-alien-gold', status: 'Active', display: 'alien69flow@proton.me' },
    { name: 'Facebook', icon: Facebook, link: 'https://www.facebook.com/Alien69Flow', color: 'hover:text-[#1877F2]', status: 'Active', display: 'Alien69Flow' },
    { name: 'GitBook', icon: BookOpen, link: 'https://alienflowspace.gitbook.io', color: 'hover:text-white', status: 'Active', display: 'Docs' },
    { name: 'GitHub', icon: Github, link: 'https://github.com/Alien69Flow', color: 'hover:text-white', status: 'Active', display: 'Alien69Flow' },
    { name: 'Instagram', icon: Instagram, link: 'https://www.instagram.com/alien69flow/', color: 'hover:text-[#E4405F]', status: 'Active', display: '@alien69flow' },
    { name: 'LinkedIn Personal', icon: User, link: 'https://linkedin.com/in/alien69flow', color: 'hover:text-[#0A66C2]', status: 'Active', display: 'alien69flow' },
    { name: 'Reddit', icon: Hash, link: 'https://reddit.com/user/Alien69Flow', color: 'hover:text-[#FF4500]', status: 'Active', display: 'u/Alien69Flow' }, // Usando Hash como fallback visual para Reddit
    { name: 'Telegram', icon: MessageCircle, link: 'https://t.me/AlienFlow', color: 'hover:text-[#0088cc]', status: 'Active', display: 'Group Chat' },
    { name: 'Threads', icon: Share2, link: 'https://threads.net/@alien69flow', color: 'hover:text-white', status: 'Active', display: '@alien69flow' },
    { name: 'TikTok', icon: Globe, link: '', color: 'hover:text-[#ff0050]', status: 'Coming Soon', display: '@alien69flow' },
    { name: 'X (Twitter)', icon: Twitter, link: 'https://x.com/alien69flow', color: 'hover:text-white', status: 'Active', display: '@alien69flow' },
  ];

  return (
    <div className="min-h-screen bg-transparent pb-24 px-4 md:px-12 font-exo overflow-hidden selection:bg-alien-green selection:text-black">
      <main className="max-w-7xl mx-auto pt-20">
        
        {/* SECTION 1: HEADER CON BURBUJA GALÁCTICA */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="mb-20 text-center flex flex-col items-center"
        >
          <h1 className="text-6xl md:text-8xl font-nasalization text-white tracking-tighter mb-8 drop-shadow-[0_0_35px_rgba(255,255,255,0.15)]">
            Contact Us
          </h1>
          
          {/* Galactic Chat Bubble */}
          <div className="relative max-w-2xl">
            <div className="absolute -inset-1 bg-gradient-to-r from-alien-green via-blue-500 to-purple-600 rounded-3xl blur opacity-25"></div>
            <div className="relative bg-black/60 backdrop-blur-xl border border-white/10 px-8 py-6 rounded-3xl rounded-bl-none shadow-2xl">
              <p className="text-gray-200 text-lg md:text-xl leading-relaxed font-light">
                Have questions or want to join the <span className="text-alien-green font-bold glow-sm">AlienFlowSpace DAO</span>? 
                Reach out through any of these cosmic channels:
              </p>
              {/* Bubble Tail */}
              <div className="absolute -bottom-3 left-0 w-6 h-6 bg-black/60 border-l border-b border-white/10 transform -rotate-45"></div>
            </div>
          </div>
        </motion.div>

        {/* SECTION 2: COSMIC CHANNELS GRID (ALPHABETICAL) */}
        <div className="mb-24">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {socialLinks.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.status === 'Coming Soon' ? '#' : item.link}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 + (i * 0.05) }}
                className={`flex flex-col items-center justify-between p-5 rounded-2xl border transition-all duration-300 group min-h-[140px] relative overflow-hidden
                  ${item.status === 'Coming Soon' 
                    ? 'bg-transparent border-white/5 opacity-40 cursor-not-allowed grayscale' 
                    : 'bg-white/[0.03] border-white/10 hover:border-alien-green/50 hover:bg-white/[0.06] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(57,255,20,0.1)]'
                  }`}
              >
                {/* Status Badge for Coming Soon */}
                {item.status === 'Coming Soon' && (
                  <span className="absolute top-2 right-2 text-[8px] font-mono bg-white/10 px-2 py-0.5 rounded text-gray-400">SOON</span>
                )}

                <div className={`p-3 rounded-full bg-black/30 border border-white/5 group-hover:border-white/20 transition-all ${item.status !== 'Coming Soon' ? item.color : ''}`}>
                  <item.icon className="w-6 h-6" />
                </div>
                
                <div className="text-center w-full">
                  <span className="text-[10px] font-mono uppercase text-gray-500 tracking-wider block mb-1 group-hover:text-alien-green transition-colors">
                    {item.name}
                  </span>
                  <span className="text-xs font-bold text-white truncate w-full block px-2 opacity-70 group-hover:opacity-100">
                    {item.display}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* SECTION 3: DIRECT CONTACT (Form & Terminal) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* LEFT: FORM */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-alien-green to-transparent opacity-20" />
            
            <h2 className="text-2xl font-nasalization text-white mb-8 flex items-center gap-3">
              <span className="text-alien-green">///</span> Secure Transmission
            </h2>

            <form onSubmit={handleFormSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label className="text-xs text-alien-gold font-mono uppercase">Identity</Label>
                  <Input 
                    placeholder="Name / Alias"
                    value={formData.name} 
                    onChange={(e) => setFormData({...formData, name: e.target.value})} 
                    required 
                    className="bg-black/40 border-white/10 focus:border-alien-green/50 rounded-xl text-white h-12" 
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs text-alien-gold font-mono uppercase">Signal Return</Label>
                  <Input 
                    type="email" 
                    placeholder="Email"
                    value={formData.email} 
                    onChange={(e) => setFormData({...formData, email: e.target.value})} 
                    required 
                    className="bg-black/40 border-white/10 focus:border-alien-green/50 rounded-xl text-white h-12" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-xs text-alien-gold font-mono uppercase">Frequency (Subject)</Label>
                <Input 
                  value={formData.subject} 
                  onChange={(e) => setFormData({...formData, subject: e.target.value})} 
                  required 
                  className="bg-black/40 border-white/10 focus:border-alien-green/50 rounded-xl text-white h-12" 
                />
              </div>

              <div className="space-y-2">
                <Label className="text-xs text-alien-gold font-mono uppercase">Packet Data</Label>
                <Textarea 
                  value={formData.message} 
                  onChange={(e) => setFormData({...formData, message: e.target.value})} 
                  required 
                  rows={6}
                  className="bg-black/40 border-white/10 focus:border-alien-green/50 rounded-xl text-white resize-none" 
                />
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting} 
                className="w-full bg-alien-green hover:bg-alien-green/80 text-black font-bold h-14 rounded-xl text-lg tracking-wide transition-all"
              >
                {isSubmitting ? <Loader2 className="animate-spin" /> : 'ESTABLISH LINK'}
              </Button>
            </form>
          </motion.div>

          {/* RIGHT: AI TERMINAL */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            animate={{ opacity: 1, x: 0 }} 
            className="flex flex-col h-[600px] bg-black border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl"
          >
            {/* Terminal Header */}
            <div className="bg-[#1a1a1a] p-4 border-b border-white/5 flex justify-between items-center px-6">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
              </div>
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">ai-tor_daemon_v2.0</span>
            </div>

            {/* Terminal Body */}
            <div 
              ref={terminalRef} 
              className="flex-1 p-6 font-mono text-xs space-y-3 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent"
            >
              {terminalHistory.map((m, i) => (
                <div key={i} className={`leading-relaxed ${m.type === 'ai' ? 'text-alien-green' : 'text-blue-400'}`}>
                  <span className="opacity-50 mr-2 select-none">{m.type === 'ai' ? '➜' : '$'}</span>
                  {m.text}
                </div>
              ))}
              {isTyping && (
                <div className="flex items-center gap-1 text-alien-green">
                  <span className="opacity-50 mr-2">➜</span>
                  <span className="w-2 h-4 bg-alien-green animate-pulse" />
                </div>
              )}
            </div>

            {/* Terminal Input */}
            <form onSubmit={handleTerminalSubmit} className="p-4 bg-[#0a0a0a] border-t border-white/10 flex items-center gap-3">
              <Terminal className="w-4 h-4 text-gray-500" />
              <input 
                value={terminalInput} 
                onChange={(e) => setTerminalInput(e.target.value)} 
                className="bg-transparent border-none outline-none flex-1 text-white font-mono text-sm placeholder:text-gray-700" 
                placeholder="Type command..." 
                autoComplete="off"
              />
            </form>
          </motion.div>

        </div>
      </main>
    </div>
  );
};

export default Contact;
