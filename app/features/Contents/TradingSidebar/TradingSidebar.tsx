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
import { getIsQuoteSet } from "./TradingSidebar.slice";
import useOpenPosition from "./useOpenPosition";

export const TradingSidebar = () => {
  const { loading } = useClearingHouse();
  const { handleOpenPosition } = useOpenPosition();
  const { direction } = useStore((state) => state.tradingSidebar);
  const isQuoteSet = useStore(getIsQuoteSet);

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
