import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

// npx hardhat ignition deploy ignition/modules/EventManager.ts --network localhost
const EventManagerModule = buildModule("EventManagerModule", (m) => {
    // Déploiement du contrat EventManager.
    const eventManager = m.contract("EventManager");

    return { eventManager };
});

export default EventManagerModule;
