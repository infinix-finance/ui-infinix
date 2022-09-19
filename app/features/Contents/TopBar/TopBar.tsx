import { Box } from "@mui/material";

import { Select } from "@/components";
import useTopBar from "./useTopBar";
import { CountdownLabel, TooltipLabel, VolumeLabel } from "./Labels";

import {
  containerStyle,
  dropdownContainerStyle,
  selectStyle,
} from "./TopBar.styles";

export const TopBar = () => {
  const {
    rates,
    mostRecentPositionPrice,
    priceValues,
    marketDropdownProps,
    pairDropdownProps,
    handleMarketChange,
    handlePairChange,
  } = useTopBar();

  return (
    <Box sx={containerStyle}>
      <Box sx={dropdownContainerStyle}>
        <Select
          sx={selectStyle}
          value={rates.market}
          setValue={handleMarketChange}
          {...marketDropdownProps}
        />
        <Select
          sx={selectStyle}
          value={rates.pair}
          setValue={handlePairChange}
          {...pairDropdownProps[rates.market]}
        />
      </Box>
      <TooltipLabel label="Entry Price" value={mostRecentPositionPrice} />
      <TooltipLabel label="Mark Price" value={priceValues.markPrice} />
      <TooltipLabel label="Index Price" value={priceValues.indexPrice} />
      <TooltipLabel label="Funding" value={priceValues.fundingRate} />
      <VolumeLabel value={priceValues.totalVolume} />
      <CountdownLabel startMillis={priceValues.countDownMillis} />
    </Box>
  );
};
