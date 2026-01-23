import React, { useState } from 'react';
import { 
  GraduationCap, BookOpen, Sparkles, Leaf, Brain, Coins, 
  Activity, Zap, ChevronRight, Fingerprint, Database, 
  Globe, Microscope, Star, Atom, ShieldCheck 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const Academy = () => {
  const [selectedFile, setSelectedFile] = useState<null | number>(null);

  const academyModules = [
    {
      id: 1,
      title: "Abundance & Freedom",
      tag: "DATA_FLOW_FINANCE",
      description: "Advanced mastery of digital economics, blockchain ecosystems, and sustainable financial frameworks for sovereign individuals. Mastery of decentralized infrastructure and regenerative finance (ReFi).",
      icon: <Coins className="text-[#D4AF37]" />,
      subModules: [
        { name: "EcoFinTech & Dynamics", topics: ["Circularity + ESG Criteria", "System Dynamics & Critical Degrowth", "Macro/Micro Economics", "Game Theory Systems", "Sustainable Yield Models"] },
        { name: "Blockchain Ecosystems", topics: ["DeFi, BioFi & ReFi Systems", "DePIN & DeSci (IPFS/Filecoin)", "RWA & Smart Contract Architecture", "GameFi & SocialFi Governance", "On-chain Identity"] },
        { name: "E-Commerce & Scaling", topics: ["Digital Markets & Global Infra", "Drop-servicing Implementation", "Advanced Crypto Payment Gateways", "International Scalability Frameworks", "Automated Revenue Streams"] }
      ]
    },
    {
      id: 2,
      title: "Self-Management & Sustainability",
      tag: "HEALTH_FLOW_LIFE",
      description: "Biological synchronization and resource management through permaculture, ecology, and sacred nutritional science. Integration of ancient wisdom with modern bio-hacking for peak vitality.",
      icon: <Leaf className="text-[#39FF14]" />,
      subModules: [
        { name: "Permaculture & Ecology", topics: ["Ecosystem Biodiversity & Permodesign", "Soil Regeneration & Composting", "Water Harvesting Systems", "Site Analysis & Sector Mapping", "Syntropic Farming Concepts"] },
        { name: "Conscious Living", topics: ["Daily Mudras & Energy Channels", "Prana Breathing & Yoga Integration", "Zero-Waste Circular Households", "Mindful Consumption & Bio-Hacking", "Homeostatic Balance"] },
        { name: "Flow Management", topics: ["Natural Rhythms & Circadian Timing", "Yazio: Sacred Nutrition & Fasting", "Digital Minimalism & Focus Mastery", "Sacred Space Cleaning & Feng Shui", "Vital Energy Protection"] }
      ]
    },
    {
      id: 3,
      title: "Harmony & Transcendence",
      tag: "SPACE_FLOW_SCIENCE",
      description: "Deep study of Tesla equations, magnetic fields, and unified physics. Understanding gravitational force unification through neutrinos and the mechanics of consciousness.",
      icon: <Brain className="text-purple-400" />,
      subModules: [
        { name: "Tesla & Unified Physics", topics: ["Tesla Equations & Scalar Waves", "Magnetic Field Dynamics & Flux", "Neutrino Unification Theory", "Gravitational & Magnetic Synergy", "Zero Point Energy Research"] },
        { name: "Consciousness Mapping", topics: ["Subconscious & Preconscious Mapping", "Focus, Perception & Reality Tunnels", "Equanimity & Mental Fullness", "Intentional Purpose & Willpower", "Neuro-Acoustic Stimulation"] },
        { name: "Alchemy & Liberal Arts", topics: ["Trivium & Quadrivium Mastery", "Hermeneutics & Ancient Heuristics", "Transmutation of Self", "Emocional, Intellectual, Sensual & Sexual and Spiritual Illumination", "The Art of the Flow State (Ars Memoriae & TAO"] }
      ]
    }
  ];

  const partnerCategories = [
    { 
      id: 'academy', 
      label: 'ACADEMY NETWORK', 
      partners: ["Academia", "AulaFacil", "Coursera", "Cursa", "edX", "FutureLearn", "Google for Education", "Khan Academy", "MasterClass", "MOOC", "OEGlobal", "OpenUpEd", "Skillshare", "Udacity", "Udemy", "UNED", "UNESCO", "UNSSC"] 
    },
    { 
      id: 'dataflow', 
      label: 'DATA FLOW', 
      partners: ["Alchemy", "Bitcoin", "Google Growth", "HackerRank", "HackMD", "Hotmart"] 
    },
      { 
      id: 'gameflow', 
      label: 'GAME FLOW', 
      partners: ["Unity Learn", "Unreal Engine"] 
    },
    { 
      id: 'healthflow', 
      label: 'HEALTH FLOW', 
      partners: ["Climate Reanalyzer", "Daily Mudras", "Prana Breath", "Purely White", "Yazio"] 
    },
    { 
      id: 'spaceflow', 
      label: 'SPACE FLOW', 
      partners: ["ESA", "Explore", "KAGRA", "LIGO", "LSC-Canfranc", "Map of the Universe", "NASA Eyes", "Virgo-GW"] 
    }
  ];

  return (
    <div className="min-h-screen bg-transparent text-white font-exo pt-20 pb-20 px-4 md:px-8">
      {/* 1. MÓDULOS ORIGINALES (EXPANDIDOS) */}
      <section className="max-w-7xl mx-auto mb-32 pt-12">
        <header className="mb-16">
          <div className="flex items-center gap-2 mb-4 text-[#39FF14] opacity-40 text-[9px] font-mono tracking-[0.4em]">
            <ShieldCheck className="w-4 h-4" /> SECURE_ARCHIVE_v6.9_FINAL
          </div>
          <h1 className="text-6xl md:text-[8rem] font-nasalization tracking-tighter leading-none mb-8">ACADEMY</h1>
        </header>

        <div className="space-y-6">
          {academyModules.map((item) => (
            <motion.div 
              key={item.id}
              onClick={() => setSelectedFile(selectedFile === item.id ? null : item.id)}
              className={`p-6 md:p-10 rounded-[2.5rem] md:rounded-[4rem] border transition-all duration-500 cursor-pointer ${
                selectedFile === item.id ? 'bg-white/[0.08] border-[#39FF14] shadow-[0_0_60px_rgba(57,255,20,0.1)]' : 'bg-white/[0.02] border-white/5 hover:border-[#D4AF37]/50'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 md:gap-8">
                  <div className="p-4 md:p-6 bg-black/40 rounded-2xl md:rounded-3xl border border-white/10 text-2xl shadow-xl">{item.icon}</div>
                  <div>
                    <span className="text-[8px] font-mono text-[#D4AF37] tracking-[0.4em] uppercase mb-1 block">{item.tag}</span>
                    <h2 className="text-2xl md:text-5xl font-nasalization tracking-tight">{item.title}</h2>
                  </div>
                </div>
                <Fingerprint className={`w-8 h-8 md:w-14 md:h-14 transition-all ${selectedFile === item.id ? 'text-[#39FF14] rotate-12 scale-110' : 'text-gray-800'}`} />
              </div>

              <AnimatePresence>
                {selectedFile === item.id && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                    <p className="py-8 text-gray-400 text-sm md:text-xl italic border-b border-white/5 mb-8 font-exo max-w-5xl leading-relaxed">{item.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-6">
                      {item.subModules.map((sub, idx) => (
                        <div key={idx} className="bg-white/[0.03] p-8 rounded-[2.5rem] border border-white/5 hover:bg-white/[0.05] transition-colors shadow-inner">
                          <h4 className="text-[#39FF14] font-nasalization text-[10px] md:text-xs mb-6 tracking-widest uppercase">{sub.name}</h4>
                          <ul className="space-y-3">
                            {sub.topics.map((topic, tIdx) => (
                              <li key={tIdx} className="text-[10px] md:text-[11px] text-gray-500 font-mono flex items-start gap-2 leading-relaxed">
                                <span className="text-[#D4AF37] opacity-50 mt-1">>></span> {topic}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 2. ACADEMY NFT COLLECTION */}
      <section className="max-w-7xl mx-auto mb-32 p-10 md:p-24 rounded-[4rem] md:rounded-[6rem] bg-gradient-to-b from-white/[0.03] to-transparent border border-white/10 text-center relative overflow-hidden backdrop-blur-3xl shadow-2xl">
        <Star className="w-16 h-16 text-[#D4AF37] mx-auto mb-10 animate-pulse" />
        <h2 className="text-5xl md:text-7xl font-nasalization tracking-[0.2em] mb-16 uppercase italic">Artifact Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20 font-nasalization uppercase">
          {['Flow_Master', 'Bio_Sovereign', 'Tesla_Pioneer'].map((nft, i) => (
            <div key={i} className="group cursor-help transition-all">
              <div className="aspect-[3/4] bg-black/40 rounded-[3rem] mb-6 border border-white/5 group-hover:border-[#39FF14] transition-all flex flex-col items-center justify-center relative">
                 <div className="absolute inset-0 bg-[#39FF14]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                 <span className="text-gray-800 text-8xl font-black">#0{i+1}</span>
              </div>
              <h4 className="text-[10px] tracking-widest text-gray-500 group-hover:text-white transition-colors">{nft}</h4>
            </div>
          ))}
        </div>
        <Button className="bg-[#D4AF37] hover:bg-white text-black font-black px-16 h-20 rounded-[2.5rem] tracking-[0.5em] text-sm shadow-[0_20px_50px_rgba(212,175,55,0.2)] transition-all active:scale-95">MINT CREDENTIAL</Button>
      </section>

      {/* 3. PARTNERS CATEGORIZADOS (Rutas Lovable/Academy) */}
      <section className="max-w-7xl mx-auto space-y-20">
        <div className="text-center">
          <Globe className="w-12 h-12 text-[#D4AF37] mx-auto mb-6 opacity-30" />
          <h3 className="text-xs font-nasalization tracking-[1em] text-gray-500 uppercase italic">Network Partners</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {partnerCategories.map((cat) => (
            <div key={cat.id} className="bg-white/[0.01] p-10 rounded-[3.5rem] border border-white/5 hover:border-white/10 transition-all">
              <h4 className="text-[#39FF14] font-nasalization text-[11px] tracking-[0.5em] mb-12 border-l-2 border-[#39FF14] pl-6 uppercase">{cat.label}</h4>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-8">
                {cat.partners.map((p, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-4 group cursor-pointer">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-white/5 rounded-full flex items-center justify-center border border-white/5 group-hover:border-[#D4AF37] transition-all overflow-hidden p-4 grayscale group-hover:grayscale-0">
                      <img 
                        src={`/lovable-uploads/Academy/${p.toLowerCase().replace(/ /g, '-')}.png`} 
                        alt={p} 
                        className="w-full h-full object-contain opacity-50 group-hover:opacity-100 transition-all" 
                        onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/150?text=?'; }}
                      />
                    </div>
                    <span className="text-[8px] md:text-[9px] font-mono text-gray-600 group-hover:text-white uppercase text-center transition-colors italic">{p}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      
      </footer>
    </div>
  );
};

export default Academy;
