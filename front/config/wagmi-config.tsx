import { createConfig, http } from "wagmi";
import { hardhat, sepolia, mainnet } from "wagmi/chains";
import { metaMask } from "wagmi/connectors";

const sepoliaRpcUrl = process.env.NEXT_PUBLIC_SEPOLIA_RPC_URL;
const mainnetRpcUrl = process.env.NEXT_PUBLIC_MAINNET_RPC_URL;

export const config = createConfig({
    chains: [hardhat, sepolia, mainnet],
    //chains: [sepolia],
    connectors: [metaMask()],
    transports: {
        [hardhat.id]: http(),
        [sepolia.id]: http(sepoliaRpcUrl),
        [mainnet.id]: http(mainnetRpcUrl),
    },
});

/*
# MetaMask en Local :

Config MetaMask pour travailler en Local (avec hardhat) :

Ouvrir MetaMask et ajoutez un nouveau réseau avec les paramètres suivants :

PS : il faut d'abord run en Terminal : npx hardhat node

- Nom du réseau : Hardhat Local
- Nouvelle URL RPC : http://127.0.0.1:8545/
- ID de chaîne : 31337
- Symbole de la devise : ETH
- URL de l'explorateur de blocs : (laissez vide)
*/

/*
# Réseaux Ethereum :

## Localhost (Hardhat Network) :
C'est un réseau local utilisé pour les tests rapides pendant le développement.
(Équivalent de localnet sur Solana).

## Testnets :

### Sepolia :
Un autre testnet utilisé par la communauté, similaire à devnet ou testnet sur Solana.
(Similaire à devnet ou testnet sur Solana).
Utilisant le consensus Proof of Authority (PoA).

### Goerli :
L'un des testnets les plus utilisés actuellement, c'est l'équivalent de testnet sur Solana.
(Équivalent de testnet sur Solana).
Utilisant le consensus Proof of Authority (PoA).

## Mainnet :
Le réseau principal Ethereum, où se déroulent les transactions réelles avec de vrais ETH.
(Équivalent à mainnet sur Solana).
*/
