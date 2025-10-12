import React from 'react';
import { motion } from 'framer-motion';
import { Dna, Coins, Wifi, Beaker, Database, Shield, Leaf, Building, Share2, Landmark, ArrowRight } from 'lucide-react';
const ecosystems = [{
  id: 'biofi',
  title: 'BioFi',
  description: 'Decentralized biology financing and research initiatives.',
  icon: <Dna className="h-8 w-8 text-alien-green" />
}, {
  id: 'defi',
  title: 'DeFi',
  description: 'Decentralized finance protocols and applications.',
  icon: <Coins className="h-8 w-8 text-alien-gold" />
}, {
  id: 'depin',
  title: 'DePin',
  description: 'Decentralized physical infrastructure networks.',
  icon: <Wifi className="h-8 w-8 text-alien-green" />
}, {
  id: 'desci',
  title: 'DeSci',
  description: 'Decentralized science research and funding.',
  icon: <Beaker className="h-8 w-8 text-alien-gold" />
}, {
  id: 'ipfs',
  title: 'IPFS',
  description: 'InterPlanetary File System for decentralized storage.',
  icon: <Database className="h-8 w-8 text-alien-green" />
}, {
  id: 'qfs',
  title: 'QFS',
  description: 'Quantum Financial System integration.',
  icon: <Shield className="h-8 w-8 text-alien-gold" />
}, {
  id: 'refi',
  title: 'ReFi',
  description: 'Regenerative finance for environmental impact.',
  icon: <Leaf className="h-8 w-8 text-alien-green" />
}, {
  id: 'rwa',
  title: 'RWA',
  description: 'Real-World Assets tokenization and management.',
  icon: <Building className="h-8 w-8 text-alien-gold" />
}, {
  id: 'socialfi',
  title: 'SocialFi',
  description: 'Social finance for community-driven initiatives.',
  icon: <Share2 className="h-8 w-8 text-alien-green" />
}, {
  id: 'tradfi',
  title: 'TradFi',
  description: 'Traditional finance integration and bridging.',
  icon: <Landmark className="h-8 w-8 text-alien-gold" />
}];
const EcosystemCard = ({
  ecosystem,
  index
}: {
  ecosystem: typeof ecosystems[0];
  index: number;
}) => {
  return <motion.div initial={{
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
    margin: "-100px"
  }} className="card-border p-6 h-full">
      <div className="flex flex-col h-full">
        <div className="mb-4 p-3 bg-alien-space-dark rounded-full w-fit">
          {ecosystem.icon}
        </div>
        <h3 className="text-xl font-semibold mb-2 text-alien-gold font-nasalization">{ecosystem.title}</h3>
        <p className="text-gray-300 flex-grow">{ecosystem.description}</p>
        <div className="mt-4">
          <a href={`#${ecosystem.id}`} className="text-alien-green hover:text-alien-green-light text-sm flex items-center">
            Explore {ecosystem.title} <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.div>;
};
const EcosystemSection = () => {
  return <section id="ecosystem" className="relative overflow-hidden cosmic-grid py-[30px] my-[10px]">
      <div className="container mx-auto px-4">
        <motion.div initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true,
        margin: "-100px"
      }} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-glow font-nasalization text-alien-green">DAO Ecosystem</h2>
          <p className="max-w-3xl mx-auto font-bold text-alien-gold text-[alien-gold-dark]">ΔlieπFlΦw $pac€ bridges diverse decentralized domains into a coherent, interoperable ecosystem.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {ecosystems.map((ecosystem, index) => <EcosystemCard key={ecosystem.id} ecosystem={ecosystem} index={index} />)}
        </div>
      </div>
    </section>;
};
export default EcosystemSection;