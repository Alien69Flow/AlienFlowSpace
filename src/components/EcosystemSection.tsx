import React from 'react';
import { motion } from 'framer-motion';
import {
  Dna, Coins, Wifi, Beaker, Database, Shield, Leaf,
  Building, Share2, Landmark, Gamepad2, ArrowRight
} from 'lucide-react';
import AlienModule from '@/components/alien/AlienModule';
import AlienTag from '@/components/alien/AlienTag';

const ecosystems = [
  { id: 'biofi', num: '01', title: 'BioFi', description: 'Decentralized biology financing and research initiatives.', icon: <Dna className="h-5 w-5 text-alien-green" /> },
  { id: 'defi', num: '02', title: 'DeFi', description: 'Decentralized finance protocols and applications.', icon: <Coins className="h-5 w-5 text-alien-gold" /> },
  { id: 'depin', num: '03', title: 'DePin', description: 'Decentralized physical infrastructure networks.', icon: <Wifi className="h-5 w-5 text-alien-green" /> },
  { id: 'desci', num: '04', title: 'DeSci', description: 'Decentralized science research and funding.', icon: <Beaker className="h-5 w-5 text-alien-gold" /> },
  { id: 'gamefi', num: '05', title: 'GameFi', description: 'Game finance and play-to-earn ecosystems.', icon: <Gamepad2 className="h-5 w-5 text-alien-green" /> },
  { id: 'ipfs', num: '06', title: 'IPFS', description: 'InterPlanetary File System for decentralized storage.', icon: <Database className="h-5 w-5 text-alien-gold" /> },
  { id: 'qfs', num: '07', title: 'QFS', description: 'Quantum Financial System integration.', icon: <Shield className="h-5 w-5 text-alien-green" /> },
  { id: 'refi', num: '08', title: 'ReFi', description: 'Regenerative finance for environmental impact.', icon: <Leaf className="h-5 w-5 text-alien-gold" /> },
  { id: 'rwa', num: '09', title: 'RWA', description: 'Real-World Assets tokenization and management.', icon: <Building className="h-5 w-5 text-alien-green" /> },
  { id: 'socialfi', num: '10', title: 'SocialFi', description: 'Social finance for community-driven initiatives.', icon: <Share2 className="h-5 w-5 text-alien-gold" /> },
  { id: 'tradfi', num: '11', title: 'TradFi', description: 'Traditional finance integration and bridging.', icon: <Landmark className="h-5 w-5 text-alien-green" /> },
];

const EcosystemSection = () => {
  return (
    <section
      id="ecosystem"
      data-section="ecosystem"
      className="af-hairline relative py-12 md:py-16 af-grid-overlay"
    >
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <AlienTag color="green">11 DOMAINS</AlienTag>
            <AlienTag color="muted">INTEROPERABLE</AlienTag>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-nasalization text-alien-green tracking-tight af-heading-underline inline-block">
            DAO Ecosystem
          </h2>
          <p className="max-w-2xl mt-4 text-sm text-af-text-muted font-nasalization">
            ΔlieπFlΦw $pac€ bridges diverse decentralized domains into a coherent, interoperable ecosystem.
          </p>
        </motion.div>

        {/* Grid of numbered HUD modules */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-0 border-l border-t border-af-border-hairline">
          {ecosystems.map((eco, index) => (
            <motion.div
              key={eco.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <a
                href={`#${eco.id}`}
                className="group block border-r border-b border-af-border-hairline p-4 md:p-5 h-full bg-af-surface/20 hover:bg-af-surface/40 transition-colors duration-200"
              >
                {/* Number + icon row */}
                <div className="flex items-center justify-between mb-3">
                  <span className="font-nasalization text-[10px] tracking-[0.2em] text-af-text-muted/50">
                    {eco.num}
                  </span>
                  <span className="opacity-60 group-hover:opacity-100 transition-opacity">
                    {eco.icon}
                  </span>
                </div>

                {/* Large acronym — dominant typography */}
                <h3 className="text-xl md:text-2xl font-nasalization font-bold text-alien-gold group-hover:text-alien-green transition-colors mb-2 tracking-tight">
                  {eco.title}
                </h3>

                {/* Short description */}
                <p className="text-xs text-af-text-muted leading-relaxed mb-3">
                  {eco.description}
                </p>

                {/* Hover arrow */}
                <div className="flex items-center gap-1 text-[10px] font-nasalization uppercase tracking-wider text-af-text-muted/50 group-hover:text-alien-green transition-colors">
                  Explore <ArrowRight className="h-3 w-3" />
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
