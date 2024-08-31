import { parseEther } from "viem";
import { toast } from "react-toastify";
import { writeContract } from "@wagmi/core";
import { config } from "../../config/wagmi-config";
import { EVENT_MANAGER_CONTRACT_ADDRESS, EVENT_MANAGER_ABI } from "../../config/contracts";

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
            address: EVENT_MANAGER_CONTRACT_ADDRESS,
            abi: EVENT_MANAGER_ABI,
            functionName: "createEvent",
            args: [title, description, BigInt(dateTime), location, price],
            account: address,
        });

        toast.success("Événement créé avec succès !");
        console.log(`Transaction Hash: ${hash}`);

        resetForm();
    } catch (err) {
        toast.error("Échec de la création de l'événement.");
        console.error("Failed to create event.", err);
    }
};
