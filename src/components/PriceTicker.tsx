
import React, { useEffect, useMemo, useState } from 'react';

// A fully controlled, ultra-smooth ticker (no external widget)
// - Fetches selected coins from CoinGecko public API
// - Uses pure CSS animation you can precisely control (duration)

type Coin = {
  id: string;
  symbol: string;
  label: string;
};

const COINS: Coin[] = [
  { id: 'bitcoin', symbol: 'BTC', label: 'Bitcoin' },
  { id: 'ethereum', symbol: 'ETH', label: 'Ethereum' },
  { id: 'binancecoin', symbol: 'BNB', label: 'BNB' },
  { id: 'solana', symbol: 'SOL', label: 'Solana' },
  { id: 'tether-gold', symbol: 'XAUt', label: 'Tether Gold' },
  { id: 'chainlink', symbol: 'LINK', label: 'Chainlink' },
  { id: 'polkadot', symbol: 'DOT', label: 'Polkadot' },
  { id: 'avalanche-2', symbol: 'AVAX', label: 'Avalanche' },
];
const ICONS: Record<string, string> = {
  BTC: 'https://assets.coingecko.com/coins/images/1/small/bitcoin.png',
  ETH: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png',
  BNB: 'https://assets.coingecko.com/coins/images/825/small/binance-coin-logo.png',
  SOL: 'https://assets.coingecko.com/coins/images/4128/small/solana.png',
  XAUt: 'https://assets.coingecko.com/coins/images/10488/small/Tether_Gold.png',
  LINK: 'https://assets.coingecko.com/coins/images/877/small/chainlink-new-logo.png',
  DOT: 'https://assets.coingecko.com/coins/images/12171/small/polkadot.png',
  AVAX: 'https://assets.coingecko.com/coins/images/12559/small/coin-round-red.png'
};

const API = (ids: string[]) =>
  `https://api.coingecko.com/api/v3/simple/price?ids=${ids.join(',')}&vs_currencies=usd&precision=2`;

const DURATION_SEC = 60; // Adjust speed here (bigger = slower)

const PriceTicker: React.FC = () => {
  const [prices, setPrices] = useState<Record<string, number>>({});
  const [error, setError] = useState<string | null>(null);

  const ids = useMemo(() => COINS.map(c => c.id), []);

  useEffect(() => {
    let mounted = true;

    const fetchPrices = async () => {
      try {
        setError(null);
        const res = await fetch(API(ids), { cache: 'no-store' });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        if (!mounted) return;
        const mapped: Record<string, number> = {};
        COINS.forEach(c => {
          const v = data?.[c.id]?.usd;
          if (typeof v === 'number') mapped[c.symbol] = v;
        });
        setPrices(mapped);
      } catch (e: any) {
        if (!mounted) return;
        console.error('Ticker fetch failed', e);
        setError('offline');
      }
    };

    fetchPrices();
    const iv = setInterval(fetchPrices, 60_000); // refresh each minute
    return () => {
      mounted = false;
      clearInterval(iv);
    };
  }, [ids]);

  const items = useMemo(() => {
    const list = Object.keys(prices).length
      ? COINS.map(c => ({ symbol: c.symbol, price: prices[c.symbol] }))
      : [
          { symbol: 'BTC', price: 64750.21 },
          { symbol: 'ETH', price: 3145.89 },
          { symbol: 'BNB', price: 596.24 },
          { symbol: 'SOL', price: 152.36 },
          { symbol: 'XAUt', price: 2321.42 },
          { symbol: 'LINK', price: 13.45 },
          { symbol: 'DOT', price: 6.12 },
          { symbol: 'AVAX', price: 28.77 },
        ];
    return list;
  }, [prices]);

  return (
    <div className="w-full overflow-hidden bg-alien-space-dark/80 backdrop-blur-sm border-t border-b border-alien-gold/20 h-[40px]">
      {/* Local keyframes to avoid touching global CSS */}
      <style>{`
        @keyframes ticker-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>

      <div className="relative w-full h-[40px]">
        {/* Track wrapper */}
        <div className="absolute inset-0 flex items-center">
          {/* Two tracks for seamless loop */}
          {[0,1].map(i => (
            <div
              key={i}
              className="flex items-center gap-6 px-4 whitespace-nowrap"
              style={{
                animation: `ticker-scroll ${DURATION_SEC}s linear infinite`,
                // Stagger the second copy to start where first ends
                animationDelay: i === 1 ? `${DURATION_SEC/2}s` : '0s',
              }}
            >
              {items.map((it, idx) => (
                <div key={`${i}-${idx}`} className="flex items-center gap-2">
                  <img
                    src={ICONS[it.symbol]}
                    alt={`${it.symbol} logo`}
                    loading="lazy"
                    width={16}
                    height={16}
                    className="inline-block"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  <span className="font-bold">{it.symbol}:</span>
                  <span className="text-alien-green">${it.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PriceTicker;
