import React, { useState } from 'react';
import { 
  GraduationCap, BookOpen, Sparkles, Leaf, Brain, Coins, 
  Activity, Zap, ChevronRight, Fingerprint, Database, 
  Globe, Microscope, Star, Atom, ShieldCheck 
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
      tag: "FINANCIAL_SYSTEMS",
      description: "Mastery of digital economics, blockchain ecosystems, and sustainable financial frameworks.",
      icon: <Coins className="text-[#D4AF37]" />,
      modules: [
        { 
          name: "EcoFinTech", 
          icon: <Activity className="w-4 h-4 text-blue-400" />,
          topics: ["Circularity + ESG", "Critical Degrowth", "Macro/Micro Economics", "Game Theory"] 
        },
        { 
          name: "Blockchain Tech", 
          icon: <Database className="w-4 h-4 text-orange-400" />,
          topics: ["DeFi & BioFi", "DePIN & DeSci", "IPFS & RWA", "Smart Contracts"] 
        },
        { 
          name: "E-Commerce", 
          icon: <Sparkles className="text-yellow-300 w-4 h-4" />,
          topics: ["Digital Markets", "Implementation Types", "Infrastructure", "Global Scaling"] 
        }
      ]
    },
    {
      id: 2,
      cat: 'health',
      title: "HealthFlow",
      tag: "BIOLOGICAL_SYNC",
      description: "Biological synchronization and resource management through ecology and sacred nutrition.",
      icon: <Leaf className="text-[#39FF14]" />,
      modules: [
        { 
          name: "Ecology", 
          icon: <Microscope className="w-4 h-4 text-emerald-400" />,
          topics: ["Permaculture Design", "Soil Regeneration", "Water Harvesting", "Biodiversity"] 
        },
        { 
          name: "Conscious Living", 
          icon: <Activity className="w-4 h-4 text-red-400" />,
          topics: ["Daily Mudras", "Prana Breathing", "Yoga Integration", "Zero-Waste"] 
        },
        { 
          name: "Self-Management", 
          icon: <GraduationCap className="w-4 h-4 text-blue-300" />,
          topics: ["Natural Rhythms", "Yazio Nutrition", "Digital Minimalism", "Sacred Spaces"] 
        }
      ]
    },
    {
      id: 3,
      cat: 'harmony',
      title: "Harmony & Transcendence",
      tag: "SPACE_FLOW",
      description: "Study of Tesla equations, magnetic fields, and unified physics through consciousness.",
      icon: <Brain className="text-purple-400" />,
      modules: [
        { 
          name: "Tesla Science", 
          icon: <Zap className="w-4 h-4 text-[#D4AF37]" />,
          topics: ["Magnetic Fields", "Tesla Equations", "Neutrino Unification", "Free Energy Concepts"] 
        },
        { 
          name: "Consciousness", 
          icon: <Atom className="w-4 h-4 text-purple-300" />,
          topics: ["Preconscious Mapping", "Focus & Perception", "Equanimity", "Mind-Body Integration"] 
        },
        { 
          name: "Philosophy", 
          icon: <BookOpen className="w-4 h-4 text-indigo-400" />,
          topics: ["Alchemy", "Trivium & Quadrivium", "Heuristics", "Intellectual Illumination"] 
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
  ].sort((a, b) => a.localeCompare(b));

  const filteredContent = content.filter(item => activeTab === 'all' || item.cat === activeTab);

  return (
    <div className="min-h-screen bg-transparent text-white font-exo pt-24 pb-20 px-6">
      <header className="max-w-6xl mx-auto mb-16 relative">
        <div className="flex items-center gap-3 mb-4 text-[#39FF14] opacity-40 text-[10px] font-mono tracking-[0.4em]">
          <ShieldCheck className="w-4 h-4" />
          SYSTEM_DECRYPT_V2.5
        </div>
        <h1 className="text-6xl md:text-9xl font-nasalization mb-8 tracking-tighter">ACADEMY</h1>
        
        <div className="flex flex-wrap gap-4 border-b border-white/10 pb-8">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => { setActiveTab(cat.id); setSelectedFile(null); }}
              className={`text-[10px] font-nasalization tracking-[0.3em] px-8 py-3 rounded-xl transition-all border ${
                activeTab === cat.id ? 'bg-[#39FF14] text-black border-[#39FF14]' : 'text-gray-500 border-white/5 hover:border-white/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </header>

      <main className="max-w-6xl mx-auto space-y-8">
        <AnimatePresence mode='popLayout'>
          {filteredContent.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              onClick={() => setSelectedFile(selectedFile === item.id ? null : item.id)}
              className={`relative cursor-pointer p-10 rounded-[3rem] border transition-all duration-700 ${
                selectedFile === item.id 
                ? 'bg-white/[0.07] border-[#39FF14]' 
                : 'bg-white/[0.02] border-white/5 hover:border-[#D4AF37]/40'
              }`}
            >
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-8">
                  <div className="p-5 bg-black/40 rounded-[1.5rem] border border-white/10">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[9px] font-mono text-[#D4AF37] tracking-[0.4em] mb-2 uppercase">{item.tag}</div>
                    <h3 className="text-4xl font-nasalization tracking-tight">{item.title}</h3>
                  </div>
                </div>
                <Fingerprint className={`w-10 h-10 ${selectedFile === item.id ? 'text-[#39FF14]' : 'text-gray-800'}`} />
              </div>

              <p className="text-base text-gray-400 mb-10 font-exo max-w-4xl italic border-l-2 border-[#39FF14]/20 pl-6">
                {item.description}
              </p>

              {selectedFile === item.id && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }} 
                  animate={{ opacity: 1, height: 'auto' }} 
                  className="grid grid-cols-1 md:grid-cols-3 gap-6 py-12 border-t border-white/10 mt-8 overflow-hidden"
                >
                  {item.modules.map((mod, i) => (
                    <div key={i} className="space-y-6 bg-white/[0.03] p-8 rounded-[2rem] border border-white/5">
                      <div className="flex items-center gap-3">
                        {mod.icon}
                        <h4 className="text-[12px] font-nasalization text-[#39FF14] tracking-[0.2em] uppercase">
                          {mod.name}
                        </h4>
                      </div>
                      <ul className="space-y-4">
                        {mod.topics.map((t, j) => (
                          <li key={j} className="text-[11px] text-gray-400 flex items-start gap-3 font-mono leading-relaxed">
                            <span className="text-[#D4AF37]/50 mt-1">>></span> {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </motion.div>
              )}

              <div className="flex justify-between items-center mt-8 pt-8 border-t border-white/5 text-[10px] font-nasalization">
                <div className="flex items-center gap-2">
                  <Database className="w-3 h-3 text-gray-600" />
                  <span className="text-gray-600 uppercase">Status: {selectedFile === item.id ? 'Decrypted' : 'Encrypted'}</span>
                </div>
                <div className="flex items-center gap-2 text-[#39FF14]">
                  {selectedFile === item.id ? 'CLOSE' : 'OPEN'} ARCHIVE <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        <section className="pt-40 pb-20 text-center border-t border-white/5">
          <Globe className="w-16 h-16 text-[#D4AF37] mx-auto mb-10 opacity-20" />
          <h2 className="text-[11px] font-nasalization text-gray-500 tracking-[0.8em] mb-16 uppercase italic">Global Network Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {allPartners.map((partner, i) => (
              <div key={i} className="px-6 py-4 bg-white/[0.01] border border-white/5 rounded-2xl text-[10px] font-mono text-gray-500 flex items-center justify-center text-center italic">
                {partner}
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="max-w-5xl mx-auto mt-40 p-20 rounded-[5rem] bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 text-center relative overflow-hidden backdrop-blur-3xl">
        <Star className="w-16 h-16 text-[#D4AF37] mx-auto mb-10 animate-pulse" />
        <h2 className="text-4xl font-nasalization mb-8 tracking-[0.3em]">MASTER CERTIFICATION</h2>
        <Button className="bg-[#D4AF37] hover:bg-white text-black font-black px-20 h-20 rounded-[2rem] transition-all tracking-[0.3em] text-sm">
          JOIN WAITLIST
        </Button>
      </footer>
    </div>
  );
};

export default Academy;
