import React, { useState, useEffect } from 'react';
import { X, Facebook, Instagram, Mail, Disc, Send, Github, Linkedin, MessageSquare, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getCurrentChineseYear } from '@/lib/chineseCalendar';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

const cnyDates: Record<number, string> = {
  2025: '2025-01-29', 2026: '2026-02-17', 2027: '2027-02-06',
  2028: '2028-01-26', 2029: '2029-02-13', 2030: '2030-02-03',
};

const Footer = () => {
  const [chineseYear, setChineseYear] = useState(getCurrentChineseYear());
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const now = new Date();
    const yr = now.getFullYear();
    const cnyStr = cnyDates[yr] || cnyDates[yr + 1];
    if (!cnyStr) return;
    const cnyDate = new Date(cnyStr);
    if (cnyDate <= now) {
      const nextCny = cnyDates[yr + 1];
      if (!nextCny) return;
      const ms = new Date(nextCny).getTime() - now.getTime();
      if (ms > 0) {
        const timer = setTimeout(() => setChineseYear(getCurrentChineseYear()), ms);
        return () => clearTimeout(timer);
      }
    } else {
      const ms = cnyDate.getTime() - now.getTime();
      const timer = setTimeout(() => setChineseYear(getCurrentChineseYear()), ms);
      return () => clearTimeout(timer);
    }
  }, [chineseYear]);

  const socialLinks = [
    { href: "https://discord.gg/alienflowspace", icon: Disc, label: "Discord", color: "#5865F2" },
    { href: "mailto:info@alienflow.space", icon: Mail, label: "Email", color: "#F0D882" },
    { href: "https://www.facebook.com/Alien69Flow", icon: Facebook, label: "Facebook", color: "#1877F2" },
    { href: "https://alienflowspace.gitbook.io/DAO", icon: BookOpen, label: "GitBook", color: "#22C55E" },
    { href: "https://github.com/Alien69Flow", icon: Github, label: "Github", color: "#22C55E" },
    { href: "https://www.instagram.com/alien69flow/", icon: Instagram, label: "Instagram", color: "#E4405F" },
    { href: "https://linkedin.com/in/alienflow", icon: Linkedin, label: "LinkedIn", color: "#0A66C2" },
    { href: "https://t.me/AlienFlow", icon: Send, label: "Telegram", color: "#0088CC" },
    { href: "https://threads.net/@alien69flow", icon: MessageSquare, label: "Threads", color: "#000" },
    { href: "https://x.com/alien69flow", icon: X, label: "X (Twitter)", color: "#1DA1F2" }
  ].sort((a, b) => a.label.localeCompare(b.label));

  const navLinks = [
    { to: "/about", label: "About" },
    { to: "/academy", label: "Academy" },
    { to: "/alien-trip", label: "AlienTrip" },
    { to: "/clubs", label: "Clubs" },
    { to: "/conetworking", label: "CoNetWorKing" },
    { to: "/contact", label: "Contact" },
    { to: "/", label: "Home" }
  ].sort((a, b) => a.label.localeCompare(b.label));

  const poweredBy = [
    { name: 'Polygon', logo: 'https://cryptologos.cc/logos/polygon-matic-logo.svg', url: 'https://polygon.technology/' },
    { name: 'Aragon', logo: '/lovable-uploads/AragonDAOLogo.svg', url: 'https://aragon.org/' },
    { name: 'Ethereum', logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.svg', url: 'https://ethereum.org/' },
    { name: 'IPFS', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Ipfs-logo-1024-ice-text.png', url: 'https://ipfs.tech/' },
  ];

  return (
    <footer className="relative bg-af-bg/95 py-8 mt-auto z-30 border-t border-af-border-hairline">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand + social */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <img src="/lovable-uploads/ALogo.png" alt="Logo" className="h-10 w-auto object-contain" />
              <span className="text-xl font-bold font-nasalization text-alien-green">AlienFlowSpace DAO</span>
            </div>
            <p className="text-alien-green/80 text-sm font-nasalization leading-relaxed max-w-md">
              Uniting diverse blockchain domains under a cosmic governance structure.
              Building the future of decentralized finance across the multiverse.
            </p>
            <TooltipProvider delayDuration={200}>
              <div className="flex gap-2 pt-2 flex-wrap">
                {socialLinks.map((social, i) => (
                  <Tooltip key={i}>
                    <TooltipTrigger asChild>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 transition-colors border border-af-border-hairline hover:border-af-border-strong bg-af-surface/20"
                        style={{ color: social.color }}
                      >
                        <social.icon size={16} />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="bg-af-surface border-af-border text-alien-gold text-xs">
                      {social.label}
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </TooltipProvider>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-alien-gold font-nasalization font-bold mb-4 text-xs tracking-[0.2em] uppercase">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <Link to={link.to} className="text-sm text-alien-green/70 hover:text-alien-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-alien-gold font-nasalization font-bold mb-4 text-xs tracking-[0.2em] uppercase">Resources</h4>
            <ul className="space-y-2">
              <li><a href="https://alienflowspace.gitbook.io/DAO" className="text-sm text-alien-green/70 hover:text-alien-gold transition-colors">Documentation</a></li>
              <li><Link to="/privacy-policy" className="text-sm text-alien-green/70 hover:text-alien-gold transition-colors">Privacy Policy</Link></li>
              <li><a href="https://alienflowspace.gitbook.io/DAO" className="text-sm text-alien-green/70 hover:text-alien-gold transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Powered By */}
        <div className="mt-8 pt-6 border-t border-af-border-hairline">
          <p className="text-center text-xs text-af-text-muted font-nasalization mb-4 uppercase tracking-widest">Powered By</p>
          <div className="flex justify-center items-center gap-6 flex-wrap">
            {poweredBy.map((tech) => (
              <a
                key={tech.name}
                href={tech.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity duration-300"
              >
                <img src={tech.logo} alt={tech.name} className="h-6 w-6 object-contain" />
                <span className="text-xs text-af-text-muted font-nasalization hidden sm:inline">{tech.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-af-border-hairline mt-6 pt-6 flex flex-col lg:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-nasalization text-alien-green/50 uppercase tracking-widest">
            © {currentYear} AlienFlowSpace DAO • Cosmic Governance Enabled
          </p>

          <div className="flex items-center gap-3 border border-af-border px-4 py-2">
            <span className="text-2xl animate-pulse" style={{ filter: `drop-shadow(0 0 8px ${chineseYear.color})` }}>{chineseYear.icon}</span>
            <div className="text-left leading-none">
              <p className="text-alien-gold font-bold text-xs font-nasalization">{currentYear} / {chineseYear.year}</p>
              <p className="text-[9px] uppercase tracking-tighter font-nasalization" style={{ color: chineseYear.color }}>{chineseYear.element} {chineseYear.animal}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
