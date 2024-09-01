import { parseEther } from "viem";
import { toast } from "react-toastify";
import { writeContract, waitForTransactionReceipt } from "@wagmi/core";
import { config } from "../../config/wagmi-config";
import { EVENT_MANAGER_ABI, EVENT_MANAGER_CONTRACT_ADDRESS } from "../../config/contracts";

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
            abi: EVENT_MANAGER_ABI,
            address: EVENT_MANAGER_CONTRACT_ADDRESS,
            functionName: "createEvent",
            args: [title, description, BigInt(dateTime), location, price],
            account: address,
        });

        const transactionReceipt = await waitForTransactionReceipt(config, {
            confirmations: 2,
            hash: hash,
        });

        console.log("transactionReceipt : ", transactionReceipt);

        toast.success("Event created successfully (with 2 confirmations)!");
        console.log(`Transaction Hash: ${hash}`);

        resetForm();
    } catch (err) {
        toast.error("Failed to create event.");
        console.error("Failed to create event.", err);
    }
};
