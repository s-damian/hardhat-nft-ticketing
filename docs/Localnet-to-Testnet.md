## Localnet to Testnet (Sepolia)

### Créer un compte Infura ou Alchemy

Pour interagir avec le réseau Sepolia, vous aurez besoin d'un fournisseur de service Ethereum comme Infura ou Alchemy.


### Environment Variables

#### Hardhat App .env file:

In the `.env` of the Hardhat App part (`.env` file), you need to configure the following environment variable:

Config:

```bash
SEPOLIA_RPC_URL="https://sepolia.infura.io/v3/<your-api-key>"
ETH_PRIVATE_KEY="<your-ethereum-private-key>"
```

#### Next.js App .env file :

In the `.env` of the Next.js App part (`./front/.env` file), you need to configure the following environment variable:

Config:

```bash
NEXT_PUBLIC_SEPOLIA_RPC_URL="https://sepolia.infura.io/v3/<your-api-key>"
```


### Compile and Deploy

Compile contract(s):

```bash
npx hardhat compile
```

Deploy contract(s) on Sepolia testnet network:

```bash
npx hardhat run scripts/deploy.ts --network sepolia
```

### Environment Variables - Contact Addresses

In the `.env` of the Next.js App part (`./front/.env` file), you need to configure the following environment variable:

```bash
NEXT_PUBLIC_EVENT_MANAGER_CONTRACT_ADDRESS="<your-event-manager-contract-address>"
```


### MetaMask Wallet

In your MetaMask wallet settings, switch to **Sepolia**.


### Run Front-End (Next.js App)

Go to the Next.js App Directory:

```bash
cd /<your-path>/hardhat-nft-ticketing/front
```

Start the development server:

```bash
npm run dev
```

And you can go to the URL:

```bash
http://localhost:3000
```
