import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CircleDollarSign, Calendar, MessagesSquare, Database, Globe } from 'lucide-react';
import { getCurrentChineseYear } from '@/lib/chineseCalendar';

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

const stats = [{
  value: "195",
  label: "Countries - DAO Members",
  icon: Globe,
  color: "text-alien-green",
  planetIcon: true
}, {
  value: "161 YB",
  label: "Data Storage",
  icon: Database,
  color: "text-alien-gold"
}];

const ParticipationSection = () => {
  const chineseYear = getCurrentChineseYear();
  const currentYear = new Date().getFullYear();
  
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
        <Button className="bg-alien-gold hover:bg-alien-gold-light text-alien-space-dark font-medium px-8 py-6 text-lg rounded-full mb-12 font-nasalization">
          Connect & Participate
        </Button>
        {/* Stats Grid - MORE TRANSPARENT */}
        <div className="flex justify-center mt-12 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center max-w-2xl w-full">
            {stats.map((stat, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} viewport={{
            once: true
          }} className="bg-alien-space-dark/30 backdrop-blur-sm p-6 rounded-xl border border-alien-gold/20 hover:border-alien-gold/40 transition-all duration-300">
                <div className="mx-auto mb-4">
                  {stat.planetIcon ? (
                    <div className="h-16 w-16 mx-auto">
                      <img 
                        src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=150&h=150&fit=crop" 
                        alt="Planet Earth" 
                        className="w-full h-full object-cover rounded-full animate-pulse"
                        style={{ filter: 'drop-shadow(0 0 12px rgba(34, 197, 94, 0.6))' }}
                      />
                    </div>
                  ) : (
                    <stat.icon className={`h-16 w-16 ${stat.color} mx-auto`} />
                  )}
                </div>
                <motion.div initial={{
              scale: 0.8
            }} whileInView={{
              scale: 1
            }} transition={{
              type: "spring",
              stiffness: 100,
              delay: index * 0.1 + 0.2
            }} viewport={{
              once: true
            }} className={`text-3xl font-bold mb-2 ${stat.color} font-nasalization`}>
                  {stat.value}
                </motion.div>
                <div className="text-gray-300 text-sm font-[Exo]">{stat.label}</div>
              </motion.div>)}
          </div>
        </div>
        
        {/* Year Display with Chinese Calendar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 bg-alien-space-dark/30 backdrop-blur-sm p-6 rounded-xl border border-alien-gold/20 max-w-md"
        >
          <div className="flex items-center justify-center gap-4">
            <span className="text-4xl" style={{ filter: `drop-shadow(0 0 8px ${chineseYear.color})` }}>
              {chineseYear.icon}
            </span>
            <div className="text-left">
              <p className="text-alien-gold font-bold text-xl font-nasalization">
                Year {currentYear} / {chineseYear.year}
              </p>
              <p className="text-sm font-[Exo]" style={{ color: chineseYear.color }}>
                {chineseYear.element} {chineseYear.animal}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};

export default ParticipationSection;
