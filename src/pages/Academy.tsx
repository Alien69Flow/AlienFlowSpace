import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Coins, Leaf, Brain, 
  GraduationCap, Zap, ExternalLink, BookOpen, 
  Sparkles, Globe, Cpu, Link as LinkIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';

// --- DATA: MÓDULOS (3 Pilares x 4 Bloques cada uno) ---
const academyModules = [
  {
    id: 1,
    title: "Abundance & Freedom",
    tag: "DATA_FLOW",
    description: "Master the fundamentals of digital economy, blockchain and sustainable financial systems to create abundance.",
    icon: <Coins className="text-alien-gold w-6 h-6" />,
    color: "border-alien-gold/30",
    shadow: "shadow-alien-gold/10",
    subModules: [
      { name: "EcoFinTech & Dynamics", topics: ["Circularity + ESG Criteria", "Economy & Finance (Macro/Micro)", "Game Theory", "System Dynamics"] },
      { name: "Electronic Commerce", topics: ["Foundations & Infrastructure", "Implementation Types", "Practical Advantages", "Global Scaling"] },
      { name: "Blockchain & Crypto", topics: ["Bitcoin & Altcoins", "DeFi, BioFi & ReFi", "DePIN (IPFS/Filecoin)", "Smart Contracts"] },
      { name: "Automated Revenue", topics: ["Digital Asset Properties", "Iterative Design", "Market Efficiency", "Revenue Architecture"] }
    ]
  },
  {
    id: 2,
    title: "Harmony & Transcendence",
    tag: "FLOW_SPACE",
    description: "Tesla equations, magnetic fields, and unified physics. Gravitational unification through neutrinos and multidimensional consciousness.",
    icon: <Brain className="text-purple-400 w-6 h-6" />,
    color: "border-purple-500/30",
    shadow: "shadow-purple-500/10",
    subModules: [
      { name: "Tesla & Unified Physics", topics: ["Tesla Equations", "Neutrino Unification", "Scalar Waves", "Magnetic Flux Dynamics"] },
      { name: "Consciousness & Perception", topics: ["Attention & Concentration", "Neuro-Acoustics", "Reality Tunnels", "Subconscious Mapping"] },
      { name: "Yoga & Sadhana", topics: ["Advanced Meditation", "Bio-Homeostatic Balance", "Sadhana Practice", "Yoga Integral"] },
      { name: "Alchemy & TAO", topics: ["Hermeneutics", "Spiritual Illumination", "Trivium & Quadrivium", "Wu Wei & TAO"] }
    ]
  },
  {
    id: 3,
    title: "Self-Management & Sustainability",
    tag: "HEALTH_FLOW",
    description: "Biological synchronization and resource management through permaculture, ecology, and sacred nutritional science.",
    icon: <Leaf className="text-alien-green w-6 h-6" />,
    color: "border-[#39FF14]/30",
    shadow: "shadow-[#39FF14]/10",
    subModules: [
      { name: "Ecological Foundations", topics: ["Biodiversity Principles", "Climate Adaptation", "Impact Reduction", "Resource Management"] },
      { name: "Permaculture Design", topics: ["Food Forest Creation", "Soil Regeneration", "Syntropic Farming", "Water Harvesting"] },
      { name: "Conscious Living", topics: ["Daily Mudras", "Energy Channels", "Prana Breathing", "Zero-Waste Practices"] },
      { name: "Flow, Time & Space", topics: ["Circadian Timing", "Digital Minimalism", "Feng Shui", "Natural Rhythms"] }
    ]
  }
];

// --- DATA: PARTNERS (Categorizados y Alfabéticos) ---
const partnersList = [
  // Academy Partners
  { name: "Academia", cat: "Academy", url: "https://www.academia.edu/", logo: "Academia.svg" },
  { name: "Coursera", cat: "Academy", url: "https://www.coursera.org/", logo: "Coursera.svg" },
  { name: "UNESCO", cat: "Academy", url: "https://www.unesco.org/", logo: "UnescoLogo.svg" },
  // DataFlow
  { name: "Alchemy", cat: "DataFlow", url: "https://www.alchemy.com/", logo: "Alchemy.png" },
  { name: "Bitcoin", cat: "DataFlow", url: "https://bitcoin.org", logo: "Bitcoin.svg" },
  // SpaceFlow
  { name: "ESA", cat: "SpaceFlow", url: "https://www.esa.int/", logo: "ESA.svg" },
  { name: "NASA Eyes", cat: "SpaceFlow", url: "https://eyes.nasa.gov/", logo: "NASA_logo.svg" },
  { name: "Virgo-GW", cat: "SpaceFlow", url: "https://www.virgo-gw.eu/", logo: "VirgoLogo.svg" },
  // HealthFlow
  { name: "Yazio", cat: "HealthFlow", url: "https://www.yazio.com/", logo: "Yazio.png" }
].sort((a, b) => a.name.localeCompare(b.name));

