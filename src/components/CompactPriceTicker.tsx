import React, { useEffect, useState } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface CryptoPrice {
  id: string;
  symbol: string;
  price: number;
  change24h: number;
}

const CRYPTO_IDS = ['bitcoin', 'ethereum', 'solana', 'polygon-ecosystem-token'];

const CompactPriceTicker: React.FC = () => {
  const [prices, setPrices] = useState<CryptoPrice[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=${CRYPTO_IDS.join(',')}&vs_currencies=usd&include_24hr_change=true`
        );
        const data = await response.json();
        
        const symbolMap: Record<string, string> = {
          'bitcoin': 'BTC',
          'ethereum': 'ETH',
          'solana': 'SOL',
          'polygon-ecosystem-token': 'POL'
        };

        const formattedPrices: CryptoPrice[] = CRYPTO_IDS.map(id => ({
          id,
          symbol: symbolMap[id] || id.toUpperCase(),
          price: data[id]?.usd || 0,
          change24h: data[id]?.usd_24h_change || 0
        }));

        setPrices(formattedPrices);
      } catch (error) {
        console.error('Error fetching crypto prices:', error);
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  // Rotate through cryptos
  useEffect(() => {
    const rotateInterval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % prices.length);
    }, 4000);
    return () => clearInterval(rotateInterval);
  }, [prices.length]);

  if (prices.length === 0) {
    return null;
  }

  const currentCrypto = prices[currentIndex];
  const isPositive = currentCrypto?.change24h >= 0;

  return (
    <div className="flex items-center gap-2 px-3 py-1.5 bg-alien-space-dark/60 rounded-full border border-alien-gold/20 text-xs font-mono">
      <span className="text-alien-gold font-semibold">{currentCrypto?.symbol}</span>
      <span className="text-gray-300">
        ${currentCrypto?.price >= 1000 
          ? currentCrypto?.price.toLocaleString(undefined, { maximumFractionDigits: 0 })
          : currentCrypto?.price.toFixed(2)
        }
      </span>
      <span className={`flex items-center gap-0.5 ${isPositive ? 'text-alien-green' : 'text-red-400'}`}>
        {isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
        {Math.abs(currentCrypto?.change24h || 0).toFixed(1)}%
      </span>
    </div>
  );
};

export default CompactPriceTicker;