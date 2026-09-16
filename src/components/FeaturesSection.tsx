import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Shield, Users, Box, BarChart4, Zap, ArrowRight } from 'lucide-react';
import AlienTag from '@/components/alien/AlienTag';

const features = [
  { icon: <Box className="h-6 w-6" />, title: "Cross-Chain Integration", description: "Seamlessly operate across multiple blockchains with our advanced bridging technology." },
  { icon: <Globe className="h-6 w-6" />, title: "Interplanetary Governance", description: "Participate in decentralized decision-making across planetary boundaries with our advanced DAO structure." },
  { icon: <Zap className="h-6 w-6" />, title: "Lightning Fast Transactions", description: "Experience near instant transaction finality with our optimized consensus mechanisms and layer 2 scaling solutions." },
  { icon: <Users className="h-6 w-6" />, title: "Multi-Species Collaboration", description: "Our platform is designed for collaboration between diverse entities, ensuring inclusive participation." },
  { icon: <Shield className="h-6 w-6" />, title: "Quantum Security", description: "Next-generation quantum-resistant cryptography ensures the safety of all transactions and governance actions." },
  { icon: <BarChart4 className="h-6 w-6" />, title: "Transparent Analytics", description: "Access real-time data visualization and analytics on all ecosystem activity and performance." },
];

const FeaturesSection = () => {
  return (
    <section className="af-hairline relative py-12 md:py-16">
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
            <AlienTag color="green">06 FEATURES</AlienTag>
            <AlienTag color="muted">ADVANCED</AlienTag>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-nasalization text-alien-green tracking-tight af-heading-underline inline-block">
            Advanced Features
          </h2>
          <p className="max-w-2xl mt-4 text-sm text-af-text-muted font-nasalization">
            ΔlieπFlΦw $pac€ offers cutting-edge technologies to support our interstellar ecosystem
          </p>
        </motion.div>

        {/* Grid of flat modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-af-border-hairline">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true, margin: "-50px" }}
              className="border-r border-b border-af-border-hairline p-5 md:p-6 bg-af-surface/20 hover:bg-af-surface/40 transition-colors duration-200 group"
            >
              {/* Number label */}
              <span className="font-nasalization text-[10px] tracking-[0.2em] text-af-text-muted/40 mb-3 block">
                {String(index + 1).padStart(2, '0')}
              </span>

              {/* Icon */}
              <div className="text-alien-gold group-hover:text-alien-green transition-colors mb-4">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-nasalization text-alien-gold group-hover:text-alien-green transition-colors mb-2">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-300 leading-relaxed">
                {feature.description}
              </p>

              {/* Bottom border accent on hover */}
              <div className="mt-4 h-px w-full bg-af-border-hairline group-hover:bg-alien-green/40 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
