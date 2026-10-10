import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Compass, Globe, ScrollText, BookOpen, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import AlienButton from '@/components/alien/AlienButton';
import AlienTag from '@/components/alien/AlienTag';

const scrollTo = (selector: string) => {
  document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
};

const Hero: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const logoY = useTransform(scrollYProgress, [0, 0.15], [0, -80]);
  const logoScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.85]);
  const logoOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.15], [0, -40]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 1]);
  const glowScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.4]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.15], [0.7, 0]);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-12 sm:py-16 overflow-hidden">
      {/* Parallax radial glow — scales and fades as you scroll */}
      <motion.div
        className="absolute inset-0 pointer-events-none bg-glow-radial"
        style={{ scale: glowScale, opacity: glowOpacity }}
      />

      {/* Soft radial glow accents — no hard edges */}
      <motion.div
        className="absolute pointer-events-none"
        style={{ top: '20%', left: '50%', x: '-50%' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.06 }}
        transition={{ delay: 0.5, duration: 3 }}
      >
        <div
          className="w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(240, 216, 130, 0.08) 0%, transparent 70%)',
          }}
        />
      </motion.div>

      <motion.div
        className="container relative z-10 px-4 mx-auto max-w-6xl"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        {/* Logo — the largest image above the fold, so it must not be lazy-loaded */}
        <motion.div
          className="flex justify-center mb-6"
          style={{ y: logoY, scale: logoScale, opacity: logoOpacity }}
        >
          <motion.img
            src="/lovable-uploads/ALogo.png"
            alt="AlienFlowSpace DAO logo"
            width={112}
            height={112}
            loading="eager"
            decoding="async"
            className="h-20 sm:h-24 md:h-28 w-auto logo-glow z-20 mx-auto"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>

        {/* Technical label row */}
        <motion.div
          className="flex justify-center gap-3 mb-6 flex-wrap"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <AlienTag color="gold">Decentralized</AlienTag>
          <AlienTag color="green">Autonomous</AlienTag>
          <AlienTag color="gold">Organization</AlienTag>
        </motion.div>

        {/* Wordmark. The decorative spelling is unreadable to screen readers and search
            engines, so the plain name is exposed and the stylised version hidden. */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mb-6"
        >
          <h1 className="font-nasalization text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight af-heading-underline inline-block">
            <span className="sr-only">AlienFlowSpace DAO</span>
            <span aria-hidden="true">
              <span className="text-alien-green">Δlieπ</span>
              <span className="text-alien-gold">FlΦw</span>
              <span className="text-alien-green"> $pac€</span>
              <span className="text-alien-gold"> DAO</span>
            </span>
          </h1>
        </motion.div>

        {/* The original claim, restored. It used to shout in caps on the display face
            ("Advantages Boosting the BENEFITS..."), which was hard to read; the same
            promise now sits in sentence case on the reading face, with the three key
            words still emphasised so the line keeps its original weight. */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.42 }}
          className="af-prose af-prose-lead text-center text-alien-gold max-w-2xl mx-auto mb-8 px-2"
        >
          Advantages boosting the <strong className="font-semibold text-alien-green">benefits</strong> of
          connecting you and raising your{' '}
          <strong className="font-semibold text-alien-green">quality of life</strong> — with mutual{' '}
          <strong className="font-semibold text-alien-green">profits</strong>.
        </motion.p>

        {/* What this is — plain language, on the reading face, before any jargon */}
        <motion.div
          className="max-w-2xl mx-auto mb-8 px-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <div className="af-prose space-y-4 text-center">
            <p className="af-prose-lead">
              A DAO is a community-owned organisation: the people who take part decide together what
              gets built and funded — no single owner.
            </p>
            <p className="af-prose-dim">
              AlienFlowSpace funds sustainable technology: clean energy, regenerative finance and open
              digital tools. Join in from any country, with no crypto experience needed.
            </p>
          </div>
        </motion.div>

        {/* Proof row — what you can actually do here, in three short facts */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          {['11 ecosystem domains', 'Academy, Clubs & CoNetWorKing', 'Governance open to members'].map(
            (fact) => (
              <span
                key={fact}
                className="af-prose af-prose-dim flex items-center gap-2 text-sm"
              >
                <span className="af-status-dot bg-alien-green" />
                {fact}
              </span>
            )
          )}
        </motion.div>

        {/* CTA hierarchy — the first button answers "what do I do now?" */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <AlienButton
            variant="primary"
            onClick={() => scrollTo('[data-section="get-started"]')}
            className="!px-8 !py-3 !text-sm"
            data-cursor="hover"
          >
            <Compass className="h-4 w-4" /> HOW TO GET STARTED
          </AlienButton>
          <AlienButton
            variant="outline"
            onClick={() => scrollTo('[data-section="ecosystem"]')}
            className="!px-8 !py-3 !text-sm"
            data-cursor="hover"
          >
            <Globe className="h-4 w-4" /> EXPLORE THE ECOSYSTEM
          </AlienButton>
        </motion.div>

        {/* Tertiary text links */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <Link
            to="/about"
            className="inline-flex items-center gap-1.5 text-xs font-nasalization tracking-wider uppercase text-af-text-muted hover:text-alien-gold transition-colors border-b border-transparent hover:border-alien-gold/40 pb-0.5"
          >
            <Info className="h-3.5 w-3.5" /> About the DAO
          </Link>
          <span className="hidden sm:inline text-af-text-muted/30">|</span>
          <Link
            to="/alien-trip"
            className="inline-flex items-center gap-1.5 text-xs font-nasalization tracking-wider uppercase text-af-text-muted hover:text-alien-gold transition-colors border-b border-transparent hover:border-alien-gold/40 pb-0.5"
          >
            <ScrollText className="h-3.5 w-3.5" /> Alientrip Manifesto
          </Link>
          <span className="hidden sm:inline text-af-text-muted/30">|</span>
          <a
            href="https://alienflowspace.gitbook.io/DAO"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-nasalization tracking-wider uppercase text-af-text-muted hover:text-alien-green transition-colors border-b border-transparent hover:border-alien-green/40 pb-0.5"
          >
            <BookOpen className="h-3.5 w-3.5" /> GitBook Docs
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        onClick={() => scrollTo('[data-section="get-started"]')}
        data-cursor="hover"
      >
        <span className="text-xs font-nasalization text-alien-gold/60 tracking-widest uppercase">
          Scroll
        </span>
        <svg width="20" height="12" viewBox="0 0 20 12" className="text-alien-green/50">
          <path
            d="M2 2L10 10L18 2"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>


    </section>
  );
};

export default Hero;
