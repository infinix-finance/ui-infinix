/* istanbul ignore file */
import { Box, Button, Divider } from "@mui/material";

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
import { useClearingHouse } from "@/hooks/contracts";
import { Directions } from "@/defi/Directions";
import { getIsQuoteSet } from "./TradingSidebar.slice";
import useTokenBalanceUpdate from "../useTokenBalanceUpdate";

export const TradingSidebar = () => {
  const { amounts, direction, slippage, leverage } = useStore(
    (state) => state.tradingSidebar
  );
  const { id, quoteAsset } = useStore((state) => state.amm);
  const { openPosition, loading } = useClearingHouse();
  const { updateBalance } = useTokenBalanceUpdate();
  const isQuoteSet = useStore(getIsQuoteSet);

  const handleOpenPosition = async () => {
    const quoteValue = amounts.quoteValue.toString();
    const side =
      direction === Directions.Long
        ? 0
        : direction === Directions.Short
        ? 1
        : -1;

    // making sure balance gets updated afterwards
    openPosition(id, quoteAsset, side, quoteValue, leverage, slippage).then(
      () => updateBalance()
    );
  };

  return (
    <Box sx={containerStyle}>
      <DirectionSelector />
      <Box sx={innerContainerStyle}>
        <Box sx={contentStyle}>
          <AssetAmount />
          <LeverageSelector />
          <PriceDetails />
          <SlippageEditor />
          <Button
            variant={direction}
            onClick={handleOpenPosition}
            disabled={loading || !isQuoteSet}
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
