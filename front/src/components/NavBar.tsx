import React from "react";
import Link from "next/link";
import { ConnectKitButton } from "connectkit";
import { useAccount, useBalance } from "wagmi";
import { formatEther } from "viem";

const NavBar: React.FC = () => {
    const { address, isConnected } = useAccount();
    const { data: balance } = useBalance({ address });

    return (
        <nav className="bg-blue-700 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <ul className="flex justify-around items-center list-none p-0 m-0 w-full">
                    <li>
                        <Link href="/" className="text-white no-underline p-2 hover:text-yellow-300">
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link href="/create-event" className="text-white no-underline p-2 hover:text-yellow-300">
                            Créer un Événement
                        </Link>
                    </li>
                    <li>
                        <Link href="/list-events" className="text-white no-underline p-2 hover:text-yellow-300">
                            Liste des Événements
                        </Link>
                    </li>
                    <li>
                        <Link href="/verify-nft" className="text-white no-underline p-2 hover:text-yellow-300">
                            Vérifier un NFT
                        </Link>
                    </li>
                    <li className="ml-auto text-white pr-2">
                        {isConnected && balance ? (
                            <span>
                                {parseFloat(formatEther(balance.value)).toFixed(4)} {balance.symbol}
                            </span>
                        ) : null}
                    </li>
                    <li>
                        <ConnectKitButton />
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
