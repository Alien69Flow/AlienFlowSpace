import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coins, Brain, Leaf, ExternalLink, ChevronDown, Award, CircleCheck as CheckCircle2, Zap } from 'lucide-react';
import AlienTag from '@/components/alien/AlienTag';
import AlienButton from '@/components/alien/AlienButton';

const academyModules = [
  {
    id: 1,
    title: "Abundance & Freedom",
    tag: "DATA_FLOW",
    description: "Master the fundamentals of digital economy, blockchain and sustainable financial systems to create abundance and financial freedom.",
    icon: <Coins className="h-6 w-6 text-alien-gold" />,
    modules: [
      { name: "EcoFinTech & Dynamics", topics: ["Circularity + ESG Criteria", "System Dynamics", "Macro & Micro Economy", "Game Theory"] },
      { name: "Electronic Commerce", topics: ["Foundations & Infrastructure", "Practical Advantages", "Implementation Types", "E-commerce Features"] },
      { name: "Blockchain & Cryptography", topics: ["Digital Assets (BTC, NFTs)", "DeFi & ReFi Deep Dive", "Smart Contracts", "DePIN & IPFS"] },
      { name: "Revenue Architecture", topics: ["Automated Systems", "Scalability Frameworks", "Digital Properties", "Market Efficiency"] }
    ]
  },
  {
    id: 2,
    title: "Harmony & Transcendence",
    tag: "FLOW_SPACE",
    description: "Explore Tesla equations, magnetic fields, and unified physics. Understanding gravitational force unification through neutrinos.",
    icon: <Brain className="h-6 w-6 text-alien-gold" />,
    modules: [
      { name: "Tesla & Unified Physics", topics: ["Tesla Equations & Scalar Waves", "Magnetic Field Flux", "Neutrino Unification Theory", "Gravitational Synergy"] },
      { name: "Consciousness & Perception", topics: ["Attention & Concentration", "Subconscious Mapping", "Reality Tunnels", "Neuro-Acoustics"] },
      { name: "Yoga & Sadhana", topics: ["Advanced Meditation", "Integral Yoga", "Sadhana Practice", "Bio-Homeostatic Balance"] },
      { name: "Alchemy & TAO", topics: ["Trivium & Quadrivium", "Hermeneutics", "Spiritual Illumination", "Wu Wei & Flow State"] }
    ]
  },
  {
    id: 3,
    title: "Self-Management & Sustainability",
    tag: "HEALTH_FLOW",
    description: "Learn to manage your life sustainably by integrating ecology, permaculture and conscious management of energy, space and time.",
    icon: <Leaf className="h-6 w-6 text-alien-gold" />,
    modules: [
      { name: "Ecological Foundations", topics: ["Biodiversity Principles", "Climate Adaptation", "Resource Management", "Mitigation Strategies"] },
      { name: "Permaculture Design", topics: ["Syntropic Farming", "Water Harvesting", "Soil Regeneration", "Food Forest Design"] },
      { name: "Conscious Living", topics: ["Daily Mudras", "Prana Breathing", "Energy Channels", "Zero-Waste & Nutrition"] },
      { name: "Time & Space Management", topics: ["Circadian Rhythms", "Feng Shui", "Digital Minimalism", "Sacred Space Design"] }
    ]
  }
];

