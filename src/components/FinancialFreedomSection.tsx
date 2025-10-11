import React from 'react';
import { motion } from 'framer-motion';
import { Bitcoin, TrendingUp, Shield, Coins, Zap, Lock, ShoppingCart, Wand2, Sparkles } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
const FinancialFreedomSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-alien-gold/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-alien-green/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        <div className="absolute top-1/4 right-1/4 w-28 h-28 bg-cyan-400/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section - Two Line Title */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl text-alien-gold font-nasalization tracking-wider font-bold">
                ₿£€$$
              </h2>
              <h3 className="text-2xl md:text-3xl font-bold text-alien-green font-nasalization tracking-wide">
                Financial Freedom for the Free Earth
              </h3>
            </div>
          </motion.div>

          {/* ABTC Token Highlight - Moved up here */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="card-border p-8 max-w-6xl mx-auto text-center relative overflow-hidden mb-16"
          >
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-alien-gold/5 via-transparent to-alien-green/5" />
            <div className="absolute top-0 left-0 w-32 h-32 bg-alien-gold/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-alien-green/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-4 text-alien-gold font-nasalization text-center"
              >
                <div>A₿tc</div>
                <div className="text-sm text-[#03ff19]">(Aurum nostrum non est aurum vulgi)</div>
              </motion.h3>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className="text-lg text-gray-300 mb-6 font-[Exo] max-w-3xl mx-auto"
              >
                Aurum ₿itcoin cryptoken serves as collateral and derivative of Bitcoin and gold, 
                providing <span className="text-alien-green font-semibold">scalability</span>, 
                <span className="text-alien-gold font-semibold"> stability</span> and 
                <span className="text-alien-green font-semibold"> growth potential (Φπ)</span>...
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-alien-space-dark to-alien-space px-6 py-3 rounded-full border border-alien-green/30"
              >
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

          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-2xl text-gray-200 font-[Exo] leading-relaxed mb-6">
              Any individual or professional can understand the advantage of digital Money:
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-alien-gold to-alien-green mx-auto rounded-full"></div>
          </div>

          {/* Enhanced Main Features Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
            
            {/* Enhanced Impartial Money Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-alien-space-dark/90 to-alien-space-light/30 backdrop-blur-xl border-2 border-alien-gold/30 hover:border-alien-gold/60 transition-all duration-500 group hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-alien-gold/20 h-full">
                <CardHeader className="relative overflow-hidden p-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-alien-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-alien-gold/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="flex items-center mb-6 relative z-10">
                    <div className="p-4 bg-gradient-to-br from-alien-gold/20 to-alien-gold/10 rounded-2xl mr-4 border-2 border-alien-gold/30 group-hover:border-alien-gold/50 transition-all duration-300 group-hover:scale-110">
                      <Shield className="h-8 w-8 text-alien-gold" />
                    </div>
                    <div>
                  <CardTitle className="text-2xl font-bold text-alien-gold font-nasalization group-hover:text-alien-gold-light transition-colors mb-2">
                        Impartial Money
                      </CardTitle>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-alien-green rounded-full mr-2"></span>
                        <span className="text-alien-green text-sm font-[Exo]">Fair & Neutral</span>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-gray-200 text-lg leading-relaxed font-[Exo] relative z-10 mb-6">
                    · Access rewards for saving, without giving up control.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <div className="space-y-4">
                    <div className="flex items-start p-3 bg-alien-space-light/20 rounded-lg border border-alien-gold/10 hover:border-alien-gold/20 transition-colors">
                      <div className="w-3 h-3 bg-alien-green rounded-full mt-1 mr-3 flex-shrink-0 animate-pulse"></div>
                      <p className="text-gray-200 font-[Exo] font-medium">Self-custodial solutions with full ownership</p>
                    </div>
                    <div className="flex items-start p-3 bg-alien-space-light/20 rounded-lg border border-alien-gold/10 hover:border-alien-gold/20 transition-colors">
                      <div className="w-3 h-3 bg-alien-green rounded-full mt-1 mr-3 flex-shrink-0 animate-pulse delay-200"></div>
                      <p className="text-gray-200 font-[Exo] font-medium">Transparent reward mechanisms</p>
                    </div>
                    <div className="flex items-start p-3 bg-alien-space-light/20 rounded-lg border border-alien-gold/10 hover:border-alien-gold/20 transition-colors">
                      <div className="w-3 h-3 bg-alien-green rounded-full mt-1 mr-3 flex-shrink-0 animate-pulse delay-400"></div>
                      <p className="text-gray-200 font-[Exo] font-medium">Zero intermediary dependencies</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Enhanced Decentralized Currencies Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-alien-space-dark/90 to-alien-space-light/30 backdrop-blur-xl border-2 border-alien-green/30 hover:border-alien-green/60 transition-all duration-500 group hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-alien-green/20 h-full">
                <CardHeader className="relative overflow-hidden p-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-alien-green/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-alien-green/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="flex items-center mb-6 relative z-10">
                    <div className="p-4 bg-gradient-to-br from-alien-green/20 to-alien-green/10 rounded-2xl mr-4 border-2 border-alien-green/30 group-hover:border-alien-green/50 transition-all duration-300 group-hover:scale-110">
                      <TrendingUp className="h-8 w-8 text-alien-green" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-alien-gold font-nasalization group-hover:text-alien-gold-light transition-colors mb-2">
                        Decentralized Currencies
                      </CardTitle>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-alien-gold rounded-full mr-2"></span>
                        <span className="text-alien-gold text-sm font-[Exo]">Scalable & Stable</span>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-gray-200 text-lg leading-relaxed font-[Exo] relative z-10 mb-6">
                    · Scalable and Stable with the Volatility for Safe Reserves of Values.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <div className="space-y-4">
                    <div className="flex items-start p-3 bg-alien-space-light/20 rounded-lg border border-alien-green/10 hover:border-alien-green/20 transition-colors">
                      <div className="w-3 h-3 bg-alien-gold rounded-full mt-1 mr-3 flex-shrink-0 animate-pulse"></div>
                      <p className="text-gray-200 font-[Exo] font-medium">Proven layer 2 scalability and layer 1 stable solutions</p>
                    </div>
                    <div className="flex items-start p-3 bg-alien-space-light/20 rounded-lg border border-alien-green/10 hover:border-alien-green/20 transition-colors">
                      <div className="w-3 h-3 bg-alien-gold rounded-full mt-1 mr-3 flex-shrink-0 animate-pulse delay-200"></div>
                      <p className="text-gray-200 font-[Exo] font-medium">Multi-asset value preservation</p>
                    </div>
                    <div className="flex items-start p-3 bg-alien-space-light/20 rounded-lg border border-alien-green/10 hover:border-alien-green/20 transition-colors">
                      <div className="w-3 h-3 bg-alien-gold rounded-full mt-1 mr-3 flex-shrink-0 animate-pulse delay-400"></div>
                      <p className="text-gray-200 font-[Exo] font-medium">Holding Strategic volatility hedging</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Enhanced Wealth Security Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <Card className="bg-gradient-to-r from-alien-space-dark/95 via-alien-space-light/40 to-alien-space-dark/95 backdrop-blur-xl border-2 border-alien-gold/40 hover:border-alien-gold/60 transition-all duration-500 group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-alien-gold/5 via-alien-green/5 to-alien-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-10 text-center relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-alien-gold/20 to-alien-green/20 rounded-full mb-6 border-2 border-alien-gold/30 group-hover:scale-110 transition-transform duration-300">
                  <Lock className="h-8 w-8 text-alien-gold" />
                </div>
                <p className="text-2xl text-gray-100 font-[Exo] leading-relaxed">
                  Allowing individuals to <span className="text-alien-gold font-bold bg-alien-gold/10 px-2 py-1 rounded">secure their wealth</span> while enjoying the benefits of a <span className="text-alien-green font-bold bg-alien-green/10 px-2 py-1 rounded">decentralized economy</span>.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Enhanced Instant Access Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="bg-gradient-to-br from-alien-space-dark/90 to-alien-space-light/30 backdrop-blur-xl border-2 border-alien-gold/30 hover:border-alien-gold/60 transition-all duration-500 group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-alien-gold/5 via-alien-green/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <CardHeader className="p-10 relative z-10">
                <div className="flex items-center justify-center mb-8">
                  <div className="p-6 bg-gradient-to-br from-alien-gold/20 via-alien-green/20 to-purple-500/20 rounded-3xl border-2 border-alien-gold/30 group-hover:border-alien-gold/50 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <Zap className="h-12 w-12 text-alien-gold animate-pulse" />
                  </div>
                </div>
                <CardTitle className="text-3xl md:text-4xl font-bold text-alien-green font-nasalization group-hover:text-alien-green-light transition-colors mb-6 drop-shadow-[0_0_30px_rgba(3,255,25,0.6)]">
                  Instant Digital Access
                </CardTitle>
                <CardDescription className="text-gray-200 text-xl leading-relaxed font-[Exo] max-w-5xl mx-auto">
                  Access with <span className="text-alien-gold font-bold bg-alien-gold/10 px-2 py-1 rounded">Cryptokens</span> and <span className="text-alien-green font-bold bg-alien-green/10 px-2 py-1 rounded">NFTs</span> to Order & Generate All Types of Experiences, Products & Services According to your Demands Instantly...
                </CardDescription>
              </CardHeader>
              <CardContent className="p-10 pt-0 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                  <div className="flex flex-col items-center p-6 bg-alien-space-light/20 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105 group">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-purple-500/10 rounded-full flex items-center justify-center mb-4 border-2 border-purple-500/30 group-hover:scale-110 transition-transform duration-300">
                      <Sparkles className="h-8 w-8 text-purple-400" />
                    </div>
                    <h4 className="text-alien-gold font-bold text-lg mb-3 font-[Exo]">Experiences</h4>
                    <p className="text-gray-200 text-center font-[Exo] leading-relaxed">Unique digital and real-world experiences tailored to you</p>
                  </div>
                  <div className="flex flex-col items-center p-6 bg-alien-space-light/20 rounded-2xl border border-alien-gold/20 hover:border-alien-gold/40 transition-all duration-300 hover:transform hover:scale-105 group">
                    <div className="w-16 h-16 bg-gradient-to-br from-alien-gold/20 to-alien-gold/10 rounded-full flex items-center justify-center mb-4 border-2 border-alien-gold/30 group-hover:scale-110 transition-transform duration-300">
                      <ShoppingCart className="h-8 w-8 text-alien-gold" />
                    </div>
                    <h4 className="text-alien-gold font-bold text-lg mb-3 font-[Exo]">Products</h4>
                    <p className="text-gray-200 text-center font-[Exo] leading-relaxed">Instant access to digital and physical products with seamless delivery</p>
                  </div>
                  <div className="flex flex-col items-center p-6 bg-alien-space-light/20 rounded-2xl border border-alien-green/20 hover:border-alien-green/40 transition-all duration-300 hover:transform hover:scale-105 group">
                    <div className="w-16 h-16 bg-gradient-to-br from-alien-green/20 to-alien-green/10 rounded-full flex items-center justify-center mb-4 border-2 border-alien-green/30 group-hover:scale-110 transition-transform duration-300">
                      <Wand2 className="h-8 w-8 text-alien-green" />
                    </div>
                    <h4 className="text-alien-gold font-bold text-lg mb-3 font-[Exo]">Services</h4>
                    <p className="text-gray-200 text-center font-[Exo] leading-relaxed">On-demand professional services with guaranteed quality</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
export default FinancialFreedomSection;
