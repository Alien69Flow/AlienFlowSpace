import React from 'react';
import { motion } from 'framer-motion';
import {
  Shield, TrendingUp, Lock, Zap, Sparkles, ShoppingCart, Wand2, ArrowRight
} from 'lucide-react';
import AlienModule from '@/components/alien/AlienModule';
import AlienTag from '@/components/alien/AlienTag';

const progressionSteps = ['DISCOVER', 'UNDERSTAND', 'EXPLORE', 'PARTICIPATE', 'ACCESS'];

const FinancialFreedomSection = () => {
  return (
    <section className="af-hairline relative py-12 md:py-16">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">

          {/* Section header — centered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-10 text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-4 flex-wrap">
              <AlienTag color="gold">ACCESS</AlienTag>
              <AlienTag color="muted">FINANCIAL FREEDOM</AlienTag>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-alien-gold font-nasalization tracking-tight af-heading-underline inline-block">
              ₿£€$
            </h2>
            <p className="text-lg font-nasalization text-alien-green mt-4">
              Bless Financial Freedom for the Free Earth
            </p>
          </motion.div>

          {/* Progression bar: centered */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-1 md:gap-2 mb-12 flex-wrap"
          >
            {progressionSteps.map((step, i) => (
              <React.Fragment key={step}>
                <span className="af-tag !text-[9px] !py-1 !px-2.5">{step}</span>
                {i < progressionSteps.length - 1 && (
                  <span className="text-af-text-muted/30 text-xs">→</span>
                )}
              </React.Fragment>
            ))}
          </motion.div>

          {/* A.BTC Token Highlight — flat module */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <AlienModule hoverColor="gold" className="!p-6 md:!p-8">
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-alien-gold font-nasalization mb-1">
                  A₿tc
                </h3>
                <p className="text-xs text-alien-green mb-4 font-nasalization">
                  (Aurum nostrum non est aurum vulgi)
                </p>
                <p className="text-sm text-gray-300 mb-5 max-w-3xl leading-relaxed">
                  Aurum ₿itcoin cryptoken serves as collateral and derivative of Bitcoin and gold,
                  providing <span className="text-alien-green font-semibold">scalability</span>,
                  <span className="text-alien-gold font-semibold"> stability</span> and
                  <span className="text-alien-green font-semibold"> growth potential (Φπ)</span>...
                </p>
                <div className="inline-flex items-center gap-3 border border-alien-green/30 px-4 py-2 rounded-full">
                  <a href="https://bitcoin.org" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg" alt="Bitcoin" className="h-5 w-5" />
                  </a>
                  <span className="text-alien-green font-semibold text-sm font-nasalization">₿itcoin backed</span>
                  <span className="text-gray-400">·</span>
                  <span className="text-alien-gold font-semibold text-sm font-nasalization">Interoperable</span>
                </div>
              </div>
            </AlienModule>
          </motion.div>

          {/* Main Features — two flat modules side by side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 mb-10 border-l border-t border-af-border-hairline">
            {/* Impartial Money */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="border-r border-b border-af-border-hairline p-6 md:p-8 bg-af-surface/20 hover:bg-af-surface/40 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-6 w-6 text-alien-gold" />
                <div>
                  <h3 className="text-xl font-bold text-alien-gold font-nasalization">Impartial Money</h3>
                  <span className="text-xs text-alien-green font-nasalization">Fair & Neutral</span>
                </div>
              </div>
              <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                Access rewards for saving, without giving up control.
              </p>
              <div className="space-y-2">
                {[
                  'Self-custodial solutions with full ownership',
                  'Transparent reward mechanisms',
                  'Zero intermediary dependencies'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 border-b border-af-border-hairline pb-2">
                    <span className="af-status-dot bg-alien-green mt-1.5 flex-shrink-0" />
                    <p className="text-sm text-gray-200">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Decentralized Currencies */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="border-r border-b border-af-border-hairline p-6 md:p-8 bg-af-surface/20 hover:bg-af-surface/40 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="h-6 w-6 text-alien-green" />
                <div>
                  <h3 className="text-xl font-bold text-alien-gold font-nasalization">Decentralized Currencies</h3>
                  <span className="text-xs text-alien-gold font-nasalization">Scalable & Stable</span>
                </div>
              </div>
              <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                Scalable and Stable with the Volatility for Safe Reserves of Values.
              </p>
              <div className="space-y-2">
                {[
                  'Proven layer 2 scalability and layer 1 stable solutions',
                  'Multi-asset value preservation',
                  'Holding Strategic volatility hedging'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 border-b border-af-border-hairline pb-2">
                    <span className="af-status-dot bg-alien-gold mt-1.5 flex-shrink-0" />
                    <p className="text-sm text-gray-200">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Wealth Security Statement — full width flat module */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <div className="border border-af-border p-6 md:p-8 bg-af-surface/30">
              <div className="flex items-start gap-4">
                <Lock className="h-6 w-6 text-alien-gold flex-shrink-0 mt-1" />
                <p className="text-base md:text-lg text-gray-100 leading-relaxed">
                  Allowing to <span className="text-alien-gold font-bold">secure their wealth</span> while enjoying the benefits of a <span className="text-alien-green font-bold">circular decentralized economy</span>.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Instant Access: Experiences / Products / Services — three flat routes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="border border-af-border bg-af-surface/20 p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="h-6 w-6 text-alien-gold" />
                <h3 className="text-xl md:text-2xl font-bold text-alien-green font-nasalization">
                  Instant Digital Access
                </h3>
              </div>
              <p className="text-sm text-gray-300 mb-6 max-w-3xl leading-relaxed">
                Access with <span className="text-alien-gold font-bold">Cryptokens</span> and <span className="text-alien-green font-bold">NFTs</span> to Order & Generate All Types of Experiences, Products & Services According to your Demands Instantly...
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-l border-t border-af-border-hairline">
                {/* Experiences */}
                <div className="border-r border-b border-af-border-hairline p-5 hover:bg-alien-gold/5 transition-colors group">
                  <Sparkles className="h-7 w-7 text-alien-gold mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="text-alien-gold font-bold text-base mb-2 font-nasalization uppercase tracking-wider">Experiences</h4>
                  <p className="text-sm text-gray-300 leading-relaxed">Unique digital and real-world experiences tailored to you</p>
                </div>
                {/* Products */}
                <div className="border-r border-b border-af-border-hairline p-5 hover:bg-alien-green/5 transition-colors group">
                  <ShoppingCart className="h-7 w-7 text-alien-green mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="text-alien-gold font-bold text-base mb-2 font-nasalization uppercase tracking-wider">Products</h4>
                  <p className="text-sm text-gray-300 leading-relaxed">Instant access to digital and physical products with seamless delivery</p>
                </div>
                {/* Services */}
                <div className="border-r border-b border-af-border-hairline p-5 hover:bg-alien-green/5 transition-colors group">
                  <Wand2 className="h-7 w-7 text-alien-green mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="text-alien-gold font-bold text-base mb-2 font-nasalization uppercase tracking-wider">Services</h4>
                  <p className="text-sm text-gray-300 leading-relaxed">On-demand professional services with guaranteed quality</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FinancialFreedomSection;
