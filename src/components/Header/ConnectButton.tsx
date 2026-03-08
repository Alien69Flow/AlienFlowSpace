import React from 'react';
import { Button } from '@/components/ui/button';
import { useAppKit } from '@reown/appkit/react';
import { Copy, CheckCircle } from 'lucide-react';
import { useWalletConnection } from '@/hooks/useWalletConnection';
import { toast } from 'sonner';

const WALLET_ICON = "/lovable-uploads/AW.png";
const PORTAL_ICON_AVIF = "/lovable-uploads/AP1.avif";
const PORTAL_ICON_JPG = "/lovable-uploads/AP.jpg";
const ICON_SIZE = "h-7 w-7 sm:h-8 sm:w-8";

const shortAddress = (addr: string) =>
  addr ? addr.slice(0, 6) + '...' + addr.slice(-4) : '';

const ConnectButton = () => {
  const { open } = useAppKit();
  const { address, isConnected, aiKey } = useWalletConnection();
  const [copied, setCopied] = React.useState(false);

  const copyAIKey = () => {
    if (aiKey) {
      navigator.clipboard.writeText(aiKey);
      setCopied(true);
      toast.success('AI Key Copied!');
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex items-center gap-3">
      {isConnected && address ? (
        <>
          {/* Connected state: address + optional AI key copy + manage */}
          <div className="flex items-center gap-2">
            <span
              className="text-alien-gold font-mono text-xs bg-alien-green/20 px-3 py-1.5 rounded-full border border-alien-gold/30 shadow-sm select-all"
              title={address}
            >
              {shortAddress(address)}
            </span>
            {/* Inline AI key copy button */}
            {aiKey && (
              <button
                onClick={copyAIKey}
                className="p-1.5 rounded-full bg-alien-gold/10 hover:bg-alien-gold/20 border border-alien-gold/20 text-alien-gold hover:text-alien-green transition-all duration-300"
                title="Copy AI Key"
              >
                {copied ? <CheckCircle className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
              </button>
            )}
          </div>

          <Button
            onClick={() => open({ view: "Account" })}
            className="bg-alien-green hover:bg-alien-green-light text-alien-gold rounded-full flex items-center justify-center p-2 sm:p-3 transition-all duration-300 hover:shadow-lg hover:scale-110 active:scale-95 focus-visible:ring-2 focus-visible:ring-alien-gold"
            title="Manage Wallet"
            aria-label="Manage Wallet"
            type="button"
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
              <path d="M16 17L21 12M21 12L16 7M21 12H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <rect x="3" y="4" width="12" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </Button>
        </>
      ) : (
        <Button
          className="bg-alien-green hover:bg-alien-green-light text-alien-gold rounded-full flex items-center justify-center p-2 sm:p-3 transition-all duration-300 hover:shadow-lg hover:scale-110 active:scale-95 focus-visible:ring-2 focus-visible:ring-alien-gold"
          onClick={() => open({ view: "Connect" })}
          title="Connect Wallet"
          aria-label="Connect Wallet"
          type="button"
        >
          <img src={WALLET_ICON} alt="Wallet Logo" className={`${ICON_SIZE} rounded-full object-cover`} draggable={false} />
        </Button>
      )}
      <a
        href="https://aliendex.lovable.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="no-underline"
        title="Connect Portal"
        aria-label="Connect Portal"
        tabIndex={-1}
      >
        <Button
          className="bg-alien-green hover:bg-alien-green-light text-alien-gold rounded-full flex items-center justify-center p-2 sm:p-3 transition-all duration-300 hover:shadow-lg hover:scale-110 active:scale-95 focus-visible:ring-2 focus-visible:ring-alien-gold"
          type="button"
        >
          <picture>
            <source srcSet={PORTAL_ICON_AVIF} type="image/avif" />
            <img src={PORTAL_ICON_JPG} alt="Portal Icon" className={`${ICON_SIZE} rounded-full object-cover`} draggable={false} />
          </picture>
        </Button>
      </a>
    </div>
  );
};

export default ConnectButton;
