"use client";

import React from "react";
import { WagmiProvider } from "wagmi";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { config } from "../../config/wagmi-config";

// Create a client
const queryClient = new QueryClient();

const AppWalletProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <ConnectKitProvider>{children}</ConnectKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    );
};

export default AppWalletProvider;
