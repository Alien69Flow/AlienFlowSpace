import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AlienTag from '@/components/alien/AlienTag';

const spaces = [
  {
    id: 'academy',
    title: 'Academy',
    verb: 'LEARN',
    description: 'Unlock cosmic knowledge through comprehensive educational resources, courses, and tutorials in blockchain, finance, and sustainability.',
    icon: <img src="/lovable-uploads/AcademyLogo.png" alt="Academy" className="h-10 w-10 object-contain" />,
    link: '/academy',
    partners: 30,
  },
  {
    id: 'clubs',
    title: 'Clubs',
    verb: 'BELONG',
    description: 'Join specialized communities focused on specific interests, technologies, and missions within the AlienFlowSpace ecosystem.',
    icon: <img src="/lovable-uploads/ClubLogo.png" alt="Clubs" className="h-10 w-10 object-contain" />,
    link: '/clubs',
    partners: 18,
  },
  {
    id: 'conetworking',
    title: 'CoNetWorKing',
    verb: 'COLLABORATE',
    description: 'Connect with like-minded individuals, projects, and initiatives across the multiverse to expand your network and opportunities.',
    icon: <img src="/lovable-uploads/CoNetWorKingLogo.png" alt="CoNetWorKing" className="h-10 w-10 object-contain" />,
    link: '/conetworking',
    partners: 80,
  },
];

const ExploreSpacesSection = () => {
  return (
    <section
      className="af-hairline relative py-12 md:py-16"
      data-section="explore-spaces"
    >
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <AlienTag color="gold">ECOSYSTEM PORTALS</AlienTag>
            <AlienTag color="muted">3 SPACES</AlienTag>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-nasalization text-alien-green tracking-tight af-heading-underline inline-block">
            Explore Spaces
          </h2>
          <p className="max-w-2xl mt-4 text-sm text-af-text-muted font-nasalization">
            Discover specialized environments designed to enhance your journey through the cosmos
          </p>
        </motion.div>

        {/* Three portal cards — flat, unified system */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-l border-t border-af-border-hairline">
          {spaces.map((space, index) => (
            <motion.div
              key={space.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-r border-b border-af-border-hairline p-6 md:p-8 bg-af-surface/20 hover:bg-af-surface/40 transition-colors duration-200 flex flex-col"
            >
              {/* Top row: logo + partner tag */}
              <div className="flex items-center justify-between mb-5">
                <div className="p-2 border border-af-border">
                  {space.icon}
                </div>
                <AlienTag color="green">{space.partners}+ partners</AlienTag>
              </div>

              {/* Title + verb */}
              <h3 className="text-2xl font-bold text-alien-gold font-nasalization mb-1">
                {space.title}
              </h3>
              <span className="text-xs font-nasalization tracking-[0.2em] uppercase text-alien-green mb-4">
                {space.verb}
              </span>

              {/* Description */}
              <p className="text-sm text-gray-300 leading-relaxed mb-6 flex-grow">
                {space.description}
              </p>

              {/* Enter link */}
              <Link
                to={space.link}
                className="af-pill af-pill-outline text-alien-gold hover:text-alien-green !text-xs self-start"
              >
                Enter {space.title}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreSpacesSection;