const Academy = () => {
  return (
    <div className="min-h-screen bg-transparent text-white font-exo pt-6 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* --- 1. HERO: ESTÉTICA ORIGINAL --- */}
        <header className="text-center mb-16 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-24 h-24 mb-6 relative"
          >
            <div className="absolute inset-0 bg-alien-gold/20 blur-2xl rounded-full animate-pulse" />
            <img src="/lovable-uploads/AcademyLogo.png" alt="Logo" className="relative z-10 h-full w-full object-contain" />
          </motion.div>

          <div className="relative mb-6">
            <h1 className="text-6xl md:text-8xl font-nasalization tracking-[0.25em] text-[#39FF14] drop-shadow-[0_0_20px_rgba(212,175,55,0.7)] uppercase">
              Academy
            </h1>
          </div>

          <p className="max-w-2xl mx-auto text-alien-gold text-base md:text-lg font-medium leading-relaxed italic opacity-90 mb-8">
            "Acquire complete attention capabilities to connect, discover and expand knowledge and skills. 
            Evolve towards an optimal experience with fullness of flow."
          </p>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 text-[#39FF14] text-[11px] font-mono tracking-[0.4em] uppercase bg-[#39FF14]/5 px-8 py-3 rounded-full border border-[#39FF14]/30 shadow-[0_0_15px_rgba(57,255,20,0.1)]"
          >
            <Zap className="w-4 h-4 animate-pulse" /> 
            Ready to evolve? Join the decentralized learning revolution
          </motion.div>
        </header>

        {/* --- 2. MÓDULOS: GRID HORIZONTAL 3x4 --- */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {academyModules.map((item) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`bg-black/60 backdrop-blur-2xl border-t-4 ${item.color} rounded-[2.5rem] p-8 flex flex-col shadow-2xl ${item.shadow}`}
            >
              <div className="flex items-center justify-between mb-8">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 shadow-inner">{item.icon}</div>
                <span className="text-[10px] font-mono text-alien-gold border border-alien-gold/30 px-4 py-1.5 rounded-full uppercase tracking-widest bg-black/40">
                  {item.tag}
                </span>
              </div>

              <h3 className="text-3xl font-nasalization text-white mb-4 tracking-tight">{item.title}</h3>
              <p className="text-sm text-gray-400 mb-10 leading-relaxed italic h-14 overflow-hidden">{item.description}</p>

              <div className="space-y-4 flex-grow">
                {item.subModules.map((sub, idx) => (
                  <div key={idx} className="group bg-white/[0.02] rounded-2xl p-5 border border-white/[0.05] hover:bg-white/[0.05] transition-all duration-300">
                    <h4 className="text-alien-gold text-xs font-bold mb-3 uppercase tracking-widest flex items-center gap-3">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-alien-gold/10 text-[#39FF14] text-[10px] border border-alien-gold/20">
                        {idx + 1}
                      </span> 
                      {sub.name}
                    </h4>
                    <ul className="text-[11px] text-gray-400 space-y-2 ml-9">
                      {sub.topics.map((topic, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-2">
                          <span className="text-alien-gold/40 mt-1.5 w-1 h-1 rounded-full bg-current shrink-0" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <Button className="mt-10 w-full bg-transparent border-2 border-alien-gold/30 text-alien-gold hover:bg-alien-gold hover:text-black transition-all duration-500 font-bold tracking-[0.3em] h-14 rounded-2xl">
                ACCESS MODULE
              </Button>
            </motion.div>
          ))}
        </section>

        {/* --- 3. MASTER & NFTS: DISEÑO REFORZADO --- */}
        <section className="mb-24 relative p-12 rounded-[3rem] border border-alien-gold/30 bg-black/40 backdrop-blur-sm overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-alien-gold/5 via-transparent to-[#39FF14]/5 opacity-50" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
            <div className="flex flex-col lg:flex-row items-center gap-10">
              <div className="w-24 h-24 bg-black rounded-3xl flex items-center justify-center border-2 border-alien-gold shadow-[0_0_30px_rgba(212,175,55,0.2)] group-hover:rotate-6 transition-transform duration-500">
                <GraduationCap className="w-12 h-12 text-alien-gold" />
              </div>
              <div>
                <h2 className="text-4xl font-nasalization text-white mb-4 uppercase tracking-tighter">Master Certification</h2>
                <p className="text-lg text-alien-gold/80 italic max-w-xl font-medium leading-relaxed">
                  Validate your evolution. Mint your unique NFT credential on-chain to unlock DeltaFlow Navigator status.
                </p>
              </div>
            </div>
            <Button className="bg-alien-gold text-black font-black px-12 h-16 rounded-2xl text-[11px] tracking-[0.3em] hover:bg-[#39FF14] hover:scale-105 transition-all shadow-2xl shadow-alien-gold/20 uppercase">
              MINT CREDENTIAL
            </Button>
          </div>
        </section>

        {/* --- 4. PARTNERS: FUNCIONALIDAD COMPLETA --- */}
        <section>
          <div className="flex items-center gap-6 mb-16">
            <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-alien-gold/30 to-transparent" />
            <h4 className="text-gray-500 font-nasalization text-[11px] tracking-[1.2em] uppercase italic opacity-60">Network Ecosystem</h4>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-alien-gold/30 to-transparent" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {partnersList.map((partner, idx) => (
              <motion.a 
                key={idx} 
                href={partner.url} 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -8 }}
                className="group relative flex flex-col items-center p-8 rounded-3xl bg-white/[0.01] border border-white/5 hover:border-alien-gold/50 hover:bg-white/[0.03] transition-all duration-500"
              >
                <div className="w-16 h-16 mb-4 flex items-center justify-center relative">
                  <img 
                    src={`/lovable-uploads/Academy/${partner.logo}`} 
                    alt={partner.name}
                    onError={(e) => { e.currentTarget.src = "/lovable-uploads/AcademyLogo.png"; e.currentTarget.className="w-10 opacity-10"; }}
                    className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:drop-shadow-[0_0_10px_rgba(212,175,55,0.4)]"
                  />
                </div>
                <span className="text-[10px] font-mono text-gray-500 group-hover:text-alien-gold uppercase tracking-tighter transition-colors">
                  {partner.name}
                </span>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-3 h-3 text-alien-gold/40" />
                </div>
              </motion.a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Academy;
