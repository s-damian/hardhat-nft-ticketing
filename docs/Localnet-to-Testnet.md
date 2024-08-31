# Local to Testnet - Ethereum / Hardhat

## Preparing for Public Deployment: Transition from Localnet to Sepolia Testnet

### Create an Infura or Alchemy account

To interact with the Sepolia network, you will need an Ethereum service provider like Infura or Alchemy.

> In the following example, we will use Infura.


### Environment Variables

- `.env` file (for the Hardhat App):

In the `.env` of the Hardhat App, you need to configure the following environment variables:

Config:

```bash
SEPOLIA_RPC_URL="https://sepolia.infura.io/v3/<your-api-key>"
ETH_PRIVATE_KEY="<your-ethereum-private-key>"
```

- `./frontend/.env` file (for the Next.js App):

In the `./frontend/.env` of the Next.js App, you need to configure the following environment variable:

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

### Environment Variables - Contract Addresses

In the `.env` of the Next.js App part (`./frontend/.env` file), you need to configure the following environment variable:

```bash
NEXT_PUBLIC_EVENT_MANAGER_CONTRACT_ADDRESS="<your-event-manager-contract-address>"
```


### MetaMask Wallet

In your MetaMask wallet settings, switch to **Sepolia**.


### Run Front-End (Next.js App)

Go to the Next.js App Directory:

```bash
cd /<your-path>/hardhat-nft-ticketing/frontend
```

Start the development server:

```bash
npm run dev
```

Open your browser and go to:

```bash
http://localhost:3000
```
