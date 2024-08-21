import { createConfig, http } from "wagmi";
import { mainnet, sepolia, hardhat } from "wagmi/chains";
import { metaMask } from "wagmi/connectors";

export const config = createConfig({
    chains: [hardhat, mainnet, sepolia],
    connectors: [metaMask()],
    transports: {
        [hardhat.id]: http(),
        [mainnet.id]: http(),
        [sepolia.id]: http(),
    },
});

/*
Config MetaMask pour travailler en Local (avec hardhat) :

Ouvrir MetaMask et ajoutez un nouveau réseau avec les paramètres suivants :

PS : il faut d'abord run en Terminal : npx hardhat node

- Nom du réseau : Hardhat Local
- Nouvelle URL RPC : http://127.0.0.1:8545/
- ID de chaîne : 31337
- Symbole de la devise : ETH
- URL de l'explorateur de blocs : (laissez vide)
*/
