import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, Coins, Leaf, Brain, GraduationCap, 
  Zap, ExternalLink, ChevronDown, Award, CheckCircle2 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

// --- DATA DEFINITIVA: 3 MÓDULOS CON 4 BLOQUES CADA UNO ---
const academyModules = [
  {
    id: 1,
    title: "Abundance & Freedom",
    tag: "DATA_FLOW",
    description: "Master the fundamentals of digital economy, blockchain and sustainable financial systems to create abundance and financial freedom.",
    icon: <Coins className="h-6 w-6 text-alien-gold" />,
    modules: [
      { name: "EcoFinTech & Dynamics", topics: ["Circularity + ESG Criteria", "System Dynamics", "Macro & Micro Economy", "Game Theory"] },
      { name: "Electronic Commerce", topics: ["Foundations & Infrastructure", "Practical Advantages", "Implementation Types", "E-commerce Features"] },
      { name: "Blockchain & Cryptography", topics: ["Digital Assets (BTC, NFTs)", "DeFi & ReFi Deep Dive", "Smart Contracts", "DePIN & IPFS"] },
      { name: "Revenue Architecture", topics: ["Automated Systems", "Scalability Frameworks", "Digital Properties", "Market Efficiency"] }
    ]
  },
  {
    id: 2,
    title: "Harmony & Transcendence",
    tag: "FLOW_SPACE",
    description: "Explore Tesla equations, magnetic fields, and unified physics. Understanding gravitational force unification through neutrinos.",
    icon: <Brain className="h-6 w-6 text-alien-gold" />,
    modules: [
      { name: "Tesla & Unified Physics", topics: ["Tesla Equations & Scalar Waves", "Magnetic Field Flux", "Neutrino Unification Theory", "Gravitational Synergy"] },
      { name: "Consciousness & Perception", topics: ["Attention & Concentration", "Subconscious Mapping", "Reality Tunnels", "Neuro-Acoustics"] },
      { name: "Yoga & Sadhana", topics: ["Advanced Meditation", "Integral Yoga", "Sadhana Practice", "Bio-Homeostatic Balance"] },
      { name: "Alchemy & TAO", topics: ["Trivium & Quadrivium", "Hermeneutics", "Spiritual Illumination", "Wu Wei & Flow State"] }
    ]
  },
  {
    id: 3,
    title: "Self-Management & Sustainability",
    tag: "HEALTH_FLOW",
    description: "Learn to manage your life sustainably by integrating ecology, permaculture and conscious management of energy, space and time.",
    icon: <Leaf className="h-6 w-6 text-alien-gold" />,
    modules: [
      { name: "Ecological Foundations", topics: ["Biodiversity Principles", "Climate Adaptation", "Resource Management", "Mitigation Strategies"] },
      { name: "Permaculture Design", topics: ["Syntropic Farming", "Water Harvesting", "Soil Regeneration", "Food Forest Design"] },
      { name: "Conscious Living", topics: ["Daily Mudras", "Prana Breathing", "Energy Channels", "Zero-Waste & Nutrition"] },
      { name: "Time & Space Management", topics: ["Circadian Rhythms", "Feng Shui", "Digital Minimalism", "Sacred Space Design"] }
    ]
  }
];

