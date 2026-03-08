import React from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Users, Globe, TrendingUp, Vote } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

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

const stats = [
  {
    icon: Users,
    value: 314159,
    label: 'DAO Members',
    suffix: '+',
    color: 'text-alien-green',
    glowColor: 'rgba(34, 197, 94, 0.3)',
  },
  {
    icon: Globe,
    value: 195,
    label: 'Countries',
    suffix: '',
    color: 'text-alien-gold',
    glowColor: 'rgba(240, 216, 130, 0.3)',
  },
  {
    icon: TrendingUp,
    value: 42,
    label: 'TVL (ETH)',
    suffix: '',
    prefix: 'Ξ ',
    color: 'text-alien-green',
    glowColor: 'rgba(34, 197, 94, 0.3)',
  },
  {
    icon: Vote,
    value: 127,
    label: 'Proposals Passed',
    suffix: '',
    color: 'text-alien-gold',
    glowColor: 'rgba(240, 216, 130, 0.3)',
  },
];

const StatsSection = () => {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-border p-6 text-center group hover:scale-[1.03] transition-transform duration-300"
            >
              <div
                className="mx-auto mb-3 w-12 h-12 rounded-full flex items-center justify-center bg-alien-space-dark/80 border border-alien-gold/20"
                style={{ boxShadow: `0 0 20px ${stat.glowColor}` }}
              >
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
              <div className={`text-2xl md:text-3xl font-bold font-nasalization ${stat.color} mb-1`}>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix || ''} />
              </div>
              <p className="text-sm text-muted-foreground font-exo">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
