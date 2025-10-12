import React from 'react';
import { X, Facebook, Instagram, Mail, Disc, Send, Github, Linkedin, MessageSquare, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return <footer className="bg-gradient-to-br from-alien-space-dark/95 to-alien-space/90 backdrop-blur-sm border-t-2 border-alien-gold/30 py-6 lg:py-8 mt-auto relative z-20">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Logo and description */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <img src="/lovable-uploads/ALogo.png" alt="AlienFlowSpaceDAO Logo" className="h-8 w-auto object-contain gold-glow" />
              <span className="text-lg font-bold font-nasalization text-glow text-alien-green">
                AlienFlowSpace DAO
              </span>
            </div>
            <p className="text-alien-green/90 text-sm font-[Exo] leading-relaxed max-w-md">
              Uniting diverse blockchain domains under a cosmic governance structure. 
              Building the future of decentralized finance and sustainable technology across the multiverse.
            </p>
            <div className="flex gap-2 pt-1 flex-wrap">
              {[{
              href: "https://discord.gg/alienflowspace",
              icon: Disc,
              label: "Discord",
              color: "#5865F2"
            }, {
              href: "mailto:info@alienflow.space",
              icon: Mail,
              label: "Email",
              color: "#F0D882"
            }, {
              href: "https://www.facebook.com/Alien69Flow",
              icon: Facebook,
              label: "Facebook",
              color: "#1877F2"
            }, {
              href: "https://alienflowspace.gitbook.io/DAO",
              icon: BookOpen,
              label: "GitBook",
              color: "#22C55E"
            }, {
              href: "https://github.com/AlienFlowSpaceDAO",
              icon: Github,
              label: "Github",
              color: "#22C55E"
            }, {
              href: "https://www.instagram.com/alien69flow/",
              icon: Instagram,
              label: "Instagram",
              color: "#E4405F"
            }, {
              href: "https://linkedin.com/in/alienflow",
              icon: Linkedin,
              label: "LinkedIn",
              color: "#0A66C2"
            }, {
              href: "https://t.me/AlienFlow",
              icon: Send,
              label: "Telegram",
              color: "#0088CC"
            }, {
              href: "https://threads.net/@alien69flow",
              icon: MessageSquare,
              label: "Threads",
              color: "#000"
            }, {
              href: "https://x.com/alien69flow",
              icon: X,
              label: "X (Twitter)",
              color: "#1DA1F2"
            }].map((social, index) => <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="p-1.5 transition-all duration-300 hover:scale-110 hover:bg-alien-space-light/20 rounded-lg border border-alien-gold/20 hover:border-alien-green/40" style={{
              color: social.color
            }}>
                  <social.icon size={16} />
                </a>)}
            </div>
          </div>
          
          {/* Navigation Links */}
          <div>
            <h4 className="text-alien-gold font-nasalization font-bold mb-3 text-base text-glow">Navigation</h4>
            <ul className="space-y-2 font-[Exo]">
              {[{
              to: "/",
              label: "Home"
            }, {
              to: "/about",
              label: "About"
            }, {
              to: "/alien-trip",
              label: "AlienTrip"
            }, {
              to: "/contact",
              label: "Contact"
            }, {
              to: "/academy",
              label: "Academy"
            }, {
              to: "/clubs",
              label: "Clubs"
            }, {
              to: "/conetworking",
              label: "CoNetWorKing"
            }].map((link, index) => <li key={index}>
                  <Link to={link.to} className="text-sm text-alien-green/80 hover:text-alien-gold transition-all duration-300 hover:translate-x-1 inline-block border-b border-transparent hover:border-alien-gold/30">
                    {link.label}
                  </Link>
                </li>)}
            </ul>
          </div>
          
          {/* Legal & Resources */}
          <div>
            <h4 className="text-alien-gold font-nasalization font-bold mb-3 text-base text-glow">Resources</h4>
            <ul className="space-y-2 font-[Exo]">
              {[{
              href: "https://alienflowspace.gitbook.io/DAO",
              label: "Documentation"
            }, {
              href: "https://alienflowspace.gitbook.io/DAO",
              label: "Terms of Service"
            }, {
              href: "https://alienflowspace.gitbook.io/DAO",
              label: "Privacy Policy"
            }, {
              href: "https://alienflowspace.gitbook.io/DAO",
              label: "Cookie Policy"
            }].map((link, index) => <li key={index}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-alien-green/80 hover:text-alien-gold transition-all duration-300 hover:translate-x-1 inline-block border-b border-transparent hover:border-alien-gold/30">
                    {link.label}
                  </a>
                </li>)}
            </ul>
          </div>
        </div>
        
        <div className="border-t-2 border-alien-gold/30 mt-6 pt-4 bg-gradient-to-r from-alien-space-dark/50 to-alien-space/30 rounded-lg px-4 py-2">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-2">
            <p className="text-xs text-alien-green/70 font-[Exo] text-center lg:text-left">
              © {new Date().getFullYear()} AlienFlowSpace DAO. All rights reserved across the multiverse.
            </p>
            <div className="flex items-center gap-1 text-xs text-alien-gold/80">
              <span>Made with</span>
              <span className="text-alien-green text-base">💚</span>
              <span>for the cosmic community</span>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;