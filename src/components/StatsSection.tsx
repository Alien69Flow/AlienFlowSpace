import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Globe, Vote } from 'lucide-react';
import AlienTag from '@/components/alien/AlienTag';

const AnimatedCounter = ({ value, suffix = '', prefix = '' }: { value: number; suffix?: string; prefix?: string }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const start = Date.now();
          const step = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplayValue(Math.floor(eased * value));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{displayValue.toLocaleString()}{suffix}
    </span>
  );
};

const daoStats = [
  { icon: Users, value: 314159, label: 'DAO Members', suffix: '+', color: 'text-alien-green', dotColor: 'bg-alien-green' },
  { icon: Globe, value: 195, label: 'Countries', suffix: '', color: 'text-alien-gold', dotColor: 'bg-alien-gold' },
  { icon: Vote, value: 127, label: 'Proposals Passed', suffix: '', color: 'text-alien-gold', dotColor: 'bg-alien-gold' },
];

const StatsSection = () => {
  return (
    <section className="af-hairline relative py-12 md:py-16">
      <div className="container mx-auto px-4">

        {/* Unified Financial/Asset Block — 420 ETH + 8 BTC */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <AlienTag color="gold">TREASURY RESERVE</AlienTag>
            <AlienTag color="muted">ON-CHAIN</AlienTag>
          </div>
          <div className="border border-af-border bg-af-surface/30 p-6 md:p-8">
            <div className="grid grid-cols-2 gap-0 border-l border-t border-af-border-hairline">
              <div className="border-r border-b border-af-border-hairline p-5 md:p-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="af-status-dot bg-alien-green" />
                  <span className="font-nasalization text-[10px] tracking-[0.2em] uppercase text-af-text-muted">Ethereum</span>
                </div>
                <div className="text-3xl md:text-4xl font-bold font-nasalization text-alien-green mb-1">
                  420 <span className="text-lg">ETH</span>
                </div>
              </div>
              <div className="border-r border-b border-af-border-hairline p-5 md:p-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="af-status-dot bg-alien-gold" />
                  <span className="font-nasalization text-[10px] tracking-[0.2em] uppercase text-af-text-muted">Bitcoin</span>
                </div>
                <div className="text-3xl md:text-4xl font-bold font-nasalization text-alien-gold mb-1">
                  8 <span className="text-lg">BTC</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* DAO Stats — flat modules */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border-l border-t border-af-border-hairline">
          {daoStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-r border-b border-af-border-hairline p-5 md:p-6 bg-af-surface/20 hover:bg-af-surface/40 transition-colors"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className={`af-status-dot ${stat.dotColor}`} />
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </div>
              <div className={`text-2xl md:text-3xl font-bold font-nasalization ${stat.color} mb-1`}>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-xs font-nasalization tracking-wider uppercase text-af-text-muted">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
