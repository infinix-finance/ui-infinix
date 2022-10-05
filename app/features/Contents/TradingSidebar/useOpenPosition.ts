import { useEffect } from "react";

import { Directions } from "@/defi/Directions";
import { useClearingHouse, useToken } from "@/hooks/contracts";
import { useStore } from "@/stores/root";

export default function useOpenPosition() {
  const { chainId } = useStore((state) => state.connection);
  const { amounts, direction, slippage, leverage } = useStore(
    (state) => state.tradingSidebar
  );
  const { id } = useStore((state) => state.amm);
  const { openPosition, loading } = useClearingHouse();
  const { getTokenBalance } = useToken();

  const handleOpenPosition = () => {
    const quoteValue = amounts.quoteValue.toString();
    const side =
      direction === Directions.Long
        ? 0
        : direction === Directions.Short
        ? 1
        : -1;

    // making sure balance gets updated afterwards
    openPosition(
      id,
      side,
      quoteValue,
      leverage,
      amounts.baseValue.multipliedBy(slippage).toString()
    ).then(getTokenBalance);
  };

  useEffect(() => {
    getTokenBalance();
  }, [chainId, getTokenBalance]);

  return {
    handleOpenPosition,
    loading,
  };
}