// --- PARTNERS POR CATEGORÍAS (ALFABÉTICO) - 7 CATEGORÍAS ---
const partnerCategories = [
  { 
    label: 'ACADEMY PARTNERS', 
    partners: [
      { name: "Academia", url: "https://www.academia.edu/", logo: "/lovable-uploads/Academy/Academia.svg" }, 
      { name: "AulaFacil", url: "https://www.aulafacil.com/", logo: "/lovable-uploads/Academy/AulaFacil.png" },
      { name: "Coursera", url: "https://www.coursera.org/", logo: "https://upload.wikimedia.org/wikipedia/commons/9/97/Coursera-Logo_600x600.svg" }, 
      { name: "Cursa", url: "https://cursa.app/", logo: "/lovable-uploads/Academy/Cursa.webp" },
      { name: "edX", url: "https://www.edx.org/", logo: "/lovable-uploads/Academy/edX.png" }, 
      { name: "GrowGoogle", url: "https://grow.google/", logo: "/lovable-uploads/Academy/GrowGoogle.png" },
      { name: "Hotmart", url: "https://www.hotmart.com/", logo: "/lovable-uploads/Academy/Hotmart.png" },
      { name: "MasterClass", url: "https://www.masterclass.com/", logo: "/lovable-uploads/Academy/MasterClass.jpeg" },
      { name: "Mooc", url: "https://www.mooc.org/", logo: "/lovable-uploads/Academy/Mooc.png" },
      { name: "SkillShare", url: "https://www.skillshare.com/", logo: "/lovable-uploads/Academy/SkillShare.jpeg" },
      { name: "Udacity", url: "https://www.udacity.com/", logo: "/lovable-uploads/Academy/Udacity.svg" },
      { name: "UNED", url: "https://www.uned.es/", logo: "/lovable-uploads/Academy/UNED.png" }
    ] 
  },
  { 
    label: 'CASHFLOW', 
    partners: [
      { name: "Azrael Codex", url: "https://www.bitget.com/", logo: "/lovable-uploads/Clubs/Bitget.png" },
      { name: "Predik", url: "https://predik.io/", logo: "https://predik.io/assets/images/logo-predik.svg" }
    ] 
  },
  { 
    label: 'DATAFLOW', 
    partners: [
      { name: "Alchemy", url: "https://www.alchemy.com/", logo: "/lovable-uploads/Academy/Alchemy.png" }, 
      { name: "HackMD", url: "https://hackmd.io/", logo: "/lovable-uploads/Academy/HackMD.svg" },
      { name: "HackerRank", url: "https://www.hackerrank.com/", logo: "/lovable-uploads/Academy/HackerRank.svg" }
    ] 
  },
  { 
    label: 'ECOFLOW', 
    partners: [
      { name: "ClimateReanalyzer", url: "https://climatereanalyzer.org/", logo: "/lovable-uploads/Academy/ClimateReanalyzer.svg" },
      { name: "OEGlobal", url: "https://www.oeglobal.org/", logo: "/lovable-uploads/Academy/OEGlobal.jpeg" },
      { name: "OpenUpEd", url: "https://www.openuped.eu/", logo: "/lovable-uploads/Academy/OpenUpEd.jpeg" }
    ] 
  },
  { 
    label: 'GAMEFLOW', 
    partners: [
      { name: "Explore", url: "https://explore.org/", logo: "/lovable-uploads/Academy/Explore.png" },
      { name: "Unity Learn", url: "https://learn.unity.com/", logo: "/lovable-uploads/Academy/UnityLearn.svg" }
    ] 
  },
  { 
    label: 'HEALTHFLOW', 
    partners: [
      { name: "Meslo Ltd", url: "https://meslo.com/", logo: "https://meslo.com/logo.svg" },
      { name: "Motus DAO", url: "https://motusdao.io/", logo: "https://motusdao.io/logo.svg" },
      { name: "My DNA Bank", url: "https://mydnabank.com/", logo: "https://mydnabank.com/logo.png" },
      { name: "Proton", url: "https://proton.me/", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Proton_Technologies_AG_logo.svg" },
      { name: "Yazio", url: "https://www.yazio.com/", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5c/YAZIO_Logo.svg" }
    ] 
  },
  { 
    label: 'SPACEFLOW', 
    partners: [
      { name: "CERN", url: "https://home.cern/", logo: "https://upload.wikimedia.org/wikipedia/en/a/ae/CERN_logo.svg" },
      { name: "ESA", url: "https://www.esa.int/", logo: "/lovable-uploads/Academy/ESA.svg" }, 
      { name: "KAGRA", url: "https://gwcenter.icrr.u-tokyo.ac.jp/en/", logo: "/lovable-uploads/Academy/KAGRA.svg" },
      { name: "LIGO", url: "https://www.ligo.org/", logo: "/lovable-uploads/Academy/LIGO.png" },
      { name: "LSC", url: "https://www.ligo.org/", logo: "/lovable-uploads/Academy/LSC.png" },
      { name: "NASA", url: "https://www.nasa.gov/", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg" },
      { name: "SpaceX", url: "https://www.spacex.com/", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/SpaceX_logo_black.svg" },
      { name: "UNESCO", url: "https://www.unesco.org/", logo: "/lovable-uploads/Academy/Unesco.svg" },
      { name: "UNSSC", url: "https://www.unssc.org/", logo: "/lovable-uploads/Academy/UNSSC.png" },
      { name: "Virgo", url: "https://www.virgo-gw.eu/", logo: "/lovable-uploads/Academy/Virgo.svg" }
    ] 
  }
];

const Academy = () => {
  const [expandedModule, setExpandedModule] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-transparent text-white font-exo pb-32">
      
      {/* ═══════════════════════════════════════════════════════════════════
          1. HERO HEADER - 23rd Jan Restoration (Quantum Glow)
      ═══════════════════════════════════════════════════════════════════ */}
      <header className="pt-16 pb-20 text-center px-4 relative">
        {/* Multi-layer quantum glow background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-alien-gold/15 via-alien-gold/5 to-transparent rounded-full blur-[80px] animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-radial from-alien-green/12 via-alien-green/3 to-transparent rounded-full blur-[60px] animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Double-ring circular frame with Quantum Glow */}
        <motion.div 
          initial={{ scale: 0, rotate: -180 }} 
          animate={{ scale: 1, rotate: 0 }} 
          transition={{ type: 'spring', stiffness: 120, damping: 15 }}
          className="w-28 h-28 md:w-32 md:h-32 mx-auto mb-10 relative"
        >
          {/* Outer pulsating ring */}
          <div className="absolute inset-0 rounded-full border-2 border-alien-gold/40 animate-pulse shadow-[0_0_40px_rgba(212,175,55,0.3)]" />
          {/* Inner ring with depth */}
          <div className="absolute inset-2 rounded-full border border-alien-green/30 bg-black/60 backdrop-blur-md shadow-[inset_0_0_20px_rgba(57,255,20,0.1)]" />
          {/* Logo */}
          <img 
            src="/lovable-uploads/AcademyLogo.png" 
            alt="Academy Logo" 
            className="w-full h-full object-contain relative z-10 p-4 drop-shadow-[0_0_25px_rgba(212,175,55,0.6)]" 
          />
        </motion.div>
        
        {/* Title with Nasalization + green/gold gradient */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-5xl md:text-7xl lg:text-8xl font-nasalization mb-8 tracking-widest uppercase"
        >
          <span className="bg-gradient-to-r from-alien-green via-alien-gold to-alien-green bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(57,255,20,0.5)] animate-pulse">
            Academy
          </span>
        </motion.h1>
        
        {/* Subtitle/Quote - italicized, wide-spaced */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-3xl mx-auto text-alien-gold/80 italic text-base md:text-lg mb-10 leading-relaxed tracking-wide font-light"
        >
          "Acquire complete attention capabilities to connect, discover and expand knowledge and skills. Evolve towards an optimal experience with fullness of flow."
        </motion.p>
        
        {/* CTA Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-alien-green/30 bg-alien-green/5 text-alien-green text-[11px] font-mono tracking-[0.3em] uppercase animate-pulse shadow-[0_0_20px_rgba(57,255,20,0.1)]"
        >
          <Zap className="w-4 h-4" /> Ready to evolve? Join the decentralized learning revolution
        </motion.div>
      </header>

      {/* Separator: gradient line */}
      <div className="max-w-4xl mx-auto mb-16 px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-alien-gold/40 to-transparent" />
      </div>

      {/* 2. MÓDULOS (GRID HORIZONTAL CON EXPANSIÓN) */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 mb-28 items-start">
        {academyModules.map((module) => (
          <motion.div 
            key={module.id}
            layout
            className="flex flex-col bg-black/40 backdrop-blur-2xl rounded-[2.5rem] border border-white/10 hover:border-alien-gold/40 transition-all duration-300 shadow-2xl relative overflow-hidden group hover:scale-[1.01]"
          >
            <div 
              onClick={() => setExpandedModule(expandedModule === module.id ? null : module.id)}
              className="p-10 cursor-pointer"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-alien-gold/10 group-hover:border-alien-gold/30 transition-all duration-300">
                  {module.icon}
                </div>
                <ChevronDown className={`w-6 h-6 text-alien-gold transition-transform duration-300 ${expandedModule === module.id ? 'rotate-180' : ''}`} />
              </div>
              
              <h3 className="text-3xl font-nasalization mb-4 text-white tracking-tight">{module.title}</h3>
              <p className="text-gray-400 text-sm italic leading-relaxed mb-2 opacity-80">{module.description}</p>
              
              <AnimatePresence>
                {expandedModule === module.id && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }} 
                    animate={{ height: 'auto', opacity: 1 }} 
                    exit={{ height: 0, opacity: 0 }} 
                    className="pt-8 space-y-8 border-t border-white/10 mt-6"
                  >
                    {module.modules.map((sub, i) => (
                      <div key={i} className="space-y-3">
                        <h4 className="text-alien-green text-[11px] font-bold tracking-[0.2em] uppercase flex items-center gap-3">
                          <CheckCircle2 className="w-4 h-4 text-alien-gold" /> {sub.name}
                        </h4>
                        <ul className="grid grid-cols-1 gap-2 pl-7">
                          {sub.topics.map((topic, j) => (
                            <li key={j} className="text-[11px] text-gray-500 hover:text-alien-gold transition-colors duration-300 leading-relaxed">
                              • {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <Button className="w-full mt-4 bg-transparent border border-alien-gold/30 text-alien-gold hover:bg-alien-gold hover:text-black font-bold tracking-widest text-[10px] h-12 rounded-xl transition-all duration-300">
                      ENTER MODULE
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 3. MASTER CERTIFICATION */}
      <section className="max-w-6xl mx-auto px-6 mb-32">
        <div className="relative p-[1px] bg-gradient-to-r from-transparent via-alien-gold/40 to-transparent rounded-[3rem]">
          <div className="bg-black/80 backdrop-blur-xl rounded-[2.95rem] p-12 flex flex-col md:flex-row items-center justify-between gap-10 border border-white/5 shadow-2xl">
            <div className="flex items-center gap-8">
              <div className="w-20 h-20 rounded-3xl bg-alien-gold/5 flex items-center justify-center border border-alien-gold/20 shadow-[0_0_30px_rgba(212,175,55,0.1)]">
                <Award className="w-10 h-10 text-alien-gold" />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-4xl font-nasalization text-white uppercase tracking-tighter">Master Certification</h2>
                <p className="text-alien-gold/70 text-sm italic mt-2 font-medium tracking-wide">On-chain validation of your evolutionary journey through the flow.</p>
              </div>
            </div>
            <Button className="bg-alien-gold text-black font-black px-12 h-14 rounded-full hover:bg-alien-green transition-all duration-300 uppercase text-[11px] tracking-[0.2em] shadow-xl shadow-alien-gold/20">
              MINT CREDENTIAL
            </Button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          4. PARTNERS - 7 Categories (Alphabetical Order)
      ═══════════════════════════════════════════════════════════════════ */}
      <footer className="max-w-7xl mx-auto px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-nasalization text-alien-gold/80 tracking-widest uppercase mb-4">
            Partner Ecosystem
          </h2>
          <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-alien-green/50 to-transparent" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-10 md:gap-8">
          {partnerCategories.map((cat, i) => (
            <div key={i} className="space-y-5">
              <h5 className="text-[10px] md:text-[11px] font-nasalization text-alien-gold tracking-[0.25em] border-b border-white/10 pb-3 uppercase opacity-80">
                {cat.label}
              </h5>
              <div className="flex flex-col gap-3">
                {cat.partners.sort((a, b) => a.name.localeCompare(b.name)).map((p, j) => (
                  <a 
                    key={j} 
                    href={p.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-3 group hover:scale-[1.01] transition-all duration-300"
                  >
                    <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-white/5 p-1.5 border border-white/10 group-hover:border-alien-green/50 group-hover:bg-alien-green/10 transition-all duration-300 flex items-center justify-center overflow-hidden">
                      <img 
                        src={p.logo} 
                        alt={p.name} 
                        className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500 scale-90 group-hover:scale-100"
                        onError={(e) => { 
                          e.currentTarget.style.opacity = '0.3'; 
                          e.currentTarget.style.filter = 'none';
                        }} 
                      />
                    </div>
                    <span className="text-[11px] md:text-[12px] text-gray-500 group-hover:text-white transition-colors duration-300 tracking-tight font-medium truncate max-w-[100px]">
                      {p.name}
                    </span>
                    <ExternalLink className="w-2.5 h-2.5 text-transparent group-hover:text-alien-green transition-all duration-300 flex-shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default Academy;
