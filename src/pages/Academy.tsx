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

// --- PARTNERS POR CATEGORÍAS (ALFABÉTICO) ---
const partnerCategories = [
  { 
    label: 'ACADEMY PARTNERS', 
    partners: [
      { name: "Academia", url: "https://www.academia.edu/", logo: "Academia.svg" }, 
      { name: "Coursera", url: "https://www.coursera.org/", logo: "Coursera.svg" }, 
      { name: "UNESCO", url: "https://www.unesco.org/", logo: "UnescoLogo.svg" }
    ] 
  },
  { 
    label: 'DATAFLOW', 
    partners: [
      { name: "Alchemy", url: "https://www.alchemy.com/", logo: "Alchemy.png" }, 
      { name: "Bitcoin", url: "https://bitcoin.org", logo: "Bitcoin.svg" }
    ] 
  },
  { 
    label: 'ECOFLOW', 
    partners: [
      { name: "Ecology", url: "https://www.ecology.org/", logo: "Ecology.png" }
    ] 
  },
  { 
    label: 'GAMEFLOW', 
    partners: [
      { name: "GameTheory", url: "https://plato.stanford.edu/entries/game-theory/", logo: "GameTheory.png" }
    ] 
  },
  { 
    label: 'HEALTHFLOW', 
    partners: [
      { name: "Yazio", url: "https://www.yazio.com/", logo: "Yazio.png" }
    ] 
  },
  { 
    label: 'SPACEFLOW', 
    partners: [
      { name: "ESA", url: "https://www.esa.int/", logo: "ESA.svg" }, 
      { name: "NASA Eyes", url: "https://eyes.nasa.gov/", logo: "NASA_logo.svg" }, 
      { name: "Virgo", url: "https://www.virgo-gw.eu/", logo: "VirgoLogo.svg" }
    ] 
  }
];

const Academy = () => {
  const [expandedModule, setExpandedModule] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-transparent text-white font-exo pb-32">
      
      {/* 1. HERO ORIGINAL (RESTAURADO) */}
      <header className="pt-16 pb-20 text-center px-4">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-24 h-24 mx-auto mb-8 relative">
          <div className="absolute inset-0 bg-alien-gold/10 blur-3xl rounded-full" />
          <img src="/lovable-uploads/AcademyLogo.png" alt="Logo" className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_20px_rgba(212,175,55,0.5)]" />
        </motion.div>
        
        <h1 className="text-6xl md:text-8xl font-nasalization mb-8 tracking-widest text-[#39FF14] drop-shadow-[0_0_15px_rgba(212,175,55,0.7)] uppercase">
          Academy
        </h1>
        
        <p className="max-w-3xl mx-auto text-alien-gold italic text-base md:text-lg mb-10 leading-relaxed opacity-90">
          "Acquire complete attention capabilities to connect, discover and expand knowledge and skills. Evolve towards an optimal experience with fullness of flow."
        </p>
        
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[#39FF14]/30 bg-[#39FF14]/5 text-[#39FF14] text-[11px] font-mono tracking-[0.3em] uppercase animate-pulse shadow-[0_0_20px_rgba(57,255,20,0.1)]">
          <Zap className="w-4 h-4" /> Ready to evolve? Join the decentralized learning revolution
        </div>
      </header>

      {/* 2. MÓDULOS (GRID HORIZONTAL CON EXPANSIÓN) */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 mb-28 items-start">
        {academyModules.map((module) => (
          <motion.div 
            key={module.id}
            layout
            className="flex flex-col bg-black/40 backdrop-blur-2xl rounded-[2.5rem] border border-white/10 hover:border-alien-gold/40 transition-all duration-500 shadow-2xl relative overflow-hidden group"
          >
            <div 
              onClick={() => setExpandedModule(expandedModule === module.id ? null : module.id)}
              className="p-10 cursor-pointer"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-alien-gold/10 group-hover:border-alien-gold/30 transition-all duration-500">
                  {module.icon}
                </div>
                <ChevronDown className={`w-6 h-6 text-alien-gold transition-transform duration-500 ${expandedModule === module.id ? 'rotate-180' : ''}`} />
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
                        <h4 className="text-[#39FF14] text-[11px] font-bold tracking-[0.2em] uppercase flex items-center gap-3">
                          <CheckCircle2 className="w-4 h-4 text-alien-gold" /> {sub.name}
                        </h4>
                        <ul className="grid grid-cols-1 gap-2 pl-7">
                          {sub.topics.map((topic, j) => (
                            <li key={j} className="text-[11px] text-gray-500 hover:text-alien-gold transition-colors leading-relaxed">
                              • {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <Button className="w-full mt-4 bg-transparent border border-alien-gold/30 text-alien-gold hover:bg-alien-gold hover:text-black font-bold tracking-widest text-[10px] h-12 rounded-xl">
                      ENTER MODULE
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 3. MASTER CERTIFICATION (ORIGINAL) */}
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
            <Button className="bg-alien-gold text-black font-black px-12 h-14 rounded-full hover:bg-[#39FF14] transition-all uppercase text-[11px] tracking-[0.2em] shadow-xl shadow-alien-gold/20">
              MINT CREDENTIAL
            </Button>
          </div>
        </div>
      </section>

      {/* 4. PARTNERS (FUNCIONALIDAD TOTAL) */}
      <footer className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12">
          {partnerCategories.map((cat, i) => (
            <div key={i} className="space-y-6">
              <h5 className="text-[11px] font-nasalization text-alien-gold tracking-[0.3em] border-b border-white/10 pb-4 uppercase opacity-70">
                {cat.label}
              </h5>
              <div className="flex flex-col gap-4">
                {cat.partners.sort((a,b) => a.name.localeCompare(b.name)).map((p, j) => (
                  <a 
                    key={j} 
                    href={p.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-8 h-8 rounded-xl bg-white/5 p-1.5 border border-white/5 group-hover:border-[#39FF14]/40 group-hover:bg-[#39FF14]/10 transition-all duration-300 flex items-center justify-center overflow-hidden">
                      <img 
                        src={`/lovable-uploads/Academy/${p.logo}`} 
                        alt={p.name} 
                        className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500 scale-90 group-hover:scale-100"
                        onError={(e) => { e.currentTarget.style.opacity = '0.2'; }} 
                      />
                    </div>
                    <span className="text-[12px] text-gray-500 group-hover:text-white transition-colors tracking-tight font-medium">
                      {p.name}
                    </span>
                    <ExternalLink className="w-2.5 h-2.5 text-white/0 group-hover:text-[#39FF14] transition-all" />
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
