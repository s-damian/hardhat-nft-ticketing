import React from "react";
import { formatEther } from "viem";
import { useBalance } from "wagmi";

interface BalanceDisplayProps {
    address: string | undefined;
}

const BalanceDisplay: React.FC<BalanceDisplayProps> = ({ address }) => {
    const { data: balance } = useBalance({ address: address as `0x${string}` });

    if (!balance) return null;
    // Convertir la balance en chaîne de caractères en utilisant `formatEther`.
    const balanceInETH = formatEther(balance.value);

    return (
        <span title={`${balanceInETH} ${balance.symbol}`}>
            {parseFloat(balanceInETH).toFixed(4)} {balance.symbol}
        </span>
    );
};

export default BalanceDisplay;
