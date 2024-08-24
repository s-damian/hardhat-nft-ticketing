import { createConfig, http } from "wagmi";
import { hardhat, sepolia, mainnet } from "wagmi/chains";
import { metaMask } from "wagmi/connectors";

const sepoliaRpcUrl = process.env.NEXT_PUBLIC_SEPOLIA_RPC_URL;
const mainnetRpcUrl = process.env.NEXT_PUBLIC_MAINNET_RPC_URL;

export const config = createConfig({
    chains: [hardhat, sepolia, mainnet],
    connectors: [metaMask()],
    transports: {
        [hardhat.id]: http(),
        [sepolia.id]: http(sepoliaRpcUrl),
        [mainnet.id]: http(mainnetRpcUrl),
    },
});
