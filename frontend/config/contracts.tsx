import EventManagerABI from "../../artifacts/contracts/EventManager.sol/EventManager.json";

// ABIs:
export const EVENT_MANAGER_ABI = EventManagerABI.abi;

// Contracts:
export const EVENT_MANAGER_CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_EVENT_MANAGER_CONTRACT_ADDRESS as `0x${string}`;
