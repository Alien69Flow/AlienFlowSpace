import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send, Terminal, Loader2, ShieldAlert, LifeBuoy } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

const BrandLogos = {
  Discord: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
    </svg>
  ),
  DoraHacks: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 0L1.608 6v12L12 24l10.392-6V6L12 0zm8.66 16.75L12 21.75l-8.66-5V7.25L12 2.25l8.66 5v9.5zM12 5.5l5.5 3.2v6.6l-5.5 3.2-5.5-3.2v-6.6L12 5.5z"/>
    </svg>
  ),
  Facebook: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  ),
  GitBook: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M19.13 11.83l-5.35-5.35c-.39-.39-1.01-.39-1.4 0l-5.35 5.35c-.39.39-.39 1.02 0 1.41l5.35 5.35c.39.39 1.01.39 1.4 0l5.35-5.35c.39-.4.39-1.02 0-1.41zm-6.05 3.86l-2.45-2.45 2.45-2.45 2.45 2.45-2.45 2.45zM21 1h-6.18C13.4.45 11.74 0 10 0 4.48 0 0 4.48 0 10s4.48 10 10 10c1.74 0 3.4-.45 4.82-1.25L19.5 23l1.41-1.41-4.24-4.24C19.06 15.65 20.46 13.5 20.91 11h2.09V9h-2.09c-.19-1.05-.54-2.03-1.01-2.91L21.36 4.64 19.95 3.23l-1.45 1.45C17.62 4.21 16.63 3.86 15.58 3.67V1h-2v2.67c-1.14.21-2.22.61-3.21 1.17L8.91 3.39 7.5 4.8l1.45 1.45c-.56.99-.96 2.07-1.17 3.21H5.11v2h2.67c.21 1.14.61 2.22 1.17 3.21l-1.45 1.45 1.41 1.41 1.45-1.45c.99.56 2.07.96 3.21 1.17V21h2v-2.67c1.05-.19 2.03-.54 2.91-1.01l1.45 1.45 1.41 1.41-1.45-1.45c.47-.88.82-1.86 1.01-2.91H21v-2z"/>
    </svg>
  ),
  GitHub: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  ),
  HackMD: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M14.28 1.984c.32 0 .584.264.584.584V21.43c0 .32-.264.584-.584.584h-4.56c-.32 0-.584-.264-.584-.584V2.568c0-.32.264-.584.584-.584h4.56zM5.38 5.744c.32 0 .584.264.584.584V17.67c0 .32-.264.584-.584.584h-4.8c-.32 0-.584-.264-.584-.584V6.328c0-.32.264-.584.584-.584h4.8zm18.04 0c.32 0 .584.264.584.584V17.67c0 .32-.264.584-.584.584h-4.8c-.32 0-.584-.264-.584-.584V6.328c0-.32.264-.584.584-.584h4.8z"/>
    </svg>
  ),
  Instagram: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608C2.024 15.581 2.012 15.201 2.012 12s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07M12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
    </svg>
  ),
  LinkedIn: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.778-.773 1.778-1.729V1.729C24 .774 23.206 0 22.225 0z"/>
    </svg>
  ),
  Reddit: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.057 1.597.047.282.067.559.067.845 0 2.911-3.544 5.275-7.917 5.275s-7.917-2.364-7.917-5.275c0-.272.02-.539.06-.809C4.57 13.379 4.132 12.76 4.132 12c0-.968.786-1.754 1.754-1.754.463 0 .875.18 1.185.472 1.201-.86 2.87-1.426 4.71-1.487l.934-4.388 2.3.485c-.053.133-.083.277-.083.425zm-4.362 9.157c-.652 0-1.18.528-1.18 1.18 0 .652.528 1.18 1.18 1.18.652 0 1.18-.528 1.18-1.18 0-.652-.528-1.18-1.18-1.18zm4.476 0c-.652 0-1.18.528-1.18 1.18 0 .652.528 1.18 1.18 1.18.652 0 1.18-.528 1.18-1.18 0-.652-.528-1.18-1.18-1.18zm-3.959 3.377c-.116 0-.232.044-.319.131-.418.417-1.098.417-1.516 0-.087-.087-.203-.131-.319-.131a.451.451 0 0 0-.321.77c.77.77 2.03.77 2.8 0a.451.451 0 0 0-.325-.77z"/>
    </svg>
  ),
  Telegram: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zM17.5 8.083l-2.013 9.491c-.15.672-.548.836-1.111.519l-3.07-2.262-1.482 1.426c-.164.164-.301.302-.617.302l.221-3.12 5.679-5.128c.247-.22-.054-.341-.383-.122l-7.018 4.418-3.024-.946c-.657-.206-.67-.657.137-.972l11.815-4.553c.547-.199 1.026.128.886 1.002z"/>
    </svg>
  ),
  Threads: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.858 13.52c-.373 2.53-2.003 4.42-4.583 4.42-1.92 0-3.378-1.125-3.378-3.335V9.455c0-2.21 1.458-3.335 3.378-3.335 2.58 0 4.21 1.89 4.583 4.42.043.29.063.59.063.895 0 .305-.02.605-.063.895zm-1.875-1.91c0-.205-.015-.41-.045-.61-.25-1.705-1.325-2.815-2.71-2.815-1.285 0-2.205.745-2.205 2.185v5.15c0 1.44.92 2.185 2.205 2.185 1.385 0 2.46-1.11 2.71-2.815.03-.2.045-.405.045-.61V11.61z"/>
    </svg>
  ),
  TikTok: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12.525.02c1.31 0 2.59.32 3.72.93a6.45 6.45 0 0 1-3.1 5.36 6.47 6.47 0 0 1-1.14.51v4.35a10.87 10.87 0 0 0 6.41-2.29c.14-.1.27-.21.4-.33V12.7c-1.35.43-2.76.65-4.18.65h-.05a6.47 6.47 0 0 1-6.47-6.47c0-3.57 2.9-6.47 6.47-6.47h.34z"/>
    </svg>
  ),
  X: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  ),
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [terminalInput, setTerminalInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalRef.current) terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
  }, [terminalInput, isTyping]);

  const [terminalHistory, setTerminalHistory] = useState([
    { type: 'ai', text: '>>> [SYS]: Ai Tor ΔlieπFlΦw $pac€ DAO Link Established.' },
    { type: 'ai', text: '>>> [AiTor]: Conexión neuronal activa. ¿Cómo puedo ayudarte ahora?' }
  ]);

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
    const input = terminalInput.trim();
    if (!input) return;
    setTerminalHistory(prev => [...prev, { type: 'user', text: input }]);
    setTerminalInput('');
    setIsTyping(true);
    setTimeout(() => {
      const lowInput = input.toLowerCase();
      let response = ">>> [AiTor]: Datos procesados. Sugiero revisar la documentación en GitBook o repositorios en Github.";
      if (lowInput.includes('status')) response = ">>> [SYS]: 369Hz. Sistemas al 1234% de capacidad.";
      if (lowInput.includes('dao')) response = ">>> [AiTor]: Ai Tor ΔlieπFlΦw opera como una inteligencia cuántica.";
      setTerminalHistory(prev => [...prev, { type: 'ai', text: response }]);
      setIsTyping(false);
    }, 700);
  };

  const socialLinks = [
    { name: 'Discord', icon: BrandLogos.Discord, link: 'https://discord.gg/alienflowspace', color: 'hover:text-[#5865F2]', status: 'Active' },
    { name: 'DoraHacks', icon: BrandLogos.DoraHacks, link: 'https://dorahacks.io/hacker/Alien69Flow', color: 'hover:text-[#ffaa00]', status: 'Active' },
    { name: 'Facebook', icon: BrandLogos.Facebook, link: 'https://www.facebook.com/Alien69Flow', color: 'hover:text-[#1877F2]', status: 'Active' },
    { name: 'GitBook', icon: BrandLogos.GitBook, link: 'https://alienflowspace.gitbook.io', color: 'hover:text-[#3B82F6]', status: 'Active' },
    { name: 'GitHub', icon: BrandLogos.GitHub, link: 'https://github.com/Alien69Flow', color: 'hover:text-white', status: 'Active' },
    { name: 'HackMD', icon: BrandLogos.HackMD, link: 'https://hackmd.io/@Alien69Flow', color: 'hover:text-gray-200', status: 'Active' },
    { name: 'Instagram', icon: BrandLogos.Instagram, link: 'https://www.instagram.com/alien69flow/', color: 'hover:text-[#E4405F]', status: 'Active' },
    { name: 'LinkedIn', icon: BrandLogos.LinkedIn, link: 'https://linkedin.com/company/alienflowspace', color: 'hover:text-[#0A66C2]', status: 'Active' },
    { name: 'Reddit', icon: BrandLogos.Reddit, link: 'https://reddit.com/user/Alien69Flow', color: 'hover:text-[#FF4500]', status: 'Active' },
    { name: 'Telegram', icon: BrandLogos.Telegram, link: 'https://t.me/AlienFlow', color: 'hover:text-[#0088cc]', status: 'Active' },
    { name: 'Threads', icon: BrandLogos.Threads, link: 'https://threads.net/@alien69flow', color: 'hover:text-white', status: 'Active' },
    { name: 'TikTok', icon: BrandLogos.TikTok, link: '#', color: 'hover:text-[#ff0050]', status: 'Coming Soon' },
    { name: 'X', icon: BrandLogos.X, link: 'https://x.com/alien69flow', color: 'hover:text-white', status: 'Active' }
  ];

  return (
    <div className="min-h-screen bg-transparent pb-24 px-4 font-exo overflow-x-hidden selection:bg-alien-green selection:text-black">
      <main className="max-w-7xl mx-auto pt-20">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center mb-16 text-center">
          <div className="w-1 h-12 bg-gradient-to-b from-alien-green to-transparent mb-4" />
          <h1 className="text-6xl md:text-8xl font-nasalization tracking-tighter mb-8 text-white drop-shadow-[0_0_30px_rgba(57,255,20,0.2)]">
            Contact <span className="text-alien-green">Us</span>
          </h1>
          <div className="bg-black/40 backdrop-blur-md border border-alien-green/20 p-6 rounded-2xl max-w-xl">
             <p className="text-gray-300 text-lg">Conecta con la <span className="text-alien-green font-bold">ΔlieπFlΦw $pac€ DAO</span> a través de nuestros canales cifrados.</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <a href="https://alienflowspace.gitbook.io" target="_blank" rel="noreferrer" className="p-8 bg-zinc-900/40 border border-white/5 rounded-3xl hover:border-blue-500/50 transition-all group flex flex-col items-center">
            <div className="p-3 bg-blue-500/10 rounded-xl mb-4 group-hover:scale-110 transition-transform"><BrandLogos.GitBook /></div>
            <h3 className="text-white font-bold mb-2">Documentation</h3>
            <p className="text-xs text-gray-500 italic text-center">Technical protocols and strategic roadmap</p>
          </a>
          <a href="https://www.alienflow.space/privacy-policy" target="_blank" rel="noreferrer" className="p-8 bg-zinc-900/40 border border-white/5 rounded-3xl hover:border-alien-green/50 transition-all group flex flex-col items-center">
            <div className="p-3 bg-alien-green/10 rounded-xl mb-4 group-hover:scale-110 transition-transform"><ShieldAlert className="text-alien-green" /></div>
            <h3 className="text-white font-bold mb-2">Compliance / Legal</h3>
            <p className="text-xs text-gray-500 italic text-center">DAO Compliance & Privacy Policy</p>
          </a>
          <div className="p-8 bg-zinc-900/40 border border-white/5 rounded-3xl hover:border-alien-gold/50 transition-all group flex flex-col items-center">
            <div className="p-3 bg-alien-gold/10 rounded-xl mb-4 group-hover:scale-110 transition-transform"><LifeBuoy className="text-alien-gold" /></div>
            <h3 className="text-white font-bold mb-2">Support</h3>
            <p className="text-xs text-gray-400 font-mono">alien69flow@proton.me</p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-24">
          {socialLinks.map((item, i) => (
            <motion.a key={item.name} href={item.link} target="_blank" rel="noreferrer"
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.05 }}
              className={`flex flex-col items-center p-6 rounded-2xl border bg-white/[0.02] transition-all hover:-translate-y-1 ${item.status === 'Coming Soon' ? 'opacity-30 grayscale cursor-not-allowed border-white/5' : 'border-white/10 hover:border-alien-green/40 hover:bg-white/[0.05]'}`}>
              <div className={`mb-3 transition-colors ${item.status !== 'Coming Soon' ? item.color : 'text-gray-600'}`}><item.icon /></div>
              <span className="text-[10px] uppercase font-mono font-bold text-gray-500">{item.name}</span>
            </motion.a>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-5 bg-black/40 border border-white/10 p-8 rounded-[2rem]">
            <h2 className="text-xl font-nasalization text-alien-green mb-8 flex items-center gap-3"><Send className="w-5 h-5" /> Secure Form</h2>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <Input placeholder="Identity / Alias" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="bg-zinc-900/50 border-white/10 h-12 text-white rounded-xl focus:ring-alien-green" />
              <Input placeholder="Return Signal (Email)" type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="bg-zinc-900/50 border-white/10 h-12 text-white rounded-xl focus:ring-alien-green" />
              <Input placeholder="Frequency (Subject)" value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} className="bg-zinc-900/50 border-white/10 h-12 text-white rounded-xl focus:ring-alien-green" />
              <Textarea placeholder="Packet Data..." rows={4} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="bg-zinc-900/50 border-white/10 text-white rounded-xl resize-none focus:ring-alien-green" />
              <Button type="submit" disabled={isSubmitting} className="w-full bg-alien-green hover:bg-alien-gold text-black font-extrabold h-14 rounded-xl transition-all shadow-[0_0_20px_rgba(57,255,20,0.3)]">
                {isSubmitting ? <Loader2 className="animate-spin" /> : 'ESTABLISH LINK'}
              </Button>
            </form>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-7 flex flex-col h-[550px] bg-black border border-alien-green/20 rounded-[2rem] overflow-hidden shadow-2xl">
            <div className="bg-zinc-900/80 p-4 border-b border-white/5 flex justify-between items-center px-8 text-alien-green">
              <span className="text-[10px] font-mono uppercase opacity-70 tracking-widest">AiTor_Core_v6.9</span>
              <Terminal className="w-4 h-4" />
            </div>
            <div ref={terminalRef} className="flex-1 p-8 font-mono text-[11px] space-y-4 overflow-y-auto text-alien-green/90 leading-relaxed scrollbar-hide">
              {terminalHistory.map((m, i) => (
                <div key={i} className={m.type === 'ai' ? 'opacity-100' : 'text-alien-gold font-bold'}>
                  <span className="mr-3 opacity-30">{m.type === 'ai' ? '➜' : 'u:/>'}</span>{m.text}
                </div>
              ))}
              {isTyping && <div className="animate-pulse opacity-40">>>> Procesando señal neuronal...</div>}
            </div>
            <form onSubmit={handleTerminalSubmit} className="p-5 bg-zinc-900/30 border-t border-white/5 flex items-center">
              <input value={terminalInput} onChange={(e) => setTerminalInput(e.target.value)} className="bg-transparent border-none outline-none flex-1 text-alien-green font-mono text-sm placeholder:text-zinc-800" placeholder="Ejecutar comando..." />
            </form>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
