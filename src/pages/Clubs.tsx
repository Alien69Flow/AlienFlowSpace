import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Users, Rocket, Calendar, Zap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

type ClubProps = {
  name: string;
  description: string;
  members: number;
  icon: React.ReactNode;
  category: string;
  categoryColor: string;
  bgColor: string;
};

const ClubCard = ({ club }: { club: ClubProps }) => (
  <div
    className={`${club.bgColor} p-6 rounded-xl backdrop-blur-md overflow-hidden relative group hover:transform hover:scale-[1.02] transition-all duration-300 border border-alien-gold/20 hover:border-alien-gold/40`}
  >
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-alien-space-dark/60 to-alien-space-dark/90 z-0"></div>

    <div className="relative z-10">
      <div className="flex justify-between items-start mb-6">
        <div className="p-4 bg-alien-space-dark/80 rounded-xl backdrop-blur-md border border-alien-gold/30 group-hover:border-alien-gold/50 transition-all duration-300">
          {club.icon}
        </div>
        <span
          className={`px-3 py-1 text-xs ${club.categoryColor} rounded-full font-medium backdrop-blur-sm`}
        >
          {club.category}
        </span>
      </div>

      <h3 className="text-xl font-bold text-alien-gold mb-3 font-nasalization group-hover:text-alien-gold-light transition-colors">
        {club.name}
      </h3>
      <p className="text-gray-200 mb-6 text-sm font-[Exo] leading-relaxed">
        {club.description}
      </p>

      <div className="flex justify-between items-center">
        <div className="flex items-center bg-alien-space-dark/60 px-3 py-2 rounded-full backdrop-blur-sm">
          <Users className="h-4 w-4 text-alien-green mr-2" />
          <span className="text-sm text-alien-green font-medium">
            {club.members.toLocaleString()} members
          </span>
        </div>
        <Button
          variant="outline"
          className="border-alien-gold/50 text-alien-gold hover:bg-alien-gold/20 hover:border-alien-gold text-sm px-4 py-2 h-auto font-[Exo] font-medium backdrop-blur-sm"
        >
          Join Club
        </Button>
      </div>
    </div>
  </div>
);