const partnerCategories = [
  {
    label: 'ACADEMY PARTNERS',
    partners: [
      { name: "Academia", url: "https://www.academia.edu/", logo: "/lovable-uploads/Academy/Academia.svg" },
      { name: "AulaFacil", url: "https://www.aulafacil.com/", logo: "/lovable-uploads/Academy/AulaFacil.png" },
      { name: "Codecademy", url: "https://www.codecademy.com/", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Codecademy.svg" },
      { name: "Coursera", url: "https://www.coursera.org/", logo: "https://upload.wikimedia.org/wikipedia/commons/9/97/Coursera-Logo_600x600.svg" },
      { name: "Cursa", url: "https://cursa.app/", logo: "/lovable-uploads/Academy/Cursa.webp" },
      { name: "edX", url: "https://www.edx.org/", logo: "/lovable-uploads/Academy/edX.png" },
      { name: "FreeCodeCamp", url: "https://www.freecodecamp.org/", logo: "https://upload.wikimedia.org/wikipedia/commons/3/39/FreeCodeCamp_logo.svg" },
      { name: "GrowGoogle", url: "https://grow.google/", logo: "/lovable-uploads/Academy/GrowGoogle.png" },
      { name: "Harvard Online", url: "https://www.harvardonline.harvard.edu/", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Harvard_University_coat_of_arms.svg" },
      { name: "Hotmart", url: "https://www.hotmart.com/", logo: "/lovable-uploads/Academy/Hotmart.png" },
      { name: "Khan Academy", url: "https://www.khanacademy.org/", logo: "https://upload.wikimedia.org/wikipedia/commons/1/15/Khan_Academy_Logo_Old_version_2015.svg" },
      { name: "MasterClass", url: "https://www.masterclass.com/", logo: "/lovable-uploads/Academy/MasterClass.jpeg" },
      { name: "MIT OCW", url: "https://ocw.mit.edu/", logo: "https://upload.wikimedia.org/wikipedia/commons/a/ab/MIT_OpenCourseWare_logo.svg" },
      { name: "Mooc", url: "https://www.mooc.org/", logo: "/lovable-uploads/Academy/Mooc.png" },
      { name: "Pluralsight", url: "https://www.pluralsight.com/", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Pluralsight_logo_2021.svg" },
      { name: "SkillShare", url: "https://www.skillshare.com/", logo: "/lovable-uploads/Academy/SkillShare.jpeg" },
      { name: "Stanford Online", url: "https://online.stanford.edu/", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Seal_of_Leland_Stanford_Junior_University.svg" },
      { name: "Udacity", url: "https://www.udacity.com/", logo: "/lovable-uploads/Academy/Udacity.svg" },
      { name: "UNED", url: "https://www.uned.es/", logo: "/lovable-uploads/Academy/UNED.png" }
    ]
  },
  {
    label: 'AI FLOW',
    partners: [
      { name: "Bolt", url: "https://bolt.cello.so/3ULpYIYBm4L", logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Bolt.new_logo.png" },
      { name: "ChatGPT", url: "https://chatgpt.com", logo: "https://commons.wikimedia.org/wiki/Special:FilePath/ChatGPT_logo.svg" },
      { name: "Claude", url: "https://claude.ai", logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Claude_AI_symbol.svg" },
      { name: "GitHub Copilot", url: "https://github.com/features/copilot", logo: "https://commons.wikimedia.org/wiki/Special:FilePath/GitHub_Copilot_logo.svg" },
      { name: "Gemini", url: "https://gemini.google.com", logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Google_Gemini_icon_2025.svg" },
      { name: "Grok", url: "https://grok.x.ai", logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Grok_logo_without_text.svg" },
      { name: "Lovable", url: "https://lovable.dev", logo: "https://lovable.dev/favicon.ico" },
      { name: "Suno", url: "https://suno.com", logo: "https://suno.com/favicon.ico" }
    ]
  },
  {
    label: 'ADS FLOW',
    partners: [
      { name: "AADS", url: "https://aads.com/advertise/?partner=2454032", logo: "https://aads.com/favicon.ico" },
      { name: "Google Ads", url: "https://ads.google.com", logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Google_Ads_2022.svg" },
      { name: "Meta Ads", url: "https://www.facebook.com/business/ads", logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Meta_Platforms_Inc._logo.svg" },
      { name: "LinkedIn Ads", url: "https://www.linkedin.com/ad-campaign", logo: "https://commons.wikimedia.org/wiki/Special:FilePath/LinkedIn_icon_circle.svg" },
      { name: "Reddit Ads", url: "https://ads.reddit.com", logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Reddit_Logo.svg" },
      { name: "TikTok Ads", url: "https://ads.tiktok.com", logo: "https://commons.wikimedia.org/wiki/Special:FilePath/TikTok_logo.svg" },
      { name: "X Ads", url: "https://ads.x.com", logo: "https://commons.wikimedia.org/wiki/Special:FilePath/X_logo_2023.svg" }
    ]
  },
  {
    label: 'CASHFLOW',
    partners: [
      { name: "Azrael Codex", url: "https://www.bitget.com/", logo: "/lovable-uploads/Clubs/Bitget.png" },
      { name: "Binance Academy", url: "https://academy.binance.com/", logo: "/lovable-uploads/Clubs/Binance.svg" },
      { name: "CoinGecko", url: "https://www.coingecko.com/", logo: "/lovable-uploads/CoinGeckoLogo.svg" },
      { name: "CoinGlass", url: "https://www.coinglass.com/", logo: "/lovable-uploads/CoinGlassLogo.jpeg" },
      { name: "CoinMarketCap", url: "https://coinmarketcap.com/", logo: "/lovable-uploads/CoinMarketCapLogo.jpeg" },
      { name: "DefiLlama", url: "https://defillama.com/", logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/DefiLlama_logo.svg" },
      { name: "Predik", url: "https://predik.io/", logo: "https://predik.io/assets/images/logo-predik.svg" }
    ]
  },
  {
    label: 'DATAFLOW',
    partners: [
      { name: "Alchemy", url: "https://www.alchemy.com/", logo: "/lovable-uploads/Academy/Alchemy.png" },
      { name: "DappRadar", url: "https://dappradar.com/", logo: "/lovable-uploads/DappRadarLogo.jpeg" },
      { name: "GitBook", url: "https://www.gitbook.com/", logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Gitbook.svg" },
      { name: "GitHub", url: "https://github.com/", logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" },
      { name: "HackMD", url: "https://hackmd.io/", logo: "/lovable-uploads/Academy/HackMD.svg" },
      { name: "HackerRank", url: "https://www.hackerrank.com/", logo: "/lovable-uploads/Academy/HackerRank.svg" },
      { name: "Kaggle", url: "https://www.kaggle.com/", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Kaggle_logo.png" }
    ]
  },
  {
    label: 'ECOFLOW',
    partners: [
      { name: "ClimateReanalyzer", url: "https://climatereanalyzer.org/", logo: "/lovable-uploads/Academy/ClimateReanalyzer.svg" },
      { name: "Explore", url: "https://explore.org/", logo: "/lovable-uploads/Academy/Explore.png" },
      { name: "OEGlobal", url: "https://www.oeglobal.org/", logo: "/lovable-uploads/Academy/OEGlobal.jpeg" },
      { name: "OpenUpEd", url: "https://www.openuped.eu/", logo: "/lovable-uploads/Academy/OpenUpEd.jpeg" },
      { name: "WWF", url: "https://www.worldwildlife.org/", logo: "https://upload.wikimedia.org/wikipedia/en/2/24/WWF_logo.svg" }
    ]
  },
  {
    label: 'GAMEFLOW',
    partners: [
      { name: "ArenaGG", url: "https://arenagg.com/", logo: "/lovable-uploads/Clubs/ArenaGG.png" },
      { name: "Battlefy", url: "https://battlefy.com/", logo: "/lovable-uploads/Clubs/Battlefy.svg" },
      { name: "BlitzGG", url: "https://blitz.gg/", logo: "/lovable-uploads/Clubs/BlitzGG.svg" },
      { name: "ESL", url: "https://www.eslgaming.com/", logo: "/lovable-uploads/Clubs/ESL.svg" },
      { name: "LVP", url: "https://lvp.global/", logo: "/lovable-uploads/Clubs/LVP.PNG" },
      { name: "Unity Learn", url: "https://learn.unity.com/", logo: "/lovable-uploads/Academy/UnityLearn.svg" }
    ]
  },
  {
    label: 'HEALTHFLOW',
    partners: [
      { name: "Headspace", url: "https://www.headspace.com/", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Headspace_logo.svg" },
      { name: "Meslo Ltd", url: "https://meslo.com/", logo: "https://meslo.com/logo.svg" },
      { name: "Motus DAO", url: "https://motusdao.io/", logo: "https://motusdao.io/logo.svg" },
      { name: "My DNA Bank", url: "https://mydnabank.com/", logo: "https://mydnabank.com/logo.svg" },
      { name: "Proton", url: "https://proton.me/", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Proton_Technologies_AG_logo.svg" },
      { name: "WHO", url: "https://www.who.int/", logo: "https://upload.wikimedia.org/wikipedia/commons/2/26/World_Health_Organization_Logo.svg" },
      { name: "Yazio", url: "https://www.yazio.com/", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Yazio-app-logo.svg" }
    ]
  },
  {
    label: 'SPACEFLOW',
    partners: [
      { name: "CERN", url: "https://home.cern/", logo: "https://upload.wikimedia.org/wikipedia/en/a/ae/CERN_logo.svg" },
      { name: "ESA", url: "https://www.esa.int/", logo: "/lovable-uploads/Academy/ESA.svg" },
      { name: "JAXA", url: "https://www.jaxa.jp/", logo: "https://upload.wikimedia.org/wikipedia/commons/8/85/Jaxa_logo.svg" },
      { name: "KAGRA", url: "https://gwcenter.icrr.u-tokyo.ac.jp/en/", logo: "/lovable-uploads/Academy/KAGRA.svg" },
      { name: "LIGO", url: "https://www.ligo.org/", logo: "/lovable-uploads/Academy/LIGO.png" },
      { name: "LSC", url: "https://www.ligo.org/", logo: "/lovable-uploads/Academy/LSC.png" },
      { name: "NASA", url: "https://www.nasa.gov/", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg" },
      { name: "SpaceX", url: "https://www.spacex.com/", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/SpaceX_logo_black.svg" },
      { name: "UNESCO", url: "https://www.unesco.org/", logo: "/lovable-uploads/Academy/Unesco.svg" },
      { name: "UNSSC", url: "https://www.unssc.org/", logo: "/lovable-uploads/Academy/UNSSC.png" },
      { name: "Virgo", url: "https://www.virgo-gw.eu/", logo: "/lovable-uploads/Academy/Virgo.svg" }
    ]
  }
];

const Academy = () => {
  const [expandedModule, setExpandedModule] = useState<number | null>(null);

  return (
    <div className="min-h-screen pb-20">
      {/* Hero Header */}
      <header className="pt-12 pb-12 text-center px-4 af-grid-overlay">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 120, damping: 15 }}
          className="w-24 h-24 mx-auto mb-8 relative"
        >
          <div className="absolute inset-0 border border-alien-gold/40" />
          <div className="absolute inset-1 border border-alien-green/30 bg-af-surface/40" />
          <img
            src="/lovable-uploads/AcademyLogo.png"
            alt="Academy Logo"
            className="w-full h-full object-contain relative z-10 p-3"
          />
        </motion.div>

        <div className="flex items-center justify-center gap-3 mb-6 flex-wrap">
          <AlienTag color="gold">LEARN</AlienTag>
          <AlienTag color="muted">30+ PARTNERS</AlienTag>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-5xl md:text-7xl font-nasalization mb-6 tracking-widest uppercase text-alien-green af-heading-underline inline-block"
        >
          Academy
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-3xl mx-auto text-alien-gold/80 text-base md:text-lg mb-8 leading-relaxed italic"
        >
          "Acquire complete attention capabilities to connect, discover and expand knowledge and skills. Evolve towards an optimal experience with fullness of flow."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <AlienTag color="green">
            <Zap className="w-3 h-3" /> Ready to evolve? Join the decentralized learning revolution
          </AlienTag>
        </motion.div>
      </header>

      <div className="max-w-4xl mx-auto mb-12 px-8"><div className="h-px bg-af-border-hairline" /></div>

      {/* Modules Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-0 mb-20 border-l border-t border-af-border-hairline items-start">
        {academyModules.map((module) => (
          <motion.div
            key={module.id}
            layout
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: module.id * 0.1 }}
            className="border-r border-b border-af-border-hairline bg-af-surface/20 hover:bg-af-surface/40 transition-colors"
          >
            <div
              onClick={() => setExpandedModule(expandedModule === module.id ? null : module.id)}
              className="p-6 cursor-pointer"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 border border-af-border">
                  {module.icon}
                </div>
                <ChevronDown className={`w-5 h-5 text-alien-gold transition-transform duration-300 ${expandedModule === module.id ? 'rotate-180' : ''}`} />
              </div>

              <span className="font-nasalization text-[10px] tracking-[0.2em] text-af-text-muted/50 mb-2 block">{module.tag}</span>
              <h3 className="text-2xl font-nasalization mb-3 text-alien-gold tracking-tight">{module.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-2">{module.description}</p>

              <AnimatePresence>
                {expandedModule === module.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="pt-6 space-y-6 border-t border-af-border-hairline mt-4"
                  >
                    {module.modules.map((sub, i) => (
                      <div key={i} className="space-y-2">
                        <h4 className="text-alien-green text-[11px] font-bold tracking-[0.2em] uppercase flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-alien-gold" /> {sub.name}
                        </h4>
                        <ul className="grid grid-cols-1 gap-1.5 pl-7">
                          {sub.topics.map((topic, j) => (
                            <li key={j} className="text-[11px] text-gray-500 hover:text-alien-gold transition-colors leading-relaxed">
                              • {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <AlienButton variant="outline" className="w-full !justify-center !text-xs mt-4">
                      Enter Module
                    </AlienButton>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Master Certification */}
      <section className="max-w-6xl mx-auto px-6 mb-20">
        <div className="border border-af-border bg-af-surface/30 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 border border-alien-gold/30 flex items-center justify-center">
              <Award className="w-8 h-8 text-alien-gold" />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-nasalization text-alien-gold uppercase tracking-tight">Master Certification</h2>
              <p className="text-alien-gold/70 text-sm italic mt-2">On-chain validation of your evolutionary journey through the flow.</p>
            </div>
          </div>
          <AlienButton variant="primary" className="!px-10 !py-3 !text-sm">
            Mint Credential
          </AlienButton>
        </div>
      </section>

      {/* Partners */}
      <footer className="max-w-7xl mx-auto px-8">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <AlienTag color="gold">PARTNER ECOSYSTEM</AlienTag>
          </div>
          <h2 className="text-2xl md:text-3xl font-nasalization text-alien-gold tracking-widest uppercase af-heading-underline inline-block">
            Partner Ecosystem
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-0 border-l border-t border-af-border-hairline">
          {partnerCategories.map((cat, i) => (
            <div key={i} className="border-r border-b border-af-border-hairline p-4 bg-af-surface/10">
              <h5 className="text-[10px] font-nasalization text-alien-gold tracking-[0.25em] border-b border-af-border-hairline pb-3 mb-3 uppercase">
                {cat.label}
              </h5>
              <div className="flex flex-col gap-2">
                {cat.partners.sort((a, b) => a.name.localeCompare(b.name)).map((p, j) => (
                  <a
                    key={j}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 group hover:scale-[1.01] transition-all duration-300"
                  >
                    <div className="w-9 h-9 border border-af-border-hairline p-1.5 group-hover:border-alien-green/50 group-hover:bg-alien-green/5 transition-all flex items-center justify-center overflow-hidden flex-shrink-0">
                      <img
                        src={p.logo}
                        alt={p.name}
                        className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                        onError={(e) => { e.currentTarget.style.opacity = '0.3'; e.currentTarget.style.filter = 'none'; }}
                      />
                    </div>
                    <span className="text-[11px] text-gray-400 group-hover:text-alien-gold transition-colors duration-300 truncate">
                      {p.name}
                    </span>
                    <ExternalLink className="w-2.5 h-2.5 text-transparent group-hover:text-alien-green transition-all flex-shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default Academy;
