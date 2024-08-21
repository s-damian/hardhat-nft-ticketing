
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

### Déployer le contrat sur le réseau local
```bash
npx hardhat run scripts/sendETH.ts --network localhost
```
