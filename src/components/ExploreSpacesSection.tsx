import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const spaces = [{
  id: 'academy',
  title: 'Academy',
  description: 'Unlock cosmic knowledge through comprehensive educational resources, courses, and tutorials in blockchain, finance, and sustainability.',
  icon: <img src="/lovable-uploads/AcademyLogo.png" alt="Academy" className="h-10 w-10 object-contain" />,
  link: '/academy'
}, {
  id: 'clubs',
  title: 'Clubs',
  description: 'Join specialized communities focused on specific interests, technologies, and missions within the AlienFlowSpace ecosystem.',
  icon: <img src="/lovable-uploads/ClubLogo.png" alt="Clubs" className="h-10 w-10 object-contain" />,
  link: '/clubs'
}, {
  id: 'conetworking',
  title: 'CoNetWorKing',
  description: 'Connect with like-minded individuals, projects, and initiatives across the multiverse to expand your network and opportunities.',
  icon: <img src="/lovable-uploads/CoNetWorKingLogo.png" alt="CoNetWorKing" className="h-10 w-10 object-contain" />,
  link: '/conetworking'
}];

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
          <h2 className="text-4xl font-bold mb-4 text-alien-green drop-shadow-[0_0_30px_rgba(3,255,25,0.6)] font-nasalization">Explore Spaces</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
              className="card-border p-8 flex flex-col items-center text-center h-full"
            >
              <div className="mb-6 p-4 bg-alien-space-dark rounded-full">
                {space.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-alien-gold font-nasalization">{space.title}</h3>
              <p className="text-gray-300 mb-8 flex-grow">{space.description}</p>
              <Link to={space.link}>
                <Button className="bg-alien-green hover:bg-alien-green-light text-alien-space-dark">
                  Enter {space.title}
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreSpacesSection;
