import { expect } from "chai";
import { ethers } from "hardhat";

describe("EventManager", function () {
    it("Should create and retrieve an event", async function () {
        // Obtenir le signataire par défaut (utilisé pour le déploiement et les transactions).
        // PS : Dans Hardhat, le premier signataire (index 0) est généralement celui qui déploie les contrats et effectue les transactions par défaut.
        const signer = await ethers.provider.getSigner(0);

        const EventManager = await ethers.getContractFactory("EventManager");
        const eventManager = await EventManager.deploy();
        await eventManager.waitForDeployment();

        const title = "Event A";
        const description = "Description of Event A";
        const date = BigInt(1629504000); // August 21, 2021 12:00:00 AM
        const location = "Paris";
        const ticketPrice = ethers.parseEther("0.1");

        // Créer un événement.
        const createEventTx = await eventManager.createEvent(title, description, date, location, ticketPrice);
        console.log("createEvent - tx signature", createEventTx.hash); // Afficher le hash de la transaction.

        // Récupérer l'événement par ID.
        //const event = await eventManager.getEvent(1);
        // Récupérer l'événement par ID en utilisant l'ABI pour décoder manuellement.
        const eventData = await eventManager.getFunction("getEvent").staticCall(1);

        // Décoder manuellement les données.
        const [retrievedTitle, retrievedDescription, retrievedDate, retrievedLocation, retrievedOrganizer, retrievedTicketPrice] = eventData;

        expect(retrievedTitle).to.equal(title);
        expect(retrievedDescription).to.equal(description);
        expect(retrievedDate.toString()).to.equal(date.toString());
        expect(retrievedLocation).to.equal(location);
        expect(retrievedOrganizer).to.equal(signer.address);
        expect(retrievedTicketPrice.toString()).to.equal(ticketPrice.toString());
    });
});
