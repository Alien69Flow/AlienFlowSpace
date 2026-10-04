import React, { useEffect } from 'react';
import { Network, TrendingUp, Shield, Coins, Sprout, Pickaxe, Layers, Dna, FlaskConical, Gamepad2, Database, Zap, Leaf, Building, Users, Landmark, Globe, Palette, Heart, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { motion } from 'framer-motion';
import DAODashboard from '@/components/DAODashboard';
import AlienTag from '@/components/alien/AlienTag';
import AlienButton from '@/components/alien/AlienButton';
import PriceTicker from '@/components/PriceTicker';

type ServiceProps = { title: string; description: string; icon: React.ReactNode };
type Partner = { name: string; url: string; logo: string; description: string };

const ServiceCard = ({ service, index }: { service: ServiceProps; index: number }) => (
  <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.05 }}
    className="border-r border-b border-af-border-hairline p-5 bg-af-surface/20 hover:bg-af-surface/40 transition-colors">
    <div className="p-3 border border-af-border mb-4 inline-flex">{service.icon}</div>
    <h3 className="text-alien-gold font-nasalization text-base mb-2">{service.title}</h3>
    <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
  </motion.div>
);

const PartnerSection: React.FC<{ title: string; partners: Partner[]; icon?: React.ReactNode; delay?: number }> = ({ title, partners, icon, delay = 0 }) => (
  <motion.div className="mb-10" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay }}>
    <div className="flex items-center gap-3 mb-4">
      {icon}
      <h3 className="text-lg font-bold text-alien-gold font-nasalization">{title}</h3>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-0 border-l border-t border-af-border-hairline">
      {partners.map((partner, index) => (
        <div key={index} className="border-r border-b border-af-border-hairline p-4 bg-af-surface/10 hover:bg-af-surface/30 transition-colors flex flex-col items-center text-center">
          <div className="w-16 h-16 mb-3 border border-af-border-hairline overflow-hidden flex items-center justify-center">
            <a href={partner.url} target="_blank" rel="noopener noreferrer">
              <img src={partner.logo} alt={partner.name} className="w-full h-full object-contain p-1" />
            </a>
          </div>
          <a href={partner.url} target="_blank" rel="noopener noreferrer" className="text-alien-gold font-nasalization text-sm hover:opacity-70 transition-opacity">
            {partner.name}
          </a>
          <p className="text-gray-400 text-xs mt-1">{partner.description}</p>
        </div>
      ))}
    </div>
  </motion.div>
);

