export type SupportedLang = 'en' | 'es' | 'pt' | 'fr';

export const SUPPORTED_LANGS: SupportedLang[] = ['en', 'es', 'pt', 'fr'];
export const DEFAULT_LANG: SupportedLang = 'en';
export const SITE_URL = 'https://alienflow.space';

interface SeoPageMeta {
  path: string;
  title: { [k in SupportedLang]: string };
  description: { [k in SupportedLang]: string };
  keywords?: string[];
  ogImage?: string;
  type?: 'website' | 'article' | 'product';
  noindex?: boolean;
  jsonLdType?: 'organization' | 'website' | 'course' | 'product' | 'breadcrumb' | 'faq' | 'none';
}

export const SEO_PAGES: Record<string, SeoPageMeta> = {
  '/': {
    path: '/',
    title: {
      en: 'AlienFlowSpace DAO | Web3, DeFi & Blockchain Ecosystem',
      es: 'AlienFlowSpace DAO | Ecosistema Web3, DeFi y Blockchain',
      pt: 'AlienFlowSpace DAO | Ecossistema Web3, DeFi e Blockchain',
      fr: 'AlienFlowSpace DAO | Écosystème Web3, DeFi et Blockchain',
    },
    description: {
      en: 'A community-owned DAO uniting BioFi, DeFi, DePIN, DeSci, ReFi, RWA and SocialFi under one cosmic ecosystem. Web 3/4/5 innovation.',
      es: 'Una DAO comunitaria que une BioFi, DeFi, DePIN, DeSci, ReFi, RWA y SocialFi en un ecosistema cosmico. Innovacion Web 3/4/5.',
      pt: 'Uma DAO comunitaria que une BioFi, DeFi, DePIN, DeSci, ReFi, RWA e SocialFi em um ecossistema cosmico. Inovacao Web 3/4/5.',
      fr: 'Une DAO communautaire unissant BioFi, DeFi, DePIN, DeSci, ReFi, RWA et SocialFi dans un ecosysteme cosmique. Innovation Web 3/4/5.',
    },
    keywords: ['dao', 'web3', 'defi', 'blockchain', 'nft', 'decentralized', 'crypto', 'alienflowspace', 'refi', 'rwa'],
    jsonLdType: 'website',
  },
  '/about': {
    path: '/about',
    title: {
      en: 'About Us | AlienFlowSpace DAO',
      es: 'Sobre Nosotros | AlienFlowSpace DAO',
      pt: 'Sobre Nos | AlienFlowSpace DAO',
      fr: 'A Propos | AlienFlowSpace DAO',
    },
    description: {
      en: 'Innovative Web3 solutions with blockchain, AI neural networks and quantum computing. Energy efficiency and environmental sustainability.',
      es: 'Soluciones Web3 innovadoras con blockchain, redes neuronales de IA y computacion cuantica. Eficiencia energetica y sostenibilidad.',
      pt: 'Solucoes Web3 inovadoras com blockchain, redes neurais de IA e computacao quantica. Eficiencia energetica e sustentabilidade.',
      fr: 'Solutions Web3 innovantes avec blockchain, reseaux de neurones IA et informatique quantique. Efficacite energetique et durabilite.',
    },
    keywords: ['about dao', 'web3 solutions', 'blockchain innovation', 'quantum computing', 'ai neural networks', 'sustainability'],
    jsonLdType: 'organization',
  },
  '/academy': {
    path: '/academy',
    title: {
      en: 'Academy | Learn Web3, Blockchain & DeFi | AlienFlowSpace DAO',
      es: 'Academia | Aprende Web3, Blockchain y DeFi | AlienFlowSpace DAO',
      pt: 'Academia | Aprenda Web3, Blockchain e DeFi | AlienFlowSpace DAO',
      fr: 'Academie | Apprendre Web3, Blockchain et DeFi | AlienFlowSpace DAO',
    },
    description: {
      en: 'Decentralized learning academy with 30+ partner platforms. Master blockchain, DeFi, AI, permaculture and sustainable technologies.',
      es: 'Academia de aprendizaje descentralizado con mas de 30 plataformas asociadas. Domina blockchain, DeFi, IA, permacultura y sostenibilidad.',
      pt: 'Academia de aprendizado descentralizado com mais de 30 plataformas parceiras. Domine blockchain, DeFi, IA, permacultura e sustentabilidade.',
      fr: 'Academie dapprentissage decentralisee avec plus de 30 plateformes partenaires. Maitrisez blockchain, DeFi, IA, permaculture et durabilite.',
    },
    keywords: ['web3 academy', 'blockchain courses', 'defi education', 'learn blockchain', 'decentralized learning', 'free courses'],
    jsonLdType: 'course',
  },
  '/clubs': {
    path: '/clubs',
    title: {
      en: 'Clubs | DAO Communities for Crypto, Gaming & More | AlienFlowSpace',
      es: 'Clubs | Comunidades DAO para Cripto, Gaming y Mas | AlienFlowSpace',
      pt: 'Clubs | Comunidades DAO para Cripto, Gaming e Mais | AlienFlowSpace',
      fr: 'Clubs | Communautes DAO pour Crypto, Gaming et Plus | AlienFlowSpace',
    },
    description: {
      en: 'Join 19+ DAO clubs: crypto trading, gaming, NFT art, wellness and more. Connect with wallets, exchanges and Web3 platforms.',
      es: 'Unete a mas de 19 clubs DAO: trading cripto, gaming, arte NFT, bienestar y mas. Conecta con wallets, exchanges y plataformas Web3.',
      pt: 'Junte-se a mais de 19 clubs DAO: trading cripto, gaming, arte NFT, bem-estar e mais. Conecte-se com wallets, exchanges e plataformas Web3.',
      fr: 'Rejoignez plus de 19 clubs DAO: trading crypto, gaming, art NFT, bien-etre et plus. Connectez-vous avec wallets, exchanges et plateformes Web3.',
    },
    keywords: ['dao clubs', 'crypto community', 'nft club', 'gaming dao', 'web3 community', 'crypto trading', 'wallets'],
    jsonLdType: 'none',
  },
  '/conetworking': {
    path: '/conetworking',
    title: {
      en: 'CoNetWorKing | DeFi Services & DEX | AlienFlowSpace DAO',
      es: 'CoNetWorKing | Servicios DeFi y DEX | AlienFlowSpace DAO',
      pt: 'CoNetWorKing | Servicos DeFi e DEX | AlienFlowSpace DAO',
      fr: 'CoNetWorKing | Services DeFi et DEX | AlienFlowSpace DAO',
    },
    description: {
      en: 'Decentralized finance services: AMM, staking, farming, DeFi, DeSci, ReFi, RWA, GameFi and SocialFi. Connect with the future of DeFi.',
      es: 'Servicios de finanzas descentralizadas: AMM, staking, farming, DeFi, DeSci, ReFi, RWA, GameFi y SocialFi. Conecta con el futuro de DeFi.',
      pt: 'Servicos de financas descentralizadas: AMM, staking, farming, DeFi, DeSci, ReFi, RWA, GameFi e SocialFi. Conecte-se com o futuro do DeFi.',
      fr: 'Services de finance decentralisee: AMM, staking, farming, DeFi, DeSci, ReFi, RWA, GameFi et SocialFi. Connectez-vous avec le futur de la DeFi.',
    },
    keywords: ['defi services', 'dex', 'amm', 'staking', 'farming', 'refi', 'rwa', 'blockchain finance', 'dex exchange'],
    jsonLdType: 'none',
  },
  '/alien-trip': {
    path: '/alien-trip',
    title: {
      en: 'AlienTrip | Roadmap, Tokenomics & NFT Mint | AlienFlowSpace DAO',
      es: 'AlienTrip | Roadmap, Tokenomia y NFT Mint | AlienFlowSpace DAO',
      pt: 'AlienTrip | Roadmap, Tokenomia e NFT Mint | AlienFlowSpace DAO',
      fr: 'AlienTrip | Roadmap, Tokenomie et NFT Mint | AlienFlowSpace DAO',
    },
    description: {
      en: 'Explore our cosmic roadmap, tokenomics and NFT passport mint. Join the journey from Web3 to quantum computing and interplanetary expansion.',
      es: 'Explora nuestra hoja de ruta cosmica, tokenomia y mint de pasaporte NFT. Unete al viaje de Web3 a computacion cuantica y expansion interplanetaria.',
      pt: 'Explore nosso roadmap cosmico, tokenomia e mint de passaporte NFT. Junte-se a viagem de Web3 a computacao quantica e expansao interplanetaria.',
      fr: 'Explorez notre roadmap cosmique, tokenomie et mint de passeport NFT. Rejoignez le voyage de Web3 a linformatique quantique et lexpansion interplanetaire.',
    },
    keywords: ['nft mint', 'tokenomics', 'roadmap', 'nft passport', 'web5', 'quantum computing', 'alienflow dao'],
    jsonLdType: 'none',
  },
  '/contact': {
    path: '/contact',
    title: {
      en: 'Contact | Connect with AlienFlowSpace DAO',
      es: 'Contacto | Conecta con AlienFlowSpace DAO',
      pt: 'Contato | Conecte-se com AlienFlowSpace DAO',
      fr: 'Contact | Connectez-vous avec AlienFlowSpace DAO',
    },
    description: {
      en: 'Get in touch with AlienFlowSpace DAO through Discord, Telegram, GitHub, X and more. Join our cosmic community of Web3 innovators.',
      es: 'Ponte en contacto con AlienFlowSpace DAO a traves de Discord, Telegram, GitHub, X y mas. Unete a nuestra comunidad cosmica de innovadores Web3.',
      pt: 'Entre em contato com AlienFlowSpace DAO atraves de Discord, Telegram, GitHub, X e mais. Junte-se a nossa comunidade cosmica de inovadores Web3.',
      fr: 'Contactez AlienFlowSpace DAO via Discord, Telegram, GitHub, X et plus. Rejoignez notre communaute cosmique dinnovateurs Web3.',
    },
    keywords: ['contact dao', 'join dao', 'web3 community', 'discord crypto', 'telegram dao'],
    jsonLdType: 'none',
  },
  '/privacy-policy': {
    path: '/privacy-policy',
    title: {
      en: 'Privacy Policy | AlienFlowSpace DAO',
      es: 'Politica de Privacidad | AlienFlowSpace DAO',
      pt: 'Politica de Privacidade | AlienFlowSpace DAO',
      fr: 'Politique de Confidentialite | AlienFlowSpace DAO',
    },
    description: {
      en: 'Privacy and cookie policy for AlienFlowSpace DAO. How we collect, use and protect your data on our Web3 platform.',
      es: 'Politica de privacidad y cookies para AlienFlowSpace DAO. Como recopilamos, usamos y protegemos tus datos en nuestra plataforma Web3.',
      pt: 'Politica de privacidade e cookies para AlienFlowSpace DAO. Como coletamos, usamos e protegemos seus dados em nossa plataforma Web3.',
      fr: 'Politique de confidentialite et de cookies pour AlienFlowSpace DAO. Comment nous collectons, utilisons et protegeons vos donnees.',
    },
    noindex: true,
    jsonLdType: 'none',
  },
  '/terms-of-service': {
    path: '/terms-of-service',
    title: {
      en: 'Terms of Service | AlienFlowSpace DAO',
      es: 'Terminos de Servicio | AlienFlowSpace DAO',
      pt: 'Termos de Servico | AlienFlowSpace DAO',
      fr: 'Conditions dUtilisation | AlienFlowSpace DAO',
    },
    description: {
      en: 'Terms of service for AlienFlowSpace DAO. Rules for participating in our decentralized governance and Web3 ecosystem.',
      es: 'Terminos de servicio para AlienFlowSpace DAO. Reglas para participar en nuestra gobernanza descentralizada y ecosistema Web3.',
      pt: 'Termos de servico para AlienFlowSpace DAO. Regras para participar em nossa governanca descentralizada e ecossistema Web3.',
      fr: 'Conditions dutilisation pour AlienFlowSpace DAO. Regles pour participer a notre gouvernance decentralisee et ecosysteme Web3.',
    },
    noindex: true,
    jsonLdType: 'none',
  },
};

export const getSeoMeta = (path: string): SeoPageMeta | undefined => {
  const clean = path.replace(/^\/(en|es|pt|fr)\//, '/') || '/';
  return SEO_PAGES[clean] || SEO_PAGES['/'];
};

export const buildCanonical = (path: string, lang: SupportedLang = DEFAULT_LANG): string => {
  const clean = path === '/' ? '' : path.replace(/^\/(en|es|pt|fr)\//, '/');
  return lang === DEFAULT_LANG
    ? `${SITE_URL}${clean || '/'}`
    : `${SITE_URL}/${lang}${clean || '/'}`;
};

export const buildHreflangAlternates = (path: string): Array<{ lang: SupportedLang; href: string }> => {
  const clean = path === '/' ? '' : path.replace(/^\/(en|es|pt|fr)\//, '/');
  return SUPPORTED_LANGS.map((lang) => ({
    lang,
    href: lang === DEFAULT_LANG
      ? `${SITE_URL}${clean || '/'}`
      : `${SITE_URL}/${lang}${clean || '/'}`,
  }));
};
