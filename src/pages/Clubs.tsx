import React from 'react';
import { motion } from 'framer-motion';
import FeaturedClubCard from '@/components/FeaturedClubCard';
import EcoProductCarousel from '@/components/EcoProductCarousel';
import { Users, Rocket, Calendar, Zap, Shield, DollarSign, Leaf, Gamepad2, Music, Heart, Eye, Dna, Database, FlaskConical, Search, TrendingUp } from 'lucide-react';
import AlienTag from '@/components/alien/AlienTag';
import AlienButton from '@/components/alien/AlienButton';

type ClubProps = {
  name: string;
  description: string;
  members: number;
  icon: React.ReactNode;
  category: string;
  categoryColor: string;
  bgColor: string;
};

const ClubCard = ({ club, index }: { club: ClubProps; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.08 }}
    className="border border-af-border bg-af-surface/20 hover:bg-af-surface/40 transition-colors p-6"
  >
    <div className="flex justify-between items-start mb-4">
      <div className="p-3 border border-af-border">{club.icon}</div>
      <AlienTag color="muted">{club.category}</AlienTag>
    </div>
    <h3 className="text-xl font-bold text-alien-gold mb-3 font-nasalization">{club.name}</h3>
    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{club.description}</p>
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Users className="h-4 w-4 text-alien-green" />
        <span className="text-sm text-alien-green font-nasalization">{club.members.toLocaleString()} members</span>
      </div>
      <AlienButton variant="outline" className="!text-xs">Join Club</AlienButton>
    </div>
  </motion.div>
);

