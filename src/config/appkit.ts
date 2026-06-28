import { createAppKit } from '@reown/appkit/react';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { SolanaAdapter } from '@reown/appkit-adapter-solana';
import { BitcoinAdapter } from '@reown/appkit-adapter-bitcoin';
import {
  polygon,
  mainnet,
  arbitrum,
  base,
  bsc,
  solana,
  bitcoin,
  type AppKitNetwork,
} from '@reown/appkit/networks';

export const projectId = 'ced40e4d52234c471808977208586c7e';

export const networks: [AppKitNetwork, ...AppKitNetwork[]] = [
  polygon,
  mainnet,
  arbitrum,
  base,
  bsc,
  solana,
  bitcoin,
];

export const wagmiAdapter = new WagmiAdapter({
  networks: [polygon, mainnet, arbitrum, base, bsc],
  projectId,
  ssr: false,
});

export const solanaAdapter = new SolanaAdapter();
export const bitcoinAdapter = new BitcoinAdapter({ projectId });

export const wagmiConfig = wagmiAdapter.wagmiConfig;

const origin =
  typeof window !== 'undefined' ? window.location.origin : 'https://alienflow.space';

createAppKit({
  adapters: [wagmiAdapter, solanaAdapter, bitcoinAdapter],
  networks,
  defaultNetwork: polygon,
  projectId,
  metadata: {
    name: 'Alien World',
    description: 'Alien World dApp',
    url: 'https://alienflow.space',
    icons: [`${origin}/lovable-uploads/ALogo.png`],
  },
  features: {
    analytics: true,
    email: false,
    socials: false,
  },
});
