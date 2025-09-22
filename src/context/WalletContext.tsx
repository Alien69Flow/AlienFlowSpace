"use client";
import React, { createContext, useContext, useMemo } from "react";
import {
  useAppKit,
  useAppKitAccount,
  useAppKitNetwork,
} from "@reown/appkit/react";
import { useAccount, useDisconnect } from "wagmi";

type AppKitContextType = {
  connect: () => void;
  disconnect: () => void;
  address?: string;
  isConnected: boolean;
  isDisconnected: boolean;
  chains: any[]; // you can type this properly once you know chain shape
  chainId: number | string | undefined;
};

const AppKitContext = createContext<AppKitContextType | null>(null);

const WalletContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { open, close } = useAppKit();
  const {
    address,
    isConnected: isAppkitConnected,
    caipAddress,
    status,
    embeddedWalletInfo,
  } = useAppKitAccount();

  const { address: wagmiAddress, isConnected: isWagmiConnected } = useAccount();

  const { chainId } = useAppKitNetwork();
  const { disconnect } = useDisconnect();

  const isConnected = useMemo(() => {
    return isWagmiConnected && status === "connected";
  }, [status, isWagmiConnected]);

  const isDisconnected = useMemo(() => {
    return !isConnected && status === "disconnected";
  }, [isConnected, status]);

  const handleConnect = () => {
    open({ view: "Connect" });
  };

  const chains = [];

  const handleDisconnect = () => {
    disconnect();
  };

  const value: AppKitContextType = {
    connect: handleConnect,
    disconnect: handleDisconnect,
    address: wagmiAddress,
    isConnected,
    isDisconnected,
    chains,
    chainId,
  };

  return (
    <AppKitContext.Provider value={value}>{children}</AppKitContext.Provider>
  );
};

export default WalletContextProvider;

// ✅ Hook for consuming context
export const useWallet = () => {
  const context = useContext(AppKitContext);
  if (!context) {
    throw new Error("useWallet must be used inside WalletContextProvider");
  }
  return context;
};
