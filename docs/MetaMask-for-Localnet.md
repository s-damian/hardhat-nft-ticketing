## MetaMask Configuration for Local Development

### How to Configure MetaMask to Work Locally with Hardhat:

Follow these steps to add a new network in MetaMask for local development with Hardhat.

> **Note**: Make sure you first run `npx hardhat node` in your terminal.

1. Open MetaMask and go to the network dropdown at the top of the MetaMask window.
2. Click on **"Add Network"** or **"Custom RPC"**.
3. Fill in the following network details:

| Parameter                    | Value                        |
|------------------------------|------------------------------|
| **Network Name**             | Hardhat Local                |
| **New RPC URL**              | http://127.0.0.1:8545/       |
| **Chain ID**                 | 31337                        |
| **Currency Symbol**          | ETH                          |
| **Block Explorer URL**       | (leave blank)                |

4. Click **"Save"** to add the network.

Now, MetaMask is configured to interact with your local Hardhat network.
