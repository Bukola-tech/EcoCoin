import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { mainnet, polygon, optimism, arbitrum, base, sepolia, arbitrumSepolia, scrollSepolia } from 'wagmi/chains';
import { QueryClient } from "@tanstack/react-query";

export const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains: [scrollSepolia, mainnet, polygon, optimism, arbitrum, base, sepolia, arbitrumSepolia],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

export const queryClient = new QueryClient();