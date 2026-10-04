import React, { Suspense, lazy } from 'react';
import { Rocket, Star, Clock, ScrollText, BookOpen, PieChart } from 'lucide-react';
import AlienTag from '@/components/alien/AlienTag';
import AlienButton from '@/components/alien/AlienButton';
import LoadingScreen from '@/components/LoadingScreen';
import PriceTicker from '@/components/PriceTicker';

const NFTGallery = lazy(() => import('@/components/NFTGallery'));

const AlienTrip: React.FC = () => {
  const roadmapEvents = [
    { quarter: "Q3 2025", title: "Genesis Launch", description: "Initial deployment of AlienFlowSpace DAO with core governance and token mechanics.", details: ["Deploy DApp and integrate Telegram Mini App for user accessibility", "Establish presence on key platforms", "Launch Social Networks"], completed: true, icon: <Rocket className="h-5 w-5" /> },
    { quarter: "Q4 2025", title: "Ecosystem Integration Phase I", description: "First wave of ecosystem partners onboarded and interconnected within the network.", details: ["Collaborate with organizations focused on BioFi, DeFi, DePin, DeSci, IPFS, QFS, ReFi, RWA, SocialFi and TradFi", "Forming Strategic Alliances", "Address environmental emergencies and Partner with UNESCO to protect land and marine ecosystems", "Conserve and Expand Natural Heritage"], completed: false, icon: <Star className="h-5 w-5" /> },
    { quarter: "Q1 2026", title: "Ecosystem Integration Phase II", description: "Advanced bioecosystem communication and energy efficiency improvements.", details: ["Advance Communication Bioecosystem", "Improve the Endocannabinoid System in biological systems", "Enhance Energy Efficiency & Explore Entropy Sources", "Research energy-efficient particles and neutral energy sources"], completed: false, icon: <Star className="h-5 w-5" /> },
    { quarter: "Q2 2027", title: "CoNetWorKing Mainnet", description: "Launch of our distributed networking infrastructure connecting all ecosystems.", details: ["Distribute CrypTokens & NFTs", "Launch airdrops with valuable CrypTokens and exclusive NFTs", "Utilize tokens for liquidity pools to fund sustainable initiatives"], completed: false, icon: <Star className="h-5 w-5" /> },
    { quarter: "Q3 2028", title: "Cross-Ecosystem Governance", description: "Implementation of universal governance mechanics for collaborative decision-making.", details: ["Deploy cross-chain governance protocols", "Establish voting mechanisms across ecosystems", "Create unified decision-making frameworks"], completed: false, icon: <Star className="h-5 w-5" /> },
    { quarter: "Q1 2030", title: "Interplanetary Expansion", description: "Extension of AlienFlowSpace DAO to additional layer 1 blockchains and ecosystems.", details: ["Multi-chain integration across major blockchains", "Quantum-resistant infrastructure deployment", "Cosmic governance expansion"], completed: false, icon: <Star className="h-5 w-5" /> }
  ];

  const tokenomics = [
    { name: "Community Rewards", value: 15, color: "#4CAF50" },
    { name: "Development Reserve Funds", value: 35, color: "#2196F3" },
    { name: "Liquidity Pools", value: 20, color: "#FFC107" },
    { name: "Founders Teams", value: 10, color: "#9C27B0" },
    { name: "Partners", value: 10, color: "#FF5722" },
    { name: "Marketing", value: 10, color: "#E91E63" }
  ];

  return (
    <div className="relative flex flex-col flex-1 pb-16">
      <div className="w-full border-b border-af-border-hairline">
        <PriceTicker />
      </div>
      <main className="relative z-10 flex-grow container mx-auto px-4 pt-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-12 py-8">
            <div className="flex items-center justify-center gap-3 mb-4 flex-wrap">
              <AlienTag color="green">ALIENTRIP</AlienTag>
              <AlienTag color="muted">MANIFESTO</AlienTag>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-nasalization text-alien-green af-heading-underline inline-block">
              AlienTrip
            </h1>
          </div>

          {/* Intro */}
          <div className="border border-af-border bg-af-surface/20 p-6 md:p-8 mb-10 text-center">
            <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-4">
              Explore our cosmic journey through the knowledge skills multiverse as we build the next generation of decentralized collaboration together.
            </p>
            <p className="text-alien-green font-nasalization text-base mb-6">
              Join us to enjoy the advantages, benefits and profits of the ecosystem.
            </p>
            <AlienButton variant="primary" className="!px-8 !py-3 !text-sm">
              <Rocket className="h-4 w-4" /> Join the Journey
            </AlienButton>
          </div>

          {/* Crypto Mint NFT */}
          <div className="border border-af-border bg-af-surface/20 p-6 md:p-8 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <AlienTag color="green">NFT MINT</AlienTag>
            </div>
            <h2 className="text-3xl font-bold text-alien-green font-nasalization mb-4 text-center">Crypto Mint NFT</h2>
            <p className="text-alien-gold text-center text-lg mb-6">
              Secure your place in our cosmic ecosystem by minting an ΔlieπFlΦw $pac€ DAO Passport, granting you early access to all present and future features and governance rights.
            </p>
            <div className="border border-af-border-hairline p-6 max-w-md mx-auto mb-6">
              <div className="flex justify-between items-center mb-3">
                <span className="text-alien-gold font-nasalization text-sm">Mint Price</span>
                <span className="text-alien-green font-semibold font-nasalization text-sm">0.08 ₿TC</span>
              </div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-alien-gold font-nasalization text-sm">Total Supply</span>
                <span className="text-alien-green font-semibold font-nasalization text-sm">1,618.033</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-alien-gold font-nasalization text-sm">Minted</span>
                <span className="text-alien-green font-semibold font-nasalization text-sm">314.159 / 1,618.033</span>
              </div>
              <div className="w-full bg-af-surface-2/30 h-2 mb-4">
                <div className="bg-alien-gold h-2 transition-all duration-500" style={{ width: '19.4%' }} />
              </div>
            </div>
            <div className="flex justify-center">
              <AlienButton variant="primary" className="!px-8 !py-3 !text-sm">
                Crypto Mint NFT Passport
              </AlienButton>
            </div>
          </div>

          {/* Official Documentation */}
          <div className="border border-af-border bg-af-surface/20 p-6 md:p-8 mb-10 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <BookOpen className="h-7 w-7 text-alien-gold" />
              <h3 className="text-2xl font-semibold text-alien-gold font-nasalization">Official Documentation</h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Access our comprehensive documentation to learn about tokenomics, roadmap, and technical specifications of the ΔlieπFlΦw $pac€ DAO ecosystem.
            </p>
            <AlienButton href="https://alienflowspace.gitbook.io/DAO" variant="outline" className="!px-8 !py-3 !text-sm">
              <ScrollText className="h-4 w-4" /> Visit GitBook
            </AlienButton>
          </div>

          {/* Tokenomics */}
          <div className="mb-12">
            <div className="border border-af-border bg-af-surface/20 p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <AlienTag color="gold">TOKENOMICS</AlienTag>
              </div>
              <h2 className="text-3xl font-bold text-alien-gold font-nasalization mb-2">Tokenomics</h2>
              <p className="text-gray-300 mb-8">The A₿TC token distribution is designed to ensure sustainable ecosystem growth and balanced governance.</p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                {/* Pie Chart */}
                <div className="relative w-56 h-56">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    {tokenomics.reduce((acc, item, i, arr) => {
                      const startAngle = acc.angle;
                      const sliceAngle = item.value / 100 * 360;
                      const endAngle = startAngle + sliceAngle;
                      const x1 = 50 + 40 * Math.cos((startAngle - 90) * Math.PI / 180);
                      const y1 = 50 + 40 * Math.sin((startAngle - 90) * Math.PI / 180);
                      const x2 = 50 + 40 * Math.cos((endAngle - 90) * Math.PI / 180);
                      const y2 = 50 + 40 * Math.sin((endAngle - 90) * Math.PI / 180);
                      const largeArc = sliceAngle > 180 ? 1 : 0;
                      acc.paths.push(<path key={i} d={`M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArc} 1 ${x2} ${y2} Z`} fill={item.color} stroke="rgba(0,0,0,0.3)" strokeWidth="0.5" />);
                      acc.angle = endAngle;
                      return acc;
                    }, { paths: [], angle: 0 }).paths}
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-af-surface/80 w-16 h-16 flex items-center justify-center">
                      <PieChart className="text-alien-gold h-8 w-8" />
                    </div>
                  </div>
                </div>
                {/* Legend */}
                <div className="grid grid-cols-2 gap-4">
                  {tokenomics.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-3 h-3 mr-2" style={{ backgroundColor: item.color }} />
                      <div>
                        <span className="text-gray-300 text-sm">{item.name}</span>
                        <span className="ml-2 text-alien-gold font-bold font-nasalization text-sm">{item.value}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center mt-8">
                <a href="https://alienflowspace.gitbook.io/DAO" target="_blank" rel="noopener noreferrer" className="text-alien-green hover:text-alien-green-light inline-flex items-center text-sm">
                  View detailed tokenomics <Rocket className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* NFT Gallery */}
          <div className="mb-12">
            <div className="border border-af-border bg-af-surface/20 p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <AlienTag color="gold">DIGITAL COLLECTIBLES</AlienTag>
              </div>
              <h2 className="text-3xl font-bold text-alien-gold font-nasalization mb-2">Digital Collectibles</h2>
              <p className="text-gray-300 mb-6">Explore our exclusive NFT collections on OpenSea. Own a piece of the AlienFlowSpace universe.</p>
              <Suspense fallback={<LoadingScreen />}>
                <NFTGallery />
              </Suspense>
            </div>
          </div>

          {/* Roadmap */}
          <div className="mb-12">
            <div className="border border-af-border bg-af-surface/20 p-6 md:p-8 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <AlienTag color="green">ROADMAP</AlienTag>
              </div>
              <h2 className="text-3xl font-bold text-alien-gold font-nasalization mb-2">Roadmap</h2>
              <p className="text-gray-300">Our mission to combine and unify the blockchain (web 3), neural intelligence networks (web 4) and quantum computation (web 5) follows this strategic path through interstellar space time.</p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-af-border" />
              <div className="absolute left-1/2 -translate-x-1/2 top-0 -mt-8">
                <img src="/lovable-uploads/VC.png" alt="Alien UFO" className="w-14 h-14 object-contain animate-bounce" />
              </div>

              {roadmapEvents.map((event, index) => (
                <div key={index} className="relative grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
                  <div className={`md:col-span-2 ${index % 2 === 0 ? 'md:text-right order-1' : 'order-1 md:order-3'}`}>
                    <div className={`border p-5 ${event.completed ? 'border-alien-gold/50' : 'border-af-border'} bg-af-surface/20`}>
                      <h3 className="text-xl font-bold text-alien-gold font-nasalization mb-2">{event.title}</h3>
                      <div className="text-sm text-alien-green flex items-center gap-2 mb-3">
                        <Clock className="h-4 w-4" />
                        <span>{event.quarter}</span>
                      </div>
                      <p className="text-gray-300 text-sm mb-3">{event.description}</p>
                      <ul className="space-y-1.5">
                        {event.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start gap-2 text-sm text-gray-300">
                            <span className="text-alien-gold mt-0.5">·</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="order-2 flex justify-center">
                    <div className="relative">
                      <div className={`w-10 h-10 flex items-center justify-center z-10 ${event.completed ? 'bg-alien-gold' : 'border border-alien-gold/50 bg-af-surface'}`}>
                        <span className={event.completed ? 'text-af-bg' : 'text-alien-gold'}>{event.icon}</span>
                      </div>
                    </div>
                  </div>

                  <div className={`md:col-span-2 ${index % 2 === 0 ? 'order-3' : 'order-1 md:text-right'}`} />
                </div>
              ))}
            </div>

            <div className="text-center mt-6">
              <a href="https://alienflowspace.gitbook.io/DAO" target="_blank" rel="noopener noreferrer" className="text-alien-green hover:text-alien-green-light inline-flex items-center text-sm">
                View complete roadmap <Rocket className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Join */}
          <div className="border border-af-border bg-af-surface/20 p-6 md:p-8 text-center">
            <h2 className="text-3xl font-bold text-alien-gold mb-4 font-nasalization">Join Our Cosmic Journey</h2>
            <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
              The AlienFlowSpace DAO is more than a project—it's a movement to transform blockchain collaboration across the multiverse. Be part of this revolutionary journey.
            </p>
            <AlienButton variant="primary" className="!px-8 !py-3 !text-sm">
              <Rocket className="h-4 w-4" /> Join AlienFlowSpace
            </AlienButton>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AlienTrip;
