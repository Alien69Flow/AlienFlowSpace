
import React, { useEffect } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'gecko-coin-price-marquee-widget': any;
    }
  }
}

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
      <gecko-coin-price-marquee-widget
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
