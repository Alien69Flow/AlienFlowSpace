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
      title: "Abundance and Freedom",
      tag: "DATA_FLOW_FINANCE",
      description: "Advanced mastery of digital economics, blockchain ecosystems, and sustainable financial frameworks for sovereign individuals. Mastery of decentralized infrastructure and regenerative finance (ReFi) to build anti-fragile wealth systems.",
      icon: <Coins className="text-[#D4AF37]" />,
      subModules: [
        { name: "EcoFinTech and Dynamics", topics: ["Circularity + ESG Criteria Mastery", "System Dynamics and Critical Degrowth", "Macro/Micro Economics and Game Theory", "Sustainable Yield Models", "Regenerative Economic Patterns"] },
        { name: "Blockchain Ecosystems", topics: ["DeFi, BioFi and ReFi Deep Dive", "DePIN and DeSci (IPFS/Filecoin)", "RWA and Smart Contract Architecture", "GameFi and SocialFi Governance", "Sovereign On-chain Identity"] },
        { name: "E-Commerce and Scaling", topics: ["Digital Markets and Global Infra", "Drop-servicing Implementation", "Advanced Crypto Payment Gateways", "International Scalability Frameworks", "Automated Revenue Architecture"] }
      ]
    },
    {
      id: 2,
      title: "Self-Management and Sustainability",
      tag: "HEALTH_FLOW_LIFE",
      description: "Biological synchronization and resource management through permaculture, ecology, and sacred nutritional science. Integration of ancient wisdom with modern bio-hacking for peak vitality.",
      icon: <Leaf className="text-[#39FF14]" />,
      subModules: [
        { name: "Permaculture and Ecology", topics: ["Ecosystem Biodiversity and Permodesign", "Soil Regeneration and Composting", "Water Harvesting Systems", "Site Analysis and Sector Mapping", "Syntropic Farming and Food Forests"] },
        { name: "Conscious Living", topics: ["Daily Mudras and Energy Channels", "Prana Breathing and Yoga Integration", "Zero-Waste Circular Households", "Mindful Consumption and Bio-Hacking", "Homeostatic Biological Balance"] },
        { name: "Flow Management", topics: ["Natural Rhythms and Circadian Timing", "Yazio: Sacred Nutrition and Fasting", "Digital Minimalism and Focus Mastery", "Sacred Space Cleaning and Feng Shui", "Vital Energy Protection and Shielding"] }
      ]
    },
    {
      id: 3,
      title: "Harmony and Transcendence",
      tag: "SPACE_FLOW_SCIENCE",
      description: "Deep study of Tesla equations, magnetic fields, and unified physics. Understanding gravitational force unification through neutrinos and the mechanics of multidimensional consciousness.",
      icon: <Brain className="text-purple-400" />,
      subModules: [
        { name: "Tesla and Unified Physics", topics: ["Tesla Equations and Scalar Waves", "Magnetic Field Dynamics and Flux", "Neutrino Unification Theory", "Gravitational and Magnetic Synergy", "Zero Point Energy Research"] },
        { name: "Consciousness Mapping", topics: ["Subconscious and Preconscious Mapping", "Focus, Perception and Reality Tunnels", "Equanimity and Mental Fullness", "Intentional Purpose and Willpower", "Neuro-Acoustic Stimulation"] },
        { name: "Alchemy and Liberal Arts", topics: ["Trivium and Quadrivium Mastery", "Hermeneutics and Ancient Heuristics", "Transmutation of the Self", "Emocional, Intellectual, Sensual, Sexual and Spiritual Illumination", "The Art of the Flow State (Ars Memoriae and TAO)"] }
      ]
    }
  ];

  const partnerCategories = [
    { id: 'academy', label: 'ACADEMY NETWORK', partners: ["Academia", "AulaFacil", "Coursera", "Cursa", "edX", "FutureLearn", "Google for Education", "Khan Academy", "MasterClass", "MOOC", "OEGlobal", "OpenUpEd", "Skillshare", "Udacity", "Udemy", "UNED", "UNESCO", "UNSSC"] },
    { id: 'dataflow', label: 'DATA FLOW', partners: ["Alchemy", "Bitcoin", "Google Growth", "HackerRank", "HackMD", "Hotmart"] },
    { id: 'gameflow', label: 'GAME FLOW', partners: ["Unity Learn", "Unreal Engine"] },
    { id: 'healthflow', label: 'HEALTH FLOW', partners: ["Climate Reanalyzer", "Daily Mudras", "Prana Breath", "Purely White", "Yazio"] },
    { id: 'spaceflow', label: 'SPACE FLOW', partners: ["ESA", "Explore", "KAGRA", "LIGO", "LSC-Canfranc", "Map of the Universe", "NASA Eyes", "Virgo-GW"] }
  ];

  return (
    <div className="min-h-screen bg-transparent text-white font-exo pt-24 pb-20 px-4 md:px-8">
      <section className="max-w-7xl mx-auto mb-32">
        <header className="mb-20 text-left">
          <div className="flex items-center gap-2 mb-4 text-[#39FF14] opacity-40 text-[9px] font-mono tracking-[0.5em]">
            <ShieldCheck className="w-4 h-4" /> SECURE_ARCHIVE_v6.9_BUILD_FIX
          </div>
          <h1 className="text-6xl md:text-[9rem] font-nasalization tracking-tighter leading-none mb-6 uppercase">Academy</h1>
          <p className="text-gray-500 max-w-3xl italic text-lg border-l border-white/10 pl-6">Unified field science and biological optimization.</p>
        </header>

        <div className="space-y-8">
          {academyModules.map((item) => (
            <div 
              key={item.id}
              onClick={() => setSelectedFile(selectedFile === item.id ? null : item.id)}
              className={`p-8 md:p-12 rounded-[3rem] border transition-all duration-700 cursor-pointer ${
                selectedFile === item.id ? 'bg-white/[0.08] border-[#39FF14]' : 'bg-white/[0.02] border-white/5 hover:border-[#D4AF37]/40'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6 md:gap-10">
                  <div className="p-5 bg-black/40 rounded-[2rem] border border-white/10 text-3xl md:text-5xl">{item.icon}</div>
                  <div>
                    <span className="text-[9px] font-mono text-[#D4AF37] tracking-[0.6em] uppercase mb-2 block">{item.tag}</span>
                    <h2 className="text-2xl md:text-6xl font-nasalization tracking-tight">{item.title}</h2>
                  </div>
                </div>
                <Fingerprint className={`w-10 h-10 md:w-20 md:h-20 ${selectedFile === item.id ? 'text-[#39FF14]' : 'text-gray-900'}`} />
              </div>

              <AnimatePresence>
                {selectedFile === item.id && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                    <p className="py-12 text-gray-400 text-lg md:text-2xl italic border-b border-white/5 mb-12 max-w-6xl leading-relaxed">{item.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8">
                      {item.subModules.map((sub, idx) => (
                        <div key={idx} className="bg-white/[0.03] p-8 rounded-[3rem] border border-white/5">
                          <h4 className="text-[#39FF14] font-nasalization text-xs mb-8 tracking-[0.2em] uppercase">{sub.name}</h4>
                          <ul className="space-y-4">
                            {sub.topics.map((topic, tIdx) => (
                              <li key={tIdx} className="text-[11px] md:text-[13px] text-gray-500 font-mono flex items-start gap-3">
                                <span className="text-[#D4AF37] opacity-40 mt-1">{" >> "}</span> {topic}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto mb-40 p-12 rounded-[4rem] bg-white/[0.02] border border-white/10 text-center relative overflow-hidden">
        <Star className="w-16 h-16 text-[#D4AF37] mx-auto mb-12 animate-pulse" />
        <h2 className="text-5xl md:text-7xl font-nasalization tracking-[0.2em] mb-16 uppercase italic">Artifact Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 font-nasalization">
          {['Flow Master', 'Bio Sovereign', 'Tesla Pioneer'].map((nft, i) => (
            <div key={i} className="group">
              <div className="aspect-[3/4] bg-black/60 rounded-[3rem] mb-6 border border-white/5 group-hover:border-[#39FF14] transition-all flex items-center justify-center">
                 <span className="text-gray-900 text-9xl font-black">#0{i+1}</span>
              </div>
              <h4 className="text-xs tracking-[0.5em] text-gray-500 group-hover:text-white transition-colors">{nft}</h4>
            </div>
          ))}
        </div>
        <Button className="bg-[#D4AF37] text-black font-black px-16 h-20 rounded-[2.5rem] tracking-[0.5em] text-sm">MINT CREDENTIAL</Button>
      </section>

      <section className="max-w-7xl mx-auto space-y-32">
        <div className="text-center">
          <Globe className="w-16 h-16 text-[#D4AF37] mx-auto mb-8 opacity-20" />
          <h3 className="text-sm font-nasalization tracking-[1.2em] text-gray-500 uppercase italic">Network Partners</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {partnerCategories.map((cat) => (
            <div key={cat.id} className="bg-white/[0.01] p-12 rounded-[4rem] border border-white/5 shadow-2xl">
              <h4 className="text-[#39FF14] font-nasalization text-sm tracking-[0.6em] mb-16 border-l-4 border-[#39FF14] pl-8 uppercase italic">{cat.label}</h4>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-10">
                {cat.partners.map((p, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-5 group">
                    <div className="w-16 h-16 md:w-24 md:h-24 bg-white/5 rounded-full flex items-center justify-center border border-white/5 group-hover:border-[#D4AF37] transition-all overflow-hidden p-4 grayscale group-hover:grayscale-0">
                      <img 
                        src={`/lovable-uploads/Academy/${p.toLowerCase().replace(/ /g, '-')}.png`} 
                        alt={p} 
                        className="w-full h-full object-contain opacity-40 group-hover:opacity-100 transition-all" 
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />
                    </div>
                    <span className="text-[9px] md:text-[11px] font-mono text-gray-600 group-hover:text-white uppercase text-center italic">{p}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <footer className="mt-48 py-20 border-t border-white/5 opacity-20 text-[11px] font-mono tracking-[1.2em] uppercase text-center">
        AlienFlow Academy // 2026
      </footer>
    </div>
  );
};

export default Academy;
