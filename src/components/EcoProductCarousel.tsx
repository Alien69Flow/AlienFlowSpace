import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { useReducedMotion } from 'framer-motion';
import {
  merchProducts,
  merchCollections,
  formatPrice,
  isPurchasable,
  withAffiliate,
  hasShopLinks,
  STORE_LABEL,
} from '@/data/merch';
import { isAffiliateUrl } from '@/lib/affiliate';
import { trackEvent } from '@/lib/analytics';

/**
 * Tienda EcoFlow. El catálogo vive en `src/data/merch.ts`: aquí no hay nombres,
 * precios ni enlaces escritos a mano.
 *
 * Reglas:
 *  - Sin `url`, no hay botón de compra («precio próximamente»), nunca un enlace muerto.
 *  - Todo enlace de tienda/afiliado sale con `rel="sponsored"` y se cuenta como
 *    `merch_click`; los afiliados además como `affiliate_click`.
 *  - La divulgación de afiliación aparece en cuanto existe algún enlace: es
 *    obligatoria (UE y programas como Amazon Associates).
 *  - El avance automático se pausa al pasar el ratón o al enfocar con el teclado,
 *    y se desactiva con `prefers-reduced-motion`.
 */
const EcoProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const product = merchProducts[currentIndex];
  const price = formatPrice(product.price);
  const href = withAffiliate(product.url);
  const purchasable = isPurchasable(product);
  const showDisclosure = hasShopLinks();

  useEffect(() => {
    if (paused || prefersReducedMotion) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % merchProducts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [paused, prefersReducedMotion]);

  const go = (delta: number) =>
    setCurrentIndex((prev) => (prev + delta + merchProducts.length) % merchProducts.length);

  const onBuy = () => {
    trackEvent('merch_click', { product: product.id, store: product.store ?? 'unknown' });
    if (isAffiliateUrl(href)) {
      trackEvent('affiliate_click', { partner: product.store ?? 'unknown', product: product.id });
    }
  };

  return (
    <div>
      <section
        aria-label="Tienda EcoFlow"
        className="relative w-full min-h-[10.5rem] border border-af-border bg-af-surface/20 overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <div className="absolute inset-0 flex items-center justify-center px-3">
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Producto anterior"
              className="p-2 border border-af-border hover:border-alien-gold/50 transition-colors"
            >
              <ChevronLeft className="h-4 w-4 text-alien-gold" />
            </button>

            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-20 h-20 overflow-hidden border border-af-border flex-shrink-0">
                <img
                  src={product.image}
                  alt={product.name}
                  width={80}
                  height={80}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="min-w-0 max-w-[13rem]">
                <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                  <h4 className="text-sm font-semibold text-alien-gold truncate">{product.name}</h4>
                  {product.badge && (
                    <span className="text-[9px] uppercase tracking-wider border border-alien-green/40 text-alien-green px-1 py-px">
                      {product.badge}
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">{product.description}</p>
                {product.detail && <p className="text-[11px] text-af-text-muted mt-1">{product.detail}</p>}

                <div className="flex items-center gap-3 mt-2 flex-wrap">
                  <span className="text-sm text-foreground font-nasalization">
                    {price ?? 'Precio próximamente'}
                  </span>
                  {purchasable ? (
                    <a
                      href={href}
                      target="_blank"
                      rel={isAffiliateUrl(href) ? 'sponsored noopener noreferrer' : 'noopener noreferrer'}
                      onClick={onBuy}
                      className="inline-flex items-center gap-1 text-xs text-alien-green hover:text-alien-gold transition-colors"
                    >
                      {product.store ? `Ver en ${STORE_LABEL[product.store]}` : 'Ver en la tienda'}
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  ) : (
                    <span className="text-[11px] text-af-text-muted">Próximamente</span>
                  )}
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Producto siguiente"
              className="p-2 border border-af-border hover:border-alien-gold/50 transition-colors"
            >
              <ChevronRight className="h-4 w-4 text-alien-gold" />
            </button>
          </div>
        </div>

        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
          {merchProducts.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Ver ${item.name}`}
              aria-current={index === currentIndex}
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                index === currentIndex ? 'bg-alien-gold' : 'bg-alien-gold/20'
              }`}
            />
          ))}
        </div>
      </section>

      {showDisclosure && (
        <p className="mt-2 text-[10px] leading-relaxed text-af-text-muted">
          Enlaces de afiliado: si compras desde aquí, la DAO recibe una comisión sin coste extra
          para ti. El precio lo marca la tienda.
        </p>
      )}

      <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[11px] uppercase tracking-[0.12em]">
        {merchCollections.map((collection) => {
          const url = withAffiliate(collection.url);
          return (
            <li key={collection.id}>
              {url ? (
                <a
                  href={url}
                  target="_blank"
                  rel={isAffiliateUrl(url) ? 'sponsored noopener noreferrer' : 'noopener noreferrer'}
                  onClick={() => {
                    trackEvent('merch_click', { collection: collection.id });
                    if (isAffiliateUrl(url)) {
                      trackEvent('affiliate_click', { partner: collection.id, collection: collection.id });
                    }
                  }}
                  className="text-alien-green hover:text-alien-gold transition-colors"
                >
                  {collection.name}
                </a>
              ) : (
                <span className="text-af-text-muted/70" title={collection.description}>
                  {collection.name}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default EcoProductCarousel;
