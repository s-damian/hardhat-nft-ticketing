## Networks

| Name                            | Consensus                  | Type              | Equivalent on Solana |
|---------------------------------|----------------------------|-------------------|----------------------|
| **Localhost (Hardhat Network)** | Usually PoA (configurable) | Local development | Localnet             |
| **Sepolia**                     | PoS (Proof of Stake)       | Public testnet    | Devnet               |
| **Goerli**                      | PoS (Proof of Stake)       | Public testnet    | Testnet              |
| **Mainnet**                     | PoS (Proof of Stake)       | Production        | Mainnet              |



## Ethereum Block Confirmations

| **Option**    | **Description** |
|---------------|---|
| **pending**   | The transaction has been submitted to the network and is currently awaiting inclusion in a block. It is not yet part of the blockchain and could still be replaced or canceled. |
| **mined**     | The transaction has been included in a block and is considered mined. It is now part of the blockchain but could still be reorganized in the event of a chain reorganization. The number of confirmations indicates how many blocks have been added on top of the block containing this transaction. |
| **finality**  | The transaction has been included in a block and has accumulated a sufficient number of confirmations, making it highly unlikely to be reversed. This level ensures a high degree of certainty that the transaction is permanent and irreversible. |



## Run tests (Localnet)

```bash
npx hardhat test
```



## Lint

### Solidity Lint

```bash
cd /<your-path>/hardhat-nft-ticketing
```

Lint and format the code:

```bash
npm run lint-solhint:fix
```

### JS Lint

```bash
cd /<your-path>/hardhat-nft-ticketing
```

Lint and format the code:

```bash
npm run lint:fix
```



## Verify Deployment

Check if your contract is correctly deployed:

```bash
npx hardhat verify --network sepolia DEPLOYED_CONTRACT_ADDRESS
```



## Custom Scripts

### Get Solidity Version

```bash
npx hardhat run ./scripts/getSolidityVersion.ts --network <network>
```

### Send Ethers

```bash
npx hardhat run ./scripts/sendETH.ts --network <network>
```

Example in Localhost :

```bash
npx hardhat run ./scripts/sendETH.ts --network localhost
```

### Get Transaction Details

In this script file, you need to replace "recipient" with the MetaMask address you want to reload.
```bash
npx hardhat run ./scripts/getTxDetails.ts --network <network>
```
