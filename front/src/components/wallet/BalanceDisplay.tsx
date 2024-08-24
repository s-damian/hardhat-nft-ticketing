import React from "react";
import { formatEther } from "viem";
import { useBalance, useAccount } from "wagmi";

const BalanceDisplay: React.FC = () => {
    const { address, isConnected } = useAccount();
    const { data: balance } = useBalance({ address });

    if (!isConnected || !balance) return null;

    const balanceInETH = formatEther(balance.value);

    return (
        <span title={`${balanceInETH} ${balance.symbol}`}>
            {parseFloat(balanceInETH).toFixed(4)} {balance.symbol}
        </span>
    );
};

export default BalanceDisplay;
