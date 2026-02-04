import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send, Terminal, Loader2, ShieldAlert, LifeBuoy, FileText, MessageSquare, Globe, Sparkles, ExternalLink, Building2, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import NewsletterSubscription from '@/components/NewsletterSubscription';

/**
 * BRAND LOGOS - Official colors and icons for each platform
 * Alphabetically organized for maintainability
 */
const BrandLogos = {
  Discord: () => (
    <svg viewBox="0 0 24 24" fill="#5865F2" className="w-6 h-6"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/></svg>
  ),
  DoraHacks: () => (
    <svg viewBox="0 0 200 200" className="w-6 h-6">
      <defs>
        <linearGradient id="dorahacks-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00D4AA"/>
          <stop offset="50%" stopColor="#00B4D8"/>
          <stop offset="100%" stopColor="#7B2CBF"/>
        </linearGradient>
      </defs>
      <path fill="url(#dorahacks-gradient)" d="M100 0L183.3 50v100L100 200L16.7 150V50L100 0zm0 20L33.3 60v80L100 180l66.7-40V60L100 20zm0 30l40 24v48l-40 24-40-24V74l40-24z"/>
    </svg>
  ),
  Facebook: () => (
    <svg viewBox="0 0 24 24" fill="#1877F2" className="w-6 h-6"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
  ),
  Farcaster: () => (
    <svg viewBox="0 0 1000 1000" className="w-6 h-6">
      <defs>
        <linearGradient id="farcaster-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6"/>
          <stop offset="100%" stopColor="#6366F1"/>
        </linearGradient>
      </defs>
      <path fill="url(#farcaster-gradient)" d="M257.778 155.556H742.222V844.444H671.111V528.889H670.414C662.554 441.677 589.258 373.333 500 373.333C410.742 373.333 337.446 441.677 329.586 528.889H328.889V844.444H257.778V155.556Z"/>
      <path fill="url(#farcaster-gradient)" d="M128.889 253.333L157.778 351.111H182.222V746.667C169.949 746.667 160 756.616 160 768.889V795.556H155.556C143.283 795.556 133.333 805.505 133.333 817.778V844.444H382.222V817.778C382.222 805.505 372.273 795.556 360 795.556H355.556V768.889C355.556 756.616 345.606 746.667 333.333 746.667H306.667V351.111H331.111L360 253.333H128.889Z"/>
      <path fill="url(#farcaster-gradient)" d="M640 253.333L668.889 351.111H693.333V746.667C681.06 746.667 671.111 756.616 671.111 768.889V795.556H666.667C654.394 795.556 644.444 805.505 644.444 817.778V844.444H893.333V817.778C893.333 805.505 883.384 795.556 871.111 795.556H866.667V768.889C866.667 756.616 856.717 746.667 844.444 746.667H817.778V351.111H842.222L871.111 253.333H640Z"/>
    </svg>
  ),
  GitBook: () => (
    <svg viewBox="0 0 24 24" fill="#3884FF" className="w-6 h-6"><path d="M10.802 17.77a.703.703 0 11-.002 1.406.703.703 0 01.002-1.406m11.024-4.347a.703.703 0 11.001-1.406.703.703 0 01-.001 1.406m0-2.876a2.176 2.176 0 00-2.174 2.174c0 .233.039.465.115.691l-7.181 3.823a2.165 2.165 0 00-1.784-.937c-.829 0-1.584.475-1.95 1.216l-6.451-3.402c-.682-.358-1.192-1.48-1.138-2.502.028-.533.212-.947.493-1.107.178-.1.392-.092.62.027l.042.023c1.71.9 7.304 3.847 7.54 3.956.363.169.565.237 1.185-.057l11.564-6.014c.17-.064.368-.227.368-.474 0-.342-.354-.477-.355-.477-.658-.315-1.669-.788-2.655-1.25-2.108-.987-4.497-2.105-5.546-2.655-.906-.474-1.635-.074-1.765.006l-.252.125C7.78 6.048 1.46 9.178 1.1 9.397.457 9.789.058 10.57.006 11.539c-.08 1.537.703 3.14 1.824 3.727l6.822 3.518a2.175 2.175 0 002.15 1.862 2.177 2.177 0 002.173-2.14l7.514-4.073c.38.298.853.461 1.337.461A2.176 2.176 0 0024 12.72a2.176 2.176 0 00-2.174-2.174"/></svg>
  ),
  GitHub: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
  ),
  HackMD: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <defs>
        <linearGradient id="hackmd-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#39FF14"/>
          <stop offset="100%" stopColor="#00D4AA"/>
        </linearGradient>
      </defs>
      <path fill="url(#hackmd-gradient)" d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4zm3 1v14h3V5H5zm5 0v14h4V5h-4zm6 0v14h3V5h-3z"/>
    </svg>
  ),
  Instagram: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <defs>
        <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFDC80"/>
          <stop offset="25%" stopColor="#FCAF45"/>
          <stop offset="50%" stopColor="#F77737"/>
          <stop offset="75%" stopColor="#C13584"/>
          <stop offset="100%" stopColor="#833AB4"/>
        </linearGradient>
      </defs>
      <path fill="url(#instagram-gradient)" d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608C2.024 15.581 2.012 15.201 2.012 12s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07M12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
    </svg>
  ),
  LinkedIn: () => (
    <svg viewBox="0 0 24 24" fill="#0A66C2" className="w-6 h-6"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.778-.773 1.778-1.729V1.729C24 .774 23.206 0 22.225 0z"/></svg>
  ),
  Reddit: () => (
    <svg viewBox="0 0 24 24" fill="#FF4500" className="w-6 h-6"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.057 1.597.047.282.067.559.067.845 0 2.911-3.544 5.275-7.917 5.275s-7.917-2.364-7.917-5.275c0-.272.02-.539.06-.809C4.57 13.379 4.132 12.76 4.132 12c0-.968.786-1.754 1.754-1.754.463 0 .875.18 1.185.472 1.201-.86 2.87-1.426 4.71-1.487l.934-4.388 2.3.485c-.053.133-.083.277-.083.425zm-4.362 9.157c-.652 0-1.18.528-1.18 1.18 0 .652.528 1.18 1.18 1.18.652 0 1.18-.528 1.18-1.18 0-.652-.528-1.18-1.18-1.18zm4.476 0c-.652 0-1.18.528-1.18 1.18 0 .652.528 1.18 1.18 1.18.652 0 1.18-.528 1.18-1.18 0-.652-.528-1.18-1.18-1.18zm-3.959 3.377c-.116 0-.232.044-.319.131-.418.417-1.098.417-1.516 0-.087-.087-.203-.131-.319-.131a.451.451 0 0 0-.321.77c.77.77 2.03.77 2.8 0a.451.451 0 0 0-.325-.77z"/></svg>
  ),
  Telegram: () => (
    <svg viewBox="0 0 24 24" fill="#26A5E4" className="w-6 h-6"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zM17.5 8.083l-2.013 9.491c-.15.672-.548.836-1.111.519l-3.07-2.262-1.482 1.426c-.164.164-.301.302-.617.302l.221-3.12 5.679-5.128c.247-.22-.054-.341-.383-.122l-7.018 4.418-3.024-.946c-.657-.206-.67-.657.137-.972l11.815-4.553c.547-.199 1.026.128.886 1.002z"/></svg>
  ),
  Threads: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.182.408-2.256 1.333-3.022.812-.672 1.927-1.073 3.222-1.161 1.009-.068 1.94.004 2.792.178-.065-1.203-.453-2.12-1.162-2.732-.812-.699-1.993-1.048-3.508-1.031l-.043.001c-1.271.014-2.347.376-3.2 1.076l-1.327-1.564C8.396 4.088 9.94 3.59 11.78 3.568h.058c2.073.025 3.715.58 4.878 1.652 1.11 1.024 1.725 2.46 1.825 4.26.493.126.963.282 1.405.47 1.314.556 2.373 1.418 3.06 2.494.858 1.345 1.12 3.122.74 5.005-.477 2.373-1.803 4.212-3.833 5.319-1.73.942-3.894 1.41-6.44 1.393a14.126 14.126 0 01-.287-.16l.011-.001zm.674-9.053c-1.097.075-1.873.358-2.31.838-.371.408-.545.888-.518 1.428.034.601.319 1.108.804 1.428.548.36 1.31.525 2.143.48.982-.054 1.76-.435 2.314-1.131.328-.411.559-.938.7-1.585a9.803 9.803 0 00-3.133-.458z"/></svg>
  ),
  TikTok: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <defs>
        <linearGradient id="tiktok-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#25F4EE"/>
          <stop offset="50%" stopColor="#FE2C55"/>
          <stop offset="100%" stopColor="#000000"/>
        </linearGradient>
      </defs>
      <path fill="url(#tiktok-gradient)" d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
    </svg>
  ),
  X: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
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
  }, [isTyping, terminalInput]);

  const [terminalHistory, setTerminalHistory] = useState([
    { type: 'ai', text: '>>> [SYS]: Ai Tor ΔlieπFlΦw $pac€ DAO Link Established.' },
    { type: 'ai', text: '>>> [AiTor]: Neural connection active. Ready to assist.' }
  ]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const mailtoLink = `mailto:alien69flow@proton.me?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`FROM: ${formData.name}\nEMAIL: ${formData.email}\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
    toast.success('Transmission initiated!', { description: 'Your message is being processed...' });
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
      let res = ">>> [AiTor]: Command executed successfully. How can I assist you further?";
      if (input.toLowerCase().includes('help')) res = ">>> [AiTor]: Available commands: help, dao, tokenomics, roadmap, community";
      if (input.toLowerCase().includes('dao')) res = ">>> [AiTor]: AlienFlowSpace DAO is a decentralized autonomous organization focused on Web3 innovation.";
      if (input.toLowerCase().includes('tesla') || input.toLowerCase().includes('369')) res = ">>> [AiTor]: Unifying neutrinos at 3-6-9 frequency. Tesla's cosmic code activated.";
      setTerminalHistory(prev => [...prev, { type: 'ai', text: res }]);
      setIsTyping(false);
    }, 800);
  };

  // Alphabetically organized social links
  const socialLinks = [
    { name: 'Discord', icon: BrandLogos.Discord, link: '#', handle: '@AlienFlowSpace', status: 'Coming Soon' },
    { name: 'DoraHacks', icon: BrandLogos.DoraHacks, link: 'https://dorahacks.io/hacker/Alien69Flow', handle: '@Alien69Flow' },
    { name: 'Facebook', icon: BrandLogos.Facebook, link: 'https://www.facebook.com/Alien69Flow', handle: '@Alien69Flow' },
    { name: 'Farcaster', icon: BrandLogos.Farcaster, link: 'https://farcaster.xyz/alien69flow', handle: '@alien69flow' },
    { name: 'GitBook', icon: BrandLogos.GitBook, link: 'https://alienflowspace.gitbook.io', handle: 'Docs' },
    { name: 'GitHub', icon: BrandLogos.GitHub, link: 'https://github.com/Alien69Flow', handle: '@Alien69Flow' },
    { name: 'HackMD', icon: BrandLogos.HackMD, link: 'https://hackmd.io/@Alien69Flow', handle: '@Alien69Flow' },
    { name: 'Instagram', icon: BrandLogos.Instagram, link: 'https://www.instagram.com/alien69flow/', handle: '@alien69flow' },
    { name: 'LinkedIn', icon: BrandLogos.LinkedIn, link: 'https://linkedin.com/company/alienflowspace', handle: 'Co & Founder', secondaryLink: 'https://linkedin.com/in/alien69flow' },
    { name: 'Reddit', icon: BrandLogos.Reddit, link: 'https://reddit.com/user/Alien69Flow', handle: 'u/Alien69Flow' },
    { name: 'Telegram', icon: BrandLogos.Telegram, link: 'https://t.me/AlienFlow', handle: '@AlienFlow' },
    { name: 'Threads', icon: BrandLogos.Threads, link: 'https://threads.net/@alien69flow', handle: '@alien69flow' },
    { name: 'TikTok', icon: BrandLogos.TikTok, link: '#', handle: '@alien69flow', status: 'Coming Soon' },
    { name: 'X', icon: BrandLogos.X, link: 'https://x.com/alien69flow', handle: '@alien69flow' }
  ];

  return (
    <div className="min-h-screen bg-transparent pb-24 font-exo overflow-x-hidden selection:bg-alien-green/30 selection:text-alien-green">
      <main className="max-w-7xl mx-auto px-4 pt-16">
        
        {/* ═══════════════════════════════════════════════════════════════════
            HERO SECTION - Quantum High-Tech Aesthetic
        ═══════════════════════════════════════════════════════════════════ */}
        <motion.section 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
          className="relative flex flex-col items-center text-center mb-20 py-16"
        >
          {/* Multi-layer quantum glow background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-alien-green/15 via-alien-green/5 to-transparent rounded-full blur-[80px] animate-pulse" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-radial from-alien-gold/12 via-alien-gold/3 to-transparent rounded-full blur-[60px] animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          {/* Main Title - Refined sizing */}
          <motion.h1 
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: 'spring', stiffness: 120 }}
            className="relative text-4xl md:text-5xl lg:text-6xl font-nasalization mb-6 tracking-wide"
          >
            <span className="bg-gradient-to-r from-alien-green via-alien-gold to-alien-green bg-clip-text text-transparent animate-pulse drop-shadow-[0_0_25px_rgba(57,255,20,0.5)]">
              Contact Us
            </span>
          </motion.h1>

          {/* Separator: Central dot with gradient lines */}
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-0 mb-8"
          >
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-alien-green/60 to-alien-green/80" />
            <div className="w-2 h-2 rounded-full bg-gradient-to-br from-alien-green to-alien-gold shadow-[0_0_12px_rgba(57,255,20,0.8)] mx-2" />
            <div className="w-24 h-[1px] bg-gradient-to-l from-transparent via-alien-gold/60 to-alien-gold/80" />
          </motion.div>

          {/* Welcome Message Bubble - Compact & Sophisticated */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative max-w-2xl px-6 py-4 rounded-2xl backdrop-blur-md bg-black/30 border border-alien-green/40 shadow-[0_0_30px_rgba(57,255,20,0.1)]"
          >
            <p className="text-base lg:text-lg leading-relaxed font-exo">
              <span className="text-muted-foreground">Have questions or want to join the </span>
              <span className="text-alien-green font-nasalization drop-shadow-[0_0_8px_rgba(57,255,20,0.6)]">Δlieπ</span>
              <span className="text-alien-gold font-nasalization drop-shadow-[0_0_8px_rgba(240,216,130,0.6)]">FlΦw</span>
              <span className="text-alien-green font-nasalization drop-shadow-[0_0_8px_rgba(57,255,20,0.6)]"> $pac€</span>
              <span className="text-alien-gold font-nasalization drop-shadow-[0_0_8px_rgba(240,216,130,0.6)]"> DAO</span>
              <span className="text-muted-foreground">?</span>
              <br />
              <span className="text-muted-foreground">Reach out through any of these cosmic channels:</span>
            </p>
          </motion.div>
        </motion.section>

        {/* ═══════════════════════════════════════════════════════════════════
            QUICK ACCESS - Documentation & Support Cards
        ═══════════════════════════════════════════════════════════════════ */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-5 h-5 text-alien-gold" />
            <h2 className="text-xl font-nasalization text-alien-gold">Quick Access</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <motion.a 
              href="https://alienflowspace.gitbook.io" 
              target="_blank" 
              rel="noreferrer" 
              whileHover={{ scale: 1.01, y: -2 }}
              className="group relative p-6 bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20 rounded-2xl hover:border-blue-500/50 transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex flex-col items-center text-center">
                <div className="p-3 bg-blue-500/20 rounded-xl mb-3 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-shadow">
                  <BrandLogos.GitBook />
                </div>
                <h3 className="text-white font-nasalization text-base mb-1">Documentation</h3>
                <p className="text-muted-foreground text-xs">Complete guides & tutorials</p>
              </div>
            </motion.a>

            <motion.a 
              href="/privacy-policy" 
              whileHover={{ scale: 1.01, y: -2 }}
              className="group relative p-6 bg-gradient-to-br from-alien-green/10 to-alien-green/5 border border-alien-green/20 rounded-2xl hover:border-alien-green/50 transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-alien-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex flex-col items-center text-center">
                <div className="p-3 bg-alien-green/20 rounded-xl mb-3 group-hover:shadow-[0_0_20px_rgba(57,255,20,0.3)] transition-shadow">
                  <ShieldAlert className="w-6 h-6 text-alien-green" />
                </div>
                <h3 className="text-white font-nasalization text-base mb-1">Privacy Policy</h3>
                <p className="text-muted-foreground text-xs">Data protection & transparency</p>
              </div>
            </motion.a>

            <motion.a 
              href="mailto:alien69flow@proton.me?subject=Support%20Request"
              whileHover={{ scale: 1.01, y: -2 }}
              className="group relative p-6 bg-gradient-to-br from-alien-gold/10 to-alien-gold/5 border border-alien-gold/20 rounded-2xl hover:border-alien-gold/50 transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-alien-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex flex-col items-center text-center">
                <div className="p-3 bg-alien-gold/20 rounded-xl mb-3 group-hover:shadow-[0_0_20px_rgba(240,216,130,0.3)] transition-shadow">
                  <LifeBuoy className="w-6 h-6 text-alien-gold" />
                </div>
                <h3 className="text-white font-nasalization text-base mb-1">Support Center</h3>
                <p className="text-muted-foreground text-xs">alien69flow@proton.me</p>
              </div>
            </motion.a>
          </div>
        </motion.section>

        {/* ═══════════════════════════════════════════════════════════════════
            SOCIAL CHANNELS - Alphabetically organized with official icons
        ═══════════════════════════════════════════════════════════════════ */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <Globe className="w-5 h-5 text-alien-green" />
            <h2 className="text-xl font-nasalization text-alien-green">Official Channels</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-3">
            {socialLinks.map((item, i) => {
              const isComingSoon = item.status === 'Coming Soon';
              const isLinkedIn = item.name === 'LinkedIn';
              
              // LinkedIn special card with dual buttons
              if (isLinkedIn) {
                return (
                  <motion.div 
                    key={item.name}
                    initial={{ opacity: 0, y: 15 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03 }}
                    whileHover={{ scale: 1.01, y: -2 }}
                    className="relative flex flex-col items-center p-4 rounded-xl border bg-white/[0.02] backdrop-blur-sm border-white/10 hover:border-[#0A66C2]/40 hover:bg-white/[0.04] transition-all group col-span-2 sm:col-span-1"
                  >
                    <div className="mb-2 transition-transform group-hover:scale-105">
                      <item.icon />
                    </div>
                    <span className="text-xs font-nasalization text-white/80 mb-2">{item.name}</span>
                    
                    {/* Dual buttons for LinkedIn */}
                    <div className="flex gap-1.5 w-full">
                      <a 
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-1 px-2 py-1.5 rounded-lg bg-[#0A66C2]/20 hover:bg-[#0A66C2]/40 border border-[#0A66C2]/30 transition-all text-[9px] font-mono text-white/80 hover:text-white"
                      >
                        <Building2 className="w-3 h-3" />
                        Company
                      </a>
                      <a 
                        href={item.secondaryLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-1 px-2 py-1.5 rounded-lg bg-alien-gold/10 hover:bg-alien-gold/25 border border-alien-gold/30 transition-all text-[9px] font-mono text-white/80 hover:text-white"
                      >
                        <User className="w-3 h-3" />
                        Founder
                      </a>
                    </div>
                  </motion.div>
                );
              }
              
              return (
                <motion.a 
                  key={item.name} 
                  href={isComingSoon ? undefined : item.link}
                  target={isComingSoon ? undefined : "_blank"}
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 15 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  whileHover={isComingSoon ? {} : { scale: 1.01, y: -2 }}
                  className={`relative flex flex-col items-center p-4 rounded-xl border bg-white/[0.02] backdrop-blur-sm transition-all group
                    ${isComingSoon 
                      ? 'opacity-50 grayscale cursor-not-allowed border-white/5' 
                      : 'border-white/10 hover:border-alien-green/30 hover:bg-white/[0.04] hover:shadow-[0_4px_20px_rgba(57,255,20,0.08)]'
                    }`}
                >
                  {isComingSoon && (
                    <span className="absolute top-1.5 right-1.5 text-[7px] font-mono bg-white/10 px-1.5 py-0.5 rounded-full uppercase tracking-wider">Soon</span>
                  )}
                  <div className="mb-2 transition-transform group-hover:scale-105">
                    <item.icon />
                  </div>
                  <span className="text-xs font-nasalization text-white/80 mb-0.5">{item.name}</span>
                  <span className="text-[9px] font-mono text-muted-foreground">{item.handle}</span>
                </motion.a>
              );
            })}
          </div>
        </motion.section>

        {/* ═══════════════════════════════════════════════════════════════════
            CONTACT FORM & TERMINAL - Communication Hub
        ═══════════════════════════════════════════════════════════════════ */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <MessageSquare className="w-5 h-5 text-alien-gold" />
            <h2 className="text-xl font-nasalization text-alien-gold">Communication Hub</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Contact Form */}
            <motion.div 
              whileHover={{ scale: 1.005 }}
              className="lg:col-span-5 relative bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl border border-alien-green/20 p-6 rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-alien-green/5 to-transparent pointer-events-none" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-6">
                  <Send className="w-4 h-4 text-alien-green" />
                  <h3 className="text-lg font-nasalization text-alien-green">Secure Transmission</h3>
                </div>
                
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <Input 
                    placeholder="Your Name" 
                    value={formData.name} 
                    onChange={e => setFormData({...formData, name: e.target.value})} 
                    className="bg-black/40 border-alien-green/20 text-white focus:border-alien-green/60 rounded-xl h-11 placeholder:text-muted-foreground/60 text-sm" 
                  />
                  <Input 
                    placeholder="Email Address" 
                    type="email" 
                    value={formData.email} 
                    onChange={e => setFormData({...formData, email: e.target.value})} 
                    className="bg-black/40 border-alien-green/20 text-white focus:border-alien-green/60 rounded-xl h-11 placeholder:text-muted-foreground/60 text-sm" 
                  />
                  <Input 
                    placeholder="Subject" 
                    value={formData.subject} 
                    onChange={e => setFormData({...formData, subject: e.target.value})} 
                    className="bg-black/40 border-alien-green/20 text-white focus:border-alien-green/60 rounded-xl h-11 placeholder:text-muted-foreground/60 text-sm" 
                  />
                  <Textarea 
                    placeholder="Your message to the cosmos..." 
                    rows={4} 
                    value={formData.message} 
                    onChange={e => setFormData({...formData, message: e.target.value})} 
                    className="bg-black/40 border-alien-green/20 text-white focus:border-alien-green/60 rounded-xl placeholder:text-muted-foreground/60 resize-none text-sm" 
                  />
                  <Button 
                    type="submit" 
                    disabled={isSubmitting} 
                    className="w-full bg-gradient-to-r from-alien-green to-alien-green/80 hover:from-alien-gold hover:to-alien-gold/80 text-black font-nasalization h-12 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(57,255,20,0.25)] hover:shadow-[0_0_25px_rgba(240,216,130,0.35)]"
                  >
                    {isSubmitting ? (
                      <Loader2 className="animate-spin mr-2 w-4 h-4" />
                    ) : (
                      <Send className="mr-2 w-4 h-4" />
                    )}
                    {isSubmitting ? 'Transmitting...' : 'Establish Link'}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* AI Terminal */}
            <motion.div 
              whileHover={{ scale: 1.005 }}
              className="lg:col-span-7 flex flex-col h-[500px] bg-black/80 backdrop-blur-xl border border-alien-gold/20 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(240,216,130,0.08)]"
            >
              {/* Terminal Header */}
              <div className="bg-gradient-to-r from-zinc-900/90 to-zinc-800/90 p-3 border-b border-alien-gold/20 flex justify-between items-center px-5">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 bg-red-500/80 rounded-full" />
                    <div className="w-2.5 h-2.5 bg-yellow-500/80 rounded-full" />
                    <div className="w-2.5 h-2.5 bg-green-500/80 rounded-full" />
                  </div>
                  <span className="text-[9px] font-mono uppercase text-alien-gold/70 ml-3">AiTor_Neural_Core_v6.9</span>
                </div>
                <Terminal className="w-3.5 h-3.5 text-alien-gold/50" />
              </div>

              {/* Terminal Content */}
              <div ref={terminalRef} className="flex-1 p-5 font-mono text-[11px] space-y-3 overflow-y-auto text-alien-green/90 leading-relaxed bg-gradient-to-b from-black/50 to-black/80">
                {terminalHistory.map((m, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={m.type === 'ai' ? 'text-alien-green' : 'text-alien-gold font-bold'}
                  >
                    <span className="mr-2 opacity-50">{m.type === 'ai' ? '➜' : 'u:/>'}</span>
                    {m.text}
                  </motion.div>
                ))}
                {isTyping && (
                  <div className="flex items-center gap-2 text-alien-gold/60">
                    <span className="mr-2 opacity-50">➜</span>
                    <span>Processing neural signal</span>
                    <span className="flex gap-0.5">
                      <span className="w-1 h-1 bg-alien-gold rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-1 h-1 bg-alien-gold rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-1 h-1 bg-alien-gold rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </span>
                  </div>
                )}
              </div>

              {/* Terminal Input */}
              <form onSubmit={handleTerminalSubmit} className="p-4 bg-zinc-900/50 border-t border-alien-gold/10 flex items-center gap-3">
                <span className="text-alien-gold/50 font-mono text-sm">{'>'}</span>
                <input 
                  value={terminalInput} 
                  onChange={e => setTerminalInput(e.target.value)} 
                  className="bg-transparent border-none outline-none flex-1 text-alien-green font-mono text-sm placeholder:text-alien-green/30" 
                  placeholder="Enter command or ask a question..." 
                />
                <Button type="submit" size="sm" variant="ghost" className="text-alien-gold hover:text-alien-gold hover:bg-alien-gold/10 h-8 w-8 p-0">
                  <Send className="w-3.5 h-3.5" />
                </Button>
              </form>
            </motion.div>
          </div>
        </motion.section>

        {/* ═══════════════════════════════════════════════════════════════════
            NEWSLETTER SECTION
        ═══════════════════════════════════════════════════════════════════ */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-5 h-5 text-alien-gold" />
            <h2 className="text-xl font-nasalization text-alien-gold">Stay Connected</h2>
          </div>

          <div className="max-w-xl mx-auto">
            <NewsletterSubscription />
          </div>
        </motion.section>

      </main>
    </div>
  );
};

export default Contact;
