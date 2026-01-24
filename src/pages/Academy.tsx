import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, Coins, Leaf, Brain, Fingerprint, 
  Star, Award, Sparkles, GraduationCap, Zap, ChevronDown 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Academy = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  // DATA: Módulos (Información unificada y expandida)
  const academyModules = [
    {
      id: 1,
      title: "Abundance & Freedom",
      tag: "DATA_FLOW",
      description: "Mastery of digital economics, blockchain ecosystems, and sustainable financial frameworks. Focus on decentralized infrastructure and regenerative finance (ReFi).",
      icon: <Coins className="text-[#D4AF37] w-full h-full" />,
      subModules: [
        { name: "EcoFinTech & Dynamics", topics: ["Circularity + ESG Criteria Mastery", "System Dynamics & Critical Degrowth", "Macro/Micro Economics & Game Theory"] },
        { name: "Blockchain Ecosystems", topics: ["DeFi, BioFi and ReFi Deep Dive", "DePIN and DeSci (IPFS/Filecoin)", "Smart Contract Architecture"] },
        { name: "E-Commerce & Scaling", topics: ["Digital Markets & Global Infra", "Automated Revenue Architecture", "Scalability Frameworks"] }
      ]
    },
    {
       id: 2,
      title: "Harmony & Transcendence",
      tag: "FLOW_SPACE",
      description: "Deep study of Tesla equations, magnetic fields, and unified physics. Understanding gravitational force unification through neutrinos and the mechanics of multidimensional consciousness.",
      icon: <Brain className="text-purple-400 w-full h-full" />,
      subModules: [
        { name: "Tesla & Unified Physics", topics: ["Tesla Equations & Scalar Waves", "Magnetic Field Dynamics & Flux", "Neutrino Unification Theory", "Gravitational & Magnetic Synergy"] },
        { name: "Consciousness Mapping", topics: ["Subconscious & Preconscious Mapping", "Focus, Perception & Reality Tunnels", "Neuro-Acoustic Stimulation"] },
        { name: "Alchemy & Liberal Arts", topics: ["Trivium & Quadrivium Mastery", "Hermeneutics & Ancient Heuristics", "The Art of the Flow State (TAO)"] }
      ]
    },
    {
      id: 3,
      title: "Self-Management & Sustainability",
      tag: "HEALTH_FLOW",
      description: "Biological synchronization and resource management through permaculture, ecology, and sacred nutritional science. Integration of ancient wisdom with modern bio-hacking.",
      icon: <Leaf className="text-[#39FF14] w-full h-full" />,
      subModules: [
        { name: "Permaculture & Ecology", topics: ["Ecosystem Biodiversity & Permodesign", "Soil Regeneration & Syntropic Farming", "Water Harvesting Systems"] },
        { name: "Conscious Living", topics: ["Daily Mudras & Energy Channels", "Prana Breathing & Yoga Integration", "Homeostatic Biological Balance"] },
        { name: "Flow Management", topics: ["Natural Rhythms & Circadian Timing", "Digital Minimalism & Focus Mastery", "Sacred Space (Feng Shui)"] }
      ]
    }
  ];

  // DATA: Partners por Categorías
  const partnerCategories = [
    { label: 'ACADEMY NETWORK', partners: ["Academia", "AulaFacil", "Coursera", "Cursa", "edX", "FutureLearn", "Google for Education", "Khan Academy", "MasterClass", "MOOC", "OEGlobal", "OpenUpEd", "Skillshare", "Udacity", "Udemy", "UNED", "UNESCO", "UNSSC"].sort() },
    { label: 'DATA FLOW', partners: ["Alchemy", "Bitcoin", "Google Growth", "HackerRank", "HackMD", "Hotmart"].sort() },
    { label: 'FLOW SPACE', partners: ["ESA", "Explore", "KAGRA", "LIGO", "LSC-Canfranc", "Map of the Universe", "NASA Eyes", "Virgo-GW"].sort() },
    { label: 'HEALTH FLOW', partners: ["Climate Reanalyzer", "Daily Mudras", "Prana Breath", "Purely", "Yazio"].sort() },
    { label: 'GAME FLOW', partners: ["Unity Learn", "Unreal Engine"].sort() }
  ];

  return (
    <div className="min-h-screen bg-transparent text-white font-exo pt-24 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* --- BLOQUE 1: LOGO -> TÍTULO -> DESCRIPCIÓN --- */}
        <header className="mb-32 text-center">
          {/* Logo Original */}
          <div className="inline-flex items-center justify-center w-24 h-24 bg-alien-gold/10 rounded-full mb-8 border-2 border-alien-gold/30 backdrop-blur-xl shadow-2xl">
            <img src="/lovable-uploads/AcademyLogo.png" alt="Academy Logo" className="h-14 w-14 object-contain" />
          </div>

          {/* Título */}
          <div className="flex flex-col items-center gap-2 mb-8">
            <div className="flex items-center gap-2 text-[#39FF14] opacity-50 text-[10px] font-mono tracking-[0.6em]">
              <ShieldCheck className="w-4 h-4" /> SECURE_ARCHIVE_v7.0_FINAL
            </div>
            <h1 className="text-7xl md:text-9xl font-nasalization tracking-tighter uppercase text-glow leading-none">Academy</h1>
          </div>

          {/* Descripción Completa */}
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-gray-400 italic text-xl md:text-2xl font-light leading-relaxed">
              "Ready to Expand Your Cosmic Knowledge? Join space time navigators on their journey to master the principles of the decentralized multiverse..."
            </p>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed border-t border-white/5 pt-6">
              Acquire complete attention capabilities to connect, discover and expand knowledge and skills. 
              This helps you evolve and propels you towards an optimal experience with fullness of flow, 
              as well as increase the benefits of your quality of life and more sustainable gains, with complete wellbeing.
            </p>
          </div>
        </header>

        {/* --- BLOQUE 2: MÓDULOS --- */}
        <section className="space-y-6 mb-48">
          {academyModules.map((item) => (
            <motion.div 
              key={item.id}
              layout
              onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
              className={`p-8 md:p-12 rounded-[4rem] border transition-all duration-500 cursor-pointer overflow-hidden ${
                expandedId === item.id ? 'bg-white/[0.08] border-[#39FF14] shadow-[0_0_50px_rgba(57,255,20,0.05)]' : 'bg-white/[0.02] border-white/5 hover:border-alien-gold/40'
              }`}
            >
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-8 md:gap-12">
                  <div className="p-5 bg-black/40 rounded-[2.5rem] border border-white/10 w-24 h-24 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-alien-gold tracking-[0.5em] uppercase mb-2 block">{item.tag}</span>
                    <h2 className="text-3xl md:text-5xl font-nasalization">{item.title}</h2>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                    <Fingerprint className={`w-12 h-12 md:w-16 md:h-16 transition-colors ${expandedId === item.id ? 'text-[#39FF14]' : 'text-white/5'}`} />
                    <ChevronDown className={`w-6 h-6 transition-transform ${expandedId === item.id ? 'rotate-180 text-[#39FF14]' : 'text-white/20'}`} />
                </div>
              </div>

              <AnimatePresence>
                {expandedId === item.id && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
                    <div className="pt-12">
                        <p className="text-gray-300 text-xl md:text-3xl italic border-l-4 border-[#39FF14] pl-10 mb-16 max-w-5xl">
                            {item.description}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {item.subModules.map((sub, idx) => (
                                <div key={idx} className="bg-white/[0.03] p-10 rounded-[3rem] border border-white/5">
                                    <h4 className="text-[#39FF14] font-nasalization text-[11px] mb-8 tracking-[0.3em] uppercase">{sub.name}</h4>
                                    <ul className="space-y-4">
                                        {sub.topics.map((topic, tIdx) => (
                                            <li key={tIdx} className="text-[13px] md:text-[15px] text-gray-400 font-mono flex items-start gap-3">
                                                <Zap className="w-3 h-3 text-alien-gold mt-1 shrink-0 opacity-50" />
                                                <span>{topic}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </section>

        {/* --- BLOQUE 3: MASTER & NFTs --- */}
        <section className="mb-48 relative">
          <div className="p-12 md:p-24 rounded-[5rem] bg-white/[0.02] border border-white/10 overflow-hidden backdrop-blur-3xl relative">
            <div className="absolute -top-20 -right-20 opacity-10 pointer-events-none">
                <Sparkles className="w-96 h-96 text-alien-gold" />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center text-left">
                <div>
                    <div className="mb-10 inline-block p-5 rounded-3xl bg-alien-gold/10 border border-alien-gold/20">
                        <GraduationCap className="w-12 h-12 text-alien-gold" />
                    </div>
                    <h2 className="text-5xl md:text-7xl font-nasalization tracking-tight mb-8 uppercase leading-none">
                        Master <br/><span className="text-alien-gold italic">Certification</span>
                    </h2>
                    <p className="text-gray-400 text-xl font-exo mb-12 leading-relaxed italic">
                      Become a certified Explorer and Navigator of the ΔlieπFlΦw $pac€ DAO. Unlock exclusive opportunities in our expanding cosmic ecosystem through our "Transcendent Self-Realization Mastery".
                    </p>
                    <Button className="w-full md:w-auto bg-alien-gold text-black font-black px-16 h-20 rounded-[2.5rem] tracking-[0.4em] text-xs hover:bg-[#39FF14] transition-all">
                        MINT CREDENTIAL
                    </Button>
                </div>

                <div className="grid grid-cols-3 gap-6">
                    {['Bio Sovereign', 'Flow Master', 'Tesla Pioneer'].map((nft, i) => (
                        <div key={i} className="text-center group">
                            <div className="aspect-[3/4] bg-black/50 rounded-[2.5rem] mb-6 border border-white/10 group-hover:border-[#39FF14] transition-all flex items-center justify-center relative overflow-hidden">
                                <Star className="w-10 h-10 text-white/5 group-hover:text-alien-gold transition-colors" />
                                <img src={`/lovable-uploads/Academy/nft-${i+1}.png`} className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-20 transition-opacity" alt="" />
                            </div>
                            <h4 className="text-[10px] tracking-[0.3em] text-gray-500 uppercase font-mono">{nft}</h4>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        </section>

        {/* --- BLOQUE 4: PARTNERS CATEGORIZADOS --- */}
        <section className="space-y-32">
          <div className="text-center">
            <h3 className="text-[11px] font-nasalization tracking-[1.5em] text-gray-600 uppercase italic">
              Educational Partners and Infrastructure Network
            </h3>
            <p className="text-gray-500 font-mono text-[9px] mt-4 tracking-[0.5em]">WE COLLABORATE WITH THE WORLD'S BEST PLATFORMS</p>
          </div>
          
          <div className="grid grid-cols-1 gap-16">
            {partnerCategories.map((cat, idx) => (
              <div key={idx} className="bg-white/[0.01] p-12 rounded-[4rem] border border-white/5 shadow-inner">
                <div className="flex items-center gap-6 mb-16">
                    <h4 className="text-[#39FF14] font-nasalization text-sm tracking-[0.5em] border-l-4 border-[#39FF14] pl-8 uppercase italic shrink-0">
                        {cat.label}
                    </h4>
                    <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent" />
                </div>
                
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-8">
                  {cat.partners.map((p, pIdx) => (
                    <div key={pIdx} className="flex flex-col items-center gap-4 group">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-white/5 rounded-3xl flex items-center justify-center border border-white/5 group-hover:border-alien-gold transition-all p-3 relative overflow-hidden">
                        <img 
                          src={`/lovable-uploads/Academy/${p.replace(/\s+/g, '')}.png`} 
                          alt={p} 
                          className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement!.innerHTML = `<span class="text-alien-gold/40 font-bold text-lg">${p[0]}</span>`;
                          }}
                        />
                      </div>
                      <span className="text-[9px] font-mono text-gray-600 group-hover:text-white uppercase text-center italic tracking-wider transition-colors">{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <footer className="mt-48 py-20 border-t border-white/5 opacity-10 text-[11px] font-mono tracking-[1.5em] uppercase text-center">
        Academy /// Neural_Protocol_7.0 /// SECURE_ARCHIVE
      </footer>
    </div>
  );
};

export default Academy;
