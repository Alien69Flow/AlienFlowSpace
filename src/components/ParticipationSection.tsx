import React from 'react';
import { motion } from 'framer-motion';
import { CircleDollarSign, Calendar, MessagesSquare } from 'lucide-react';
import AlienButton from '@/components/alien/AlienButton';
import AlienTag from '@/components/alien/AlienTag';

const features = [
  { icon: <CircleDollarSign className="h-5 w-5 text-alien-gold" />, title: "Token Governance", description: "Hold A₿TC cryptokens to participate in voting and proposal creation across all ecosystem domains.", dotColor: 'bg-alien-gold' },
  { icon: <Calendar className="h-5 w-5 text-alien-green" />, title: "Regular Assemblies", description: "Join weekly virtual assemblies to discuss proposals and future directions.", dotColor: 'bg-alien-green' },
  { icon: <MessagesSquare className="h-5 w-5 text-alien-gold" />, title: "Community Forums", description: "Contribute to ongoing discussions and knowledge sharing in our decentralized forums.", dotColor: 'bg-alien-gold' },
];

const ParticipationSection = () => {
  return (
    <section id="participate" className="af-hairline relative py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">

          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <AlienTag color="green">GOVERNANCE</AlienTag>
              <AlienTag color="muted">PARTICIPATE</AlienTag>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-nasalization text-alien-green tracking-tight af-heading-underline inline-block">
              Join the Cosmic Governance
            </h2>
            <p className="max-w-2xl mt-4 text-sm text-af-text-muted font-nasalization leading-relaxed">
              ΔlieπFlΦw $pac€ DAO operates on a principle of transparent, decentralized governance where all participants have the opportunity to shape the present of our interplanetary ecosystem.
            </p>
          </motion.div>

          {/* Feature rows — compact, left-aligned, status dots */}
          <div className="border-l border-t border-af-border-hairline mb-8">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="border-r border-b border-af-border-hairline p-5 md:p-6 bg-af-surface/20 hover:bg-af-surface/40 transition-colors flex items-start gap-4"
              >
                <span className={`af-status-dot ${feature.dotColor} mt-2 flex-shrink-0`} />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    {feature.icon}
                    <h3 className="text-base font-nasalization text-alien-gold font-bold">{feature.title}</h3>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <AlienButton variant="primary" className="!px-8 !py-3 !text-sm">
              Connect & Participate
            </AlienButton>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ParticipationSection;
