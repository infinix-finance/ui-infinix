import { useEffect } from "react";

import { useStore } from "@/stores/root";
import { useERC20 } from "@/hooks/contracts";

export default function useTokenBalanceUpdate() {
  const { setBalance } = useStore((state) => state.tradingSidebar);
  const { getTokenBalance } = useERC20();

  useEffect(() => {
    const updateBalance = async () => {
      // TODO: Only for testing, address should be repalced with quoteAsset
      const result = await getTokenBalance(
        "0x9983F755Bbd60d1886CbfE103c98C272AA0F03d6"
      );
      result && setBalance(result);
    };
    updateBalance();
  }, [getTokenBalance, setBalance]);
}
