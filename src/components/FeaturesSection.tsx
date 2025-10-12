import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Shield, Users, Box, BarChart4 } from 'lucide-react';
const features = [{
  icon: <Box className="h-10 w-10" />,
  title: "Cross-Chain Integration",
  description: "Seamlessly operate across multiple blockchains with our advanced bridging technology."
}, {
  icon: <Globe className="h-10 w-10" />,
  title: "Interplanetary Governance",
  description: "Participate in decentralized decision-making across planetary boundaries with our advanced DAO structure."
}, {
  icon: <Shield className="h-10 w-10" />,
  title: "Quantum Security",
  description: "Next-generation quantum-resistant cryptography ensures the safety of all transactions and governance actions."
}, {
  icon: <Users className="h-10 w-10" />,
  title: "Multi-Species Collaboration",
  description: "Our platform is designed for collaboration between diverse entities, ensuring inclusive participation."
}, {
  icon: <BarChart4 className="h-10 w-10" />,
  title: "Transparent Analytics",
  description: "Access real-time data visualization and analytics on all ecosystem activity and performance."
}];
const FeaturesSection = () => {
  return <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 py-0 my-0">
        <motion.div initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-glow font-nasalization text-alien-green">Advanced Features</h2>
          <p className="max-w-3xl mx-auto font-bold text-[alien-gold-dark] text-alien-gold">ΔlieπFlΦw $pac€ offers cutting-edge technologies to support our interstellar ecosystem</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} viewport={{
          once: true,
          margin: "-50px"
        }} className="card-border p-6 relative overflow-hidden group">
              <div className="mb-6 p-4 rounded-full bg-gradient-to-br from-alien-gold-dark/20 to-alien-green-dark/20 w-fit">
                <div className="text-alien-gold group-hover:text-alien-green transition-colors duration-300">
                  {feature.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-alien-gold font-nasalization">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
              
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-alien-gold to-alien-green scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default FeaturesSection;