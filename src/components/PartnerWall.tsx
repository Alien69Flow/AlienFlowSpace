import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';
import { isAffiliateUrl, hostLabel } from '@/lib/affiliate';

/**
 * Muro de socios de la Academy.
 *
 * Antes cada logo vivía en un cuadrado de 36 px con `grayscale` y hover a color:
 * los logos con relleno blanco desaparecían sobre el fondo oscuro, los de 32 px
 * (favicons) se veían borrosos, y cuando una URL externa caía el hueco quedaba
 * en blanco sin decir a quién pertenecía.
 *
 * Ahora:
 * - cada logo se pinta sobre una pastilla clara, así se leen tanto los logos
 *   oscuros como los claros, y **sin filtros**: el color es del socio, no nuestro;
 * - el nombre va siempre al lado del logo, así un logo que falle nunca deja un
 *   hueco anónimo;
 * - si la imagen no carga, se muestra un monograma con las iniciales y el enlace
 *   sigue funcionando (nada de icono de imagen rota);
 * - `loading="lazy"` + `decoding="async"` para no retrasar el resto de la página.
 */

export interface PartnerItem {
  name: string;
  url: string;
  /** Vacío si el socio no tiene logo utilizable: se pinta el monograma. */
  logo?: string;
}

export interface PartnerCategory {
  label: string;
  partners: PartnerItem[];
}

interface PartnerWallProps {
  categories: PartnerCategory[];
}

const initials = (name: string): string =>
  name
    .replace(/[^\p{L}\p{N} ]/gu, ' ')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() ?? '')
    .join('');

const PartnerLogo: React.FC<{ partner: PartnerItem }> = ({ partner }) => {
  const [failed, setFailed] = useState(false);

  if (failed || !partner.logo) {
    return (
      <span
        aria-hidden="true"
        className="w-full h-full flex items-center justify-center bg-af-surface text-alien-gold font-nasalization text-[13px] tracking-widest"
      >
        {initials(partner.name) || '·'}
      </span>
    );
  }

  return (
    <img
      src={partner.logo}
      alt=""
      referrerPolicy="no-referrer"
      width={96}
      height={48}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className="max-h-full max-w-full object-contain"
    />
  );
};

const PartnerWall: React.FC<PartnerWallProps> = ({ categories }) => (
  <div className="space-y-10">
    {categories.map((category) => {
      const partners = [...category.partners].sort((a, b) => a.name.localeCompare(b.name));

      return (
        <section key={category.label} aria-labelledby={`partners-${category.label}`}>
          <div className="flex items-baseline justify-between gap-4 border-b border-af-border-hairline pb-3 mb-4">
            <h3
              id={`partners-${category.label}`}
              className="text-[11px] font-nasalization text-alien-gold tracking-[0.25em] uppercase"
            >
              {category.label}
            </h3>
            <span className="text-[10px] text-af-text-muted/60 tabular-nums whitespace-nowrap">
              {partners.length} socios
            </span>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
            {partners.map((partner) => (
              <li key={`${category.label}-${partner.name}`}>
                <a
                  href={partner.url}
                  target="_blank"
                  rel={isAffiliateUrl(partner.url) ? 'noopener noreferrer sponsored' : 'noopener noreferrer'}
                  onClick={() =>
                    trackEvent(isAffiliateUrl(partner.url) ? 'affiliate_click' : 'outbound_click', {
                      partner: partner.name,
                      host: hostLabel(partner.url),
                      page: 'academy',
                    })
                  }
                  title={partner.name}
                  className="group flex items-center gap-3 h-16 px-3 border border-af-border-hairline bg-af-surface/20 hover:border-alien-green/40 hover:bg-af-surface/50 transition-colors duration-300"
                >
                  <span className="h-11 w-11 flex-shrink-0 flex items-center justify-center bg-white/92 p-1.5 group-hover:bg-white transition-colors duration-300">
                    <PartnerLogo partner={partner} />
                  </span>
                  <span className="min-w-0 flex-1 text-[11px] leading-tight text-gray-300 group-hover:text-alien-gold transition-colors duration-300 line-clamp-2">
                    {partner.name}
                  </span>
                  <ExternalLink className="w-2.5 h-2.5 text-transparent group-hover:text-alien-green transition-colors flex-shrink-0" />
                </a>
              </li>
            ))}
          </ul>
        </section>
      );
    })}
  </div>
);

export default PartnerWall;
