import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { GraduationCap, Users, Trophy, Shield, Zap, Globe, Leaf } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";
const About: React.FC = () => {
  return <div className="relative flex flex-col flex-1 min-h-screen">

      {/* Main content */}
      <main className="relative z-10 flex-grow container mx-auto px-4 pt-8 pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Hero section with improved styling */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-flex items-center justify-center w-20 h-20 bg-alien-gold/20 rounded-full mb-6 border-2 border-alien-gold/40 backdrop-blur-md"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <img src="/lovable-uploads/ALogo.png" alt="About Official Logo" className="h-12 w-12 object-contain" />
            </motion.div>
            <AnimatedText
              className="text-4xl md:text-5xl font-bold mb-6 font-nasalization text-glow leading-tight text-alien-green"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              About Us
            </AnimatedText>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="bg-alien-space-dark/80 backdrop-blur-lg border-alien-gold/30 shadow-2xl rounded-3xl hover:shadow-alien-gold/30 transition-all duration-500">
                <CardHeader className="pb-4">
                  <CardTitle className="font-bold mb-6 font-nasalization text-glow leading-tight text-alien-green md:text-5xl text-3xl">
                    We offer INNOVATIVE SOLUTIONS with cutting-edge technologies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <h2 className="md:text-2xl text-alien-green mb-8 font-[Exo] max-w-4xl mx-auto leading-relaxed text-lg">
                    Improving Energy Efficiency and Environmental Sustainability, managing to professionally improve work flows and processes, this is WorkFlow.
                  </h2>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <div className="space-y-12 text-gray-200 font-[Exo]">
            {/* Web technologies section with enhanced design */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-alien-space-dark/80 backdrop-blur-lg border-alien-gold/30 shadow-2xl hover:border-alien-gold/50 transition-all duration-500">
                <CardContent className="p-8">
                <div className="space-y-8">
                  <div className="text-center">
                    <h3 className="text-3xl font-semibold mb-2 font-nasalization text-glow text-alien-green">
                      Web 5 (Quantum Computing)
                    </h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-alien-gold to-alien-green mx-auto mb-4"></div>
                    <p className="text-base text-gray-300 leading-relaxed mb-6 max-w-3xl mx-auto">
                      Harnessing quantum mechanics for ultra-secure communications and exponentially faster computations. Web 5 represents the pinnacle of decentralized identity and data sovereignty, powered by quantum-resistant cryptography that future-proofs the entire ecosystem.
                    </p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-3xl font-semibold text-alien-green mb-2 font-nasalization">
                      Web 4 (A.I. Neural Networks)
                    </h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-alien-green to-alien-gold mx-auto mb-4"></div>
                    <p className="text-base text-gray-300 leading-relaxed mb-6 max-w-3xl mx-auto">
                      Intelligent, adaptive systems that learn and evolve with user behavior. Advanced neural networks power predictive analytics, automated decision-making, and personalized experiences that anticipate needs before they arise. AI agents work seamlessly across the ecosystem.
                    </p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-3xl font-semibold text-alien-gold mb-4 font-nasalization">
                      Web 3 (Blockchain)
                    </h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-alien-gold to-alien-green mx-auto mb-6"></div>
                    <p className="text-base text-gray-300 leading-relaxed mb-6 max-w-3xl mx-auto">
                      The foundation of true digital ownership and trustless transactions. Blockchain technology enables transparent, immutable records and smart contracts that execute automatically. Experience decentralized governance, NFT ownership, and peer-to-peer value exchange without intermediaries.
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed">
                    AlienFlowSpace DAO (Decentralized Autonomous Organization) is a revolutionary space that empowers users to seamlessly access, acquire, redeem, buy, sell, and exchange cryptocurrencies and NFTs in a secure, transparent environment. We leverage cutting-edge Web 5 quantum computing, Web 4 AI neural networks, and Web 3 blockchain technology to create an unparalleled ecosystem of innovation and sustainability.
                  </p>
                </div>
              </CardContent>
            </Card>
            </motion.div>

            {/* Four pillars section with improved grid and cards */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, staggerChildren: 0.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-alien-space-dark/80 backdrop-blur-lg border-alien-gold/30 shadow-xl hover:border-alien-gold/50 transition-all duration-300 h-full">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-2xl font-semibold font-nasalization text-glow flex items-center gap-3 text-alien-green">
                      <Shield className="h-8 w-8" />
                      1st Pillar
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="leading-relaxed">
                      We are committed to providing personalized solutions that address current challenges and needs.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, rotateY: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-alien-space-dark/80 backdrop-blur-lg border-alien-green/30 shadow-xl hover:border-alien-green/50 transition-all duration-300 h-full">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-2xl font-semibold text-alien-green font-nasalization flex items-center gap-3">
                      <Zap className="h-8 w-8" />
                      2nd Pillar
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="leading-relaxed">
                      Greater security by being able to trust the management of data and transactions thanks to the use of cryptography, blockchain, and quantum computing.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-alien-space-dark/80 backdrop-blur-lg border-alien-gold/30 shadow-xl hover:border-alien-gold/50 transition-all duration-300 h-full">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-2xl font-semibold font-nasalization text-glow flex items-center gap-3 text-alien-green">
                      <Globe className="h-8 w-8" />
                      3rd Pillar
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="leading-relaxed">
                      Improvement in decision making thanks to advanced data analysis and the application of artificial intelligence, raising awareness about gestal consciousness, generating synergies, and more.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, rotateY: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-alien-space-dark/80 backdrop-blur-lg border-alien-green/30 shadow-xl hover:border-alien-green/50 transition-all duration-300 h-full">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-2xl font-semibold text-alien-green font-nasalization flex items-center gap-3">
                      <Leaf className="h-8 w-8" />
                      4th Pillar
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="leading-relaxed">
                      Optimization of WorkFlow (processes and work flows) promoting energy efficiency and environmental sustainability, in addition to adding value and reducing costs.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Mission and Values section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-alien-space-dark/80 backdrop-blur-lg border-alien-green/30 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-3xl font-semibold text-alien-green mb-4 font-nasalization text-center">
                    Our Mission
                  </CardTitle>
                  <div className="w-32 h-1 bg-gradient-to-r from-alien-green to-alien-gold mx-auto mb-4"></div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg leading-relaxed">
                    We are dedicated to creating exceptional experiences and powerful synergies that generate greater value for the planet and all its beings. By implementing energy-efficient and environmentally sustainable solutions, we lead the charge toward a regenerative future. Through continuous improvement and unwavering commitment, we overcome challenges to deliver our best work every day. Our mission extends beyond technology—we're building a movement that harmonizes innovation with ecological responsibility, empowering communities worldwide to thrive in balance with nature.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-alien-space-dark/80 backdrop-blur-lg border-alien-gold/30 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-3xl font-semibold font-nasalization text-glow text-center text-alien-green">
                    Our Values and Vision
                  </CardTitle>
                  <div className="w-32 h-1 bg-gradient-to-r from-alien-gold to-alien-green mx-auto mb-4"></div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg leading-relaxed mb-4">
                    Our vision is to empower business professionals and individuals to adapt and excel in an ever-evolving digital and hybrid world. We provide innovative solutions that optimize energy efficiency, promote environmental sustainability, and bridge the gap between traditional systems and decentralized technologies. By fostering technological literacy and accessibility, we enable everyone to participate in the next generation of the internet.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Our core objective is to democratize knowledge and wisdom across diverse fields—from quantum computing and AI to blockchain and sustainable practices. We believe in holistic growth that harmonizes technological advancement with cosmic consciousness, creating a future where innovation serves the greater good of all beings and the planet we call home.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-wrap justify-center gap-8 my-12">
              <Link to="/academy">
                <Button className="bg-gradient-to-br from-alien-gold to-alien-gold-light hover:from-alien-gold-light hover:to-alien-gold text-alien-space-dark p-8 rounded-2xl text-center w-56 h-32 flex flex-col items-center justify-center shadow-2xl hover:shadow-alien-gold/30 transition-all duration-300 hover:transform hover:scale-110">
                  <img src="/lovable-uploads/AcademyLogo.png" alt="Academy Logo" className="h-12 w-12 mb-2 object-contain" />
                  <span className="font-semibold text-lg font-nasalization">Academy</span>
                </Button>
              </Link>
              <Link to="/clubs">
                <Button className="bg-gradient-to-br from-alien-green to-alien-green-light hover:from-alien-green-light hover:to-alien-green text-alien-space-dark p-8 rounded-2xl text-center w-56 h-32 flex flex-col items-center justify-center shadow-2xl hover:shadow-alien-green/30 transition-all duration-300 hover:transform hover:scale-110">
                  <img src="/lovable-uploads/ClubLogo.png" alt="Clubs Logo" className="h-12 w-12 mb-2 object-contain" />
                  <span className="font-semibold text-lg font-nasalization">Clubs</span>
                </Button>
              </Link>
              <Link to="/conetworking">
                <Button className="bg-gradient-to-br from-alien-gold to-alien-gold-light hover:from-alien-gold-light hover:to-alien-gold text-alien-space-dark p-8 rounded-2xl text-center w-56 h-32 flex flex-col items-center justify-center shadow-2xl hover:shadow-alien-gold/30 transition-all duration-300 hover:transform hover:scale-110">
                  <img src="/lovable-uploads/CoNetWorKingLogo.png" alt="CoNetWorKing Logo" className="h-12 w-12 mb-2 object-contain" />
                  <span className="font-semibold text-lg font-nasalization">CoNetWorKing</span>
                </Button>
              </Link>
            </div>

            {/* DAO Information section */}
            <Card className="bg-alien-space-dark/80 backdrop-blur-lg border-alien-gold/30 shadow-2xl">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed mb-8 text-center">
                  Acquire Cryptos, NFTs, tokens to associate and participate in Advantages, Benefits, Profits in the DAO.
                </p>
                <p className="text-lg leading-relaxed mb-8 text-center">
                  We also collaborate with big brands & international platforms from affiliate programs, referral marketing, on demand suppliers… Join a growing ecosystem of affiliations, applications, associations and decentralized platforms that support each other by collaborating and promoting energy efficiency & environmental sustainability.
                </p>
                
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-semibold text-alien-green mb-4 font-nasalization">
                    Association Benefits
                  </h3>
                  <div className="w-32 h-1 bg-gradient-to-r from-alien-green to-alien-gold mx-auto mb-6"></div>
                  <p className="text-lg leading-relaxed max-w-4xl mx-auto mb-8">
                    We have an active, committed and dedicated community of farmers, artists, scientists, creators, developers, entrepreneurs, investment companies, researchers, businesses and more.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  <div className="bg-alien-space-dark/90 p-6 rounded-xl backdrop-blur-md border border-alien-gold/20 hover:border-alien-gold/40 transition-all duration-300">
                    <h4 className="font-semibold mb-3 text-xl font-nasalization text-glow text-alien-green">
                      Decentralization
                    </h4>
                    <p className="leading-relaxed">
                      Not controlled by a single entity, making it more resistant to censorship and manipulation.
                    </p>
                  </div>
                  <div className="bg-alien-space-dark/90 p-6 rounded-xl backdrop-blur-md border border-alien-green/20 hover:border-alien-green/40 transition-all duration-300">
                    <h4 className="text-alien-green font-semibold mb-3 text-xl font-nasalization">
                      Flexibility
                    </h4>
                    <p className="leading-relaxed">
                      Exchange cryptos & NFTs for other assets, providing more options for asset management.
                    </p>
                  </div>
                  <div className="bg-alien-space-dark/90 p-6 rounded-xl backdrop-blur-md border border-alien-gold/20 hover:border-alien-gold/40 transition-all duration-300">
                    <h4 className="font-semibold mb-3 text-xl font-nasalization text-glow text-alien-green">
                      Liquidity
                    </h4>
                    <p className="leading-relaxed">
                      Great liquidity for quick and easy conversion of cryptocurrencies and NFTs to other assets.
                    </p>
                  </div>
                  <div className="bg-alien-space-dark/90 p-6 rounded-xl backdrop-blur-md border border-alien-green/20 hover:border-alien-green/40 transition-all duration-300">
                    <h4 className="text-alien-green font-semibold mb-3 text-xl font-nasalization">
                      Security
                    </h4>
                    <p className="leading-relaxed">
                      Protected by blockchain technology, quantum computing and AI against fraud and hacking.
                    </p>
                  </div>
                  <div className="bg-alien-space-dark/90 p-6 rounded-xl backdrop-blur-md border border-alien-gold/20 hover:border-alien-gold/40 transition-all duration-300 md:col-span-2 lg:col-span-1">
                    <h4 className="font-semibold mb-3 text-xl font-nasalization text-glow text-alien-green">
                      Transparency
                    </h4>
                    <p className="leading-relaxed">
                      Completely transparent with verifiable transactions and operations on blockchain networks.
                    </p>
                  </div>
                </div>
                
                <div className="text-center">
                  <Button className="bg-gradient-to-r from-alien-green to-alien-green-light hover:from-alien-green-light hover:to-alien-green text-alien-space-dark font-semibold font-nasalization shadow-2xl hover:shadow-alien-green/40 transition-all duration-300 hover:transform hover:scale-105 px-0 py-0 rounded-xl text-alien-gold text-lg">
                    Access Cryptotokens & NFTs
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>;
};
export default About;