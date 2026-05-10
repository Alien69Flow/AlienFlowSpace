import React from 'react';
import { Button } from '@/components/ui/button';
import { useAppKit } from '@reown/appkit/react';
import { Copy, CheckCircle } from 'lucide-react';
import { useWalletConnection } from '@/hooks/useWalletConnection';
import { toast } from 'sonner';

const WALLET_ICON = "/lovable-uploads/AW.png";

// App icons - replace these files in /public/lovable-uploads/apps/ to update logos
const ACE_ICON = "/lovable-uploads/apps/ace.png";
const ADEX_ICON = "/lovable-uploads/apps/adex.png";
const ATRIP_ICON = "/lovable-uploads/apps/atrip.png";

const ICON_BTN = "bg-alien-green hover:bg-alien-green-light text-alien-gold rounded-full flex items-center justify-center p-0 h-11 w-11 sm:h-12 sm:w-12 overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-110 active:scale-95 focus-visible:ring-2 focus-visible:ring-alien-gold";
const APP_IMG = "h-9 w-9 sm:h-10 sm:w-10 rounded-full object-cover";

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
    <div className="flex items-center gap-2 sm:gap-3">
      {/* 1. ACE AGameFlow */}
      <a
        href="https://ACE.AlienFlow.Space"
        target="_blank"
        rel="noopener noreferrer"
        className="no-underline"
        title="ACE AGameFlow"
        aria-label="ACE AGameFlow"
      >
        <Button className={ICON_BTN} type="button">
          <img src={ACE_ICON} alt="ACE AGameFlow" className={APP_IMG} draggable={false} />
        </Button>
      </a>

      {/* 2. AlienDEX & Play (Connect Portal) */}
      <a
        href="https://ADEX.AlienFlow.Space"
        target="_blank"
        rel="noopener noreferrer"
        className="no-underline"
        title="AlienDEX & Play"
        aria-label="AlienDEX & Play"
      >
        <Button className={ICON_BTN} type="button">
          <img src={ADEX_ICON} alt="AlienDEX & Play" className={APP_IMG} draggable={false} />
        </Button>
      </a>

      {/* 3. AlienTrip */}
      <a
        href="https://ATrip.AlienFlow.Space"
        target="_blank"
        rel="noopener noreferrer"
        className="no-underline"
        title="AlienTrip"
        aria-label="AlienTrip"
      >
        <Button className={ICON_BTN} type="button">
          <img src={ATRIP_ICON} alt="AlienTrip" className={APP_IMG} draggable={false} />
        </Button>
      </a>

      {/* 4. Wallet (far right) */}
      {isConnected && address ? (
        <>
          <div className="flex items-center gap-2">
            <span
              className="text-alien-gold font-mono text-xs bg-alien-green/20 px-3 py-1.5 rounded-full border border-alien-gold/30 shadow-sm select-all"
              title={address}
            >
              {shortAddress(address)}
            </span>
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
            className={ICON_BTN}
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
          className={ICON_BTN}
          onClick={() => open({ view: "Connect" })}
          title="Connect Wallet"
          aria-label="Connect Wallet"
          type="button"
        >
          <img src={WALLET_ICON} alt="Wallet" className={APP_IMG} draggable={false} />
        </Button>
      )}
    </div>
  );
};

export default ConnectButton;
