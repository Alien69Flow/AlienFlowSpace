import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CircleDollarSign, Calendar, MessagesSquare } from 'lucide-react';

const features = [{
  icon: <CircleDollarSign className="h-6 w-6 text-alien-gold" />,
  title: "Token Governance",
  description: "Hold A₿TC cryptokens to participate in voting and proposal creation across all ecosystem domains."
}, {
  icon: <Calendar className="h-6 w-6 text-alien-green" />,
  title: "Regular Assemblies",
  description: "Join weekly virtual assemblies to discuss proposals and future directions."
}, {
  icon: <MessagesSquare className="h-6 w-6 text-alien-gold" />,
  title: "Community Forums",
  description: "Contribute to ongoing discussions and knowledge sharing in our decentralized forums."
}];


const ParticipationSection = () => {
  return <section id="participate" className="py-20 relative">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        {/* Título */}
        <motion.h2 initial={{
        opacity: 0,
        y: -30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }} className="text-4xl font-bold mb-6 text-glow font-nasalization text-alien-green">
          Join the Cosmic Governance
        </motion.h2>
        {/* Descripción */}
        <motion.p initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} transition={{
        delay: 0.2,
        duration: 0.8
      }} viewport={{
        once: true
      }} className="mb-8 max-w-2xl font-semibold text-[alien-gold-light] text-alien-gold">ΔlieπFlΦw $pac€ DAO operates on a principle of transparent, decentralized governance where all participants have the opportunity to shape the present of our interplanetary ecosystem.</motion.p>
        {/* Features */}
        <div className="space-y-6 mb-8 w-full max-w-2xl">
          {features.map((feature, i) => <motion.div key={feature.title} className="flex flex-col sm:flex-row items-center justify-center gap-4 text-left sm:text-left" initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          delay: 0.3 + i * 0.1,
          duration: 0.7
        }} viewport={{
          once: true
        }}>
              <div className="bg-alien-space-light p-3 rounded-full mb-2 sm:mb-0">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl text-alien-gold-light font-nasalization text-alien-gold font-bold">{feature.title}</h3>
                <p className="text-alien-green">{feature.description}</p>
              </div>
            </motion.div>)}
        </div>
        {/* Botón */}
        <Button className="bg-alien-gold hover:bg-alien-gold-light text-alien-space-dark font-medium px-8 py-6 text-lg rounded-full font-nasalization">
          Connect & Participate
        </Button>
      </div>
    </section>;
};

export default ParticipationSection;
