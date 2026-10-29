import React, { useEffect, useRef, useState } from 'react';

type GeckoMarqueeProps = React.HTMLAttributes<HTMLElement> & {
  locale?: string;
  'dark-mode'?: string;
  outlined?: string;
  'coin-ids'?: string;
  'initial-currency'?: string;
};

// Web component de CoinGecko. Se tipa como componente de React para no declarar
// un namespace JSX global ni recurrir a `any`.
const GeckoCoinPriceMarquee = 'gecko-coin-price-marquee-widget' as unknown as React.FC<GeckoMarqueeProps>;

const WIDGET_SRC = 'https://widgets.coingecko.com/gecko-coin-price-marquee-widget.js';

/** Respiro vertical extra para no rozar con la regla de la barra ni con el borde. */
const EDGE_PADDING = 2;

const PriceTicker: React.FC = () => {
  const stripRef = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  // El script se carga aquí y no en index.html: solo se pide en las dos rutas
  // que muestran el ticker. Si la CSP o un bloqueador lo cortan, `error` salta y
  // la franja desaparece en vez de quedarse como una caja vacía.
  useEffect(() => {
    if (failed) return;
    const id = 'coingecko-widget-script';
    if (document.getElementById(id)) return;

    const script = document.createElement('script');
    script.id = id;
    script.src = WIDGET_SRC;
    script.async = true;
    script.addEventListener('error', () => setFailed(true));
    document.head.appendChild(script);
  }, [failed]);

  // El widget no tiene altura fija (`.gecko-marquee` es `padding: 8px 0` más su
  // contenido), así que se mide el widget —no la franja, que tiene su propio
  // mínimo— y se publica en `--af-ticker-h`. <main> reserva ese hueco exacto, de
  // modo que no tapa contenido ni deja aire, en móvil y en escritorio.
  useEffect(() => {
    const root = document.documentElement;
    if (failed) {
      root.style.removeProperty('--af-ticker-h');
      return;
    }

    const strip = stripRef.current;
    if (!strip) return;

    // `border-box` incluye el padding del propio widget; el redondeo hacia
    // arriba evita que un subpíxel (0,4 px) recorte la última fila de cifras.
    const publish = () => {
      const widget = strip.firstElementChild as HTMLElement | null;
      const height = widget?.getBoundingClientRect().height ?? 0;
      if (height <= 0) {
        root.style.removeProperty('--af-ticker-h');
        return;
      }
      root.style.setProperty('--af-ticker-h', `${Math.ceil(height) + EDGE_PADDING}px`);
    };

    publish();

    // El web component se pinta después de registrar su custom element, y
    // cambia de alto si el usuario aumenta el tamaño de letra.
    const observer = new ResizeObserver(publish);
    const widget = strip.firstElementChild;
    if (widget) observer.observe(widget);
    window.addEventListener('resize', publish);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', publish);
      root.style.removeProperty('--af-ticker-h');
    };
  }, [failed]);

  if (failed) return null;

  return (
    <div ref={stripRef} className="af-ticker w-full flex items-center overflow-hidden">
      <GeckoCoinPriceMarquee
        locale="es"
        dark-mode="true"
        outlined="true"
        coin-ids="bitcoin,pax-gold,tether-gold,ethereum,zcash,binancecoin,monero,bitcoin-cash,bittensor,solana,litecoin,chainlink,uniswap,near,cosmos,the-open-network,tron,cardano,stellar,crypto-com-chain,polygon-ecosystem-token,axie-infinity,nexo,aptos"
        initial-currency="usd"
      />
    </div>
  );
};

export default PriceTicker;
