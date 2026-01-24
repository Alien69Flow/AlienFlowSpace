import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, Coins, Leaf, Brain, Fingerprint, 
  Globe, Star, Award, Zap, Sparkles 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Academy = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const academyModules = [
    {
      id: 1,
      title: "Abundance & Freedom",
      tag: "DATA_FLOW_FINANCE",
      description: "Advanced mastery of digital economics, blockchain ecosystems, and sustainable financial frameworks for sovereign individuals. Mastery of decentralized infrastructure and regenerative finance (ReFi).",
      icon: <Coins className="text-[#D4AF37] w-full h-full" />,
      subModules: [
        { name: "EcoFinTech & Dynamics", topics: ["Circularity + ESG Criteria Mastery", "System Dynamics & Critical Degrowth", "Macro/Micro Economics & Game Theory"] },
        { name: "Blockchain Ecosystems", topics: ["DeFi, BioFi and ReFi Deep Dive", "DePIN and DeSci (IPFS/Filecoin)", "Smart Contract Architecture"] },
        { name: "E-Commerce & Scaling", topics: ["Digital Markets & Global Infra", "Automated Revenue Architecture", "Scalability Frameworks"] }
      ]
    },
    {
      id: 2,
      title: "Self-Management & Sustainability",
      tag: "HEALTH_FLOW_LIFE",
      description: "Biological synchronization and resource management through permaculture, ecology, and sacred nutritional science. Integration of ancient wisdom with modern bio-hacking.",
      icon: <Leaf className="text-[#39FF14] w-full h-full" />,
      subModules: [
        { name: "Permaculture & Ecology", topics: ["Ecosystem Biodiversity & Permodesign", "Soil Regeneration & Syntropic Farming", "Water Harvesting Systems"] },
        { name: "Conscious Living", topics: ["Daily Mudras & Energy Channels", "Prana Breathing & Yoga Integration", "Homeostatic Biological Balance"] },
        { name: "Flow Management", topics: ["Natural Rhythms & Circadian Timing", "Digital Minimalism & Focus Mastery", "Sacred Space (Feng Shui)"] }
      ]
    },
    {
      id: 3,
      title: "Harmony & Transcendence",
      tag: "SPACE_FLOW_SCIENCE",
      description: "Deep study of Tesla equations, magnetic fields, and unified physics. Understanding gravitational force unification through neutrinos and the mechanics of multidimensional consciousness.",
      icon: <Brain className="text-purple-400 w-full h-full" />,
      subModules: [
        { name: "Tesla & Unified Physics", topics: ["Tesla Equations & Scalar Waves", "Magnetic Field Dynamics & Flux", "Neutrino Unification Theory", "Gravitational & Magnetic Synergy"] },
        { name: "Consciousness Mapping", topics: ["Subconscious & Preconscious Mapping", "Focus, Perception & Reality Tunnels", "Neuro-Acoustic Stimulation"] },
        { name: "Alchemy & Liberal Arts", topics: ["Trivium & Quadrivium Mastery", "Hermeneutics & Ancient Heuristics", "The Art of the Flow State (TAO)"] }
      ]
    }
  ];

  const partnerCategories = [
    { id: 'academy', label: 'ACADEMY NETWORK', partners: ["Academia", "AulaFacil", "Coursera", "Cursa", "edX", "FutureLearn", "Google for Education", "Khan Academy", "MasterClass", "MOOC", "OEGlobal", "OpenUpEd", "Skillshare", "Udacity", "Udemy", "UNED", "UNESCO", "UNSSC"].sort() },
    { id: 'dataflow', label: 'DATA FLOW', partners: ["Alchemy", "Bitcoin", "Google Growth", "HackerRank", "HackMD", "Hotmart"].sort() },
    { id: 'gameflow', label: 'GAME FLOW', partners: ["Unity Learn", "Unreal Engine"].sort() },
    { id: 'healthflow', label: 'HEALTH FLOW', partners: ["Climate Reanalyzer", "Daily Mudras", "Prana Breath", "Purely White", "Yazio"].sort() },
    { id: 'spaceflow', label: 'SPACE FLOW', partners: ["ESA", "Explore", "KAGRA", "LIGO", "LSC-Canfranc", "Map of the Universe", "NASA Eyes", "Virgo-GW"].sort() }
  ];

  return (
    <div className="min-h-screen bg-transparent text-white font-exo pt-32 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* POINT 1: THE 3 MODULES (EXPANDABLE) */}
        <header className="mb-20">
          <div className="flex items-center gap-2 mb-4 text-[#39FF14] opacity-40 text-[9px] font-mono tracking-[0.5em]">
            <ShieldCheck className="w-4 h-4" /> SECURE_ARCHIVE_v7.0_FINAL
          </div>
          <h1 className="text-6xl md:text-8xl font-nasalization tracking-tighter mb-6 uppercase text-glow">Academy</h1>
          <p className="max-w-3xl text-gray-500 italic text-lg border-l border-white/10 pl-6">Unified field science and biological optimization.</p>
        </header>

        <div className="space-y-8 mb-40">
          {academyModules.map((item) => (
            <div 
              key={item.id}
              onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
              className={`p-8 md:p-12 rounded-[3.5rem] border transition-all duration-700 cursor-pointer ${
                expandedId === item.id ? 'bg-white/[0.08] border-[#39FF14]' : 'bg-white/[0.02] border-white/5 hover:border-[#D4AF37]/40'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6 md:gap-10">
                  <div className="p-5 bg-black/40 rounded-[2rem] border border-white/10 text-3xl md:text-5xl w-20 h-20 md:w-28 md:h-28 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-[#D4AF37] tracking-[0.6em] uppercase mb-2 block">{item.tag}</span>
                    <h2 className="text-2xl md:text-5xl font-nasalization tracking-tight">{item.title}</h2>
                  </div>
                </div>
                <Fingerprint className={`w-10 h-10 md:w-20 md:h-20 ${expandedId === item.id ? 'text-[#39FF14]' : 'text-gray-900'}`} />
              </div>

              <AnimatePresence>
                {expandedId === item.id && (
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

        {/* POINT 2: ACADEMY NFT COLLECTION & TRANSCENDENTAL MASTER (MIDDLE) */}
        <section className="mb-40 relative">
          {/* Transcendental Master Design Integration */}
          <div className="absolute -top-24 right-0 opacity-10 pointer-events-none">
             <Sparkles className="w-64 h-64 text-[#D4AF37]" />
          </div>

          <div className="p-12 md:p-24 rounded-[4rem] bg-white/[0.02] border border-white/10 text-center overflow-hidden">
            <div className="mb-12 inline-block p-4 rounded-full bg-alien-gold/10 border border-alien-gold/20">
               <Award className="w-12 h-12 text-[#D4AF37]" />
            </div>
            
            <h2 className="text-4xl md:text-7xl font-nasalization tracking-[0.1em] mb-6 uppercase italic">Artifact Collection</h2>
            <p className="text-alien-gold font-mono text-[10px] tracking-[0.8em] mb-20 uppercase">Transcendent Self-Realization Mastery</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 font-nasalization">
              {['Flow Master', 'Bio Sovereign', 'Tesla Pioneer'].map((nft, i) => (
                <div key={i} className="group">
                  <div className="aspect-[3/4] bg-black/60 rounded-[3rem] mb-6 border border-white/5 group-hover:border-[#39FF14] transition-all flex items-center justify-center relative group overflow-hidden">
                     {/* Imagen del Artefacto (Asegúrate de que la ruta coincida con tu repo) */}
                     <img 
                        src={`/assets/academy/nft-${i+1}.png`} 
                        alt={nft} 
                        className="w-full h-full object-cover opacity-20 group-hover:opacity-60 transition-opacity" 
                        onError={(e) => e.currentTarget.src = "/placeholder-nft.png"}
                     />
                     <div className="absolute inset-0 flex items-center justify-center">
                        <Star className="w-12 h-12 text-white/5 group-hover:text-alien-gold transition-colors" />
                     </div>
                  </div>
                  <h4 className="text-[10px] tracking-[0.5em] text-gray-500 group-hover:text-white transition-colors uppercase">{nft}</h4>
                </div>
              ))}
            </div>
            <Button className="bg-[#D4AF37] text-black font-black px-16 h-20 rounded-[2.5rem] tracking-[0.5em] text-xs hover:bg-[#39FF14] transition-colors">
              MINT CREDENTIAL
            </Button>
          </div>
        </section>

        {/* POINT 3: PARTNER CATEGORIES WITH OFFICIAL LOGOS (END) */}
        <section className="space-y-32">
          <div className="text-center">
            <Globe className="w-16 h-16 text-[#D4AF37] mx-auto mb-8 opacity-20" />
            <h3 className="text-sm font-nasalization tracking-[1.2em] text-gray-500 uppercase italic">Network Infrastructure</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {partnerCategories.map((cat) => (
              <div key={cat.id} className="bg-white/[0.01] p-12 rounded-[4rem] border border-white/5 shadow-2xl">
                <h4 className="text-[#39FF14] font-nasalization text-sm tracking-[0.6em] mb-16 border-l-4 border-[#39FF14] pl-8 uppercase italic">{cat.label}</h4>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-10">
                  {cat.partners.map((p, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-5 group">
                      <div className="w-16 h-16 md:w-24 md:h-24 bg-white/5 rounded-full flex items-center justify-center border border-white/5 group-hover:border-[#D4AF37] transition-all overflow-hidden p-4">
                        {/* LÓGICA DE IMAGEN OFICIAL:
                          Busca el archivo en /assets/partners/nombre-del-partner.png 
                        */}
                        <img 
                          src={`/assets/partners/${p.toLowerCase().replace(/\s+/g, '-')}.png`} 
                          alt={p} 
                          className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all"
                          onError={(e) => {
                            // Fallback si la imagen no existe: muestra la inicial
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement!.innerHTML = `<span class="text-alien-gold font-bold text-lg">${p[0]}</span>`;
                          }}
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
      </div>

      <footer className="mt-48 py-20 border-t border-white/5 opacity-20 text-[11px] font-mono tracking-[1.2em] uppercase text-center">
        Academy /// SECURE_ARCHIVE
      </footer>
    </div>
  );
};

export default Academy;
