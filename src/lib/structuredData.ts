import { SITE_URL, type SupportedLang } from './seo';

interface JsonLdParams {
  path: string;
  lang: SupportedLang;
  type: 'organization' | 'website' | 'course' | 'product' | 'breadcrumb' | 'faq' | 'none';
}

const orgData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'AlienFlowSpace DAO',
  alternateName: 'AlienFlowSpace',
  url: SITE_URL,
  logo: `${SITE_URL}/lovable-uploads/ALogo.png`,
  description: 'A community-owned Web 3/4/5 DAO uniting BioFi, DeFi, DePIN, DeSci, ReFi, RWA and SocialFi under one cosmic ecosystem.',
  sameAs: [
    'https://x.com/alien69flow',
    'https://github.com/Alien69Flow',
    'https://www.instagram.com/alien69flow/',
    'https://www.linkedin.com/company/alienflowspace',
    'https://reddit.com/user/Alien69Flow',
    'https://t.me/AlienFlow',
    'https://alienflowspace.gitbook.io',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    email: 'info@alienflow.space',
  },
};

const websiteData = (lang: SupportedLang) => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'AlienFlowSpace DAO',
  url: lang === 'en' ? SITE_URL : `${SITE_URL}/${lang}`,
  description: 'A community-owned Web 3/4/5 DAO uniting BioFi, DeFi, DePIN, DeSci, ReFi, RWA and SocialFi.',
  inLanguage: lang,
  publisher: {
    '@type': 'Organization',
    name: 'AlienFlowSpace DAO',
    logo: `${SITE_URL}/lovable-uploads/ALogo.png`,
  },
});

const courseData = (lang: SupportedLang) => ({
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'AlienFlowSpace Academy',
  url: `${SITE_URL}/academy`,
  description: lang === 'es'
    ? 'Academia descentralizada con mas de 30 plataformas asociadas. Aprende blockchain, DeFi, IA, permacultura y sostenibilidad.'
    : lang === 'pt'
      ? 'Academia descentralizada com mais de 30 plataformas parceiras. Aprenda blockchain, DeFi, IA, permacultura e sustentabilidade.'
      : lang === 'fr'
        ? 'Academie decentralisee avec plus de 30 plateformes partenaires. Apprenez blockchain, DeFi, IA, permaculture et durabilite.'
        : 'Decentralized learning academy with 30+ partner platforms. Master blockchain, DeFi, AI, permaculture and sustainability.',
  parentOrganization: {
    '@type': 'Organization',
    name: 'AlienFlowSpace DAO',
  },
});

const productData = (lang: SupportedLang) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: lang === 'es' ? 'Productos Eco AlienFlowSpace' : 'AlienFlowSpace Eco Products',
  url: `${SITE_URL}/clubs`,
  description: lang === 'es'
    ? 'Gorras organicas, joyeria eco y productos sostenibles canjeables.'
    : 'Organic hats, eco jewelry and sustainable products available for exchange.',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'Product',
        name: 'Cannabis Leaf Earrings',
        description: 'Sterling silver hexagon earrings with 24k gold cannabis leaf design',
        image: `${SITE_URL}/lovable-uploads/eco-earrings-thumb.webp`,
        brand: { '@type': 'Brand', name: 'AlienFlowSpace' },
        category: 'Jewelry',
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'Product',
        name: 'Navy Alien Hat',
        description: 'Premium navy trucker hat with golden alien symbol',
        image: `${SITE_URL}/lovable-uploads/eco-hat-navy-thumb.webp`,
        brand: { '@type': 'Brand', name: 'AlienFlowSpace' },
        category: 'Headwear',
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'Product',
        name: 'Organic Bucket Hat',
        description: '100% organic cotton bucket hat with eco-friendly design',
        image: `${SITE_URL}/lovable-uploads/eco-bucket-hat-thumb.webp`,
        brand: { '@type': 'Brand', name: 'AlienFlowSpace' },
        category: 'Headwear',
      },
    },
  ],
});

const breadcrumbData = (path: string, lang: SupportedLang) => {
  const clean = path.replace(/^\/(en|es|pt|fr|zh|hi|ja)\//, '/') || '/';
  const labels: Record<string, Record<SupportedLang, string>> = {
    '/': { en: 'Home', es: 'Inicio', pt: 'Inicio', fr: 'Accueil', zh: '首页', hi: 'होम', ja: 'ホーム' },
    '/about': { en: 'About', es: 'Sobre Nosotros', pt: 'Sobre Nos', fr: 'A Propos', zh: '关于我们', hi: 'हमारे बारे में', ja: '私たちについて' },
    '/academy': { en: 'Academy', es: 'Academia', pt: 'Academia', fr: 'Academie', zh: '学院', hi: 'अकादमी', ja: 'アカデミー' },
    '/clubs': { en: 'Clubs', es: 'Clubs', pt: 'Clubs', fr: 'Clubs', zh: '俱乐部', hi: 'क्लब्स', ja: 'クラブ' },
    '/conetworking': { en: 'CoNetWorKing', es: 'CoNetWorKing', pt: 'CoNetWorKing', fr: 'CoNetWorKing', zh: 'CoNetWorKing', hi: 'CoNetWorKing', ja: 'CoNetWorKing' },
    '/alien-trip': { en: 'AlienTrip', es: 'AlienTrip', pt: 'AlienTrip', fr: 'AlienTrip', zh: 'AlienTrip', hi: 'AlienTrip', ja: 'AlienTrip' },
    '/contact': { en: 'Contact', es: 'Contacto', pt: 'Contato', fr: 'Contact', zh: '联系我们', hi: 'संपर्क', ja: 'お問い合わせ' },
    '/privacy-policy': { en: 'Privacy Policy', es: 'Privacidad', pt: 'Privacidade', fr: 'Confidentialite', zh: '隐私政策', hi: 'गोपनीयता नीति', ja: 'プライバシーポリシー' },
    '/terms-of-service': { en: 'Terms of Service', es: 'Terminos', pt: 'Termos', fr: 'Conditions', zh: '服务条款', hi: 'सेवा की शर्तें', ja: '利用規約' },
  };

  const items: Array<{ '@type': string; position: number; name: string; item: string }> = [];
  items.push({
    '@type': 'ListItem',
    position: 1,
    name: labels['/'][lang],
    item: lang === 'en' ? SITE_URL : `${SITE_URL}/${lang}`,
  });

  if (clean !== '/') {
    const label = labels[clean]?.[lang] || clean;
    const url = lang === 'en' ? `${SITE_URL}${clean}` : `${SITE_URL}/${lang}${clean}`;
    items.push({
      '@type': 'ListItem',
      position: 2,
      name: label,
      item: url,
    });
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items,
  };
};

export function generateJsonLd({ path, lang, type }: JsonLdParams): Record<string, unknown> | null {
  switch (type) {
    case 'organization':
      return orgData;
    case 'website':
      return websiteData(lang);
    case 'course':
      return courseData(lang);
    case 'product':
      return productData(lang);
    case 'breadcrumb':
      return breadcrumbData(path, lang);
    default:
      return null;
  }
}
