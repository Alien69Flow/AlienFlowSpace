import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FeaturedClubCard from '@/components/FeaturedClubCard';
import EcoProductCarousel from '@/components/EcoProductCarousel';
import { Users, Rocket, Calendar, Zap, Shield, DollarSign, Leaf, Gamepad2, Music, Heart, Eye, Dna, Database, FlaskConical } from 'lucide-react';
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
  <div className={`${club.bgColor} p-6 rounded-xl backdrop-blur-md overflow-hidden relative group hover:transform hover:scale-[1.02] transition-all duration-300 border border-alien-gold/20 hover:border-alien-gold/40`}>
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-alien-space-dark/60 to-alien-space-dark/90 z-0"></div>
    
    <div className="relative z-10">
      <div className="flex justify-between items-start mb-6">
        <div className="p-4 bg-alien-space-dark/80 rounded-xl backdrop-blur-md border border-alien-gold/30 group-hover:border-alien-gold/50 transition-all duration-300">
          {club.icon}
        </div>
        <span className={`px-3 py-1 text-xs ${club.categoryColor} rounded-full font-medium backdrop-blur-sm`}>
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
        <Button variant="outline" className="border-alien-gold/50 text-alien-gold hover:bg-alien-gold/20 hover:border-alien-gold text-sm px-4 py-2 h-auto font-[Exo] font-medium backdrop-blur-sm">
          Join Club
        </Button>
      </div>
    </div>
  </div>
);

