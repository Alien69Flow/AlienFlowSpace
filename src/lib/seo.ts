export type SupportedLang = 'en' | 'es' | 'pt' | 'fr' | 'zh' | 'hi' | 'ja';

export const SUPPORTED_LANGS: SupportedLang[] = ['en', 'es', 'pt', 'fr', 'zh', 'hi', 'ja'];
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
      zh: 'AlienFlowSpace DAO | Web3、DeFi与区块链生态系统',
      hi: 'AlienFlowSpace DAO | Web3, DeFi और ब्लॉकचेन पारिस्थितिकी तंत्र',
      ja: 'AlienFlowSpace DAO | Web3、DeFiとブロックチェーンエコシステム',
    },
    description: {
      en: 'A community-owned DAO uniting BioFi, DeFi, DePIN, DeSci, ReFi, RWA and SocialFi under one cosmic ecosystem. Web 3/4/5 innovation.',
      es: 'Una DAO comunitaria que une BioFi, DeFi, DePIN, DeSci, ReFi, RWA y SocialFi en un ecosistema cosmico. Innovacion Web 3/4/5.',
      pt: 'Uma DAO comunitaria que une BioFi, DeFi, DePIN, DeSci, ReFi, RWA e SocialFi em um ecossistema cosmico. Inovacao Web 3/4/5.',
      fr: 'Une DAO communautaire unissant BioFi, DeFi, DePIN, DeSci, ReFi, RWA et SocialFi dans un ecosysteme cosmique. Innovation Web 3/4/5.',
      zh: '一个社区拥有的DAO，将BioFi、DeFi、DePIN、DeSci、ReFi、RWA和SocialFi统一在一个宇宙生态系统下。Web 3/4/5创新。',
      hi: 'एक सामुदायिक स्वामित्व वाला DAO जो BioFi, DeFi, DePIN, DeSci, ReFi, RWA और SocialFi को एक ब्रह्मांडीय पारिस्थितिकी तंत्र के तहत जोड़ता है।Web 3/4/5 नवाचार।',
      ja: 'コミュニティ所有のDAOがBioFi、DeFi、DePIN、DeSci、ReFi、RWA、SocialFiを一つの宇宙エコシステムに統合。Web 3/4/5イノベーション。',
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
      zh: '关于我们 | AlienFlowSpace DAO',
      hi: 'हमारे बारे में | AlienFlowSpace DAO',
      ja: '私たちについて | AlienFlowSpace DAO',
    },
    description: {
      en: 'Innovative Web3 solutions with blockchain, AI neural networks and quantum computing. Energy efficiency and environmental sustainability.',
      es: 'Soluciones Web3 innovadoras con blockchain, redes neuronales de IA y computacion cuantica. Eficiencia energetica y sostenibilidad.',
      pt: 'Solucoes Web3 inovadoras com blockchain, redes neurais de IA e computacao quantica. Eficiencia energetica e sustentabilidade.',
      fr: 'Solutions Web3 innovantes avec blockchain, reseaux de neurones IA et informatique quantique. Efficacite energetique et durabilite.',
      zh: '基于区块链、AI神经网络和量子计算的创新Web3解决方案。节能环保与可持续发展。',
      hi: 'ब्लॉकचेन, AI तंत्रिका नेटवर्क और क्वांटम कंप्यूटिंग के साथ अभिनव Web3 समाधान।ऊर्जा दक्षता और पर्यावरण स्थिरता।',
      ja: 'ブロックチェーン、AIニューラルネットワーク、量子計算を用いた革新的なWeb3ソリューション。エネルギー効率と環境の持続可能性。',
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
      zh: '学院 | 学习Web3、区块链与DeFi | AlienFlowSpace DAO',
      hi: 'अकादमी | Web3, ब्लॉकचेन और DeFi सीखें | AlienFlowSpace DAO',
      ja: 'アカデミー | Web3、ブロックチェーン、DeFiを学ぶ | AlienFlowSpace DAO',
    },
    description: {
      en: 'Decentralized learning academy with 30+ partner platforms. Master blockchain, DeFi, AI, permaculture and sustainable technologies.',
      es: 'Academia de aprendizaje descentralizado con mas de 30 plataformas asociadas. Domina blockchain, DeFi, IA, permacultura y sostenibilidad.',
      pt: 'Academia de aprendizado descentralizado com mais de 30 plataformas parceiras. Domine blockchain, DeFi, IA, permacultura e sustentabilidade.',
      fr: 'Academie dapprentissage decentralisee avec plus de 30 plateformes partenaires. Maitrisez blockchain, DeFi, IA, permaculture et durabilite.',
      zh: '拥有30多个合作平台的去中心化学习学院。掌握区块链、DeFi、AI、永续农业和可持续技术。',
      hi: '30+ साझेदार प्लेटफॉर्म के साथ विकेंद्रीकृत शिक्षण अकादमी।ब्लॉकचेन, DeFi, AI, पर्माकल्चर और सतत प्रौद्योगिकी में महारत हासिल करें।',
      ja: '30以上のパートナープラットフォームを備えた分散型学習アカデミー。ブロックチェーン、DeFi、AI、パーマカルチャー、持続可能な技術を習得。',
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
      zh: '俱乐部 | 加密货币、游戏等DAO社区 | AlienFlowSpace',
      hi: 'क्लब्स | क्रिप्टो, गेमिंग और अधिक के लिए DAO समुदाय | AlienFlowSpace',
      ja: 'クラブ | 暗号通貨、ゲームなどのDAOコミュニティ | AlienFlowSpace',
    },
    description: {
      en: 'Join 19+ DAO clubs: crypto trading, gaming, NFT art, wellness and more. Connect with wallets, exchanges and Web3 platforms.',
      es: 'Unete a mas de 19 clubs DAO: trading cripto, gaming, arte NFT, bienestar y mas. Conecta con wallets, exchanges y plataformas Web3.',
      pt: 'Junte-se a mais de 19 clubs DAO: trading cripto, gaming, arte NFT, bem-estar e mais. Conecte-se com wallets, exchanges e plataformas Web3.',
      fr: 'Rejoignez plus de 19 clubs DAO: trading crypto, gaming, art NFT, bien-etre et plus. Connectez-vous avec wallets, exchanges et plateformes Web3.',
      zh: '加入19+个DAO俱乐部：加密交易、游戏、NFT艺术、健康等。连接钱包、交易所和Web3平台。',
      hi: '19+ DAO क्लब्स में शामिल हों: क्रिप्टो ट्रेडिंग, गेमिंग, NFT कला, स्वास्थ्य और बहुत कुछ।वॉलेट, एक्सचेंज और Web3 प्लेटफॉर्म से जुड़ें।',
      ja: '19以上のDAOクラブに参加：暗号取引、ゲーム、NFTアート、ウェルネスなど。ウォレット、取引所、Web3プラットフォームに接続。',
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
      zh: 'CoNetWorKing | DeFi服务与DEX | AlienFlowSpace DAO',
      hi: 'CoNetWorKing | DeFi सेवाएं और DEX | AlienFlowSpace DAO',
      ja: 'CoNetWorKing | DeFiサービスとDEX | AlienFlowSpace DAO',
    },
    description: {
      en: 'Decentralized finance services: AMM, staking, farming, DeFi, DeSci, ReFi, RWA, GameFi and SocialFi. Connect with the future of DeFi.',
      es: 'Servicios de finanzas descentralizadas: AMM, staking, farming, DeFi, DeSci, ReFi, RWA, GameFi y SocialFi. Conecta con el futuro de DeFi.',
      pt: 'Servicos de financas descentralizadas: AMM, staking, farming, DeFi, DeSci, ReFi, RWA, GameFi e SocialFi. Conecte-se com o futuro do DeFi.',
      fr: 'Services de finance decentralisee: AMM, staking, farming, DeFi, DeSci, ReFi, RWA, GameFi et SocialFi. Connectez-vous avec le futur de la DeFi.',
      zh: '去中心化金融服务：AMM、质押、挖矿、DeFi、DeSci、ReFi、RWA、GameFi和SocialFi。连接DeFi的未来。',
      hi: 'विकेंद्रीकृत वित्त सेवाएं: AMM, स्टेकिंग, फार्मिंग, DeFi, DeSci, ReFi, RWA, GameFi और SocialFi।DeFi के भविष्य से जुड़ें।',
      ja: '分散型金融サービス：AMM、ステーキング、ファーミング、DeFi、DeSci、ReFi、RWA、GameFi、SocialFi。DeFiの未来に接続。',
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
      zh: 'AlienTrip | 路线图、代币经济学与NFT铸造 | AlienFlowSpace DAO',
      hi: 'AlienTrip | रोडमैप, टोकनोमिक्स और NFT मिंट | AlienFlowSpace DAO',
      ja: 'AlienTrip | ロードマップ、トークノミクス、NFTミント | AlienFlowSpace DAO',
    },
    description: {
      en: 'Explore our cosmic roadmap, tokenomics and NFT passport mint. Join the journey from Web3 to quantum computing and interplanetary expansion.',
      es: 'Explora nuestra hoja de ruta cosmica, tokenomia y mint de pasaporte NFT. Unete al viaje de Web3 a computacion cuantica y expansion interplanetaria.',
      pt: 'Explore nosso roadmap cosmico, tokenomia e mint de passaporte NFT. Junte-se a viagem de Web3 a computacao quantica e expansao interplanetaria.',
      fr: 'Explorez notre roadmap cosmique, tokenomie et mint de passeport NFT. Rejoignez le voyage de Web3 a linformatique quantique et lexpansion interplanetaire.',
      zh: '探索我们的宇宙路线图、代币经济学和NFT护照铸造。加入从Web3到量子计算和星际扩张的旅程。',
      hi: 'हमारे ब्रह्मांडीय रोडमैप, टोकनोमिक्स और NFT पासपोर्ट मिंट का अन्वेषण करें।Web3 से क्वांटम कंप्यूटिंग और अंतरग्रहीय विस्तार तक की यात्रा में शामिल हों।',
      ja: '宇宙のロードマップ、トークノミクス、NFTパスポートミントを探索。Web3から量子計算、惑星間拡張への旅に参加。',
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
      zh: '联系我们 | 连接AlienFlowSpace DAO',
      hi: 'संपर्क | AlienFlowSpace DAO से जुड़ें',
      ja: 'お問い合わせ | AlienFlowSpace DAOに接続',
    },
    description: {
      en: 'Get in touch with AlienFlowSpace DAO through Discord, Telegram, GitHub, X and more. Join our cosmic community of Web3 innovators.',
      es: 'Ponte en contacto con AlienFlowSpace DAO a traves de Discord, Telegram, GitHub, X y mas. Unete a nuestra comunidad cosmica de innovadores Web3.',
      pt: 'Entre em contato com AlienFlowSpace DAO atraves de Discord, Telegram, GitHub, X e mais. Junte-se a nossa comunidade cosmica de inovadores Web3.',
      fr: 'Contactez AlienFlowSpace DAO via Discord, Telegram, GitHub, X et plus. Rejoignez notre communaute cosmique dinnovateurs Web3.',
      zh: '通过Discord、Telegram、GitHub、X等联系AlienFlowSpace DAO。加入我们的Web3创新者宇宙社区。',
      hi: 'Discord, Telegram, GitHub, X और अधिक के माध्यम से AlienFlowSpace DAO से संपर्क करें।हमारे Web3 नवप्रवर्तकों के ब्रह्मांडीय समुदाय में शामिल हों।',
      ja: 'Discord、Telegram、GitHub、Xなどを通じてAlienFlowSpace DAOに連絡。Web3イノベーターの宇宙コミュニティに参加。',
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
      zh: '隐私政策 | AlienFlowSpace DAO',
      hi: 'गोपनीयता नीति | AlienFlowSpace DAO',
      ja: 'プライバシーポリシー | AlienFlowSpace DAO',
    },
    description: {
      en: 'Privacy and cookie policy for AlienFlowSpace DAO. How we collect, use and protect your data on our Web3 platform.',
      es: 'Politica de privacidad y cookies para AlienFlowSpace DAO. Como recopilamos, usamos y protegemos tus datos en nuestra plataforma Web3.',
      pt: 'Politica de privacidade e cookies para AlienFlowSpace DAO. Como coletamos, usamos e protegemos seus dados em nossa plataforma Web3.',
      fr: 'Politique de confidentialite et de cookies pour AlienFlowSpace DAO. Comment nous collectons, utilisons et protegeons vos donnees.',
      zh: 'AlienFlowSpace DAO的隐私和Cookie政策。我们如何在我们Web3平台上收集、使用和保护您的数据。',
      hi: 'AlienFlowSpace DAO के लिए गोपनीयता और कुकी नीति।हम अपने Web3 प्लेटफॉर्म पर आपका डेटा कैसे एकत्र, उपयोग और सुरक्षित करते हैं।',
      ja: 'AlienFlowSpace DAOのプライバシーとCookieポリシー。Web3プラットフォームでデータをどのように収集、使用、保護するか。',
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
      zh: '服务条款 | AlienFlowSpace DAO',
      hi: 'सेवा की शर्तें | AlienFlowSpace DAO',
      ja: '利用規約 | AlienFlowSpace DAO',
    },
    description: {
      en: 'Terms of service for AlienFlowSpace DAO. Rules for participating in our decentralized governance and Web3 ecosystem.',
      es: 'Terminos de servicio para AlienFlowSpace DAO. Reglas para participar en nuestra gobernanza descentralizada y ecosistema Web3.',
      pt: 'Termos de servico para AlienFlowSpace DAO. Regras para participar em nossa governanca descentralizada e ecossistema Web3.',
      fr: 'Conditions dutilisation pour AlienFlowSpace DAO. Regles pour participer a notre gouvernance decentralisee et ecosysteme Web3.',
      zh: 'AlienFlowSpace DAO的服务条款。参与我们去中心化治理和Web3生态系统的规则。',
      hi: 'AlienFlowSpace DAO के लिए सेवा की शर्तें।हमारे विकेंद्रीकृत शासन और Web3 पारिस्थितिकी तंत्र में भाग लेने के नियम।',
      ja: 'AlienFlowSpace DAOの利用規約。分散型ガバナンスとWeb3エコシステムへの参加ルール。',
    },
    noindex: true,
    jsonLdType: 'none',
  },
};

export const getSeoMeta = (path: string): SeoPageMeta | undefined => {
  const clean = path.replace(/^\/(en|es|pt|fr|zh|hi|ja)\//, '/') || '/';
  return SEO_PAGES[clean] || SEO_PAGES['/'];
};

export const buildCanonical = (path: string, lang: SupportedLang = DEFAULT_LANG): string => {
  const clean = path === '/' ? '' : path.replace(/^\/(en|es|pt|fr|zh|hi|ja)\//, '/');
  return lang === DEFAULT_LANG
    ? `${SITE_URL}${clean || '/'}`
    : `${SITE_URL}/${lang}${clean || '/'}`;
};

export const buildHreflangAlternates = (path: string): Array<{ lang: SupportedLang; href: string }> => {
  const clean = path === '/' ? '' : path.replace(/^\/(en|es|pt|fr|zh|hi|ja)\//, '/');
  return SUPPORTED_LANGS.map((lang) => ({
    lang,
    href: lang === DEFAULT_LANG
      ? `${SITE_URL}${clean || '/'}`
      : `${SITE_URL}/${lang}${clean || '/'}`,
  }));
};
