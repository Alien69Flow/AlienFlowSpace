import React, { useState } from 'react';
import { 
  GraduationCap, BookOpen, Sparkles, Leaf, Brain, Coins, 
  Activity, Apple, Zap, Search, ChevronRight, Lock, 
  Dna, Fingerprint, Database, Globe
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const Academy = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedFile, setSelectedFile] = useState<null | number>(null);

  const categories = [
    { id: 'all', label: 'TODO EL ARCHIVO' },
    { id: 'abundance', label: 'DATA_FLOW (ECONOMÍA)' },
    { id: 'health', label: 'HEALTH_FLOW (BIENESTAR)' },
    { id: 'harmony', label: 'SPACE_FLOW (CONCIENCIA)' }
  ];

  const content = [
    {
      id: 1,
      cat: 'abundance',
      title: "Abundance & Freedom",
      tag: "FINANCIAL_SYSTEMS",
      description: "Masterización de sistemas económicos circulares y blockchain.",
      icon: <Coins className="text-alien-gold" />,
      details: ["EcoFinTech & ESG", "Blockchain & Smart Contracts", "DeFi Strategy"],
      partners: ["Alchemy", "Bitcoin", "HackerRank"]
    },
    {
      id: 2,
      cat: 'health',
      title: "HealthFlow: Body & Soul",
      tag: "BIOLOGICAL_OPTIMIZATION",
      description: "Sincronización biológica mediante nutrición y movimiento consciente.",
      icon: <Activity className="text-alien-green" />,
      details: ["Sacred Nutrition (Yazio/Alimentación)", "Daily Mudras & Energy", "Daily Yoga & Prana Breathing"],
      partners: ["Daily Mudras", "Prana Breath", "Yazio", "Purely White"]
    },
    {
      id: 3,
      cat: 'harmony',
      title: "Harmony & Transcendence",
      tag: "CONSCIOUSNESS_ARCHIVE",
      description: "Estudio de las ecuaciones de Tesla, campos magnéticos y física unificada.",
      icon: <Brain className="text-purple-400" />,
      details: ["Tesla Magnetic Fields", "Philosophical Alchemy", "Trivium & Quadrivium"],
      partners: ["Academia", "NASA Eyes", "ESA", "Virgo-GW"]
    }
  ];

  // Filtro y orden alfabético
  const filteredContent = content
    .filter(item => activeTab === 'all' || item.cat === activeTab)
    .sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div className="min-h-screen bg-transparent text-white font-exo pt-24 pb-20 px-6">
      {/* HEADER TIPO TERMINAL */}
      <header className="max-w-6xl mx-auto mb-16 relative">
        <div className="absolute -top-10 left-0 text-[10px] font-mono text-alien-green opacity-50 tracking-[0.5em]">
          ACCESSING_DEEP_SPACE_KNOWLEDGE_BASE...
        </div>
        <h1 className="text-6xl md:text-8xl font-nasalization bg-gradient-to-b from-white to-white/20 bg-clip-text text-transparent">
          ACADEMY
        </h1>
        <div className="flex flex-wrap gap-4 mt-8 border-b border-white/10 pb-4">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`text-[10px] font-nasalization tracking-widest px-4 py-2 transition-all ${
                activeTab === cat.id ? 'text-alien-green border-b-2 border-alien-green' : 'text-gray-500 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </header>

      {/* ARCHIVO DESCLASIFICADO (Grid interactivo) */}
      <main className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode='popLayout'>
          {filteredContent.map((item, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              key={item.id}
              onClick={() => setSelectedFile(selectedFile === item.id ? null : item.id)}
              className={`relative cursor-pointer group p-6 rounded-2xl border transition-all duration-500 ${
                selectedFile === item.id 
                ? 'bg-alien-green/10 border-alien-green shadow-[0_0_30px_rgba(57,255,20,0.2)] lg:col-span-2' 
                : 'bg-white/5 border-white/10 hover:border-white/30'
              }`}
            >
              {/* Estética de Expediente */}
              <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100">
                <Fingerprint className="w-8 h-8 text-alien-green" />
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-black/40 rounded-lg border border-white/10">
                  {item.icon}
                </div>
                <div>
                  <div className="text-[8px] font-mono text-alien-gold tracking-widest uppercase mb-1">
                    {item.tag}
                  </div>
                  <h3 className="text-xl font-nasalization">{item.title}</h3>
                </div>
              </div>

              <p className="text-sm text-gray-400 mb-6 font-exo leading-relaxed">
                {item.description}
              </p>

              {/* Contenido Expandido (Holograma) */}
              {selectedFile === item.id && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6 border-t border-white/10"
                >
                  <div>
                    <h4 className="text-[10px] font-nasalization text-alien-green mb-4 tracking-widest">MÓDULOS_DETALLADOS</h4>
                    <ul className="space-y-3">
                      {item.details.map((detail, i) => (
                        <li key={i} className="text-xs text-gray-300 flex items-center gap-3">
                          <Zap className="w-3 h-3 text-alien-gold" /> {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-nasalization text-alien-green mb-4 tracking-widest">PARTNERS_ENLAZADOS</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.partners.sort().map((p, i) => (
                        <span key={i} className="px-3 py-1 bg-black/40 border border-white/10 rounded-full text-[9px] text-alien-gold font-mono">
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/5">
                <span className="text-[9px] font-mono text-gray-600 tracking-tighter">REF_ID: 00{item.id}_AF</span>
                <div className="flex items-center gap-2 text-[10px] font-nasalization text-alien-green group-hover:translate-x-2 transition-transform">
                  ACCEDER AL ARCHIVO <ChevronRight className="w-3 h-3" />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </main>

      {/* FOOTER ACADEMY TIPO DATAFEED */}
      <footer className="max-w-6xl mx-auto mt-20 p-8 rounded-[2.5rem] bg-black/40 border border-white/5 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 bg-alien-green/20 rounded-full flex items-center justify-center border border-alien-green/40">
            <Database className="w-8 h-8 text-alien-green animate-pulse" />
          </div>
          <div>
            <h4 className="text-lg font-nasalization">Neural Link Active</h4>
            <p className="text-xs text-gray-500 font-mono">Sincronizando HealthFlow & SpaceFlow con la red local GitHub...</p>
          </div>
        </div>
        <Button className="bg-alien-gold text-black font-black px-10 h-14 rounded-2xl hover:bg-white transition-all">
          DESCARGAR CREDENCIAL NFT
        </Button>
      </footer>
    </div>
  );
};

export default Academy;
