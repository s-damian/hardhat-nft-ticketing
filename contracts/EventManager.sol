// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract EventManager {
    uint256 public eventCount;

    // Structure de données pour un événement.
    struct Event {
        string title;
        string description;
        int64 date;
        string location;
        address organizer;
        uint256 ticketPrice; // Valeur en Wei. PS: 1 ETH = 10^18 Wei. 1 ETH = 1 ETH = 1 000 000 000 000 000 000 Wei (18 zéros).
    }

    // Mapping pour stocker les événements par ID
    mapping(uint256 => Event) public events;

    // Événement émis lors de la création d'un événement.
    event EventCreated(uint256 eventId, string title, string description, int64 date, string location, address indexed organizer, uint256 ticketPrice);

    // Fonction pour créer un nouvel événement.
    function createEvent(string memory title, string memory description, int64 date, string memory location, uint256 ticketPrice) public {
        // Incrémente le compteur d'événements pour générer un nouvel ID
        eventCount++;

        // Crée un nouvel événement et le stocke dans le mapping.
        events[eventCount] = Event(
            title,
            description,
            date,
            location,
            msg.sender, // L'organisateur est l'adresse qui appelle la fonction.
            ticketPrice
        );

        // Émet l'événement EventCreated.
        emit EventCreated(eventCount, title, description, date, location, msg.sender, ticketPrice);
    }

    // Fonction pour récupérer un événement par son ID.
    function getEvent(uint256 eventId) public view returns (Event memory) {
        return events[eventId];
    }
}
