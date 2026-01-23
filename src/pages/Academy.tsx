import React, { useState } from 'react';
import { 
  GraduationCap, BookOpen, Sparkles, Leaf, Brain, Coins, 
  Activity, Zap, ChevronRight, Fingerprint, Database, 
  Globe, Microscope, Star, Atom, ShieldCheck, ZapOff
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const Academy = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedFile, setSelectedFile] = useState<null | number>(null);

  const categories = [
    { id: 'all', label: 'ALL_ARCHIVES' },
    { id: 'abundance', label: 'DATA_FLOW' },
    { id: 'health', label: 'HEALTH_FLOW' },
    { id: 'harmony', label: 'SPACE_FLOW' }
  ];

  const content = [
    {
      id: 1,
      cat: 'abundance',
      title: "Abundance & Freedom",
      tag: "FINANCIAL_SYSTEMS_DATA_FLOW",
      description: "Mastery of digital economics, blockchain ecosystems, and sustainable financial frameworks.",
      icon: <Coins className="text-alien-gold" />,
      modules: [
        { 
          name: "EcoFinTech & System Dynamics", 
          topics: [
            "Circularity + ESG Criteria + Efficiency & Sustainability",
            "System Dynamics (Theories & Critical Degrowth)",
            "Digitalization + Money & Payment Systems",
            "Economy & Finance (Macro & Micro) + Game Theory"
          ] 
        },
        { 
          name: "Electronic Commerce", 
          topics: [
            "Fundamental characteristics & Infrastructure",
            "Practical advantages and uses",
            "Forms and types of implementation"
          ] 
        },
        { 
          name: "Advanced Blockchain Ecosystems", 
          topics: [
            "Digital Assets (Crypto, Tokens, BTC, Altcoins, Stablecoins)",
            "DeFi (Decentralized Finance) & BioFi (Biological Finance)",
            "DePIN (Decentralized Physical Infrastructure Networks)",
            "DeSci (Decentralized Science) & IPFS (File Systems)",
            "GameFi, SocialFi & ReFi (Regenerative Finance)",
            "RWA (Real World Assets) & Smart Contracts"
          ] 
        }
      ]
    },
    {
      id: 2,
      cat: 'health',
      title: "HealthFlow & Sustainability",
      tag: "BIOLOGICAL_OPTIMIZATION",
      description: "Biological synchronization and resource management through ecology and sacred nutrition.",
      icon: <Leaf className="text-alien-green" />,
      modules: [
        { 
          name: "Permaculture & Ecology", 
          topics: [
            "Ecosystem understanding & Biodiversity principles",
            "Permaculture ethics & Site analysis design",
            "Food forest creation & Soil regeneration",
            "Water harvesting & Climate adaptation"
          ] 
        },
        { 
          name: "Conscious Living", 
          topics: [
            "Mindful consumption & Zero-waste practices",
            "Energy efficiency & Sustainable transportation",
            "Daily Mudras & Energy Work (Prana Breathing)",
            "Daily Yoga Integration & Physical Harmony"
          ] 
        },
        { 
          name: "Self-Management (Time & Space)", 
          topics: [
            "Productivity systems (Natural Rhythms)",
            "Yazio: Sacred Nutrition & Mindful Eating systems",
            "Digital minimalism & Tech wellness",
            "Maintenance & Cleaning of sacred spaces"
          ] 
        }
      ]
    },
    {
      id: 3,
      cat: 'harmony',
      title: "Harmony & Transcendence",
      tag: "CONSCIOUSNESS_SPACE_FLOW",
      description: "Study of Tesla equations, magnetic fields, and unified physics through consciousness.",
      icon: <Brain className="text-purple-400" />,
      modules: [
        { 
          name: "Consciousness & Energy", 
          topics: [
            "Attention & Concentration (Attitude | Aptitude)",
            "Unconscious | Preconscious | Subconscious mapping",
            "Equanimity | Fullness - Focus | Perception",
            "Determination | Intention | Purpose | Meaning"
          ] 
        },
        { 
          name: "Tesla Physics & Unified Science", 
          topics: [
            "Tesla Equations & Magnetic Fields",
            "Gravitational Force Unification through Neutrinos",
            "Advanced meditation & Bio-energy techniques",
            "Integral body-mind-spirit integration"
          ] 
        },
        { 
          name: "Alchemy & Liberal Arts", 
          topics: [
            "Alchemy: Self-transcendence | Transcendence",
            "Trivium + Quadrivium (Foundations of Liberal Arts)",
            "Hermeneutics | Heuristics",
            "Spiritual & Intellectual Illumination"
          ] 
        }
      ]
    }
  ];

  const allPartners = [
    "Academia", "Alchemy", "AulaFacil", "Bitcoin", "Climate Reanalyzer", "Coursera", "Cursa", "Daily Mudras", 
    "edX", "ESA", "Explore", "FutureLearn", "Google for Education", "Google Growth", "HackerRank", "HackMD", 
    "Hotmart", "KAGRA", "Khan Academy", "LIGO", "LSC-Canfranc", "Map of the Universe", "MasterClass", "MOOC", 
    "NASA Eyes", "OEGlobal", "OpenUpEd", "Prana Breath", "Purely White", "Skillshare", "Udacity", "Udemy", 
    "UNED", "UNESCO", "Unity Learn", "Unreal Engine", "UNSSC", "Virgo-GW", "Yazio"
  ].sort();

  const filteredContent = content.filter(item => activeTab === 'all' || item.cat === activeTab);

  return (
    <div className="min-h-screen bg-transparent text-white font-exo pt-24 pb-20 px-6 overflow-hidden">
      <header className="max-w-6xl mx-auto mb-16 relative z-10">
        <div className="flex items-center gap-3 mb-4 text-alien-green opacity-40">
          <ShieldCheck className="w-4 h-4" />
          <span className="text-[10px] font-mono tracking-[0.4em]">ACADEMY_CORE_V2.5_STABLE</span>
        </div>
        <h1 className="text-6xl md:text-9xl font-nasalization mb-8 tracking-tighter opacity-90">
          ACADEMY
        </h1>
        
        <div className="flex flex-wrap gap-4 border-b border-white/10 pb-8">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => { setActiveTab(cat.id); setSelectedFile(null); }}
              className={`text-[10px] font-nasalization tracking-[0.3em] px-8 py-3 rounded-xl transition-all border ${
                activeTab === cat.id ? 'bg-alien-green text-black border-alien-green shadow-[0_0_20px_rgba(57,255,20,0.3)]' : 'text-gray-500 border-white/5 hover:border-white/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </header>

      <main className="max-w-6xl mx-auto relative z-10 space-y-8">
        <AnimatePresence mode='popLayout'>
          {filteredContent.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              onClick={() => setSelectedFile(selectedFile === item.id ? null : item.id)}
              className={`relative cursor-pointer p-10 rounded-[3rem] border transition-all duration-700 ${
                selectedFile === item.id 
                ? 'bg-white/[0.07] border-alien-green shadow-[0_0_60px_rgba(57,255,20,0.1)]' 
                : 'bg-white/[0.02] border-white/5 hover:border-alien-gold/40'
              }`}
            >
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-8">
                  <div className="p-5 bg-black/40 rounded-[1.5rem] border border-white/10 shadow-inner">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[9px] font-mono text-alien-gold tracking-[0.4em] uppercase mb-2">{item.tag}</div>
                    <h3 className="text-4xl font-nasalization tracking-tight">{item.title}</h3>
                  </div>
                </div>
                <div className="hidden lg:block p-4 border border-white/5 rounded-full">
                   <Fingerprint className={`w-10 h-10 ${selectedFile === item.id ? 'text-alien-green animate-pulse' : 'text-gray-800'}`} />
                </div>
              </div>

              <p className="text-base text-gray-400 mb-10 font-exo max-w-4xl leading-relaxed italic border-l-2 border-alien-green/20 pl-6">
                {item.description}
              </p>

              <AnimatePresence>
                {selectedFile === item.id && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }} 
                    animate={{ opacity: 1, height: 'auto' }} 
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 py-12 border-t border-white/10 mt-8"
                  >
                    {item.modules.map((mod, i) => (
                      <div key={i} className="space-y-6 bg-white/[0.03] p-8 rounded-[2rem] border border-white/5 hover:border-alien-green/20 transition-colors">
                        <h4 className="text-[12px] font-nasalization text-alien-green tracking-[0.2em] uppercase flex items-center gap-3">
                          <Zap className="w-4 h-4 text-alien-gold" /> {mod.name}
                        </h4>
                        <ul className="space-y-4">
                          {mod.topics.map((t, j) => (
                            <li key={j} className="text-[11px] text-gray-400 flex items-start gap-3 font-mono leading-relaxed">
                              <span className="text-alien-gold/50 mt-1">>></span> {t}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex justify-between items-center mt-8 pt-8 border-t border-white/5 text-[10px] font-nasalization">
                <div className="flex items-center gap-3 text-gray-600">
                  <div className={`w-2 h-2 rounded-full ${selectedFile === item.id ? 'bg-alien-green animate-pulse' : 'bg-gray-800'}`} />
                  <span>DECRYPT_MODE: {selectedFile === item.id ? 'ACTIVE' : 'IDLE'}</span>
                </div>
                <div className="flex items-center gap-2 text-alien-green group">
                  {selectedFile === item.id ? 'CLOSE_ARCHIVE' : 'OPEN_ARCHIVE'} 
                  <ChevronRight className={`w-4 h-4 transition-transform ${selectedFile === item.id ? 'rotate-90' : 'group-hover:translate-x-2'}`} />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        <section className="pt-40 pb-20 text-center border-t border-white/5">
          <Globe className="w-16 h-16 text-alien-gold mx-auto mb-10 opacity-20" />
          <h2 className="text-[11px] font-nasalization text-gray-500 tracking-[0.8em] mb-16 uppercase italic">Scientific & Global Educational Network</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {allPartners.map((partner, i) => (
              <div key={i} className="px-6 py-4 bg-white/[0.01] border border-white/5 rounded-2xl text-[10px] font-mono text-gray-500 hover:text-alien-green hover:border-alien-green/40 transition-all cursor-default flex items-center justify-center text-center">
                {partner}
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="max-w-5xl mx-auto mt-40 p-20 rounded-[5rem] bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 text-center relative overflow-hidden backdrop-blur-3xl">
        <Star className="w-16 h-16 text-alien-gold mx-auto mb-10 animate-pulse" />
        <h2 className="text-4xl font-nasalization mb-8 tracking-[0.3em] text-glow">MASTER CERTIFICATION</h2>
        <p className="text-base text-gray-500 mb-14 max-w-2xl mx-auto font-exo leading-relaxed">
          Complete the integration of the three flows to receive your on-chain NFT holographic credential.
        </p>
        <Button className="bg-alien-gold hover:bg-white text-black font-black px-20 h-20 rounded-[2rem] transition-all tracking-[0.3em] text-sm shadow-[0_0_30px_rgba(212,175,55,0.2)]">
          JOIN WAITLIST
        </Button>
      </footer>
    </div>
  );
};

export default Academy;
