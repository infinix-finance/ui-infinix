/* istanbul ignore file */
import { Box, Button, Divider } from "@mui/material";
import { useEffect } from "react";

import { DirectionSelector } from "./DirectionSelector";
import { AccountDetails } from "./AccountDetails";
import { AssetAmount } from "./AssetAmount";
import { LeverageSelector } from "./LeverageSelector";
import { PriceDetails } from "./PriceDetails";
import { SlippageEditor } from "./SlippageEditor";

import {
  innerContainerStyle,
  containerStyle,
  contentStyle,
  dividerStyle,
} from "./TradingSidebar.styles";
import { useStore } from "@/stores/root";
import { useClearingHouse, useERC20 } from "@/hooks/contracts";
// import { getIsQuoteSet } from "./TradingSidebar.slice";

export const TradingSidebar = () => {
  const { direction, setBalance } = useStore((state) => state.tradingSidebar);
  const { openPosition, loading } = useClearingHouse();
  const { getTokenBalance } = useERC20();
  // const isQuoteSet = useStore(getIsQuoteSet);

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

  return (
    <Box sx={containerStyle}>
      <DirectionSelector />
      <Box sx={innerContainerStyle}>
        <Box sx={contentStyle}>
          <AssetAmount />
          <LeverageSelector />
          <PriceDetails />
          <SlippageEditor />
          {/* TODO: Only for testing, replace with real values later */}
          <Button
            variant={direction}
            onClick={() =>
              openPosition(
                "0xe5639cbb02ec3bd65c77e128b0c7350aeefb2bd1",
                "0xed0748d0c60d587fd26f830c786d1f7ab8204b0a",
                0,
                "100",
                "2",
                "0"
              )
            }
            disabled={loading /*!isQuoteSet*/}
          >
            Confirm {direction}
          </Button>
        </Box>
        <Divider sx={dividerStyle} />
        <AccountDetails />
      </Box>
    </Box>
  );
};
