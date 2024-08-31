import { assert, expect } from "chai";
import { ethers } from "hardhat";
import { EventManager } from "../typechain-types";
import { SignerWithAddress } from "@nomicfoundation/hardhat-ethers/signers";

describe("EventManager", function () {
    let eventManager: EventManager;
    let signer: SignerWithAddress;
    let otherSigner: SignerWithAddress;

    const EVENT_DETAILS = {
        title: "Event A",
        description: "Description of Event A",
        date: BigInt(1629504000), // August 21, 2021 12:00:00 AM
        location: "Paris",
        ticketPrice: ethers.parseEther("0.1"),
    };

    beforeEach(async function () {
        // Obtenir le signataire par défaut (utilisé pour le déploiement et les transactions).
        // Dans Hardhat, le 1er signataire (index 0) est généralement celui qui déploie les contrats et effectue les transactions par défaut.
        //signer = await ethers.provider.getSigner(0);
        // Hardhat, par défaut, génère 20 comptes Ethereum, chacun avec une quantité généreuse d'ETH.
        // Cela nous permet de simuler différents acteurs dans nos tests.
        [signer, otherSigner] = await ethers.getSigners();

        const EventManagerFactory = await ethers.getContractFactory("EventManager");
        eventManager = await EventManagerFactory.deploy();
        await eventManager.waitForDeployment();
    });

    // SUCCESS create_event
    it("Create an event", async function () {
        const organizer = signer;

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
        console.log("createEvent - Transaction Hash:", createEventTx.hash); // Afficher le hash de la transaction.

        // Récupérer l'événement par ID.
        //const event = await eventManager.getEvent(1);
        // Récupérer l'événement par ID en utilisant l'ABI pour décoder manuellement.
        const eventData = await eventManager.getFunction("getEvent").staticCall(1);

        // Vérifier les détails de l'événement.
        assert.equal(eventData.title, EVENT_DETAILS.title);
        assert.equal(eventData.description, EVENT_DETAILS.description);
        assert.equal(eventData.date.toString(), EVENT_DETAILS.date.toString());
        assert.equal(eventData.location, EVENT_DETAILS.location);
        assert.equal(eventData.organizer, organizer.address);
        assert.equal(eventData.ticketPrice.toString(), EVENT_DETAILS.ticketPrice.toString());

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

    // SUCCESS create_event - Create 3 events.
    it("Should create multiple events and increment event count correctly", async function () {
        for (let i = 1; i <= 3; i++) {
            await eventManager.createEvent(`Event ${i}`, `Description ${i}`, EVENT_DETAILS.date, EVENT_DETAILS.location, EVENT_DETAILS.ticketPrice);
            assert.equal(await eventManager.eventCount(), BigInt(i));

            const eventData = await eventManager.getFunction("getEvent").staticCall(i);
            assert.equal(eventData.title, `Event ${i}`);
            assert.equal(eventData.description, `Description ${i}`);
        }

        // Vérifier que le compteur d'événements a été incrémenté
        assert.equal(await eventManager.eventCount(), BigInt(3));
    });

    // ERROR create_event
    it("Should fail to retrieve a non-existent event", async function () {
        const eventData = await eventManager.getFunction("getEvent").staticCall(999);

        assert.equal(eventData.title, "");
        assert.equal(eventData.description, "");
        assert.equal(eventData.date, 0n);
        assert.equal(eventData.location, "");
        assert.equal(eventData.organizer, ethers.ZeroAddress);
        assert.equal(eventData.ticketPrice, 0n);
    });
});
