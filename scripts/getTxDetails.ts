import { ethers } from "hardhat";

// # Voir détails d'une transaction :
// npx hardhat run ./scripts/getTxDetails.ts --network localhost
async function main() {
    const txHash = "0x2dab3893e4792421260868d42d1645acc8d6bbdd8bc979d8082b63a1f57948fc"; // Mettre l'id de la transaction.

    const tx = await ethers.provider.getTransactionReceipt(txHash);
    const txDetails = await ethers.provider.getTransaction(txHash);

    if (tx && txDetails) {
        console.log("Transaction Details:");
        console.log("Hash:", txHash);
        console.log("Block number:", tx.blockNumber);
        console.log("From:", tx.from);
        console.log("To:", tx.to);
        console.log("Value:", ethers.formatEther(txDetails.value), "ETH");
        console.log("Gas price:", ethers.formatUnits(txDetails.gasPrice || 0, "gwei"), "Gwei");
        console.log("Gas limit:", txDetails.gasLimit.toString());
        console.log("Gas used:", tx.gasUsed.toString());
        console.log("Nonce:", txDetails.nonce);
        console.log("Status:", tx.status === 1 ? "Success" : "Failed");

        // Les logs représentent les événements émis par le contrat intelligent pendant l'exécution de la transaction.
        if (tx.logs.length > 0) {
            console.log("\nLogs (Events):");
            tx.logs.forEach((log, index) => {
                console.log(`Log ${index}:`);
                console.log("  Address:", log.address);
                console.log("  Topics:", log.topics);
                console.log("  Data:", log.data);
            });
        }
    } else {
        console.log("Transaction not found.");
    }
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
