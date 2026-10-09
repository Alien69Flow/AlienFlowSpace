
import React, { useEffect } from 'react';

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

const PriceTicker: React.FC = () => {
  useEffect(() => {
    const id = 'coingecko-widget-script';
    if (!document.getElementById(id)) {
      const s = document.createElement('script');
      s.src = WIDGET_SRC;
      s.async = true;
      s.id = id;
      document.head.appendChild(s);
    }
  }, []);

  return (
    <div className="w-full overflow-visible min-h-[48px]">
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
