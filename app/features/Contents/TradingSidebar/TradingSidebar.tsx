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
import { getIsQuoteSet } from "./TradingSidebar.slice";
import { capitalize } from "@/utils/formatters";

export const TradingSidebar = () => {
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
          <Button variant={direction} disabled={!isQuoteSet}>
            Confirm {capitalize(direction)}
          </Button>
        </Box>
        <Divider sx={dividerStyle} />
        <AccountDetails />
      </Box>
    </Box>
  );
};
