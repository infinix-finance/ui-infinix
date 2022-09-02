/* istanbul ignore file */
import { Box, Button, Divider } from "@mui/material";

import { AccountDetails } from "./AccountDetails";
import { AssetAmount } from "./AssetAmount";
import { LeverageSelector } from "./LeverageSelector";
import { PriceDetails } from "./PriceDetails";
import { SlippageEditor } from "./SlippageEditor";

import {
  containerStyle,
  contentStyle,
  dividerStyle,
} from "./TradingSidebar.styles";

export const TradingSidebar = () => {
  return (
    <Box sx={containerStyle}>
      <Box sx={contentStyle}>
        <AssetAmount />
        <LeverageSelector />
        <PriceDetails />
        <SlippageEditor />
        <Button variant="long">Confirm long</Button>
      </Box>
      <Divider sx={dividerStyle} />
      <AccountDetails />
    </Box>
  );
};
