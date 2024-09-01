import React from "react";
import { useChainId } from "wagmi";
import { useSwitchChain } from "wagmi";

const NetworkSwitcher: React.FC = () => {
    const chainId = useChainId(); // Hook pour obtenir le réseau actuel.
    const { switchChain } = useSwitchChain();

    // Fonction pour changer de réseau.
    const handleNetworkChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const networkId = parseInt(event.target.value, 10);
        if (switchChain) {
            switchChain({ chainId: networkId });
        }
    };

    return (
        <select value={chainId} onChange={handleNetworkChange} className="bg-yellow-500 text-white rounded-md outline-none px-3 py-1">
            <option value="1">Ethereum Mainnet</option>
            <option value="11155111">Sepolia</option>
            <option value="31337">Hardhat Local</option>
        </select>
    );
};

export default NetworkSwitcher;
