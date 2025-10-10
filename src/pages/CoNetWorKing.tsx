import React, { useEffect } from 'react';

import { Network, TrendingUp, Shield, Coins, Sprout, Pickaxe, Layers, Dna, FlaskConical, Gamepad2, Database, Zap, Leaf, Building, Users, Landmark, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

type ServiceProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
};

const ServiceCard = ({ service }: { service: ServiceProps }) => (
  <Card className="bg-alien-space-dark/70 backdrop-blur-md border border-alien-gold/30 hover:border-alien-gold/60 transition-all duration-300 hover:scale-105">
    <CardHeader className="text-center">
      <div className={`mx-auto mb-4 p-3 rounded-full ${service.color}`}>
        {service.icon}
      </div>
      <CardTitle className="text-alien-gold font-[Atomic Age] text-xl">{service.title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-gray-300 font-[Exo] text-center leading-relaxed">
        {service.description}
      </CardDescription>
    </CardContent>
  </Card>
);

const CoNetWorKing: React.FC = () => {
  useEffect(() => {
    // Load CoinMarketCap widget script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://files.coinmarketcap.com/static/widget/currency.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const services: ServiceProps[] = [
    {
      title: "AMM (Automated Market Maker)",
      description: "Buy and sell cryptocurrencies in an automated and easy way! Facilitate exchange without the need for intermediaries with automated smart contracts using neural intelligence networks.",
      icon: <TrendingUp className="h-8 w-8 text-white" />,
      color: "bg-gradient-to-br from-blue-500 to-cyan-400"
    },
    {
      title: "BioFi",
      description: "Revolutionize biotechnology funding through decentralized finance. Support and invest in groundbreaking biological research and medical innovations.",
      icon: <Dna className="h-8 w-8 text-white" />,
      color: "bg-gradient-to-br from-teal-500 to-blue-400"
    },
    {
      title: "DeFi (Decentralized Finance)",
      description: "Explore a new financial approach. Access financial services without depending on traditional institutions, with your own private keys and without exposing sensitive data.",
      icon: <Shield className="h-8 w-8 text-white" />,
      color: "bg-gradient-to-br from-purple-500 to-pink-400"
    },
    {
      title: "DeSci (Decentralized Science)",
      description: "Transform scientific research through blockchain technology. Enable transparent, collaborative, and incentivized scientific discoveries.",
      icon: <FlaskConical className="h-8 w-8 text-white" />,
      color: "bg-gradient-to-br from-indigo-500 to-purple-400"
    },
    {
      title: "Dual Investment",
      description: "Maximize your profits by participating in different investment opportunities at the same time.",
      icon: <Layers className="h-8 w-8 text-white" />,
      color: "bg-gradient-to-br from-green-500 to-emerald-400"
    },
    {
      title: "Farming",
      description: "Sow and reap your rewards. Our permaculture farming system allows you to earn more cryptocurrencies by actively participating in the network.",
      icon: <Sprout className="h-8 w-8 text-white" />,
      color: "bg-gradient-to-br from-lime-500 to-green-400"
    },
    {
      title: "GameFi",
      description: "Play to earn in the new gaming economy. Combine gaming entertainment with financial rewards through blockchain-based gaming platforms.",
      icon: <Gamepad2 className="h-8 w-8 text-white" />,
      color: "bg-gradient-to-br from-violet-500 to-fuchsia-400"
    },
    {
      title: "IPFS",
      description: "Store and share data in a distributed file system. Access decentralized storage solutions that ensure data permanence and censorship resistance.",
      icon: <Database className="h-8 w-8 text-white" />,
      color: "bg-gradient-to-br from-slate-500 to-gray-400"
    },
    {
      title: "Mining",
      description: "Participate in network security and earn rewards through proof-of-work and proof-of-stake mining operations.",
      icon: <Pickaxe className="h-8 w-8 text-white" />,
      color: "bg-gradient-to-br from-yellow-500 to-orange-400"
    },
    {
      title: "QFS (Quantum Financial System)",
      description: "Experience next-generation quantum-secured financial transactions. Benefit from quantum-resistant cryptography and ultra-fast processing.",
      icon: <Zap className="h-8 w-8 text-white" />,
      color: "bg-gradient-to-br from-emerald-500 to-teal-400"
    },
    {
      title: "ReFi (Regenerative Finance)",
      description: "Finance that heals the planet. Invest in projects that create positive environmental and social impact while generating sustainable returns.",
      icon: <Leaf className="h-8 w-8 text-white" />,
      color: "bg-gradient-to-br from-green-600 to-lime-400"
    },
    {
      title: "RWA (Real World Assets)",
      description: "Tokenize real-world assets on the blockchain. Bridge traditional assets with digital finance for enhanced liquidity and accessibility.",
      icon: <Building className="h-8 w-8 text-white" />,
      color: "bg-gradient-to-br from-amber-500 to-orange-400"
    },
    {
      title: "SocialFi",
      description: "Monetize your social interactions and content creation. Earn rewards for engaging with communities and creating valuable social connections.",
      icon: <Users className="h-8 w-8 text-white" />,
      color: "bg-gradient-to-br from-pink-500 to-rose-400"
    },
    {
      title: "Staking",
      description: "Earn by staying active! Our Staking system allows you to earn rewards by keeping your cryptocurrencies with our CoNetWorKing.",
      icon: <Coins className="h-8 w-8 text-white" />,
      color: "bg-gradient-to-br from-red-500 to-pink-400"
    },
    {
      title: "TradFi",
      description: "Bridge traditional finance with decentralized systems. Integrate conventional financial services with blockchain technology for enhanced efficiency.",
      icon: <Landmark className="h-8 w-8 text-white" />,
      color: "bg-gradient-to-br from-blue-600 to-indigo-400"
    }
  ];

  const partners = [
    {
      name: "Aragon DAO",
      logo: "/lovable-uploads/AragonDAOLogo.svg",
      description: "Decentralized governance platform",
      url: "https://www.aragon.org/"
    },
    {
      name: "Behance",
      logo: "/lovable-uploads/BehanceLogo.jpeg",
      description: "Creative portfolio platform",
      url: "https://www.behance.net/"
    },
    {
      name: "Climate Reanalyzer",
      logo: "/lovable-uploads/ClimateReanalyzerLogo.svg",
      description: "Climate data visualization",
      url: "https://climatereanalyzer.org/"
    },
    {
      name: "CoinGecko",
      logo: "/lovable-uploads/CoinGeckoLogo.svg",
      description: "Cryptocurrency data platform",
      url: "https://www.coingecko.com/"
    },
    {
      name: "CoinGlass",
      logo: "/lovable-uploads/CoinGlassLogo.jpeg",
      description: "Crypto derivatives data platform",
      url: "https://www.coinglass.com/"
    },
    {
      name: "CoinMarketCap",
      logo: "/lovable-uploads/CoinMarketCapLogo.jpeg",
      description: "Cryptocurrency market data",
      url: "https://coinmarketcap.com/"
    },
    {
      name: "DappRadar",
      logo: "/lovable-uploads/DappRadarLogo.jpeg",
      description: "DApp analytics and discovery platform",
      url: "https://dappradar.com/"
    },
    {
      name: "Unity Learn",
      logo: "/lovable-uploads/UnityLearnLogo.svg",
      description: "Game development education",
      url: "https://learn.unity.com/"
    }
  ];

  const officialPartners = [
    {
      name: "Behance",
      avatar: "/lovable-uploads/BehanceLogo.jpeg",
      role: "Creative Portfolio Platform",
      location: "Global",
      url: "https://www.behance.net/"
    },
    {
      name: "Fiverr",
      avatar: "/lovable-uploads/FiverrLogo.png",
      role: "Freelance Services",
      location: "Global",
      url: "https://fiverr.com/"
    },
    {
      name: "Upwork",
      avatar: "https://www.upwork.com/ab/brontes/favicon.ico",
      role: "Remote Work Platform",
      location: "Global",
      url: "https://upwork.com/"
    },
    {
      name: "WeWork",
      avatar: "/lovable-uploads/WeWorkLogo.png",
      role: "Shared Workspaces",
      location: "Global",
      url: "https://wework.com/"
    },
    {
      name: "Workana",
      avatar: "https://www.workana.com/favicon.ico",
      role: "Latin America Freelance",
      location: "LATAM",
      url: "https://workana.com/"
    }
  ];

  const communityMembers = [
    {
      name: "Isabella Rodriguez",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&h=150&auto=format&fit=crop",
      role: "Chief Technology Officer",
      location: "Barcelona"
    },
    {
      name: "Emma Chen",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&h=150&auto=format&fit=crop",
      role: "Head of Blockchain Development",
      location: "Singapore"
    },
    {
      name: "Sophia Williams",
      avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=150&h=150&auto=format&fit=crop",
      role: "DeFi Strategy Director",
      location: "London"
    },
    {
      name: "Aria Nakamura",
      avatar: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=150&h=150&auto=format&fit=crop",
      role: "Smart Contract Lead",
      location: "Tokyo"
    },
    {
      name: "Valentina Martinez",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&h=150&auto=format&fit=crop",
      role: "NFT Creative Director",
      location: "Mexico City"
    },
    {
      name: "Zoe Anderson",
      avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=150&h=150&auto=format&fit=crop",
      role: "Treasury Manager",
      location: "New York"
    },
    {
      name: "Yuki Tanaka",
      avatar: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=150&h=150&auto=format&fit=crop",
      role: "Security Auditor",
      location: "Osaka"
    },
    {
      name: "Luna Silva",
      avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=150&h=150&auto=format&fit=crop",
      role: "Community Manager",
      location: "São Paulo"
    },
    {
      name: "Aisha Patel",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=150&h=150&auto=format&fit=crop",
      role: "Data Scientist",
      location: "Mumbai"
    },
    {
      name: "Natasha Volkov",
      avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=150&h=150&auto=format&fit=crop",
      role: "Tokenomics Specialist",
      location: "Dubai"
    },
    {
      name: "Carmen Diaz",
      avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=150&h=150&auto=format&fit=crop",
      role: "Marketing Director",
      location: "Madrid"
    },
    {
      name: "Priya Kumar",
      avatar: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?q=80&w=150&h=150&auto=format&fit=crop",
      role: "Governance Coordinator",
      location: "Bangalore"
    }
  ];

  const networkStats = [
    { label: "Active Nodes", value: "47,293", change: "+2.8%", icon: Network },
    { label: "BTC Volume", value: "$3.7B", change: "+15.2%", icon: Coins },
    { label: "Global Reach", value: "189", change: "+7 countries", icon: Globe },
    { label: "TPS Network", value: "28,459", change: "+31.4%", icon: Zap }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-alien-space-dark/80">
      {/* Background with darkened overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-alien-space-dark/90 to-alien-space-dark/70 z-0"></div>
      
      <main className="container mx-auto px-4 pt-32 pb-16 relative z-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section - No box, just content */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-alien-gold/20 rounded-full mb-6 border-2 border-alien-gold/40 backdrop-blur-md">
              <img 
                src="/lovable-uploads/CoNetWorKingLogo.png" 
                alt="CoNetWorKing Official Logo" 
                className="h-16 w-16 object-contain"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-alien-gold mb-8 font-[Atomic Age, Star Wars] text-glow drop-shadow-[0_0_30px_rgba(255,215,0,0.5)]">
              CoNetWorKing
            </h1>
            <p className="text-2xl text-white max-w-4xl mx-auto font-[Exo] leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              Connect with the future of decentralized finance through our comprehensive suite of blockchain services
            </p>
          </div>

          {/* Combined Bitcoin & Market Data Card */}
          <div className="mb-20">
            <Card className="bg-alien-space-dark/70 backdrop-blur-md border border-alien-gold/30 max-w-6xl mx-auto">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Bitcoin Real-Time Price */}
                  <div>
                    <CardTitle className="text-alien-gold font-[Atomic Age] text-2xl flex items-center gap-3 mb-6">
                      <Coins className="h-8 w-8" />
                      Bitcoin Real-Time Price
                    </CardTitle>
                    <div className="coinmarketcap-currency-widget" 
                         data-currencyid="1" 
                         data-base="USD" 
                         data-secondary="BTC" 
                         data-ticker="true" 
                         data-rank="true" 
                         data-marketcap="true" 
                         data-volume="true" 
                         data-statsticker="true" 
                         data-stats="USD">
                    </div>
                  </div>

                  {/* Market Sentiment */}
                  <div>
                    <CardTitle className="text-alien-gold font-[Atomic Age] text-2xl flex items-center gap-3 mb-6">
                      <TrendingUp className="h-8 w-8" />
                      Market Sentiment
                    </CardTitle>
                    <img 
                      src="https://alternative.me/crypto/fear-and-greed-index.png" 
                      alt="Latest Crypto Fear & Greed Index" 
                      className="w-full rounded-lg"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Network Stats Grid */}
          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {networkStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <Card key={index} className="bg-alien-space-dark/70 backdrop-blur-md border border-alien-gold/30 hover:border-alien-gold/60 transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <IconComponent className="h-8 w-8 text-alien-green mx-auto mb-4 animate-pulse" />
                      <div className="text-2xl font-bold text-alien-gold font-[Atomic Age] mb-2">
                        {stat.value}
                      </div>
                      <div className="text-gray-300 font-[Exo] text-sm mb-2">
                        {stat.label}
                      </div>
                      <div className="text-alien-green font-[Exo] text-xs">
                        {stat.change}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Services Grid */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-alien-gold mb-12 text-center font-[Atomic Age]">
              DAO | DAPP | DEX
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
            </div>
          </div>

          {/* DAO Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-alien-gold mb-12 text-center font-[Atomic Age]">
              Decentralized Autonomous Organization
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Governance */}
              <Card className="bg-alien-space-dark/70 backdrop-blur-md border border-alien-gold/30 hover:border-alien-gold/60 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-400 rounded-full">
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-alien-gold font-[Atomic Age] text-2xl">Governance</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 font-[Exo] leading-relaxed mb-6">
                    Participate in the democratic governance of AlienFlowSpace DAO. Every token holder has a voice in shaping the future of our ecosystem through transparent on-chain voting.
                  </CardDescription>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-alien-space-light/20 rounded-lg hover:bg-alien-space-light/30 transition-colors">
                      <Users className="h-5 w-5 text-alien-green flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-alien-gold font-[Exo] font-semibold mb-1">Token-Based Voting</h4>
                        <p className="text-gray-400 text-sm">Democratic decision-making with weighted voting power</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-alien-space-light/20 rounded-lg hover:bg-alien-space-light/30 transition-colors">
                      <Landmark className="h-5 w-5 text-alien-green flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-alien-gold font-[Exo] font-semibold mb-1">Treasury Management</h4>
                        <p className="text-gray-400 text-sm">Multi-sig wallet with transparent fund allocation</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-alien-space-light/20 rounded-lg hover:bg-alien-space-light/30 transition-colors">
                      <Network className="h-5 w-5 text-alien-green flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-alien-gold font-[Exo] font-semibold mb-1">On-Chain Execution</h4>
                        <p className="text-gray-400 text-sm">Automated smart contract execution of approved proposals</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-alien-space-light/20 rounded-lg hover:bg-alien-space-light/30 transition-colors">
                      <Zap className="h-5 w-5 text-alien-green flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-alien-gold font-[Exo] font-semibold mb-1">Quadratic Voting</h4>
                        <p className="text-gray-400 text-sm">Fair voting system preventing whale dominance</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Proposals */}
              <Card className="bg-alien-space-dark/70 backdrop-blur-md border border-alien-gold/30 hover:border-alien-gold/60 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full">
                      <Zap className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-alien-gold font-[Atomic Age] text-2xl">Proposals</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 font-[Exo] leading-relaxed mb-6">
                    Submit and vote on proposals that drive ecosystem evolution. Shape the future through transparent, community-driven decision-making.
                  </CardDescription>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-alien-space-light/20 rounded-lg hover:bg-alien-space-light/30 transition-colors">
                      <TrendingUp className="h-5 w-5 text-alien-green flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-alien-gold font-[Exo] font-semibold mb-1">Protocol Upgrades</h4>
                        <p className="text-gray-400 text-sm">Propose smart contract improvements and new features</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-alien-space-light/20 rounded-lg hover:bg-alien-space-light/30 transition-colors">
                      <Coins className="h-5 w-5 text-alien-green flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-alien-gold font-[Exo] font-semibold mb-1">Grant Proposals</h4>
                        <p className="text-gray-400 text-sm">Apply for DAO treasury funding with detailed roadmaps</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-alien-space-light/20 rounded-lg hover:bg-alien-space-light/30 transition-colors">
                      <Globe className="h-5 w-5 text-alien-green flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-alien-gold font-[Exo] font-semibold mb-1">Partnership Proposals</h4>
                        <p className="text-gray-400 text-sm">Suggest strategic partnerships and ecosystem integrations</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-alien-space-light/20 rounded-lg hover:bg-alien-space-light/30 transition-colors">
                      <Sprout className="h-5 w-5 text-alien-green flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-alien-gold font-[Exo] font-semibold mb-1">Community Initiatives</h4>
                        <p className="text-gray-400 text-sm">Launch educational programs and outreach campaigns</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex gap-3">
                    <Button className="flex-1 bg-alien-gold hover:bg-alien-gold/90 text-alien-space-dark font-[Exo]">
                      View Proposals
                    </Button>
                    <Button variant="outline" className="flex-1 border-alien-green text-alien-green hover:bg-alien-green/10 font-[Exo]">
                      Create New
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Partners Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-alien-gold mb-12 text-center font-[Atomic Age]">
              Our Partners
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partners.map((partner, index) => (
                <Card key={index} className="bg-alien-space-dark/70 backdrop-blur-md border border-alien-gold/30 hover:border-alien-gold/60 transition-all duration-300 hover:scale-105">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 w-20 h-20 rounded-full overflow-hidden border-2 border-alien-gold">
                      <a href={partner.url || '#'} target="_blank" rel="noopener noreferrer">
                        <img 
                          src={partner.logo} 
                          alt={partner.name} 
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                        />
                      </a>
                    </div>
                    <CardTitle className="text-alien-gold font-[Atomic Age] text-lg">
                      <a href={partner.url || '#'} target="_blank" rel="noopener noreferrer" className="hover:text-alien-gold-light">
                        {partner.name}
                      </a>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-gray-300 font-[Exo] text-center text-sm">
                      {partner.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Global Community Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-alien-gold mb-12 text-center font-[Atomic Age]">
              Global Community
            </h2>
            
            {/* Official Partners - no repeated title */}
            <div className="mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {officialPartners.map((partner, index) => (
                  <Card key={index} className="bg-gradient-to-br from-alien-gold/20 to-alien-green/20 backdrop-blur-md border border-alien-gold/50 hover:border-alien-gold/80 transition-all duration-300 hover:scale-105">
                    <CardHeader className="text-center pb-3">
                      <div className="mx-auto mb-3 w-16 h-16 rounded-full overflow-hidden border-2 border-alien-gold bg-white/10">
                        <a href={partner.url} target="_blank" rel="noopener noreferrer">
                          <img 
                            src={partner.avatar} 
                            alt={partner.name} 
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                          />
                        </a>
                      </div>
                      <CardTitle className="text-alien-gold font-[Atomic Age] text-base">
                        <a href={partner.url} target="_blank" rel="noopener noreferrer" className="hover:text-alien-gold-light">
                          {partner.name}
                        </a>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center pt-0 pb-4">
                      <CardDescription className="text-alien-green font-[Exo] text-xs mb-2">
                        {partner.role}
                      </CardDescription>
                      <p className="text-gray-300 font-[Exo] text-xs">
                        📍 {partner.location}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Community Members */}
            <div>
              <h3 className="text-2xl font-bold text-alien-green mb-8 text-center font-[Atomic Age]">
                Community Members
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {communityMembers.map((member, index) => (
                  <Card key={index} className="bg-alien-space-dark/70 backdrop-blur-md border border-alien-gold/30 hover:border-alien-gold/60 transition-all duration-300 hover:scale-105">
                    <CardHeader className="text-center">
                      <Avatar className="mx-auto mb-4 w-20 h-20 border-2 border-alien-gold">
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <CardTitle className="text-alien-gold font-[Atomic Age] text-lg">
                        {member.name}
                      </CardTitle>
                      <CardDescription className="text-alien-green font-[Exo]">
                        {member.role}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center pt-0">
                      <p className="text-gray-300 font-[Exo] text-sm">
                        📍 {member.location}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-alien-green/20 to-alien-gold/20 rounded-xl p-12 text-center backdrop-blur-md border border-alien-gold/30">
            <Network className="h-16 w-16 text-alien-gold mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-alien-gold mb-4 font-[Atomic Age]">
              Ready to Join the Network?
            </h2>
            <p className="text-gray-200 max-w-2xl mx-auto mb-8 font-[Exo] text-lg">
              Start your journey into decentralized finance and connect with a global network of innovators and investors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-alien-gold hover:bg-alien-gold/90 text-alien-space-dark font-[Exo] px-8 py-3 text-lg">
                Get Started
              </Button>
              <Button variant="outline" className="border-alien-green text-alien-green hover:bg-alien-green/10 font-[Exo] px-8 py-3 text-lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CoNetWorKing;
