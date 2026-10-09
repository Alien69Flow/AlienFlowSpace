import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GraduationCap, Users, Vote, ArrowRight } from 'lucide-react';
import AlienTag from '@/components/alien/AlienTag';
import { spotlightMove } from '@/lib/spotlight';

/**
 * Orientation for first-time visitors. The rest of the home page assumes the
 * reader already knows what a DAO is and which space to enter; this section
 * answers "what do I actually do now?" in three concrete steps.
 */

const steps = [
  {
    num: '01',
    icon: <GraduationCap className="h-5 w-5 text-alien-green" />,
    title: 'Learn the basics',
    body: 'The Academy holds short courses on blockchain, finance and sustainability, so you can take part with no previous experience.',
    href: '/academy',
    cta: 'Open the Academy',
  },
  {
    num: '02',
    icon: <Users className="h-5 w-5 text-alien-gold" />,
    title: 'Join a community',
    body: 'Clubs gather members around a single interest or mission. Pick the one that fits you, introduce yourself and start collaborating.',
    href: '/clubs',
    cta: 'Browse the Clubs',
  },
  {
    num: '03',
    icon: <Vote className="h-5 w-5 text-alien-green" />,
    title: 'Take part in decisions',
    body: 'Members discuss proposals in the forums and vote in the weekly assemblies. Governance is open to every member.',
    href: '#participate',
    cta: 'See how governance works',
  },
];

const GetStartedSection = () => {
  return (
    <section
      className="af-hairline relative py-12 md:py-16"
      data-section="get-started"
      id="get-started"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: '-80px' }}
          className="mb-8 md:mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <AlienTag color="green">NEW HERE</AlienTag>
            <AlienTag color="muted">3 STEPS</AlienTag>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-nasalization text-alien-green tracking-tight af-heading-underline inline-block">
            Get started in 3 steps
          </h2>
          <p className="af-prose af-prose-dim max-w-2xl mt-4">
            You do not need to understand crypto to take part. Here is the shortest path in.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-l border-t border-af-border-hairline">
          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: '-80px' }}
              onMouseMove={spotlightMove}
              className="af-spotlight border-r border-b border-af-border-hairline p-6 md:p-8 bg-af-surface/20 hover:bg-af-surface/40 transition-colors duration-200 flex flex-col"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="font-nasalization text-[11px] tracking-[0.2em] text-af-text-muted/60">
                  STEP {step.num}
                </span>
                {step.icon}
              </div>

              <h3 className="text-xl font-nasalization text-alien-gold mb-3">{step.title}</h3>

              <p className="af-prose text-sm flex-grow mb-6">{step.body}</p>

              {step.href.startsWith('#') ? (
                <a
                  href={step.href}
                  className="af-pill af-pill-outline text-alien-gold hover:text-alien-green !text-xs self-start"
                >
                  {step.cta} <ArrowRight className="h-3.5 w-3.5" />
                </a>
              ) : (
                <Link
                  to={step.href}
                  className="af-pill af-pill-outline text-alien-gold hover:text-alien-green !text-xs self-start"
                >
                  {step.cta} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