const Clubs: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [activeCategory, setActiveCategory] = React.useState<string | null>(null);

  const featuredClubs = [
    {
      name: 'Δ AIFlow', description: 'Advancing artificial intelligence through decentralized computing, neural networks, and collaborative AI model development with the most powerful AI tools and assistants.',
      members: 11234, icon: <Zap className="h-6 w-6 text-alien-gold" />, category: 'AI', categoryColor: '', bgColor: '',
      sections: [{ title: 'AI Tools & Assistants', description: 'AI-powered platforms for app building, coding, chat, music generation, and creative workflows', icon: <Zap className="h-4 w-4" />, color: '', platforms: [
        { name: 'Bolt', url: 'https://bolt.cello.so/3ULpYIYBm4L', icon: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bolt.new_logo.png', description: 'AI-powered app & website builder' },
        { name: 'ChatGPT', url: 'https://chatgpt.com', icon: 'https://commons.wikimedia.org/wiki/Special:FilePath/ChatGPT_logo.svg', description: 'AI chatbot by OpenAI' },
        { name: 'Claude', url: 'https://claude.ai', icon: 'https://commons.wikimedia.org/wiki/Special:FilePath/Claude_AI_symbol.svg', description: 'AI assistant by Anthropic' },
        { name: 'GitHub Copilot', url: 'https://github.com/features/copilot', icon: 'https://commons.wikimedia.org/wiki/Special:FilePath/GitHub_Copilot_logo.svg', description: 'AI code completion tool' },
        { name: 'Gemini', url: 'https://gemini.google.com', icon: 'https://commons.wikimedia.org/wiki/Special:FilePath/Google_Gemini_icon_2025.svg', description: 'AI assistant by Google' },
        { name: 'Grok', url: 'https://grok.x.ai', icon: 'https://commons.wikimedia.org/wiki/Special:FilePath/Grok_logo_without_text.svg', description: 'AI by xAI' },
        { name: 'Lovable', url: 'https://lovable.dev', icon: 'https://lovable.dev/favicon.ico', description: 'AI app builder platform' },
        { name: 'Suno', url: 'https://suno.com', icon: 'https://suno.com/favicon.ico', description: 'AI music generation' }
      ]}]
    },
    {
      name: 'Δ AdsFlow', description: 'Maximizing reach and revenue through decentralized advertising networks, programmatic ad platforms, and community-driven marketing solutions.',
      members: 8421, icon: <TrendingUp className="h-6 w-6 text-alien-gold" />, category: 'Ads', categoryColor: '', bgColor: '',
      sections: [{ title: 'Advertising Platforms', description: 'Ad networks and marketing platforms for targeted campaigns, programmatic ads, and revenue optimization', icon: <TrendingUp className="h-4 w-4" />, color: '', platforms: [
        { name: 'AADS', url: 'https://aads.com/advertise/?partner=2454032', icon: 'https://aads.com/favicon.ico', description: 'Ad network platform' },
        { name: 'Google Ads', url: 'https://ads.google.com', icon: 'https://commons.wikimedia.org/wiki/Special:FilePath/Google_Ads_2022.svg', description: 'Search & display advertising' },
        { name: 'Meta Ads', url: 'https://www.facebook.com/business/ads', icon: 'https://commons.wikimedia.org/wiki/Special:FilePath/Meta_Platforms_Inc._logo.svg', description: 'Facebook & Instagram ads' },
        { name: 'LinkedIn Ads', url: 'https://www.linkedin.com/ad-campaign', icon: 'https://commons.wikimedia.org/wiki/Special:FilePath/LinkedIn_icon_circle.svg', description: 'Professional ad network' },
        { name: 'Reddit Ads', url: 'https://ads.reddit.com', icon: 'https://commons.wikimedia.org/wiki/Special:FilePath/Reddit_Logo.svg', description: 'Community-based ads' },
        { name: 'TikTok Ads', url: 'https://ads.tiktok.com', icon: 'https://commons.wikimedia.org/wiki/Special:FilePath/TikTok_logo.svg', description: 'Short-video ads' },
        { name: 'X Ads', url: 'https://ads.x.com', icon: 'https://commons.wikimedia.org/wiki/Special:FilePath/X_logo_2023.svg', description: 'Social ads on X' }
      ]}]
    },
    {
      name: 'Δ ArtFlow', description: 'Harmonizing the multiverse through decentralized music creation, NFT releases, and community-driven audio experiences.',
      members: 18654, icon: <Music className="h-6 w-6 text-alien-gold" />, category: 'Music & Art NFTs', categoryColor: '', bgColor: '',
      sections: [{ title: 'Music & Audio Platforms', description: 'Decentralized music streaming, NFT releases, and artist monetization platforms', icon: <Music className="h-4 w-4" />, color: '', platforms: [
        { name: 'Audius', url: 'https://audius.co/', icon: '/lovable-uploads/Clubs/Audius.svg', description: 'Decentralized music streaming with artist NFTs' },
        { name: 'Sound.xyz', url: 'https://sound.xyz/', icon: '/lovable-uploads/Clubs/SoundXYZ.svg', description: 'Limited edition music NFTs and releases' },
        { name: 'SoundCloud', url: 'https://soundcloud.com/', icon: '/lovable-uploads/Clubs/Soundcloud.svg', description: 'Global music sharing and discovery platform' },
        { name: 'Spotify', url: 'https://open.spotify.com/', icon: '/lovable-uploads/Clubs/Spotify.svg', description: 'Leading music streaming service worldwide' },
        { name: 'YouTube', url: 'https://youtube.com/', icon: '/lovable-uploads/Clubs/YouTube.svg', description: 'Video and music content sharing platform' }
      ]}]
    },
    {
      name: 'Δ CashFlow', description: 'Advanced earning strategies and winning analysis for interplanetary assets through AI Agents, Automated Market Makers, BioFi, DeFi, DePin, DeSci protocols, Mining, ReFi, RWA, SocialFi, Staking, yield farming, and strategic portfolio management.',
      members: 314159, icon: <DollarSign className="h-6 w-6 text-alien-gold" />, category: 'CashFlow', categoryColor: '', bgColor: '',
      sections: [
        { title: 'Card Wallets (MasterCard & VISA)', description: 'Crypto debit cards for everyday spending with cashback rewards and banking features', icon: <DollarSign className="h-4 w-4" />, color: '', platforms: [
          { name: 'Binance', url: 'https://binance.com/', icon: '/lovable-uploads/Clubs/Binance.svg', description: 'Crypto trading with card and earn rewards' },
          { name: 'BingX', url: 'https://bingx.com/referral-program/QCXRKM', icon: '/lovable-uploads/Clubs/BingX.png', description: 'Copy trading platform with crypto card' },
          { name: 'Bitget', url: 'https://partner.bitget.com/bg/Alien', icon: '/lovable-uploads/Clubs/Bitget.png', description: 'Trading and rewards with crypto card' },
          { name: 'Bybit', url: 'https://www.bybit.com/invite?ref=Q15Q4M', icon: '/lovable-uploads/Clubs/Bybit.png', description: 'Derivatives trading with card benefits' },
          { name: 'Coinbase', url: 'https://www.coinbase.com/join/EC2PSZT?src', icon: '/lovable-uploads/Clubs/Coinbase.svg', description: 'US-based exchange with debit card' },
          { name: 'Crypto.com', url: 'https://crypto.com/app/una5xskncn', icon: '/lovable-uploads/Clubs/Cryptocom.svg', description: 'Visa card with up to 8% cashback' },
          { name: 'Gemini', url: 'https://www.gemini.com/', description: 'Regulated exchange with credit card' },
          { name: 'Nexo', url: 'https://nexo.com/ref/x6ts3r0kb2?src', icon: '/lovable-uploads/Clubs/NexoLogo.svg', description: 'Crypto-backed card with instant credit' },
          { name: 'Pionex', url: 'https://www.pionex.com/es/signUp?r=0TTkucC3Gy7', icon: '/lovable-uploads/Clubs/PionexLogo.svg', description: 'Trading bots with crypto card access' },
          { name: 'Revolut', url: 'https://www.revolut.com/', description: 'Banking app with crypto and card' },
          { name: 'Wirex', url: 'https://wirexapp.com/', description: 'Multi-currency card with crypto rewards' }
        ]},
        { title: 'Cold Hard Wallets', description: 'Maximum security hardware wallets with offline storage and multi-signature support', icon: <Shield className="h-4 w-4" />, color: '', platforms: [
          { name: 'Ledger', url: 'https://www.ledger.com/', icon: '/lovable-uploads/Clubs/Ledger.jpg', description: 'Hardware security with Nano devices' },
          { name: 'Material Bitcoin', url: 'https://materialbitcoin.com/AlienFlowSpace', icon: '/lovable-uploads/Clubs/MaterialBitcoin.png', description: 'Premium metal wallet storage' },
          { name: 'SafePal', url: 'https://www.safepal.com/', icon: '/lovable-uploads/Clubs/SafePal.png', description: 'Affordable hardware wallet solution' },
          { name: 'Tangem', url: 'https://tangem.com/invite/AN85VR', icon: '/lovable-uploads/Clubs/Tangem.png', description: 'Card-shaped hardware wallet, NFC-powered' },
          { name: 'Trezor', url: 'https://trezor.io/', icon: '/lovable-uploads/Clubs/Trezor.svg', description: 'Open-source hardware wallet security' }
        ]},
        { title: 'Hot Wallets', description: 'User-friendly mobile and browser wallets for quick trading and DeFi access', icon: <Zap className="h-4 w-4" />, color: '', platforms: [
          { name: 'Atomic Wallet', url: 'https://atomicwallet.io/', icon: '/lovable-uploads/Clubs/AtomicWallet.svg', description: 'Non-custodial multi-chain wallet' },
          { name: 'Base', url: 'https://www.base.org/', icon: '/lovable-uploads/Clubs/Coinbase.svg', description: 'Coinbase L2 for low-cost transactions' },
          { name: 'Bitget Wallet', url: 'https://newshare.bwb.global/es_es/referralLanding?inviteCode=cmR3qk&utm_source=newInviteRebate&type=card', icon: '/lovable-uploads/Clubs/Bitget.png', description: 'Multi-chain DeFi wallet' },
          { name: 'Crypto Onchain', url: 'https://crypto.com/onchain', icon: '/lovable-uploads/Clubs/Cryptocom.svg', description: 'Crypto.com self-custody wallet' },
          { name: 'Exodus', url: 'https://www.exodus.com/', icon: '/lovable-uploads/Clubs/Exodus.svg', description: 'Beautiful desktop and mobile wallet' },
          { name: 'Kraken Wallet', url: 'https://www.kraken.com/wallet', icon: '/lovable-uploads/Clubs/Kraken.svg', description: 'Self-custody with DeFi access' },
          { name: 'MetaMask', url: 'https://metamask.io/', icon: '/lovable-uploads/Clubs/MetaMask.svg', description: 'Leading Ethereum and EVM wallet' },
          { name: 'OKX', url: 'https://my.okx.com/join/11556162', icon: '/lovable-uploads/Clubs/OKX.svg', description: 'Web3 wallet with DeFi integration' },
          { name: 'Phantom', url: 'https://phantom.com', icon: '/lovable-uploads/Clubs/PhantomLogo.svg', description: 'Solana ecosystem wallet' },
          { name: 'Pi Network', url: 'https://minepi.com/Aitor69Alien', icon: '/lovable-uploads/Clubs/PiNetwork.svg', description: 'Mobile mining and wallet app' },
          { name: 'Trust Wallet', url: 'https://trustwallet.com/', icon: '/lovable-uploads/Clubs/Trust Wallet.svg', description: 'Binance multi-chain wallet' }
        ]}
      ]
    },
    {
      name: 'Δ EcoFlow', description: "Shaping the planet's present through collaborative decision-making with budgets, proposals, and sustainable governance mechanisms for environmental impact.",
      members: 161803, icon: <Leaf className="h-6 w-6 text-alien-gold" />, category: 'DAO', categoryColor: '', bgColor: '',
      sections: [
        { title: 'Education & Academy', description: 'Sustainability courses, green certifications, and climate action training programs', icon: <Shield className="h-4 w-4" />, color: '', platforms: [
          { name: 'Academy', url: '/academy' }, { name: 'Courses' }, { name: 'Workshops' }, { name: 'Certifications' }
        ]},
        { title: 'Eco Products Catalog', description: 'Organic apparel, hemp products, and sustainable accessories with carbon-neutral shipping', icon: <Leaf className="h-4 w-4" />, color: '', platforms: [
          { name: 'Organic Hats' }, { name: 'Eco Jewelry' }, { name: 'Sustainable Apparel' }, { name: 'Hemp Products' }
        ]}
      ]
    },
    {
      name: 'Δ GameFlow', description: 'Discovering and creating digital gaming experiences across GameFi and competitive eSports platforms with blockchain integration and play-to-earn mechanics.',
      members: 25890, icon: <Gamepad2 className="h-6 w-6 text-alien-gold" />, category: 'GameFi', categoryColor: '', bgColor: '',
      sections: [
        { title: 'GameFi Platforms', description: 'Play-to-earn blockchain games with NFT assets, in-game economies, and token rewards', icon: <Gamepad2 className="h-4 w-4" />, color: '', platforms: [
          { name: 'Axie Infinity', url: 'https://app.axieinfinity.com/', description: 'Play-to-earn creature battling game' },
          { name: 'Community Gaming', url: 'https://www.communitygaming.io/', description: 'Tournament platform with rewards' },
          { name: 'Decentraland', url: 'https://decentraland.org/', description: 'Virtual world with land NFTs' },
          { name: 'GAMEE', url: 'https://www.gamee.com/', description: 'Mobile gaming with Arc8 tournaments' },
          { name: 'GameFi.org', url: 'https://gamefi.org/', description: 'GameFi aggregator and launchpad' },
          { name: 'Illuvium', url: 'https://www.illuvium.io/', description: 'Open-world RPG with NFT creatures' },
          { name: 'MOBOX', url: 'https://www.mobox.io/', description: 'GameFi platform with NFT farming' },
          { name: 'The Sandbox', url: 'https://www.sandbox.game/', description: 'Voxel metaverse and game creation' },
          { name: 'Treasure', url: 'https://treasure.lol/', description: 'Decentralized gaming ecosystem' },
          { name: 'Wombat', url: 'https://go.getwombat.io/eN3a', description: 'Multi-chain gaming wallet' }
        ]},
        { title: 'eSports Platforms', description: 'Professional gaming tournaments, team management, and competitive league platforms', icon: <Zap className="h-4 w-4" />, color: '', platforms: [
          { name: 'Arena.gg', url: 'https://www.arenagg.com/', icon: '/lovable-uploads/Clubs/ArenaGG.png', description: 'Tournament hosting and team management' },
          { name: 'Battlefy', url: 'https://battlefy.com/', icon: '/lovable-uploads/Clubs/Battlefy.svg', description: 'eSports tournament organization' },
          { name: 'Blitz.gg', url: 'https://blitz.gg/', icon: '/lovable-uploads/Clubs/BlitzGG.svg', description: 'Performance analytics and coaching' },
          { name: 'ESL Gaming', url: 'https://esl.com/', icon: '/lovable-uploads/Clubs/ESL.svg', description: "World's largest eSports company" },
          { name: 'LVP Global', url: 'https://lvp.global/', icon: '/lovable-uploads/Clubs/LVP.PNG', description: 'Professional league management' },
          { name: 'ZEBEDEE', url: 'https://zbd.link/hcHi/invite?af_sub1=S2S7IY', icon: '/lovable-uploads/Clubs/ZBD.svg', description: 'Bitcoin gaming and rewards platform' }
        ]}
      ]
    },
    {
      name: 'Δ WeedFlow', description: 'Exploring cannabis wellness, medical applications, and sustainable cultivation practices within legal frameworks and community education.',
      members: 12438, icon: <Leaf className="h-6 w-6 text-alien-gold" />, category: 'Wellness', categoryColor: '', bgColor: '',
      sections: [{ title: 'Cannabis Education', description: 'Medical cannabis research, strain guides, legal cultivation, and wellness applications', icon: <Leaf className="h-4 w-4" />, color: '', platforms: [
        { name: 'Leafly', url: 'https://www.leafly.com/', icon: '/lovable-uploads/Clubs/Leafly.svg', description: 'Cannabis strain database and reviews' },
        { name: 'Weedmaps', url: 'https://weedmaps.com/', icon: '/lovable-uploads/Clubs/Weedmaps.svg', description: 'Dispensary finder and education' },
        { name: 'Cannabis Training', description: 'Professional certification courses' },
        { name: 'Medical Research', description: 'Clinical studies and findings' }
      ]}]
    },
    {
      name: 'Δ XFlow (+NSFW)', description: 'Adult-oriented digital experiences and NFT collections within a mature, consensual community framework for verified members only.',
      members: 8962, icon: <Eye className="h-6 w-6 text-alien-gold" />, category: 'Adult', categoryColor: '', bgColor: '',
      sections: [{ title: 'Adult Platforms', description: 'Age-verified creator platforms and adult NFT marketplaces (18+ only, consensual content)', icon: <Eye className="h-4 w-4" />, color: '', platforms: [
        { name: 'Fansly', url: 'https://fansly.com/', icon: '/lovable-uploads/Clubs/Fansly.svg', description: 'Creator subscription platform' },
        { name: 'OnlyFans', url: 'https://onlyfans.com/', icon: '/lovable-uploads/Clubs/OnlyFans.svg', description: 'Content creator monetization' },
        { name: 'Pornhub', url: 'https://pornhub.com/', icon: '/lovable-uploads/Clubs/Pornhub.svg', description: 'Adult video sharing platform' },
        { name: 'XHamster', url: 'https://xhamster.com/', icon: '/lovable-uploads/Clubs/XHamster.svg', description: 'Adult content community' },
        { name: 'YouPorn', url: 'https://youporn.com/', icon: '/lovable-uploads/Clubs/YouPorn.svg', description: 'Premium adult video service' }
      ]}]
    }
  ];

  const otherClubs: ClubProps[] = [
    { name: 'Δ BioFlow', description: 'Advancing biotechnology and regenerative medicine through decentralized research, funding, and community-driven innovation.', members: 6789, icon: <Dna className="h-6 w-6 text-alien-gold" />, category: 'BioTech', categoryColor: '', bgColor: '' },
    { name: 'Δ CodeFlow', description: 'Building decentralized applications, smart contracts, and blockchain solutions through collaborative coding and open-source development.', members: 9234, icon: <Rocket className="h-6 w-6 text-alien-gold" />, category: 'Development', categoryColor: '', bgColor: '' },
    { name: 'Δ DataFlow', description: 'Harnessing the power of decentralized data analytics, AI, and machine learning to create intelligent insights and predictive models.', members: 7512, icon: <Database className="h-6 w-6 text-alien-gold" />, category: 'Data Science', categoryColor: '', bgColor: '' },
    { name: 'Δ DeSciFlow', description: 'Revolutionizing scientific research through decentralized funding, open-source data, and collaborative experimentation.', members: 5921, icon: <FlaskConical className="h-6 w-6 text-alien-gold" />, category: 'Science', categoryColor: '', bgColor: '' },
    { name: 'Δ EnergyFlow', description: 'Powering the future with renewable energy, decentralized grids, and sustainable power solutions for communities worldwide.', members: 8923, icon: <Zap className="h-6 w-6 text-alien-gold" />, category: 'Energy', categoryColor: '', bgColor: '' },
    { name: 'Δ HealthFlow', description: 'Revolutionizing healthcare through decentralized medical records, telemedicine, and community health initiatives.', members: 10456, icon: <Heart className="h-6 w-6 text-alien-gold" />, category: 'Healthcare', categoryColor: '', bgColor: '' },
    { name: 'Δ MetaFlow', description: 'Exploring virtual worlds, metaverse platforms, and immersive VR/AR experiences in decentralized digital spaces.', members: 9871, icon: <Eye className="h-6 w-6 text-alien-gold" />, category: 'Metaverse', categoryColor: '', bgColor: '' },
    { name: 'Δ QuantumFlow', description: 'Pioneering quantum computing applications, cryptography, and next-generation computational solutions for the blockchain.', members: 4567, icon: <Zap className="h-6 w-6 text-alien-gold" />, category: 'Quantum', categoryColor: '', bgColor: '' },
    { name: 'Δ ReFlow', description: 'Regenerating ecosystems and promoting sustainable practices through decentralized finance, carbon offsetting, and community-led conservation.', members: 8156, icon: <Leaf className="h-6 w-6 text-alien-gold" />, category: 'Sustainability', categoryColor: '', bgColor: '' },
    { name: 'Δ SocialFlow', description: 'Empowering decentralized communities, DAOs, and social networks through blockchain-based governance, tokenized incentives, and collaborative decision-making.', members: 10287, icon: <Users className="h-6 w-6 text-alien-gold" />, category: 'Social', categoryColor: '', bgColor: '' },
    { name: 'Δ SpaceFlow', description: 'Advancing space exploration, satellite technology, and cosmic research through decentralized funding and collaboration.', members: 5678, icon: <Rocket className="h-6 w-6 text-alien-gold" />, category: 'Space', categoryColor: '', bgColor: '' }
  ];

  const allCategories = React.useMemo(() => {
    const cats = new Set<string>();
    featuredClubs.forEach(c => cats.add(c.category));
    otherClubs.forEach(c => cats.add(c.category));
    return Array.from(cats).sort();
  }, []);

  const filteredFeatured = featuredClubs.filter(c => {
    const matchesSearch = !searchQuery || c.name.toLowerCase().includes(searchQuery.toLowerCase()) || c.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = !activeCategory || c.category === activeCategory;
    return matchesSearch && matchesCat;
  });

  const filteredOther = otherClubs.filter(c => {
    const matchesSearch = !searchQuery || c.name.toLowerCase().includes(searchQuery.toLowerCase()) || c.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = !activeCategory || c.category === activeCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="relative flex flex-col flex-1 pb-20">
      <main className="relative z-10 flex-grow container mx-auto px-4 pt-8 pb-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 border border-alien-gold/40 mb-6">
              <img src="/lovable-uploads/ClubLogo.png" alt="Clubs Logo" className="h-14 w-14 object-contain p-1" />
            </div>
            <div className="flex items-center justify-center gap-3 mb-4 flex-wrap">
              <AlienTag color="gold">BELONG</AlienTag>
              <AlienTag color="muted">19+ CLUBS</AlienTag>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-nasalization text-alien-green af-heading-underline inline-block">
              Clubs
            </h1>
          </div>

          {/* Search & Filter */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-12 space-y-4">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-alien-gold/50" />
              <input
                type="text"
                placeholder="Search clubs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-5 py-3 bg-af-surface/40 border border-af-border text-alien-gold placeholder:text-af-text-muted font-nasalization text-sm focus:outline-none focus:border-alien-green/50 transition-colors"
                style={{ borderRadius: 0 }}
              />
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setActiveCategory(null)}
                className={`af-pill !text-[10px] !py-1.5 !px-3 transition-all ${!activeCategory ? 'af-pill-primary' : 'af-pill-outline'}`}
              >
                All
              </button>
              {allCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
                  className={`af-pill !text-[10px] !py-1.5 !px-3 transition-all ${activeCategory === cat ? 'af-pill-primary' : 'af-pill-outline'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>

          {filteredFeatured.length > 0 && (
            <section id="featured" className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <AlienTag color="green">FEATURED</AlienTag>
              </div>
              <h2 className="text-3xl font-bold mb-8 font-nasalization text-alien-green af-heading-underline inline-block">
                Featured Clubs
              </h2>
              <div className="space-y-6">
                {filteredFeatured.map((club, index) => <FeaturedClubCard key={index} club={club} />)}
              </div>
            </section>
          )}

          {filteredOther.length > 0 && (
            <section id="other" className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <AlienTag color="muted">OTHER CLUBS</AlienTag>
              </div>
              <h2 className="text-2xl font-bold mb-8 font-nasalization text-alien-green af-heading-underline inline-block">
                Other Clubs
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-af-border-hairline">
                {filteredOther.map((club, index) => <ClubCard key={index} club={club} index={index} />)}
              </div>
            </section>
          )}

          {filteredFeatured.length === 0 && filteredOther.length === 0 && (
            <div className="text-center py-20">
              <p className="text-alien-gold/60 font-nasalization text-lg">No clubs match your search</p>
            </div>
          )}

          <section id="eco-products">
            <div className="flex items-center gap-3 mb-6">
              <AlienTag color="green">ECO PRODUCTS</AlienTag>
            </div>
            <h2 className="text-2xl font-bold mb-8 font-nasalization text-alien-green af-heading-underline inline-block">
              Eco Products
            </h2>
            <EcoProductCarousel />
          </section>
        </div>
      </main>
    </div>
  );
};

export default Clubs;