const Clubs: React.FC = () => {
  const featuredClubs: ClubProps[] = [
    {
      name: 'Δ CashFlow',
      description: 'Advanced earning strategies and winning analysis for interplanetary assets through DeFi protocols, yield farming, and strategic portfolio management.',
      members: 314159,
      icon: <Zap className="h-6 w-6 text-alien-gold" />,
      category: 'CashFlow',
      categoryColor: 'bg-blue-500/80 text-white border border-blue-400/50',
      bgColor: 'bg-gradient-to-br from-blue-900/40 to-purple-900/40',
    },
    {
      name: 'Δ EcoFlow',
      description: "Shaping the planet's present through collaborative decision-making with budgets, proposals, and sustainable governance mechanisms for environmental impact.",
      members: 161803,
      icon: <Shield className="h-6 w-6 text-alien-gold" />,
      category: 'DAO',
      categoryColor: 'bg-emerald-500/80 text-white border border-emerald-400/50',
      bgColor: 'bg-gradient-to-br from-emerald-900/40 to-green-900/40',
    },
    {
      name: 'ΔGameFlow ΔWeedFlow ΔXFlow',
      description: 'Discovering and creating digital artifacts across the multiverse with utility in reality through gaming, wellness, and cross-chain experiences.',
      members: 37128,
      icon: <Rocket className="h-6 w-6 text-alien-gold" />,
      category: 'NFTs',
      categoryColor: 'bg-pink-500/80 text-white border border-pink-400/50',
      bgColor: 'bg-gradient-to-br from-pink-900/40 to-red-900/40',
    },
  ];

  const allClubs: ClubProps[] = [
    ...featuredClubs,
    {
      name: 'DeSci: Research, Development and Innovation',
      description: 'Advancing scientific discovery through decentralized collaboration.',
      members: 843,
      icon: <Rocket className="h-6 w-6 text-alien-gold" />,
      category: 'DeSci',
      categoryColor: 'bg-cyan-500/80 text-white border border-cyan-400/50',
      bgColor: 'bg-gradient-to-br from-cyan-900/40 to-blue-900/40',
    },
    {
      name: 'BioFi Innovators',
      description: 'Exploring the intersection of biology, blockchain, and finance.',
      members: 621,
      icon: <Rocket className="h-6 w-6 text-alien-gold" />,
      category: 'BioFi',
      categoryColor: 'bg-green-500/80 text-white border border-green-400/50',
      bgColor: 'bg-gradient-to-br from-green-900/40 to-teal-900/40',
    },
    {
      name: 'ReFi Guardians',
      description: 'Protecting and regenerating ecosystems through sustainable finance.',
      members: 1129,
      icon: <Shield className="h-6 w-6 text-alien-gold" />,
      category: 'ReFi',
      categoryColor: 'bg-lime-500/80 text-white border border-lime-400/50',
      bgColor: 'bg-gradient-to-br from-lime-900/40 to-green-900/40',
    },
    {
      name: 'RWA Architects',
      description: 'Tokenizing and optimizing real-world assets on the blockchain.',
      members: 794,
      icon: <Rocket className="h-6 w-6 text-alien-gold" />,
      category: 'RWA',
      categoryColor: 'bg-amber-500/80 text-white border border-amber-400/50',
      bgColor: 'bg-gradient-to-br from-amber-900/40 to-orange-900/40',
    },
    {
      name: 'IPFS Guardians',
      description: 'Building and maintaining decentralized storage infrastructure.',
      members: 528,
      icon: <Shield className="h-6 w-6 text-alien-gold" />,
      category: 'Infrastructure',
      categoryColor: 'bg-indigo-500/80 text-white border border-indigo-400/50',
      bgColor: 'bg-gradient-to-br from-indigo-900/40 to-violet-900/40',
    },
    {
      name: 'Social Networkers',
      description: 'Creating decentralized social platforms for the community.',
      members: 1847,
      icon: <Zap className="h-6 w-6 text-alien-gold" />,
      category: 'SocialFi',
      categoryColor: 'bg-rose-500/80 text-white border border-rose-400/50',
      bgColor: 'bg-gradient-to-br from-rose-900/40 to-pink-900/40',
    },
  ];

  const upcomingEvents = [
    { title: 'Trading Masterclass', date: 'Dec 26, 2025', time: '18:00 UTC', club: 'Cosmic Traders' },
    { title: 'Governance Proposal Review', date: 'Dec 28, 2025', time: '14:00 UTC', club: 'Governance Council' },
    { title: 'NFT Creation Workshop', date: 'Dec 30, 2025', time: '16:00 UTC', club: 'NFT Explorers' },
  ];

  const partners = [
    { name: 'CoinGecko', url: 'https://coingecko.com/', logo: '/lovable-uploads/CoinGeckoLogo.svg' },
    { name: 'CoinMarketCap', url: 'https://coinmarketcap.com/', logo: '/lovable-uploads/CoinMarketCapLogo.jpeg' },
    { name: 'DappRadar', url: 'https://dappradar.com/', logo: '/lovable-uploads/DappRadarLogo.jpeg' },
    { name: 'Aragon DAO', url: 'https://aragon.org/', logo: '/lovable-uploads/AragonDAOLogo.svg' },
    { name: 'Unity Learn', url: 'https://learn.unity.com/', logo: '/lovable-uploads/UnityLearnLogo.svg' },
    { name: 'Climate Reanalyzer', url: 'https://climatereanalyzer.org/', logo: '/lovable-uploads/ClimateReanalyzerLogo.svg' },
    { name: 'CoinGlass', url: 'https://coinglass.com/', logo: '/lovable-uploads/CoinGlassLogo.jpeg' },
    { name: 'Behance', url: 'https://behance.net/', logo: '/lovable-uploads/BehanceLogo.jpeg' },
  ];

  return (
    <div className="min-h-screen relative">
      <Header />

      <main className="container mx-auto px-4 pt-28 pb-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-alien-gold/20 rounded-full mb-6 border-2 border-alien-gold/40 backdrop-blur-md">
              <img
                src="/lovable-uploads/ClubLogo.png"
                alt="Clubs Official Logo"
                className="h-12 w-12 object-contain"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-alien-gold mb-6 font-nasalization text-glow">
              Clubs
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-[Exo] leading-relaxed">
              Join specialized communities within the AlienFlowSpace ecosystem to connect with like-minded
              individuals across the multiverse.
            </p>
          </div>

          {/* Featured Clubs */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-alien-gold mb-8 font-nasalization text-center text-glow">
              Featured Clubs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredClubs.map((club, index) => (
                <ClubCard key={index} club={club} />
              ))}
            </div>
          </div>

          {/* All Clubs + Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-alien-gold mb-8 font-nasalization text-glow">All Clubs</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {allClubs.map((club, index) => (
                  <ClubCard key={`all-${index}`} club={club} />
                ))}
              </div>
            </div>

            <div className="space-y-8">
              {/* Events */}
              <div>
                <h2 className="text-2xl font-bold text-alien-gold mb-6 font-nasalization">Upcoming Events</h2>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div
                      key={index}
                      className="bg-alien-space-dark/80 p-6 rounded-xl backdrop-blur-md border border-alien-gold/30 hover:border-alien-gold/50 transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-alien-space-light/60 rounded-full border border-alien-gold/30">
                          <Calendar className="h-5 w-5 text-alien-gold" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-alien-gold font-[Exo] mb-1">{event.title}</h4>
                          <p className="text-sm text-gray-300 font-[Exo] mb-2">{event.club}</p>
                          <div className="flex items-center text-xs text-alien-green">
                            <Calendar className="h-3 w-3 mr-1" />
                            <span>
                              {event.date} · {event.time}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  <Button
                    variant="outline"
                    className="w-full border-alien-gold/40 text-alien-gold hover:bg-alien-gold/20 hover:border-alien-gold/60 mt-4 font-[Exo] backdrop-blur-sm"
                  >
                    View All Events
                  </Button>
                </div>
              </div>

              {/* Create Club CTA */}
              <div className="bg-gradient-to-br from-alien-green/30 to-alien-gold/30 p-8 rounded-xl backdrop-blur-md border border-alien-gold/30">
                <h3 className="text-xl font-bold text-alien-gold mb-4 font-nasalization text-glow">
                  Start Your Own Club
                </h3>
                <p className="text-sm text-gray-200 mb-6 font-[Exo] leading-relaxed">
                  Have a unique interest not represented yet? Create your own club and invite others to join.
                </p>
                <Button className="w-full bg-alien-gold hover:bg-alien-gold-light text-alien-space-dark font-[Exo] font-semibold">
                  Create Club
                </Button>
              </div>
            </div>
          </div>

          {/* Community Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { value: '15+', label: 'Active Clubs' },
              { value: '28.5K', label: 'Members' },
              { value: '450+', label: 'Events Held' },
              { value: '142', label: 'Countries' },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-alien-space-dark/80 p-8 rounded-xl text-center backdrop-blur-md border border-alien-gold/30 hover:border-alien-gold/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <p className="text-4xl font-bold text-alien-gold mb-2 font-nasalization text-glow">{stat.value}</p>
                <p className="text-sm text-gray-300 font-[Exo]">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Partners */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-alien-gold mb-8 font-nasalization text-glow">Community Partners</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {partners.map((partner, index) => (
                <a
                  key={index}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-alien-space-dark/80 backdrop-blur-md rounded-xl p-4 border border-alien-gold/30 hover:border-alien-gold/60 transition-all duration-300 hover:transform hover:scale-105 group"
                >
                  <div className="text-center">
                    {partner.logo && (
                      <img
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        className="h-8 w-8 object-contain mx-auto mb-2 group-hover:scale-110 transition-transform"
                      />
                    )}
                    <h3 className="text-alien-gold font-semibold text-xs group-hover:text-alien-gold-light transition-colors font-[Exo]">
                      {partner.name}
                    </h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Clubs;
