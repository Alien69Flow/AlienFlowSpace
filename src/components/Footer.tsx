import React, { useState, useEffect } from 'react';
import { X, Facebook, Instagram, Mail, Disc, Send, Github, Linkedin, MessageSquare, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getCurrentChineseYear } from '@/lib/chineseCalendar';
import { getHinduYear, getHebrewYear } from '@/lib/multiCalendar';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

const cnyDates: Record<number, string> = {
  2025: '2025-01-29', 2026: '2026-02-17', 2027: '2027-02-06',
  2028: '2028-01-26', 2029: '2029-02-13', 2030: '2030-02-03',
};

const Footer = () => {
  const [chineseYear, setChineseYear] = useState(getCurrentChineseYear());
  const currentYear = new Date().getFullYear();
  const hinduYear = getHinduYear();
  const hebrewYear = getHebrewYear();

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
    { href: "mailto:contact@alienflow.space", icon: Mail, label: "Email", color: "#F0D882" },
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
    { name: 'Aragon', logo: '/lovable-uploads/AragonDAOLogo.svg', url: 'https://aragon.org/' },
    { name: 'Bitcoin', logo: 'https://cryptologos.cc/logos/bitcoin-btc-logo.svg', url: 'https://bitcoin.org/' },
    { name: 'Ethereum', logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.svg', url: 'https://ethereum.org/' },
    { name: 'GitHub', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg', url: 'https://github.com/' },
    { name: 'GitBook', logo: '', url: 'https://www.gitbook.com/', svgPath: 'M10.802 17.77a.703.703 0 11-.002 1.406.703.703 0 01.002-1.406m11.024-4.347a.703.703 0 11.001-1.406.703.703 0 01-.001 1.406m0-2.876a2.176 2.176 0 00-2.174 2.174c0 .233.039.465.115.691l-7.181 3.823a2.165 2.165 0 00-1.784-.937c-.829 0-1.584.475-1.95 1.216l-6.451-3.402c-.682-.358-1.192-1.48-1.138-2.502.028-.533.212-.947.493-1.107.178-.1.392-.092.62.027l.042.023c1.71.9 7.304 3.847 7.54 3.956.363.169.565.237 1.185-.057l11.564-6.014c.17-.064.368-.227.368-.474 0-.342-.354-.477-.355-.477-.658-.315-1.669-.788-2.655-1.25-2.108-.987-4.497-2.105-5.546-2.655-.906-.474-1.635-.074-1.765.006l-.252.125C7.78 6.048 1.46 9.178 1.1 9.397.457 9.789.058 10.57.006 11.539c-.08 1.537.703 3.14 1.824 3.727l6.822 3.518a2.175 2.175 0 002.15 1.862 2.177 2.177 0 002.173-2.14l7.514-4.073c.38.298.853.461 1.337.461A2.176 2.176 0 0024 12.72a2.176 2.176 0 00-2.174-2.174' },
    { name: 'IPFS', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Ipfs-logo-1024-ice-text.png', url: 'https://ipfs.tech/' },
    { name: 'OpenSea', logo: '', url: 'https://opensea.io/', svgPath: 'M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 21.6c-5.302 0-9.6-4.298-9.6-9.6S6.698 2.4 12 2.4s9.6 4.298 9.6 9.6-4.298 9.6-9.6 9.6zm-3.6-12.96v6.72l5.76-3.36-5.76-3.36zm6.72 1.44v3.84l3.36-1.92-3.36-1.92z' },
    { name: 'Polygon', logo: 'https://cryptologos.cc/logos/polygon-matic-logo.svg', url: 'https://polygon.technology/' },
  ].sort((a, b) => a.name.localeCompare(b.name));

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
            <p className="af-prose text-alien-green/80 text-sm leading-relaxed max-w-md">
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
              <li><Link to="/terms-of-service" className="text-sm text-alien-green/70 hover:text-alien-gold transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Powered By */}
        <div className="mt-8 pt-6 border-t border-af-border-hairline">
          <p className="font-nasalization text-center text-xs mb-4 uppercase tracking-widest text-af-text-muted">Powered By</p>
          <div className="flex justify-center items-center gap-6 flex-wrap">
            {poweredBy.map((tech) => (
              <a
                key={tech.name}
                href={tech.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity duration-300"
              >
                {tech.svgPath ? (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-af-text-muted">
                    <path d={tech.svgPath} />
                  </svg>
                ) : (
                  <img src={tech.logo} alt={tech.name} className="h-6 w-6 object-contain" />
                )}
                <span className="text-xs text-af-text-muted font-nasalization hidden sm:inline">{tech.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-af-border-hairline mt-6 pt-6 flex flex-col lg:flex-row justify-between items-center gap-4">
          <p className="af-prose af-prose-dim text-xs">
            © {currentYear} AlienFlowSpace DAO • Cosmic Governance Enabled
          </p>

          <div className="flex items-center gap-2 flex-wrap justify-center">
            {/* Chinese calendar */}
            <div className="flex items-center gap-3 border border-af-border px-4 py-2">
              <span className="text-2xl animate-pulse" style={{ filter: `drop-shadow(0 0 8px ${chineseYear.color})` }}>{chineseYear.icon}</span>
              <div className="text-left leading-none">
                <p className="af-prose text-alien-gold font-bold text-xs">{currentYear} / {chineseYear.year}</p>
                <p className="font-nasalization text-[11px] uppercase tracking-tighter" style={{ color: chineseYear.color }}>{chineseYear.element} {chineseYear.animal}</p>
              </div>
            </div>

            {/* Hindu calendar (Vikram Samvat, Kali Yuga, Shaka Samvat) */}
            <div className="flex items-center gap-3 border border-af-border px-4 py-2">
              <span className="text-xl" style={{ filter: 'drop-shadow(0 0 6px #FF9933)' }}>ॐ</span>
              <div className="text-left leading-none space-y-0.5">
                <p className="af-prose text-alien-gold font-bold text-[11px]">VS {hinduYear.vikramSamvat}–{hinduYear.vikramSamvat + 1}</p>
                <p className="font-nasalization text-[11px]" style={{ color: '#FF9933' }}>KY {hinduYear.kaliYuga}</p>
                <p className="font-nasalization text-[11px]" style={{ color: '#FF9933' }}>Shaka {hinduYear.shakaSamvat}</p>
              </div>
            </div>

            {/* Hebrew calendar (Luach) */}
            <div className="flex items-center gap-3 border border-af-border px-4 py-2">
              <span className="text-xl" style={{ filter: 'drop-shadow(0 0 6px #4A90D9)' }}>✡</span>
              <div className="text-left leading-none">
                <p className="af-prose text-alien-gold font-bold text-[11px]">{hebrewYear.yearRange} AM</p>
                <p className="font-nasalization text-[11px]" style={{ color: '#4A90D9' }}>{hebrewYear.month}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
