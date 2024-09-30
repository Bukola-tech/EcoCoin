'use client'
import {config, queryClient} from '@/config/WagmiConfig';
import { WagmiProvider } from 'wagmi';
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { QueryClientProvider } from "@tanstack/react-query";


export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider>
            {children}
          </RainbowKitProvider>
        </QueryClientProvider>
    </WagmiProvider>
  );
}

 