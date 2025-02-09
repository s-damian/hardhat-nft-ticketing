import { ethers } from "hardhat";

// # Envoyer des ETH :
// npx hardhat run ./scripts/sendETH.ts --network localhost
async function main() {
    const [deployer] = await ethers.getSigners();

    const recipient = "0x9Ae928DB6A4186E441aFC2f8db96251BCDE18756"; // Remplacer par l'adresse ETH (ex.: MetaMask) que l'on veut recharger.
    const amount = ethers.parseEther("10"); // Montant à envoyer (10 ETH dans cet exemple).

    const tx = await deployer.sendTransaction({
        to: recipient,
        value: amount,
    });

    await tx.wait();

    console.log(`Sent ${ethers.formatEther(amount)} ETH to ${recipient}`);

    // Récupérer et afficher la balance du destinataire après l'envoi.
    const balance = await ethers.provider.getBalance(recipient);
    console.log(`Balance of ${recipient} is now: ${ethers.formatEther(balance)} ETH`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
