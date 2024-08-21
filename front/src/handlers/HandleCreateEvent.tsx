import { parseEther } from "viem";
import { toast } from "react-toastify";
import { writeContract } from "@wagmi/core";
import { config } from "../../config/wagmi-config";
import EventManagerABI from "../../../artifacts/contracts/EventManager.sol/EventManager.json";

const EVENT_MANAGER_ADDRESS = process.env.NEXT_PUBLIC_EVENT_MANAGER_ADDRESS as `0x${string}`;

export const handleCreateEvent = async (
    e: React.FormEvent,
    title: string,
    description: string,
    date: string,
    time: string,
    location: string,
    ticketPrice: string,
    address: `0x${string}`,
    resetForm: () => void,
) => {
    e.preventDefault();

    try {
        const dateTime = new Date(`${date}T${time}`).getTime() / 1000;
        const price = parseEther(ticketPrice);

        const hash = await writeContract(config, {
            address: EVENT_MANAGER_ADDRESS,
            abi: EventManagerABI.abi,
            functionName: "createEvent",
            args: [title, description, BigInt(dateTime), location, price],
            account: address,
        });

        toast.success("Événement créé avec succès !");
        console.log(`Transaction hash: ${hash}`);

        resetForm();
    } catch (err) {
        toast.error("Échec de la création de l'événement.");
        console.error("Failed to create event.", err);
    }
};
