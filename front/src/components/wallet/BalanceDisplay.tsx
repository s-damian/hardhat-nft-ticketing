import React from "react";
import { formatEther } from "viem";
import { useBalance } from "wagmi";

interface BalanceDisplayProps {
    address: string | undefined;
}

const BalanceDisplay: React.FC<BalanceDisplayProps> = ({ address }) => {
    const { data: balance } = useBalance({ address: address as `0x${string}` });

    if (!balance) return null;

    return (
        <>
            {parseFloat(formatEther(balance.value)).toFixed(4)} {balance.symbol}
        </>
    );
};

export default BalanceDisplay;
