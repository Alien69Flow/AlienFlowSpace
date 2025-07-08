import React from 'react';
import { motion } from 'framer-motion';
import { Bitcoin, TrendingUp, Shield, Coins, Zap } from 'lucide-react';
const FinancialFreedomSection = () => {
  const benefits = [{
    icon: TrendingUp,
    title: "Scalable Growth",
    description: "Exponential potential"
  }, {
    icon: Shield,
    title: "Secure Storage",
    description: "Protected wealth"
  }, {
    icon: Zap,
    title: "Instant Transactions",
    description: "Real-time access"
  }, {
    icon: Coins,
    title: "Digital Assets",
    description: "NFTs & tokens"
  }];
  return <section className="py-20 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-radial from-alien-green/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section - Two Line Title */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl text-alien-gold font-nasalization tracking-wider font-bold">
              ₿£€$$
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-alien-green font-nasalization tracking-wide">
              Financial Freedom for the Free Earth
            </h3>
          </div>
        </motion.div>

        {/* Main Content - Centered Layout */}
        <div className="max-w-4xl mx-auto mb-16">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.3
        }} viewport={{
          once: true
        }} className="card-border p-8 backdrop-blur-md text-center">
            <p className="text-xl text-gray-300 font-[Exo] leading-relaxed mb-8 text-center">
              Any individual or professional can understand the advantage of digital Money:
            </p>
            
            <div className="space-y-6 text-center max-w-3xl mx-auto">
              <div className="text-center">
                <p className="text-lg text-gray-300 font-[Exo] leading-relaxed">
                  <span className="text-alien-gold">·</span> <span className="text-alien-gold font-semibold">Impartial Money:</span> that does not discriminate.
                </p>
              </div>
              
              <div className="text-center">
                <p className="text-lg text-gray-300 font-[Exo] leading-relaxed">
                  <span className="text-alien-gold">·</span> <span className="text-alien-green font-semibold">Decentralized Currencies:</span> Scalable and Stable with the Volatility for Safe Reserves of Values.
                </p>
              </div>
            </div>
            
            <div className="mt-8 space-y-4 text-center">
              <p className="text-lg text-gray-300 font-[Exo] leading-relaxed text-center">
                Allowing individuals to <span className="text-alien-gold font-semibold">secure their wealth</span> while 
                enjoying the benefits of a <span className="text-alien-green font-semibold">decentralized economy</span>.
              </p>
              <p className="text-lg text-gray-300 font-[Exo] leading-relaxed text-center">
                Access with <span className="text-alien-gold font-semibold">Cryptokens and NFTs</span> to Order & Generate 
                All Types of Experiences, Products & Services According to your Demands 
                <span className="text-alien-green font-semibold"> Instantly</span>...
              </p>
            </div>
          </motion.div>
        </div>

        {/* Benefits Grid - Smaller and Complementary */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.4
      }} viewport={{
        once: true
      }} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.1 * index
        }} viewport={{
          once: true
        }} className="card-border p-4 text-center hover:scale-105 transition-transform duration-300">
              <benefit.icon className="h-6 w-6 text-alien-gold mx-auto mb-2" />
              <h5 className="font-bold text-xs text-alien-green font-nasalization mb-1">
                {benefit.title}
              </h5>
              <p className="text-xs text-gray-400 font-[Exo]">
                {benefit.description}
              </p>
            </motion.div>)}
        </motion.div>

        {/* ABTC Token Highlight - Simplified without widget */}
        <motion.div initial={{
        opacity: 0,
        scale: 0.9
      }} whileInView={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 0.8,
        delay: 0.5
      }} viewport={{
        once: true
      }} className="card-border p-8 max-w-6xl mx-auto text-center relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-alien-gold/5 via-transparent to-alien-green/5" />
          <div className="absolute top-0 left-0 w-32 h-32 bg-alien-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-alien-green/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <motion.h3 initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.6
          }} viewport={{
            once: true
          }} className="text-3xl md:text-4xl font-bold mb-4 text-alien-gold font-nasalization">
              A₿tc <span className="text-sm text-[#03ff19]">(Aurum nostrum non est aurum vulgi)</span>
            </motion.h3>
            
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.7
          }} viewport={{
            once: true
          }} className="text-lg text-gray-300 mb-6 font-[Exo] max-w-3xl mx-auto">
              Aurum ₿itoin cryptoken serves as collateral and derivative of Bitcoin and gold, 
              providing <span className="text-alien-green font-semibold">scalability</span>, 
              <span className="text-alien-gold font-semibold"> stability</span> and 
              <span className="text-alien-green font-semibold"> growth potential (Φπ)</span>...
            </motion.p>
            
            <motion.div initial={{
            opacity: 0,
            scale: 0.9
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.6,
            delay: 0.8
          }} viewport={{
            once: true
          }} className="inline-flex items-center gap-3 bg-gradient-to-r from-alien-space-dark to-alien-space px-6 py-3 rounded-full border border-alien-green/30">
              <a href="https://bitcoin.org" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg" 
                  alt="Bitcoin" 
                  className="h-5 w-5"
                />
              </a>
              <span className="text-alien-green font-semibold font-[Exo]">₿itcoin backed</span>
              <span className="text-gray-400">•</span>
              <span className="text-alien-gold font-semibold font-[Exo]">Interoperable</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default FinancialFreedomSection;