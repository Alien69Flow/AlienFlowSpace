import React from 'react';

import { Rocket, Star, Clock, ScrollText, BookOpen, PieChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
const AlienTrip: React.FC = () => {
  const roadmapEvents = [{
    quarter: "Q3 2025",
    title: "Genesis Launch",
    description: "Initial deployment of AlienFlowSpace DAO with core governance and token mechanics.",
    details: ["Deploy DApp and integrate Telegram Mini App for user accessibility", "Establish presence on key platforms", "Launch Social Networks"],
    completed: true,
    icon: <Rocket className="h-5 w-5" />
  }, {
    quarter: "Q4 2025",
    title: "Ecosystem Integration Phase I",
    description: "First wave of ecosystem partners onboarded and interconnected within the network.",
    details: ["Collaborate with organizations focused on BioFi, DeFi, DePin, DeSci, IPFS, QFS, ReFi, RWA, SocialFi and TradFi", "Forming Strategic Alliances", "Address environmental emergencies and Partner with UNESCO to protect land and marine ecosystems", "Conserve and Expand Natural Heritage"],
    completed: false,
    icon: <Star className="h-5 w-5" />
  }, {
    quarter: "Q1 2026",
    title: "Ecosystem Integration Phase II",
    description: "Advanced bioecosystem communication and energy efficiency improvements.",
    details: ["Advance Communication Bioecosystem", "Improve the Endocannabinoid System in biological systems", "Enhance Energy Efficiency & Explore Entropy Sources", "Research energy-efficient particles and neutral energy sources"],
    completed: false,
    icon: <Star className="h-5 w-5" />
  }, {
    quarter: "Q2 2027",
    title: "CoNetWorKing Mainnet",
    description: "Launch of our distributed networking infrastructure connecting all ecosystems.",
    details: ["Distribute CrypTokens & NFTs", "Launch airdrops with valuable CrypTokens and exclusive NFTs", "Utilize tokens for liquidity pools to fund sustainable initiatives"],
    completed: false,
    icon: <Star className="h-5 w-5" />
  }, {
    quarter: "Q3 2028",
    title: "Cross-Ecosystem Governance",
    description: "Implementation of universal governance mechanics for collaborative decision-making.",
    details: ["Deploy cross-chain governance protocols", "Establish voting mechanisms across ecosystems", "Create unified decision-making frameworks"],
    completed: false,
    icon: <Star className="h-5 w-5" />
  }, {
    quarter: "Q1 2030",
    title: "Interplanetary Expansion",
    description: "Extension of AlienFlowSpace DAO to additional layer 1 blockchains and ecosystems.",
    details: ["Multi-chain integration across major blockchains", "Quantum-resistant infrastructure deployment", "Cosmic governance expansion"],
    completed: false,
    icon: <Star className="h-5 w-5" />
  }];
  const tokenomics = [{
    name: "Community Rewards",
    value: 15,
    color: "#4CAF50"
  }, {
    name: "Development Reserve Funds",
    value: 35,
    color: "#2196F3"
  }, {
    name: "Liquidity Pools",
    value: 20,
    color: "#FFC107"
  }, {
    name: "Founders Teams",
    value: 10,
    color: "#9C27B0"
  }, {
    name: "Partners",
    value: 10,
    color: "#FF5722"
  }, {
    name: "Marketing",
    value: 10,
    color: "#E91E63"
  }];
  return <div className="relative flex flex col flex-1">

      <main className="relative z-10 flex-grow container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <Card className="bg-alien-space-dark/50 backdrop-blur-md border-alien-gold/20 mb-6">
                <CardHeader>
                  <CardTitle className="text-4xl md:text-5xl font-bold text-alien-gold font-nasalization">
                    AlienTrip
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-300 font-[Exo] mb-4">
                    Explore our cosmic journey through the knowledge skills multiverse as we build the next generation of decentralized collaboration together.
                  </p>
                  <p className="text-alien-green font-[Exo] font-semibold">Join us to enjoy the advantages, benefits and profits of the ecosystem.</p>
                </CardContent>
              </Card>

              <div className="flex flex-wrap gap-4 mb-8">
                <Button 
                  className="bg-alien-gold hover:bg-alien-gold-light text-alien-space-dark font-nasalization hover:shadow-lg hover:scale-105 transition-all duration-300"
                  onClick={() => window.location.href = '/contact'}
                >
                  <Rocket className="mr-2 h-5 w-5" /> Join the Journey
                </Button>
              </div>

              {/* Documentation Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* GitBook Documentation */}
                <Card className="bg-alien-space-dark/50 backdrop-blur-md border-alien-gold/20 hover:border-alien-gold/40 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <BookOpen className="h-6 w-6 text-alien-gold mr-3" />
                      <h3 className="text-xl font-semibold text-alien-gold font-nasalization">Documentation & Greenpapers</h3>
                    </div>
                    <p className="text-gray-300 mb-4 font-[Exo]">
                      Access our complete whitepaper, technical documentation, and all greenpapers in our GitBook hub.
                    </p>
                    <a 
                      href="https://alienflowspace.gitbook.io/DAO" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center text-alien-green hover:text-alien-green-light font-[Exo] hover:scale-105 transition-all duration-300 bg-alien-green/10 px-4 py-2 rounded-lg border border-alien-green/30 hover:bg-alien-green/20"
                    >
                      <span>Read GitBook Documentation</span>
                      <Rocket className="ml-2 h-4 w-4" />
                    </a>
                  </CardContent>
                </Card>

                {/* Tokenomics Card */}
                <Card className="bg-alien-space-dark/50 backdrop-blur-md border-alien-green/20 hover:border-alien-green/40 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <PieChart className="h-6 w-6 text-alien-green mr-3" />
                      <h3 className="text-xl font-semibold text-alien-green font-nasalization">Tokenomics Details</h3>
                    </div>
                    <p className="text-gray-300 mb-4 font-[Exo]">
                      Explore the complete A₿TC token distribution, utility mechanisms, and economic model.
                    </p>
                    <a 
                      href="https://alienflowspace.gitbook.io/DAO" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center text-alien-gold hover:text-alien-gold-light font-[Exo] hover:scale-105 transition-all duration-300 bg-alien-gold/10 px-4 py-2 rounded-lg border border-alien-gold/30 hover:bg-alien-gold/20"
                    >
                      <span>View Tokenomics</span>
                      <Rocket className="ml-2 h-4 w-4" />
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Crypto Mint NFT - Compact design */}
            <Card className="bg-alien-space-dark/50 backdrop-blur-md border-alien-gold/20 h-fit">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-bold text-alien-green font-nasalization">
                  Crypto Mint NFT
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <p className="mb-4 font-[Exo] text-alien-gold text-sm">
                  Secure your place in our cosmic ecosystem by minting an ΔlieπFlΦw $pac€ DAO Passport, granting you early access to all present and future features and governance rights.
                </p>
                <div className="bg-alien-space-light rounded-lg p-3 mb-4">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-alien-gold font-[Exo] text-sm">Mint Price</span>
                    <span className="text-alien-green font-semibold font-[Exo] text-sm">0.08 ₿TC</span>
                  </div>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-alien-gold font-[Exo] text-sm">Total Supply</span>
                    <span className="text-alien-green font-semibold font-[Exo] text-sm">1,618.034</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-alien-gold font-[Exo] text-sm">Minted</span>
                    <span className="text-alien-green font-semibold font-[Exo] text-sm">314.159 / 1,618.034</span>
                  </div>
                  <div className="w-full bg-alien-space-dark rounded-full h-2 mb-2">
                    <div className="bg-alien-gold h-2 rounded-full" style={{
                    width: '19.4%'
                  }}></div>
                  </div>
                </div>
                <Button className="w-full bg-alien-gold hover:bg-alien-gold-light text-alien-space-dark font-nasalization text-sm">
                  Crypto Mint NFT Passport
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Tokenomics Section */}
          <div className="mb-16">
            <Card className="bg-alien-space-dark/50 backdrop-blur-md border-alien-gold/20">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-alien-gold text-center font-nasalization">
                  Tokenomics
                </CardTitle>
                <p className="text-lg text-gray-300 font-[Exo] text-center mt-4">
                  The A₿TC token distribution is designed to ensure sustainable ecosystem growth and balanced governance.
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                  {/* Pie Chart Visualization */}
                  <div className="relative w-64 h-64">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      {tokenomics.reduce((acc, item, i, arr) => {
                      const startAngle = acc.angle;
                      const sliceAngle = item.value / 100 * 360;
                      const endAngle = startAngle + sliceAngle;

                      // Calculate the SVG arc path
                      const x1 = 50 + 40 * Math.cos((startAngle - 90) * Math.PI / 180);
                      const y1 = 50 + 40 * Math.sin((startAngle - 90) * Math.PI / 180);
                      const x2 = 50 + 40 * Math.cos((endAngle - 90) * Math.PI / 180);
                      const y2 = 50 + 40 * Math.sin((endAngle - 90) * Math.PI / 180);
                      const largeArc = sliceAngle > 180 ? 1 : 0;
                      acc.paths.push(<path key={i} d={`M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArc} 1 ${x2} ${y2} Z`} fill={item.color} stroke="rgba(0,0,0,0.3)" strokeWidth="0.5" />);
                      acc.angle = endAngle;
                      return acc;
                    }, {
                      paths: [],
                      angle: 0
                    }).paths}
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-alien-space-dark/70 rounded-full w-20 h-20 flex items-center justify-center backdrop-blur-sm">
                        <PieChart className="text-alien-gold h-10 w-10" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Legend */}
                  <div className="grid grid-cols-2 gap-4">
                    {tokenomics.map((item, index) => <div key={index} className="flex items-center">
                        <div className="w-4 h-4 mr-2" style={{
                      backgroundColor: item.color
                    }}></div>
                        <div>
                          <span className="text-gray-300 font-[Exo]">{item.name}</span>
                          <span className="ml-2 text-alien-gold font-bold font-[Exo]">{item.value}%</span>
                        </div>
                      </div>)}
                  </div>
                </div>
                
              </CardContent>
            </Card>
          </div>
          
          <div className="mb-16">
            <Card className="bg-alien-space-dark/50 backdrop-blur-md border-alien-gold/20 mb-8">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-alien-gold text-center font-nasalization">
                  Roadmap
                </CardTitle>
                <p className="text-lg text-gray-300 font-[Exo] text-center mt-4">
                  Our mission to combine and unify the blockchain (web 3), neural intelligence networks (web 4) and quantum computation (web 5) follows this strategic path through interstellar space time.
                </p>
              </CardHeader>
            </Card>
            
            <div className="relative">
              {/* UFO traveling through solar systems */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-alien-gold/30"></div>
              
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 -mt-8">
                <img src="/lovable-uploads/VC.png" alt="Alien UFO" className="w-16 h-16 object-contain animate-bounce" />
              </div>
              
              {roadmapEvents.map((event, index) => <div key={index} className="relative grid grid-cols-1 md:grid-cols-5 gap-8 mb-16">
                  <div className={`md:col-span-2 ${index % 2 === 0 ? 'md:text-right order-1' : 'order-1 md:order-3'}`}>
                    <Card className={`bg-alien-space-dark/80 backdrop-blur-md border-2 ${event.completed ? 'border-alien-gold/50' : 'border-alien-green/30'} shadow-xl hover:shadow-2xl transition-all duration-300`}>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-2xl font-bold text-alien-gold font-nasalization">
                          {event.title}
                        </CardTitle>
                        <div className="text-sm text-alien-green flex items-center gap-2 font-[Exo]">
                          <Clock className="h-4 w-4" />
                          <span>{event.quarter}</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-300 font-[Exo] mb-4">{event.description}</p>
                        <ul className="space-y-2">
                          {event.details.map((detail, detailIndex) => <li key={detailIndex} className="flex items-start gap-2 text-sm text-gray-300 font-[Exo]">
                              <span className="text-alien-gold mt-1">·</span>
                              <span>{detail}</span>
                            </li>)}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="order-2 flex justify-center">
                    <div className="relative">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center z-10 ${event.completed ? 'bg-alien-gold' : 'bg-alien-space-light border-2 border-alien-gold/50'}`}>
                        <span className={event.completed ? 'text-alien-space-dark' : 'text-alien-gold'}>
                          {event.icon}
                        </span>
                      </div>
                      
                      {/* Planetary systems */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10">
                        <div className={`w-24 h-24 rounded-full border ${index === 0 ? 'border-blue-300/20' : index === 1 ? 'border-red-300/20' : index === 2 ? 'border-green-300/20' : index === 3 ? 'border-yellow-300/20' : index === 4 ? 'border-purple-300/20' : 'border-cyan-300/20'} opacity-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}></div>
                        <div className={`w-20 h-20 rounded-full ${index === 0 ? 'bg-blue-900/10' : index === 1 ? 'bg-red-900/10' : index === 2 ? 'bg-green-900/10' : index === 3 ? 'bg-yellow-900/10' : index === 4 ? 'bg-purple-900/10' : 'bg-cyan-900/10'} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`md:col-span-2 ${index % 2 === 0 ? 'order-3' : 'order-1 md:text-right'}`}>
                    {/* Empty space for alignment */}
                  </div>
                </div>)}
            </div>
            
          </div>
          
          <Card className="bg-alien-space-dark/70 backdrop-blur-md border-alien-gold/20">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold text-alien-gold mb-4 font-nasalization">Join Our Cosmic Journey</h2>
              <p className="text-gray-300 mb-8 max-w-3xl mx-auto font-[Exo]">
                The AlienFlowSpace DAO is more than a project—it's a movement to transform blockchain collaboration across the multiverse. Be part of this revolutionary journey.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  className="bg-alien-gold hover:bg-alien-gold-light text-alien-space-dark px-8 py-6 font-nasalization hover:shadow-lg hover:scale-105 transition-all duration-300"
                  onClick={() => window.location.href = '/contact'}
                >
                  <Rocket className="mr-2 h-5 w-5" /> Join AlienFlowSpace
                </Button>
                <Button 
                  className="bg-alien-green/20 border-alien-green text-alien-green hover:bg-alien-green hover:text-alien-space-dark font-nasalization border-2 px-8 py-6 hover:shadow-lg hover:scale-105 transition-all duration-300"
                  onClick={() => window.open("https://alienflowspace.gitbook.io/DAO", "_blank")}
                >
                  <BookOpen className="mr-2 h-5 w-5" /> Complete Documentation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>;
};
export default AlienTrip;