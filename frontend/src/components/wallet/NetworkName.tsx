import React from "react";
import { useChainId } from "wagmi";

const NetworkName: React.FC = () => {
    const chainId = useChainId(); // Hook pour obtenir le réseau actuel.

    // Fonction pour obtenir le nom du réseau.
    const getNetworkName = () => {
        switch (chainId) {
            case 1:
                return "Ethereum Mainnet";
            case 11155111:
                return "Sepolia";
            case 31337:
                return "Hardhat Local";
            default:
                return "Unknown Network";
        }
    };

    return <>{getNetworkName()}</>;
};

export default NetworkName;