const Clubs: React.FC = () => {
  const featuredClubs = [
    {
      name: 'Δ ArtFlow',
      description: 'Harmonizing the multiverse through decentralized music creation, NFT releases, and community-driven audio experiences.',
      members: 18654,
      icon: <Music className="h-6 w-6 text-alien-gold" />,
      category: 'Music & Art NFTs',
      categoryColor: 'bg-indigo-500/80 text-white border border-indigo-400/50',
      bgColor: 'bg-gradient-to-br from-indigo-900/40 to-blue-900/40',
      sections: [{
        title: 'Music & Audio Platforms',
        description: 'Create, distribute and monetize music through blockchain',
        icon: <Music className="h-4 w-4" />,
        color: 'bg-indigo-600/80',
        platforms: [{
          name: 'Audius',
          url: 'https://audius.co/',
          icon: '/lovable-uploads/Clubs/Audius.svg'
        }, {
          name: 'Sound.xyz',
          url: 'https://sound.xyz/',
          icon: '/lovable-uploads/Clubs/SoundXYZ.svg'
        }, {
          name: 'SoundCloud',
          url: 'https://soundcloud.com/',
          icon: '/lovable-uploads/Clubs/Soundcloud.svg'
        }, {
          name: 'Spotify',
          url: 'https://open.spotify.com/',
          icon: '/lovable-uploads/Clubs/Spotify.svg'
        }, {
          name: 'YouTube',
          url: 'https://youtube.com/',
          icon: '/lovable-uploads/Clubs/YouTube.svg'
        }]
      }]
    },
    {
      name: 'Δ CashFlow',
      description: 'Advanced earning strategies and winning analysis for interplanetary assets through DeFi protocols, yield farming, and strategic portfolio management.',
      members: 314159,
      icon: <DollarSign className="h-6 w-6 text-alien-gold" />,
      category: 'CashFlow',
      categoryColor: 'bg-blue-500/80 text-white border border-blue-400/50',
      bgColor: 'bg-gradient-to-br from-blue-900/40 to-purple-900/40',
      sections: [{
        title: 'Card Wallets (MasterCard & VISA)',
        description: 'Premium cryptocurrency payment cards with traditional banking integration',
        icon: <DollarSign className="h-4 w-4" />,
        color: 'bg-blue-600/80',
        platforms: [{
          name: 'Binance',
          url: 'https://binance.com/',
          icon: '/lovable-uploads/Clubs/Binance.svg'
        }, {
          name: 'BingX',
          url: 'https://bingx.com/referral-program/QCXRKM',
          icon: '/lovable-uploads/Clubs/BingX.png'
        }, {
          name: 'Bitget',
          url: 'https://www.bitgetapp.com/referral/register?clacCode=42E67C3N',
          icon: '/lovable-uploads/Clubs/Bitget.png'
        }, {
          name: 'Bybit',
          url: 'https://www.bybit.com/invite?ref=Q15Q4M',
          icon: '/lovable-uploads/Clubs/Bybit.png'
        }, {
          name: 'Coinbase',
          url: 'https://www.coinbase.com/join/EC2PSZT?src',
          icon: '/lovable-uploads/Clubs/Coinbase.svg'
        }, {
          name: 'Crypto.com',
          url: 'https://crypto.com/app/una5xskncn',
          icon: '/lovable-uploads/Clubs/Cryptocom.svg'
        }, {
          name: 'Gemini',
          url: 'https://www.gemini.com/'
        }, {
          name: 'Nexo',
          url: 'https://nexo.com/ref/x6ts3r0kb2?src',
          icon: '/lovable-uploads/Clubs/NexoLogo.svg'
        }, {
          name: 'Pionex',
          url: 'https://www.pionex.com/es/signUp?r=0TTkucC3Gy7',
          icon: '/lovable-uploads/Clubs/PionexLogo.svg'
        }, {
          name: 'Revolut',
          url: 'https://www.revolut.com/'
        }, {
          name: 'Wirex',
          url: 'https://wirexapp.com/'
        }]
      }, {
        title: 'Cold Hard Wallets',
        description: 'Secure hardware wallets for long-term cryptocurrency storage',
        icon: <Shield className="h-4 w-4" />,
        color: 'bg-gray-600/80',
        platforms: [{
          name: 'Ledger',
          url: 'https://www.ledger.com/',
          icon: '/lovable-uploads/Clubs/Ledger.jpg'
        }, {
          name: 'Material Bitcoin',
          url: 'https://materialbitcoin.com/AlienFlowSpace',
          icon: '/lovable-uploads/Clubs/MaterialBitcoin.png'
        }, {
          name: 'SafePal',
          url: 'https://www.safepal.com/',
          icon: '/lovable-uploads/Clubs/SafePal.png'
        }, {
          name: 'Trezor',
          url: 'https://trezor.io/'
        }]
      }, {
        title: 'Hot Wallets',
        description: 'Convenient software wallets for daily crypto transactions',
        icon: <Zap className="h-4 w-4" />,
        color: 'bg-orange-600/80',
        platforms: [{
          name: 'Atomic Wallet',
          url: 'https://atomicwallet.io/',
          icon: '/lovable-uploads/Clubs/AtomicWallet.svg'
        }, {
          name: 'Base',
          url: 'https://www.base.org/'
        }, {
          name: 'Bitget Wallet',
          url: 'https://newshare.bwb.global/es_es/referralLanding?inviteCode=cmR3qk&utm_source=newInviteRebate&type=card'
        }, {
          name: 'Crypto Onchain',
          url: 'https://crypto.com/onchain'
        }, {
          name: 'Exodus',
          url: 'https://www.exodus.com/',
          icon: '/lovable-uploads/Clubs/Exodus.svg'
        }, {
          name: 'Kraken Wallet',
          url: 'https://www.kraken.com/wallet',
          icon: '/lovable-uploads/Clubs/Kraken.svg'
        }, {
          name: 'MetaMask',
          url: 'https://metamask.io/',
          icon: '/lovable-uploads/Clubs/MetaMask.svg'
        }, {
          name: 'OKX',
          url: 'https://my.okx.com/join/11556162'
        }, {
          name: 'Phantom',
          url: 'https://phantom.com',
          icon: '/lovable-uploads/Clubs/PhantomLogo.svg'
        }, {
          name: 'Pi Network',
          url: 'https://minepi.com/Aitor69Alien'
        }, {
          name: 'Trust Wallet',
          url: 'https://trustwallet.com/'
        }]
      }]
    },

    {
      name: 'Δ EcoFlow',
      description: "Shaping the planet's present through collaborative decision-making with budgets, proposals, and sustainable governance mechanisms for environmental impact.",
      members: 161803,
      icon: <Leaf className="h-6 w-6 text-alien-gold" />,
      category: 'DAO',
      categoryColor: 'bg-emerald-500/80 text-white border border-emerald-400/50',
      bgColor: 'bg-gradient-to-br from-emerald-900/40 to-green-900/40',
      sections: [{
        title: 'Education & Academy',
        description: 'Learn about sustainable practices and environmental technologies',
        icon: <Shield className="h-4 w-4" />,
        color: 'bg-emerald-600/80',
        platforms: [{
          name: 'Academy',
          url: '/academy'
        }, {
          name: 'Courses'
        }, {
          name: 'Workshops'
        }, {
          name: 'Certifications'
        }]
      }, {
        title: 'Eco Products Catalog',
        description: 'Sustainable merchandise and eco-friendly products',
        icon: <Leaf className="h-4 w-4" />,
        color: 'bg-green-600/80',
        platforms: [{
          name: 'Organic Hats'
        }, {
          name: 'Eco Jewelry'
        }, {
          name: 'Sustainable Apparel'
        }, {
          name: 'Hemp Products'
        }]
      }]
    },
    {
      name: 'Δ GameFlow',
      description: 'Discovering and creating digital gaming experiences across GameFi and competitive eSports platforms with blockchain integration and play-to-earn mechanics.',
      members: 25890,
      icon: <Gamepad2 className="h-6 w-6 text-alien-gold" />,
      category: 'GameFi',
      categoryColor: 'bg-purple-500/80 text-white border border-purple-400/50',
      bgColor: 'bg-gradient-to-br from-purple-900/40 to-pink-900/40',
      sections: [{
        title: 'GameFi Platforms',
        description: 'Play-to-earn games and blockchain gaming ecosystems',
        icon: <Gamepad2 className="h-4 w-4" />,
        color: 'bg-purple-600/80',
        platforms: [{
          name: 'Axie Infinity',
          url: 'https://app.axieinfinity.com/'
        }, {
          name: 'Community Gaming',
          url: 'https://www.communitygaming.io/'
        }, {
          name: 'Decentraland',
          url: 'https://decentraland.org/'
        }, {
          name: 'GAMEE',
          url: 'https://www.gamee.com/'
        }, {
          name: 'GameFi.org',
          url: 'https://gamefi.org/'
        }, {
          name: 'Illuvium',
          url: 'https://www.illuvium.io/'
        }, {
          name: 'MOBOX',
          url: 'https://www.mobox.io/'
        }, {
          name: 'The Sandbox',
          url: 'https://www.sandbox.game/'
        }, {
          name: 'Treasure',
          url: 'https://treasure.lol/'
        }, {
          name: 'Wombat',
          url: 'https://go.getwombat.io/eN3a'
        }, {
          name: 'ZEBEDEE',
          url: 'https://zbd.link/hcHi/invite?af_sub1=S2S7IY'
        }]
      }, {
        title: 'eSports Platforms',
        description: 'Competitive gaming tournaments and professional esports',
        icon: <Zap className="h-4 w-4" />,
        color: 'bg-red-600/80',
        platforms: [{
          name: 'Arena.gg',
          url: 'https://www.arenagg.com/'
        }, {
          name: 'Battlefy',
          url: 'https://battlefy.com/'
        }, {
          name: 'Blitz.gg',
          url: 'https://blitz.gg/'
        }, {
          name: 'ESL Gaming',
          url: 'https://esl.com/'
        }, {
          name: 'LVP Global',
          url: 'https://lvp.global/'
        }]
      }]
    },
    {
      name: 'Δ WeedFlow',
      description: 'Exploring cannabis wellness, medical applications, and sustainable cultivation practices within legal frameworks and community education.',
      members: 12438,
      icon: <Leaf className="h-6 w-6 text-alien-gold" />,
      category: 'Wellness',
      categoryColor: 'bg-green-500/80 text-white border border-green-400/50',
      bgColor: 'bg-gradient-to-br from-green-900/40 to-emerald-900/40',
      sections: [{
        title: 'Cannabis Education',
        description: 'Learn about cannabis wellness and legal cultivation',
        icon: <Leaf className="h-4 w-4" />,
        color: 'bg-green-600/80',
        platforms: [{
          name: 'Leafly',
          url: 'https://www.leafly.com/'
        }, {
          name: 'Weedmaps',
          url: 'https://weedmaps.com/'
        }, {
          name: 'Cannabis Training'
        }, {
          name: 'Medical Research'
        }]
      }]
    },
    {
      name: 'Δ XFlow (+NSFW)',
      description: 'Adult-oriented digital experiences and NFT collections within a mature, consensual community framework for verified members only.',
      members: 8962,
      icon: <Eye className="h-6 w-6 text-alien-gold" />,
      category: 'Adult',
      categoryColor: 'bg-red-500/80 text-white border border-red-400/50',
      bgColor: 'bg-gradient-to-br from-red-900/40 to-pink-900/40',
      sections: [{
        title: 'Adult Platforms',
        description: 'Verified adult content and NFT collections (18+ only)',
        icon: <Eye className="h-4 w-4" />,
        color: 'bg-red-600/80',
        platforms: [{
          name: 'OnlyFans',
          url: 'https://onlyfans.com/'
        }, {
          name: 'Adult NFTs'
        }, {
          name: 'Verified Community'
        }, {
          name: 'Age Verification'
        }]
      }]
    }
  ];

  const otherClubs = [
    {
      name: 'Δ BioFlow',
      description: 'Advancing biotechnology and regenerative medicine through decentralized research, funding, and community-driven innovation.',
      members: 6789,
      icon: <Dna className="h-6 w-6 text-alien-gold" />,
      category: 'BioTech',
      categoryColor: 'bg-teal-500/80 text-white border border-teal-400/50',
      bgColor: 'bg-gradient-to-br from-teal-900/40 to-cyan-900/40'
    },
    {
      name: 'Δ CodeFlow',
      description: 'Building decentralized applications, smart contracts, and blockchain solutions through collaborative coding and open-source development.',
      members: 9234,
      icon: <Rocket className="h-6 w-6 text-alien-gold" />,
      category: 'Development',
      categoryColor: 'bg-yellow-500/80 text-white border border-yellow-400/50',
      bgColor: 'bg-gradient-to-br from-yellow-900/40 to-orange-900/40'
    },
    {
      name: 'Δ DataFlow',
      description: 'Harnessing the power of decentralized data analytics, AI, and machine learning to create intelligent insights and predictive models.',
      members: 7512,
      icon: <Database className="h-6 w-6 text-alien-gold" />,
      category: 'Data Science',
      categoryColor: 'bg-gray-500/80 text-white border border-gray-400/50',
      bgColor: 'bg-gradient-to-br from-gray-900/40 to-slate-900/40'
    },
    {
      name: 'Δ DeSciFlow',
      description: 'Revolutionizing scientific research through decentralized funding, open-source data, and collaborative experimentation.',
      members: 5921,
      icon: <FlaskConical className="h-6 w-6 text-alien-gold" />,
      category: 'Science',
      categoryColor: 'bg-indigo-500/80 text-white border border-indigo-400/50',
      bgColor: 'bg-gradient-to-br from-indigo-900/40 to-purple-900/40'
    },
    {
      name: 'Δ ReFlow',
      description: 'Regenerating ecosystems and promoting sustainable practices through decentralized finance, carbon offsetting, and community-led conservation.',
      members: 8156,
      icon: <Leaf className="h-6 w-6 text-alien-gold" />,
      category: 'Sustainability',
      categoryColor: 'bg-green-500/80 text-white border border-green-400/50',
      bgColor: 'bg-gradient-to-br from-green-900/40 to-emerald-900/40'
    },
    {
      name: 'Δ SocialFlow',
      description: 'Empowering decentralized communities, DAOs, and social networks through blockchain-based governance, tokenized incentives, and collaborative decision-making.',
      members: 10287,
      icon: <Users className="h-6 w-6 text-alien-gold" />,
      category: 'Social',
      categoryColor: 'bg-pink-500/80 text-white border border-pink-400/50',
      bgColor: 'bg-gradient-to-br from-pink-900/40 to-rose-900/40'
    }
  ];

  return (
    <div className="relative flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16">
        <section id="featured" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 font-nasalization text-alien-green text-center">
            Featured Clubs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredClubs.map((club, index) => (
              <FeaturedClubCard key={index} club={club} />
            ))}
          </div>
        </section>

        <section id="other" className="mb-16">
          <h2 className="text-2xl font-bold mb-8 font-nasalization text-alien-green text-center">
            Other Clubs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherClubs.map((club, index) => (
              <ClubCard key={index} club={club} />
            ))}
          </div>
        </section>

        <section id="eco-products">
          <h2 className="text-2xl font-bold mb-8 font-nasalization text-alien-green text-center">
            Eco Products
          </h2>
          <EcoProductCarousel />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Clubs;
