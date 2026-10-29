
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

/** Altura de respiro mientras el widget carga, para no mover la página después. */
const MIN_STRIP_HEIGHT = 44;

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

  // El widget crece con su contenido: se mide y se publica en `--af-ticker-h`
  // para que <main> reserve exactamente el hueco de la franja (ver
  // src/styles/headerTicker.css).
  useEffect(() => {
    const root = document.documentElement;
    if (failed) {
      root.style.setProperty('--af-ticker-h', '0px');
      return () => root.style.removeProperty('--af-ticker-h');
    }

    const el = stripRef.current;
    if (!el) return;

    const publish = () => {
      const height = Math.round(el.getBoundingClientRect().height);
      root.style.setProperty('--af-ticker-h', `${Math.max(height, MIN_STRIP_HEIGHT)}px`);
    };

    publish();
    const observer = new ResizeObserver(publish);
    observer.observe(el);

    return () => {
      observer.disconnect();
      root.style.removeProperty('--af-ticker-h');
    };
  }, [failed]);

  if (failed) return null;

  return (
    <div
      ref={stripRef}
      className="af-ticker-fade w-full flex items-center overflow-hidden"
      style={{ minHeight: MIN_STRIP_HEIGHT }}
    >
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
