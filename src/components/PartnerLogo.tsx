import React, { useState } from 'react';

/**
 * Logo de un socio o plataforma, con respaldo en cascada.
 *
 * Muchos partners de los clubs no tenían imagen (`Revolut`, `Wirex`, todo el
 * bloque GameFi) y otros apuntaban a URLs muertas, así que la tarjeta acababa
 * mostrando un icono genérico o un hueco. Aquí, si no hay logo o la imagen
 * falla, se pide el favicon oficial de 128 px del propio dominio del enlace; si
 * ni eso existe, se pinta un monograma con las iniciales. Nunca queda un hueco
 * anónimo ni el icono de imagen rota.
 *
 * El logo va sobre una pastilla clara y sin filtros: así se leen tanto los
 * logos oscuros como los que tienen fondo blanco sobre el tema oscuro del sitio.
 */

export interface PartnerLogoProps {
  name: string;
  /** Logo explícito (local o remoto). */
  logo?: string;
  /** Enlace del socio: de ahí sale el favicon de respaldo. */
  url?: string;
  /** Tamaño y márgenes de la pastilla. */
  className?: string;
}

const initials = (name: string): string =>
  name
    .replace(/[^\p{L}\p{N} ]/gu, ' ')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() ?? '')
    .join('');

/** Favicon oficial del dominio del enlace; nunca para enlaces internos. */
const faviconFor = (url?: string): string | null => {
  if (!url) return null;
  try {
    const { hostname, protocol } = new URL(url);
    if (!/^https?:$/.test(protocol)) return null;
    if (/(^|\.)alienflow\.space$/.test(hostname)) return null;
    return `https://www.google.com/s2/favicons?sz=128&domain=${hostname}`;
  } catch {
    return null;
  }
};

const PartnerLogo: React.FC<PartnerLogoProps> = ({ name, logo, url, className = 'w-10 h-10' }) => {
  const sources = [logo, faviconFor(url)].filter((source): source is string => Boolean(source));
  const [attempt, setAttempt] = useState(0);
  const src = sources[attempt];

  return (
    <span
      className={`${className} flex-shrink-0 flex items-center justify-center bg-white/92 p-1.5 overflow-hidden`}
    >
      {src ? (
        <img
          src={src}
          alt=""
          width={96}
          height={96}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          onError={() => setAttempt((current) => current + 1)}
          className="max-h-full max-w-full object-contain"
        />
      ) : (
        <span aria-hidden="true" className="text-[11px] font-nasalization tracking-widest text-neutral-800">
          {initials(name) || '·'}
        </span>
      )}
    </span>
  );
};

export default PartnerLogo;
