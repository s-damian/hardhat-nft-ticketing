# NFT Ticketing in Solidity / Ethereum / Hardhat

<a href="https://github.com/s-damian/hardhat-nft-ticketing">
<img src="https://raw.githubusercontent.com/s-damian/medias/main/technos-logos/solidity.webp" alt="Solidity Logo" height="100px">
</a>
<a href="https://github.com/s-damian/hardhat-nft-ticketing">
<img src="https://raw.githubusercontent.com/s-damian/medias/main/technos-logos/ethereum.webp" alt="Ethereum Logo" height="100px">
</a>
<a href="https://github.com/s-damian/hardhat-nft-ticketing">
<img src="https://raw.githubusercontent.com/s-damian/medias/main/technos-logos/hardhat.webp" alt="Hardhat Logo" height="100px">
</a>

> #Solidity 💎 #Ethereum 🔗 #Hardhat ⚒️ #React ⚛️ #NFT 🖼️ #Web3 🌐

> NFT Marketplace Event Ticketing on the **Ethereum Blockchain**

[![Build](https://github.com/s-damian/hardhat-nft-ticketing/actions/workflows/tests.yml/badge.svg)](https://github.com/s-damian/hardhat-nft-ticketing/actions/workflows/tests.yml)
[![Static Analysis](https://github.com/s-damian/hardhat-nft-ticketing/actions/workflows/static-analysis.yml/badge.svg)](https://github.com/s-damian/hardhat-nft-ticketing/actions/workflows/static-analysis.yml)
[![License](https://img.shields.io/badge/License-MIT-blue)](./LICENSE)

This **NFT Ethereum Project** is developed by [Stephen Damian](https://github.com/s-damian)

PS: I developed the same project with [Solana / Anchor](https://github.com/s-damian/anchor-nft-ticketing)



## Project Overview

NFT Marketplace Event Ticketing - A decentralized application for managing and verifying event tickets as NFTs on the Ethereum blockchain.

**Status**: Under development 🚧

![Img](./img/img-2-create-event.png)

See more images here:
[Images](./img/)



## Documentation

- See further technical details here:
[Notes-tech](./docs/Notes-tech.md)

- To switch from the **Localnet** to **Devnet**:
[Localnet-to-Devnet.md](./docs/Localnet-to-Devnet.md)



## Prerequisites

- **Node.js** `>= 18` (last tested: `20`) and **npm** (for the Front-End) - *You can install Node.js and npm here: [Node.js](https://nodejs.org/en/download/package-manager).*



## Technologies

- **Back-End**: Solidity `0.8.24`, Ethereum, Hardhat `2.22.x`
- **Front-End**: Next.js `14`, React `18`, TypeScript `5`, Tailwind CSS
- **Blockchain Interaction**: Ethers.js
- **Wallet Integration**: MetaMask



## Getting Started (Localnet)

### Clone the Repository

```bash
git clone https://github.com/s-damian/hardhat-nft-ticketing.git
```

### Go to the Hardhat Directory

```bash
cd /<your-path>/hardhat-nft-ticketing
```

### Install Dependencies

For the Hardhat App:

```bash
npm install
```

For the Next.js App:

```bash
npm install --prefix ./front
```

### Environment Setup

Create a  `.env ` file for the Hardhat App:

```bash
cp .env.example .env
```

Create a  `.env ` file for the Next.js App:

```bash
cp ./front/.env.example ./front/.env
```

Ensure all necessary environment variables are configured in the `.env` files.

### Run Hardhat on Local Network

Start a local network with Hardhat:

```bash
npx hardhat node
```

## Deploy Contract(s) on Local Network

```bash
npx hardhat run scripts/deploy.ts --network localhost
```

### Configure Environment Variables

In the `.env` of the Next.js App part (`/<your-path>/hardhat-nft-ticketing/front/.env` file), you need to configure the following environment variables:

#### For Contact Addresses
- `NEXT_PUBLIC_EVENT_MANAGER_CONTRACT_ADDRESS`

### Run Front-End (Next.js App)

Go to the Next.js App Directory:

```bash
cd /<your-path>/hardhat-nft-ticketing/front
```

Start the development server:

```bash
npm run dev
```



## Code Structure

```bash
.
├── contracts
│   └── [Smart contracts]
├── front
│   ├── app
│   │   └── [React pages]
│   ├── src
│   │   ├── components
│   │   │   └── [React components]
│   │   ├── handlers
│   │   │   └── [React handlers]
│   │   └── utils
│   │       └── [React utils]
│   ├── .env.local
│   ├── package.json
│   └── tailwind.config.ts
├── ignition
│   └── [Ignitions]
├── scripts
│   └── [Scripts]
├── tests
│   └── [Tests]
├── hardhat.config.ts
├── package.json
└── README.md
```



## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.
