import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import type { SupportedLang } from '@/lib/seo';
import { DEFAULT_LANG, SUPPORTED_LANGS } from '@/lib/seo';

interface LanguageContextValue {
  lang: SupportedLang;
  setLang: (lang: SupportedLang) => void;
  t: (key: string) => string;
}

const translations: Record<SupportedLang, Record<string, string>> = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.academy': 'Academy',
    'nav.clubs': 'Clubs',
    'nav.conetworking': 'CoNetWorKing',
    'nav.alienTrip': 'AlienTrip',
    'nav.contact': 'Contact',
    'footer.rights': 'All rights reserved',
    'cta.joinDao': 'Join the DAO',
    'cta.connectWallet': 'Connect Wallet',
    'cta.exploreEcosystem': 'Explore the Ecosystem',
    'cta.getStarted': 'Get Started',
    'newsletter.title': 'Join the Cosmic Newsletter',
    'newsletter.subtitle': 'Get the latest DAO updates, token news and ecosystem insights',
    'newsletter.placeholder': 'Your email address',
    'newsletter.submit': 'Subscribe',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Sobre Nosotros',
    'nav.academy': 'Academia',
    'nav.clubs': 'Clubs',
    'nav.conetworking': 'CoNetWorKing',
    'nav.alienTrip': 'AlienTrip',
    'nav.contact': 'Contacto',
    'footer.rights': 'Todos los derechos reservados',
    'cta.joinDao': 'Unete a la DAO',
    'cta.connectWallet': 'Conectar Wallet',
    'cta.exploreEcosystem': 'Explorar el Ecosistema',
    'cta.getStarted': 'Comenzar',
    'newsletter.title': 'Unete al Boletin Cosmico',
    'newsletter.subtitle': 'Recibe las ultimas noticias de la DAO, tokens e insights del ecosistema',
    'newsletter.placeholder': 'Tu correo electronico',
    'newsletter.submit': 'Suscribirse',
  },
  pt: {
    'nav.home': 'Inicio',
    'nav.about': 'Sobre Nos',
    'nav.academy': 'Academia',
    'nav.clubs': 'Clubs',
    'nav.conetworking': 'CoNetWorKing',
    'nav.alienTrip': 'AlienTrip',
    'nav.contact': 'Contato',
    'footer.rights': 'Todos os direitos reservados',
    'cta.joinDao': 'Junte-se a DAO',
    'cta.connectWallet': 'Conectar Wallet',
    'cta.exploreEcosystem': 'Explorar o Ecossistema',
    'cta.getStarted': 'Comecar',
    'newsletter.title': 'Junte-se ao Boletim Cosmico',
    'newsletter.subtitle': 'Receba as ultimas noticias da DAO, tokens e insights do ecossistema',
    'newsletter.placeholder': 'Seu endereco de email',
    'newsletter.submit': 'Inscrever-se',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.about': 'A Propos',
    'nav.academy': 'Academie',
    'nav.clubs': 'Clubs',
    'nav.conetworking': 'CoNetWorKing',
    'nav.alienTrip': 'AlienTrip',
    'nav.contact': 'Contact',
    'footer.rights': 'Tous droits reserves',
    'cta.joinDao': 'Rejoindre la DAO',
    'cta.connectWallet': 'Connecter Wallet',
    'cta.exploreEcosystem': 'Explorer lEcosysteme',
    'cta.getStarted': 'Demarrer',
    'newsletter.title': 'Rejoindre le Bulletin Cosmique',
    'newsletter.subtitle': 'Recevez les dernieres nouvelles de la DAO, tokens et insights de lecosysteme',
    'newsletter.placeholder': 'Votre adresse email',
    'newsletter.submit': 'Sabonner',
  },
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

function detectLangFromPath(pathname: string): SupportedLang {
  const match = pathname.match(/^\/(en|es|pt|fr)(\/|$)/);
  if (match && SUPPORTED_LANGS.includes(match[1] as SupportedLang)) {
    return match[1] as SupportedLang;
  }
  return DEFAULT_LANG;
}

function stripLangFromPath(pathname: string): string {
  return pathname.replace(/^\/(en|es|pt|fr)(\/|$)/, '/') || '/';
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<SupportedLang>(() => {
    if (typeof window !== 'undefined') {
      return detectLangFromPath(window.location.pathname);
    }
    return DEFAULT_LANG;
  });

  const setLang = useCallback((newLang: SupportedLang) => {
    setLangState(newLang);
    if (typeof window !== 'undefined') {
      const currentPath = window.location.pathname;
      const cleanPath = stripLangFromPath(currentPath);
      const newPath = newLang === DEFAULT_LANG ? cleanPath : `/${newLang}${cleanPath === '/' ? '' : cleanPath}`;
      window.history.pushState({}, '', newPath);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const detected = detectLangFromPath(window.location.pathname);
      setLangState(detected);
    }
  }, []);

  const t = useCallback((key: string): string => {
    return translations[lang]?.[key] || translations[DEFAULT_LANG]?.[key] || key;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return ctx;
}
