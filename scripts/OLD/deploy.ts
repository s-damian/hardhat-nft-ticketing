import { ethers } from "hardhat";

async function main() {
    const EventManagerFactory = await ethers.getContractFactory("EventManager");
    const eventManager = await EventManagerFactory.deploy();

    // Attendre que le contrat soit déployé
    await eventManager.waitForDeployment();

    // Obtenir l'adresse du contrat déployé
    const eventManagerAddress = await eventManager.getAddress();

    console.log("EventManager Contract Address:", eventManagerAddress);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
