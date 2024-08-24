
## Init projet

```bash
mkdir /[your-path]/hardhat-nft-ticketing
```

```bash
cd /[your-path]/hardhat-nft-ticketing
```

```bash
npm init -y
```

```bash
npm install --save-dev hardhat
```

```bash
npx hardhat init
```


### Run Hardhat Network (local testnet)
```bash
npx hardhat test
```


### Démarrer un réseau local avec Hardhat
```bash
npx hardhat node
```

### Déployer le contrat sur le réseau local
```bash
npx hardhat run scripts/deploy.ts --network localhost
```


## Custom Scripts

### Get Solidity Version
```bash
npx hardhat run scripts/getSolidityVersion.ts --network localhost
```

### Send Ethers
```bash
npx hardhat run scripts/sendETH.ts --network localhost
```

### Get Transaction Details
Dans ce fichier de script, il faut remplacer "recipient" par l'adresse MetaMask que vous voulez recharger.
```bash
npx hardhat run scripts/getTxDetails.ts --network localhost
```


## Networks

| Name                            | Consensus                  | Type              | Equivalent on Solana |
|---------------------------------|----------------------------|-------------------|----------------------|
| **Localhost (Hardhat Network)** | Usually PoA (configurable) | Local development | Localnet             |
| **Sepolia**                     | PoS (Proof of Stake)       | Public testnet    | Devnet               |
| **Goerli**                      | PoS (Proof of Stake)       | Public testnet    | Testnet              |
| **Mainnet**                     | PoS (Proof of Stake)       | Production        | Mainnet              |
