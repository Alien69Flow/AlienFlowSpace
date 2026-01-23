import React from 'react';
import { X, Facebook, Instagram, Mail, Disc, Send, Github, Linkedin, MessageSquare, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getCurrentChineseYear } from '@/lib/chineseCalendar';

const Footer = () => {
  const chineseYear = getCurrentChineseYear();
  const currentYear = new Date().getFullYear();
  
  // 1. Redes Sociales Ordenadas Alfabéticamente
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

  // 2. Navegación Ordenada Alfabéticamente (Sin duplicar Home si no quieres)
  const navLinks = [
    { to: "/about", label: "About" },
    { to: "/academy", label: "Academy" },
    { to: "/alien-trip", label: "AlienTrip" },
    { to: "/clubs", label: "Clubs" },
    { to: "/conetworking", label: "CoNetWorKing" },
    { to: "/contact", label: "Contact" },
    { to: "/", label: "Home" }
  ].sort((a, b) => a.label.localeCompare(b.label));

  return (
    <footer className="bg-gradient-to-br from-alien-space-dark/95 to-alien-space/90 backdrop-blur-md border-t-2 border-alien-gold/30 py-8 mt-auto relative z-30">
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
            <div className="flex gap-2 pt-2 flex-wrap">
              {socialLinks.map((social, i) => (
                <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="p-2 transition-all hover:scale-110 border border-alien-gold/20 rounded-lg bg-black/20" style={{ color: social.color }}>
                  <social.icon size={18} />
                </a>
              ))}
            </div>
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

        <div className="border-t border-alien-gold/20 mt-8 pt-6 flex flex-col lg:flex-row justify-between items-center gap-4">
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