const CoNetWorKing: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://files.coinmarketcap.com/static/widget/currency.js';
    script.async = true;
    document.head.appendChild(script);
    return () => { if (document.head.contains(script)) document.head.removeChild(script); };
  }, []);

  const services: ServiceProps[] = [
    { title: "AMM (Automated Market Maker)", description: "Buy and sell cryptocurrencies in an automated and easy way! Facilitate exchange without the need for intermediaries with automated smart contracts using neural intelligence networks.", icon: <TrendingUp className="h-6 w-6 text-alien-gold" /> },
    { title: "BioFi", description: "Revolutionize biotechnology funding through decentralized finance. Support and invest in groundbreaking biological research and medical innovations.", icon: <Dna className="h-6 w-6 text-alien-gold" /> },
    { title: "DeFi (Decentralized Finance)", description: "Explore a new financial approach. Access financial services without depending on traditional institutions, with your own private keys and without exposing sensitive data.", icon: <Shield className="h-6 w-6 text-alien-gold" /> },
    { title: "DeSci (Decentralized Science)", description: "Transform scientific research through blockchain technology. Enable transparent, collaborative, and incentivized scientific discoveries.", icon: <FlaskConical className="h-6 w-6 text-alien-gold" /> },
    { title: "Dual Investment", description: "Maximize your profits by participating in different investment opportunities at the same time.", icon: <Layers className="h-6 w-6 text-alien-gold" /> },
    { title: "Farming", description: "Sow and reap your rewards. Our permaculture farming system allows you to earn more cryptocurrencies by actively participating in the network.", icon: <Sprout className="h-6 w-6 text-alien-gold" /> },
    { title: "GameFi", description: "Play to earn in the new gaming economy. Combine gaming entertainment with financial rewards through blockchain-based gaming platforms.", icon: <Gamepad2 className="h-6 w-6 text-alien-gold" /> },
    { title: "IPFS", description: "Store and share data in a distributed file system. Access decentralized storage solutions that ensure data permanence and censorship resistance.", icon: <Database className="h-6 w-6 text-alien-gold" /> },
    { title: "Mining", description: "Participate in network security and earn rewards through proof-of-work and proof-of-stake mining operations.", icon: <Pickaxe className="h-6 w-6 text-alien-gold" /> },
    { title: "QFS (Quantum Financial System)", description: "Experience next-generation quantum-secured financial transactions. Benefit from quantum-resistant cryptography and ultra-fast processing.", icon: <Zap className="h-6 w-6 text-alien-gold" /> },
    { title: "ReFi (Regenerative Finance)", description: "Finance that heals the planet. Invest in projects that create positive environmental and social impact while generating sustainable returns.", icon: <Leaf className="h-6 w-6 text-alien-gold" /> },
    { title: "RWA (Real World Assets)", description: "Tokenize real-world assets on the blockchain. Bridge traditional assets with digital finance for enhanced liquidity and accessibility.", icon: <Building className="h-6 w-6 text-alien-gold" /> },
    { title: "SocialFi", description: "Monetize your social interactions and content creation. Earn rewards for engaging with communities and creating valuable social connections.", icon: <Users className="h-6 w-6 text-alien-gold" /> },
    { title: "Staking", description: "Earn by staying active! Our Staking system allows you to earn rewards by keeping your cryptocurrencies with our CoNetWorKing.", icon: <Coins className="h-6 w-6 text-alien-gold" /> },
    { title: "TradFi", description: "Bridge traditional finance with decentralized systems. Integrate conventional financial services with blockchain technology for enhanced efficiency.", icon: <Landmark className="h-6 w-6 text-alien-gold" /> }
  ];

  const academyPartners = [
    { name: "Academia", url: "https://www.academia.edu/", logo: "/lovable-uploads/Academy/Academia.svg", description: "Academic research network" },
    { name: "Alchemy", url: "https://www.alchemy.com/", logo: "/lovable-uploads/Academy/Alchemy.png", description: "Web3 development platform" },
    { name: "AulaFacil", url: "https://www.aulafacil.com/", logo: "/lovable-uploads/Academy/AulaFacil.png", description: "Free online courses (ES)" },
    { name: "Climate Reanalyzer", url: "https://climatereanalyzer.org/", logo: "/lovable-uploads/Academy/ClimateReanalyzer.svg", description: "Climate data & analytics" },
    { name: "Coursera", url: "https://www.coursera.org/", logo: "https://upload.wikimedia.org/wikipedia/commons/9/97/Coursera-Logo_600x600.svg", description: "Online university courses" },
    { name: "Cursa", url: "https://cursa.app/", logo: "/lovable-uploads/Academy/Cursa.webp", description: "Free education platform" },
    { name: "edX", url: "https://www.edx.org/", logo: "/lovable-uploads/Academy/edX.png", description: "University-level courses" },
    { name: "Explore", url: "https://explore.org/", logo: "/lovable-uploads/Academy/Explore.png", description: "Nature & animal cams" },
    { name: "FutureLearn", url: "https://www.futurelearn.com/", logo: "https://www.futurelearn.com/favicon.ico", description: "UK online courses" },
    { name: "Google for Education", url: "https://edu.google.com/", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", description: "Educational tools" },
    { name: "Google Growth", url: "https://grow.google/", logo: "/lovable-uploads/Academy/GrowGoogle.png", description: "Skills development" },
    { name: "HackerRank", url: "https://www.hackerrank.com/", logo: "/lovable-uploads/Academy/HackerRank.svg", description: "Coding challenges" },
    { name: "HackMD", url: "https://hackmd.io/", logo: "/lovable-uploads/Academy/HackMD.svg", description: "Collaborative markdown" },
    { name: "Hotmart", url: "https://www.hotmart.com/", logo: "/lovable-uploads/Academy/Hotmart.png", description: "Digital products platform" },
    { name: "Khan Academy", url: "https://khanacademy.org/", logo: "https://cdn.kastatic.org/images/khan-logo-dark-background.png", description: "Free world-class education" },
    { name: "MasterClass", url: "https://masterclass.com/", logo: "/lovable-uploads/Academy/MasterClass.jpeg", description: "Learn from the best" },
    { name: "MOOC", url: "https://mooc.org/", logo: "/lovable-uploads/Academy/Mooc.png", description: "Massive open online courses" },
    { name: "OEGlobal", url: "https://oeglobal.org/", logo: "/lovable-uploads/OEGlobalLogo.jpeg", description: "Open education network" },
    { name: "OpenUpEd", url: "https://openuped.eu/", logo: "/lovable-uploads/OpenUpEdLogo.jpeg", description: "European MOOCs" },
    { name: "Skillshare", url: "https://www.skillshare.com/", logo: "/lovable-uploads/SkillShareLogo.jpeg", description: "Creative skills platform" },
    { name: "Udacity", url: "https://www.udacity.com/", logo: "/lovable-uploads/UdacityLogo.svg", description: "Tech nanodegrees" },
    { name: "Udemy", url: "https://www.udemy.com/", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Udemy_logo.svg", description: "Online courses marketplace" },
    { name: "UNED", url: "https://iedra.uned.es/", logo: "/lovable-uploads/Academy/UNED.png", description: "Spanish distance university" },
    { name: "UNESCO", url: "https://www.unesco.org/", logo: "/lovable-uploads/UnescoLogo.svg", description: "UN education & culture" },
    { name: "Unity Learn", url: "https://learn.unity.com/", logo: "/lovable-uploads/UnityLearnLogo.svg", description: "Game development education" },
    { name: "Unreal Engine", url: "https://www.unrealengine.com/en-US/learn", logo: "https://upload.wikimedia.org/wikipedia/commons/d/da/Unreal_Engine_Logo.svg", description: "Game engine education" },
    { name: "UNSSC", url: "https://unssc.org/", logo: "/lovable-uploads/UNSSCLogo.png", description: "UN staff college" }
  ];

  const clubsPartners = {
    aiFlow: [
      { name: "Bolt", url: "https://lovable.dev/invite/VPTZ5JI", logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Bolt.new_logo.png", description: "AI-powered app builder" },
      { name: "ChatGPT", url: "https://chatgpt.com", logo: "https://commons.wikimedia.org/wiki/Special:FilePath/ChatGPT_logo.svg", description: "AI chatbot by OpenAI" },
      { name: "Claude", url: "https://claude.ai", logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Claude_AI_symbol.svg", description: "AI assistant by Anthropic" },
      { name: "GitHub Copilot", url: "https://github.com/features/copilot", logo: "https://commons.wikimedia.org/wiki/Special:FilePath/GitHub_Copilot_logo.svg", description: "AI code completion" },
      { name: "Gemini", url: "https://gemini.google.com", logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Google_Gemini_icon_2025.svg", description: "AI by Google" },
      { name: "Grok", url: "https://grok.x.ai", logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Grok_logo_without_text.svg", description: "AI by xAI" },
      { name: "Lovable", url: "https://lovable.dev", logo: "https://lovable.dev/favicon.ico", description: "AI app builder" },
      { name: "Suno", url: "https://suno.com", logo: "https://suno.com/favicon.ico", description: "AI music generation" }
    ],
    adsFlow: [
      { name: "AADS", url: "https://aads.com/advertise/?partner=2454032", logo: "https://aads.com/favicon.ico", description: "Ad network platform" },
      { name: "Google Ads", url: "https://ads.google.com", logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Google_Ads_2022.svg", description: "Search & display ads" },
      { name: "Meta Ads", url: "https://www.facebook.com/business/ads", logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Meta_Platforms_Inc._logo.svg", description: "Facebook & Instagram ads" },
      { name: "LinkedIn Ads", url: "https://www.linkedin.com/ad-campaign", logo: "https://commons.wikimedia.org/wiki/Special:FilePath/LinkedIn_icon_circle.svg", description: "Professional ad network" },
      { name: "Reddit Ads", url: "https://ads.reddit.com", logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Reddit_Logo.svg", description: "Community-based ads" },
      { name: "TikTok Ads", url: "https://ads.tiktok.com", logo: "https://commons.wikimedia.org/wiki/Special:FilePath/TikTok_logo.svg", description: "Short-video ads" },
      { name: "X Ads", url: "https://ads.x.com", logo: "https://commons.wikimedia.org/wiki/Special:FilePath/X_logo_2023.svg", description: "Social ads on X" }
    ],
    artFlow: [
      { name: "Audius", url: "https://audius.co/", logo: "/lovable-uploads/Clubs/Audius.svg", description: "Decentralized music streaming" },
      { name: "Sound.xyz", url: "https://www.sound.xyz/", logo: "/lovable-uploads/Clubs/SoundXYZ.svg", description: "Music NFT platform" }
    ],
    cashFlow: [
      { name: "Atomic Wallet", url: "https://atomicwallet.io/", logo: "/lovable-uploads/Clubs/AtomicWallet.svg", description: "Multi-crypto wallet" },
      { name: "Binance", url: "https://binance.com/", logo: "/lovable-uploads/Clubs/Binance.svg", description: "Leading crypto exchange" },
      { name: "BingX", url: "https://bingx.com/referral-program/QCXRKM", logo: "/lovable-uploads/Clubs/BingX.png", description: "Crypto trading platform" },
      { name: "Bitget", url: "https://partner.bitget.com/bg/Alien", logo: "/lovable-uploads/Clubs/Bitget.png", description: "Crypto derivatives exchange" },
      { name: "Bybit", url: "https://www.bybit.com/invite?ref=Q15Q4M", logo: "/lovable-uploads/Clubs/Bybit.png", description: "Crypto trading platform" },
      { name: "Coinbase", url: "https://www.coinbase.com/join/EC2PSZT?src", logo: "/lovable-uploads/Clubs/Coinbase.svg", description: "Trusted crypto exchange" },
      { name: "Crypto.com", url: "https://crypto.com/app/una5xskncn", logo: "/lovable-uploads/Clubs/Cryptocom.svg", description: "Crypto platform with card" },
      { name: "Exodus", url: "https://www.exodus.com/", logo: "/lovable-uploads/Clubs/Exodus.svg", description: "Beautiful crypto wallet" },
      { name: "Kraken", url: "https://www.kraken.com/", logo: "/lovable-uploads/Clubs/Kraken.svg", description: "Secure crypto exchange" },
      { name: "Ledger", url: "https://www.ledger.com/", logo: "/lovable-uploads/Clubs/Ledger.jpg", description: "Hardware wallet security" },
      { name: "Material Bitcoin", url: "https://materialbitcoin.com/AlienFlowSpace", logo: "/lovable-uploads/Clubs/MaterialBitcoin.png", description: "Physical Bitcoin storage" },
      { name: "MetaMask", url: "https://metamask.io/", logo: "/lovable-uploads/Clubs/MetaMask.svg", description: "Web3 wallet" },
      { name: "Nexo", url: "https://nexo.com/ref/x6ts3r0kb2?src", logo: "/lovable-uploads/Clubs/NexoLogo.svg", description: "Crypto banking platform" },
      { name: "OKX", url: "https://www.okx.com/", logo: "/lovable-uploads/Clubs/OKX.svg", description: "Global crypto exchange" },
      { name: "Phantom", url: "https://phantom.app/", logo: "/lovable-uploads/Clubs/PhantomLogo.svg", description: "Solana wallet" },
      { name: "Pionex", url: "https://www.pionex.com/es/signUp?r=0TTkucC3Gy7", logo: "/lovable-uploads/Clubs/PionexLogo.svg", description: "Crypto trading bot platform" },
      { name: "SafePal", url: "https://www.safepal.com/", logo: "/lovable-uploads/Clubs/SafePal.png", description: "Secure crypto wallet" },
      { name: "Tangem", url: "https://tangem.com/invite/AN85VR", logo: "/lovable-uploads/Clubs/Tangem.png", description: "NFC card hardware wallet" },
      { name: "Trezor", url: "https://trezor.io/", logo: "/lovable-uploads/Clubs/Trezor.svg", description: "Hardware wallet pioneer" },
      { name: "Trust Wallet", url: "https://trustwallet.com/", logo: "/lovable-uploads/Clubs/Trust Wallet.svg", description: "Multi-chain wallet" }
    ],
    dataFlow: [
      { name: "CoinGecko", url: "https://www.coingecko.com/", logo: "/lovable-uploads/CoinGeckoLogo.svg", description: "Crypto data platform" },
      { name: "CoinGlass", url: "https://www.coinglass.com/", logo: "/lovable-uploads/CoinGlassLogo.jpeg", description: "Crypto derivatives data" },
      { name: "CoinMarketCap", url: "https://coinmarketcap.com/", logo: "/lovable-uploads/CoinMarketCapLogo.jpeg", description: "Crypto market data" },
      { name: "DappRadar", url: "https://dappradar.com/", logo: "/lovable-uploads/DappRadarLogo.jpeg", description: "DApp analytics" }
    ],
    ecoFlow: [
      { name: "Celo", url: "https://celo.org/", logo: "https://cryptologos.cc/logos/celo-celo-logo.svg", description: "Carbon-negative blockchain" },
      { name: "Gitcoin", url: "https://gitcoin.co/", logo: "https://s2.coinmarketcap.com/static/img/coins/200x200/5765.png", description: "Open-source funding" },
      { name: "KlimaDAO", url: "https://www.klimadao.finance/", logo: "https://cryptologos.cc/logos/klima-dao-klima-logo.svg", description: "Carbon offset DAO" },
      { name: "Moss.Earth", url: "https://moss.earth/", logo: "https://www.moss.earth/wp-content/uploads/2021/07/moss-logo-green.svg", description: "Carbon credits trading" },
      { name: "Toucan Protocol", url: "https://toucan.earth/", logo: "https://assets.coingecko.com/coins/images/21176/large/download_%281%29.png", description: "On-chain carbon credits" }
    ],
    gameFlow: [
      { name: "Arena.gg", url: "https://www.arenagg.com/", logo: "/lovable-uploads/Clubs/ArenaGG.png", description: "eSports tournaments" },
      { name: "Battlefy", url: "https://battlefy.com/", logo: "/lovable-uploads/Clubs/Battlefy.svg", description: "Tournament platform" },
      { name: "Blitz.gg", url: "https://blitz.gg/", logo: "/lovable-uploads/Clubs/BlitzGG.svg", description: "Gaming performance" },
      { name: "ESL Gaming", url: "https://esl.com/", logo: "/lovable-uploads/Clubs/ESL.svg", description: "eSports organization" },
      { name: "LVP Global", url: "https://lvp.global/", logo: "/lovable-uploads/Clubs/LVP.PNG", description: "eSports leagues" },
      { name: "ZEBEDEE", url: "https://zbd.link/hcHi/invite?af_sub1=S2S7IY", logo: "/lovable-uploads/Clubs/ZBD.svg", description: "Bitcoin gaming platform" }
    ],
    healthFlow: [
      { name: "Fitbit", url: "https://www.fitbit.com/", logo: "https://upload.wikimedia.org/wikipedia/commons/6/60/Fitbit_logo.svg", description: "Fitness tracking" },
      { name: "Headspace", url: "https://www.headspace.com/", logo: "https://upload.wikimedia.org/wikipedia/commons/4/47/Headspace_app_logo.png", description: "Meditation & mindfulness" },
      { name: "MyFitnessPal", url: "https://www.myfitnesspal.com/", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6f/MyFitnessPal_logo.svg", description: "Nutrition tracking" },
      { name: "Strava", url: "https://www.strava.com/", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Strava_Logo.svg", description: "Athletic tracking" },
      { name: "Whoop", url: "https://www.whoop.com/", logo: "https://cdn.worldvectorlogo.com/logos/whoop-2.svg", description: "Health performance" }
    ],
    metaFlow: [
      { name: "Soundcloud", url: "https://soundcloud.com/", logo: "/lovable-uploads/Clubs/Soundcloud.svg", description: "Audio distribution" },
      { name: "Spotify", url: "https://www.spotify.com/", logo: "/lovable-uploads/Clubs/Spotify.svg", description: "Music streaming" },
      { name: "YouTube", url: "https://www.youtube.com/", logo: "/lovable-uploads/Clubs/YouTube.svg", description: "Video streaming platform" }
    ],
    quantumFlow: [
      { name: "Aragon DAO", url: "https://www.aragon.org/", logo: "/lovable-uploads/AragonDAOLogo.svg", description: "DAO governance platform" },
      { name: "Pi Network", url: "https://minepi.com/Aitor69Alien", logo: "/lovable-uploads/Clubs/PiNetwork.svg", description: "Mobile crypto mining" }
    ],
    spaceFlow: [
      { name: "ESA", url: "https://www.esa.int/", logo: "/lovable-uploads/Academy/ESA.svg", description: "European Space Agency" },
      { name: "KAGRA", url: "https://gwcenter.icrr.u-tokyo.ac.jp/en/", logo: "/lovable-uploads/Academy/KAGRA.svg", description: "Japanese gravitational wave" },
      { name: "LIGO", url: "https://www.ligo.caltech.edu/", logo: "/lovable-uploads/Academy/LIGO.png", description: "Gravitational wave research" },
      { name: "LSC", url: "https://www.ligo.org/", logo: "/lovable-uploads/Academy/LSC.png", description: "LIGO Scientific Collaboration" },
      { name: "Map of the Universe", url: "https://mapoftheuniverse.net/", logo: "/lovable-uploads/Academy/Universe.jpg", description: "Interactive cosmic map" },
      { name: "NASA Eyes", url: "https://eyes.nasa.gov/apps/solar-system/#/home", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg", description: "Solar system explorer" },
      { name: "Virgo", url: "https://www.virgo-gw.eu/", logo: "/lovable-uploads/Academy/Virgo.svg", description: "European gravitational wave" }
    ],
    weedFlow: [
      { name: "Leafly", url: "https://www.leafly.com/", logo: "/lovable-uploads/Clubs/Leafly.svg", description: "Cannabis marketplace" },
      { name: "Weedmaps", url: "https://weedmaps.com/", logo: "/lovable-uploads/Clubs/Weedmaps.svg", description: "Cannabis directory" }
    ],
    xFlow: [
      { name: "Fansly", url: "https://fansly.com/", logo: "/lovable-uploads/Clubs/Fansly.svg", description: "Creator monetization" },
      { name: "OnlyFans", url: "https://onlyfans.com/", logo: "/lovable-uploads/Clubs/OnlyFans.svg", description: "Content creator platform" },
      { name: "Pornhub", url: "https://www.pornhub.com/", logo: "/lovable-uploads/Clubs/Pornhub.svg", description: "Adult entertainment" },
      { name: "XHamster", url: "https://xhamster.com/", logo: "/lovable-uploads/Clubs/XHamster.svg", description: "Adult content platform" },
      { name: "YouPorn", url: "https://www.youporn.com/", logo: "/lovable-uploads/Clubs/YouPorn.svg", description: "Adult video site" }
    ]
  };

  const officialPartners = [
    { name: "Behance", avatar: "/lovable-uploads/BehanceLogo.jpeg", role: "Creative Portfolio Platform", location: "Global", url: "https://www.behance.net/" },
    { name: "Fiverr", avatar: "/lovable-uploads/FiverrLogo.png", role: "Freelance Services", location: "Global", url: "https://fiverr.com/" },
    { name: "Upwork", avatar: "https://www.upwork.com/ab/brontes/favicon.ico", role: "Remote Work Platform", location: "Global", url: "https://upwork.com/" },
    { name: "WeWork", avatar: "/lovable-uploads/WeWorkLogo.png", role: "Shared Workspaces", location: "Global", url: "https://wework.com/" },
    { name: "Workana", avatar: "https://www.workana.com/favicon.ico", role: "Latin America Freelance", location: "LATAM", url: "https://workana.com/" }
  ];

  const communityMembers = [
    { name: "Isabella Rodriguez", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&h=150&auto=format&fit=crop", role: "Chief Technology Officer", location: "Barcelona" },
    { name: "Emma Chen", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&h=150&auto=format&fit=crop", role: "Head of Blockchain Development", location: "Singapore" },
    { name: "Sophia Williams", avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=150&h=150&auto=format&fit=crop", role: "DeFi Strategy Director", location: "London" },
    { name: "Aria Nakamura", avatar: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=150&h=150&auto=format&fit=crop", role: "Smart Contract Lead", location: "Tokyo" },
    { name: "Valentina Martinez", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&h=150&auto=format&fit=crop", role: "NFT Creative Director", location: "Mexico City" },
    { name: "Zoe Anderson", avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=150&h=150&auto=format&fit=crop", role: "Treasury Manager", location: "New York" },
    { name: "Yuki Tanaka", avatar: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=150&h=150&auto=format&fit=crop", role: "Security Auditor", location: "Osaka" },
    { name: "Luna Silva", avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=150&h=150&auto=format&fit=crop", role: "Community Manager", location: "São Paulo" },
    { name: "Aisha Patel", avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=150&h=150&auto=format&fit=crop", role: "Data Scientist", location: "Mumbai" },
    { name: "Natasha Volkov", avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=150&h=150&auto=format&fit=crop", role: "Tokenomics Specialist", location: "Dubai" },
    { name: "Carmen Diaz", avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=150&h=150&auto=format&fit=crop", role: "Marketing Director", location: "Madrid" },
    { name: "Priya Kumar", avatar: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?q=80&w=150&h=150&auto=format&fit=crop", role: "Governance Coordinator", location: "Bangalore" }
  ];

  const networkStats = [
    { label: "195 Countries", value: "195", change: "DAO Members", icon: Globe, isPlanet: true },
    { label: "Data Storage", value: "161 YB", change: "Available", icon: Database },
    { label: "Active Nodes", value: "47,293", change: "+2.8%", icon: Network }
  ];

  const governanceItems = [
    { icon: <Users className="h-5 w-5 text-alien-green" />, title: "Token-Based Voting", text: "Democratic decision-making with weighted voting power" },
    { icon: <Landmark className="h-5 w-5 text-alien-green" />, title: "Treasury Management", text: "Multi-sig wallet with transparent fund allocation" },
    { icon: <Network className="h-5 w-5 text-alien-green" />, title: "On-Chain Execution", text: "Automated smart contract execution of approved proposals" },
    { icon: <Zap className="h-5 w-5 text-alien-green" />, title: "Quadratic Voting", text: "Fair voting system preventing whale dominance" }
  ];

  const proposalItems = [
    { icon: <TrendingUp className="h-5 w-5 text-alien-green" />, title: "Protocol Upgrades", text: "Propose smart contract improvements and new features" },
    { icon: <Coins className="h-5 w-5 text-alien-green" />, title: "Grant Proposals", text: "Apply for DAO treasury funding with detailed roadmaps" },
    { icon: <Globe className="h-5 w-5 text-alien-green" />, title: "Partnership Proposals", text: "Suggest strategic partnerships and ecosystem integrations" },
    { icon: <Sprout className="h-5 w-5 text-alien-green" />, title: "Community Initiatives", text: "Launch educational programs and outreach campaigns" }
  ];

  return (
    <div className="min-h-screen pb-16">
      <div className="w-full border-b border-af-border-hairline">
        <PriceTicker />
      </div>
      <main className="container mx-auto px-4 pt-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 border border-alien-gold/40 mb-6">
              <img src="/lovable-uploads/CoNetWorKingLogo.png" alt="CoNetWorKing Logo" className="h-14 w-14 object-contain" />
            </div>
            <div className="flex items-center justify-center gap-3 mb-4 flex-wrap">
              <AlienTag color="green">CONNECT</AlienTag>
              <AlienTag color="muted">DAO | DAPP | DEX</AlienTag>
            </div>
            <h1 className="md:text-6xl font-bold text-alien-green mb-6 font-nasalization af-heading-underline inline-block text-4xl glow-pulse-entry">CoNetWorKing</h1>
            <p className="text-xl text-alien-gold max-w-3xl mx-auto leading-relaxed">Connect with the future of decentralized finance through our comprehensive suite of blockchain services</p>
          </div>

          {/* Bitcoin & Market Data */}
          <div className="mb-12">
            <div className="border border-af-border bg-af-surface/20 p-6 md:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-4">
                  <div className="flex items-center gap-3 mb-4 pb-4 border-b border-af-border-hairline">
                    <div className="p-2 border border-af-border"><Coins className="h-6 w-6 text-alien-gold" /></div>
                    <h3 className="font-nasalization text-base text-alien-green">Bitcoin Rank Real-Time Price | Market Cap & Volume</h3>
                  </div>
                  <div className="border border-af-border-hairline p-4">
                    <div className="coinmarketcap-currency-widget" data-currencyid="1" data-base="USD" data-secondary="BTC" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-statsticker="true" data-stats="USD" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-4 pb-4 border-b border-af-border-hairline">
                    <div className="p-2 border border-af-border"><TrendingUp className="h-6 w-6 text-alien-green" /></div>
                    <h3 className="font-nasalization text-base text-alien-green">Market Sentiment</h3>
                  </div>
                  <div className="border border-af-border-hairline p-3">
                    <img src="https://alternative.me/crypto/fear-and-greed-index.png" alt="Latest Crypto Fear & Greed Index" className="w-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Network Stats */}
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-l border-t border-af-border-hairline">
              {networkStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="border-r border-b border-af-border-hairline p-6 text-center bg-af-surface/20 hover:bg-af-surface/40 transition-colors">
                    {stat.isPlanet ? (
                      <div className="relative w-20 h-20 mx-auto mb-4">
                        <img src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=150&h=150&fit=crop" alt="Planet Earth" className="w-full h-full object-cover rounded-full" />
                      </div>
                    ) : (
                      <IconComponent className="h-7 w-7 text-alien-green mx-auto mb-4" />
                    )}
                    <div className="text-2xl font-bold text-alien-gold font-nasalization mb-1">{stat.value}</div>
                    <div className="text-gray-300 text-sm mb-1">{stat.label}</div>
                    <div className="text-alien-green text-xs">{stat.change}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <AlienTag color="gold">SERVICES</AlienTag>
            </div>
            <h2 className="text-3xl font-bold text-alien-gold mb-6 font-nasalization af-heading-underline inline-block">DAO | DAPP | DEX</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-af-border-hairline">
              {services.map((service, index) => <ServiceCard key={index} service={service} index={index} />)}
            </div>
          </div>

          {/* DAO Section */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <AlienTag color="green">GOVERNANCE</AlienTag>
            </div>
            <h2 className="text-3xl font-bold text-alien-gold mb-6 font-nasalization af-heading-underline inline-block">Decentralized Autonomous Organization</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-l border-t border-af-border-hairline mb-6">
              {/* Governance */}
              <div className="border-r border-b border-af-border-hairline p-6 bg-af-surface/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 border border-af-border"><Shield className="h-6 w-6 text-alien-gold" /></div>
                  <h3 className="text-xl font-nasalization text-alien-gold">Governance</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">Participate in the democratic governance of AlienFlowSpace DAO. Every token holder has a voice in shaping the future of our ecosystem through transparent on-chain voting.</p>
                <div className="space-y-2">
                  {governanceItems.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 border border-af-border-hairline hover:border-af-border transition-colors">
                      {item.icon}
                      <div>
                        <h4 className="text-alien-gold font-nasalization text-sm mb-0.5">{item.title}</h4>
                        <p className="text-gray-400 text-xs">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Proposals */}
              <div className="border-r border-b border-af-border-hairline p-6 bg-af-surface/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 border border-af-border"><Zap className="h-6 w-6 text-alien-gold" /></div>
                  <h3 className="text-xl font-nasalization text-alien-gold">Proposals</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">Submit and vote on proposals that drive ecosystem evolution. Shape the future through transparent, community-driven decision-making.</p>
                <div className="space-y-2">
                  {proposalItems.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 border border-af-border-hairline hover:border-af-border transition-colors">
                      {item.icon}
                      <div>
                        <h4 className="text-alien-gold font-nasalization text-sm mb-0.5">{item.title}</h4>
                        <p className="text-gray-400 text-xs">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 space-y-2">
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-alien-gold hover:bg-alien-gold/80 text-af-bg font-nasalization text-xs h-9" style={{ borderRadius: 0 }}>View Proposals</Button>
                    <Button variant="outline" className="flex-1 border-af-border text-alien-green hover:bg-alien-green/10 font-nasalization text-xs h-9" style={{ borderRadius: 0 }}>Create New</Button>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <a href="/alien-trip" className="flex-1"><Button className="w-full bg-af-surface/40 border border-af-border text-alien-gold hover:bg-af-surface/60 font-nasalization text-xs h-9" style={{ borderRadius: 0 }}>View on Alientrip</Button></a>
                    <a href="https://alienflowspace.gitbook.io/DAO" target="_blank" rel="noopener noreferrer" className="flex-1"><Button className="w-full bg-af-surface/40 border border-af-border text-alien-green hover:bg-af-surface/60 font-nasalization text-xs h-9" style={{ borderRadius: 0 }}>Read Docs on Gitbook</Button></a>
                  </div>
                </div>
              </div>
            </div>
            <DAODashboard />
          </div>

          {/* Partners */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <AlienTag color="gold">PARTNER ECOSYSTEM</AlienTag>
            </div>
            <h2 className="text-3xl font-bold text-alien-gold mb-2 font-nasalization af-heading-underline inline-block">Our Partners Ecosystem</h2>
            <p className="text-gray-300 mb-8 max-w-3xl">Discover our network of partners across Academy and specialized Clubs</p>

            <PartnerSection title="Academy" partners={academyPartners} delay={0} />
            <PartnerSection title="AIFlow" partners={clubsPartners.aiFlow} color="" icon={<Zap className="h-5 w-5 text-alien-gold" />} delay={0.05} />
            <PartnerSection title="AdsFlow" partners={clubsPartners.adsFlow} color="" icon={<TrendingUp className="h-5 w-5 text-alien-gold" />} delay={0.07} />
            <PartnerSection title="ArtFlow" partners={clubsPartners.artFlow} color="" icon={<Palette className="h-5 w-5 text-alien-gold" />} delay={0.1} />
            <PartnerSection title="CashFlow" partners={clubsPartners.cashFlow} color="" delay={0.2} />
            <PartnerSection title="DataFlow" partners={clubsPartners.dataFlow} color="" delay={0.3} />
            <PartnerSection title="EcoFlow" partners={clubsPartners.ecoFlow} color="" icon={<Leaf className="h-5 w-5 text-alien-gold" />} delay={0.4} />
            <PartnerSection title="GameFlow" partners={clubsPartners.gameFlow} color="" delay={0.5} />
            <PartnerSection title="HealthFlow" partners={clubsPartners.healthFlow} color="" icon={<Heart className="h-5 w-5 text-alien-gold" />} delay={0.6} />
            <PartnerSection title="MetaFlow" partners={clubsPartners.metaFlow} color="" delay={0.7} />
            <PartnerSection title="QuantumFlow" partners={clubsPartners.quantumFlow} color="" delay={0.8} />
            <PartnerSection title="SpaceFlow" partners={clubsPartners.spaceFlow} color="" icon={<Rocket className="h-5 w-5 text-alien-gold" />} delay={0.9} />
            <PartnerSection title="WeedFlow" partners={clubsPartners.weedFlow} color="" icon={<Leaf className="h-5 w-5 text-alien-gold" />} delay={1.0} />
            <PartnerSection title="XFlow" partners={clubsPartners.xFlow} color="" delay={1.1} />
          </div>

          {/* Global Community */}
          <motion.div className="mb-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-3 mb-4">
              <AlienTag color="green">COMMUNITY</AlienTag>
            </div>
            <h2 className="text-3xl font-bold text-alien-gold mb-6 font-nasalization af-heading-underline inline-block">Global Community</h2>

            {/* Official Partners */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0 border-l border-t border-af-border-hairline mb-8">
              {officialPartners.map((partner, index) => (
                <div key={index} className="border-r border-b border-af-border-hairline p-4 bg-af-surface/10 hover:bg-af-surface/30 transition-colors flex flex-col items-center text-center">
                  <div className="w-14 h-14 mb-3 border border-af-border overflow-hidden bg-white/5">
                    <a href={partner.url} target="_blank" rel="noopener noreferrer">
                      <img src={partner.avatar} alt={partner.name} className="w-full h-full object-contain p-1" />
                    </a>
                  </div>
                  <a href={partner.url} target="_blank" rel="noopener noreferrer" className="text-alien-gold font-nasalization text-sm">{partner.name}</a>
                  <p className="text-alien-green text-xs mt-1">{partner.role}</p>
                  <p className="text-gray-400 text-xs mt-1">{partner.location}</p>
                </div>
              ))}
            </div>

            {/* Community Members */}
            <h3 className="text-xl font-bold text-alien-green mb-4 font-nasalization">Community Members</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-af-border-hairline">
              {communityMembers.map((member, index) => (
                <div key={index} className="border-r border-b border-af-border-hairline p-5 bg-af-surface/10 hover:bg-af-surface/30 transition-colors flex items-center gap-4">
                  <Avatar className="w-14 h-14 border border-af-border flex-shrink-0" style={{ borderRadius: 0 }}>
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="text-alien-gold font-nasalization text-sm">{member.name}</h4>
                    <p className="text-alien-green text-xs">{member.role}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{member.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <div className="border border-af-border bg-af-surface/20 p-8 md:p-10 text-center">
            <Network className="h-12 w-12 text-alien-gold mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-alien-gold mb-3 font-nasalization">Ready to Join the Network?</h2>
            <p className="text-gray-200 max-w-2xl mx-auto mb-6">Start your journey into decentralized finance and connect with a global network of innovators and investors.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <AlienButton variant="primary" to="/alien-trip" className="!px-8 !py-3 !text-sm">Get Started</AlienButton>
              <AlienButton variant="outline" to="/about" className="!px-8 !py-3 !text-sm">Learn More</AlienButton>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CoNetWorKing;
