import React, { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { sponsorsFor, type SponsorSlotName } from '@/data/sponsors';
import { onConsentChange, readConsent, type ConsentState } from '@/lib/consent';
import { trackEvent } from '@/lib/analytics';

/**
 * Espacio publicitario, en dos capas:
 *
 * 1. **Patrocinador propio** (`src/data/sponsors.ts`): una tarjeta de la casa, sin
 *    script de terceros, sin cookies y sin peticiones a nadie. Se puede vender hoy
 *    mismo y no depende de ninguna aprobación.
 * 2. **AdSense** (`VITE_ADSENSE_CLIENT` + `VITE_ADSENSE_SLOT`): el script y el
 *    `<ins>` solo se crean cuando el visitante ha aceptado cookies. Sin
 *    consentimiento no se carga nada, y sin configuración no se pinta nada.
 *
 * En ningún caso aparece una caja vacía de "Ad Space": si no hay nada que
 * mostrar, el componente no renderiza nada y no deja hueco.
 */

const ADSENSE_CLIENT = (import.meta.env.VITE_ADSENSE_CLIENT as string | undefined)?.trim() || '';
const ADSENSE_SLOT = (import.meta.env.VITE_ADSENSE_SLOT as string | undefined)?.trim() || '';
const ADSENSE_SCRIPT_ID = 'adsbygoogle-script';

interface AdBannerProps {
  /** Qué página ocupa el espacio. Decide qué patrocinador se muestra. */
  slot: SponsorSlotName;
  className?: string;
}

const AdBanner: React.FC<AdBannerProps> = ({ slot, className = '' }) => {
  const [consent, setConsent] = useState<ConsentState>(() => readConsent());
  const sponsor = sponsorsFor(slot)[0];
  const adsenseReady = Boolean(ADSENSE_CLIENT && ADSENSE_SLOT);

  // The banner can be accepted while the page is open, so react to the choice.
  useEffect(() => onConsentChange(setConsent), []);

  useEffect(() => {
    if (!adsenseReady || consent !== 'accepted') return;

    if (!document.getElementById(ADSENSE_SCRIPT_ID)) {
      const script = document.createElement('script');
      script.id = ADSENSE_SCRIPT_ID;
      script.async = true;
      script.crossOrigin = 'anonymous';
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`;
      document.head.appendChild(script);
    }

    try {
      const w = window as unknown as { adsbygoogle?: unknown[] };
      w.adsbygoogle = w.adsbygoogle ?? [];
      w.adsbygoogle.push({});
    } catch {
      /* a blocked ad script must not break the page */
    }
    trackEvent('ad_impression', { network: 'adsense', slot });
  }, [adsenseReady, consent, slot]);

  if (sponsor) {
    return (
      <aside
        aria-label="Contenido patrocinado"
        className={`border border-af-border bg-af-surface/20 p-5 md:p-6 ${className}`}
      >
        <p className="text-[10px] uppercase tracking-[0.2em] text-af-text-muted mb-3">
          {sponsor.badge ?? 'Patrocinado'}
        </p>
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
          <div className="flex-1">
            <h3 className="text-alien-gold font-nasalization text-base mb-1">{sponsor.name}</h3>
            <p className="text-sm text-gray-300 leading-relaxed">{sponsor.body}</p>
          </div>
          <a
            href={sponsor.href}
            target="_blank"
            rel="sponsored noopener noreferrer"
            onClick={() => trackEvent('ad_click', { network: 'sponsor', sponsor: sponsor.id })}
            className="af-pill af-pill-outline !py-2.5 !px-5 whitespace-nowrap self-start sm:self-auto"
          >
            {sponsor.cta}
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </aside>
    );
  }

  if (adsenseReady && consent === 'accepted') {
    return (
      <div className={className}>
        <p className="text-[10px] uppercase tracking-[0.2em] text-af-text-muted mb-2">Publicidad</p>
        <ins
          className="adsbygoogle"
          style={{ display: 'block', minHeight: 120 }}
          data-ad-client={ADSENSE_CLIENT}
          data-ad-slot={ADSENSE_SLOT}
          data-full-width-responsive="true"
        />
      </div>
    );
  }

  return null;
};

export default AdBanner;
