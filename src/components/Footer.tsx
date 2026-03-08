import React from 'react';
import { X, Facebook, Instagram, Mail, Disc, Send, Github, Linkedin, MessageSquare, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getCurrentChineseYear } from '@/lib/chineseCalendar';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

const Footer = () => {
  const chineseYear = getCurrentChineseYear();
  const currentYear = new Date().getFullYear();
  
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
    <footer className="relative bg-gradient-to-br from-alien-space-dark/95 to-alien-space/90 backdrop-blur-md border-t-0 py-8 mt-auto z-30">
      {/* Gradient separator */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-alien-gold to-alien-green opacity-60" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <img src="/lovable-uploads/ALogo.png" alt="Logo" className="h-10 w-auto object-contain gold-glow" />
              <span className="text-xl font-bold font-nasalization text-alien-green">AlienFlowSpace DAO</span>
            </div>
            <p className="text-alien-green/80 text-sm font-exo leading-relaxed max-w-md">
              Uniting diverse blockchain domains under a cosmic governance structure. 
              Building the future of decentralized finance across the multiverse.
            </p>
            <TooltipProvider delayDuration={200}>
              <div className="flex gap-2 pt-2 flex-wrap">
                {socialLinks.map((social, i) => (
                  <Tooltip key={i}>
                    <TooltipTrigger asChild>
                      <a href={social.href} target="_blank" rel="noopener noreferrer" className="p-2 transition-all hover:scale-110 border border-alien-gold/20 rounded-lg bg-black/20 hover:bg-black/40" style={{ color: social.color }}>
                        <social.icon size={18} />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="bg-alien-space-dark border-alien-gold/30 text-alien-gold text-xs">
                      {social.label}
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </TooltipProvider>
          </div>

          <div>
            <h4 className="text-alien-gold font-nasalization font-bold mb-4 text-glow">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <Link to={link.to} className="text-sm text-alien-green/70 hover:text-alien-gold transition-all hover:translate-x-1 inline-block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-alien-gold font-nasalization font-bold mb-4 text-glow">Resources</h4>
            <ul className="space-y-2">
              <li><a href="https://alienflowspace.gitbook.io/DAO" className="text-sm text-alien-green/70 hover:text-alien-gold">Documentation</a></li>
              <li><Link to="/privacy-policy" className="text-sm text-alien-green/70 hover:text-alien-gold">Privacy Policy</Link></li>
              <li><a href="https://alienflowspace.gitbook.io/DAO" className="text-sm text-alien-green/70 hover:text-alien-gold">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Powered By row */}
        <div className="mt-8 pt-6 border-t border-alien-gold/10">
          <p className="text-center text-xs text-muted-foreground font-nasalization mb-4 uppercase tracking-widest">Powered By</p>
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
                <span className="text-xs text-muted-foreground font-nasalization hidden sm:inline">{tech.name}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-alien-gold/10 mt-6 pt-6 flex flex-col lg:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-nasalization text-alien-green/50 uppercase tracking-widest">
            © {currentYear} AlienFlowSpace DAO • Cosmic Governance Enabled
          </p>
          
          <div className="flex items-center gap-3 bg-black/40 px-4 py-2 rounded-2xl border border-alien-gold/30">
            <span className="text-2xl animate-pulse" style={{ filter: `drop-shadow(0 0 8px ${chineseYear.color})` }}>{chineseYear.icon}</span>
            <div className="text-left leading-none">
              <p className="text-alien-gold font-bold text-xs">{currentYear} / {chineseYear.year}</p>
              <p className="text-[9px] uppercase tracking-tighter" style={{ color: chineseYear.color }}>{chineseYear.element} {chineseYear.animal}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
