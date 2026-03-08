import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const spaces = [
  {
    id: 'academy',
    title: 'Academy',
    description: 'Unlock cosmic knowledge through comprehensive educational resources, courses, and tutorials in blockchain, finance, and sustainability.',
    icon: <img src="/lovable-uploads/AcademyLogo.png" alt="Academy" className="h-10 w-10 object-contain" />,
    link: '/academy',
    partners: 30,
  },
  {
    id: 'clubs',
    title: 'Clubs',
    description: 'Join specialized communities focused on specific interests, technologies, and missions within the AlienFlowSpace ecosystem.',
    icon: <img src="/lovable-uploads/ClubLogo.png" alt="Clubs" className="h-10 w-10 object-contain" />,
    link: '/clubs',
    partners: 18,
  },
  {
    id: 'conetworking',
    title: 'CoNetWorKing',
    description: 'Connect with like-minded individuals, projects, and initiatives across the multiverse to expand your network and opportunities.',
    icon: <img src="/lovable-uploads/CoNetWorKingLogo.png" alt="CoNetWorKing" className="h-10 w-10 object-contain" />,
    link: '/conetworking',
    partners: 80,
  },
];

const ExploreSpacesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden" data-section="explore-spaces">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl mb-4 text-alien-green drop-shadow-[0_0_30px_rgba(3,255,25,0.6)] font-nasalization font-extrabold">
            Explore Spaces
          </h2>
          <p className="max-w-3xl mx-auto font-bold text-alien-gold text-xl">
            Discover specialized environments designed to enhance your journey through the cosmos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {spaces.map((space, index) => (
            <motion.div
              key={space.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Glassmorphism card */}
              <div className="relative p-8 flex flex-col items-center text-center h-full rounded-xl bg-alien-space-dark/60 backdrop-blur-xl border border-alien-gold/20 overflow-hidden transition-all duration-500 hover:border-alien-gold/50 hover:shadow-[0_0_40px_rgba(240,216,130,0.1)]">
                {/* Animated gradient border on hover */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: 'linear-gradient(145deg, rgba(240,216,130,0.1), rgba(34,197,94,0.1))',
                  }}
                />

                {/* Partner badge */}
                <div className="absolute top-4 right-4 bg-alien-green/20 text-alien-green text-xs font-nasalization px-2.5 py-1 rounded-full border border-alien-green/30 backdrop-blur-sm">
                  {space.partners}+ partners
                </div>

                <motion.div
                  className="mb-6 p-4 bg-alien-space-dark rounded-full border border-alien-gold/20 relative z-10"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {space.icon}
                </motion.div>

                <h3 className="text-2xl font-bold mb-4 text-alien-gold font-nasalization relative z-10">
                  {space.title}
                </h3>
                <p className="text-gray-300 mb-8 flex-grow relative z-10">{space.description}</p>
                <Link to={space.link} className="relative z-10">
                  <Button className="bg-gradient-to-r from-alien-green to-alien-green-light text-alien-space-dark font-extrabold font-nasalization rounded-full px-6 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all duration-300">
                    Enter {space.title}
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreSpacesSection;
