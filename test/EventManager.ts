import { expect } from "chai";
import { ethers } from "hardhat";

describe("EventManager", function () {
    it("Should create and retrieve an event", async function () {
        const EventManager = await ethers.getContractFactory("EventManager");
        const eventManager = await EventManager.deploy();
        //await eventManager.deployed();
        await eventManager.waitForDeployment();

        const title = "Event A";
        const description = "Description of Event A.";
        //const date = 1629504000; // August 21, 2021 12:00:00 AM
        const date = BigInt(1629504000);
        const location = "Paris, France";
        const ticketPrice = ethers.parseEther("0.1");

        // Créer un événement
        const createEventTx = await eventManager.createEvent(title, description, date, location, ticketPrice);
        await createEventTx.wait(); // Attendre la confirmation de la transaction

        // Récupérer l'événement par ID
        const event = await eventManager.getEvent(1);

        expect(event.title).to.equal(title);
        expect(event.description).to.equal(description);
        expect(event.date).to.equal(date);
        expect(event.location).to.equal(location);
        expect(event.organizer).to.equal(await ethers.provider.getSigner(0).getAddress());
        expect(event.ticketPrice).to.equal(ticketPrice);
    });
});
