import { assert, expect } from "chai";
import { ethers } from "hardhat";
import { EventManager } from "../typechain-types";
import { SignerWithAddress } from "@nomicfoundation/hardhat-ethers/signers";

describe("EventManager", function () {
    let eventManager: EventManager;
    let organizer: SignerWithAddress;
    //let otherAccount: SignerWithAddress;

    const EVENT_DETAILS = {
        title: "Event A",
        description: "Description of Event A",
        date: BigInt(1629504000), // August 21, 2021 12:00:00 AM
        location: "Paris",
        ticketPrice: ethers.parseEther("0.1"),
    };

    beforeEach(async function () {
        // Obtenir le signataire par défaut (utilisé pour le déploiement et les transactions).
        // PS : Dans Hardhat, le premier signataire (index 0) est généralement celui qui déploie les contrats et effectue les transactions par défaut.
        organizer = await ethers.provider.getSigner(0);
        //[organizer, otherAccount] = await ethers.getSigners();

        const EventManagerFactory = await ethers.getContractFactory("EventManager");
        eventManager = await EventManagerFactory.deploy();
        await eventManager.waitForDeployment();
    });

    // SUCCESS create_event
    it("Create an event", async function () {
        // Capturer le solde de l'organisateur avant la création de l'événement.
        const organizerBalanceBefore = await ethers.provider.getBalance(organizer.address);

        // Créer un événement.
        const createEventTx = await eventManager.createEvent(
            EVENT_DETAILS.title,
            EVENT_DETAILS.description,
            EVENT_DETAILS.date,
            EVENT_DETAILS.location,
            EVENT_DETAILS.ticketPrice,
        );
        console.log("createEvent - tx signature", createEventTx.hash); // Afficher le hash de la transaction.

        // Récupérer l'événement par ID.
        //const event = await eventManager.getEvent(1);
        // Récupérer l'événement par ID en utilisant l'ABI pour décoder manuellement.
        const eventData = await eventManager.getFunction("getEvent").staticCall(1);

        console.log("eventData 1 :");
        console.log(eventData);

        // Décoder manuellement les données.
        const [retrievedTitle, retrievedDescription, retrievedDate, retrievedLocation, retrievedOrganizer, retrievedTicketPrice] = eventData;

        // Vérifier les détails de l'événement.
        assert.equal(retrievedTitle, EVENT_DETAILS.title);
        assert.equal(retrievedDescription, EVENT_DETAILS.description);
        assert.equal(retrievedDate.toString(), EVENT_DETAILS.date.toString());
        assert.equal(retrievedLocation, EVENT_DETAILS.location);
        assert.equal(retrievedOrganizer, organizer.address);
        assert.equal(retrievedTicketPrice.toString(), EVENT_DETAILS.ticketPrice.toString());

        // Vérifier que le compteur d'événements a été incrémenté
        assert.equal(await eventManager.eventCount(), BigInt(1));

        // Vérifier l'émission de l'événement EventCreated
        await expect(createEventTx)
            .to.emit(eventManager, "EventCreated")
            .withArgs(
                1,
                EVENT_DETAILS.title,
                EVENT_DETAILS.description,
                EVENT_DETAILS.date,
                EVENT_DETAILS.location,
                organizer.address,
                EVENT_DETAILS.ticketPrice,
            );

        // Vérifier que le solde de l'organisateur a diminué (frais de gas).
        const organizerBalanceAfter = await ethers.provider.getBalance(organizer.address);
        expect(organizerBalanceAfter).to.be.lt(organizerBalanceBefore);
    });

    // ERROR create_event
    it("Should fail to retrieve a non-existent event", async function () {
        const eventData = await eventManager.getFunction("getEvent").staticCall(999);

        expect(eventData.title).to.equal("");
        expect(eventData.description).to.equal("");
        expect(eventData.date).to.equal(0n);
        expect(eventData.location).to.equal("");
        expect(eventData.organizer).to.equal(ethers.ZeroAddress);
        expect(eventData.ticketPrice).to.equal(0n);
    });
});
