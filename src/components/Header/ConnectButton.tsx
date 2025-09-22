import React from "react";
import { Button } from "@/components/ui/button";
import { useAppKit } from "@reown/appkit/react";
import { useAppKitAccount } from "@reown/appkit/react";
import { useDisconnect } from "@reown/appkit/react";
import { useWallet } from "@/context/WalletContext";

const WALLET_ICON = "/lovable-uploads/AW.png";
const PORTAL_ICON_AVIF = "/lovable-uploads/AP1.avif";
const PORTAL_ICON_JPG = "/lovable-uploads/AP.jpg";
const ICON_SIZE = "h-7 w-7 sm:h-8 sm:w-8";

const shortAddress = (addr: string) =>
  addr ? addr.slice(0, 6) + "..." + addr.slice(-4) : "";

const ConnectButton = () => {
  const { open } = useAppKit();
  const { address, isConnected, disconnect, connect } = useWallet();

  return (
    <div className="flex flex-wrap items-center gap-3">
      {isConnected && address ? (
        <>
          <span
            className="
              text-alien-gold font-mono text-xs sm:text-sm bg-alien-green px-3 py-1 rounded-full
              border border-alien-gold shadow transition-all duration-200 select-all
            "
            title={address}
          >
            {shortAddress(address)}
          </span>
          <Button
            onClick={() => disconnect()}
            className="
              bg-alien-green hover:bg-alien-green-light text-alien-gold rounded-full
              flex items-center justify-center p-2 sm:p-3
              transition-all duration-200 ease-in-out
              hover:shadow-lg hover:scale-110 active:scale-95 focus-visible:ring-2 focus-visible:ring-alien-gold
            "
            title="Desconectar Wallet"
            aria-label="Desconectar Wallet"
            type="button"
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
              <path
                d="M16 17L21 12M21 12L16 7M21 12H9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <rect
                x="3"
                y="4"
                width="12"
                height="16"
                rx="2"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </Button>
        </>
      ) : (
        <Button
          className="
            bg-alien-green hover:bg-alien-green-light text-alien-gold rounded-full
            flex items-center justify-center p-2 sm:p-3
            transition-all duration-200 ease-in-out
            hover:shadow-lg hover:scale-110 active:scale-95 focus-visible:ring-2 focus-visible:ring-alien-gold
          "
          onClick={() => connect()}
          title="Conectar Wallet"
          aria-label="Conectar Wallet"
          type="button"
        >
          <img
            src={WALLET_ICON}
            alt="Wallet Logo"
            className={`${ICON_SIZE} rounded-full object-cover`}
            draggable={false}
          />
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
          className="
            bg-alien-green hover:bg-alien-green-light text-alien-gold rounded-full
            flex items-center justify-center p-2 sm:p-3
            transition-all duration-200 ease-in-out
            hover:shadow-lg hover:scale-110 active:scale-95 focus-visible:ring-2 focus-visible:ring-alien-gold
          "
          type="button"
        >
          <picture>
            <source srcSet={PORTAL_ICON_AVIF} type="image/avif" />
            <img
              src={PORTAL_ICON_JPG}
              alt="Portal Icon"
              className={`${ICON_SIZE} rounded-full object-cover`}
              draggable={false}
            />
          </picture>
        </Button>
      </a>
    </div>
  );
};

export default ConnectButton;
