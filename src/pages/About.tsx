import React, { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Zap, Globe, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedText from '@/components/AnimatedText';
import LoadingScreen from '@/components/LoadingScreen';
import AlienTag from '@/components/alien/AlienTag';

const NFTGallery = lazy(() => import('@/components/NFTGallery'));

const About: React.FC = () => {
  const webTimeline = [
    { label: 'Web 3', subtitle: 'Blockchain', color: 'text-alien-gold', description: 'The foundation of true digital ownership and trustless transactions. Blockchain enables transparent, immutable records and smart contracts that execute automatically.' },
    { label: 'Web 4', subtitle: 'A.I. Neural Networks', color: 'text-alien-green', description: 'Intelligent, adaptive systems that learn and evolve. Advanced neural networks power predictive analytics, automated decision-making, and personalized experiences.' },
    { label: 'Web 5', subtitle: 'Quantum Computing', color: 'text-alien-gold', description: 'Harnessing quantum mechanics for ultra-secure communications. Quantum-resistant cryptography future-proofs the entire ecosystem with exponential computing power.' },
  ];

  const pillars = [
    { icon: <Shield className="h-6 w-6 text-alien-gold" />, title: '1st Pillar', text: 'We are committed to providing personalized solutions that address current challenges and needs.' },
    { icon: <Zap className="h-6 w-6 text-alien-green" />, title: '2nd Pillar', text: 'Greater security by being able to trust the management of data and transactions thanks to the use of cryptography, blockchain, and quantum computing.' },
    { icon: <Globe className="h-6 w-6 text-alien-gold" />, title: '3rd Pillar', text: 'Improvement in decision making thanks to advanced data analysis and the application of artificial intelligence, raising awareness about gestal consciousness, generating synergies, and more.' },
    { icon: <Leaf className="h-6 w-6 text-alien-green" />, title: '4th Pillar', text: 'Optimization of WorkFlow (processes and work flows) promoting energy efficiency and environmental sustainability, in addition to adding value and reducing costs.' },
  ];

  const benefits = [
    { title: 'Decentralization', text: 'Not controlled by a single entity, making it more resistant to censorship and manipulation.' },
    { title: 'Flexibility', text: 'Exchange cryptos & NFTs for other assets, providing more options for asset management.' },
    { title: 'Liquidity', text: 'Great liquidity for quick and easy conversion of cryptocurrencies and NFTs to other assets.' },
    { title: 'Security', text: 'Protected by blockchain technology, quantum computing and AI against fraud and hacking.' },
    { title: 'Transparency', text: 'Completely transparent with verifiable transactions and operations on blockchain networks.' },
  ];

  return (
    <div className="relative flex flex-col flex-1 min-h-screen pb-16">
      <main className="relative z-10 flex-grow container mx-auto px-4 pt-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero */}
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center justify-center w-20 h-20 border border-alien-gold/40 mb-6">
              <img src="/lovable-uploads/ALogo.png" alt="About Logo" className="h-12 w-12 object-contain" />
            </div>
            <div className="flex items-center justify-center gap-3 mb-4 flex-wrap">
              <AlienTag color="green">ABOUT US</AlienTag>
              <AlienTag color="muted">INNOVATIVE SOLUTIONS</AlienTag>
            </div>
            <AnimatedText
              className="text-4xl md:text-5xl font-bold mb-6 font-nasalization text-alien-green af-heading-underline inline-block"
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            >
              About Us
            </AnimatedText>
            <div className="border border-af-border bg-af-surface/20 p-6 md:p-8 max-w-4xl mx-auto">
              <h2 className="md:text-2xl text-alien-green mb-4 max-w-4xl mx-auto leading-relaxed text-lg font-nasalization">
                We offer INNOVATIVE SOLUTIONS with cutting-edge technologies
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Improving Energy Efficiency and Environmental Sustainability, managing to professionally improve work flows and processes, this is WorkFlow.
              </p>
            </div>
          </motion.div>

          {/* Web Timeline */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <AlienTag color="gold">EVOLUTION</AlienTag>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-l border-t border-af-border-hairline">
              {webTimeline.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="border-r border-b border-af-border-hairline p-5 md:p-6 bg-af-surface/20 hover:bg-af-surface/40 transition-colors"
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }}
                >
                  <span className="font-nasalization text-[10px] tracking-[0.2em] text-af-text-muted/50 mb-2 block">{`0${i + 1}`}</span>
                  <h3 className={`text-2xl font-semibold mb-1 font-nasalization ${item.color}`}>{item.label}</h3>
                  <p className="text-sm text-alien-green/70 font-nasalization mb-3">{item.subtitle}</p>
                  <p className="text-sm text-gray-300 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
            <motion.p className="text-lg leading-relaxed mt-6 text-gray-200 max-w-4xl mx-auto" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }}>
              AlienFlowSpace DAO is a revolutionary space that empowers users to seamlessly access, acquire, redeem, buy, sell, and exchange cryptocurrencies and NFTs. We leverage cutting-edge Web 5 quantum computing, Web 4 AI neural networks, and Web 3 blockchain technology to create an unparalleled ecosystem of innovation and sustainability.
            </motion.p>
          </motion.div>

          {/* Four Pillars */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-l border-t border-af-border-hairline mb-12" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            {pillars.map((p, i) => (
              <motion.div
                key={i}
                className="border-r border-b border-af-border-hairline p-6 bg-af-surface/20 hover:bg-af-surface/40 transition-colors"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <span className="font-nasalization text-[10px] tracking-[0.2em] text-af-text-muted/50 mb-3 block">{`0${i + 1}`}</span>
                <div className="flex items-center gap-3 mb-3">
                  {p.icon}
                  <h3 className="text-xl font-semibold font-nasalization text-alien-green">{p.title}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm">{p.text}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Mission & Values */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-l border-t border-af-border-hairline mb-12">
            <div className="border-r border-b border-af-border-hairline p-6 md:p-8 bg-af-surface/20">
              <h2 className="text-2xl font-semibold text-alien-green mb-4 font-nasalization af-heading-underline inline-block">Our Mission</h2>
              <p className="text-gray-200 leading-relaxed">
                We are dedicated to creating exceptional experiences and powerful synergies that generate greater value for the planet and all its beings. By implementing energy-efficient and environmentally sustainable solutions, we lead the charge toward a regenerative future. Through continuous improvement and unwavering commitment, we overcome challenges to deliver our best work every day. Our mission extends beyond technology—we're building a movement that harmonizes innovation with ecological responsibility, empowering communities worldwide to thrive in balance with nature.
              </p>
            </div>
            <div className="border-r border-b border-af-border-hairline p-6 md:p-8 bg-af-surface/20">
              <h2 className="text-2xl font-semibold font-nasalization text-alien-green af-heading-underline inline-block">Our Values and Vision</h2>
              <p className="text-gray-200 leading-relaxed mt-4 mb-4">
                Our vision is to empower business professionals and individuals to adapt and excel in an ever-evolving digital and hybrid world. We provide innovative solutions that optimize energy efficiency, promote environmental sustainability, and bridge the gap between traditional systems and decentralized technologies. By fostering technological literacy and accessibility, we enable everyone to participate in the next generation of the internet.
              </p>
              <p className="text-gray-200 leading-relaxed">
                Our core objective is to democratize knowledge and wisdom across diverse fields—from quantum computing and AI to blockchain and sustainable practices. We believe in holistic growth that harmonizes technological advancement with cosmic consciousness, creating a future where innovation serves the greater good of all beings and the planet we call home.
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-l border-t border-af-border-hairline mb-12">
            {[
              { to: '/academy', logo: '/lovable-uploads/AcademyLogo.png', label: 'Academy' },
              { to: '/clubs', logo: '/lovable-uploads/ClubLogo.png', label: 'Clubs' },
              { to: '/conetworking', logo: '/lovable-uploads/CoNetWorKingLogo.png', label: 'CoNetWorKing' },
            ].map((item, i) => (
              <Link key={i} to={item.to} className="border-r border-b border-af-border-hairline p-6 bg-af-surface/20 hover:bg-af-surface/40 transition-colors flex flex-col items-center justify-center text-center group">
                <img src={item.logo} alt={item.label} className="h-12 w-12 mb-3 object-contain" />
                <span className="font-semibold text-lg font-nasalization text-alien-gold group-hover:text-alien-green transition-colors">{item.label}</span>
              </Link>
            ))}
          </div>

          {/* DAO Info & Benefits */}
          <div className="border border-af-border bg-af-surface/20 p-6 md:p-8 mb-8">
            <p className="text-lg leading-relaxed mb-6 text-center text-gray-200">
              Acquire Cryptos, NFTs, tokens to associate and participate in Advantages, Benefits, Profits in the DAO.
            </p>
            <p className="text-lg leading-relaxed mb-8 text-center text-gray-200">
              We also collaborate with big brands & international platforms from affiliate programs, referral marketing, on demand suppliers... Join a growing ecosystem of affiliations, applications, associations and decentralized platforms that support each other by collaborating and promoting energy efficiency & environmental sustainability.
            </p>

            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <AlienTag color="green">BENEFITS</AlienTag>
              </div>
              <h3 className="text-2xl font-semibold text-alien-green mb-4 font-nasalization af-heading-underline inline-block">Association Benefits</h3>
              <p className="text-lg leading-relaxed max-w-4xl mx-auto text-gray-200 mt-4">
                We have an active, committed and dedicated community of farmers, artists, scientists, creators, developers, entrepreneurs, investment companies, researchers, businesses and more.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-af-border-hairline mb-8">
              {benefits.map((b, i) => (
                <div key={i} className="border-r border-b border-af-border-hairline p-5 bg-af-surface/10 hover:bg-af-surface/30 transition-colors">
                  <span className="font-nasalization text-[10px] tracking-[0.2em] text-af-text-muted/50 mb-2 block">{`0${i + 1}`}</span>
                  <h4 className="font-semibold mb-2 text-lg font-nasalization text-alien-gold">{b.title}</h4>
                  <p className="text-gray-300 leading-relaxed text-sm">{b.text}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <AlienTag color="gold">DIGITAL COLLECTIBLES</AlienTag>
              </div>
              <h3 className="text-2xl font-semibold text-alien-gold mb-6 font-nasalization">Explore Our Digital Collectibles</h3>
              <Suspense fallback={<LoadingScreen />}>
                <NFTGallery />
              </Suspense>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
