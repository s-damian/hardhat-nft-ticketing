import { assert, expect } from "chai";
import { ethers } from "hardhat";

describe("EventManager", function () {
    it("Should create and retrieve an event", async function () {
        // Obtenir le signataire par défaut (utilisé pour le déploiement et les transactions).
        // PS : Dans Hardhat, le premier signataire (index 0) est généralement celui qui déploie les contrats et effectue les transactions par défaut.
        const signer = await ethers.provider.getSigner(0);

        // Déployer le contrat EventManager.
        const EventManager = await ethers.getContractFactory("EventManager");
        const eventManager = await EventManager.deploy();
        await eventManager.waitForDeployment();

        // Détails de l'événement.
        const title = "Event A";
        const description = "Description of Event A";
        const date = BigInt(1629504000); // August 21, 2021 12:00:00 AM
        const location = "Paris";
        const ticketPrice = ethers.parseEther("0.1");

        // Capturer le solde de l'organisateur avant la création de l'événement.
        const signerBalanceBefore = await ethers.provider.getBalance(signer.address);

        // Créer un événement.
        const createEventTx = await eventManager.createEvent(title, description, date, location, ticketPrice);
        console.log("createEvent - tx signature", createEventTx.hash); // Afficher le hash de la transaction.

        // Récupérer l'événement par ID.
        //const event = await eventManager.getEvent(1);
        // Récupérer l'événement par ID en utilisant l'ABI pour décoder manuellement.
        const eventData = await eventManager.getFunction("getEvent").staticCall(1);

        // Décoder manuellement les données.
        const [retrievedTitle, retrievedDescription, retrievedDate, retrievedLocation, retrievedOrganizer, retrievedTicketPrice] = eventData;

        // Vérifier les détails de l'événement.
        assert.equal(retrievedTitle, title);
        assert.equal(retrievedDescription, description);
        assert.equal(retrievedDate.toString(), date.toString());
        assert.equal(retrievedLocation, location);
        assert.equal(retrievedOrganizer, signer.address);
        assert.equal(retrievedTicketPrice.toString(), ticketPrice.toString());

        // Vérifier que le compteur d'événements a été incrémenté
        assert.equal(await eventManager.eventCount(), BigInt(1));

        // Vérifier que le solde de l'organisateur a diminué (frais de gas).
        const signerBalanceAfter = await ethers.provider.getBalance(signer.address);
        expect(signerBalanceAfter).to.be.lt(signerBalanceBefore);
    });
});
