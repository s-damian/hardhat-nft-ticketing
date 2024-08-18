import { ethers } from "hardhat";

async function main() {
    const EventManagerFactory = await ethers.getContractFactory("EventManager");
    const eventManager = await EventManagerFactory.deploy();
    await eventManager.waitForDeployment();

    console.log("EventManager deployed to:", eventManager.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
