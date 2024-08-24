
## Init projet

```bash
mkdir /<your-path>/hardhat-nft-ticketing
```

```bash
cd /<your-path>/hardhat-nft-ticketing
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



## Localnet

### Run tests (local)

```bash
npx hardhat test
```

### Start a local network with Hardhat

```bash
npx hardhat node
```

### Deploy the contract on the local network

```bash
npx hardhat run scripts/deploy.ts --network localhost
```



## Sepolia

```bash
npx hardhat run scripts/deploy.ts --network sepolia
```



## Custom Scripts

### Get Solidity Version

```bash
npx hardhat run scripts/getSolidityVersion.ts --network <network>
```

### Send Ethers

```bash
npx hardhat run scripts/sendETH.ts --network <network>
```

### Get Transaction Details

In this script file, you need to replace "recipient" with the MetaMask address you want to reload.
```bash
npx hardhat run scripts/getTxDetails.ts --network <network>
```



## Networks

| Name                            | Consensus                  | Type              | Equivalent on Solana |
|---------------------------------|----------------------------|-------------------|----------------------|
| **Localhost (Hardhat Network)** | Usually PoA (configurable) | Local development | Localnet             |
| **Sepolia**                     | PoS (Proof of Stake)       | Public testnet    | Devnet               |
| **Goerli**                      | PoS (Proof of Stake)       | Public testnet    | Testnet              |
| **Mainnet**                     | PoS (Proof of Stake)       | Production        | Mainnet              |
