
import React, { useEffect } from 'react';

// Use official CoinGecko marquee widget
// Ensures the script is loaded once and renders the custom element

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
        transparent-background="true"
        outlined="true"
        coin-ids="bitcoin,tether-gold,ethereum,binancecoin,bitcoin-cash,bittensor,solana,litecoin,hyperliquid,chainlink,injective-protocol,uniswap,aptos,cosmos,bitget-token,polkadot,sui,the-open-network,near,nexo,cardano,tron,crypto-com-chain"
        initial-currency="usd"
      />
    </div>
  );
};

export default PriceTicker;
