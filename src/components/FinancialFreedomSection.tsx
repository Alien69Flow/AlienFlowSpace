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
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-alien-gold/40"></div>
              <div className="absolute -top-4 -right-4 w-8 h-8 border-r-2 border-t-2 border-alien-gold/40"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 border-l-2 border-b-2 border-alien-green/40"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-alien-green/40"></div>
              
              <p className="text-2xl text-gray-200 font-[Exo] leading-relaxed mb-10 text-center font-light">
                Any individual or professional can understand the advantage of <span className="text-alien-gold font-semibold">digital Money</span>:
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-10 max-w-4xl mx-auto">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-alien-gold/10 to-transparent p-6 rounded-xl border border-alien-gold/20 hover:border-alien-gold/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-alien-gold rounded-full animate-pulse"></div>
                    <h4 className="text-xl text-alien-gold font-semibold font-nasalization">Impartial Money</h4>
                  </div>
                  <p className="text-gray-300 font-[Exo] leading-relaxed">
                    Access rewards for saving, <span className="text-alien-gold">without giving up control</span>. 
                    Money that does not discriminate based on geography, status, or background.
                  </p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-alien-green/10 to-transparent p-6 rounded-xl border border-alien-green/20 hover:border-alien-green/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-alien-green rounded-full animate-pulse"></div>
                    <h4 className="text-xl text-alien-green font-semibold font-nasalization">Decentralized Currencies</h4>
                  </div>
                  <p className="text-gray-300 font-[Exo] leading-relaxed">
                    <span className="text-alien-green">Scalable and Stable</span> with the Volatility for 
                    Safe Reserves of Values. True financial sovereignty.
                  </p>
                </motion.div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-alien-space-dark/50 to-alien-space/50 p-8 rounded-2xl border border-alien-gold/20"
              >
                <p className="text-xl text-gray-200 font-[Exo] leading-relaxed text-center mb-6">
                  Allowing individuals to <span className="text-alien-gold font-semibold">secure their wealth</span> while 
                  enjoying the benefits of a <span className="text-alien-green font-semibold">decentralized economy</span>.
                </p>
                
                <div className="flex items-center justify-center gap-4 flex-wrap">
                  <div className="flex items-center gap-2 bg-alien-space-dark/50 px-4 py-2 rounded-full border border-alien-gold/30">
                    <Coins className="h-4 w-4 text-alien-gold" />
                    <span className="text-alien-gold font-semibold text-sm">Cryptokens</span>
                  </div>
                  <div className="flex items-center gap-2 bg-alien-space-dark/50 px-4 py-2 rounded-full border border-alien-green/30">
                    <Bitcoin className="h-4 w-4 text-alien-green" />
                    <span className="text-alien-green font-semibold text-sm">NFTs</span>
                  </div>
                  <div className="flex items-center gap-2 bg-alien-space-dark/50 px-4 py-2 rounded-full border border-alien-gold/30">
                    <Zap className="h-4 w-4 text-alien-gold" />
                    <span className="text-alien-gold font-semibold text-sm">Instant Access</span>
                  </div>
                </div>
                
                <p className="text-lg text-gray-300 font-[Exo] leading-relaxed text-center mt-6">
                  <span className="text-alien-green font-semibold">Order & Generate</span> All Types of Experiences, 
                  Products & Services According to your Demands <span className="text-alien-gold font-semibold">Instantly</span>...
                </p>
              </motion.div>
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
              Aurum ₿itcoin cryptoken serves as collateral and derivative of Bitcoin and gold, 
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
